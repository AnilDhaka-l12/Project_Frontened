import { useState } from "react";
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

function Downloads() {
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState<"error" | "success">("error");
  const [showEmailCheckForm, setShowEmailCheckForm] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [showVersionModal, setShowVersionModal] = useState(false);
  const [selectedDownload, setSelectedDownload] = useState<DownloadItem | null>(
    null
  );
  const [pendingFileName, setPendingFileName] = useState<string | null>(null);
  const [prefillEmail, setPrefillEmail] = useState("");

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
      icon: "🖥️",
      cardClass: "installer-card",
      btnClass: "windows",
      platform: "windows",
      versions: [
        { label: "Windows v1.1", fileName: "video.mov" },
        { label: "Windows v1.2", fileName: "video.mov" },
        { label: "Windows v1.3", fileName: "video.mov" },
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
      icon: "📦",
      cardClass: "vm-card",
      btnClass: "linux",
      platform: "linux",
      versions: [
        { label: "Linux v1.1", fileName: "video.mov" },
        { label: "Linux v1.2", fileName: "video.mov" },
        { label: "Linux v1.3", fileName: "video.mov" },
      ],
    },
  ];

  const startDownload = async (fileName: string) => {
    setMessage("");

    if (!API_BASE_URL) {
      setMessageType("error");
      setMessage("API base URL is missing. Check your .env file.");
      return;
    }

    try {
      const response = await fetch(
        `${API_BASE_URL}/api/FileDownload/link/${fileName}?expiryMinutes=5`,
        {
          method: "GET",
        }
      );

      let result: any = null;

      try {
        const text = await response.text();
        result = text ? JSON.parse(text) : null;
      } catch {
        result = null;
      }

      if (!response.ok) {
        throw new Error(
          result?.message ||
            `Failed to generate download link (${response.status}).`
        );
      }

      const downloadUrl = result?.data?.downloadUrl;

      if (!downloadUrl) {
        throw new Error("Download URL was not returned by the server.");
      }

      window.open(downloadUrl, "_blank");
    } catch (err: any) {
      setMessageType("error");
      setMessage(err.message || "Download failed.");
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
    if (!API_BASE_URL) {
      throw new Error("API base URL is missing. Check your .env file.");
    }

    setPrefillEmail(email);

    const response = await fetch(
      `${API_BASE_URL}/api/Users/email/${encodeURIComponent(email)}`,
      {
        method: "GET",
      }
    );

    let data: any = null;

    try {
      const text = await response.text();
      data = text ? JSON.parse(text) : null;
    } catch {
      data = null;
    }

    if (response.status === 404) {
      setShowEmailCheckForm(false);
      setShowForm(true);
      return;
    }

    if (!response.ok) {
      throw new Error(
        data?.message || `Failed to check email (${response.status}).`
      );
    }

    // 200 OK means user exists
    setShowEmailCheckForm(false);
    setMessageType("success");
    setMessage("User found. Your download is starting...");

    if (pendingFileName) {
      await startDownload(pendingFileName);
      setPendingFileName(null);
    }
  };

  const handleFormSuccess = async () => {
    setShowForm(false);
    setMessageType("success");
    setMessage("Form submitted successfully. Your download is starting...");

    if (pendingFileName) {
      await startDownload(pendingFileName);
      setPendingFileName(null);
    }
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

      {message && (
        <p
          style={{
            color: messageType === "error" ? "red" : "green",
            textAlign: "center",
            marginBottom: "20px",
            fontWeight: 600,
          }}
        >
          {message}
        </p>
      )}

      <div className="downloads-grid">
        {downloads.map((item) => (
          <article key={item.title} className={`premium-card ${item.cardClass}`}>
            <div className="premium-card-top">
              <div className="premium-icon-wrap">
                <div className="premium-icon">{item.icon}</div>
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
              >
                <span className="btn-icon">↓</span>
                {item.buttonText}
              </button>
            </div>
          </article>
        ))}
      </div>

      {showVersionModal && selectedDownload && (
        <div className="version-modal-overlay">
          <div className="version-modal">
            <button
              type="button"
              className="version-modal-close"
              onClick={() => setShowVersionModal(false)}
            >
              ×
            </button>

            <div className="version-modal-header">
              <h2>Select {selectedDownload.platform} version</h2>
              <p>Choose the version you want to download.</p>
            </div>

            <div className="version-list">
              {selectedDownload.versions.map((version) => (
                <button
                  key={`${selectedDownload.platform}-${version.label}`}
                  className="version-item-btn"
                  onClick={() => handleVersionSelect(version.fileName)}
                >
                  {version.label}
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