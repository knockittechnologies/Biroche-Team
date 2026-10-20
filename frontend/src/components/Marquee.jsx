// Slow editorial marquee. items: array of strings.
// Uses a plain CSS @keyframes animation (see .marquee-track / @keyframes marquee-scroll
// in brioche.css) rather than a JS-driven loop, so the scroll can never silently stall.
export default function Marquee({ items, onOrange = false, duration = 26 }) {
  const loop = [...items, ...items];
  return (
    <div className={`marquee ${onOrange ? "on-orange" : ""}`} data-testid="brand-marquee">
      <div className="marquee-track" style={{ animationDuration: `${duration}s` }}>
        {loop.map((it, i) => (
          <span className="marquee-item" key={i}>
            {it}
            <span className="dot" />
          </span>
        ))}
      </div>
    </div>
  );
}
