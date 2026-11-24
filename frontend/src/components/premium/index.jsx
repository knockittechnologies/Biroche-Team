import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import "../../premium.css";

const EASE = [0.22, 0.61, 0.36, 1];

// Headline whose words rise into place one after another; `accent` words are set in italic cream.
export function RevealTitle({ text, accent = [], as: Tag = "h1", className = "", delay = 0.3, inView = false }) {
  const words = text.split(" ");
  const anim = inView
    ? { initial: { y: "110%" }, whileInView: { y: "0%" }, viewport: { once: true, amount: 0.6 } }
    : { initial: { y: "110%" }, animate: { y: "0%" } };
  return (
    <Tag className={`pm-title ${className}`} aria-label={text}>
      {words.map((w, i) => (
        <span className="pm-word" key={i} aria-hidden="true">
          <motion.span {...anim} transition={{ duration: 0.9, delay: delay + i * 0.07, ease: EASE }}>
            {accent.includes(w.replace(/[.,]/g, "")) ? <em>{w}</em> : w}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}

export function FadeUp({ children, delay = 0, className = "", as = "div", inView = true }) {
  const M = motion[as];
  const p = inView
    ? { initial: { opacity: 0, y: 24 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, amount: 0.25 } }
    : { initial: { opacity: 0, y: 18 }, animate: { opacity: 1, y: 0 } };
  return <M className={className} {...p} transition={{ duration: 0.9, delay, ease: EASE }}>{children}</M>;
}

// Framed photo that drifts slightly as the page scrolls and unveils with a soft clip.
export function ParallaxFrame({ src, alt, className = "", range = 40, contain = false, ratio }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [-range, range]);
  return (
    <motion.div
      ref={ref}
      className={`pm-frame ${contain ? "contain" : ""} ${className}`}
      style={ratio ? { aspectRatio: ratio } : undefined}
      initial={{ clipPath: "inset(12% 8% 12% 8% round 26px)", opacity: 0.4 }}
      whileInView={{ clipPath: "inset(0% 0% 0% 0% round 26px)", opacity: 1 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 1.2, ease: EASE }}
    >
      <motion.img src={src} alt={alt} loading="lazy" style={{ y, scale: contain ? 1 : 1.14 }} />
    </motion.div>
  );
}

export function Rule({ delay = 0.2, className = "" }) {
  return (
    <motion.span
      className={`pm-rule ${className}`}
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true, amount: 0.8 }}
      transition={{ duration: 1, delay, ease: EASE }}
    />
  );
}

export function Eyebrow({ children, className = "" }) {
  return <span className={`pm-eyebrow ${className}`}><i>&#10022;</i> {children}</span>;
}
