# Data Model: Physical AI & Humanoid Robotics Textbook

**Feature**: Physical AI & Humanoid Robotics Textbook Polish & Content Expansion
**Date**: 2025-12-07
**Project**: Physical AI & Humanoid Robotics Textbook (Docusaurus v3)

## Overview

This data model describes the content and configuration structures for the Physical AI & Humanoid Robotics textbook built with Docusaurus v3. Since this is a static documentation site, the "data" primarily consists of content organization and component state structures.

## Content Structure

### Textbook Module
- **name**: string - Module name (e.g., "ROS2", "Digital Twin", "AI Robot Brain", "VLA Models")
- **description**: string - Brief description of the module content
- **pages**: TextbookPage[] - Array of pages within the module
- **prerequisites**: string[] - List of prerequisite knowledge or modules

### TextbookPage
- **id**: string - Unique identifier for the page
- **title**: string - Page title displayed in navigation and browser tab
- **content**: string - Markdown content of the page
- **authors**: string[] - List of authors/contributors
- **lastModified**: Date - Date of last content update
- **tags**: string[] - Content tags for categorization
- **difficulty**: "beginner" | "intermediate" | "advanced" - Content difficulty level

## Component State Structures

### Navigation State
- **currentTheme**: "light" | "dark" - Current UI theme
- **currentPage**: string - Currently active page path
- **sidebarCollapsed**: boolean - Whether sidebar is collapsed
- **mobileMenuOpen**: boolean - Whether mobile menu is open

### Homepage Value Proposition Data
- **whyReadThis**: ValueCard[] - Cards explaining why to read the textbook
- **curriculumTopics**: ValueCard[] - Cards describing curriculum and topics
- **aiMaturityLevels**: ValueCard[] - Cards showing AI maturity progression

### ValueCard
- **title**: string - Card title
- **description**: string - Card description
- **icon**: string - Optional icon identifier
- **link**: string - Optional link for more information

## Configuration Structure

### Docusaurus Configuration (docusaurus.config.ts)
- **title**: string - Site title
- **tagline**: string - Site tagline
- **url**: string - Site URL
- **baseUrl**: string - Base URL for deployment
- **favicon**: string - Path to favicon
- **organizationName**: string - GitHub organization name
- **projectName**: string - GitHub project name
- **presets**: any[] - Docusaurus presets configuration
- **themeConfig**: ThemeConfig - Theme-specific configuration

### Theme Configuration (themeConfig)
- **navbar**: NavbarConfig - Navigation bar configuration
- **footer**: FooterConfig - Footer configuration
- **prism**: PrismConfig - Code block styling configuration

## Content Metadata

### Document Frontmatter
- **title**: string - Document title
- **description**: string - Document description for SEO
- **keywords**: string[] - SEO keywords
- **authors**: string[] - Document authors
- **sidebar_label**: string - Label to show in sidebar
- **sidebar_position**: number - Position in sidebar ordering
- **draft**: boolean - Whether document is a draft

## Validation Rules

### Content Validation
- All content files must be valid Markdown
- All content must be between 200-300 words as specified in requirements
- All technical terms must be formatted in bold
- All documents must include appropriate H2 headers

### Navigation Validation
- Navbar title must be "Physical AI & Humanoid Robotics"
- Navbar items must follow the specified structure
- All navigation links must be valid
- Search bar must be removed

### Accessibility Validation
- All themes must maintain WCAG 2.1 AA contrast ratios
- All images must have appropriate alt text
- All interactive elements must be keyboard accessible