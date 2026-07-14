import "./Footer.css";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaEnvelope,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* Logo & About */}

        <div className="footer-section">

          <h2>FileConverter</h2>

          <p>
            Universal File Converter helps you convert files quickly,
            securely, and completely free. Simple, fast and reliable.
          </p>

        </div>

        {/* Quick Links */}

        <div className="footer-section">

          <h3>Quick Links</h3>

          <ul>

            <li><a href="#">Home</a></li>

            <li><a href="#">Features</a></li>

            <li><a href="#">Converter</a></li>

            <li><a href="#">Contact</a></li>

          </ul>

        </div>

        {/* Supported Formats */}

        <div className="footer-section">

          <h3>Supported Formats</h3>

          <ul>

            <li>PDF</li>

            <li>DOCX</li>

            <li>JPG / PNG</li>

            <li>PPTX</li>

            <li>TXT</li>

            <li>WEBP</li>

          </ul>

        </div>

        {/* Social */}

        <div className="footer-section">

          <h3>Connect With Us</h3>

          <div className="footer-social">

            <a href="#">
              <FaGithub />
            </a>

            <a href="#">
              <FaLinkedin />
            </a>

            <a href="#">
              <FaInstagram />
            </a>

            <a href="#">
              <FaEnvelope />
            </a>

          </div>

        </div>

      </div>

      <hr />

      <div className="footer-bottom">

        <p>
          © 2026 FileConverter. All Rights Reserved.
        </p>

        <p>
          Designed & Developed by <span>Gourav Chougale</span>
        </p>

      </div>

    </footer>
  );
}

export default Footer;