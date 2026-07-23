import "./HowItWorks.css";

import {
  FaCloudUploadAlt,
  FaExchangeAlt,
  FaCog,
  FaDownload,
} from "react-icons/fa";

function HowItWorks() {
  const steps = [
    {
      icon: <FaCloudUploadAlt />,
      number: "01",
      title: "Upload File",
      description:
        "Choose your file by clicking the upload area or simply drag and drop it.",
    },
    {
      icon: <FaExchangeAlt />,
      number: "02",
      title: "Select Format",
      description:
        "Choose the output format you want to convert your file into.",
    },
    {
      icon: <FaCog />,
      number: "03",
      title: "Convert",
      description:
        "Our FastAPI backend processes your file quickly and securely.",
    },
    {
      icon: <FaDownload />,
      number: "04",
      title: "Download",
      description:
        "Download your converted file instantly with a single click.",
    },
  ];

  return (
    <section className="how-it-works" id="how-it-works">
      <div className="container">

        <div className="section-header">
          <h2>How It Works</h2>

          <p>
            Convert your files in just four simple steps.
          </p>
        </div>

        <div className="steps-grid">

          {steps.map((step, index) => (
            <div className="step-card" key={index}>

              <span className="step-number">
                {step.number}
              </span>

              <div className="step-icon">
                {step.icon}
              </div>

              <h3>{step.title}</h3>

              <p>{step.description}</p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default HowItWorks;