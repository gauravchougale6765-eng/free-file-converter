import { useState } from "react";
import "./Contact.css";

import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaPaperPlane,
} from "react-icons/fa";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState(""); // "sending" | "success" | "error"

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: "5d2234f4-ee61-4aea-a2c5-cf00acba0eae",
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

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

          <form className="contact-form" onSubmit={handleSubmit}>

            <div className="input-group">

              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />

            </div>

            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />

            <textarea
              name="message"
              rows="6"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>

            <button type="submit" disabled={status === "sending"}>
              <FaPaperPlane />
              {status === "sending" ? "Sending..." : "Send Message"}
            </button>

            {status === "success" && (
              <p style={{ color: "green", marginTop: "10px" }}>
                ✅ Message sent successfully!
              </p>
            )}

            {status === "error" && (
              <p style={{ color: "red", marginTop: "10px" }}>
                ❌ Something went wrong. Please try again.
              </p>
            )}

          </form>

        </div>

      </div>
    </section>
  );
}

export default Contact;