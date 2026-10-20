import { useEffect, useRef, useState } from "react";

// Renders the brioche-bites assembly sequence as a <canvas> and scrubs
// through its frames as the visitor scrolls, instead of autoplaying on a
// timer: scroll down plays it forward, scroll up reverses it.
const FRAME_COUNT = 240;
const framePath = (i) => `/brioche/hero/frames/frame-${String(i + 1).padStart(3, "0")}.webp`;

export default function ScrollScrubStage({ progress, posterSrc, className }) {
  const canvasRef = useRef(null);
  const imagesRef = useRef([]);
  const targetIndexRef = useRef(0);
  const drawnIndexRef = useRef(-1);
  const [firstFrameReady, setFirstFrameReady] = useState(false);

  useEffect(() => {
    let cancelled = false;

    const draw = (idx) => {
      const canvas = canvasRef.current;
      const img = imagesRef.current[idx];
      if (!canvas || !img || !img.complete || !img.naturalWidth) return false;
      const ctx = canvas.getContext("2d");
      if (canvas.width !== img.naturalWidth) {
        canvas.width = img.naturalWidth;
        canvas.height = img.naturalHeight;
      }
      // frames are transparent cutouts, so wipe the previous frame first —
      // otherwise old pieces stay on the canvas and pile up as ghost images
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, 0, 0);
      drawnIndexRef.current = idx;
      return true;
    };

    const renderTarget = () => {
      const target = targetIndexRef.current;
      if (target === drawnIndexRef.current) return;
      if (draw(target)) return;
      // Exact frame not downloaded yet — show the nearest frame that is,
      // so the canvas is never blank while the sequence streams in.
      for (let d = 1; d < FRAME_COUNT; d++) {
        const lo = target - d;
        const hi = target + d;
        if (lo >= 0 && draw(lo)) return;
        if (hi < FRAME_COUNT && draw(hi)) return;
      }
    };

    const imgs = [];
    for (let i = 0; i < FRAME_COUNT; i++) {
      const img = new Image();
      img.decoding = "async";
      img.onload = () => {
        if (cancelled) return;
        if (i === 0) setFirstFrameReady(true);
        renderTarget();
      };
      img.src = framePath(i);
      imgs.push(img);
    }
    imagesRef.current = imgs;

    const unsub = progress.on("change", (v) => {
      const idx = Math.min(FRAME_COUNT - 1, Math.max(0, Math.round(v * (FRAME_COUNT - 1))));
      targetIndexRef.current = idx;
      renderTarget();
    });

    targetIndexRef.current = Math.min(
      FRAME_COUNT - 1,
      Math.max(0, Math.round(progress.get() * (FRAME_COUNT - 1)))
    );
    renderTarget();

    return () => {
      cancelled = true;
      unsub();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [progress]);

  return (
    <div className="hero-scrub-wrap">
      {!firstFrameReady && posterSrc && (
        <img src={posterSrc} alt="" className={`${className} hero-scrub-poster`} />
      )}
      <canvas ref={canvasRef} className={className} data-testid="hero-video" />
    </div>
  );
}
