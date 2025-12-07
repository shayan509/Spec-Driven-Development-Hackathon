---
id: 3
title: "specify-rag-chatbot-docusaurus"
stage: "spec"
date: "2025-12-07"
model: "claude-sonnet-4-5-20250929"
feature: "rag-chatbot-docusaurus"
branch: "003-rag-chatbot-docusaurus"
user: "icon"
command: "/sp.specify"
labels: ["specification", "rag", "chatbot", "docusaurus", "gemini"]
links:
  spec: "specs/003-rag-chatbot-docusaurus/spec.md"
  ticket: null
  adr: null
  pr: null
files:
  - "specs/003-rag-chatbot-docusaurus/spec.md"
  - "specs/003-rag-chatbot-docusaurus/checklists/requirements.md"
tests: []
---

# Feature Specification: RAG Chatbot Integration for Docusaurus

## User Input
```
🛠️ SPECIFY.SPECS — Full RAG Chatbot Integration for Docusaurus (Google Gemini + OpenAI Agents SDK)

Role

You are Lead AI Systems Architect, responsible for designing a complete, production-ready RAG Chatbot system for a Docusaurus documentation website.

Goal

Create a chatbot that:

Answers only from the book/docs content.

Uses simple, beginner-friendly explanations.

Uses RAG with Qdrant.

Uses Google Gemini models through the OpenAI Agents SDK (OpenAIChatCompletionsModel + AsyncOpenAI pointing to https://generativelanguage.googleapis.com/v1beta/openai/).

Uses FastAPI as the backend and Docusaurus as the frontend.


The resulting specification will be used by Spec-Kit Plus to generate:

specs.md

brand.md

tasks.md

All required implementation scaffolding.



---

1. 🧠 System Overview & Grounding Rules

Objective

Build a full RAG-based chatbot that:

1. Retrieves relevant content from Qdrant.


2. Uses Gemini (via OpenAI Agents SDK) for reasoning + message generation.


3. Explains content very simply.


4. Rejects any answer outside the book with:

> "I cannot answer this based on the book content."





Hard Constraints

No hallucinations.

No external world knowledge.

All answers must cite retrieved chunks.

All agent runs must use a tool → reasoning → final_answer loop.



---

2. 🔌 OpenAI Agents SDK + Google Gemini Integration

Model Setup Requirements

The system must use this structure:

external_client = AsyncOpenAI(
    api_key=my_api_key,
    base_url="https://generativelanguage.googleapis.com/v1beta/openai/",
)

model = OpenAIChatCompletionsModel(
    model="gemini-2.0-flash",
    openai_client=external_client,
)

config = RunConfig(
    model=model,
    tracing_disabled=True,
    model_provider=external_client
)

Supported Models:

gemini-2.0-flash

gemini-2.0-pro

gemini-2.0-pro-exp


Environment-controlled.

Requirements:

All agents must use Gemini through OpenAIChatCompletionsModel.

All runs must go through Runner.run_sync or Runner.run.

All RAG interactions must use Gemini models for tool-calling + decision-making.



---

3. 🧠 Agent Design Requirements

System Prompt

You are an AI Tutor.
You must ONLY answer using context retrieved from the textbook/documentation.
If the context does not contain the answer, reply:
"I cannot answer this based on the book content."
Always explain concepts in the simplest, most beginner-friendly way possible.

Agent Capabilities

Tool calling enabled.

Multi-step reasoning.

Strict grounding (RAG-only).

Thread-based memory (via Agents SDK).

No hallucinations.


Required Agent Tool

Tool Name: rag_query

Parameters:

query: string

page_context: string | null


Returns:
Top-N retrieved chunks from Qdrant, formatted as a combined text block.


---

4. 📚 RAG Pipeline Specification

Document Source

Folder: /docs in Docusaurus

Format: Markdown

Cleaning: strip frontmatter, links, HTML, code blocks


Chunking

Chunk size: 512–1024 tokens

Overlap: 20–40 tokens


Embeddings

Provider selected by config:

Cohere


Must support batching.


Vector DB (Qdrant)

Collection: docs_collection
Distance: cosine

Payloads:

text

source_path

title

token_start / token_end



---

5. 🚀 FastAPI Backend Specification

Endpoints

1. POST /api/session

Returns:

{ "thread_id": "string" }

2. POST /api/chat

Request:

{
  "thread_id": "string",
  "message": "string",
  "page_context": "string"
}

Response:

{ "reply": "string" }

3. GET /api/health

Simple OK response.


---

6. 💬 Docusaurus Frontend Chat Widget

UI Requirements

Floating button (bottom-right).

Modal chat window.

Scrollable chat history.

Typing indicator.

Light, clean, minimal UI.


Session Management

On load:

Call /api/session

Store thread_id in localStorage



Message Flow

On send:

POST /api/chat

Include:

message

thread_id

current page URL as page_context



Page Awareness

The frontend must send the Docusaurus page route, such as:

/docs/module-2/intro

Used for context-aware retrieval.


---

7. 🔐 Non-Functional Requirements

Safety

No hallucinations.

No answers without retrieved evidence.

No external knowledge allowed.


Performance

Qdrant search < 100ms

Agent response < 1.5s


Security

All API keys in .env

CORS fully configured

Never expose embeddings or API keys to the frontend



---

8. 🧪 Testing Requirements

Unit Tests

Chunking logic.

Embeddings generation.

Qdrant search.

Tool-call execution.


Integration Tests

Chat → Backend → Agent → RAG → Chat loop.


Manual Tests

Ask questions from every chapter.

Ask out-of-scope questions (must decline).



---

9.  Deliverables (Generated by Spec-Kit)

The /sp.specify command must produce:

specs.md

brand.md

tasks.md

Full implementation plan

Ready-to-use structure for /sp.implement



---

🔥 Final Note

This specification must enforce the use of Google Gemini models through the OpenAI Agents SDK, exactly as demonstrated in the provided Python snippet.
```

## Response Summary
Created comprehensive feature specification for RAG Chatbot Integration for Docusaurus. The specification includes:

- User scenarios prioritized by importance (P1-P3)
- Functional requirements (FR-001 to FR-015) covering all aspects of the system
- Key entities definition
- Success criteria with measurable outcomes (SC-001 to SC-007)
- Edge cases consideration

The specification is ready for the planning phase (/sp.plan) and meets all quality criteria with no remaining clarifications needed.