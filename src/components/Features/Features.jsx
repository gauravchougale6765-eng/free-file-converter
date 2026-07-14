import "./Features.css";
import {
  FaBolt,
  FaShieldAlt,
  FaCloudUploadAlt,
  FaExchangeAlt,
  FaMobileAlt,
  FaCheckCircle,
} from "react-icons/fa";

function Features() {
  return (
    <section className="features" id="features">

      <h2>Why Choose Our File Converter?</h2>

      <p className="feature-subtitle">
        Fast, Secure and Easy File Conversion for Everyone.
      </p>

      <div className="feature-container">

        <div className="feature-card">
          <FaBolt className="feature-icon" />
          <h3>Fast Conversion</h3>
          <p>
            Convert your files within seconds using our optimized conversion
            engine.
          </p>
        </div>

        <div className="feature-card">
          <FaShieldAlt className="feature-icon" />
          <h3>100% Secure</h3>
          <p>
            Your uploaded files remain private and are automatically deleted
            after conversion.
          </p>
        </div>

        <div className="feature-card">
          <FaCloudUploadAlt className="feature-icon" />
          <h3>Easy Upload</h3>
          <p>
            Simply drag & drop your file or choose it from your computer.
          </p>
        </div>

        <div className="feature-card">
          <FaExchangeAlt className="feature-icon" />
          <h3>Multiple Formats</h3>
          <p>
            Convert PDF, DOCX, JPG, PNG, PPTX, TXT, HTML, WEBP and many more.
          </p>
        </div>

        <div className="feature-card">
          <FaMobileAlt className="feature-icon" />
          <h3>Responsive Design</h3>
          <p>
            Works perfectly on desktop, tablet and mobile devices.
          </p>
        </div>

        <div className="feature-card">
          <FaCheckCircle className="feature-icon" />
          <h3>Free to Use</h3>
          <p>
            No registration required. Upload, convert and download your files
            for free.
          </p>
        </div>

      </div>

    </section>
  );
}

export default Features;