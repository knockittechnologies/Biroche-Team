import InteriorLayout from "../components/InteriorLayout";
import Reveal from "../components/Reveal";
import { INSTA } from "../lib/site";

const Pin = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M12 21s7-6.5 7-12a7 7 0 1 0-14 0c0 5.5 7 12 7 12z" /><circle cx="12" cy="9" r="2.4" /></svg>
);
const Arrow = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 6l6 6-6 6" /></svg>
);

const LOCS = [
  {
    img: "/brioche/locations-0.jpg", h: "Flagship store",
    addr: ["1st Floor, 330 Ladypool Rd, Sparkbrook,", "Birmingham B12 8JY"],
    map: "https://www.google.com/maps/search/?api=1&query=1st%20Floor%2C%20330%20Ladypool%20Rd%2C%20Sparkbrook%2C%20Birmingham%20B12%208JY",
  },
  {
    img: "/brioche/locations-1.jpg", h: "Andalusia Food Park",
    addr: ["Andalusia Food Park, Warwick Rd,", "Tyseley, Birmingham B11 2HP"],
    map: "https://www.google.com/maps/search/?api=1&query=Andalusia%20Food%20Park%2C%20Warwick%20Rd%2C%20Tyseley%2C%20Birmingham%20B11%202HP",
  },
  {
    img: "/brioche/locations-2.jpg", h: "Coming soon",
    addr: ["Victoria Food Village,", "Wolverhampton"],
    map: "https://www.google.com/maps/search/?api=1&query=Victoria%20Food%20Village%2C%20Wolverhampton",
  },
];

export default function Locations() {
  return (
    <InteriorLayout insta={INSTA.locations} breadcrumb="Locations">
      <section className="loc-head sec-bg-orange">
        <div className="wrap">
          <Reveal dir="up">
            <span className="eyebrow">&#10022; Our Locations</span>
            <h1>Discover our Branches</h1>
          </Reveal>
        </div>
      </section>

      <section className="locations sec-bg-orange">
        <div className="wrap">
          {LOCS.map((l, i) => (
            <Reveal className="loc-row" dir="up" delay={i * 0.08} key={l.h}>
              <img className="loc-img" src={l.img} alt={l.h} loading="lazy" />
              <div className="loc-info">
                <h2>{l.h}</h2>
                <div className="loc-addr">
                  <Pin />
                  <p>{l.addr[0]}<br />{l.addr[1]}</p>
                </div>
              </div>
              <a href={l.map} target="_blank" rel="noopener noreferrer" className="loc-map" data-testid={`map-link-${i}`}>
                View on map <Arrow />
              </a>
            </Reveal>
          ))}
        </div>
      </section>
    </InteriorLayout>
  );
}
