import { useState } from "react";
import "../styles/Support.css";

function Support() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    issueType: "General Question",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log("Support Request:", formData);

    setSubmitted(true);

    setFormData({
      name: "",
      email: "",
      issueType: "General Question",
      message: "",
    });
  };

  return (
    <div className="support-page">
      <div className="support-container">
        <h1>Contact Support</h1>
        <p>
          Need help? Submit your issue and our support team will assist you as soon as possible.
        </p>

        {submitted && (
          <div className="success-message">
            Your support request has been sent successfully.
          </div>
        )}

        <form className="support-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <select
            name="issueType"
            value={formData.issueType}
            onChange={handleChange}
          >
            <option>General Question</option>
            <option>Installation Issue</option>
            <option>Bug Report</option>
            <option>Download Problem</option>
            <option>App Performance Issue</option>
            <option>Feature Not Working</option>
          </select>

          <textarea
            name="message"
            placeholder="Describe your issue in detail..."
            rows={6}
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>

          <button type="submit">Submit Request</button>
        </form>
      </div>
    </div>
  );
}

export default Support;