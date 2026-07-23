import io
from PIL import Image

# Maps our app's format names to Pillow's internal format names
PIL_FORMAT_MAP = {
    "JPG": "JPEG",
    "JPEG": "JPEG",
    "PNG": "PNG",
    "WEBP": "WEBP",
}


def convert_image(file_bytes: bytes, to_format: str) -> bytes:
    """Convert between JPG / PNG / WEBP."""
    image = Image.open(io.BytesIO(file_bytes))

    # JPG doesn't support transparency, so flatten onto white if needed
    if to_format == "JPG" and image.mode in ("RGBA", "P"):
        image = image.convert("RGB")

    output = io.BytesIO()
    image.save(output, format=PIL_FORMAT_MAP[to_format])
    return output.getvalue()


def image_to_pdf(file_bytes: bytes) -> bytes:
    """Convert a single image into a one-page PDF."""
    image = Image.open(io.BytesIO(file_bytes))
    if image.mode in ("RGBA", "P"):
        image = image.convert("RGB")

    output = io.BytesIO()
    image.save(output, format="PDF")
    return output.getvalue()
