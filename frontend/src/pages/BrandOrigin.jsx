import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import InteriorLayout from "../components/InteriorLayout";
import { RevealTitle, FadeUp, ParallaxFrame, Rule, Eyebrow } from "../components/premium";
import { INSTA } from "../lib/site";
import "../origin.css";

const CHAPTERS = [
  {
    n: "01", h: "A Passion Perfected", img: "/brioche/brand-origin-1.jpg", alt: "Family gathered around the dinner table", tone: "light",
    p: [
      "Long before The Brioche Team had a name, countless evenings were spent perfecting recipes that would never leave the family table. Every loaf, every dessert, every carefully crafted bite was shared with those closest to them. Years of refinement transformed treasured family traditions into something truly exceptional.",
      "It was friends and family, captivated by every taste, who insisted these creations deserved to be experienced far beyond their own home.",
    ],
  },
  {
    n: "02", h: "The Courage to Create", img: "/brioche/brand-origin-2.jpg", alt: "Brioche loaf, cubed brioche, and Brioche Bites being made", tone: "orange",
    p: [
      "Encouraged by those who believed in them, the brothers made a decision that would change everything. They stepped into the unknown with one simple promise: never compromise on quality, craftsmanship, or imagination.",
      "From that promise came something the dessert world had never seen before. Their invention of the original Brioche Bites. Golden, buttery, delicately crisp on the outside and irresistibly soft within, they redefined what comfort and indulgence could become.",
    ],
  },
  {
    n: "03", h: "A Legacy of Indulgence", img: "/brioche/brand-origin-3.jpg", alt: "Banana Pudding cup, The Brioche Team", tone: "light", tall: true,
    p: [
      "Innovation did not stop there. Alongside the creation of Brioche Bites came a dessert that would become our signature. Our legendary Banana Pudding. Crafted from a closely guarded recipe and layered with exceptional ingredients, it quickly earned a reputation unlike any other.",
      "Rich yet delicate, nostalgic yet refined, every spoonful became an experience that guests returned for time and time again. For us, luxury has never been about excess. It has always been about unforgettable flavour.",
    ],
  },
];

export default function BrandOrigin() {
  const bannerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: bannerRef, offset: ["start end", "end start"] });
  const bannerScale = useTransform(scrollYProgress, [0, 1], [1.18, 1]);

  return (
    <InteriorLayout insta={INSTA.origin} breadcrumb="Brand origin">
      <section className="pm-hero og-hero">
        <div className="wrap">
          <FadeUp inView={false} delay={0.15}><Eyebrow>Our Story</Eyebrow></FadeUp>
          <RevealTitle text="Where It All Began" accent={["Began"]} />
          <FadeUp inView={false} delay={0.8}>
            <p className="pm-hero-lede">Every remarkable story begins with a defining moment. Ours began not in a bustling kitchen or a grand bakery, but in uncertainty. Two brothers, united by ambition, suddenly found themselves without the careers they had spent years building. What many would call an ending, redundancy, became the beginning of something extraordinary.</p>
            <p className="pm-hero-lede">Instead of searching for another path, they chose to create one, guided by a lifelong passion that had quietly lived within them since childhood.</p>
          </FadeUp>
          <div className="og-hero-art">
            <ParallaxFrame src="/brioche/where-it-all-began.png" alt="From redundancy to the first Brioche Team food truck" contain range={18} />
          </div>
        </div>
      </section>

      {CHAPTERS.map((c, i) => (
        <section className={`og-chapter ${c.tone === "orange" ? "is-orange" : "pm-light is-light"} ${i % 2 ? "flip" : ""}`} key={c.n}>
          <div className="wrap og-grid">
            <div className="og-text">
              <FadeUp><span className="og-chapter-label">Chapter {c.n}</span></FadeUp>
              <RevealTitle as="h2" text={c.h} inView delay={0.1} />
              <Rule />
              {c.p.map((t, j) => <FadeUp as="p" delay={0.2 + j * 0.12} key={j}>{t}</FadeUp>)}
            </div>
            <div className={`og-media ${c.tall ? "tall" : ""}`}>
              <span className="og-big-num" aria-hidden="true">{c.n}</span>
              <ParallaxFrame src={c.img} alt={c.alt} ratio={c.tall ? "4 / 5" : "4 / 3"} />
            </div>
          </div>
        </section>
      ))}

      <section className="og-banner" ref={bannerRef}>
        <motion.img src="/brioche/brand-origin-interior.jpg" alt="The Brioche Team restaurant interior" loading="lazy" style={{ scale: bannerScale }} />
      </section>

      <section className="og-closing pm-light">
        <div className="wrap">
          <FadeUp><Eyebrow>Today</Eyebrow></FadeUp>
          <RevealTitle as="h2" text="More Than Dessert" accent={["Dessert"]} inView delay={0.1} />
          <FadeUp delay={0.25}>
            <p>Today, The Brioche Team is more than a dessert brand. It is a celebration of courage, family, craftsmanship, and the belief that life's greatest moments are often shared around exceptional food.</p>
          </FadeUp>
          <FadeUp delay={0.35}>
            <blockquote>Every Brioche Bite we create carries the journey of two brothers who dared to begin again, transforming adversity into artistry.</blockquote>
            <p>This is only the beginning of our story, and we invite you to become part of the next chapter.</p>
          </FadeUp>
          <FadeUp delay={0.45} className="og-ctas">
            <Link to="/locations" className="og-btn solid">Visit a Branch</Link>
            <Link to="/menu" className="og-btn ghost">Explore the Menu</Link>
          </FadeUp>
        </div>
      </section>
    </InteriorLayout>
  );
}
