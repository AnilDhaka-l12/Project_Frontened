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
        Welcome to the Jupyter Notebook Toolkit documentation page. Here you can
        learn how to install the project, run it on your local machine, and
        understand the basic usage process.
      </p>

      <section className="doc-section">
        <h2>📦 Installation</h2>
        <p>
          Follow the steps below to set up the project on your computer. Make
          sure you have Node.js and npm installed before starting.
        </p>

        <div className="doc-text-block">
          <h3>1. Clone the repository</h3>
          <p>
            This command downloads the project files from your Git repository to
            your local machine.
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
            Move into the project directory so you can run commands inside the
            correct folder.
          </p>
          <div className="code-block">
            <code>cd project</code>
            <button onClick={() => handleCopy("cd project", 2)}>
              {copiedIndex === 2 ? "Copied!" : "Copy"}
            </button>
          </div>
        </div>

        <div className="doc-text-block">
          <h3>3. Install dependencies</h3>
          <p>
            This installs all packages required for the frontend application to
            run correctly.
          </p>
          <div className="code-block">
            <code>npm install</code>
            <button onClick={() => handleCopy("npm install", 3)}>
              {copiedIndex === 3 ? "Copied!" : "Copy"}
            </button>
          </div>
        </div>

        <div className="doc-text-block">
          <h3>4. Start the development server</h3>
          <p>
            Run this command to start the application in development mode.
          </p>
          <div className="code-block">
            <code>npm run dev</code>
            <button onClick={() => handleCopy("npm run dev", 4)}>
              {copiedIndex === 4 ? "Copied!" : "Copy"}
            </button>
          </div>
        </div>
      </section>

      <section className="doc-section">
        <h2>🚀 Usage</h2>
        <p>
          After the server starts, open your browser and visit the local address
          shown below. This will open the application in your browser.
        </p>

        <div className="code-block">
          <code>http://localhost:5173</code>
          <button onClick={() => handleCopy("http://localhost:5173", 5)}>
            {copiedIndex === 5 ? "Copied!" : "Copy"}
          </button>
        </div>

        <p>
          Once the application is open, you can use the navigation bar to move
          between pages such as Home, Downloads, About Us, and Documentation.
          This toolkit is designed to help users work with notebook-related
          tools in a simple and organized way.
        </p>
      </section>

      <section className="doc-section">
        <h2>⚙️ Requirements</h2>
        <p>Before running the project, make sure your system has the following:</p>
        <ul>
          <li>Node.js installed</li>
          <li>npm package manager</li>
          <li>A code editor such as VS Code</li>
          <li>A modern web browser</li>
        </ul>
      </section>

      <section className="doc-section">
        <h2>🛠 Troubleshooting</h2>
        <p>
          If the project does not run correctly, check these common issues:
        </p>
        <ul>
          <li>Make sure all dependencies are installed with <code>npm install</code></li>
          <li>Check that the terminal is opened in the correct project folder</li>
          <li>Confirm that the correct port is being used</li>
          <li>Make sure the backend server is also running if your app needs API data</li>
        </ul>
      </section>
    </div>
  );
}

export default Documentation;