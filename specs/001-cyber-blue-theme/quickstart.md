# Quickstart Guide: Cyber-Blue Theme Implementation

**Branch**: `001-cyber-blue-theme` | **Date**: 2025-12-06 | **Plan**: [plan.md](plan.md)

## Quickstart Summary

This guide provides step-by-step instructions for implementing the cyber-blue aesthetic theme for the Physical AI & Humanoid Robotics textbook website using Docusaurus v3.

## Prerequisites

- Node.js (v18 or higher)
- npm or yarn package manager
- Docusaurus v3 installed
- Access to the physical-ai-textbook project directory
- Basic knowledge of CSS and React components

## Setup Steps

### 1. Clone and Navigate to Project
```bash
cd physical-ai-textbook
```

### 2. Install Required Dependencies
```bash
npm install
```

### 3. Verify Current Setup
```bash
npm run build
```

## Implementation Steps

### Step 1: Create Custom CSS File
Create the custom CSS file with the cyber-blue theme:
```bash
touch src/css/custom.css
```

Add the following content to `src/css/custom.css`:
```css
/* Cyber-blue theme variables */
:root {
  --cyber-bg-primary: #0A192F;
  --cyber-accent-primary: #64FFDA;
  --cyber-text-primary: #CCD6F6;
  --cyber-accent-secondary: #F0AD4E;
}

/* Apply cyber-blue theme to main content */
html[data-theme='dark'] {
  --ifm-background-color: var(--cyber-bg-primary);
  --ifm-color-primary: var(--cyber-accent-primary);
  --ifm-color-primary-contrast-foreground: var(--cyber-text-primary);
  --ifm-font-color-base: var(--cyber-text-primary);
}

/* Custom styling for homepage hero */
.hero--primary {
  background-color: var(--cyber-bg-primary);
  color: var(--cyber-text-primary);
}

/* Custom button styling */
.button--primary {
  background-color: var(--cyber-accent-primary);
  border-color: var(--cyber-accent-primary);
  color: var(--cyber-bg-primary);
}

.button--secondary {
  border-color: var(--cyber-accent-primary);
  color: var(--cyber-accent-primary);
}

/* Pill styling for homepage */
.pill {
  background-color: rgba(100, 255, 218, 0.1);
  border: 1px solid var(--cyber-accent-primary);
  color: var(--cyber-accent-primary);
  padding: 4px 12px;
  border-radius: 20px;
  display: inline-block;
  margin: 4px;
}
```

### Step 2: Configure Docusaurus for Cyber-Blue Theme
Update `docusaurus.config.ts` to include the custom CSS and set dark mode as default:

```typescript
module.exports = {
  // ... other config
  stylesheets: [
    '/css/custom.css',
  ],
  themeConfig: {
    // ... other theme config
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,
      respectPrefersColorScheme: false,
    },
    prism: {
      theme: require('prism-react-renderer/themes/dracula'),
    },
  },
};
```

### Step 3: Create Homepage Hero Component
Create a new directory and file:
```bash
mkdir -p src/components
touch src/components/HomepageHero.tsx
```

Add the following content to `src/components/HomepageHero.tsx`:
```tsx
import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './HomepageHero.module.css';

const HomepageHero = () => {
  const {siteConfig} = useDocusaurusContext();

  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/module1-ros2/01_introduction">
            Get Started
          </Link>
        </div>

        {/* Styled pills */}
        <div className={styles.pillsContainer}>
          <span className={styles.pill}>Module 1: ROS 2 Core</span>
          <span className={styles.pill}>Module 3: VSLAM & Isaac Sim</span>
          <span className={styles.pill}>Module 4: VLA (LLMs)</span>
        </div>

        {/* Placeholder image with comment */}
        {/* TODO: Add relevant hero image here */}
        <div className={styles.placeholderImage}>
          {/* Placeholder for hero image */}
        </div>
      </div>
    </header>
  );
};

export default HomepageHero;
```

