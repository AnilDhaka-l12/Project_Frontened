import { useState } from "react";
import "../styles/Downloads.css";
import { apiRequest } from "../utils/api"; // Use apiRequest, not publicRequest

type DownloadResponse = {
  success: boolean;
  message: string;
  data: {
    downloadUrl: string;
    expiresInMinutes: number;
    expiresAt: string;
    fileKey: string;
    fileName: string;
  };
  error: string | null;
};

function Downloads() {
  const [loading, setLoading] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState("");

  const handleDownload = async (type: "windows" | "linux") => {
    try {
      setLoading(type);
      setErrorMessage("");

      // Check if user is logged in
      const authData = localStorage.getItem("auth");
      if (!authData) {
        setErrorMessage("Please login first to download files");
        return;
      }

      const endpoint = `/api/FileDownload/link/video.mov?expiryMinutes=5`;

      console.log("Calling endpoint with auth:", endpoint);

      // Use apiRequest (sends token automatically)
      const response = await apiRequest<DownloadResponse>(endpoint, {
        method: "GET",
      });

      if (!response.success || !response.data?.downloadUrl) {
        throw new Error(response.message || "Download link not found");
      }

      const downloadUrl = response.data.downloadUrl;
      window.location.href = downloadUrl;
    } catch (err: any) {
      console.error("Download failed:", err);
      setErrorMessage(err.message || "Failed to download file. Please login again.");
    } finally {
      setLoading(null);
    }
  };

  const downloads = [
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
      type: "windows" as const,
      icon: "🖥️",
      cardClass: "installer-card",
      btnClass: "windows",
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
      type: "linux" as const,
      icon: "📦",
      cardClass: "vm-card",
      btnClass: "linux",
    },
  ];

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

      {errorMessage && (
        <p style={{ color: "red", textAlign: "center", marginBottom: "20px" }}>
          {errorMessage}
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
                onClick={() => handleDownload(item.type)}
                className={`premium-download-btn ${item.btnClass}`}
                disabled={loading === item.type}
              >
                <span className="btn-icon">↓</span>
                {loading === item.type ? "Preparing..." : item.buttonText}
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Downloads;