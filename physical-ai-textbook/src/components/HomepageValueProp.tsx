import React from 'react';
import clsx from 'clsx';
import styles from './HomepageValueProp.module.css';

type CardItem = {
  title: string;
  description: JSX.Element;
};

const WhyReadThisCards: CardItem[] = [
  {
    title: 'Cutting-Edge Knowledge',
    description: <>Learn the latest techniques in robotics, AI, and embodied intelligence that are shaping the future of automation.</>,
  },
  {
    title: 'Industry-Ready Skills',
    description: <>Gain practical expertise with tools like ROS 2, NVIDIA Isaac Sim, and Vision-Language-Action models used in real robotics companies.</>,
  },
  {
    title: 'Career Advancement',
    description: <>Position yourself at the forefront of the robotics revolution with skills that are in high demand across multiple industries.</>,
  },
];

const CurriculumCards: CardItem[] = [
  {
    title: 'Module 1: ROS 2',
    description: <>Deep dive into Robot Operating System 2, covering Nodes, Topics, Services, and DDS transport for distributed robotic systems.</>,
  },
  {
    title: 'Module 2: Digital Twin',
    description: <>Explore simulation environments and digital twin technologies for testing and validating robotic systems in virtual environments.</>,
  },
  {
    title: 'Module 3: AI Robot Brain',
    description: <>Understand perception systems, the Sim-to-Real Gap, and how NVIDIA Isaac Sim generates synthetic data for training.</>,
  },
  {
    title: 'Module 4: VLA Models',
    description: <>Master Vision-Language-Action models that enable robots to understand human instructions and execute complex tasks.</>,
  },
];

const MaturityCards: CardItem[] = [
  {
    title: 'Level 1: Automation',
    description: <>Basic robotic systems that perform repetitive tasks with minimal autonomy.</>,
  },
  {
    title: 'Level 2: Assisted Intelligence',
    description: <>Robots that can operate with human supervision and guidance.</>,
  },
  {
    title: 'Level 3: Automated Intelligence',
    description: <>Robots that can operate independently in structured environments.</>,
  },
  {
    title: 'Level 4: Augmented Intelligence',
    description: <>Robots that can adapt to some unstructured environments with human oversight.</>,
  },
  {
    title: 'Level 5: Embodied Intelligence',
    description: <>Fully autonomous robots with human-like understanding and interaction capabilities.</>,
  },
];

function Card({ title, description }: CardItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageValueProp(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        {/* Why Read This Section */}
        <div className={styles.valueSection}>
          <h2>Why Read This?</h2>
          <div className="row">
            {WhyReadThisCards.map((props, idx) => (
              <Card key={idx} {...props} />
            ))}
          </div>
        </div>

        {/* Curriculum & Topics Section */}
        <div className={styles.valueSection}>
          <h2>Curriculum & Topics</h2>
          <div className="row">
            {CurriculumCards.map((props, idx) => (
              <Card key={idx} {...props} />
            ))}
          </div>
        </div>

        {/* AI Maturity Levels Section */}
        <div className={styles.valueSection}>
          <h2>AI Maturity Levels</h2>
          <div className="row">
            {MaturityCards.map((props, idx) => (
              <Card key={idx} {...props} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}