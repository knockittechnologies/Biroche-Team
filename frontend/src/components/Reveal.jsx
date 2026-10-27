import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const dirMap = {
  up: { y: 48, x: 0 },
  left: { x: -56, y: 0 },
  right: { x: 56, y: 0 },
  none: { x: 0, y: 0 },
  // "pop" — a punchier entrance (used on Franchise for a more powerful feel):
  // rises further, scales up from noticeably smaller, with a tilt that
  // straightens out and a springy overshoot on the way in.
  pop: { y: 60, x: 0, scale: 0.78, rotate: -5 },
};

// Scroll-triggered reveal (fires once when entering viewport).
// `amplify` multiplies the dir offset for a stronger, more dramatic motion
// without touching the default feel used everywhere else in the site.
export default function Reveal({
  children,
  dir = "up",
  delay = 0,
  className = "",
  as = "div",
  amount = 0.2,
  amplify = 1,
  ...rest
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount, margin: "0px 0px -60px 0px" });
  const offset = dirMap[dir] || dirMap.up;
  const scaledOffset = { x: offset.x * amplify, y: offset.y * amplify };
  const hasScale = typeof offset.scale === "number";
  const hasRotate = typeof offset.rotate === "number";
  const MotionTag = motion[as] || motion.div;

  return (
    <MotionTag
      ref={ref}
      className={className}
      initial={{
        opacity: 0,
        ...scaledOffset,
        ...(hasScale ? { scale: offset.scale } : {}),
        ...(hasRotate ? { rotate: offset.rotate * amplify } : {}),
      }}
      animate={
        inView
          ? {
              opacity: 1,
              x: 0,
              y: 0,
              ...(hasScale ? { scale: 1 } : {}),
              ...(hasRotate ? { rotate: 0 } : {}),
            }
          : {}
      }
      transition={{
        duration: dir === "pop" ? 0.8 : 0.9,
        ease: dir === "pop" ? [0.34, 1.56, 0.64, 1] : [0.22, 0.61, 0.36, 1],
        delay,
      }}
      {...rest}
    >
      {children}
    </MotionTag>
  );
}
