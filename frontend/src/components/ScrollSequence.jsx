import { useEffect, useRef } from "react";
import { ChevronDown } from "lucide-react";
import "../anim.css";

const N = 150;
const PATHS = Array.from({ length: N }, (_, i) => `/brioche/anim/f${String(i).padStart(3, "0")}.webp`);

/**
 * High-resolution scroll-scrubbed image sequence (Apple-style).
 * - Frames advance as the user scrolls through the tall section.
 * - When the user pauses inside the section, it gently auto-plays the loop.
 */
export default function ScrollSequence() {
  const sectionRef = useRef(null);
  const canvasRef = useRef(null);
  const barRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const W = 720, H = 404;
    canvas.width = W * dpr;
    canvas.height = H * dpr;

    const images = new Array(N);
    let loaded = 0;
    let current = 0;
    let inView = false;
    let lastScroll = performance.now();
    let rafId;

    const draw = (idx) => {
      idx = Math.max(0, Math.min(N - 1, Math.round(idx)));
      let img = images[idx];
      // fall back to nearest already-loaded frame
      if (!img || !img.complete) {
        for (let d = 1; d < N; d++) {
          const a = images[idx - d], b = images[idx + d];
          if (a && a.complete) { img = a; break; }
          if (b && b.complete) { img = b; break; }
        }
      }
      if (img && img.complete) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      }
    };

    PATHS.forEach((src, i) => {
      const im = new Image();
      im.src = src;
      im.onload = () => {
        loaded++;
        if (i === 0) draw(0);
      };
      images[i] = im;
    });

    const getProgress = () => {
      const el = sectionRef.current;
      if (!el) return 0;
      const rect = el.getBoundingClientRect();
      const total = el.offsetHeight - window.innerHeight;
      if (total <= 0) return 0;
      const scrolled = Math.min(Math.max(-rect.top, 0), total);
      return scrolled / total;
    };

    const tick = () => {
      if (inView) {
        const idle = performance.now() - lastScroll > 1400;
        if (idle) {
          // gentle auto-play loop
          current += 0.65;
          if (current > N - 1) current = 0;
        } else {
          const target = getProgress() * (N - 1);
          current += (target - current) * 0.14;
        }
        draw(current);
        if (barRef.current) barRef.current.style.width = `${(current / (N - 1)) * 100}%`;
      }
      rafId = requestAnimationFrame(tick);
    };
    rafId = requestAnimationFrame(tick);

    const onScroll = () => { lastScroll = performance.now(); };
    window.addEventListener("scroll", onScroll, { passive: true });

    const io = new IntersectionObserver(
      (entries) => { inView = entries[0].isIntersecting; },
      { threshold: 0 }
    );
    io.observe(sectionRef.current);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", onScroll);
      io.disconnect();
    };
  }, []);

  return (
    <section ref={sectionRef} className="anim-section" style={{ height: "300vh" }} data-testid="scroll-sequence">
      <div className="anim-sticky">
        <div className="anim-head">
          <span className="a-eyebrow">✦ Freshly Made, Every Day</span>
          <h2>Watch it come together.</h2>
        </div>
        <canvas ref={canvasRef} className="anim-canvas" data-testid="sequence-canvas" />
        <div className="anim-progress"><span ref={barRef} /></div>
        <div className="anim-hint">
          Scroll to serve
          <ChevronDown className="chev" size={20} />
        </div>
      </div>
    </section>
  );
}
