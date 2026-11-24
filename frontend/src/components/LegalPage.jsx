import InteriorLayout from "./InteriorLayout";
import Reveal from "./Reveal";
import "../legal.css";

// Groups a section's lines into paragraphs, small sub-headings and bullet lists:
// a line ending in ":" introduces a list of the short lines that follow it.
function toBlocks(items) {
  const blocks = [];
  let list = null;
  items.forEach((it, i) => {
    const next = items[i + 1] || "";
    const isSub = !/[.:!?)]$/.test(it) && it.length < 48 && next.endsWith(":");
    if (isSub) { list = null; blocks.push({ t: "sub", v: it }); return; }
    const closing = /^(We|This|All|You|When|Although|Please|If|To exercise|Customers|Nothing|No content|Updated|Your)\b/.test(it) && it.length > 40;
    if (list && it.length < 90 && !it.endsWith(":") && !closing) { list.v.push(it); return; }
    list = null;
    blocks.push({ t: "p", v: it });
    if (it.endsWith(":")) { list = { t: "ul", v: [] }; blocks.push(list); }
  });
  return blocks.filter((b) => b.t !== "ul" || b.v.length);
}

const slug = (s, i) => `s${i + 1}-` + s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

export default function LegalPage({ title, breadcrumb, intro = [], sections, insta, testId }) {
  const go = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (window.__lenis && el) window.__lenis.scrollTo(el, { offset: -110 });
    else el?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <InteriorLayout insta={insta} breadcrumb={breadcrumb}>
      <section className="lg-hero" data-testid={testId}>
        <div className="wrap">
          <Reveal dir="up">
            <span className="lg-eyebrow">&#10022; Legal</span>
            <h1>{title}</h1>
            {intro.map((p, i) => <p className="lg-lede" key={i}>{p}</p>)}
            <span className="lg-meta">{sections.length} sections &middot; The Brioche Team</span>
          </Reveal>
        </div>
      </section>

      <section className="lg-body">
        <div className="wrap lg-grid">
          <aside className="lg-toc" aria-label="Contents">
            <span className="lg-toc-title">Contents</span>
            <ol>
              {sections.map((s, i) => (
                <li key={i}>
                  <a href={`#${slug(s.h, i)}`} onClick={(e) => go(e, slug(s.h, i))}>
                    <span>{String(i + 1).padStart(2, "0")}</span>{s.h}
                  </a>
                </li>
              ))}
            </ol>
          </aside>

          <div className="lg-sheet">
            {sections.map((s, i) => (
              <article className="lg-sec" id={slug(s.h, i)} key={i}>
                <span className="lg-num">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <h2>{s.h}</h2>
                  {toBlocks(s.items).map((b, j) =>
                    b.t === "ul" ? (
                      <ul key={j}>{b.v.map((x, k) => <li key={k}>{x}</li>)}</ul>
                    ) : b.t === "sub" ? (
                      <h3 key={j}>{b.v}</h3>
                    ) : (
                      <p key={j}>{b.v}</p>
                    )
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </InteriorLayout>
  );
}
