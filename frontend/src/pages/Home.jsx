import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import InstagramStrip from "../components/InstagramStrip";
import Reveal from "../components/Reveal";
import Marquee from "../components/Marquee";
import ScrollScrubStage from "../components/ScrollScrubStage";
import { INSTA } from "../lib/site";
import "../home.css";

const HERO_LINES = ["Invented", "Brioche Bites."];

const lineVariant = {
  hidden: { y: "110%" },
  show: (i) => ({
    y: "0%",
    transition: { duration: 1, ease: [0.22, 0.61, 0.36, 1], delay: 0.7 + i * 0.16 },
  }),
};

const STATS = [
  { type: "img", img: "/brioche/menu/brioche-bites.png" },
  { type: "dark", num: "24+", lbl: "Luxury Lounges", desc: "We can just make desserts, we engineer unforgettable." },
  { type: "orange", num: "250+", lbl: "Moments Shared", desc: "" },
  { type: "img", img: "/brioche/events-corporate-4.jpg" },
];

const REVIEWS = [
  { p: "We tried the Mr. Brioche special which was 10/10 and the customer service was great. We will definitely be returning!", name: "Ayesha Kazi" },
  { p: "The best desserts in town hands down. I thought the original banana pudding was the best thing I've tasted until I tried the kinder version! Safe to say I will never have any other dessert again. The brothers here are hands down the most amazing people you'll come across.", name: "Ali ahmed" },
  { p: "lovely food park, lovely trailer, lovely team too. the brioche bite are the best treat ever, the banana pudding is full marks too, highly recommended, see you again soo guys!", name: "Mo Afzal" },
  { p: "Absolutely the best Banana Pudding outside of New York. Rich, creamy and worth every mile of the trip. The Brioche Bites steal the show every single time.", name: "Amy Ba" },
  { p: "The Brioche Team have set a new standard for luxury desserts in the UK. Every visit feels like an event — friendly service, immaculate presentation and flavours you cannot find anywhere else.", name: "Camryn Ikonda" },
  { p: "Warm, welcoming and impossibly delicious. My family has become regulars. If you only try one thing, make it the Banana Pudding — but honestly, order everything on the menu.", name: "Amina Quran" },
];

