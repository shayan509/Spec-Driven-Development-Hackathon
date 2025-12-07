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
            to="/docs/module1-ros2/introduction">
            Start Reading
          </Link>
        </div>

        {/* Styled pills */}
        <div className={styles.pillsContainer}>
          <span className={styles.pill}>Module 1: ROS 2 Core</span>
          <span className={styles.pill}>Module 2: DIGITAL TWIN</span>
          <span className={styles.pill}>Module 3: VSLAM & Isaac Sim</span>
          <span className={styles.pill}>Module 4: VLA (LLMs)</span>
        </div>

        {/* Hero image */}
        <div className={styles.heroImageContainer}>
          <img
            src="/build/img/Image For Hero Section.jpeg"
            alt="Physical AI & Humanoid Robotics Hero"
            className={styles.heroImage}
          />
        </div>
      </div>
    </header>
  );
};

export default HomepageHero;