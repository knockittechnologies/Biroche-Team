import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../menu.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const ITEMS = [
  { slug: "brioche-bites", name: "Brioche Bites", bg: "#FFC892", price: "£5.50",
    desc: "The dessert that started it all. Golden, buttery brioche baked fresh daily, then finished with your choice of drizzle. Invented by us, found nowhere else." },
  { slug: "banana-pudding", name: "Banana Pudding", bg: "#FAF1D5", price: "£6.00",
    desc: "Layered from a closely guarded recipe. Creamy, nostalgic and refined. The dessert people travel across the UK for. The proof is in the pudding." },
  { slug: "tiramisu", name: "Tiramisu", bg: "#FAC395", price: "£6.50",
    desc: "Delicate sponge soaked in espresso, folded through silky mascarpone and dusted with rich cocoa. Timeless Italian indulgence, the Brioche way." },
  { slug: "miss-truchbull", name: "Miss Truchbull Cake", bg: "#FFCAB9", price: "£7.00",
    desc: "Towering layers of intensely rich chocolate, blanketed in molten ganache and crowned with vanilla ice cream. Gloriously over the top." },
  { slug: "san-sebastian", name: "San Sebastian", bg: "#F0D1BA", price: "£6.75",
    desc: "The burnt Basque cheesecake. Caramelised outside, impossibly creamy within, finished with salted caramel and a buttery crumble." },
  { slug: "signature-croissant", name: "Signature Croissant", bg: "#FFEBD2", price: "£6.25",
    desc: "Flaky, hand-laminated pastry filled with molten chocolate, showered in praline and served warm with a scoop of vanilla." },
];

const heroVariants = {
  initial: { opacity: 0, scale: 1.08, y: -28, filter: "blur(6px)" },
  animate: { opacity: 1, scale: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.75, ease: [0.22, 0.61, 0.36, 1] } },
  exit: { opacity: 0, scale: 0.9, y: 26, filter: "blur(6px)", transition: { duration: 0.45, ease: "easeIn" } },
};

export default function Menu() {
  const [index, setIndex] = useState(0);
  const active = ITEMS[index];
  const next = ITEMS[(index + 1) % ITEMS.length];

  // gentle auto-advance; timer resets on any selection
  useEffect(() => {
    const t = setTimeout(() => setIndex((i) => (i + 1) % ITEMS.length), 5200);
    return () => clearTimeout(t);
  }, [index]);

  return (
    <motion.div
      className="bt menu-stage"
      data-testid="menu-page"
      animate={{ backgroundColor: active.bg }}
      transition={{ duration: 0.7, ease: [0.22, 0.61, 0.36, 1] }}
      style={{ backgroundColor: active.bg }}
    >
      <Header variant="peach" />

      <div className="menu-inner">
        <span className="menu-eyebrow">✦ Our Menu</span>

        {/* Left list */}
        <div className="menu-list" data-testid="menu-list" role="tablist">
          {ITEMS.map((it, i) => (
            <button
              key={it.slug}
              className={`menu-list-item ${i === index ? "active" : ""}`}
              onClick={() => setIndex(i)}
              role="tab"
              aria-selected={i === index}
              data-testid={`menu-item-${it.slug}`}
            >
              <span className="thumb">
                <img src={`/brioche/menu/${it.slug}-thumb.png`} alt="" />
              </span>
              <span className="label">{it.name}</span>
            </button>
          ))}
        </div>

        {/* Right progress dots */}
        <div className="menu-dots">
          {ITEMS.map((it, i) => (
            <button
              key={it.slug}
              className={i === index ? "active" : ""}
              onClick={() => setIndex(i)}
              aria-label={`Show ${it.name}`}
              data-testid={`menu-dot-${it.slug}`}
            />
          ))}
        </div>

        {/* Center hero + caption */}
        <div className="menu-center">
          <div className="menu-hero-wrap">
            <AnimatePresence initial={false}>
              <motion.img
                key={active.slug}
                className="menu-hero-img"
                src={`/brioche/menu/${active.slug}.png`}
                alt={active.name}
                variants={heroVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                data-testid="menu-hero-image"
              />
            </AnimatePresence>
          </div>

          <div className="menu-caption">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.slug}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -14 }}
                transition={{ duration: 0.5, ease: [0.22, 0.61, 0.36, 1], delay: 0.1 }}
              >
                <h2 data-testid="menu-title">{active.name}</h2>
                <p>{active.desc}</p>
                <span className="price">{active.price}</span>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Teaser: up next */}
        <div className="menu-teaser">
          <span className="tlabel">Up next: {next.name}</span>
          <AnimatePresence mode="wait">
            <motion.img
              key={next.slug}
              src={`/brioche/menu/${next.slug}.png`}
              alt={next.name}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 30 }}
              transition={{ duration: 0.5 }}
              onClick={() => setIndex((index + 1) % ITEMS.length)}
              style={{ cursor: "pointer", pointerEvents: "auto" }}
              data-testid="menu-teaser-image"
            />
          </AnimatePresence>
        </div>
      </div>

      <Footer />
    </motion.div>
  );
}
