import "./Features.css";

import {
  FaBolt,
  FaShieldAlt,
  FaCloudUploadAlt,
  FaMobileAlt,
  FaGlobe,
  FaLock,
} from "react-icons/fa";

function Features() {
  const features = [
    {
      icon: <FaBolt />,
      title: "Lightning Fast",
      description:
        "Convert your files within seconds using our optimized FastAPI backend.",
    },
    {
      icon: <FaShieldAlt />,
      title: "100% Secure",
      description:
        "Your uploaded files remain private and are automatically removed after conversion.",
    },
    {
      icon: <FaCloudUploadAlt />,
      title: "Easy Upload",
      description:
        "Drag & drop files or browse from your device with a simple interface.",
    },
    {
      icon: <FaMobileAlt />,
      title: "Responsive Design",
      description:
        "Works perfectly on mobile, tablet, laptop and desktop devices.",
    },
    {
      icon: <FaGlobe />,
      title: "Multiple Formats",
      description:
        "Support for PDF, JPG, PNG, WEBP, TXT and many more formats.",
    },
    {
      icon: <FaLock />,
      title: "Privacy First",
      description:
        "We never store your files permanently. Your privacy is our priority.",
    },
  ];

  return (
    <section className="features" id="features">
      <div className="container">

        <div className="features-header">
          <h2>Why Choose FreeFileConverter?</h2>

          <p>
            Powerful, secure and easy-to-use file conversion tools designed
            for everyone.
          </p>
        </div>

        <div className="features-grid">

          {features.map((feature, index) => (
            <div className="feature-card" key={index}>

              <div className="feature-icon">
                {feature.icon}
              </div>

              <h3>{feature.title}</h3>

              <p>{feature.description}</p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Features;