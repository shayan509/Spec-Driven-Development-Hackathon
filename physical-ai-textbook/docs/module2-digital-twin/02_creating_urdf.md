---
sidebar_position: 2
---

# Modeling a Simple Robot (URDF)

Universal Robot Description Format (URDF) is an XML-based format used to describe robot models in ROS. This chapter covers how to create robot models with proper joint states, links, and physics integration.

## Robot Model Structure

A URDF file contains several key elements:

- **Links**: Rigid bodies with physical properties like mass, inertia, and visual representation
- **Joints**: Connections between links that define how they can move relative to each other
- **Materials**: Visual properties for rendering the robot model
- **Physics**: Properties that define how the robot interacts with simulation physics

## Integration with Simulation Physics

Once a robot is properly defined in URDF, it can be integrated with simulation physics engines to test how the robot will behave in real-world scenarios. This includes testing joint limits, collision detection, and physical interactions.