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
              To simplify learning and development through useful tools.
            </p>
          </div>

          <div className="about-card">
            <h3>Our Vision</h3>
            <p>
              To create a modern space for developers to grow and build.
            </p>
          </div>

          <div className="about-card">
            <h3>Our Goal</h3>
            <p>
              Make development faster, easier, and more accessible.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;