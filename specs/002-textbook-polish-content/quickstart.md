# Quickstart Guide: Physical AI & Humanoid Robotics Textbook

**Feature**: Physical AI & Humanoid Robotics Textbook Polish & Content Expansion
**Date**: 2025-12-07

## Prerequisites

- Node.js 18+ installed
- npm or yarn package manager
- Git for version control
- Text editor with Markdown support

## Setup Instructions

### 1. Clone the Repository
```bash
git clone [repository-url]
cd [repository-name]
```

### 2. Install Dependencies
```bash
cd physical-ai-textbook
npm install
```

### 3. Start Development Server
```bash
npm run start
```
This will start the Docusaurus development server at `http://localhost:3000`

## Key Configuration Files

### Docusaurus Configuration
- **File**: `docusaurus.config.ts`
- **Purpose**: Main site configuration including navigation, metadata, and theme settings
- **Key Sections**:
  - `navbar` - Navigation bar configuration
  - `presets` - Docusaurus preset configuration
  - `themeConfig` - Theme-specific settings

### Custom Styling
- **File**: `src/css/custom.css`
- **Purpose**: Custom CSS overrides and theme fixes
- **Key Sections**:
  - Light theme background colors
  - Button contrast fixes
  - Custom component styling

## Content Structure

### Documentation Organization
```
docs/
├── module1-ros2/           # ROS2 module content
│   ├── 01_introduction.md
│   └── 02_communication.md
├── module3-ai-robot-brain/ # AI Robot Brain module
│   └── 01_perception.md
└── module4-vla/            # VLA Models module
    └── 01_llm_robotics_intro.md
```

### Component Structure
```
src/
├── components/             # Custom React components
│   ├── HomepageHero.tsx    # Hero section component
│   └── HomepageValueProp.tsx # Value proposition component
└── css/
    └── custom.css          # Custom styling
```

## Implementation Tasks

### 1. Navigation Overhaul
1. Edit `docusaurus.config.ts`
2. Update navbar configuration with required items
3. Set title to "Physical AI & Humanoid Robotics"
4. Remove default logo
5. Remove search bar

### 2. Theme Fixes
1. Edit `src/css/custom.css`
2. Add light theme background color rules
3. Add button contrast fixes
4. Test in both light and dark modes

### 3. Homepage Updates
1. Update `src/components/HomepageHero.tsx` with new image
2. Create/update `src/components/HomepageValueProp.tsx` with required sections
3. Ensure proper integration in `src/pages/index.tsx`

### 4. Content Expansion
1. Expand `docs/module1-ros2/01_introduction.md` to 200-300 words
2. Expand `docs/module1-ros2/02_communication.md` to 200-300 words
3. Expand `docs/module3-ai-robot-brain/01_perception.md` to 200-300 words
4. Expand `docs/module4-vla/01_llm_robotics_intro.md` to 200-300 words

## Building and Deployment

### Local Build
```bash
npm run build
```
This creates a static build in the `build/` directory.

### Serve Build Locally
```bash
npm run serve
```
Serves the build locally for testing.

### GitHub Pages Deployment
The site is configured for GitHub Pages deployment. Push changes to the main branch to trigger deployment.

## Troubleshooting

### Common Issues

1. **Missing Hero Image**: Ensure `/static/img/Image For Hero Section.jpeg` exists
2. **Theme Not Applying**: Check CSS selectors target `html[data-theme='light']` correctly
3. **Navigation Not Working**: Verify all navbar links are valid paths
4. **Build Errors**: Check TypeScript syntax in config files

### Development Tips

- Use `npm run start` for live reloading during development
- Test both light and dark themes during development
- Verify all content meets the 200-300 word requirement
- Check accessibility with browser tools