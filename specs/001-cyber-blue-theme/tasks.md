---
description: "Task list for Cyber-Blue Theme Overhaul"
---

# Tasks: Cyber-Blue Theme Overhaul

**Input**: Design documents from `/specs/001-cyber-blue-theme/`
**Prerequisites**: plan.md (required), spec.md (required for user stories), research.md, data-model.md, contracts/

**Tests**: No explicit test requirements in feature specification - tests are not included.

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)
- Include exact file paths in descriptions

## Path Conventions

- **Docusaurus project**: `src/`, `docusaurus.config.ts`, `package.json` at project root
- Paths shown below follow the Docusaurus project structure from plan.md

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Project initialization and basic structure

- [X] T001 [P] Create custom CSS file for cyber-blue theme at src/css/custom.css
- [X] T002 [P] Create HomepageHero component directory at src/components/
- [X] T003 [P] Verify existing Docusaurus project structure is accessible

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core infrastructure that MUST be complete before ANY user story can be implemented

**⚠️ CRITICAL**: No user story work can begin until this phase is complete

- [X] T004 Configure docusaurus.config.ts to use custom CSS file with cyber-blue theme
- [X] T005 [P] Update docusaurus.config.ts to ensure dark mode is default
- [X] T006 [P] Configure Dracula theme for code blocks in docusaurus.config.ts
- [X] T007 Set up color palette constants in custom.css (#0A192F, #64FFDA, #CCD6F6, #F0AD4E)

**Checkpoint**: Foundation ready - user story implementation can now begin in parallel

---

## Phase 3: User Story 1 - Experience Professional High-Tech Aesthetic (Priority: P1) 🎯 MVP

**Goal**: Apply the cyber-blue aesthetic theme with proper color palette, dark mode as default, and Dracula theme for code blocks to create a professional high-tech visual experience.

**Independent Test**: Can be fully tested by visiting the website and verifying that all pages display with the new cyber-blue color scheme, dark mode is default, and code blocks use the Dracula theme.

### Implementation for User Story 1

- [X] T008 [P] [US1] Implement background color #0A192F in custom.css
- [X] T009 [P] [US1] Implement primary accent color #64FFDA in custom.css
- [X] T010 [P] [US1] Implement text color #CCD6F6 in custom.css
- [X] T011 [P] [US1] Implement secondary accent color #F0AD4E in custom.css
- [X] T012 [US1] Apply cyber-blue color scheme to main content areas
- [X] T013 [US1] Verify dark mode is default across all pages
- [X] T014 [US1] Test Dracula theme on code blocks throughout the site
- [X] T015 [US1] Validate WCAG 2.1 AA compliance for color contrast ratios

**Checkpoint**: At this point, User Story 1 should be fully functional and testable independently

---

## Phase 4: User Story 2 - Navigate with Enhanced Visual Interface (Priority: P2)

**Goal**: Implement a modern, high-contrast navigation bar with future-ready elements including placeholder items for Search, Sign In, and Sign Up functionality.

**Independent Test**: Can be tested by verifying that the navbar displays with high contrast elements and placeholder items for search and authentication.

### Implementation for User Story 2

- [X] T016 [P] [US2] Update navbar styling with high-contrast text/icons (#CCD6F6)
- [X] T017 [P] [US2] Implement cyber-blue accent (#64FFDA) on primary buttons in navbar
- [X] T018 [US2] Add Search placeholder item to navbar
- [X] T019 [US2] Add Sign In placeholder item to navbar
- [X] T020 [US2] Add Sign Up placeholder item with primary button styling to navbar
- [X] T021 [US2] Test navbar appearance across different screen sizes
- [X] T022 [US2] Verify navbar maintains accessibility standards

**Checkpoint**: At this point, User Stories 1 AND 2 should both work independently

---

## Phase 5: User Story 3 - Engage with Modern Homepage Hero (Priority: P3)

**Goal**: Create a modern, high-impact hero section that introduces the content with the new visual style, including the specified title, tagline, and styled pills.

**Independent Test**: Can be tested by visiting the homepage and verifying the custom hero section with title, tagline, and styled elements.

### Implementation for User Story 3

- [X] T023 [P] [US3] Create HomepageHero.tsx component in src/components/
- [X] T024 [P] [US3] Implement title "Physical AI & Humanoid Robotics" in HomepageHero
- [X] T025 [P] [US3] Implement tagline "The Embodied Intelligence Textbook From ROS 2 to VLA" in HomepageHero
- [X] T026 [US3] Create three styled pills with: "Module 1: ROS 2 Core", "Module 3: VSLAM & Isaac Sim", "Module 4: VLA (LLMs)"
- [X] T027 [US3] Apply cyber-blue accent styling to the pills
- [X] T028 [US3] Add placeholder image to HomepageHero with appropriate comment
- [X] T029 [US3] Replace default homepage with custom HomepageHero component
- [X] T030 [US3] Test homepage appearance and responsiveness

**Checkpoint**: All user stories should now be independently functional

---

## Phase 6: Polish & Cross-Cutting Concerns

**Purpose**: Improvements that affect multiple user stories

- [X] T031 [P] Update index.tsx to use the new HomepageHero component
- [X] T032 [P] Test overall site appearance and consistency across all pages
- [X] T033 Add placeholder image comment in HomepageHero component
- [X] T034 [P] Update README.md with information about the new cyber-blue theme
- [X] T035 [P] Run accessibility audit to ensure WCAG 2.1 AA compliance
- [X] T036 Run full site build and verify all styling works correctly
- [X] T037 Test site navigation and functionality across different browsers
- [X] T038 Document the cyber-blue theme implementation for future maintainers

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies - can start immediately
- **Foundational (Phase 2)**: Depends on Setup completion - BLOCKS all user stories
- **User Stories (Phase 3+)**: All depend on Foundational phase completion
  - User stories can then proceed in parallel (if staffed)
  - Or sequentially in priority order (P1 → P2 → P3)
- **Polish (Final Phase)**: Depends on all desired user stories being complete

### User Story Dependencies

- **User Story 1 (P1)**: Can start after Foundational (Phase 2) - No dependencies on other stories
- **User Story 2 (P2)**: Can start after Foundational (Phase 2) - May integrate with US1 but should be independently testable
- **User Story 3 (P3)**: Can start after Foundational (Phase 2) - May integrate with US1/US2 but should be independently testable

### Within Each User Story

- Core implementation before integration
- Story complete before moving to next priority

### Parallel Opportunities

- All Setup tasks marked [P] can run in parallel
- All Foundational tasks marked [P] can run in parallel (within Phase 2)
- Once Foundational phase completes, all user stories can start in parallel (if team capacity allows)
- Different user stories can be worked on in parallel by different team members

---

## Parallel Example: User Story 1

```bash
# Launch all color implementation tasks together:
Task: "Implement background color #0A192F in custom.css"
Task: "Implement primary accent color #64FFDA in custom.css"
Task: "Implement text color #CCD6F6 in custom.css"
Task: "Implement secondary accent color #F0AD4E in custom.css"
```

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Phase 1: Setup
2. Complete Phase 2: Foundational (CRITICAL - blocks all stories)
3. Complete Phase 3: User Story 1
4. **STOP and VALIDATE**: Test User Story 1 independently
5. Deploy/demo if ready

### Incremental Delivery

1. Complete Setup + Foundational → Foundation ready
2. Add User Story 1 → Test independently → Deploy/Demo (MVP!)
3. Add User Story 2 → Test independently → Deploy/Demo
4. Add User Story 3 → Test independently → Deploy/Demo
5. Each story adds value without breaking previous stories

### Parallel Team Strategy

With multiple developers:

1. Team completes Setup + Foundational together
2. Once Foundational is done:
   - Developer A: User Story 1
   - Developer B: User Story 2
   - Developer C: User Story 3
3. Stories complete and integrate independently

---

## Notes

- [P] tasks = different files, no dependencies
- [Story] label maps task to specific user story for traceability
- Each user story should be independently completable and testable
- Commit after each task or logical group
- Stop at any checkpoint to validate story independently
- Avoid: vague tasks, same file conflicts, cross-story dependencies that break independence