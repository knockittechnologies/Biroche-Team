import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import InteriorLayout from "../components/InteriorLayout";
import Reveal from "../components/Reveal";
import EnquiryForm from "../components/EnquiryForm";
import { INSTA } from "../lib/site";
import "../franchise.css";

const SUPPORT = [
  { h: "Comprehensive Training", items: ["Operations", "Food preparation", "Customer service", "Management", "Opening procedures"] },
  { h: "Store Design", items: ["Complete shop layout", "Interior concepts", "Equipment specification", "Supplier guidance"] },
  { h: "Operational Support", items: ["Opening assistance", "Ongoing business reviews", "Performance support", "Supply chain guidance"] },
  { h: "Marketing", items: ["Launch campaign", "National marketing", "Local marketing support", "Social media assets", "Photography", "Video content"] },
  { h: "Product Innovation", items: ["Access to future menu launches", "Seasonal specials", "New dessert concepts", "Exclusive recipes"] },
];

const PARTNER = [
  { s: "Love hospitality", icon: "hospitality" },
  { s: "Value quality over shortcuts", icon: "quality" },
  { s: "Want to build a long-term business", icon: "long-term" },
  { s: "Have leadership experience", icon: "leadership" },
  { s: "Can deliver exceptional customer service", icon: "service" },
  { s: "Want to grow with an exciting premium brand", icon: "premium" },
];

const HEADLINE = ["Own", "The", "Future", "of", "Luxury", "Desserts."];
const PILLARS = ["A proven model", "Comprehensive training", "Ongoing support"];

