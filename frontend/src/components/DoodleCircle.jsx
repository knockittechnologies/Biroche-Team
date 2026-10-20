import { motion, useInView } from "framer-motion";
import { useRef } from "react";

// A loose, hand-drawn circle/scribble that "draws itself" in when it
// scrolls into view — used to annotate a heading or CTA the way a marker
// would circle it on a printed page.
//
// shape="circle" (default) is the tight oval used around a heading/button.
// shape="frame" traces a wide, hand-drawn rounded-rectangle — for tracing
// around a whole card or image (e.g. the hero video) rather than a line of
// text. Both paths live in a viewBox that gets stretched non-uniformly
// (preserveAspectRatio="none") to whatever box the SVG is placed in, so the
// sketch always hugs the actual element regardless of its real aspect ratio.
const PATHS = {
  circle: {
    viewBox: "0 0 300 130",
    d: "M30,80 C22,40 72,10 152,8 C236,6 283,30 279,64 C275,99 213,123 136,121 C64,119 16,99 22,71 C27,51 56,23 121,13 C197,1 263,15 273,45 C281,69 253,91 192,101",
  },
  frame: {
    viewBox: "0 0 400 230",
    d: "M34,22 C26,10 55,6 95,5 C180,3 280,2 345,9 C372,12 384,22 382,42 C379,88 381,140 378,186 C376,208 352,216 310,219 C225,224 120,223 58,217 C28,214 16,203 18,180 C21,133 19,85 20,45 C21,28 30,16 58,12",
  },
};

export default function DoodleCircle({ className = "", color = "#fff", delay = 0, strokeWidth = 3, shape = "circle" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const { viewBox, d } = PATHS[shape] || PATHS.circle;

  return (
    <svg
      ref={ref}
      className={`doodle-circle ${className}`}
      viewBox={viewBox}
      preserveAspectRatio="none"
      fill="none"
      aria-hidden="true"
    >
      <motion.path
        d={d}
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={inView ? { pathLength: 1, opacity: 1 } : {}}
        transition={{ duration: 1.1, ease: [0.22, 0.61, 0.36, 1], delay }}
      />
    </svg>
  );
}
