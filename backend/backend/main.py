from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.routers import convert

app = FastAPI(title="File Converter API")

# Vite's default dev server runs on port 5173.
# Add your production frontend URL here too once you deploy.
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "http://127.0.0.1:5173",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(convert.router, prefix="/api")


@app.get("/")
def health_check():
    return {"status": "ok", "message": "File Converter API is running"}
