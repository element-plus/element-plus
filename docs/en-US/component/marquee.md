---
title: Marquee
lang: en-US
---

# Marquee

Automatically scrolls content when it exceeds the container size, supporting both horizontal and vertical scrolling with seamless loop functionality.

## Basic Usage

The Marquee component automatically scrolls content when it exceeds the container dimensions, supporting both horizontal and vertical directions.

:::demo Use `el-marquee-item` to wrap content, `direction` to set scroll direction, and `speed` to control scroll speed.

marquee/basic

:::

## Direction Control

Control the scroll direction with the `direction` attribute.

:::demo Use `direction="horizontal"` for left-to-right scrolling and `direction="vertical"` for top-to-bottom scrolling.

marquee/direction

:::

## Speed Control

Dynamically adjust scroll speed and compare different speeds.

:::demo Use `speed` attribute to control scroll speed (pixels per second). Use buttons to dynamically adjust speed in real-time.

marquee/speed

:::

## Control Functions

The component provides various control methods for manual scroll management.

:::demo Use `ref` to access component methods: `startScroll()`, `pauseScroll()`, `resumeScroll()`, `resetScroll()`, `stopScroll()`. The `getScrollStatus()` method returns current scroll status.

marquee/controls

:::

## Event Handling

Listen to various scroll events for enhanced user experience.

:::demo The component emits events: `scroll-start`, `scroll-pause`, `scroll-resume`, `scroll-end`. Use event handlers to respond to scroll state changes.

marquee/events

:::

## Advanced Usage

Dynamic content updates and responsive configuration.

:::demo Dynamically update content, scroll direction, speed, and other properties. The component automatically adjusts to property changes and provides real-time status feedback.

marquee/advanced

:::

## API Reference

Complete API documentation with all properties, events, and methods.

:::demo Comprehensive API reference showing all available properties, events, methods, and slots. Includes interactive method calling examples and real-time results.

marquee/api

:::

## Marquee API

### Attributes

| Name               | Description                               | Type                                | Default    |
| ------------------ | ----------------------------------------- | ----------------------------------- | ---------- |
| direction          | Scroll direction                          | ^[enum]`'horizontal' \| 'vertical'` | horizontal |
| speed              | Scroll speed in pixels per second         | ^[number]                           | 50         |
| auto-start         | Whether to start scrolling automatically  | ^[boolean]                          | true       |
| show-controls      | Whether to show control buttons           | ^[boolean]                          | true       |
| loop               | Whether to loop scrolling                 | ^[boolean]                          | true       |
| pause-on-hover     | Whether to pause scrolling on mouse hover | ^[boolean]                          | true       |
| pause-button-text  | Custom text for pause button              | ^[string]                           | —          |
| resume-button-text | Custom text for resume button             | ^[string]                           | —          |
| reset-button-text  | Custom text for reset button              | ^[string]                           | —          |

### Events

| Name          | Description                      | Callback Parameters |
| ------------- | -------------------------------- | ------------------- |
| scroll-start  | Triggered when scrolling starts  | —                   |
| scroll-pause  | Triggered when scrolling pauses  | —                   |
| scroll-resume | Triggered when scrolling resumes | —                   |
| scroll-end    | Triggered when scrolling ends    | —                   |

### Methods

| Name            | Description               | Parameters | Return Value |
| --------------- | ------------------------- | ---------- | ------------ |
| startScroll     | Start scrolling           | —          | —            |
| pauseScroll     | Pause scrolling           | —          | —            |
| resumeScroll    | Resume scrolling          | —          | —            |
| togglePause     | Toggle pause state        | —          | —            |
| resetScroll     | Reset scroll position     | —          | —            |
| stopScroll      | Stop scrolling            | —          | —            |
| getScrollStatus | Get current scroll status | —          | ScrollStatus |

### Exposed Properties

| Name           | Description                 | Type                      |
| -------------- | --------------------------- | ------------------------- |
| isPaused       | Current pause state         | ^`[Ref]<boolean>`         |
| scrollPosition | Current scroll position     | ^`[Ref]<number>`          |
| shouldScroll   | Whether scrolling is needed | ^`[ComputedRef]<boolean>` |
| containerRef   | Container element reference | ^`[Ref]<HTMLElement>`     |
| textRef        | Text element reference      | ^`[Ref]<HTMLElement>`     |

### Slots

| Name    | Description    | Scope |
| ------- | -------------- | ----- |
| default | Custom content | —     |

### Types

```typescript
interface ScrollStatus {
  isPaused: boolean
  scrollPosition: number
  shouldScroll: boolean
  isScrolling: boolean
}

type ScrollDirection = 'horizontal' | 'vertical'
```

## MarqueeItem API

### Attributes

| Name  | Description | Type      | Default |
| ----- | ----------- | --------- | ------- |
| label | Item label  | ^[string] | —       |

### Events

| Name  | Description            | Callback Parameters |
| ----- | ---------------------- | ------------------- |
| click | Triggered when clicked | —                   |

## Features

- **Automatic Scrolling**: Automatically detects when content exceeds container and starts scrolling
- **Bidirectional Support**: Supports both horizontal and vertical scrolling
- **Seamless Loop**: Smooth infinite scrolling with seamless transitions
- **Interactive Control**: Built-in control buttons and mouse hover pause
- **Event System**: Comprehensive event system for scroll state changes
- **Performance Optimized**: Uses requestAnimationFrame for smooth animations
- **Responsive Design**: Automatically adapts to container size changes
- **TypeScript Support**: Full TypeScript support with comprehensive type definitions

## Use Cases

- **News Tickers**: Display scrolling news headlines
- **Status Messages**: Show long status messages in limited space
- **Notifications**: Display scrolling notification content
- **Banners**: Create dynamic banner text
- **Chat Applications**: Show long usernames or messages
- **Data Displays**: Present long data strings in compact spaces