export default function Franchise() {
  const storyRef = useRef(null);
  const { scrollYProgress: storyP } = useScroll({ target: storyRef, offset: ["start end", "end start"] });
  const storyUp = useTransform(storyP, [0, 1], [40, -40]);
  const storyDown = useTransform(storyP, [0, 1], [-30, 30]);

  const scrollToForm = (e) => {
    e.preventDefault();
    const el = document.getElementById("enquiry");
    if (window.__lenis && el) window.__lenis.scrollTo(el, { offset: -40 });
    else el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <InteriorLayout insta={INSTA.franchise} breadcrumb="Franchise">
      <section className="frx-hero">
        <div className="frx-glow" aria-hidden="true" />
        <div className="wrap frx-hero-grid">
          <div className="frx-hero-copy">
            <motion.span className="frx-eyebrow" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}>
              <i>&#10022;</i> Franchise Opportunities
            </motion.span>
            <h1 aria-label="Own The Future of Luxury Desserts.">
              {HEADLINE.map((w, i) => (
                <span className="frx-word" key={i} aria-hidden="true">
                  <motion.span
                    initial={{ y: "110%" }}
                    animate={{ y: "0%" }}
                    transition={{ duration: 0.9, delay: 0.35 + i * 0.08, ease: [0.22, 0.61, 0.36, 1] }}
                  >
                    {w === "Luxury" ? <em>{w}</em> : w}
                  </motion.span>
                </span>
              ))}
            </h1>
            <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 1.0 }}>
              Become one of the founding franchise partners behind one of Britain's fastest emerging premium dessert brands. Built on innovation, craftsmanship and unforgettable flavour, The Brioche Team offers an opportunity unlike anything else in the dessert industry.
            </motion.p>
            <motion.div className="hero-ctas frx-ctas" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 1.15 }}>
              <a href="#enquiry" className="frx-btn solid" onClick={scrollToForm} data-testid="franchise-brochure-cta">Request Franchise Brochure</a>
              <a href="#enquiry" className="frx-btn ghost" onClick={scrollToForm} data-testid="franchise-call-cta">Book a Discovery Call</a>
            </motion.div>
          </div>

          <motion.div className="frx-hero-art" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.1, delay: 0.4, ease: [0.22, 0.61, 0.36, 1] }}>
            <svg className="frx-ring" viewBox="0 0 200 200" aria-hidden="true">
              <defs><path id="frx-circle" d="M100,100 m-84,0 a84,84 0 1,1 168,0 a84,84 0 1,1 -168,0" /></defs>
              <text><textPath href="#frx-circle" textLength="524" lengthAdjust="spacing">THE BRIOCHE TEAM &#10022; FRANCHISE PARTNERS &#10022; EST. BIRMINGHAM &#10022;</textPath></text>
            </svg>
            <div className="frx-disc" />
            <img className="frx-bowl" src="/brioche/story-bowl.webp" alt="Brioche Bites bowl" />
          </motion.div>
        </div>

        <div className="wrap">
          <motion.ul className="frx-pillars" initial="hide" animate="show" variants={{ show: { transition: { staggerChildren: 0.12, delayChildren: 1.3 } } }}>
            {PILLARS.map((p) => (
              <motion.li key={p} variants={{ hide: { opacity: 0, y: 14 }, show: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}>{p}</motion.li>
            ))}
          </motion.ul>
        </div>
      </section>

      <section className="story sec-bg-orange" ref={storyRef}>
        <div className="wrap">
          <Reveal className="story-head" dir="pop">
            <span className="eyebrow" style={{ justifyContent: "center" }}>&#10022; Our Story</span>
            <h2>Our Story</h2>
          </Reveal>
          <div className="story-grid">
            <Reveal className="story-col-left" dir="left">
              <h3>From Redundancy to Revolution.</h3>
              <p>Two brothers lost their careers. Instead of searching for another job, they built a new future.</p>
              <motion.img style={{ y: storyUp }} src="/brioche/franchise-0-cut.png" alt="Caramel cheesecake slice" loading="lazy" />
            </Reveal>
            <Reveal className="story-col-center fr-story-center" dir="pop" delay={0.1}>
              <img src="/brioche/story-bowl.webp" alt="Brioche Bites bowl with chocolate and caramel drizzle" loading="lazy" />
            </Reveal>
            <Reveal className="story-col-right" dir="right" delay={0.2}>
              <motion.img style={{ y: storyDown }} src="/brioche/franchise-2-cut.png" alt="Tiramisu and croissant" loading="lazy" />
              <p>Driven by a lifelong passion for baking and years spent perfecting recipes behind closed doors, they created something the dessert world had never seen before.</p>
              <p className="bold-line">The original Brioche Bites.</p>
            </Reveal>
          </div>
          <Reveal as="p" className="story-footer-text" dir="up">
            Soon after came our signature Banana Pudding, crafted from a closely guarded recipe that has quickly become the dessert people travel across the UK to experience. Today, The Brioche Team is becoming one of Britain's most exciting premium dessert concepts, built on craftsmanship, innovation and unforgettable customer experiences.
          </Reveal>
        </div>
      </section>

      {/* ===== Savour Banner (same full photo as the Home page) ===== */}
      <section className="savour savour-full-image" data-testid="franchise-savour-banner">
        <img src="/brioche/franchise-6.jpg" alt="Make every occasion sweeter — brioche treats beautifully served for every celebration" />
      </section>

      <section className="support frx-support">
        <div className="wrap">
          <Reveal className="frx-sup-head" dir="up">
            <span className="frx-eyebrow"><i>&#10022;</i> Partner Support</span>
            <h2>Everything you need to open, run and grow.</h2>
          </Reveal>
          <div className="frx-sup-grid">
            {SUPPORT.map((c, i) => (
              <motion.div
                className="frx-sup-card"
                key={c.h}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, delay: (i % 3) * 0.12, ease: [0.22, 0.61, 0.36, 1] }}
              >
                <motion.span
                  className="frx-sup-line"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 1, delay: 0.3 + (i % 3) * 0.12, ease: [0.22, 0.61, 0.36, 1] }}
                />
                <span className="frx-sup-num">{String(i + 1).padStart(2, "0")}</span>
                <h3>{c.h}</h3>
                <ul>
                  {c.items.map((it, j) => (
                    <motion.li
                      key={it}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, amount: 0.6 }}
                      transition={{ duration: 0.45, delay: 0.4 + (i % 3) * 0.12 + j * 0.06 }}
                    >
                      {it}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="partner fr-partner">
        <div className="wrap partner-grid">
          <Reveal className="partner-left" dir="left">
            <span className="fr-eyebrow"><i>&#10022;</i> Our Ideal Franchise Partner</span>
            <h2>We are looking for people who:</h2>
          </Reveal>
          <Reveal className="partner-card fr-card" dir="up" delay={0.1}>
            <div className="partner-icon-grid">
              {PARTNER.map((p, i) => (
                <motion.div
                  className="partner-icon-cell"
                  key={p.s}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.6, delay: 0.1 + i * 0.07, ease: [0.22, 0.61, 0.36, 1] }}
                >
                  <img className="fr-icon" src={`/brioche/partner/${p.icon}.png`} alt="" aria-hidden="true" />
                  <span>{p.s}</span>
                </motion.div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="enquiry sec-bg-orange frx-enquiry" id="enquiry">
        <div className="wrap enquiry-grid">
          <Reveal className="enquiry-left" dir="left" amplify={1.4}>
            <span className="eyebrow">&#10022; Join our franchise network</span>
            <h2>Own A Brioche Franchise</h2>
            <h3>Ready to lead a successful business?</h3>
            <p>Discover the path to a rewarding future with a proven model, comprehensive training, and ongoing support. Contact us to start your journey.</p>
          </Reveal>
          <Reveal className="enquiry-right" dir="right" amplify={1.4} delay={0.1}>
            <h2>Enquiry Form</h2>
            <EnquiryForm type="franchise" />
          </Reveal>
        </div>
      </section>
    </InteriorLayout>
  );
}