### Step 4: Create Component Styles
Create `src/components/HomepageHero.module.css`:
```bash
touch src/components/HomepageHero.module.css
```

Add the following content:
```css
.heroBanner {
  padding: 4rem 0;
  text-align: center;
  position: relative;
  overflow: hidden;
}

@media screen and (max-width: 996px) {
  .heroBanner {
    padding: 2rem;
  }
}

.buttons {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin-top: 2rem;
}

.pillsContainer {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.5rem;
  margin: 2rem 0;
}

.pill {
  background-color: rgba(100, 255, 218, 0.1);
  border: 1px solid #64FFDA;
  color: #64FFDA;
  padding: 4px 12px;
  border-radius: 20px;
  display: inline-block;
  margin: 4px;
}

.placeholderImage {
  margin-top: 2rem;
  height: 200px;
  width: 100%;
  background-color: #f0f0f0;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #666;
}
```

### Step 5: Update Navbar with Cyber-Blue Styling
Update the navbar configuration in `docusaurus.config.ts`:

```typescript
module.exports = {
  // ... other config
  themeConfig: {
    // ... other theme config
    navbar: {
      title: siteConfig.title,
      logo: {
        alt: 'Physical AI & Humanoid Robotics Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'textbookSidebar',
          position: 'left',
          label: 'Docs',
        },
        {
          href: 'https://github.com/your-org/physical-ai-textbook',
          label: 'GitHub',
          position: 'right',
        },
        // Add search placeholder
        {
          type: 'search',
          position: 'right',
          label: 'Search',
        },
        // Add auth placeholders
        {
          type: 'html',
          position: 'right',
          value: '<a class="navbar__link" href="#" style="color: #CCD6F6;">Sign In</a>',
        },
        {
          type: 'html',
          position: 'right',
          value: '<button class="button button--primary" style="background-color: #64FFDA; color: #0A192F; border: none; padding: 4px 16px; border-radius: 4px;">Sign Up</button>',
        },
      ],
    },
  },
};
```

### Step 6: Update Homepage to Use Custom Hero
Update `src/pages/index.tsx` to use the new HomepageHero component:

```tsx
import React from 'react';
import Layout from '@theme/Layout';
import HomepageHero from '../components/HomepageHero';

export default function Home(): JSX.Element {
  return (
    <Layout
      title={`Physical AI & Humanoid Robotics`}
      description="The Embodied Intelligence Textbook: From ROS 2 to VLA">
      <HomepageHero />
      <main>
        {/* Additional content can go here */}
      </main>
    </Layout>
  );
}
```

## Testing Steps

### 1. Start Development Server
```bash
npm start
```

### 2. Verify Theme Implementation
- Check that dark mode is the default theme
- Verify all pages use the cyber-blue color scheme
- Confirm code blocks use the Dracula theme
- Test that the homepage displays the custom hero section
- Verify navbar has high-contrast styling and placeholder elements

### 3. Accessibility Testing
- Verify color contrast ratios meet WCAG 2.1 AA standards
- Test navigation with keyboard controls
- Check responsive behavior on different screen sizes

## Deployment Steps

### 1. Build Production Version
```bash
npm run build
```

### 2. Test Production Build
```bash
npm run serve
```

### 3. Deploy to GitHub Pages
```bash
npm run deploy
```

## Troubleshooting

### Common Issues

**Dark mode not default**: Ensure `colorMode.defaultMode` is set to 'dark' in docusaurus.config.ts

**Colors not applying**: Check that custom.css is properly linked in docusaurus.config.ts

**Component not rendering**: Verify that the HomepageHero component is properly exported and imported

### Quick Fixes

**CSS not loading**: Clear browser cache and restart development server

**Component errors**: Check that all React imports are properly configured

**Build failures**: Verify all dependencies are installed with `npm install`

## Next Steps

1. Complete the implementation of all tasks in [tasks.md](tasks.md)
2. Perform comprehensive testing across all pages
3. Optimize performance and accessibility
4. Document the implementation for future maintainers