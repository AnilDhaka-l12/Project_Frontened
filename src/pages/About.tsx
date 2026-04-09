import "../styles/About.css";

function About() {
  return (
    <div className="about-page">
      <div className="about-container">
        <h1>About Jupyter Toolkit</h1>
        <p>
          Jupyter Toolkit is a platform designed to help developers and learners
          explore tools, improve skills, and build modern applications with ease.
        </p>

        <div className="about-cards">
          <div className="about-card">
            <h3>Our Mission</h3>
            <p>
              Make Jupyter Notebook setup less painful.
              That's it. We want students to stop wasting hours on CUDA and TensorFlow errors.
            </p>
          </div>

          <div className="about-card">
            <h3>Our Vision</h3>
            <p>
              A tool that just works. Download, put your email, and start coding. No terminal fighting.
            </p>
          </div>

          <div className="about-card">
            <h3>Our Goal</h3>
            <p>
              Make development faster, easier, and more accessible for everyone who uses Jupyter Notebook.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;