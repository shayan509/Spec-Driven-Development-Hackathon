# Physical AI & Humanoid Robotics Textbook - Cyber-Blue Theme

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator for the "Physical AI & Humanoid Robotics" textbook. The site features a professional cyber-blue aesthetic theme with dark mode as default and Dracula syntax highlighting.

## Installation

```bash
npm install
```

## Local Development

```bash
npm start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

## Build

```bash
npm run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Deployment

Using SSH:

```bash
USE_SSH=true npm run deploy
```

Not using SSH:

```bash
GIT_USER=<Your GitHub username> npm run deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.

## Textbook Structure

The textbook is organized into four main modules:
- **Module 1**: ROS2 (Robot Operating System 2)
- **Module 2**: Digital Twin
- **Module 3**: AI Robot Brain
- **Module 4**: Vision-Language-Action (VLA) Models

Each module contains multiple chapters with theoretical concepts, practical examples, and hands-on exercises.

## Cyber-Blue Theme Features

The website implements a professional cyber-blue aesthetic with the following features:

- **Color Palette**:
  - Background: #0A192F (deep midnight blue)
  - Primary Accent: #64FFDA (cyan)
  - Text: #CCD6F6 (light gray)
  - Secondary Accent: #F0AD4E (orange)

- **Dark Mode**: Set as the default theme for improved readability
- **Dracula Syntax Highlighting**: Applied to all code blocks for enhanced visual appeal
- **Custom Homepage Hero**: Features title, tagline, and styled module pills
- **High-Contrast Navigation**: Includes placeholder elements for search and authentication
- **WCAG 2.1 AA Compliance**: Ensures accessibility for users with visual impairments
