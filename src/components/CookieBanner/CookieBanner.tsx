import { useEffect, useState, useCallback } from "react";
import "./CookieBanner.css";

type ConsentStatus = "accepted" | "declined" | null;

const COOKIE_CONSENT_KEY = "cookieConsent";

const CookieBanner: React.FC = () => {
  const [ready, setReady] = useState(false);
  const [consent, setConsent] = useState<ConsentStatus>(null);

  useEffect(() => {
    const storedConsent = localStorage.getItem(
      COOKIE_CONSENT_KEY
    ) as ConsentStatus;

    const timer = setTimeout(() => {
      if (!storedConsent) {
        setConsent(null);
      } else {
        setConsent(storedConsent);
      }
      setReady(true);
    }, 200);

    return () => clearTimeout(timer);
  }, []);

  const handleAccept = useCallback(() => {
    localStorage.setItem(COOKIE_CONSENT_KEY, "accepted");
    setConsent("accepted");
  }, []);

  const handleDecline = useCallback(() => {
    localStorage.setItem(COOKIE_CONSENT_KEY, "declined");
    setConsent("declined");
  }, []);

  // Don't render until ready
  if (!ready) return null;

  // If already decided, don't show banner
  if (consent !== null) return null;

  return (
    <div className="cookie-banner">
      <div className="cookie-banner__content">
        <p className="cookie-banner__text">
          We use cookies to improve your experience and ensure the site works properly.
        </p>
      </div>

      <div className="cookie-banner__actions">
        <button
          className="cookie-btn cookie-btn--secondary"
          onClick={handleDecline}
        >
          Decline
        </button>
        <button
          className="cookie-btn cookie-btn--primary"
          onClick={handleAccept}
        >
          Accept
        </button>
      </div>
    </div>
  );
};

export default CookieBanner;