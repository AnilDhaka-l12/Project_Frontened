import { useState } from "react";
import "./Form.css";

type Props = {
  onClose: () => void;
  onSubmitEmail: (email: string) => Promise<void>;
};

function EmailCheckForm({ onClose, onSubmitEmail }: Props) {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const isValidEmail = (value: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email.trim()) {
      setError("Please enter your email.");
      return;
    }

    if (!isValidEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    try {
      setSubmitting(true);
      setError("");
      await onSubmitEmail(email.trim());
    } catch (err: any) {
      setError(err.message || "Something went wrong.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="userform-overlay">
      <div className="userform-modal">
        <button
          type="button"
          className="userform-close"
          onClick={onClose}
          aria-label="Close form"
        >
          ×
        </button>

        <div className="userform-header">
          <div className="userform-badge">Download Access</div>
          <h2>Enter Your Email</h2>
          <p>Please enter your email to continue to downloads.</p>
        </div>

        {error && <div className="userform-error">{error}</div>}

        <form onSubmit={handleSubmit} className="userform-form">
          <div className="userform-grid">
            <div className="userform-field userform-field-full">
              <label htmlFor="check-email">Email</label>
              <input
                id="check-email"
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (error) setError("");
                }}
              />
            </div>
          </div>

          <div className="userform-actions">
            <button
              type="button"
              onClick={onClose}
              className="userform-cancel"
              disabled={submitting}
            >
              Cancel
            </button>

            <button
              type="submit"
              className="userform-submit"
              disabled={submitting}
            >
              {submitting ? "Checking..." : "Continue"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EmailCheckForm;