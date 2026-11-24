import { motion } from "framer-motion";
import InteriorLayout from "../components/InteriorLayout";
import EnquiryForm from "../components/EnquiryForm";
import { RevealTitle, FadeUp, ParallaxFrame, Rule, Eyebrow } from "../components/premium";
import { INSTA } from "../lib/site";
import "../events.css";

const CELS = [
  { img: "/brioche/events-corporate-0.jpg", h: "Birthdays", p: "Make every birthday unforgettable with freshly prepared desserts, live serving stations, and crowd-favourite treats that guests will be talking about long after the candles have been blown out." },
  { img: "/brioche/events-page-weddings.jpg", h: "Weddings", p: "From elegant dessert tables to luxury evening catering, we help create memorable moments on one of the most important days of your life." },
  { img: "/brioche/events-corporate-5.jpg", h: "Private Parties", p: "Whether it's an anniversary, engagement party, baby shower, graduation, or family gathering, we bring the perfect finishing touch to your celebration." },
  { img: "/brioche/events-page-festivals.jpg", h: "Festivals & Community Events", p: "Our experienced team regularly caters for high-footfall events, delivering premium desserts efficiently whilst maintaining exceptional quality and presentation." },
];

const PERFECT = ["Staff appreciation events", "Office catering", "Award ceremonies", "Product launches", "Brand activations", "Charity events", "Networking events", "Conferences", "Seasonal celebrations", "Corporate parties", "Trade shows", "Team-building events"];

