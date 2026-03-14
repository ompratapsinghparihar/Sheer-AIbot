from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import google.generativeai as genai

genai.configure(api_key="AIzaSyCfw2Ccj28_klD1C3l8CpzeP9oHyUGeS2E")
model = genai.GenerativeModel("gemini-pro")


app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def home():
    return {"message": "Sheer Ai is running"}
@app.get("/chat")
def chat(message: str):

    response = model.generate_content(message)
    
    return {"response": response.text}