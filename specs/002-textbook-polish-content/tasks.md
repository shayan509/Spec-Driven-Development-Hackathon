# Tasks: Physical AI & Humanoid Robotics Textbook Polish & Content Expansion

**Feature**: Physical AI & Humanoid Robotics Textbook Polish & Content Expansion
**Branch**: `002-textbook-polish-content`
**Date**: 2025-12-07
**Input**: Feature specification and implementation plan from `/specs/002-textbook-polish-content/`

## Implementation Strategy

This implementation follows an incremental delivery approach where each user story represents a complete, independently testable increment. The strategy prioritizes the highest-priority user stories first (P1), ensuring core functionality is delivered early. Each phase builds upon the previous while maintaining a working system.

**MVP Scope**: User Story 1 (Access Comprehensive Textbook Content) - This provides the core value proposition of expanded educational content.

## Dependencies

User stories are largely independent but share foundational components:
- US2 (Navigation) requires foundational configuration setup
- US3 (Theming) requires CSS framework
- US4 (Homepage) requires component framework
- US5 (Rich Content) requires content structure

## Parallel Execution Examples

Per User Story:
- **US1**: Content expansion tasks can run in parallel (different files)
- **US2**: Navbar configuration can run in parallel with other setup tasks
- **US3**: CSS updates can run in parallel with component updates
- **US4**: Component development can run in parallel with image preparation

---

## Phase 1: Setup

Setup tasks for project initialization and environment configuration.

- [x] T001 Verify Docusaurus v3 project exists in physical-ai-textbook directory
- [x] T002 Verify Node.js 18+ and npm are available in environment
- [x] T003 Install Docusaurus CLI tools if not already available
- [x] T004 Verify physical-ai-textbook/docusaurus.config.ts exists
- [x] T005 Verify src/css/custom.css exists
- [x] T006 Verify src/components/ directory exists
- [x] T007 Verify docs/ directory and module subdirectories exist
- [x] T008 Verify static/img/ directory exists
- [x] T009 Create placeholder image at static/img/Image For Hero Section.jpeg if needed

## Phase 2: Foundational

Foundational tasks that block all user stories.

- [x] T010 [P] Create/verify textbook sidebar configuration in docs/sidebars.ts
- [x] T011 [P] Set up basic TypeScript configuration for component development
- [x] T012 [P] Configure Docusaurus theme settings for accessibility compliance
- [x] T013 [P] Verify GitHub Pages deployment configuration in docusaurus.config.ts

## Phase 3: [US1] Access Comprehensive Textbook Content

**Goal**: Users can access expanded textbook content that provides 200-300 word professional explanations with technical depth.

**Independent Test**: Users can navigate to the textbook, read expanded content sections, and access detailed technical explanations that meet their learning needs.

**Acceptance Scenarios**:
1. Given I am on the homepage, When I click "Start Reading", Then I am directed to the comprehensive textbook content with detailed, professional explanations
2. Given I am viewing any textbook page, When I read the content, Then I find 200-300 word professional explanations with technical depth

- [x] T014 [P] [US1] Expand module1-ros2/01_introduction.md with Embodied Intelligence definition, ROS 2 as middleware explanation, and Graph Architecture details (200-300 words with bold terms and H2 headers)
- [x] T015 [P] [US1] Expand module1-ros2/02_communication.md with detailed Nodes, Topics, Services explanations and DDS transport information (200-300 words with bold terms and H2 headers)
- [x] T016 [P] [US1] Expand module3-ai-robot-brain/01_perception.md with Sim-to-Real Gap discussion and NVIDIA Isaac Sim synthetic data explanation (200-300 words with bold terms and H2 headers)
- [x] T017 [P] [US1] Expand module4-vla/01_llm_robotics_intro.md with VLA models explanation and human instruction to grounded action pipeline (200-300 words with bold terms and H2 headers)
- [x] T018 [US1] Verify all content files meet 200-300 word requirement with proper formatting

## Phase 4: [US2] Navigate and Explore the Textbook

**Goal**: Users can navigate between different sections of the textbook using a clear navbar with intuitive menu items.

**Independent Test**: Users can navigate between different sections of the textbook using a clear navbar with intuitive menu items.

**Acceptance Scenarios**:
1. Given I am on any page of the website, When I view the navigation bar, Then I see a clear title "Physical AI & Humanoid Robotics" and intuitive menu items
2. Given I am viewing the navbar, When I click on "Start Reading", Then I am taken to the textbook content with the sidebar navigation

- [x] T019 [US2] Update docusaurus.config.ts to remove default Docusaurus logo from navbar configuration
- [x] T020 [US2] Update docusaurus.config.ts to set navbar title to "Physical AI & Humanoid Robotics"
- [x] T021 [US2] Update docusaurus.config.ts to configure navbar.items with Home link on left side
- [x] T022 [US2] Update docusaurus.config.ts to configure navbar.items with "Start Reading" docSidebar link on left side
- [x] T023 [US2] Update docusaurus.config.ts to configure navbar.items with "Sign In" link on right side
- [x] T024 [US2] Update docusaurus.config.ts to configure navbar.items with "Sign Up" link on right side including button--primary class
- [x] T025 [US2] Update docusaurus.config.ts to configure navbar.items with GitHub link on right side
- [x] T026 [US2] Update docusaurus.config.ts to remove search bar from navbar configuration
- [x] T027 [US2] Verify navbar displays correctly with all required items in proper positions

