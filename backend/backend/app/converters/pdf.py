import io
import fitz  # PyMuPDF
from pypdf import PdfReader


def pdf_to_image(file_bytes: bytes, to_format: str) -> bytes:
    """
    Renders the FIRST page of a PDF as an image.
    (Multi-page PDFs would need a zip of images - flagged as a future upgrade.)
    """
    doc = fitz.open(stream=file_bytes, filetype="pdf")
    page = doc[0]
    pix = page.get_pixmap(dpi=200)

    pil_format = "JPEG" if to_format == "JPG" else to_format
    return pix.pil_tobytes(format=pil_format)


def pdf_to_text(file_bytes: bytes) -> bytes:
    """Extracts all text from a PDF, page by page."""
    reader = PdfReader(io.BytesIO(file_bytes))
    text_parts = [page.extract_text() or "" for page in reader.pages]
    full_text = "\n\n".join(text_parts)
    return full_text.encode("utf-8")