export default function Home() {
  const heroRef = useRef(null);
  const trackRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const textureY = useTransform(scrollYProgress, [0, 1], [0, 160]);
  // The hero animation is a scroll-scrubbed frame sequence: scrolling down plays
  // it forward, scrolling up reverses it. Progress is driven by the pinned track's
  // own scroll range so it lands on the last frame exactly when the pin releases.
  const { scrollYProgress: trackProgress } = useScroll({ target: trackRef, offset: ["start start", "end end"] });
  const scrubProgress = useTransform(trackProgress, [0, 1], [0, 1], { clamp: true });
  const indicatorColor = useTransform(scrollYProgress, [0, 0.55, 0.92], ["#ffffff", "#ffffff", "#3a2a1e"]);
  const indicatorOpacity = useTransform(scrollYProgress, [0, 0.85, 0.96], [1, 1, 0]);

  const scrollToNext = () => {
    const el = document.getElementById("reviews-section");
    if (window.__lenis && el) window.__lenis.scrollTo(el, { offset: -20 });
    else el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bt bt-page-peach home-v2" data-testid="home-page">
      {/* ===== Section 1 : Hero (brioche-bites assembly animation) ===== */}
      <div
        className="hero hero-anim-only hero-with-video"
        ref={heroRef}
        style={{ backgroundImage: "url(/brioche/hero/hero-illustrated-bg.jpg)" }}
      >
        <motion.div className="texture" style={{ y: textureY }} />
        <Header variant="orange" />

        <div className="wrap hero-video-content">
          <Reveal dir="up" className="hero-video-eyebrow">
            <span className="eyebrow" style={{ justifyContent: "center" }}>✦ Freshly Assembled, Daily</span>
          </Reveal>

          <h1 className="hero-video-heading">
            {HERO_LINES.map((line, i) => (
              <span className="line-mask" key={line}>
                <motion.span
                  custom={i}
                  variants={lineVariant}
                  initial="hidden"
                  animate="show"
                >
                  {line}
                </motion.span>
              </span>
            ))}
          </h1>

          <div className="hero-scrub-track" ref={trackRef}>
            <div className="hero-scrub-sticky">
              <motion.div
                className="hero-video-stage hero-video-stage-flanked"
                initial={{ opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, ease: [0.22, 0.61, 0.36, 1], delay: 0.4 }}
              >
                <motion.button
                  type="button"
                  className="hero-scroll-indicator hero-scroll-indicator-side left"
                  onClick={scrollToNext}
                  aria-label="Scroll to explore"
                  style={{ color: indicatorColor, opacity: indicatorOpacity }}
                >
                  <span className="hsi-label">Scroll Down</span>
                  <span className="hsi-line" />
                  <span className="hsi-chev">
                    <ChevronDown size={16} strokeWidth={1.6} />
                  </span>
                </motion.button>

                <ScrollScrubStage
                  progress={scrubProgress}
                  posterSrc="/brioche/hero/brioche-hero-poster.webp"
                  className="hero-video"
                />

                <motion.button
                  type="button"
                  className="hero-scroll-indicator hero-scroll-indicator-side right"
                  onClick={scrollToNext}
                  aria-label="Scroll to explore"
                  style={{ color: indicatorColor, opacity: indicatorOpacity }}
                >
                  <span className="hsi-label">Scroll Down</span>
                  <span className="hsi-line" />
                  <span className="hsi-chev">
                    <ChevronDown size={16} strokeWidth={1.6} />
                  </span>
                </motion.button>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* ===== Section 2 : Marquee ===== */}
      <Marquee
        items={["Invented Brioche Bites", "UK's Best Banana Pudding", "UK's Fastest Growing Dessert Brand"]}
      />

      {/* ===== Section 3 : Customers Reviews ===== */}
      <section className="reviews" id="reviews-section" data-testid="reviews-section">
        <div className="wrap">
          <Reveal className="reviews-head" dir="up">
            <span className="eyebrow">✦ Testimonials</span>
            <h2>Customers Reviews</h2>
            <p style={{ fontSize: 14, color: "#4a3a2f", marginTop: 8 }}>
              Immerse yourself in unparalleled luxury. Our boutiques are designed to be sanctuaries of indulgence, where every detail is meticulously curated.
            </p>
          </Reveal>

          <div className="reviews-grid reviews-scroll" data-testid="reviews-scroll">
            {REVIEWS.map((r, i) => (
              <Reveal className="review-card" dir="up" delay={i * 0.06} key={i}>
                <div className="qmark">"</div>
                <p>{r.p}</p>
                <span className="name-row"><span className="avatar">{r.name.charAt(0)}</span><span className="name">{r.name}</span></span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Section 4 : Our Masterpieces ===== */}
      <section className="masterpieces" data-testid="masterpieces-section">
        <div className="wrap">
          <Reveal className="master-head" dir="up">
            <span className="eyebrow">✦ Signature Collection</span>
            <h2>Our Masterpieces</h2>
          </Reveal>

          <div className="master-grid">
            <Reveal className="master-card" dir="up">
              <div className="m-img"><img src="/brioche/menu/brioche-bites.png" alt="Brioche Bites" /></div>
              <div>
                <h3>Brioche Bites</h3>
                <p>Invented by us. A Golden, buttery brioche, baked fresh daily, coated with delicately crisp on the outside and irresistibly soft within. Finished with our signature Angel Dust coating and generously drizzled in our handcrafted heavy dark chocolate blend of chocolate hazelnut and vanilla cream cheese.</p>
                <Link to="/menu" className="discover">Discover More</Link>
              </div>
            </Reveal>
            <Reveal className="master-card" dir="up" delay={0.08}>
              <div className="m-img"><img src="/brioche/events-corporate-4.jpg" alt="Banana Pudding" /></div>
              <div>
                <h3>Banana Pudding</h3>
                <p>An indulgent, decadent classic guarded recipe, our signature Banana Pudding delivers perfectly ripe bananas, velvety layers of vanilla cream in layers of rich, and soft, buttery Nabisco vanilla wafers a tender, moist, so nostalgic. And that hint of caramelised.</p>
                <Link to="/menu" className="discover">Discover More</Link>
              </div>
            </Reveal>
          </div>

          <div className="master-dots">
            <span className="active" /><span /><span />
          </div>
          <div className="master-collections">
            <Link to="/menu">View our Collections</Link>
          </div>
        </div>
      </section>

      {/* ===== Section 5 : Savour Banner ===== */}
      {/* The photo already carries its own headline and CTA baked in, so
          it's shown on its own with no overlaid text or button. */}
      <section className="savour savour-full-image" data-testid="savour-banner">
        <img src="/brioche/franchise-6.jpg" alt="Make every occasion sweeter — brioche treats beautifully served for every celebration" />
      </section>

      {/* ===== Section 6 : Events & Corporate ===== */}
      <section className="events-preview" data-testid="events-preview">
        <div className="wrap">
          <Reveal className="evp-head" dir="up">
            <div>
              <span className="eyebrow">✦ Exclusive Services</span>
              <h2>Events &amp; Corporate</h2>
            </div>
            <Link to="/events" className="view">View Services →</Link>
          </Reveal>
          <div className="evp-grid">
            <Reveal className="evp-big" dir="left">
              <img src="/brioche/events-corporate-1.jpg" alt="Corporate event" />
            </Reveal>
            <div className="evp-side">
              <Reveal className="evp-item" dir="right" delay={0.05}>
                <div className="thumb"><img src="/brioche/events-corporate-2.jpg" alt="Private Dining" /></div>
                <div>
                  <h3>Private Dining</h3>
                  <p>Elevate your next gathering with an exclusive of your privacy, from intricate private dining to grand intimate galas.</p>
                </div>
              </Reveal>
              <Reveal className="evp-item" dir="right" delay={0.1}>
                <div className="thumb"><img src="/brioche/events-corporate-6.jpg" alt="Masterclasses" /></div>
                <div>
                  <h3>Masterclasses</h3>
                  <p>Elevate your next gathering with an effusive of hand luxury.</p>
                </div>
              </Reveal>
              <Reveal className="evp-item" dir="right" delay={0.15}>
                <div className="thumb"><img src="/brioche/events-corporate-3.jpg" alt="Corporate Gifting" /></div>
                <div>
                  <h3>Corporate Gifting</h3>
                  <p>Elevate your next gathering with an of intimate of pure luxury. From intimate boutiques...</p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <InstagramStrip images={INSTA.home} />
      <Footer />
    </div>
  );
}
