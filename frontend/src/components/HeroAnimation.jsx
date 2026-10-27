import { useEffect, useRef } from "react";

const N = 150;
const PATHS = Array.from({ length: N }, (_, i) => `/brioche/hero-anim/f${String(i).padStart(3, "0")}.webp`);

/**
 * Auto-playing high-quality canvas animation loop for the landing hero.
 * Uses transparent WebP frames — sits on the peach hero background.
 */
export default function HeroAnimation() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = "high";
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const W = 800, H = 450;
    canvas.width = W * dpr;
    canvas.height = H * dpr;

    const images = new Array(N);
    let ready = false;
    let stopped = false;
    let idx = 0;
    let acc = 0;
    let last = performance.now();
    let rafId;

    const draw = (i) => {
      const img = images[i];
      if (img && img.complete && img.naturalWidth > 0) {
        try {
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        } catch (e) { /* skip broken frame */ }
      }
    };

    let loadedCount = 0;

    // Progressive frame loading: prioritise first frames so hero shows instantly
    const priority = new Set();
    for (let i = 0; i < 10; i++) priority.add(i); // first 10 for immediate playback
    for (let i = 10; i < N; i += 5) priority.add(i); // keyframes every 5

    const startImage = (i, src) => {
      const im = new Image();
      im.onload = () => {
        loadedCount++;
        if (i === 0) draw(0);
        if (loadedCount >= 10) ready = true; // start playback with first 10 available
      };
      im.onerror = () => { images[i] = null; };
      im.src = src;
      images[i] = im;
    };

    // load priority frames first
    PATHS.forEach((src, i) => { if (priority.has(i)) startImage(i, src); });
    // schedule the rest to load lazily (idle callback / setTimeout fallback)
    const rest = PATHS.map((s, i) => [s, i]).filter(([, i]) => !priority.has(i));
    const scheduleRest = () => {
      const idleFn = window.requestIdleCallback || ((cb) => setTimeout(cb, 200));
      rest.forEach(([src, i], k) => idleFn(() => startImage(i, src), { timeout: 500 + k * 25 }));
    };
    scheduleRest();

    const FPS = 16.7; // 60ms per frame originally

    const step = (now) => {
      const dt = now - last;
      last = now;
      if (ready && !stopped) {
        acc += dt;
        const advance = Math.floor(acc / (1000 / FPS));
        if (advance > 0) {
          idx = idx + advance;
          acc -= advance * (1000 / FPS);
          if (idx >= N - 1) {
            idx = N - 1; // clamp at last frame
            stopped = true;
          }
          const img = images[idx];
          if (img && img.complete && img.naturalWidth > 0) {
            try {
              ctx.clearRect(0, 0, canvas.width, canvas.height);
              ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
            } catch (e) { /* skip broken frame */ }
          }
        }
      }
      rafId = requestAnimationFrame(step);
    };
    rafId = requestAnimationFrame(step);

    return () => cancelAnimationFrame(rafId);
  }, []);

  return <canvas ref={canvasRef} className="hero-anim-canvas" data-testid="hero-animation" />;
}
