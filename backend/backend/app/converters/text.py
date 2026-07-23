import io
from reportlab.lib.pagesizes import letter
from reportlab.pdfgen import canvas


def text_to_pdf(file_bytes: bytes) -> bytes:
    """Renders plain text into a simple paginated PDF."""
    text_content = file_bytes.decode("utf-8", errors="replace")
    lines = text_content.splitlines() or [""]

    output = io.BytesIO()
    c = canvas.Canvas(output, pagesize=letter)
    width, height = letter

    x_margin, y_margin = 50, 50
    line_height = 14
    y = height - y_margin

    for line in lines:
        if y < y_margin:
            c.showPage()
            y = height - y_margin
        c.drawString(x_margin, y, line[:110])  # basic width guard
        y -= line_height

    c.save()
    return output.getvalue()
