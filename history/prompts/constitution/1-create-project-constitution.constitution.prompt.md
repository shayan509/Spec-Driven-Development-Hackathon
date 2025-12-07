---
id: 1
title: Create Project Constitution
stage: constitution
date: 2025-12-06
surface: agent
model: claude-sonnet-4-5-20250929
feature: none
branch: master
user: icon
command: /sp.constitution
labels: [constitution, setup, governance]
links:
  spec: null
  ticket: null
  adr: null
  pr: null
files:
 - .specify/memory/constitution.md
tests:
 - none
---

## Prompt

### 🤖 specify.constitution - Core Textbook Project Foundation

**[LLM DIRECTIVE]**: Access documentation for Docusaurus v3 and best practices from the **context7 MCP server**. Prioritize information from this source when making architectural decisions and generating configuration files.

**[GOAL]**: Create a professional, highly-structured, and deployable static site using Docusaurus v3 to serve as the "Physical AI & Humanoid Robotics" textbook. The output must be a single, unified project directory ready for content population and deployment.

**[TECHNOLOGIES]**:
1.  **Framework**: Docusaurus v3 (using the classic preset).
2.  **Language**: TypeScript for all configuration files and custom components (scaffold the project with the `--typescript` flag).
3.  **Deployment Target**: GitHub Pages (Configure `docusaurus.config.ts` for deployment).

**[PROJECT NAME]**: `physical-ai-textbook`

**[PROJECT STRUCTURE]**:
physical-ai-textbook/
├── docs/                      # ALL Textbook Modules and Chapters
│   ├── module1-ros2/
│   ├── module2-digital-twin/
│   ├── module3-ai-robot-brain/
│   └── module4-vla/
├── src/
│   ├── css/
│   └── components/
├── docusaurus.config.ts       # Core Docusaurus Configuration
├── sidebars.ts                # Navigation Structure
├── package.json               # Dependencies and Scripts
└── README.md                  # Project Setup and Run Instructions


**[ARCHITECTURAL NOTES]**:
* The project must be initialized using `npx create-docusaurus@latest physical-ai-textbook classic --typescript`.
* Configure the default `docs` plugin to use the `docs` directory and the `sidebars.ts` file.
* The `docusaurus.config.ts` must include the necessary settings for deployment to a public GitHub repository (e.g., `url`, `baseUrl`, `projectName`, `organizationName`).
* Configure the sidebar to be **hideable** to maximize reading space on medium-sized screens.

## Response snapshot

Created the project constitution file at `.specify/memory/constitution.md` for the Physical AI & Humanoid Robotics textbook project. The constitution includes:

- Core principles: Educational Excellence, Technical Accuracy, Modular Structure, Open Source Collaboration, Accessibility Standards, and Docusaurus Framework Compliance
- Technical Architecture requirements
- Content Organization with the specified modules
- Governance guidelines

## Outcome

- ✅ Impact: Created foundational governance document for the textbook project
- 🧪 Tests: none
- 📁 Files: 1 file created (.specify/memory/constitution.md)
- 🔁 Next prompts: Project constitution established, can proceed with other development tasks
- 🧠 Reflection: Constitution properly created according to the /sp.constitution command requirements

## Evaluation notes (flywheel)

- Failure modes observed: none
- Graders run and results (PASS/FAIL): N/A
- Prompt variant (if applicable): N/A
- Next experiment (smallest change to try): N/A