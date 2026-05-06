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
        This documentation explains how to download, build, and run the project
        from source code for both Windows and Linux.
      </p>

      <section className="doc-section">
        <h2>Windows</h2>

        <p>
          The Windows application is based on Python Tkinter and the source code
          is available in the GitHub repository below.
        </p>

        <div className="doc-text-block">
          <h3>1. Clone the repository</h3>
          <p>Clone the Windows source code from GitHub.</p>

          <div className="code-block">
            <code>git clone https://github.com/pravijupreti/projectPhase2.git</code>
            <button
              onClick={() =>
                handleCopy(
                  "git clone https://github.com/pravijupreti/projectPhase2.git",
                  1
                )
              }
            >
              {copiedIndex === 1 ? "Copied!" : "Copy"}
            </button>
          </div>
        </div>

        <div className="doc-text-block">
          <h3>2. Open the project folder</h3>
          <p>Move into the project directory.</p>

          <div className="code-block">
            <code>cd projectPhase2</code>
            <button onClick={() => handleCopy("cd projectPhase2", 2)}>
              {copiedIndex === 2 ? "Copied!" : "Copy"}
            </button>
          </div>
        </div>

        <div className="doc-text-block">
          <h3>3. Install Tkinter</h3>
          <p>Install Tkinter before running or building the application.</p>

          <div className="code-block">
            <code>pip install tkinter</code>
            <button onClick={() => handleCopy("pip install tkinter", 3)}>
              {copiedIndex === 3 ? "Copied!" : "Copy"}
            </button>
          </div>
        </div>

        <div className="doc-text-block">
          <h3>4. Install PyInstaller</h3>
          <p>
            Install PyInstaller if you want to build the executable from source.
          </p>

          <div className="code-block">
            <code>pip install pyinstaller</code>
            <button onClick={() => handleCopy("pip install pyinstaller", 4)}>
              {copiedIndex === 4 ? "Copied!" : "Copy"}
            </button>
          </div>
        </div>

        <div className="doc-text-block">
          <h3>5. Build the Windows executable</h3>
          <p>
            Run the following command to build the Windows app using PyInstaller.
          </p>

          <div className="code-block">
            <code>
              py -3.13 -m PyInstaller --onefile --clean --name ProjectControl1
              --add-data "Windows;Windows" app.py
            </code>
            <button
              onClick={() =>
                handleCopy(
                  'py -3.13 -m PyInstaller --onefile --clean --name ProjectControl1 --add-data "Windows;Windows" app.py',
                  5
                )
              }
            >
              {copiedIndex === 5 ? "Copied!" : "Copy"}
            </button>
          </div>
        </div>

        <div className="doc-text-block">
          <h3>6. Run from source</h3>
          <p>
            If you do not want to build the executable, you can run the app
            directly from the source code.
          </p>

          <div className="code-block">
            <code>python3 app.py</code>
            <button onClick={() => handleCopy("python3 app.py", 6)}>
              {copiedIndex === 6 ? "Copied!" : "Copy"}
            </button>
          </div>
        </div>

        <p>
          After building, the executable can be found in the <strong>dist</strong>{" "}
          folder.[web:124]
        </p>
      </section>

      <section className="doc-section">
        <h2>Linux</h2>

        <p>
          The Linux application is built with PyQt5 and the source code is
          available in the GitHub repository below.[web:129]
        </p>

        <div className="doc-text-block">
          <h3>1. Clone the repository</h3>
          <p>Clone the Linux source code from GitHub.</p>

          <div className="code-block">
            <code>git clone https://github.com/pravijupreti/LinuxEngine.git</code>
            <button
              onClick={() =>
                handleCopy(
                  "git clone https://github.com/pravijupreti/LinuxEngine.git",
                  7
                )
              }
            >
              {copiedIndex === 7 ? "Copied!" : "Copy"}
            </button>
          </div>
        </div>

        <div className="doc-text-block">
          <h3>2. Open the project folder</h3>
          <p>Move into the Linux project directory.</p>

          <div className="code-block">
            <code>cd LinuxEngine</code>
            <button onClick={() => handleCopy("cd LinuxEngine", 8)}>
              {copiedIndex === 8 ? "Copied!" : "Copy"}
            </button>
          </div>
        </div>

        <div className="doc-text-block">
          <h3>3. Install PyQt5</h3>
          <p>Install PyQt5 before running or building the application.[web:129]</p>

          <div className="code-block">
            <code>pip install PyQt5</code>
            <button onClick={() => handleCopy("pip install PyQt5", 9)}>
              {copiedIndex === 9 ? "Copied!" : "Copy"}
            </button>
          </div>
        </div>

        <div className="doc-text-block">
          <h3>4. Install PyInstaller</h3>
          <p>Install PyInstaller for building the Linux executable.[web:124]</p>

          <div className="code-block">
            <code>pip install pyinstaller</code>
            <button onClick={() => handleCopy("pip install pyinstaller", 10)}>
              {copiedIndex === 10 ? "Copied!" : "Copy"}
            </button>
          </div>
        </div>

        <div className="doc-text-block">
          <h3>5. Make build.sh executable</h3>
          <p>
            If you want to build the project using the provided script, make it
            executable first.
          </p>

          <div className="code-block">
            <code>chmod 777 build.sh</code>
            <button onClick={() => handleCopy("chmod 777 build.sh", 11)}>
              {copiedIndex === 11 ? "Copied!" : "Copy"}
            </button>
          </div>
        </div>

        <div className="doc-text-block">
          <h3>6. Build using script</h3>
          <p>Run the build script to build automatically.</p>

          <div className="code-block">
            <code>./build.sh</code>
            <button onClick={() => handleCopy("./build.sh", 12)}>
              {copiedIndex === 12 ? "Copied!" : "Copy"}
            </button>
          </div>
        </div>

        <div className="doc-text-block">
          <h3>7. Manual PyInstaller build</h3>
          <p>
            You can also build the Linux executable manually with PyInstaller.
          </p>

          <div className="code-block">
            <code>{`pyinstaller --onefile \\
  --name jupyter_manager \\
  --add-data "scripts:scripts" \\
  --add-data "polkit_setup.py:." \\
  --collect-all PyQt5 \\
  jupyter_manager.py`}</code>
            <button
              onClick={() =>
                handleCopy(
                  `pyinstaller --onefile \\
  --name jupyter_manager \\
  --add-data "scripts:scripts" \\
  --add-data "polkit_setup.py:." \\
  --collect-all PyQt5 \\
  jupyter_manager.py`,
                  13
                )
              }
            >
              {copiedIndex === 13 ? "Copied!" : "Copy"}
            </button>
          </div>
        </div>

        <div className="doc-text-block">
          <h3>8. Run from source</h3>
          <p>If you want to run only the source code, use this command.</p>

          <div className="code-block">
            <code>python3 jupyter_manager.py</code>
            <button onClick={() => handleCopy("python3 jupyter_manager.py", 14)}>
              {copiedIndex === 14 ? "Copied!" : "Copy"}
            </button>
          </div>
        </div>

        <p>
          The built Linux application can be found in the <strong>dist</strong>{" "}
          folder after the build finishes.[web:124]
        </p>
      </section>

      <section className="doc-section">
        <h2>Notes</h2>

        <ul>
          <li>
            You can download the ready-made application from the Downloads page
            instead of building from source.
          </li>
          <li>
            On Linux, make sure policy setup is handled by{" "}
            <code>polkit_setup.py</code>.
          </li>
          <li>
            On Linux, make sure the current user is added to the Docker group if
            your workflow depends on Docker access.
          </li>
        </ul>
      </section>

      <section className="doc-section">
        <h2>Repositories</h2>

        <div className="doc-text-block">
          <h3>Windows repository</h3>
          <div className="code-block">
            <code>https://github.com/pravijupreti/projectPhase2.git</code>
            <button
              onClick={() =>
                handleCopy(
                  "https://github.com/pravijupreti/projectPhase2.git",
                  15
                )
              }
            >
              {copiedIndex === 15 ? "Copied!" : "Copy"}
            </button>
          </div>
        </div>

        <div className="doc-text-block">
          <h3>Linux repository</h3>
          <div className="code-block">
            <code>https://github.com/pravijupreti/LinuxEngine.git</code>
            <button
              onClick={() =>
                handleCopy(
                  "https://github.com/pravijupreti/LinuxEngine.git",
                  16
                )
              }
            >
              {copiedIndex === 16 ? "Copied!" : "Copy"}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Documentation;