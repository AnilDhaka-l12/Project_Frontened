import "../styles/Downloads.css";

function Downloads() {
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
      href: "/downloads/jupyter-extension-tool-windows.exe",
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
      href: "/downloads/jupyter-extension-tool-linux.tar.gz",
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

              <a
                href={item.href}
                download
                className={`premium-download-btn ${item.btnClass}`}
              >
                <span className="btn-icon">↓</span>
                {item.buttonText}
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Downloads;