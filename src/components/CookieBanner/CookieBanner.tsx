import { useEffect, useState } from "react";
import "./CookieBanner.css";

function CookieBanner() {
  const [ready, setReady] = useState(false);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    setShow(!consent);
    setReady(true);
  }, []);

  const accept = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setShow(false);
  };

  const decline = () => {
    localStorage.setItem("cookieConsent", "declined");
    setShow(false);
  };

  if (!ready || !show) return null;

  return (
    <div className="cookie-banner">
      <div className="cookie-banner__content">
        <h3>We use cookies</h3>
        <p>
          We use necessary cookies to keep the site working properly.
        </p>
      </div>

      <div className="cookie-banner__actions">
        <button className="cookie-btn cookie-btn--secondary" onClick={decline}>
          Decline
        </button>
        <button className="cookie-btn cookie-btn--primary" onClick={accept}>
          Accept
        </button>
      </div>
    </div>
  );
}

export default CookieBanner;