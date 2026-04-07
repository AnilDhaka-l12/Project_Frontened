import { useState } from "react";
import { apiRequest } from "../../../utils/api";
import "./PostUser.css";

function PostUser() {
  const [showForm, setShowForm] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    email: "",
    occupation: "",
    organization: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      setLoading(true);
      setError("");
      setSuccess("");

      const response = await apiRequest("/api/Users", {
        method: "POST",
        body: JSON.stringify(formData),
      });

      setSuccess("User created successfully ✅");

      setFormData({
        name: "",
        surname: "",
        email: "",
        occupation: "",
        organization: "",
      });

      console.log("POST RESPONSE:", response);
    } catch (err: any) {
      setError(err.message || "Failed to create user");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {/* POST BUTTON */}
      <div
        className="endpoint-card post-card"
        onClick={() => setShowForm(!showForm)}
      >
        <span className="endpoint-method post-method">POST</span>
        <span className="endpoint-path">Users</span>
      </div>

      {/* FORM */}
      {showForm && (
        <div className="post-form-container">
          <form onSubmit={handleSubmit} className="post-form">
            <input
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <input
              name="surname"
              placeholder="Surname"
              value={formData.surname}
              onChange={handleChange}
              required
            />

            <input
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <input
              name="occupation"
              placeholder="Occupation"
              value={formData.occupation}
              onChange={handleChange}
              required
            />

            <input
              name="organization"
              placeholder="Organization"
              value={formData.organization}
              onChange={handleChange}
              required
            />

            <button type="submit" disabled={loading}>
              {loading ? "Creating..." : "Create User"}
            </button>
          </form>

          {error && <p className="error-text">{error}</p>}
          {success && <p className="success-text">{success}</p>}
        </div>
      )}
    </div>
  );
}

export default PostUser;