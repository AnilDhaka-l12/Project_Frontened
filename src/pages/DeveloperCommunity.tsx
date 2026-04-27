import "../styles/DeveloperCommunity.css";

function DeveloperCommunity() {
  const sections = [
    {
      title: "Setup Support",
      description:
        "Discuss Docker, Jupyter Notebook launch, and environment setup problems in a simple and practical way.",
    },
    {
      title: "Project Ideas",
      description:
        "Share suggestions, improvements, and feedback that can help make the toolkit more useful for students and developers.",
    },
    {
      title: "Learning Together",
      description:
        "Exchange tips about notebooks, machine learning workflows, and better ways to reduce setup difficulty.",
    },
  ];

  return (
    <div className="community-page">
      <section className="community-hero">
        <div className="community-hero-content">
          <span className="community-badge">Developer Community</span>
          <h1>A simple space to learn, share, and improve together</h1>
          <p>
            This community is for students and developers who want an easier way
            to set up Jupyter Notebook environments and improve their workflow.
          </p>

          <div className="community-hero-actions">
            <button className="community-btn primary">Join Community</button>
            <button className="community-btn secondary">Learn More</button>
          </div>
        </div>
      </section>

      <section className="community-features">
        <div className="section-heading">
          <span>What this space is for</span>
          <h2>Built for users who want a simpler notebook workflow</h2>
          <p>
            Instead of focusing on complex setup steps, this space helps people
            discuss problems, share ideas, and support the growth of the project.
          </p>
        </div>

        <div className="feature-grid">
          {sections.map((section, index) => (
            <div className="feature-card" key={index}>
              <h3>{section.title}</h3>
              <p>{section.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="community-cta">
        <div className="community-cta-content">
          <h2>Be part of the project from the beginning</h2>
          <p>
            Follow the progress of Jupyter Toolkit, share your thoughts, and
            help shape a simpler experience for notebook users.
          </p>
          <button className="community-btn primary">Get Started</button>
        </div>
      </section>
    </div>
  );
}

export default DeveloperCommunity;