import "../styles/Home.css";

function Home() {
  return (
    <div className="home-page">
      <section className="hero">
        <div className="hero-content">
          <span className="hero-badge">Simple • Fast • Reliable</span>

          <h1>
            Simplify Jupyter Notebook Setup with <span>Jupyter Toolkit</span>
          </h1>

          <p className="subtitle">
            Jupyter Toolkit helps students and developers start machine learning
            work faster by automating environment setup, launching Jupyter
            Notebook in the browser, and reducing manual configuration steps.
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
            Setting up GPU support for Jupyter Notebook can be difficult because
            CUDA, cuDNN, and TensorFlow versions often create compatibility
            problems. Jupyter Toolkit makes the process easier by automating the
            setup and helping users focus on learning and building instead of
            fixing installation issues.
          </p>
        </div>

        <div className="feature-container">
          <div className="card">
            <h3>Automatic Environment Setup</h3>
            <p>
              Create a ready-to-use environment with Docker so users do not need
              to manually install and configure complex machine learning
              dependencies.
            </p>
          </div>

          <div className="card">
            <h3>Notebook Auto Launch</h3>
            <p>
              Start Jupyter Notebook directly in the browser without going
              through multiple setup steps, saving time and reducing errors.
            </p>
          </div>

          <div className="card">
            <h3>Auto GitHub Workflow</h3>
            <p>
              Detect file changes and support automatic GitHub commits so users
              can manage their work more easily and avoid forgetting important
              updates.
            </p>
          </div>
        </div>
      </section>

      <section className="cta">
        <h2>Start Your Work Without Setup Problems</h2>
        <p>
          Use Jupyter Toolkit to simplify your workflow, save time, and focus on
          machine learning, notebooks, and project development.
        </p>
        <button className="btn-primary">Join Now</button>
      </section>
    </div>
  );
}

export default Home;