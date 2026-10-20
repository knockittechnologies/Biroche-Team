import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import Header from "./Header";
import Footer from "./Footer";
import InstagramStrip from "./InstagramStrip";

// Shared shell — orange header (matches Home) on cream/peach base, separated
// from the page body by a single hairline border; each section below sets
// its own colour.
export default function InteriorLayout({ children, insta, breadcrumb = "Contact us" }) {
  return (
    <div className="bt bt-page-peach interior-shell">
      <Header variant="orange" />
      <div className="breadcrumb breadcrumb-peach">
        <div className="wrap">
          <Link to="/">Home</Link>
          <ChevronRight size={12} />
          <span>{breadcrumb}</span>
        </div>
      </div>
      <main>{children}</main>
      {insta && <InstagramStrip images={insta} />}
      <Footer />
    </div>
  );
}
