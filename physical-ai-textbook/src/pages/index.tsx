import type {ReactNode} from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageHero from '../components/HomepageHero';
import HomepageValueProp from '../components/HomepageValueProp';

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Physical AI & Humanoid Robotics`}
      description="The Embodied Intelligence Textbook: From ROS 2 to VLA">
      <HomepageHero />
      <HomepageValueProp />
      <main>
        {/* Additional content can go here */}
      </main>
    </Layout>
  );
}