const OFFERS = [
  { h: "Live Dessert Experience", p: "Our team prepares and serves desserts fresh at your event, creating an engaging experience that guests love to watch and enjoy.", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 3c1 1.5 1 2.5 0 3.5" /><path d="M8 8c-2.5 1-4 3.2-4 6a6 6 0 0 0 6 6h4a6 6 0 0 0 6-6c0-2.8-1.5-5-4-6" /><path d="M9 8c0-1.7 1.3-3 3-3s3 1.3 3 3" /><path d="M4 20h16" /></svg> },
  { h: "Dessert Stations", p: "Beautifully presented dessert stations featuring our signature menu items and luxury branding.", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M4 9l1.5-4h13L20 9" /><path d="M4 9h16v3a2 2 0 0 1-2 2 2 2 0 0 1-2-2 2 2 0 0 1-2 2 2 2 0 0 1-2-2 2 2 0 0 1-2 2 2 2 0 0 1-2-2 2 2 0 0 1-2 2 2 2 0 0 1-2-2z" /><path d="M5 14v6h14v-6" /><path d="M10 20v-4h4v4" /></svg> },
  { h: "Bespoke Event Packages", p: "Every event is different. We can tailor our offering to suit your guest numbers, venue requirements, and budget.", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="6" cy="9" r="1.6" /><circle cx="18" cy="9" r="1.6" /><path d="M6 10.5V13a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-2.5" /><path d="M8 15v4M16 15v4M6 19h12" /><path d="M12 4v3" /><path d="M10.5 5.5h3" /></svg> },
  { h: "Corporate Branding Opportunities", p: "For corporate clients, we can discuss customised branding opportunities, helping your business create a unique and memorable event experience.", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="10" r="6.5" /><path d="M9 9.5l2 2 4-4" /><path d="M9 16l-1.5 5L12 19l4.5 2L15 16" /></svg> },
];

export default function Events() {
  const toForm = (e) => {
    e.preventDefault();
    const el = document.getElementById("enquiry");
    if (window.__lenis && el) window.__lenis.scrollTo(el, { offset: -40 });
    else el?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <InteriorLayout insta={INSTA.events} breadcrumb="Events & Corporate">
      <section className="pm-hero ev-hero">
        <div className="wrap">
          <FadeUp inView={false} delay={0.15}><Eyebrow>Events &amp; Corporate</Eyebrow></FadeUp>
          <RevealTitle text="Exceptional Desserts For Every Occasion" accent={["Every", "Occasion"]} />
          <FadeUp inView={false} delay={0.9}>
            <p className="pm-hero-lede">From intimate celebrations to large-scale corporate events, The Brioche Team creates unforgettable dessert experiences that leave a lasting impression.</p>
            <p className="pm-hero-lede">Whether you're planning a wedding, birthday celebration, private party, product launch, corporate gathering, festival, or staff appreciation event, our team delivers premium desserts, exceptional service, and a memorable experience tailored to your occasion.</p>
          </FadeUp>
          <FadeUp inView={false} delay={1.1} className="ev-hero-ctas">
            <a href="#enquiry" className="ev-btn dark" onClick={toForm}>Plan Your Event</a>
          </FadeUp>
        </div>
      </section>

      <section className="ev-cel pm-light">
        <div className="wrap">
          <div className="ev-head">
            <FadeUp><Eyebrow>Events</Eyebrow></FadeUp>
            <RevealTitle as="h2" text="Celebrations Worth Remembering" accent={["Remembering"]} inView delay={0.1} />
          </div>
          <div className="ev-cel-grid">
            {CELS.map((c, i) => (
              <motion.article
                className="ev-cel-card"
                key={c.h}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.9, delay: (i % 2) * 0.15, ease: [0.22, 0.61, 0.36, 1] }}
              >
                <div className="ev-cel-img">
                  <img src={c.img} alt={c.h} loading="lazy" />
                  <span className="ev-cel-num">{String(i + 1).padStart(2, "0")}</span>
                </div>
                <div className="ev-cel-body">
                  <h3>{c.h}</h3>
                  <p>{c.p}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="ev-corp">
        <div className="wrap ev-corp-grid">
          <div className="ev-corp-media">
            <ParallaxFrame src="/brioche/events-page-corporate.jpg" alt="Corporate celebration" ratio="4 / 5" range={36} />
          </div>
          <div className="ev-corp-text">
            <FadeUp><Eyebrow>Corporate</Eyebrow></FadeUp>
            <RevealTitle as="h2" text="Corporate Events" accent={["Events"]} inView delay={0.1} />
            <FadeUp delay={0.2}><p className="ev-tagline">Impress Clients. Reward Teams. Elevate Experiences.</p></FadeUp>
            <FadeUp delay={0.28}><p>The Brioche Team works with businesses, organisations, and event agencies across the UK to provide premium dessert catering for corporate occasions of every size.</p></FadeUp>
            <Rule />
            <h3>Perfect for</h3>
            <motion.ul className="ev-chips" initial="hide" whileInView="show" viewport={{ once: true, amount: 0.3 }} variants={{ show: { transition: { staggerChildren: 0.05 } } }}>
              {PERFECT.map((p) => (
                <motion.li key={p} variants={{ hide: { opacity: 0, y: 12, scale: 0.96 }, show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.45 } } }}>{p}</motion.li>
              ))}
            </motion.ul>
            <FadeUp delay={0.2}><p className="ev-closing">Our desserts provide a unique talking point that encourages engagement, creates memorable experiences, and leaves a lasting impression on clients, guests, and employees alike.</p></FadeUp>
          </div>
        </div>
      </section>

      <section className="ev-offer pm-light">
        <div className="wrap">
          <div className="ev-head">
            <FadeUp><Eyebrow>Our Services</Eyebrow></FadeUp>
            <RevealTitle as="h2" text="What We Offer" accent={["Offer"]} inView delay={0.1} />
          </div>
          <div className="ev-offer-grid">
            {OFFERS.map((o, i) => (
              <motion.div
                className="ev-offer-card"
                key={o.h}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, delay: i * 0.1, ease: [0.22, 0.61, 0.36, 1] }}
              >
                <div className="ev-offer-icon">{o.icon}</div>
                <span className="ev-offer-num">{String(i + 1).padStart(2, "0")}</span>
                <h3>{o.h}</h3>
                <p>{o.p}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="enquiry sec-bg-orange pm-enquiry" id="enquiry">
        <div className="wrap enquiry-grid">
          <div className="enquiry-left">
            <FadeUp><Eyebrow>Enquiry</Eyebrow></FadeUp>
            <FadeUp delay={0.1}><h2>Enquiry About Your Event</h2></FadeUp>
            <FadeUp delay={0.2}><h3>Planning an upcoming event?</h3></FadeUp>
            <FadeUp delay={0.3}><p>Our team would love to learn more about your requirements and create a bespoke package tailored to your occasion.</p></FadeUp>
          </div>
          <FadeUp className="enquiry-right" delay={0.15}>
            <h2>Enquiry Form</h2>
            <EnquiryForm type="event" />
          </FadeUp>
        </div>
      </section>
    </InteriorLayout>
  );
}
