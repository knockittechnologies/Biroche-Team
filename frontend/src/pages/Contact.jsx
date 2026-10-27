import { useState } from "react";
import { toast } from "sonner";
import InteriorLayout from "../components/InteriorLayout";
import Reveal from "../components/Reveal";
import { api, INSTA } from "../lib/site";
import "../contact.css";

const TOPICS = ["General Enquiry", "Event / Catering", "Franchise", "Careers", "Other"];

export default function Contact() {
  const [f, setF] = useState({});
  const [busy, setBusy] = useState(false);
  const set = (k) => (e) => setF((s) => ({ ...s, [k]: e.target.value }));

  const submit = async (e) => {
    e.preventDefault();
    if (!f.full_name || !f.email) { toast.error("Please add your name and email."); return; }
    setBusy(true);
    try {
      await api.post("/enquiries", { type: "contact", full_name: f.full_name, email: f.email, phone: f.phone || "", event_type: f.topic || "", message: f.message || "" });
      toast.success("Thank you. Your message has been received. We'll be in touch soon.");
      setF({}); e.target.reset();
    } catch { toast.error("Something went wrong. Please try again."); }
    finally { setBusy(false); }
  };

  return (
    <InteriorLayout insta={INSTA.events} breadcrumb="Contact us">
      <section className="contact-hero">
        <div className="wrap">
          <Reveal dir="up">
            <span className="eyebrow" style={{ justifyContent: "center" }}>✦ Contact us</span>
            <h1>Get in touch with us</h1>
            <p>Our team endeavors to process and respond to inquiries within five business days. Please be advised that due to exceptionally high message volumes, we may not be able to reply to every submission.</p>
          </Reveal>
          <div className="ct-cards">
            <Reveal className="ct-card" dir="up" delay={0}>
              <h3 className="orange">Mobile Number</h3>
              <p>+44 79169 60123</p>
              <h3 className="orange" style={{ marginTop: 26 }}>Mail id</h3>
              <p>ask@thebriocheteam.com</p>
            </Reveal>
            <Reveal className="ct-card" dir="up" delay={0.08}>
              <h3>Flagship store</h3>
              <p style={{ marginTop: 30 }}>1st Floor, 330 Ladypool Rd, Sparkbrook, Birmingham B12 8JY</p>
            </Reveal>
            <Reveal className="ct-card" dir="up" delay={0.16}>
              <h3>Coming soon</h3>
              <p style={{ marginTop: 30 }}>Andalusia Food Park, Warwick Rd, Tyseley, Birmingham B11 2HP</p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="contact-form-sec">
        <div className="wrap">
          <Reveal className="cfs-head" dir="up">
            <h2>Enquiry Form</h2>
          </Reveal>
          <Reveal className="cfs-form" dir="up">
            <form onSubmit={submit} data-testid="contact-enquiry-form">
              <div className="field">
                <label>Full Name</label>
                <input type="text" placeholder="your full name" value={f.full_name || ""} onChange={set("full_name")} data-testid="ct-name" />
              </div>
              <div className="field-row">
                <div className="field">
                  <label>Email Address</label>
                  <input type="email" placeholder="Your email address" value={f.email || ""} onChange={set("email")} data-testid="ct-email" />
                </div>
                <div className="field">
                  <label>Telephone Number</label>
                  <input type="tel" placeholder="Your telephone number" value={f.phone || ""} onChange={set("phone")} data-testid="ct-phone" />
                </div>
              </div>
              <div className="field">
                <label>What is it about</label>
                <select value={f.topic || ""} onChange={set("topic")} data-testid="ct-topic">
                  <option value="">Select an option</option>
                  {TOPICS.map((t) => <option key={t} value={t}>{t}</option>)}
                </select>
              </div>
              <div className="field">
                <label>Message</label>
                <textarea placeholder="Enter your message" value={f.message || ""} onChange={set("message")} data-testid="ct-message" />
              </div>
              <button type="submit" className="btn-submit" disabled={busy} data-testid="ct-submit">
                {busy ? "Sending..." : "Submit Form"}
              </button>
            </form>
          </Reveal>
        </div>
      </section>
    </InteriorLayout>
  );
}
