import { useState } from "react";
import "./Form.css";

export type UserFormData = {
  name: string;
  surname: string;
  email: string;
  occupation: string;
  organization: string;
};

type Props = {
  onClose: () => void;
  onSuccess: () => void;
  initialEmail?: string;
};

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

function UserForm({ onClose, onSuccess, initialEmail = "" }: Props) {
  const [formData, setFormData] = useState<UserFormData>({
    name: "",
    surname: "",
    email: initialEmail,
    occupation: "",
    organization: "",
  });

  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (error) setError("");
  };

  const isValidEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !formData.name.trim() ||
      !formData.surname.trim() ||
      !formData.email.trim() ||
      !formData.occupation.trim() ||
      !formData.organization.trim()
    ) {
      setError("Please fill in all fields.");
      return;
    }

    if (!isValidEmail(formData.email)) {
      setError("Please enter a valid email address.");
      return;
    }

    if (!API_BASE_URL) {
      setError("API base URL is missing. Check your .env file.");
      return;
    }

    try {
      setSubmitting(true);
      setError("");

      const response = await fetch(`${API_BASE_URL}/api/Users`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(errorText || "Failed to submit the form.");
      }

      onSuccess();
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message || "Failed to submit the form.");
      } else {
        setError("Failed to submit the form.");
      }
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
          <h2>User Details</h2>
          <p>Please enter your details before downloading.</p>
        </div>

        {error && <div className="userform-error">{error}</div>}

        <form onSubmit={handleSubmit} className="userform-form">
          <div className="userform-grid">
            <div className="userform-field">
              <label htmlFor="name">First Name</label>
              <input
                id="name"
                type="text"
                name="name"
                placeholder="Enter your first name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>

            <div className="userform-field">
              <label htmlFor="surname">Surname</label>
              <input
                id="surname"
                type="text"
                name="surname"
                placeholder="Enter your surname"
                value={formData.surname}
                onChange={handleChange}
              />
            </div>

            <div className="userform-field userform-field-full">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="Enter your email address"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div className="userform-field">
              <label htmlFor="occupation">Occupation</label>
              <input
                id="occupation"
                type="text"
                name="occupation"
                placeholder="Your role or profession"
                value={formData.occupation}
                onChange={handleChange}
              />
            </div>

            <div className="userform-field">
              <label htmlFor="organization">Organization</label>
              <input
                id="organization"
                type="text"
                name="organization"
                placeholder="Company or institution"
                value={formData.organization}
                onChange={handleChange}
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
              {submitting ? "Submitting..." : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default UserForm;