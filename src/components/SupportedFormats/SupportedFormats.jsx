import "./SupportedFormats.css";
import {
  FaFilePdf,
  FaFileWord,
  FaFileImage,
  FaFileAlt,
} from "react-icons/fa";

function SupportedFormats() {
  const formats = [
    {
      icon: <FaFilePdf />,
      title: "PDF",
      desc: "Convert PDF to Images and Images to PDF.",
    },
    {
      icon: <FaFileWord />,
      title: "DOCX",
      desc: "Convert Word documents with FastAPI backend.",
    },
    {
      icon: <FaFileImage />,
      title: "Images",
      desc: "JPG, PNG, WEBP, BMP conversions.",
    },
    {
      icon: <FaFileAlt />,
      title: "TXT",
      desc: "TXT to PDF conversion.",
    },
  ];

  return (
    <section className="formats" id="formats">
      <div className="container">

        <div className="formats-title">
          <h2>Supported Formats</h2>
          <p>
            Convert files between popular formats quickly and securely.
          </p>
        </div>

        <div className="formats-grid">

          {formats.map((item, index) => (
            <div className="format-card" key={index}>

              <div className="format-icon">
                {item.icon}
              </div>

              <h3>{item.title}</h3>

              <p>{item.desc}</p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default SupportedFormats;