import InteriorLayout from "../components/InteriorLayout";
import Reveal from "../components/Reveal";
import { INSTA } from "../lib/site";
import "../legal.css";

const SECTIONS = [
  { h: "About Us", items: ["The Brioche Team is a dessert brand dedicated to creating handcrafted brioche-based desserts, as well as premium desserts in general, giving unforgettable customer experiences.", "This website has been created to provide information about:", "Our story", "Our menu", "Events", "Corporate catering", "Franchise opportunities", "Our locations", "Contact information", "This website is for informational purposes only and does not currently facilitate online purchases."] },
  { h: "Website Use", items: ["You agree to use this website lawfully and respectfully.", "You must not:", "Use the website for any unlawful purpose.", "Attempt to gain unauthorised access to our systems.", "Introduce viruses or malicious software.", "Copy, scrape or reproduce website content without permission.", "Interfere with the operation or security of the website.", "We reserve the right to restrict or terminate access where misuse is identified."] },
  { h: "Accuracy of Information", items: ["We make every reasonable effort to ensure the information on our website is accurate and up to date.", "However, information including menus, products, opening hours, locations, event availability and franchise opportunities may change without notice.", "We do not guarantee that all information will always be complete, current or free from errors."] },
  { h: "Menu Information", items: ["The menu displayed on this website is intended as a guide only.", "Product availability may vary between locations, events or seasonal promotions.", "Images are provided for illustrative purposes and actual products may vary slightly in appearance."] },
  { h: "Allergens", items: ["Our products may contain or come into contact with allergens including, but not limited to:", "Wheat (Gluten)", "Milk", "Eggs", "Soy", "Nuts", "Peanuts", "Sesame", "Although we take great care in preparing our products, we cannot guarantee any item is completely free from allergens due to shared preparation environments.", "Customers with food allergies or dietary requirements are encouraged to speak with our team before purchasing at one of our locations or events."] },
  { h: "Intellectual Property", items: ["Unless otherwise stated, all content on this website is owned by The Brioche Team.", "This includes but is not limited to:", "Logos", "Branding", "Photography", "Videos", "Written content", "Graphics", "Menus", "Recipes", "Website design", "No content may be copied, reproduced, modified or used commercially without our prior written permission."] },
  { h: "Franchise Information", items: ["Information provided regarding franchise opportunities is intended as general guidance only.", "Submitting an enquiry does not constitute an offer or guarantee of a franchise agreement.", "The Brioche Team reserves the right to determine eligibility, conduct due diligence and approve or decline applications at its sole discretion."] },
  { h: "External Links", items: ["Our website may contain links to third-party websites for your convenience.", "We are not responsible for the content, security or privacy practices of external websites and do not endorse any third-party content unless expressly stated."] },
  { h: "Limitation of Liability", items: ["To the fullest extent permitted by law, The Brioche Team shall not be liable for any direct, indirect or consequential loss arising from:", "use of this website.", "Inability to access this website.", "Reliance on information contained on this website.", "Technical interruptions or website errors.", "Nothing within these Terms excludes liability which it cannot legally be excluded under applicable law."] },
  { h: "Website Availability", items: ["Whilst we aim to ensure uninterrupted access to our website, we cannot guarantee continuous availability.", "We may suspend, withdraw or update the website at any time for maintenance, security or operational reasons without notice."] },
  { h: "Privacy", items: ["Your use of this website is also governed by our Privacy Policy and Cookie Policy, which explain how we collect, use and protect your personal information."] },
  { h: "Changes to These Terms", items: ["We reserve the right to amend these Terms & Conditions at any time.", "Updated versions will be published on this page and become effective immediately upon publication."] },
  { h: "Governing Law", items: ["These Terms & Conditions are governed by the laws of England and Wales.", "Any disputes relating to these Terms or the use of this website shall be subject to the exclusive jurisdiction of the courts of England and Wales."] },
  { h: "Contact Us", items: ["If you have any questions regarding these Terms & Conditions, please contact us:", "The Brioche Team", "Email: ask@thebriocheteam.com (update if different)", "Website: www.thebriocheteam.com (update if different)"] },
  { h: "Consumer Notice", items: ["Nothing within these Terms & Conditions affects any statutory rights available to consumers under applicable UK law."] },
];

export default function Terms() {
  return (
    <InteriorLayout insta={INSTA.events} breadcrumb="Terms & Conditions">
      <section className="legal sec-bg-orange" data-testid="terms-page">
        <div className="wrap">
          <Reveal dir="up">
            <span className="eyebrow" style={{ color: "rgba(255,255,255,0.9)" }}>✦ Terms</span>
            <h1>Terms &amp; Conditions</h1>
          </Reveal>
          {SECTIONS.map((s, i) => (
            <Reveal className="legal-block" dir="up" delay={0.02 * i} key={i}>
              <h2>{s.h}</h2>
              <ul>{s.items.map((it, j) => <li key={j}>{it}</li>)}</ul>
            </Reveal>
          ))}
        </div>
      </section>
    </InteriorLayout>
  );
}
