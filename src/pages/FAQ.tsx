import { useState } from "react";
import "../styles/FAQ.css";

const faqData = [
  {
    question: "What is Jupyter Toolkit?",
    answer:
      "Jupyter Toolkit is a collection of tools and extensions that improves the Jupyter Notebook experience with better usability, extra features, and a cleaner workflow.",
  },
  {
    question: "Is Jupyter Toolkit free to use?",
    answer:
      "Yes, Jupyter Toolkit is free to use. More advanced features may be introduced later.",
  },
  {
    question: "How do I download the toolkit?",
    answer:
      "Go to the Downloads page, choose the version you need, and follow the installation steps provided there.",
  },
  {
    question: "Is it compatible with all Jupyter versions?",
    answer:
      "It supports most modern Jupyter Notebook and JupyterLab versions. Please check the Downloads page for compatibility details.",
  },
  {
    question: "How do I install the extension?",
    answer:
      "Download the package, run the installation command in your terminal, and restart Jupyter Notebook or JupyterLab.",
  },
  {
    question: "Why is the extension not showing after installation?",
    answer:
      "Make sure the installation finished correctly, restart Jupyter, and check your browser console or terminal for any errors.",
  },
  {
    question: "Does Jupyter Toolkit work offline?",
    answer:
      "Yes, most features work offline after installation.",
  },
  {
    question: "Do I need an account to use it?",
    answer:
      "No, basic features do not require an account. Login may only be needed for admin or restricted features.",
  },
  {
    question: "The download is not working. What should I do?",
    answer:
      "Check your internet connection, try another browser, and disable extensions such as ad blockers if needed.",
  },
  {
    question: "How can I report a bug?",
    answer:
      "You can report bugs through the Contact Us page or by emailing support@jupytertoolkit.com.",
  },
  {
    question: "Is my data safe?",
    answer:
      "Yes, your notebook data remains on your own machine. The toolkit does not store your personal notebook content.",
  },
  {
    question: "How can I contact support?",
    answer:
      "You can use the Contact form on the website or send an email to jupytersupport@jupytertoolkit.com.",
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
            installation, downloads, and support.
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