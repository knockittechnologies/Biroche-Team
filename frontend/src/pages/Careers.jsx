import InteriorLayout from "../components/InteriorLayout";
import Reveal from "../components/Reveal";
import { CheckCircle2, Handshake, HeartHandshake, ChefHat, TrendingUp } from "lucide-react";
import { INSTA } from "../lib/site";
import "../careers.css";

const WHY = [
  "A welcoming and inclusive team",
  "Ongoing training and career development",
  "Opportunities for progression",
  "Staff discounts",
  "Be part of one of the UK's fastest-growing dessert brands",
];

const TRAITS = [
  { icon: (<Handshake strokeWidth={1.4} />), l: "Friendly", l2: "and positive" },
  { icon: (<HeartHandshake strokeWidth={1.4} />), l: "Passionate about", l2: "great customer service" },
  { icon: (<ChefHat strokeWidth={1.4} />), l: "Reliable", l2: "and hardworking" },
  { icon: (<TrendingUp strokeWidth={1.4} />), l: "Eager to", l2: "learn and grow" },
];

export default function Careers() {
  return (
    <InteriorLayout insta={INSTA.events} breadcrumb="Careers">
      <section className="careers-hero">
        <div className="wrap">
          <Reveal dir="up">
            <span className="eyebrow" style={{ justifyContent: "center" }}>✦ Join The Brioche Team</span>
            <h1>More Than a Job.<br />A Place to Belong.</h1>
            <p>At The Brioche Team, we're passionate about creating unforgettable dessert experiences—and that starts with an incredible team.</p>
            <p>Whether you're serving customers, crafting our signature desserts, or leading a team, you'll be part of a supportive, ambitious and friendly workplace where everyone has the opportunity to grow.</p>
          </Reveal>
        </div>
      </section>

      <section className="why-us">
        <div className="wrap">
          <Reveal className="wu-head" dir="up">
            <span className="eyebrow">✦ Why us</span>
            <h2>Why Join Us?</h2>
          </Reveal>
          <div className="wu-grid">
            <Reveal className="wu-img" dir="left">
              <img src="/brioche/brand-origin-4.jpg" alt="Our kitchen team" loading="lazy" />
            </Reveal>
            <Reveal className="wu-list" dir="right">
              {WHY.map((w) => (
                <div className="wu-item" key={w}>
                  <CheckCircle2 size={22} className="wu-check" />
                  <span>{w}</span>
                </div>
              ))}
            </Reveal>
          </div>
        </div>
      </section>

      <section className="looking">
        <div className="wrap">
          <Reveal className="lk-head" dir="up">
            <span className="eyebrow" style={{ justifyContent: "center", color: "rgba(255,255,255,0.9)" }}>✦ Who We're Looking For</span>
            <h2>We're always looking for<br />enthusiastic people who are:</h2>
          </Reveal>
          <div className="lk-grid">
            {TRAITS.map((t, i) => (
              <Reveal className="lk-item" dir="up" delay={i * 0.06} key={t.l}>
                <div className="lk-icon">{t.icon}</div>
                <div className="lk-label">{t.l}<br />{t.l2}</div>
              </Reveal>
            ))}
          </div>
          <Reveal className="lk-cta" dir="up">
            <p>Whether you're starting your hospitality journey or looking for your next career move, we'd love to hear from you.</p>
            <h3>Ready to join The Brioche Team?</h3>
            <a href="mailto:ask@thebriocheteam.com" className="apply-btn" data-testid="apply-today">Apply Today</a>
          </Reveal>
        </div>
      </section>
    </InteriorLayout>
  );
}
