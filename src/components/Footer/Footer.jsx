import "./Footer.css";

import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaEnvelope,
  FaArrowUp,
} from "react-icons/fa";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">

      <div className="container">

        <div className="footer-top">

          {/* Brand */}

          <div className="footer-brand">

            <h2>
              Free<span>FileConverter</span>
            </h2>

            <p>
              Convert your files quickly, securely and
              effortlessly. Built with React and FastAPI.
            </p>

            <div className="footer-social">

              <a
                href="https://www.linkedin.com/in/gourav-chougale-961"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin />
              </a>

              <a
                href="https://github.com/gauravchougale6765-eng"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.instagram.com/shivahoilc_gaurav_0113"
                target="_blank"
                rel="noreferrer"
              >
                <FaInstagram />
              </a>

              <a href="gauravchougale6765@gmail.com">
                <FaEnvelope />
              </a>

            </div>

          </div>

          {/* Quick Links */}

          <div className="footer-links">

            <h3>Quick Links</h3>

            <a href="#home">Home</a>

            <a href="#converter">Converter</a>

            <a href="#formats">Formats</a>

            <a href="#features">Features</a>

            <a href="#contact">Contact</a>

          </div>

          {/* Supported */}

          <div className="footer-links">

            <h3>Supported Formats</h3>

            <span>PDF</span>

            <span>JPG</span>

            <span>PNG</span>

            <span>WEBP</span>

            <span>TXT</span>

          </div>

        </div>

        <div className="footer-bottom">

          <p>
            © {year} FreeFileConverter. All Rights Reserved.
          </p>

          <a href="#home" className="scroll-top">
            <FaArrowUp />
          </a>

        </div>

      </div>

    </footer>
  );
}

export default Footer;