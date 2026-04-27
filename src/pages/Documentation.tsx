import { useState } from "react";
import "../styles/Documentation.css";

function Documentation() {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const handleCopy = async (text: string, index: number) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedIndex(index);

      setTimeout(() => {
        setCopiedIndex(null);
      }, 2000);
    } catch (error) {
      console.error("Copy failed:", error);
    }
  };

  return (
    <div className="documentation-page">
      <h1>Documentation</h1>

      <p className="doc-intro">
        This documentation explains how to install and use the Jupyter Notebook Toolkit.
        The toolkit simplifies machine learning setup by automatically configuring
        environments using Docker and launching Jupyter Notebook instantly.
      </p>

      <section className="doc-section">
        <h2>Installation</h2>

        <p>
          Follow these steps to set up the toolkit. Make sure Docker is installed
          on your system before starting.
        </p>

        <div className="doc-text-block">
          <h3>1. Clone the repository</h3>
          <p>
            Download the project files from GitHub to your local machine.
          </p>

          <div className="code-block">
            <code>git clone https://github.com/your-repo/project.git</code>
            <button onClick={() => handleCopy("git clone https://github.com/your-repo/project.git", 1)}>
              {copiedIndex === 1 ? "Copied!" : "Copy"}
            </button>
          </div>
        </div>

        <div className="doc-text-block">
          <h3>2. Open the project folder</h3>
          <p>
            Navigate into the project directory.
          </p>

          <div className="code-block">
            <code>cd project</code>
            <button onClick={() => handleCopy("cd project", 2)}>
              {copiedIndex === 2 ? "Copied!" : "Copy"}
            </button>
          </div>
        </div>

        <div className="doc-text-block">
          <h3>3. Run Docker container</h3>
          <p>
            This command creates a container with all required dependencies such as
            CUDA, cuDNN, and TensorFlow.
          </p>

          <div className="code-block">
            <code>docker run -p 8888:8888 jupyter-toolkit</code>
            <button onClick={() => handleCopy("docker run -p 8888:8888 jupyter-toolkit", 3)}>
              {copiedIndex === 3 ? "Copied!" : "Copy"}
            </button>
          </div>
        </div>

        <div className="doc-text-block">
          <h3>4. Open Jupyter Notebook</h3>
          <p>
            After starting the container, open the notebook in your browser.
          </p>

          <div className="code-block">
            <code>http://localhost:8888</code>
            <button onClick={() => handleCopy("http://localhost:8888", 4)}>
              {copiedIndex === 4 ? "Copied!" : "Copy"}
            </button>
          </div>
        </div>
      </section>

      <section className="doc-section">
        <h2>Usage</h2>

        <p>
          Once the toolkit is running, you can start working with Jupyter Notebook immediately.
        </p>

        <ul>
          <li>Open the notebook interface in your browser</li>
          <li>Create or upload notebooks</li>
          <li>Run machine learning code with GPU support</li>
          <li>Your work is saved automatically</li>
        </ul>

        <p>
          This removes the need for manual environment setup and reduces configuration errors.
        </p>
      </section>

      <section className="doc-section">
        <h2>GitHub Integration</h2>

        <p>
          The system can automatically track file changes and push updates to GitHub.
        </p>

        <ul>
          <li>No manual commits required</li>
          <li>Reduces the risk of losing work</li>
          <li>Improves workflow efficiency</li>
        </ul>
      </section>

      <section className="doc-section">
        <h2>Requirements</h2>

        <p>Before using the toolkit, make sure you have:</p>

        <ul>
          <li>Docker installed and running</li>
          <li>Internet connection</li>
          <li>A modern web browser</li>
          <li>Basic knowledge of Jupyter Notebook (recommended)</li>
        </ul>
      </section>

      <section className="doc-section">
        <h2>Troubleshooting</h2>

        <p>If something does not work, try the following:</p>

        <ul>
          <li>Make sure Docker is installed and running</li>
          <li>Check if port 8888 is available</li>
          <li>Restart the container</li>
          <li>Verify your system supports Docker</li>
        </ul>
      </section>
    </div>
  );
}

export default Documentation;