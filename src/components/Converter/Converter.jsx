import { useState } from "react";
import "./Converter.css";

function Converter() {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    if (e.target.files.length > 0) {
      setFile(e.target.files[0]);
    }
  };

  return (
    <section className="converter" id="converter">

      <h2>Universal File Converter</h2>

      <p className="converter-text">
        Upload any file and convert it to multiple formats easily
      </p>

      {/* Upload Box */}

      <div className="upload-box">

        <div className="upload-icon">
          ☁️
        </div>

        <h3>Drag & Drop your file here</h3>

        <span>OR</span>

        <label className="choose-btn">
          Choose File
          <input
            type="file"
            hidden
            onChange={handleFileChange}
          />
        </label>

        <p className="formats">
          Supported Formats: PDF, DOCX, JPG, PNG, PPTX, TXT, HTML, WEBP
        </p>

      </div>

      {/* Uploaded File */}

      {file && (
        <div className="file-card">

          <div className="file-info">

            <h4>{file.name}</h4>

            <p>
              {(file.size / (1024 * 1024)).toFixed(2)} MB
            </p>

          </div>

          <span className="uploaded">
            ✓ Uploaded
          </span>

        </div>
      )}

      {/* Conversion Options */}

      {file && (
        <div className="convert-box">

          <div className="select-group">

            <div className="select-item">
              <label>Convert From</label>

              <select className="format-select">
                <option>Auto Detect</option>
              </select>
            </div>

            <div className="select-item">
              <label>Convert To</label>

              <select className="format-select">
                <option>PDF</option>
                <option>DOCX</option>
                <option>JPG</option>
                <option>PNG</option>
                <option>PPTX</option>
                <option>TXT</option>
                <option>HTML</option>
                <option>WEBP</option>
              </select>
            </div>

          </div>

          <button className="convert-btn">
            Convert File
          </button>

        </div>
      )}

    </section>
  );
}

export default Converter;