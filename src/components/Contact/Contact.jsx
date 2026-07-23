import "./Contact.css";

import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaPaperPlane,
} from "react-icons/fa";

function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="container">

        <div className="contact-header">
          <h2>Contact Us</h2>

          <p>
            Have a question, suggestion, or feedback? We'd love to hear from
            you.
          </p>
        </div>

        <div className="contact-wrapper">

          {/* Left */}

          <div className="contact-info">

            <div className="info-box">
              <FaEnvelope />

              <div>
                <h3>Email</h3>
                <p>gauravchougael6765@gmail.com</p>
              </div>
            </div>

            <div className="info-box">
              <FaPhoneAlt />

              <div>
                <h3>Phone</h3>
                <p>+91 8177886765</p>
              </div>
            </div>

            <div className="info-box">
              <FaMapMarkerAlt />

              <div>
                <h3>Location</h3>
                <p>Kolhapur, Maharashtra, India</p>
              </div>
            </div>

          </div>

          {/* Right */}

          <form className="contact-form">

            <div className="input-group">

              <input
                type="text"
                placeholder="Your Name"
                required
              />

              <input
                type="email"
                placeholder="Your Email"
                required
              />

            </div>

            <input
              type="text"
              placeholder="Subject"
              required
            />

            <textarea
              rows="6"
              placeholder="Your Message"
              required
            ></textarea>

            <button type="submit">
              <FaPaperPlane />

              Send Message
            </button>

          </form>

        </div>

      </div>
    </section>
  );
}

export default Contact;