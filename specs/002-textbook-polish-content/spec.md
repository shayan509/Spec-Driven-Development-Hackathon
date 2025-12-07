# Feature Specification: Physical AI & Humanoid Robotics Textbook Polish & Content Expansion

**Feature Branch**: `002-textbook-polish-content`
**Created**: 2025-12-07
**Status**: Draft
**Input**: User description: "# 🛠️ specify.specs - Final Project Polish & Content Expansion

**[ROLE]**: Senior Frontend Architect & Technical Writer.
**[CONTEXT]**: We are finalizing the \"Physical AI & Humanoid Robotics\" textbook (Docusaurus v3).
**[LLM DIRECTIVE]**: Access documentation for Docusaurus v3 from the **context7 MCP server**. Implement the following changes by modifying the existing codebase (`docusaurus.config.ts`, `custom.css`, components, and Markdown files).

---

## 1. 🧭 Navigation & Branding Overhaul
**Target File**: `physical-ai-textbook/docusaurus.config.ts`

**[TASK: NAVBAR CLEANUP]**
* **Remove Branding**: Suppress the default Docusaurus logo. Set `navbar.logo` to an empty configuration or remove the property entirely.
* **Set Title**: Ensure `navbar.title` is set to **\"Physical AI & Humanoid Robotics\"**. This text is the primary left-aligned branding.
* **Items Configuration**: Rewrite the `navbar.items` array to match this exact structure:
    * **Left Side (`position: 'left'`):**
        1.  `label: 'Home'`, `to: '/'` (Link to index).
        2.  `type: 'docSidebar'`, `sidebarId: 'textbookSidebar'`, `label: 'Start Reading'` (Link to docs).
    * **Right Side (`position: 'right'`):**
        1.  `label: 'Sign In'`, `href: '#'` (Placeholder link).
        2.  `label: 'Sign Up'`, `href: '#'`, `className: 'button button--primary navbar-signup-btn'`.
        3.  `href: 'https://github.com/your-repo'`, `label: 'GitHub'`.
* **Constraint**: **REMOVE the Search Bar.** Do not include any search items.

---

## 2. 🎨 Theme & Visual Fixes
**Target File**: `physical-ai-textbook/src/css/custom.css`

**[TASK: LIGHT THEME REPAIRS]**
* **Background Color**: Explicitly target `html[data-theme='light']`. Force the `background-color` of the `body` and `main` containers to **White (`#FFFFFF`)** or a very light gray (`#F5F6F7`). The background must strictly switch colors when toggled.
* **Button Visibility**: Create a specific CSS rule for `.navbar-signup-btn` (and general buttons) under `html[data-theme='light']`.
    * **Force Contrast**: When in light mode, the button **text color** and **border** must be Dark Blue (`#0A192F`) or Black to ensure it is readable against the button's background.

---

## 3. 🏠 Homepage Content & Structure
**Target Files**: `src/components/HomepageHero.tsx`, `src/components/HomepageValueProp.tsx`, `src/pages/index.tsx`

**[TASK: HERO SECTION UPDATE]**
* **Image**: In `HomepageHero.tsx`, replace the placeholder image logic. Use an `<img>` tag pointing to `/build/img/Image For Hero Section.jpeg`. Ensure it is centered and styled to be the visual focal point.

**[TASK: VALUE PROP EXPANSION]**
* **Structure**: Update `HomepageValueProp.tsx` to include **three distinct content sections** (use Grid/Card layouts):
    1.  **\"Why Read This?\"**: 3 cards explaining the career/technical benefits.
    2.  **\"Curriculum & Topics\"**: 4 cards (one for each Module: ROS 2, Digital Twin, Brain, VLA) listing specific technical topics (e.g., \"VSLAM,\" \"Isaac Sim,\" \"Action Transformers\").
    3.  **\"AI Maturity Levels\"**: 5 cards (Levels 1–5) mimicking a \"Consulting/Benchmark\" framework (e.g., \"Level 1: Automation\" -> \"Level 5: Embodied Intelligence\").
* **Integration**: Ensure `HomepageValueProp` is rendered in `index.tsx` immediately after `HomepageHero`.

---

## 4. 📚 Textbook Content Deepening (Critical)
**Target**: `docs/` directory files.

