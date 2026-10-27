import InteriorLayout from "../components/InteriorLayout";
import Reveal from "../components/Reveal";
import { INSTA } from "../lib/site";
import "../legal.css";

const SECTIONS = [
  { h: "Who We Are", items: ["The Brioche Team is a dessert brand.", "This Privacy Policy applies to all visitors of our website and prospective customers, including:", "Existing enquiries", "Events", "Corporate patrons", "Franchise applications", "Media enquiries", "Employment opportunities", "Other business enquiries"] },
  { h: "Information We Collect", items: ["Depending on how you interact with us, we may collect the following information:", "Information You Provide", "When you contact us or fill our contact form, we may collect:", "Name", "Email address", "Telephone number", "Company name (if applicable)", "Event details", "Franchise enquiry information", "Any information you include in the body of your message", "Information Collected Automatically", "When you visit our website, we may automatically collect certain:", "IP address", "Browser type", "Device type", "Operating system", "Pages visited", "Time spent on pages", "Referring website statistics", "Referring source", "This information helps us improve our website and user experience."] },
  { h: "How We Use Your Information", items: ["We use your personal information to:", "Respond to your enquiries", "Process franchise enquiries", "Respond to corporate event enquiries", "Improve our website", "Improve website performance", "To facilitate business partnership matters", "Comply with legal obligations", "We will only use your information where we have a lawful basis to do so."] },
  { h: "Lawful Basis for Processing", items: ["Under UK GDPR, we process your information based on one or more of the following legal grounds:", "Your consent", "Legitimate business interests", "Compliance with legal obligations", "Performance of a contract, where applicable"] },
  { h: "Marketing Communications", items: ["We will only send you marketing communications if:", "You have opted-in to receive it, or", "You have voluntarily consented to it in certain applicable law.", "You can withdraw your consent to receive marketing communications at any time."] },
  { h: "Cookies", items: ["Our website uses cookies to improve functionality and remember how visitors use our website:", "Analyse how the website:", "Remember user preferences.", "Support website performance.", "Analyse website behaviour.", "Measure business traffic.", "You can change or refuse cookies through your browser settings.", "Please see our Cookie Policy for further information."] },
  { h: "Sharing Your Information", items: ["We do not sell your personal information.", "We may share information with trusted third-party service providers, including:", "Website hosting providers", "IT support providers", "Analytics providers", "Professional advisers", "Government or regulatory authorities where required by law.", "All third parties are required to keep your information secure and confidential."] },
  { h: "Data Security", items: ["We take appropriate technical and organisational measures to protect your personal information from:", "Loss", "Unauthorised access", "Alteration", "Disclosure", "Misuse", "Although no data transmission is guaranteed we will implement effective controls to be reasonable secure."] },
  { h: "Data Retention", items: ["We only keep your personal information for as long as necessary for:", "Support businesses", "Fulfil legal obligations", "Resolve disputes", "Maintain business records", "When information is no longer required, it will be securely deleted or anonymised."] },
  { h: "Your Rights", items: ["Under UK GDPR, you have the right to:", "Request access to your personal information.", "Request correction of your information.", "Request erasure of your personal information (where applicable).", "Request restriction of processing.", "Object to certain types of processing.", "Request transfer of your personal information.", "Withdraw consent (where processing is based on consent)."] },
  { h: "Your Rights", items: ["Under UK GDPR, you have the right to:", "Request access to your personal information.", "Request correction of inaccurate information.", "Request erasure of your personal information (where applicable).", "Request restriction of processing.", "Object to certain types of processing.", "Request transfer of your personal information.", "Withdraw consent (where processing is based on consent).", "To exercise any of these rights, please contact us using the details below."] },
  { h: "Third-Party Websites", items: ["Our website may contain links to external websites.", "We are not responsible for the privacy practices or content of these such websites.", "We encourage you to read their privacy policies before providing any personal information."] },
  { h: "Children's Privacy", items: ["Our website is not intended for children under the age of 13.", "We do not knowingly collect personal information from children.", "If we become aware that we have collected personal information, please contact us so that we can remove it."] },
  { h: "Changes to This Privacy Policy", items: ["We may update this Privacy Policy from time to time to reflect changes in operations, our services or our business practices.", "Any updates will be published on this page with a revised \"Last Updated\" date."] },
  { h: "Contact Us", items: ["If you have any questions about this Privacy Policy or how we handle your personal information, please contact us:", "The Brioche Team", "Email: ask@thebriocheteam.com (update if different)", "Website: www.thebriocheteam.com (update if different)"] },
  { h: "Complaints", items: ["If you're not happy with how we have handled your personal information, please contact us first and we will try to resolve your concerns.", "You also have the right to lodge a complaint with the Information Commissioner's Office (ICO), the UK's data protection authority, at the details provided:", "Information Commissioner's Office", "Wycliffe House", "Water Lane", "Wilmslow", "Cheshire", "SK9 5AF"] },
  { h: "Our Commitment", items: ["At The Brioche Team we is one of core ingredients. Whether you're preparing an event, enquiring about a franchise, or a business opportunity, you are committed to protecting your personal information with the same care and passion that you infuse into every recipe we create."] },
];

export default function Privacy() {
  return (
    <InteriorLayout insta={INSTA.events} breadcrumb="Privacy policy">
      <section className="legal sec-bg-orange" data-testid="privacy-page">
        <div className="wrap">
          <Reveal dir="up">
            <span className="eyebrow" style={{ color: "rgba(255,255,255,0.9)" }}>✦ Join The Brioche Team</span>
            <h1>Privacy Policy</h1>
            <p className="lead">At The Brioche Team, we are committed to protecting your privacy and handling your personal information responsibly. This Privacy Policy explains how we collect, use, store and protect your information when you visit our website or contact us.</p>
            <p className="lead">We are committed to complying with the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018.</p>
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
