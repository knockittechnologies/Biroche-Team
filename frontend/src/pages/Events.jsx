import InteriorLayout from "../components/InteriorLayout";
import Reveal from "../components/Reveal";
import EnquiryForm from "../components/EnquiryForm";
import { INSTA } from "../lib/site";

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
  return (
    <InteriorLayout insta={INSTA.events} breadcrumb="Events & Corporate">
      <section className="page-hero sec-bg-orange">
        <div className="wrap">
          <Reveal dir="up">
            <span className="eyebrow">&#10022; Events &amp; Corporate</span>
            <h1>Exceptional Desserts For Every Occasion</h1>
            <p>From intimate celebrations to large-scale corporate events, The Brioche Team creates unforgettable dessert experiences that leave a lasting impression.</p>
            <p>Whether you're planning a wedding, birthday celebration, private party, product launch, corporate gathering, festival, or staff appreciation event, our team delivers premium desserts, exceptional service, and a memorable experience tailored to your occasion.</p>
          </Reveal>
        </div>
      </section>

      <section className="celebrations sec-bg-peach">
        <div className="wrap">
          <Reveal className="sec-head" dir="up">
            <span className="eyebrow">&#10022; Events</span>
            <h2>Celebrations Worth Remembering</h2>
          </Reveal>
          <div className="cel-grid">
            {CELS.map((c, i) => (
              <Reveal className="cel-card" dir="up" delay={(i % 2) * 0.1} key={c.h}>
                <img src={c.img} alt={c.h} loading="lazy" />
                <div className="cel-card-text">
                  <h3>{c.h}</h3>
                  <p>{c.p}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="corporate sec-bg-peach">
        <div className="wrap">
          <Reveal className="corp-card" dir="up">
            <div className="corp-photo">
              <img src="/brioche/events-page-corporate.jpg" alt="Corporate celebration" loading="lazy" />
            </div>
            <div className="corp-text">
              <h2>Corporate Events</h2>
              <p>Impress Clients. Reward Teams. Elevate Experiences. The Brioche Team works with businesses, organisations, and event agencies across the UK to provide premium dessert catering for corporate occasions of every size.</p>
              <h3>Perfect for:</h3>
              <div className="perfect-grid">
                {PERFECT.map((p) => <div key={p}>{p}</div>)}
              </div>
              <p className="closing">Our desserts provide a unique talking point that encourages engagement, creates memorable experiences, and leaves a lasting impression on clients, guests, and employees alike.</p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="offer">
        <div className="wrap">
          <Reveal className="sec-head" dir="up">
            <span className="eyebrow">&#10022; Our Story</span>
            <h2>What We Offer</h2>
          </Reveal>
          <div className="offer-grid">
            {OFFERS.map((o, i) => (
              <Reveal className="offer-item" dir="up" delay={(i % 2) * 0.1} key={o.h}>
                <div className="offer-icon">{o.icon}</div>
                <div>
                  <h3>{o.h}</h3>
                  <p>{o.p}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="enquiry sec-bg-orange" id="enquiry">
        <div className="wrap enquiry-grid">
          <Reveal className="enquiry-left" dir="left">
            <span className="eyebrow">&#10022; Enquiry</span>
            <h2>Enquiry About Your Event</h2>
            <h3>Planning an upcoming event?</h3>
            <p>Our team would love to learn more about your requirements and create a bespoke package tailored to your occasion.</p>
          </Reveal>
          <Reveal className="enquiry-right" dir="right">
            <h2>Enquiry Form</h2>
            <EnquiryForm type="event" />
          </Reveal>
        </div>
      </section>
    </InteriorLayout>
  );
}
