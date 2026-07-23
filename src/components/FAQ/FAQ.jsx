import "./FAQ.css";
import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

function FAQ() {
  const faqs = [
    {
      question: "Is FreeFileConverter completely free?",
      answer:
        "Yes. You can convert files without paying any subscription fee.",
    },
    {
      question: "Are my uploaded files secure?",
      answer:
        "Absolutely. Files are processed securely and automatically deleted after conversion.",
    },
    {
      question: "Which file formats are supported?",
      answer:
        "PDF, JPG, PNG, WEBP, TXT and many more formats will be supported.",
    },
    {
      question: "What is the maximum file size?",
      answer:
        "The maximum upload size depends on the server configuration. By default it will support files up to 50 MB.",
    },
    {
      question: "How long does conversion take?",
      answer:
        "Most conversions are completed within a few seconds depending on the file size.",
    },
  ];

  const [active, setActive] = useState(null);

  const toggleFAQ = (index) => {
    setActive(active === index ? null : index);
  };

  return (
    <section className="faq" id="faq">
      <div className="container">

        <div className="faq-header">
          <h2>Frequently Asked Questions</h2>

          <p>
            Everything you need to know about FreeFileConverter.
          </p>
        </div>

        <div className="faq-container">

          {faqs.map((faq, index) => (
            <div
              className={`faq-item ${
                active === index ? "active" : ""
              }`}
              key={index}
            >
              <div
                className="faq-question"
                onClick={() => toggleFAQ(index)}
              >
                <h3>{faq.question}</h3>

                <span>
                  {active === index ? <FaMinus /> : <FaPlus />}
                </span>
              </div>

              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default FAQ;