**[TASK: EXPAND CONTENT (200-300 Words Each)]**
* **Goal**: The current pages are too short. Rewrite the following files to be professional, dense, and educational. Use **Bold** text for key terms and **H2 headers** for structure.

| File Path | Content Requirements |
| :--- | :--- |
| `module1-ros2/01_introduction.md` | Define **Embodied Intelligence**. Explain why **ROS 2** is the standard middleware (\"The Nervous System\"). Explain the **Graph Architecture** (Nodes/Edges). |
| `module1-ros2/02_communication.md` | deeply explain **Nodes** (process), **Topics** (Pub/Sub stream), and **Services** (Req/Res). Mention DDS (Data Distribution Service) as the underlying transport. |
| `module3-ai-robot-brain/01_perception.md` | Discuss the **Sim-to-Real Gap**. Explain how **NVIDIA Isaac Sim** generates **Synthetic Data** (photorealistic rendering + physics) to train perception models safely. |
| `module4-vla/01_llm_robotics_intro.md` | Explain **Vision-Language-Action (VLA)** models. Describe the pipeline: Human Instruction (\"Pick up the apple\") -> LLM Reasoning -> **Grounded Action** (Coordinate generation). |"

## User Scenarios & Testing *(mandatory)*

<!--
  IMPORTANT: User stories should be PRIORITIZED as user journeys ordered by importance.
  Each user story/journey must be INDEPENDENTLY TESTABLE - meaning if you implement just ONE of them,
  you should still have a viable MVP (Minimum Viable Product) that delivers value.

  Assign priorities (P1, P2, P3, etc.) to each story, where P1 is the most critical.
  Think of each story as a standalone slice of functionality that can be:
  - Developed independently
  - Tested independently
  - Deployed independently
  - Demonstrated to users independently
-->

### User Story 1 - Access Comprehensive Textbook Content (Priority: P1)

As a student or professional interested in Physical AI and Humanoid Robotics, I want to access a comprehensive, well-structured textbook that provides deep technical knowledge so that I can learn about advanced robotics concepts and stay current with industry developments.

**Why this priority**: This is the core value proposition of the textbook - delivering comprehensive educational content to users.

**Independent Test**: Users can navigate to the textbook, read expanded content sections, and access detailed technical explanations that meet their learning needs.

**Acceptance Scenarios**:

1. **Given** I am on the homepage, **When** I click "Start Reading", **Then** I am directed to the comprehensive textbook content with detailed, professional explanations
2. **Given** I am viewing any textbook page, **When** I read the content, **Then** I find 200-300 word professional explanations with technical depth

---

### User Story 2 - Navigate and Explore the Textbook (Priority: P1)

As a user of the Physical AI textbook website, I want a clear and intuitive navigation system so that I can easily find and access the content I'm interested in.

**Why this priority**: Navigation is fundamental to the user experience - users need to be able to find content easily.

**Independent Test**: Users can navigate between different sections of the textbook using a clear navbar with intuitive menu items.

**Acceptance Scenarios**:

1. **Given** I am on any page of the website, **When** I view the navigation bar, **Then** I see a clear title "Physical AI & Humanoid Robotics" and intuitive menu items
2. **Given** I am viewing the navbar, **When** I click on "Start Reading", **Then** I am taken to the textbook content with the sidebar navigation

---

### User Story 3 - Experience Consistent Theme and Visual Design (Priority: P2)

As a user accessing the textbook website, I want a consistent visual theme with proper light/dark mode support so that I can read content comfortably with appropriate contrast and readability.

**Why this priority**: Visual consistency and readability are important for a positive learning experience.

**Independent Test**: Users can toggle between light/dark themes and see proper contrast and readable text regardless of the theme selected.

**Acceptance Scenarios**:

1. **Given** I am viewing the website in light mode, **When** I look at buttons and text, **Then** I see proper contrast with readable text and visible elements
2. **Given** I am viewing the website, **When** I toggle the theme, **Then** the background colors change appropriately with proper contrast maintained

---

### User Story 4 - Discover Value and Curriculum (Priority: P2)

As a potential reader of the textbook, I want to quickly understand the value proposition and curriculum structure so that I can decide if the content is relevant to my learning goals.

**Why this priority**: Helping users understand the value and structure of the content helps with engagement and learning outcomes.

**Independent Test**: Users can see clear value propositions and curriculum structure on the homepage that explains the benefits and topics covered.

**Acceptance Scenarios**:

1. **Given** I am on the homepage, **When** I view the value proposition section, **Then** I see clear benefits of reading the textbook and what topics are covered
2. **Given** I am on the homepage, **When** I view the AI maturity levels, **Then** I see a clear progression from basic to advanced concepts

---

### User Story 5 - Access Rich Technical Content (Priority: P1)

As a technical professional learning about Physical AI, I want to access rich, detailed technical content that explains complex concepts clearly so that I can implement and apply these concepts in my work.

**Why this priority**: This is the core educational value of the textbook - providing detailed technical explanations.

**Independent Test**: Users can read expanded content that includes technical concepts like Embodied Intelligence, ROS 2, NVIDIA Isaac Sim, and VLA models with clear explanations.

**Acceptance Scenarios**:

1. **Given** I am reading the ROS 2 introduction, **When** I read the content, **Then** I understand what Embodied Intelligence is and why ROS 2 is the standard middleware
2. **Given** I am reading the perception content, **When** I read about NVIDIA Isaac Sim, **Then** I understand how it addresses the Sim-to-Real Gap with synthetic data

---

### Edge Cases

- What happens when a user accesses the website with an older browser that doesn't support modern CSS features?
- How does the website handle missing image resources for the hero section?
- What happens when the documentation files are not available or have been moved?

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: System MUST provide updated navigation in the navbar with "Physical AI & Humanoid Robotics" as the title
- **FR-002**: System MUST display "Home" and "Start Reading" links on the left side of the navbar
- **FR-003**: System MUST display "Sign In", "Sign Up" (with primary button styling), and "GitHub" links on the right side of the navbar
- **FR-004**: System MUST remove the search bar from the navigation
- **FR-005**: System MUST display proper light theme background colors (#FFFFFF or #F5F6F7) when light theme is selected
- **FR-006**: System MUST ensure button text and borders are visible with dark blue (#0A192F) or black contrast in light theme
- **FR-007**: System MUST display the hero image from /build/img/Image For Hero Section.jpeg on the homepage
- **FR-008**: System MUST present a "Why Read This?" section with 3 cards explaining career/technical benefits
- **FR-009**: System MUST present a "Curriculum & Topics" section with 4 cards covering ROS 2, Digital Twin, Brain, and VLA modules
- **FR-010**: System MUST present an "AI Maturity Levels" section with 5 cards showing progression from Level 1 to Level 5
- **FR-011**: System MUST expand module1-ros2/01_introduction.md to include definitions of Embodied Intelligence and explanation of ROS 2 as standard middleware
- **FR-012**: System MUST expand module1-ros2/02_communication.md to deeply explain Nodes, Topics, and Services with DDS transport
- **FR-013**: System MUST expand module3-ai-robot-brain/01_perception.md to discuss the Sim-to-Real Gap and NVIDIA Isaac Sim synthetic data generation
- **FR-014**: System MUST expand module4-vla/01_llm_robotics_intro.md to explain Vision-Language-Action models and the human instruction to grounded action pipeline
- **FR-015**: System MUST ensure all expanded content is 200-300 words with bold technical terms and H2 headers

### Key Entities

- **Textbook Content**: Educational material organized in modules covering Physical AI & Humanoid Robotics topics
- **Navigation System**: User interface components that allow users to browse and access different parts of the textbook
- **Theme System**: Visual styling system that supports light and dark mode with proper contrast and readability
- **Homepage Sections**: Visual components (Hero, Value Proposition, Curriculum, Maturity Levels) that communicate the textbook's value

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: Users can navigate the textbook content using an updated navbar with clearly labeled menu items
- **SC-002**: The website displays properly in both light and dark themes with readable text and visible buttons
- **SC-003**: Users can access expanded textbook content that provides 200-300 word professional explanations with technical depth
- **SC-004**: Homepage clearly communicates the value proposition and curriculum structure through visual cards and sections
- **SC-005**: All specified content files (module1-ros2/01_introduction.md, module1-ros2/02_communication.md, module3-ai-robot-brain/01_perception.md, module4-vla/01_llm_robotics_intro.md) contain expanded, professional content with technical explanations
