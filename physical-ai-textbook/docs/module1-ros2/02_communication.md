---
sidebar_position: 2
---

# Implementing Nodes, Topics, and Services

## Understanding Nodes

**Nodes** in ROS 2 are individual processes that perform computation and communicate with other nodes. They serve as the fundamental building blocks of any ROS 2 application, encapsulating specific functionality such as sensor data processing, actuator control, or decision-making algorithms. Each node operates independently, managing its own resources and executing its designated tasks. Nodes can be written in different programming languages (C++, Python, etc.) and still communicate seamlessly through ROS 2's middleware infrastructure.

## Topics: Publish-Subscribe Communication

**Topics** enable asynchronous, one-way communication between nodes using a publish-subscribe pattern. Publishers send messages to a topic, while subscribers receive messages from the same topic. This decoupled approach allows for flexible system design where publishers and subscribers don't need to know about each other's existence. Topics are ideal for streaming data like sensor readings, where multiple nodes might need to consume the same information simultaneously.

## Services: Request-Response Communication

**Services** provide synchronous, two-way communication with a request-response pattern. A client sends a request to a service and waits for a response, making services suitable for operations that require immediate feedback or completion confirmation. Unlike topics, services establish a direct connection between client and server during the transaction, ensuring reliable communication for critical operations like configuration changes or action requests.

## DDS: The Underlying Transport

**DDS** (Data Distribution Service) serves as the underlying transport mechanism for ROS 2 communication. DDS is a middleware protocol and API standard that provides a publish-subscribe model for real-time systems. It handles the low-level details of message delivery, including discovery, data serialization, quality of service (QoS) policies, and network management. DDS ensures reliable, high-performance communication that meets the demanding requirements of robotic applications, including real-time constraints and fault tolerance.

## Practical Implementation

The following example shows how to create a publisher node that sends messages and a subscriber node that receives them:

```python
# Publisher example in Python
import rclpy
from std_msgs.msg import String

def main():
    rclpy.init()
    node = rclpy.create_node('publisher_node')
    publisher = node.create_publisher(String, 'topic_name', 10)

    # Publish messages at regular intervals
    timer = node.create_timer(0.5, lambda: publisher.publish(String(data='Hello ROS2')))

    rclpy.spin(node)
```

This hands-on approach allows developers to understand the practical implementation of ROS 2 communication patterns.