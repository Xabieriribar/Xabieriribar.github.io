"""FastAPI app to generate images via OpenAI's image endpoint.

How to run:
    pip install fastapi httpx "uvicorn[standard]" jinja2
    export OPENAI_API_KEY=your-key
    uvicorn main:app --reload
"""
import os
import httpx
from fastapi import FastAPI, Form, Request
from fastapi.responses import HTMLResponse
from fastapi.templating import Jinja2Templates

OPENAI_KEY = os.environ.get("OPENAI_API_KEY")

app = FastAPI()
templates = Jinja2Templates(directory="templates")
client = httpx.AsyncClient(timeout=5)

@app.get("/", response_class=HTMLResponse)
async def index(request: Request):
    # Show the main page with the pre-filled prompt
    return templates.TemplateResponse(
        "index.html",
        {
            "request": request,
            "img_url": "",
            "default_prompt": "A futuristic city skyline in synthwave neon at dusk",
        },
    )

@app.post("/generate")
async def generate(prompt: str = Form(...)):
    # Send the prompt to OpenAI and return the resulting image URL
    headers = {"Authorization": f"Bearer {OPENAI_KEY}"}
    payload = {"prompt": prompt, "n": 1, "size": "512x512"}
    resp = await client.post(
        "https://api.openai.com/v1/images/generations",
        json=payload,
        headers=headers,
    )
    resp.raise_for_status()
    data = resp.json()
    return {"url": data["data"][0]["url"]}

@app.on_event("shutdown")
async def on_shutdown():
    await client.aclose()
