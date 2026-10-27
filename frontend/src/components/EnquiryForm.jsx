import { useState } from "react";
import { toast } from "sonner";
import { api } from "../lib/site";

const EVENT_TYPES = ["Wedding", "Birthday", "Private Party", "Corporate Event", "Festival", "Other"];
const INVESTMENTS = ["£25k – £50k", "£50k – £100k", "£100k – £250k", "£250k+"];
const YESNO = ["Yes", "No"];

export default function EnquiryForm({ type }) {
  const [form, setForm] = useState({});
  const [submitting, setSubmitting] = useState(false);

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = async (e) => {
    e.preventDefault();
    if (!form.full_name || !form.email) {
      toast.error("Please add your name and email.");
      return;
    }
    setSubmitting(true);
    try {
      await api.post("/enquiries", { type, ...form });
      toast.success("Thank you. Your enquiry has been received. We'll be in touch soon.");
      setForm({});
      e.target.reset();
    } catch (err) {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form onSubmit={submit} data-testid={`${type}-enquiry-form`}>
      {type === "event" ? (
        <>
          <div className="field-row">
            <div className="field">
              <label>Full Name</label>
              <input type="text" placeholder="your full name" value={form.full_name || ""} onChange={set("full_name")} data-testid="input-full-name" />
            </div>
            <div className="field">
              <label>Company Name (if applicable)</label>
              <input type="text" placeholder="Company name" value={form.company_name || ""} onChange={set("company_name")} data-testid="input-company" />
            </div>
          </div>
          <div className="field-row">
            <div className="field">
              <label>Email Address</label>
              <input type="email" placeholder="Your email address" value={form.email || ""} onChange={set("email")} data-testid="input-email" />
            </div>
            <div className="field">
              <label>Telephone Number</label>
              <input type="tel" placeholder="Your telephone number" value={form.phone || ""} onChange={set("phone")} data-testid="input-phone" />
            </div>
          </div>
          <div className="field-row">
            <div className="field">
              <label>Event Type</label>
              <select value={form.event_type || ""} onChange={set("event_type")} data-testid="select-event-type">
                <option value="">Select event type</option>
                {EVENT_TYPES.map((t) => <option key={t} value={t}>{t}</option>)}
              </select>
            </div>
            <div className="field">
              <label>Event Date</label>
              <input type="date" value={form.event_date || ""} onChange={set("event_date")} data-testid="input-event-date" />
            </div>
          </div>
          <div className="field">
            <label>Event Location</label>
            <textarea placeholder="Enter event location" value={form.event_location || ""} onChange={set("event_location")} data-testid="input-event-location" />
          </div>
          <div className="field">
            <label>Estimated Guest Numbers</label>
            <input type="text" placeholder="Enter estimated guest numbers" value={form.guest_numbers || ""} onChange={set("guest_numbers")} data-testid="input-guests" />
          </div>
          <div className="field">
            <label>Tell Us About Your Event</label>
            <textarea placeholder="More details about your event" value={form.message || ""} onChange={set("message")} data-testid="input-message" />
          </div>
        </>
      ) : (
        <>
          <div className="field">
            <label>Full Name</label>
            <input type="text" placeholder="your full name" value={form.full_name || ""} onChange={set("full_name")} data-testid="input-full-name" />
          </div>
          <div className="field-row">
            <div className="field">
              <label>Email Address</label>
              <input type="email" placeholder="Your email address" value={form.email || ""} onChange={set("email")} data-testid="input-email" />
            </div>
            <div className="field">
              <label>Telephone Number</label>
              <input type="tel" placeholder="Your telephone number" value={form.phone || ""} onChange={set("phone")} data-testid="input-phone" />
            </div>
          </div>
          <div className="field">
            <label>Current Location</label>
            <textarea placeholder="Enter current location" value={form.current_location || ""} onChange={set("current_location")} data-testid="input-current-location" />
          </div>
          <div className="field">
            <label>Preferred Locations</label>
            <textarea placeholder="Enter preferred locations" value={form.preferred_locations || ""} onChange={set("preferred_locations")} data-testid="input-preferred-location" />
          </div>
          <div className="field-row">
            <div className="field">
              <label>Available Investment</label>
              <select value={form.investment || ""} onChange={set("investment")} data-testid="select-investment">
                <option value="">Select an option</option>
                {INVESTMENTS.map((t) => <option key={t} value={t}>{t}</option>)}
              </select>
            </div>
            <div className="field">
              <label>Have You Owned A Business Before</label>
              <select value={form.owned_business || ""} onChange={set("owned_business")} data-testid="select-owned">
                <option value="">Select an option</option>
                {YESNO.map((t) => <option key={t} value={t}>{t}</option>)}
              </select>
            </div>
          </div>
          <div className="field">
            <label>Why Are You Interested In Brioche Team?</label>
            <textarea placeholder="More details on this" value={form.message || ""} onChange={set("message")} data-testid="input-message" />
          </div>
        </>
      )}
      <button type="submit" className="btn-submit" disabled={submitting} data-testid="submit-enquiry">
        {submitting ? "Sending..." : "Submit Form"}
      </button>
    </form>
  );
}
