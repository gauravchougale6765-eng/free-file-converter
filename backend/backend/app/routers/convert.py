from fastapi import APIRouter, UploadFile, File, Form, HTTPException
from fastapi.responses import Response

from app.converters import image, pdf, text

router = APIRouter()

IMAGE_FORMATS = {"JPG", "PNG", "WEBP"}

# Content-Type headers for each output format, so the browser
# knows how to handle/save the returned file correctly.
MIME_TYPES = {
    "JPG": "image/jpeg",
    "PNG": "image/png",
    "WEBP": "image/webp",
    "PDF": "application/pdf",
    "TXT": "text/plain",
}


@router.post("/convert")
async def convert_file(
    file: UploadFile = File(...),
    to_format: str = Form(...),
):
    to_format = to_format.upper()
    from_format = file.filename.split(".")[-1].upper()
    from_format = "JPG" if from_format == "JPEG" else from_format

    file_bytes = await file.read()

    try:
        # image -> image
        if from_format in IMAGE_FORMATS and to_format in IMAGE_FORMATS:
            result_bytes = image.convert_image(file_bytes, to_format)

        # image -> PDF
        elif from_format in IMAGE_FORMATS and to_format == "PDF":
            result_bytes = image.image_to_pdf(file_bytes)

        # PDF -> image
        elif from_format == "PDF" and to_format in IMAGE_FORMATS:
            result_bytes = pdf.pdf_to_image(file_bytes, to_format)

        # PDF -> TXT
        elif from_format == "PDF" and to_format == "TXT":
            result_bytes = pdf.pdf_to_text(file_bytes)

        # TXT -> PDF
        elif from_format == "TXT" and to_format == "PDF":
            result_bytes = text.text_to_pdf(file_bytes)

        else:
            raise HTTPException(
                status_code=400,
                detail=f"Converting {from_format} to {to_format} isn't supported yet.",
            )

    except HTTPException:
        raise
    except Exception as exc:
        raise HTTPException(status_code=500, detail=f"Conversion failed: {exc}")

    output_filename = f"converted.{to_format.lower()}"
    return Response(
        content=result_bytes,
        media_type=MIME_TYPES[to_format],
        headers={"Content-Disposition": f'attachment; filename="{output_filename}"'},
    )
