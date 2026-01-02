# GenAI POC: The Multi-Modal AI Studio

> **Vision**: A comprehensive, all-in-one playground for experimenting with Text, Image, Audio, and Vision generation in a single unified interface.

---

## 1. Core Identity

**Technical Name**: `genai-poc`
**Product Name**: **GenAI Multi-Modal Studio**

GenAI POC is the "Swiss Army Knife" of Generative AI. It demonstrates a complete **SaaS architecture** that doesn't just do one thing—it integrates the "Big Four" modalities (Text, Image, Audio, Vision) into a cohesive experience. It serves as a blueprint for rapid prototyping of complex AI applications.

## 2. Key Capabilities

### 🎨 Multi-Modal Generation (`AigenModule`)

- **Visual Engine**: Generates images (DALL-E 3) with specific presets (Drone, Architectural, Macro).
- **Writing Assistant**: Specialized generators for Journalism, Social Media, and Technical Writing.
- **Vision Analysis**: "Eyes" for the AI—upload an image and ask questions about it.

### 🗣️ Voice & Audio Synergy

- **Transcription**: High-accuracy `Whisper` integration for turning audio into actionable text key-points.
- **Text-to-Speech (TTS)**: Lifelike voice generation with granular style control.

### 🏗️ Modern SaaS Architecture

- **Monorepo Structure**: Frontend (Next.js 14) and Backend (NestJS) co-located for rapid iteration.
- **Credit Integration**: Granular pricing models for different AI tasks (e.g., 30 credits for Images, 5 for Text), establishing a micro-transaction economy.

---

## 3. Technology Stack: Full-Stack Power

### The Frontend: **Next.js 14 (App Router)**

- **UI/UX**: TailwindCSS with `lucide-react` for a modern, responsive interface.
- **State Management**: React Hooks for handling real-time file uploads and generation states.

### The Backend: **NestJS + OpenAI SDK**

- **Media Handling**: `Multer` for disk/memory storage of audio and image files.
- **Validation**: Strict DTOs for every generation type (`GenerateImageDto`, `TranscribeAudioDto`).

---

## 4. Future Roadmap: From POC to Product

### 🎥 Phase 1: Video Generation Pipeline

- **Concept**: Stitching generated Images and TTS Audio into a coherent video file (FFmpeg).
- **Value**: "Automated Content Creation Studio."

### 🧠 Phase 2: RAG Knowledge Base

- **Concept**: Upload PDF documents to "Chat" with them using Vector Database embeddings.
- **Value**: "Personalized AI that knows your data."

### 🤖 Phase 3: Agentic Workflows

- **Concept**: Chaining tools together (e.g., Audio -> Text -> Image -> Social Post) autonomously.
- **Value**: "One click, complete workflow execution."