## Phase 5: [US3] Experience Consistent Theme and Visual Design

**Goal**: Users can toggle between light/dark themes and see proper contrast and readable text regardless of the theme selected.

**Independent Test**: Users can toggle between light/dark themes and see proper contrast and readable text regardless of the theme selected.

**Acceptance Scenarios**:
1. Given I am viewing the website in light mode, When I look at buttons and text, Then I see proper contrast with readable text and visible elements
2. Given I am viewing the website, When I toggle the theme, Then the background colors change appropriately with proper contrast maintained

- [x] T028 [US3] Add CSS rule for html[data-theme='light'] body background-color to #FFFFFF in src/css/custom.css
- [x] T029 [US3] Add CSS rule for html[data-theme='light'] main background-color to #FFFFFF in src/css/custom.css
- [x] T030 [US3] Add CSS rule for html[data-theme='light'] .navbar-signup-btn text-color to #0A192F in src/css/custom.css
- [x] T031 [US3] Add CSS rule for html[data-theme='light'] .navbar-signup-btn border-color to #0A192F in src/css/custom.css
- [x] T032 [US3] Add CSS rule for html[data-theme='light'] general buttons text-color to #0A192F in src/css/custom.css
- [x] T033 [US3] Add CSS rule for html[data-theme='light'] general buttons border-color to #0A192F in src/css/custom.css
- [x] T034 [US3] Verify theme switching works properly with good contrast in both modes

## Phase 6: [US4] Discover Value and Curriculum

**Goal**: Users can see clear value propositions and curriculum structure on the homepage that explains the benefits and topics covered.

**Independent Test**: Users can see clear value propositions and curriculum structure on the homepage that explains the benefits and topics covered.

**Acceptance Scenarios**:
1. Given I am on the homepage, When I view the value proposition section, Then I see clear benefits of reading the textbook and what topics are covered
2. Given I am on the homepage, When I view the AI maturity levels, Then I see a clear progression from basic to advanced concepts

- [x] T035 [US4] Update HomepageHero.tsx to use img tag pointing to /build/img/Image For Hero Section.jpeg
- [x] T036 [US4] Update HomepageHero.tsx to center the hero image and style as visual focal point
- [x] T037 [US4] Create or update HomepageValueProp.tsx with "Why Read This?" section containing 3 cards
- [x] T038 [US4] Create or update HomepageValueProp.tsx with "Curriculum & Topics" section containing 4 cards for each module
- [x] T039 [US4] Create or update HomepageValueProp.tsx with "AI Maturity Levels" section containing 5 cards for levels 1-5
- [x] T040 [US4] Update index.tsx to render HomepageHero first, then HomepageValueProp in proper sequence
- [x] T041 [US4] Verify homepage displays all value proposition sections with proper styling

## Phase 7: [US5] Access Rich Technical Content

**Goal**: Users can read expanded content that includes technical concepts like Embodied Intelligence, ROS 2, NVIDIA Isaac Sim, and VLA models with clear explanations.

**Independent Test**: Users can read expanded content that includes technical concepts like Embodied Intelligence, ROS 2, NVIDIA Isaac Sim, and VLA models with clear explanations.

**Acceptance Scenarios**:
1. Given I am reading the ROS 2 introduction, When I read the content, Then I understand what Embodied Intelligence is and why ROS 2 is the standard middleware
2. Given I am reading the perception content, When I read about NVIDIA Isaac Sim, Then I understand how it addresses the Sim-to-Real Gap with synthetic data

- [x] T042 [US5] Review and validate module1-ros2/01_introduction.md for technical accuracy of Embodied Intelligence and ROS 2 explanations
- [x] T043 [US5] Review and validate module1-ros2/02_communication.md for technical accuracy of Nodes, Topics, Services, and DDS explanations
- [x] T044 [US5] Review and validate module3-ai-robot-brain/01_perception.md for technical accuracy of Sim-to-Real Gap and Isaac Sim explanations
- [x] T045 [US5] Review and validate module4-vla/01_llm_robotics_intro.md for technical accuracy of VLA models and pipeline explanations
- [x] T046 [US5] Ensure all technical terms are properly bolded and H2 headers are used appropriately across all content files

## Phase 8: Polish & Cross-Cutting Concerns

Final tasks to ensure quality, consistency, and proper integration.

- [x] T047 Verify all navigation links work correctly across all pages
- [x] T048 Test theme switching functionality on all pages and components
- [x] T049 Verify all content meets WCAG 2.1 AA accessibility standards
- [x] T050 Test site functionality on different browsers and screen sizes
- [x] T051 Run Docusaurus build command to ensure no build errors
- [x] T052 Verify GitHub Pages deployment configuration works properly
- [x] T053 Update any necessary documentation or README files
- [x] T054 Perform final review of all user story acceptance criteria