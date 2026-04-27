import { useState } from "react";
import "../styles/FAQ.css";

const faqData = [
  {
    question: "What is Jupyter Toolkit and what problem does it solve?",
    answer:
      "Jupyter Toolkit is a tool that automates GPU environment setup for Jupyter Notebook. Many students and developers struggle with setting up CUDA, cuDNN, and TensorFlow due to version mismatches and errors. Our tool eliminates these manual steps and saves time.",
  },
  {
    question: "How does Jupyter Toolkit automate environment setup?",
    answer:
      "Jupyter Toolkit uses Docker to create a container with CUDA, cuDNN, and TensorFlow pre-configured. Users don't need to manually install or configure anything - the tool handles everything automatically.",
  },
  {
    question: "What features does Jupyter Toolkit offer?",
    answer:
      "Jupyter Toolkit offers three main features: 1) Automatic Environment Setup using Docker, 2) Notebook Auto Launch that opens Jupyter Notebook in your browser automatically, and 3) Auto GitHub Commit that detects file changes and pushes code to GitHub automatically.",
  },
  {
    question: "Who is the target audience for this tool?",
    answer:
      "Our target audience includes students learning AI and machine learning, developers using TensorFlow, and people who use Jupyter Notebook frequently. Anyone who needs an easy and fast setup without doing many manual steps.",
  },
  {
    question: "What technology stack is used to build Jupyter Toolkit?",
    answer:
      "The frontend is built with React and TypeScript, the backend uses .NET Core 9, and the database is Firebase Firestore. We also use Docker for container setup and GitHub API for auto-commit features.",
  },
  {
    question: "How does the Auto GitHub Commit feature work?",
    answer:
      "The tool automatically detects file changes in your Jupyter Notebook and commits them to GitHub. This saves you from repetitive manual work and prevents forgetting to save important updates.",
  },
  {
    question: "Is Jupyter Toolkit free to use?",
    answer:
      "Yes, Jupyter Toolkit is completely free to use. We want to make Jupyter Notebook setup simple and user-friendly for everyone in the learning community.",
  },
  {
    question: "How do I download and install Jupyter Toolkit?",
    answer:
      "Go to the Downloads page on our website, choose the version you need, and follow the installation steps. The tool will automatically set up the Docker container and launch Jupyter Notebook in your browser.",
  },
  {
    question: "What are the risks or challenges when using this tool?",
    answer:
      "The main challenges include GPU compatibility on different systems and Docker installation issues. We provide simple instructions and have focused on making the setup process as smooth as possible.",
  },
  {
    question: "Does Jupyter Toolkit work offline?",
    answer:
      "Yes, most features work offline after installation. The auto GitHub commit feature requires an internet connection to push changes to GitHub.",
  },
  {
    question: "How can I report a bug or get support?",
    answer:
      "You can report bugs through the Contact Us page on our website or by emailing support@jupytertoolkit.com. Our team will help resolve any issues you encounter.",
  },
  {
    question: "What are the goals of this project?",
    answer:
      "Our goals are to build a working prototype that works successfully, make setup easier for users, and learn Docker and backend systems. Success is measured by the tool running without issues and features working properly.",
  },
];

function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-page">
      <div className="faq-container">
        <div className="faq-header">
          <h1>Frequently Asked Questions</h1>
          <p>
            Find quick answers to common questions about Jupyter Toolkit,
            installation, features, and support.
          </p>
        </div>

        <div className="faq-list">
          {faqData.map((item, index) => (
            <div
              className={`faq-item ${openIndex === index ? "active" : ""}`}
              key={index}
            >
              <button
                className="faq-question"
                onClick={() => toggleFAQ(index)}
                type="button"
              >
                <span>{item.question}</span>
                <span className="faq-icon">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>

              {openIndex === index && (
                <div className="faq-answer">
                  <p>{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FAQ;