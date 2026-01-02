# JobPang AI: The Enterprise Career Orchestrator

> **Vision**: An autonomous, deterministic, and scalable AI infrastructure that doesn't just "chat" but _orchestrates_ the entire career development lifecycle for users—from diagnostics to strategy.

---

## 1. Core Identity

**Technical Name**: `jobpang-orchestrator-llm-service`
**Product Name**: **JobPang AI API**

This is not a simple wrapper around ChatGPT. It is a **Pattern-Based AI Orchestration System** built on **NestJS Enterprise Architecture**. It treats "Career Coaching" not as a creative writing task but as a precise engineering problem, ensuring consistent, high-value, and actionable outputs every time.

## 2. Solving What Matters (The Value Proposition)

JobPang AI solves the specific, high-stakes problems of job seekers that generic chatbots fail at:

### 🧠 Deep Diagnostic Intelligence (`DocumentDiagnosisModule`)

Most tools just "read" a resume. JobPang performs a **multi-dimensional autopsy**:

- **Triangulated Analysis**: Simultaneously analyzes Resume, Cover Letter, and Career Description to find inconsistencies.
- **Role-Specific Scoring**: Distinction between "Entry-Level" (potential-focused) and "Experienced" (competency-focused) logic.
- **Quantifiable Metrics**: Returns strict JSON grading schemes, weighted scores, and "Character Types" for gamified self-discovery.

### 🛡️ The "Anti-Hallucination" Mentor (`CommunityQuestionModule`)

- **Deterministic Guidance**: Uses rigorous system prompts to force the AI into a "Non-interactive, Execution-based" mode. It doesn't chat; it delivers the _official answer_.
- **Strategic Inquiry**: Automatically generates "Deep Dive" follow-up questions to guide the user's thinking process, mimicking a senior mentor's Socratic method.

### ✍️ Intelligent Drafting (`DraftModule`)

- **Context-Aware Authoring**: Writes Cover Letters that are mathematically aligned with the user's Resume strengths and the Job Description's requirements.

---

## 3. Technology Stack: Built for Scale

### The Backbone: **NestJS (Node.js/TypeScript)**

- **Why it matters**: Provides the modularity, dependency injection, and strict typing required for a system that manages money/careers.
- **Architecture**: Domain-Driven Design (DDD) with clear boundaries between `Controllers` (API), `Services` (Logic), and `Prompts` (AI Behavior).

### The Brain: **Hybrid AI Model Strategy**

- **GPT-4o-mini**: Utilized for high-speed, real-time interactive tasks (Chat, simple Q&A).
- **GPT-4-Turbo**: Reserved for "Heavy Lifting" tasks like full Resume Diagnosis and Comparative Analysis where reasoning depth > speed.

### The Pipeline:

- **Input Processing**: `mupdf` / `pdf-parse` for high-fidelity PDF text extraction.
- **Validation Layer**: `class-validator` DTOs ensure that garbage data never reaches the AI, saving token costs and preventing crashes.
- **Response Standardization**: Unified `ApiResponseDto` means the frontend always knows exactly what to expect.

---

## 4. Future Roadmap: From Tool to Ecosystem

Leveraging the current "Orchestrator" foundations to build high-revenue features:

### 🚀 Phase 1: The "AI-Recruiter" Simulator (Mock Interview)

_Turn the tables._ The system already understands the Resume and the Job.

- **Concept**: An AI voice agent that calls the user and conducts a 15-minute screen phone interview.
- **Tech**: Integrate OpenAI Realtime API.
- **Value**: "Practice with the toughest recruiter before the real deal."

### ⚖️ Phase 2: Gap Analysis Engine (Upskilling)

_The missing link._

- **Concept**: Instead of just saying "You fit 70%", the AI identifies the exact missing 30% (e.g., "Missing NestJS expertise") and recommends specific courses or projects to fill that gap.
- **Business Model**: Affiliate partnerships with ed-tech platforms.

### 🕵️ Phase 3: Headhunter Reverse-Search (B2B)

_Smart Matching._

- **Concept**: Allow companies to upload a Job Description. The Orchestrator scans the database not for keywords, but for _competency matches_ based on its deep understanding of user resumes.
