/**
 * Post-install fix for a known dependency conflict in react-scripts 5 / CRACO builds.
 *
 * Two different parts of the build toolchain need two different major versions
 * of `ajv` at once (webpack's terser plugin needs ajv v8 via ajv-keywords@5,
 * while fork-ts-checker-webpack-plugin needs ajv v6 via an older ajv-keywords).
 * npm sometimes hoists a single `ajv` that satisfies only one of them, which
 * makes `npm run build` crash with "Unknown keyword" or "MODULE_NOT_FOUND"
 * errors coming from ajv-keywords.
 *
 * Fix: give the top-level `ajv-keywords` package (the one that needs ajv v8)
 * its own private copy of ajv v8, without touching the shared/hoisted ajv
 * that everything else (eslint, fork-ts-checker, etc.) already relies on.
 *
 * Important: we do NOT run `npm install` directly inside node_modules/ajv-keywords.
 * ajv-keywords ships its own package.json (with its own devDependencies for
 * its test suite — jest, typescript, eslint, husky, etc.), and npm resolves
 * against whatever package.json it finds in the current working directory.
 * Running `npm install ajv@x` there pulls in that entire devDependency tree
 * as a side effect, bloating node_modules and slowing every install/build.
 * Instead we install ajv in an isolated scratch directory (its own throwaway
 * package.json, nothing else nearby for npm to resolve against) and copy
 * just the resulting `ajv` package into place.
 */
const { execSync } = require("child_process");
const path = require("path");
const fs = require("fs");
const os = require("os");

const targetDir = path.join(__dirname, "..", "node_modules", "ajv-keywords");
const nestedAjvPkg = path.join(targetDir, "node_modules", "ajv", "package.json");

if (!fs.existsSync(targetDir)) {
  // ajv-keywords isn't installed (unexpected layout) — nothing to patch.
  process.exit(0);
}

if (fs.existsSync(nestedAjvPkg)) {
  // Already patched.
  process.exit(0);
}

let scratch;
try {
  scratch = fs.mkdtempSync(path.join(os.tmpdir(), "fix-ajv-"));
  fs.writeFileSync(path.join(scratch, "package.json"), JSON.stringify({ name: "fix-ajv-scratch", version: "0.0.0", private: true }));

  execSync("npm install ajv@8.17.1 --no-save --no-package-lock --no-audit --no-fund --omit=dev", {
    cwd: scratch,
    stdio: "inherit",
  });

  const builtAjv = path.join(scratch, "node_modules", "ajv");
  const destDir = path.join(targetDir, "node_modules");
  fs.mkdirSync(destDir, { recursive: true });
  fs.cpSync(builtAjv, path.join(destDir, "ajv"), { recursive: true });

  console.log("[fix-ajv] Patched ajv-keywords with its own ajv@8.17.1 copy.");
} catch (err) {
  console.warn("[fix-ajv] Could not apply ajv patch automatically:", err.message);
  console.warn("[fix-ajv] If `npm run build` fails with an ajv-keywords error, run:");
  console.warn("  cd node_modules/ajv-keywords && npm install ajv@8.17.1 --no-save");
} finally {
  if (scratch) {
    try { fs.rmSync(scratch, { recursive: true, force: true }); } catch (_) { /* best effort cleanup */ }
  }
}
