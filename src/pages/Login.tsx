import { useState } from "react";
import type { FormEvent } from "react";
import "../styles/Login.css";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    if (!username.trim() || !password.trim()) {
      setMessage("Please enter username and password");
      return;
    }

    setLoading(true);
    setMessage("");

    try {
      const baseUrl = import.meta.env.VITE_API_BASE_URL;
      const loginUrl = `${baseUrl}/api/AdminLogin`;

      const response = await fetch(loginUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          password,
        }),
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(errorText || "Login failed");
      }

      const data = await response.json();

      localStorage.setItem(
        "auth",
        JSON.stringify({
          user: username,
          token: data.token,
        })
      );

      setMessage("Login successful");
      window.location.href = "/admin";
    } catch (error) {
      if (error instanceof Error) {
        setMessage(error.message || "Invalid username or password");
      } else {
        setMessage("Something went wrong");
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="login-wrapper">
      <form onSubmit={handleSubmit} className="login-card">
        <h1 className="login-title">Login</h1>

        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="login-input"
          autoComplete="username"
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="login-input"
          autoComplete="current-password"
          required
        />

        <button
          type="submit"
          disabled={loading}
          className="login-button"
        >
          {loading ? "Logging in..." : "Login"}
        </button>

        {message && <p className="login-message">{message}</p>}
      </form>
    </div>
  );
}