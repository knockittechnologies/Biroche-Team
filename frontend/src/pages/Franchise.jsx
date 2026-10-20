import { motion } from "framer-motion";
import { ConciergeBell, BadgeCheck, Handshake, Award, Headset, Gem } from "lucide-react";
import InteriorLayout from "../components/InteriorLayout";
import Reveal from "../components/Reveal";
import EnquiryForm from "../components/EnquiryForm";
import { INSTA } from "../lib/site";

const SUPPORT = [
  { h: "Comprehensive Training", items: ["Operations", "Food preparation", "Customer service", "Management", "Opening procedures"] },
  { h: "Store Design", items: ["Complete shop layout", "Interior concepts", "Equipment specification", "Supplier guidance"] },
  { h: "Operational Support", items: ["Opening assistance", "Ongoing business reviews", "Performance support", "Supply chain guidance"] },
  { h: "Marketing", items: ["Launch campaign", "National marketing", "Local marketing support", "Social media assets", "Photography", "Video content"] },
  { h: "Product Innovation", items: ["Access to future menu launches", "Seasonal specials", "New dessert concepts", "Exclusive recipes"] },
];

const PARTNER = [
  { s: "Love hospitality", icon: <ConciergeBell strokeWidth={1.6} /> },
  { s: "Value quality over shortcuts", icon: <BadgeCheck strokeWidth={1.6} /> },
  { s: "Want to build a long-term business", icon: <Handshake strokeWidth={1.6} /> },
  { s: "Have leadership experience", icon: <Award strokeWidth={1.6} /> },
  { s: "Can deliver exceptional customer service", icon: <Headset strokeWidth={1.6} /> },
  { s: "Want to grow with an exciting premium brand", icon: <Gem strokeWidth={1.6} /> },
];

export default function Franchise() {
  const scrollToForm = (e) => {
    e.preventDefault();
    const el = document.getElementById("enquiry");
    if (window.__lenis && el) window.__lenis.scrollTo(el, { offset: -40 });
    else el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <InteriorLayout insta={INSTA.franchise} breadcrumb="Franchise">
      <section className="page-hero sec-bg-orange">
        <div className="wrap">
          <Reveal dir="pop" amplify={1.2}>
            <span className="eyebrow" style={{ justifyContent: "center" }}>Franchise</span>
            <h1>Own The Future of Luxury Desserts.</h1>
            <p>Become one of the founding franchise partners behind one of Britain's fastest emerging premium dessert brands. Built on innovation, craftsmanship and unforgettable flavour, The Brioche Team offers an opportunity unlike anything else in the dessert industry.</p>
            <div className="hero-ctas">
              <a href="#enquiry" className="btn-dark" onClick={scrollToForm} data-testid="franchise-brochure-cta">Request Franchise Brochure</a>
              <a href="#enquiry" className="btn-outline" onClick={scrollToForm} data-testid="franchise-call-cta">Book a Discovery Call</a>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="story sec-bg-orange">
        <div className="wrap">
          <Reveal className="story-head" dir="pop">
            <span className="eyebrow" style={{ justifyContent: "center" }}>&#10022; Our Story</span>
            <h2>Our Story</h2>
          </Reveal>
          <div className="story-grid">
            <Reveal className="story-col-left" dir="left" amplify={2}>
              <h3>From Redundancy to Revolution.</h3>
              <p>Two brothers lost their careers. Instead of searching for another job, they built a new future.</p>
              <img src="/brioche/franchise-0.jpg" alt="Caramel cheesecake slice" loading="lazy" />
            </Reveal>
            <Reveal className="story-col-center" dir="pop" delay={0.1}>
              <img src="/brioche/index-0.png" alt="Brioche Bites bowl with chocolate and caramel drizzle" loading="lazy" />
            </Reveal>
            <Reveal className="story-col-right" dir="right" delay={0.2} amplify={2}>
              <img src="/brioche/franchise-2.jpg" alt="Tiramisu and croissant" loading="lazy" />
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

      <section className="support">
        <div className="wrap">
          <div className="support-row">
            {SUPPORT.slice(0, 3).map((c, i) => (
              <Reveal as="div" className="support-col" dir="pop" delay={i * 0.14} amplify={1.3} key={c.h}>
                <h3>{c.h}</h3>
                <ul>
                  {c.items.map((it, j) => (
                    <motion.li
                      key={it}
                      initial={{ opacity: 0, x: -18 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, amount: 0.6 }}
                      transition={{ duration: 0.45, delay: i * 0.14 + 0.25 + j * 0.07, ease: [0.22, 0.61, 0.36, 1] }}
                    >
                      {it}
                    </motion.li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
          <div className="support-row">
            {SUPPORT.slice(3).map((c, i) => (
              <Reveal as="div" className="support-col" dir="pop" delay={i * 0.14} amplify={1.3} key={c.h}>
                <h3>{c.h}</h3>
                <ul>
                  {c.items.map((it, j) => (
                    <motion.li
                      key={it}
                      initial={{ opacity: 0, x: -18 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, amount: 0.6 }}
                      transition={{ duration: 0.45, delay: i * 0.14 + 0.25 + j * 0.07, ease: [0.22, 0.61, 0.36, 1] }}
                    >
                      {it}
                    </motion.li>
                  ))}
                </ul>
              </Reveal>
            ))}
            <div className="support-col" />
          </div>
        </div>
      </section>

      <section className="partner sec-bg-salmon">
        <div className="wrap partner-grid">
          <Reveal className="partner-left" dir="left" amplify={2}>
            <span className="eyebrow">&#10022; Our Ideal Franchise Partner</span>
            <h2>We are looking for people who:</h2>
          </Reveal>
          <Reveal className="partner-card" dir="pop" delay={0.1}>
            <div className="partner-icon-grid">
              {PARTNER.map((p, i) => (
                <motion.div
                  className="partner-icon-cell"
                  key={p.s}
                  initial={{ opacity: 0, y: 26, scale: 0.8, rotate: -4 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.6, delay: 0.15 + i * 0.09, ease: [0.34, 1.56, 0.64, 1] }}
                  whileHover={{ y: -6, scale: 1.05 }}
                >
                  <motion.span
                    className="partner-icon-glyph"
                    whileHover={{ rotate: [0, -8, 8, -4, 0], scale: 1.12 }}
                    transition={{ duration: 0.5 }}
                  >
                    {p.icon}
                  </motion.span>
                  <span>{p.s}</span>
                </motion.div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="enquiry sec-bg-orange" id="enquiry">
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
