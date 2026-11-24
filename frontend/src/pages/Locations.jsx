import InteriorLayout from "../components/InteriorLayout";
import Reveal from "../components/Reveal";
import { INSTA } from "../lib/site";
import "../locations.css";

const Pin = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M12 21s7-6.5 7-12a7 7 0 1 0-14 0c0 5.5 7 12 7 12z" /><circle cx="12" cy="9" r="2.4" /></svg>
);
const Arrow = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 6l6 6-6 6" /></svg>
);

const LOCS = [
  {
    img: "/brioche/locations-0.jpg", h: "Flagship Store", area: "Sparkbrook \u00b7 Birmingham",
    addr: ["1st Floor, 330 Ladypool Rd, Sparkbrook,", "Birmingham B12 8JY"],
    map: "https://www.google.com/maps/search/?api=1&query=1st%20Floor%2C%20330%20Ladypool%20Rd%2C%20Sparkbrook%2C%20Birmingham%20B12%208JY",
  },
  {
    img: "/brioche/locations-hall-green.jpg", h: "Hall Green", ratio: "62.5%", area: "Stratford Road \u00b7 Birmingham",
    addr: ["1174 Stratford Rd, Hall Green,", "Birmingham B28 8AQ"],
    map: "https://www.google.com/maps/search/?api=1&query=1174%20Stratford%20Rd%2C%20Hall%20Green%2C%20Birmingham%20B28%208AQ",
  },
  {
    img: "/brioche/locations-2.jpg", h: "Victoria Food Village", ratio: "56.5%", area: "Wolverhampton", soon: true,
    addr: ["Victoria Food Village,", "Wolverhampton"],
    map: "https://www.google.com/maps/search/?api=1&query=Victoria%20Food%20Village%2C%20Wolverhampton",
  },
];

export default function Locations() {
  return (
    <InteriorLayout insta={INSTA.locations} breadcrumb="Locations">
      <div className="locx">
        <section className="locx-head">
          <div className="wrap">
            <Reveal dir="up">
              <span className="locx-eyebrow">&#10022; Our Locations</span>
              <h1>Discover our Branches</h1>
              <p className="locx-lede">Freshly assembled brioche bites and our signature banana pudding, served across the West Midlands.</p>
            </Reveal>
          </div>
        </section>

        <section className="locx-list">
          <div className="wrap">
            {LOCS.map((l, i) => (
              <Reveal className={`locx-card${i % 2 ? " flip" : ""}`} dir="up" delay={i * 0.06} key={l.h}>
                <div className={`locx-media${l.ratio ? " natural" : ""}`} style={l.ratio ? { "--r": l.ratio } : undefined}>
                  <img src={l.img} alt={l.h} loading="lazy" />
                </div>
                <div className="locx-body">
                  <div className="locx-meta">
                    <span className="locx-num">{String(i + 1).padStart(2, "0")}</span>
                    <span className="locx-area">{l.area}</span>
                    {l.soon && <span className="locx-chip">Coming soon</span>}
                  </div>
                  <h2>{l.h}</h2>
                  <div className="locx-rule" />
                  <div className="locx-addr">
                    <Pin />
                    <p>{l.addr[0]}<br />{l.addr[1]}</p>
                  </div>
                  <a href={l.map} target="_blank" rel="noopener noreferrer" className="locx-map" data-testid={`map-link-${i}`}>
                    View on map <Arrow />
                  </a>
                </div>
              </Reveal>
            ))}
          </div>
        </section>
      </div>
    </InteriorLayout>
  );
}
