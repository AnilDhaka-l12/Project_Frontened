import "../styles/Home.css";

function Home() {
  return (
    <div className="home-page">
      <section className="hero">
        <div className="hero-content">
          <span className="hero-badge">Modern • Smart • Powerful</span>

          <h1>
            Build Smarter with <span>Jupyter Toolkit</span>
          </h1>

          <p className="subtitle">
            A modern platform for developers, learners, and creators to explore
            tools, discover resources, and build better projects with
            confidence.
          </p>

          <div className="hero-buttons">
            <button className="btn-primary">Explore Tools</button>
            <button className="btn-secondary">Get Started</button>
          </div>
        </div>
      </section>

      <section className="about">
        <div className="section-header">
          <h2>Why Jupyter Toolkit?</h2>
          <p>
            Everything you need in one place to learn faster, work better, and
            create modern digital solutions.Stop fixing setup. Start actually learning.
          </p>
        </div>

        <div className="feature-container">
          <div className="card">
            <div className="icon-circle">⚡</div>
            <h3>Fast Learning</h3>
            <p>
              Access organized resources and practical tools that help you
              understand concepts quickly and effectively.
            </p>
          </div>

          <div className="card">
            <div className="icon-circle">🛠</div>
            <h3>Useful Tools</h3>
            <p>
              Explore a collection of tools designed to support coding,
              notebooks, workflows, and productivity.
            </p>
          </div>

          <div className="card">
            <div className="icon-circle">🚀</div>
            <h3>Better Projects</h3>
            <p>
              Build cleaner, smarter, and more professional projects with a
              platform focused on simplicity and performance.
            </p>
          </div>
        </div>
      </section>

      <section className="cta">
        <h2>Start Your Journey Today</h2>
        <p>
          Discover the tools and inspiration you need to grow your skills and
          build confidently.
        </p>
        <button className="btn-primary">Join Now</button>
      </section>
    </div>
  );
}

export default Home;