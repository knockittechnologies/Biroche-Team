import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, X } from "lucide-react";
import { NAV, CONTACT } from "../lib/site";

const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

export default function Header({ variant = "orange" }) {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const tone = variant === "peach" ? "dark" : "light";

  return (
    <header className={`bt-header ${variant}`} data-testid="site-header">
      <div className="wrap top-row">
        <div className="left-block">
          <button
            className={`hamburger ${tone}`}
            aria-label="Open menu"
            data-testid="menu-toggle"
            onClick={() => setOpen(true)}
          >
            <span /><span /><span />
          </button>
          <div className={`divider-v ${tone}`} />
          <div className="call-block">
            <div className={`call-icon ${tone}`}>
              {tone === "dark" ? <PhoneIcon /> : <Phone size={14} />}
            </div>
            <div className="call-text">
              <div className="book-now">BOOK NOW</div>
              <div className="call-num">Call : {CONTACT.phone}</div>
            </div>
          </div>
        </div>

        <Link to="/" className={`bt-logo ${tone}`} data-testid="logo-link">
          THE BRIOCHE TEAM
        </Link>

        <div className="right-block">
          <Link to="/contact" className={`btn-book contact-orange`} data-testid="contact-us-btn">
            CONTACT US
          </Link>
        </div>
      </div>

      <nav className={`bt-nav ${tone}`} data-testid="main-nav">
        <ul>
          {NAV.map((item) => {
            const active = location.pathname === item.to;
            return (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className={active ? "active" : ""}
                  data-testid={`nav-${item.to === "/" ? "home" : item.to.slice(1)}`}
                >
                  {item.label}
                  <span className="ul" />
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <AnimatePresence>
        {open && (
          <div className="bt-drawer" data-testid="mobile-drawer">
            <motion.div
              className="bt-drawer-panel"
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.45, ease: [0.76, 0, 0.24, 1] }}
            >
              <button className="bt-drawer-close" onClick={() => setOpen(false)} aria-label="Close menu" data-testid="drawer-close">
                <X size={28} />
              </button>
              {NAV.map((item, i) => (
                <motion.div
                  key={item.to}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.15 + i * 0.06 }}
                >
                  <Link to={item.to} onClick={() => setOpen(false)}>
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </motion.div>
            <div className="bt-drawer-back" onClick={() => setOpen(false)} />
          </div>
        )}
      </AnimatePresence>
    </header>
  );
}
