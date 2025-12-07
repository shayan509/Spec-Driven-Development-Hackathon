---
id: 1
title: "Create RAG Agent Implementation Spec"
stage: spec
date_iso: 2025-12-07
surface: agent
model: claude-sonnet-4-5-20250929
feature: rag-agent-implementation
branch: 003-rag-agent-implementation
user: user
command: "/sp.specify"
labels: ["spec", "rag", "ai", "assistant"]
links:
  spec: "specs/003-rag-agent-implementation/spec.md"
  ticket: null
  adr: null
  pr: null
files_yaml:
  - "specs/003-rag-agent-implementation/spec.md"
  - "specs/003-rag-agent-implementation/checklists/requirements.md"
tests_yaml:
  - "spec creation"
  - "quality validation"
prompt_text: "## 🛠️ specify.specs - Production-Ready RAG Agent Implementation\n\n**[ROLE]**: Lead AI Systems Architect & Full-Stack Developer.\n**[GOAL]**: Implement the \"Intelligent Study Partner\" chatbot, leveraging the **OpenAI Assistant/Thread model** for conversation state and **Qdrant** for grounded Retrieval-Augmented Generation (RAG).\n\n**[CRITICAL MODIFICATION]**: The **Login/Sign-up feature is DROPPED**. The **Neon/Postgres database is removed** from the stack. Session state must be managed **ONLY** by the Assistant API's `thread_id`.\n\n---\n\n### 1. 🧠 Core RAG Retrieval and Agent Orchestration\n\n**[TASK 1.1: DEFINE AGENT UTILITIES]**\n* **File**: `backend/app/rag/agent_utilities.py`\n* **Purpose**: Manages the persistent components of the Assistant API.\n* **Action**: Create functions to handle the lifecycle of an OpenAI Assistant and Thread, utilizing the configured `openai_client`.\n    * **`get_or_create_assistant()`**: Creates/retrieves the primary **\"Textbook Tutor Agent\"**.\n        * **Model**: Use the LLM model from `config.py` (e.g., `gemini-2.5-flash`).\n        * **Instructions**: Set the **System Prompt** for grounded RAG: *\"You are an expert tutor on Physical AI and Robotics. Answer the user's question ONLY using the context provided via the RAG retrieval tool. Do not use outside knowledge. If the context is insufficient, state that you cannot answer based on the textbook.\"*\n        * **Tools**: Ensure the Assistant is configured to accept **Function Calling** (specifically the tool defined in TASK 1.2).\n    * **`create_new_thread()`**: Creates a new, empty conversation thread for a new user session.\n\n**[TASK 1.2: QDRANT RAG TOOL DEFINITION]**\n* **Action**: Define the custom **Tool Schema** that the Assistant will use to access our Qdrant knowledge base.\n    * **Function Name**: `retrieve_textbook_knowledge`\n    * **Description**: \"Use this function to find relevant context from the textbook before answering the user's question. This tool searches the Qdrant vector database.\"\n    * **Parameters**: `query: str` (the user's question), `context_filter: str` (the current page module, used to prioritize search).\n\n**[TASK 1.3: RAG EXECUTION FUNCTION (The Tool Loop)]**\n* **File**: `backend/app/rag/chat.py`\n* **Purpose**: Executes the multi-step run loop required for Assistants API function calling.\n* **Action**: Create the core function, `run_agent_rag_query(thread_id: str, query: str, context_filter: str)`.\n    * **Workflow**:\n        1.  Add the user's message to the specified `thread_id`.\n        2.  Run the Assistant on the thread.\n        3.  **Monitor Run**: Loop and check the run status until it requires action (`requires_action`).\n        4.  **Tool Intercept**: If action is required, intercept the call to **`retrieve_textbook_knowledge`**.\n        5.  **Qdrant Search**: Execute the actual **Qdrant vector search** using the arguments provided by the Assistant (query and filter).\n        6.  **Tool Output Submission**: Submit the retrieved text chunks (the RAG context) back to the Assistant as the **Tool Output**.\n        7.  Wait for the final response from the Assistant (`completed` status) and return the last message content.\n\n---\n\n### 2. 🚀 FastAPI Agent Endpoint Implementation\n\n**[TASK 2.1: IMPLEMENT AGENT STATE ENDPOINTS]**\n* **File**: `backend/app/main.py`\n* **Purpose**: Expose the necessary endpoints to manage the state required by the Assistant API model.\n* **Action**: Create two dedicated HTTP endpoints:\n    * **Endpoint 1 (Session Start)**: `POST /api/agent/session`\n        * **Action**: Calls `create_new_thread()` and returns the new `thread_id` to the frontend.\n    * **Endpoint 2 (Chat/Run)**: `POST /api/agent/chat`\n        * **Input**: `{ \"thread_id\": str, \"message\": str, \"page_context\": str }`\n        * **Action**: Calls the `run_agent_rag_query()` function and returns the final generated response text.\n\n---\n\n### 3. 💬 Frontend Chat Widget (Docusaurus)\n\n**[TASK 3.1: CREATE CHAT WIDGET COMPONENT]**\n* **File**: `physical-ai-textbook/src/components/AiStudyPartner.tsx`\n* **Purpose**: Provide the user interface and handle the communication with the FastAPI agent endpoints.\n* **"
response_text: "Created specification for RAG Agent Implementation including user scenarios, functional requirements, and success criteria."
outcome: "Specification created successfully with all required sections"
evaluation: "Specification meets quality standards and is ready for planning"
---

# Prompt History Record

## Summary
Created a comprehensive specification for the RAG Agent Implementation feature based on the user's requirements for an Intelligent Study Partner chatbot.

## Details
- **Feature**: RAG Agent Implementation for Intelligent Study Partner
- **Scope**: Production-ready chatbot using OpenAI Assistant/Thread model and Qdrant for RAG
- **Key Components**: Backend API, frontend chat widget, conversation management
- **Status**: Specification complete and validated

## Actions Taken
1. Generated comprehensive feature specification
2. Defined user scenarios with priorities
3. Created functional requirements
4. Established success criteria
5. Validated specification quality
6. Created quality checklist

## Next Steps
- Proceed to planning phase with `/sp.plan`
- Implement the defined requirements