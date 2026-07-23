import "./Converter.css";
import { useState } from "react";
import { FaCloudUploadAlt, FaFileAlt } from "react-icons/fa";
import { convertFile, downloadBlob } from "../../api";

function Converter() {
  const [file, setFile] = useState(null);
  const [fromFormat, setFromFormat] = useState("");
  const [toFormat, setToFormat] = useState("");
  const [isConverting, setIsConverting] = useState(false);
  const [error, setError] = useState("");

  const handleFileChange = (e) => {
    if (e.target.files.length > 0) {
      const selectedFile = e.target.files[0];
      setFile(selectedFile);
      setError("");

      const extension = selectedFile.name.split(".").pop().toUpperCase();
      setFromFormat(extension === "JPEG" ? "JPG" : extension);
    }
  };

  const removeFile = () => {
    setFile(null);
    setFromFormat("");
    setToFormat("");
    setError("");
  };

  const handleConvert = async () => {
    if (!file) {
      setError("Please select a file first.");
      return;
    }
    if (!toFormat) {
      setError("Please choose a target format.");
      return;
    }

    setIsConverting(true);
    setError("");

    try {
      const resultBlob = await convertFile(file, toFormat);
      const outputName = `converted.${toFormat.toLowerCase()}`;
      downloadBlob(resultBlob, outputName);
    } catch (err) {
      setError(err.message || "Something went wrong during conversion.");
    } finally {
      setIsConverting(false);
    }
  };

  return (
    <section className="converter" id="converter">
      <div className="container">

        <div className="converter-header">
          <h2>Universal File Converter</h2>
          <p>
            Upload your file, choose the output format and convert it in
            seconds.
          </p>
        </div>

        <div className="upload-box">

          <label htmlFor="fileUpload" className="upload-area">
            <FaCloudUploadAlt className="upload-icon" />

            <h3>Drag & Drop Your File</h3>

            <p>or Click to Browse</p>

            <span>
              Supported :
              PDF • JPG • PNG • WEBP • TXT
            </span>

            <input
              type="file"
              id="fileUpload"
              hidden
              onChange={handleFileChange}
            />
          </label>

          {file && (
            <div className="selected-file">

              <div className="file-info">
                <FaFileAlt />

                <div>
                  <h4>{file.name}</h4>

                  <p>
                    {(file.size / 1024 / 1024).toFixed(2)} MB
                  </p>
                </div>

              </div>

              <button
                className="remove-btn"
                onClick={removeFile}
              >
                Remove
              </button>

            </div>
          )}

          <div className="format-grid">

            <div className="format-box">

              <label>From</label>

              <input
                type="text"
                value={fromFormat}
                readOnly
                placeholder="Auto Detect"
              />

            </div>

            <div className="format-box">

              <label>To</label>

              <select
                value={toFormat}
                onChange={(e) => setToFormat(e.target.value)}
              >
                <option value="">Select Format</option>
                <option value="PDF">PDF</option>
                <option value="JPG">JPG</option>
                <option value="PNG">PNG</option>
                <option value="WEBP">WEBP</option>
                <option value="TXT">TXT</option>
              </select>

            </div>

          </div>

          {error && (
            <p style={{ color: "#ef4444", marginBottom: "20px", textAlign: "center" }}>
              {error}
            </p>
          )}

          <button
            className="convert-btn"
            onClick={handleConvert}
            disabled={isConverting}
            style={isConverting ? { opacity: 0.7, cursor: "not-allowed" } : {}}
          >
            {isConverting ? "Converting..." : "Convert File"}
          </button>

        </div>

      </div>
    </section>
  );
}

export default Converter;
