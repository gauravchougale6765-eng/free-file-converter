from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.routers import convert

app = FastAPI(title="File Converter API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Deploy नंतर इथे तुमची production frontend URL टाकू
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(convert.router, prefix="/api")


@app.get("/")
def health_check():
    return {"status": "ok", "message": "File Converter API is running"}