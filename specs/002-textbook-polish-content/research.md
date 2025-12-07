# Research: Physical AI & Humanoid Robotics Textbook Polish & Content Expansion

**Feature**: Physical AI & Humanoid Robotics Textbook Polish & Content Expansion
**Date**: 2025-12-07
**Research Phase**: Phase 0 of implementation planning

## Executive Summary

This research document addresses implementation approaches for the Physical AI & Humanoid Robotics textbook polish and content expansion. It covers navigation overhaul, theme fixes, homepage content restructuring, and educational content expansion across multiple modules.

## Decision: Navigation Overhaul Implementation

### Rationale:
The navigation overhaul requires updating the `docusaurus.config.ts` file to customize the navbar with specific items and structure as defined in the feature specification. This includes removing the default Docusaurus logo, setting the title to "Physical AI & Humanoid Robotics", and configuring the navbar items as specified.

### Implementation Approach:
- Modify the `navbar` configuration in `docusaurus.config.ts`
- Remove the `logo` property or set it to an empty configuration
- Set `navbar.title` to "Physical AI & Humanoid Robotics"
- Configure `navbar.items` with the exact structure specified in the feature requirements
- Remove any search bar configuration

### Alternatives Considered:
- Using Docusaurus default navigation: Would not meet the specific branding and structure requirements
- Custom navigation component: Would add unnecessary complexity when the standard navbar configuration meets requirements

## Decision: Theme & Visual Fixes Implementation

### Rationale:
The theme fixes require targeting light theme specifically to ensure proper background colors and button contrast. This is critical for accessibility and user experience.

### Implementation Approach:
- Update `src/css/custom.css` with specific selectors for `html[data-theme='light']`
- Set background colors to #FFFFFF or #F5F6F7 for body and main containers
- Create specific CSS rules for `.navbar-signup-btn` to ensure dark blue (#0A192F) or black contrast in light mode
- Maintain existing dark theme functionality

### Alternatives Considered:
- Inline styles: Would not follow Docusaurus best practices
- JavaScript-based theming: Would add unnecessary complexity when CSS variables and theme selectors are sufficient

## Decision: Homepage Content & Structure Implementation

### Rationale:
The homepage requires significant restructuring with three distinct content sections and updated hero image. This will improve the user experience and clearly communicate the value proposition.

### Implementation Approach:
- Update `src/components/HomepageHero.tsx` to use the specified image path `/build/img/Image For Hero Section.jpeg`
- Create or update `src/components/HomepageValueProp.tsx` with three distinct sections:
  1. "Why Read This?" with 3 cards
  2. "Curriculum & Topics" with 4 cards
  3. "AI Maturity Levels" with 5 cards
- Ensure proper integration in `src/pages/index.tsx` with the correct order (HomepageHero first, then HomepageValueProp)

### Alternatives Considered:
- Using Docusaurus default homepage: Would not meet the specific content requirements
- Single component for all sections: Would make the component too complex and harder to maintain

## Decision: Textbook Content Expansion Implementation

### Rationale:
The content expansion requires significantly increasing the length and depth of existing documentation files to provide comprehensive educational content as specified in the requirements.

### Implementation Approach:
- Expand `module1-ros2/01_introduction.md` to 200-300 words with definitions of Embodied Intelligence and explanation of ROS 2 as middleware
- Expand `module1-ros2/02_communication.md` to 200-300 words with detailed explanations of Nodes, Topics, Services, and DDS transport
- Expand `module3-ai-robot-brain/01_perception.md` to 200-300 words discussing the Sim-to-Real Gap and NVIDIA Isaac Sim
- Expand `module4-vla/01_llm_robotics_intro.md` to 200-300 words explaining VLA models and the human instruction to grounded action pipeline
- Use bold formatting for technical terms and H2 headers as specified

### Alternatives Considered:
- Keeping existing brief content: Would not meet the educational depth requirements
- Creating new files instead of expanding existing ones: Would break the existing content structure

## Technology Research: Docusaurus v3 Best Practices

### Configuration Management
- Docusaurus v3 uses TypeScript configuration files (docusaurus.config.ts)
- Navbar configuration supports position-based item placement (left/right)
- Sidebar configuration uses sidebarId to link to documentation

### Theming
- Docusaurus uses CSS variables for theming
- Theme switching is handled via data-theme attribute on html element
- Custom CSS should be placed in src/css/custom.css

### Static Assets
- Images should be placed in the static/ directory
- Static assets are served from the root path at build time

### Component Development
- Docusaurus supports React components in the src/components/ directory
- Components can be imported and used in pages
- TypeScript is recommended for component development

## Accessibility Considerations

### WCAG 2.1 AA Compliance
- Ensure sufficient color contrast (minimum 4.5:1 for normal text)
- Use semantic HTML elements
- Provide alternative text for images
- Ensure proper heading hierarchy

## Implementation Risks and Mitigation

### Risk: Missing Image Resource
- **Impact**: Hero section image fails to load
- **Mitigation**: Verify image exists at `/build/img/Image For Hero Section.jpeg` before deployment

### Risk: Theme Inconsistencies
- **Impact**: Poor readability in light/dark modes
- **Mitigation**: Test thoroughly in both themes and validate contrast ratios

### Risk: Navigation Breakage
- **Impact**: Users unable to navigate the site properly
- **Mitigation**: Test all navigation links after implementation

## Dependencies and Tools

### Required Dependencies
- Docusaurus v3 (classic preset)
- React 18.x
- Node.js 18+ for development and build

### Development Tools
- TypeScript compiler
- Docusaurus CLI tools
- Markdown editor for content creation