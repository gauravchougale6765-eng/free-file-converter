// src/api.js
const API_BASE_URL = "https://free-file-converter-06l2.onrender.com/api";

export async function convertFile(file, toFormat) {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("to_format", toFormat);

  const response = await fetch(`${API_BASE_URL}/convert`, {
    method: "POST",
    body: formData,
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.detail || "Conversion failed");
  }

  // Server sends back the converted file's raw bytes
  return response.blob();
}

// Triggers a browser download for the returned blob
export function downloadBlob(blob, filename) {
  const url = window.URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  link.remove();
  window.URL.revokeObjectURL(url);
}
