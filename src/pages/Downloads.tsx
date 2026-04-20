import { useEffect, useState, useCallback, useRef } from "react";
import UserForm from "../components/Form/Form";
import EmailCheckForm from "../components/Form/EmailCheckForm";
import "../styles/Downloads.css";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

type VersionItem = {
  label: string;
  fileName: string;
};

type DownloadItem = {
  title: string;
  badge: string;
  descriptionTop: string[];
  descriptionBottom: string;
  buttonText: string;
  icon: string;
  cardClass: string;
  btnClass: string;
  platform: "windows" | "linux";
  versions: VersionItem[];
};

const TOKEN_EXPIRY_BUFFER_MS = 60000;
const MAX_RETRY_ATTEMPTS = 3;
const RETRY_DELAY_MS = 1000;

function Downloads() {
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState<"error" | "success">("error");
  const [showEmailCheckForm, setShowEmailCheckForm] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [showVersionModal, setShowVersionModal] = useState(false);
  const [selectedDownload, setSelectedDownload] = useState<DownloadItem | null>(null);
  const [pendingFileName, setPendingFileName] = useState<string | null>(null);
  const [prefillEmail, setPrefillEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [downloadAttempts, setDownloadAttempts] = useState(0);
  const [lastAttemptTime, setLastAttemptTime] = useState(0);

  const abortControllerRef = useRef<AbortController | null>(null);

  const downloads: DownloadItem[] = [
    {
      title: "Installer Images",
      badge: "Recommended",
      descriptionTop: [
        "Direct access to hardware",
        "Customized kernel support",
        "No virtualization overhead",
      ],
      descriptionBottom:
        "Best choice for full performance and direct access to system hardware.",
      buttonText: "Download for Windows",
      icon: "🪟",
      cardClass: "installer-card",
      btnClass: "windows",
      platform: "windows",
      versions: [
        { label: "Windows v1.1", fileName: "Presentation.txt" },
        { label: "Windows v1.2", fileName: "Presentation.txt" },
        { label: "Windows v1.3", fileName: "Presentation.txt" },
      ],
    },
    {
      title: "Virtual Machines",
      badge: "Flexible Setup",
      descriptionTop: [
        "Snapshots functionality",
        "Isolated environment",
        "Quick installation workflow",
      ],
      descriptionBottom:
        "Ideal for testing, learning, and running the toolkit without changing your main system.",
      buttonText: "Download for Linux",
      icon: "🐧",
      cardClass: "vm-card",
      btnClass: "linux",
      platform: "linux",
      versions: [
        { label: "Linux v1.1", fileName: "Presentation.txt" },
        { label: "Linux v1.2", fileName: "Presentation.txt" },
        { label: "Linux v1.3", fileName: "Presentation.txt" },
      ],
    },
  ];

  useEffect(() => {
    return () => {
      abortControllerRef.current?.abort();
    };
  }, []);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (showVersionModal) setShowVersionModal(false);
        if (showEmailCheckForm) setShowEmailCheckForm(false);
        if (showForm) setShowForm(false);
      }
    };

    if (showVersionModal || showEmailCheckForm || showForm) {
      window.addEventListener("keydown", handleEsc);
      document.body.style.overflow = "hidden";
    }

    return () => {
      window.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "unset";
    };
  }, [showVersionModal, showEmailCheckForm, showForm]);

  const getToken = useCallback((): string | null => {
    try {
      const authData = localStorage.getItem("auth");
      if (!authData) return null;

      const parsedAuth = JSON.parse(authData);
      const token = parsedAuth?.token;

      if (token && typeof token === "string" && token.split(".").length === 3) {
        if (parsedAuth?.expiresAt) {
          const expiresAt = new Date(parsedAuth.expiresAt).getTime();
          if (Date.now() >= expiresAt - TOKEN_EXPIRY_BUFFER_MS) {
            return null;
          }
        }
        return token;
      }

      return null;
    } catch {
      return null;
    }
  }, []);

  const sanitizeFileName = (fileName: string): string => {
    return fileName.replace(/\.\./g, "").replace(/[\/\\]/g, "");
  };

  const isValidEmail = (email: string): boolean => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const checkRateLimit = (): boolean => {
    const now = Date.now();
    const timeSinceLastAttempt = now - lastAttemptTime;

    if (timeSinceLastAttempt > 60000) {
      setDownloadAttempts(1);
      setLastAttemptTime(now);
      return true;
    }

    if (downloadAttempts >= 5) {
      setMessageType("error");
      setMessage("Too many download attempts. Please wait a moment and try again.");
      return false;
    }

    setDownloadAttempts((prev) => prev + 1);
    setLastAttemptTime(now);
    return true;
  };

  const fetchWithRetry = useCallback(
    async (url: string, options: RequestInit, retryCount = 0): Promise<Response> => {
      try {
        const controller = new AbortController();
        abortControllerRef.current = controller;

        const response = await fetch(url, {
          ...options,
          signal: controller.signal,
        });

        if (response.status >= 500 && retryCount < MAX_RETRY_ATTEMPTS) {
          await new Promise((resolve) =>
            setTimeout(resolve, RETRY_DELAY_MS * Math.pow(2, retryCount))
          );
          return fetchWithRetry(url, options, retryCount + 1);
        }

        return response;
      } catch (error) {
        if (error instanceof Error && error.name === "AbortError") {
          throw new Error("Request was cancelled");
        }

        if (retryCount < MAX_RETRY_ATTEMPTS) {
          await new Promise((resolve) =>
            setTimeout(resolve, RETRY_DELAY_MS * Math.pow(2, retryCount))
          );
          return fetchWithRetry(url, options, retryCount + 1);
        }

        throw error;
      }
    },
    []
  );

  const startDownload = async (fileName: string) => {
    setMessage("");

    if (!checkRateLimit()) return;

    const sanitizedFileName = sanitizeFileName(fileName);

    if (!API_BASE_URL) {
      setMessageType("error");
      setMessage("System configuration error. Please contact support.");
      return;
    }

    setIsLoading(true);

    try {
      const token = getToken();

      const headers: HeadersInit = {
        Accept: "application/json",
        "X-Requested-With": "XMLHttpRequest",
      };

      if (token) {
        headers.Authorization = `Bearer ${token}`;
      }

      const response = await fetchWithRetry(
        `${API_BASE_URL}/api/FileDownload/link/${encodeURIComponent(
          sanitizedFileName
        )}?expiryMinutes=5`,
        {
          method: "GET",
          headers,
          cache: "no-store",
        }
      );

      let result: any = null;
      const contentType = response.headers.get("content-type");

      if (contentType?.includes("application/json")) {
        try {
          const text = await response.text();
          result = text ? JSON.parse(text) : null;
        } catch {
          result = null;
        }
      }

      if (response.status === 401 || response.status === 403) {
        localStorage.removeItem("auth");
        throw new Error("Your session has expired. Please log in again.");
      }

      if (!response.ok) {
        throw new Error(
          result?.message || `Failed to generate download link (${response.status}).`
        );
      }

      const downloadUrl = result?.data?.downloadUrl;

      if (!downloadUrl) {
        throw new Error("Download URL was not returned by the server.");
      }

      try {
        const url = new URL(downloadUrl);

        if (import.meta.env.PROD && url.protocol !== "https:") {
          throw new Error("Insecure download URL detected");
        }
      } catch {
        throw new Error("Invalid download URL received");
      }

      window.open(downloadUrl, "_blank", "noopener,noreferrer");

      setMessageType("success");
      setMessage("Download started successfully!");
      setDownloadAttempts(0);
    } catch (err: any) {
      setMessageType("error");

      if (err?.message?.includes("Failed to fetch")) {
        setMessage("Network error. Please check your connection and try again.");
      } else if (
        err?.message?.includes("Authentication") ||
        err?.message?.includes("session has expired")
      ) {
        setMessage("Please log in to continue.");
      } else {
        setMessage(err?.message || "Download failed. Please try again.");
      }

      console.error("Download error:", err);
    } finally {
      setIsLoading(false);
      abortControllerRef.current = null;
    }
  };

  const handleDownloadClick = (item: DownloadItem) => {
    setMessage("");
    setSelectedDownload(item);
    setShowVersionModal(true);
  };

  const handleVersionSelect = (fileName: string) => {
    setPendingFileName(fileName);
    setShowVersionModal(false);
    setShowEmailCheckForm(true);
  };

  const handleEmailCheck = async (email: string) => {
    if (!isValidEmail(email)) {
      setMessageType("error");
      setMessage("Please enter a valid email address.");
      return;
    }

    if (!API_BASE_URL) {
      setMessageType("error");
      setMessage("API base URL is missing. Check your .env file.");
      return;
    }

    setPrefillEmail(email);
    setIsLoading(true);

    try {
      const token = getToken();

      const headers: HeadersInit = {
        Accept: "application/json",
        "X-Requested-With": "XMLHttpRequest",
      };

      if (token) {
        headers.Authorization = `Bearer ${token}`;
      }

      const response = await fetchWithRetry(
        `${API_BASE_URL}/api/Users/email/${encodeURIComponent(email)}`,
        {
          method: "GET",
          headers,
          cache: "no-store",
        }
      );

      let data: any = null;
      const contentType = response.headers.get("content-type");

      if (contentType?.includes("application/json")) {
        try {
          const text = await response.text();
          data = text ? JSON.parse(text) : null;
        } catch {
          data = null;
        }
      }

      if (response.status === 404) {
        setShowEmailCheckForm(false);
        setShowForm(true);
        return;
      }

      if (response.status === 401 || response.status === 403) {
        localStorage.removeItem("auth");
        throw new Error("Your session has expired. Please log in again.");
      }

      if (!response.ok) {
        throw new Error(
          data?.message || `Failed to check email (${response.status}).`
        );
      }

      setShowEmailCheckForm(false);
      setMessageType("success");
      setMessage("Welcome back! Your download is starting...");

      if (pendingFileName) {
        await startDownload(pendingFileName);
        setPendingFileName(null);
      }
    } catch (err: any) {
      setMessageType("error");

      if (err?.message?.includes("Failed to fetch")) {
        setMessage("Network error. Please check your connection.");
      } else if (err?.message?.includes("session has expired")) {
        setMessage("Please log in to continue.");
      } else {
        setMessage(err?.message || "Failed to verify email.");
      }

      console.error("Email check error:", err);
    } finally {
      setIsLoading(false);
      abortControllerRef.current = null;
    }
  };

  const handleFormSuccess = async () => {
    setShowForm(false);
    setMessageType("success");
    setMessage("Thank you for registering! Your download is starting...");

    if (pendingFileName) {
      await startDownload(pendingFileName);
      setPendingFileName(null);
    }
  };

  const AlertMessage = () => {
    if (!message) return null;

    return (
      <div
        role="alert"
        aria-live="polite"
        className={`alert-message ${messageType}`}
        style={{
          maxWidth: "600px",
          margin: "0 auto 24px",
          padding: "16px 20px",
          borderRadius: "16px",
          background:
            messageType === "error"
              ? "linear-gradient(135deg, #fee2e2, #fecaca)"
              : "linear-gradient(135deg, #dcfce7, #bbf7d0)",
          border:
            messageType === "error"
              ? "1px solid #fca5a5"
              : "1px solid #86efac",
          color: messageType === "error" ? "#991b1b" : "#166534",
          textAlign: "center",
          fontWeight: 500,
          animation: "slideDown 0.3s ease",
        }}
      >
        <span style={{ marginRight: "8px" }}>
          {messageType === "error" ? "⚠" : "✓"}
        </span>
        {message}
        <button
          onClick={() => setMessage("")}
          aria-label="Close alert"
          style={{
            marginLeft: "12px",
            background: "transparent",
            border: "none",
            fontSize: "20px",
            cursor: "pointer",
            color: "inherit",
            opacity: 0.7,
            float: "right",
          }}
        >
          ×
        </button>
      </div>
    );
  };

  return (
    <section className="downloads-page">
      <div className="downloads-hero">
        <span className="downloads-eyebrow">Downloads</span>
        <h1>Choose the best way to install Jupyter Notebook Toolkit</h1>
        <p>
          Get started with the setup that matches your workflow, performance
          needs, and environment.
        </p>
      </div>

      <AlertMessage />

      {isLoading && (
        <div className="global-loading-overlay" role="status" aria-label="Loading">
          <div className="loading-spinner"></div>
          <p className="loading-text">Processing...</p>
        </div>
      )}

      <div className="downloads-grid">
        {downloads.map((item) => (
          <article key={item.title} className={`premium-card ${item.cardClass}`}>
            <div className="premium-card-top">
              <div className="premium-icon-wrap">
                <div className="premium-icon" aria-hidden="true">
                  {item.icon}
                </div>
              </div>

              <div className="premium-content">
                <span className="premium-badge">{item.badge}</span>
                <h2>{item.title}</h2>

                <ul className="premium-list">
                  {item.descriptionTop.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="premium-card-bottom">
              <p>{item.descriptionBottom}</p>

              <button
                onClick={() => handleDownloadClick(item)}
                className={`premium-download-btn ${item.btnClass}`}
                disabled={isLoading}
                aria-label={`Download ${item.title} for ${item.platform}`}
              >
                <span className="btn-icon" aria-hidden="true">
                  ↓
                </span>
                {item.buttonText}
              </button>
            </div>
          </article>
        ))}
      </div>

      {showVersionModal && selectedDownload && (
        <div
          className="version-modal-overlay"
          onClick={() => setShowVersionModal(false)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="version-modal-title"
        >
          <div className="version-modal" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="version-modal-close"
              onClick={() => setShowVersionModal(false)}
              aria-label="Close version selection"
            >
              ×
            </button>

            <div className="version-modal-header">
              <h2 id="version-modal-title">
                Select {selectedDownload.platform} version
              </h2>
              <p>Choose the version you want to download.</p>
            </div>

            <div className="version-list">
              {selectedDownload.versions.map((version) => (
                <button
                  key={`${selectedDownload.platform}-${version.label}`}
                  className="version-item-btn"
                  onClick={() => handleVersionSelect(version.fileName)}
                >
                  <span>{version.label}</span>
                  <span className="version-arrow" aria-hidden="true">
                    →
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {showEmailCheckForm && (
        <EmailCheckForm
          onClose={() => setShowEmailCheckForm(false)}
          onSubmitEmail={handleEmailCheck}
        />
      )}

      {showForm && (
        <UserForm
          onClose={() => setShowForm(false)}
          onSuccess={handleFormSuccess}
          initialEmail={prefillEmail}
        />
      )}
    </section>
  );
}

export default Downloads;