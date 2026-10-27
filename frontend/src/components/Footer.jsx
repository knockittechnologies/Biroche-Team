import { Link } from "react-router-dom";
import { ChevronUp, Instagram, Music } from "lucide-react";
import { CONTACT } from "../lib/site";

export default function Footer() {
  const toTop = () => {
    if (window.__lenis) window.__lenis.scrollTo(0, { duration: 1.2 });
    else window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bt-footer" data-testid="site-footer">
      <div className="wrap footer-top">
        <div className="footer-cols footer-cols-v2">
          <ul>
            <li><Link to="/menu">Our Menu</Link></li>
            <li><Link to="/locations">Locations</Link></li>
            <li><Link to="/brand-origin">Brand Origin</Link></li>
            <li><Link to="/contact">Contact us</Link></li>
            <li><Link to="/franchise">Franchise</Link></li>
          </ul>
          <ul>
            <li><Link to="/events">Events &amp; Corporate</Link></li>
            <li><Link to="/careers">Career</Link></li>
            <li><Link to="/terms">Terms &amp; Conditions</Link></li>
            <li><Link to="/privacy">Privacy Policy</Link></li>
          </ul>
          <div /> {/* spacer */}
          <div className="footer-contact">
            <div className="label">Mail id</div>
            <a className="big" href="mailto:ask@thebriocheteam.com">ask@thebriocheteam.com</a>
            <div className="label">Mobile Number</div>
            <a className="big" href="tel:+447916960123">+44 79169 60123</a>
          </div>
        </div>
      </div>

      <div className="footer-divider" />
      <div className="wrap footer-brand">
        <div className="wordmark">THE<br />BRIOCHE<br />TEAM</div>
        <button className="back-top" onClick={toTop} aria-label="Back to top" data-testid="back-to-top">
          <ChevronUp size={22} />
        </button>
      </div>

      <div className="wrap footer-bottom">
        <span>© 2026&nbsp;&nbsp;THE BRIOCHE TEAM. ALL RIGHTS RESERVED.</span>
        <span className="social">
          <a href={CONTACT.instagramUrl} target="_blank" rel="noopener noreferrer"><Instagram size={14} /> Instagram</a>
          <a href={CONTACT.tiktokUrl} target="_blank" rel="noopener noreferrer"><Music size={14} /> Tiktok</a>
        </span>
      </div>

      <div className="wrap footer-credit">
        <span>
          Powered by <a href="https://www.knockittechnologies.co.uk/" target="_blank" rel="noopener noreferrer"><strong>KnockIt Technologies</strong></a>
          {" · "}
          <a href="mailto:official@knockittechnologies.co.uk">official@knockittechnologies.co.uk</a>
          {" · "}
          <a href="tel:+447491014905">+44 7491 014905</a>
        </span>
      </div>
    </footer>
  );
}
