---
title: Auto Scroll Text
lang: en-US
---

# Auto Scroll Text

Automatically scrolls text content when it exceeds the container size, supporting both horizontal and vertical scrolling with seamless loop functionality.

## Basic Usage

The Auto Scroll Text component automatically scrolls text when it exceeds the container dimensions, supporting both horizontal and vertical directions.

:::demo Use `text` attribute to set the content, `direction` to set scroll direction, and `speed` to control scroll speed.

auto-scroll-text/basic

:::

## Alert Types

Auto Scroll Text integrates with Alert component, supporting different types and themes.

:::demo Use `type` attribute to set different alert types: `success`, `warning`, `info`, `error`. Use `effect` to set theme: `light` or `dark`.

auto-scroll-text/alert-types

:::

## Control Functions

The component provides various control methods for manual scroll management.

:::demo Use `ref` to access component methods: `startScroll()`, `pauseScroll()`, `resumeScroll()`, `resetScroll()`, `stopScroll()`. The `getScrollStatus()` method returns current scroll status.

auto-scroll-text/controls

:::

## Scroll Speed Control

Dynamically adjust scroll speed and compare different speeds.

:::demo Use `speed` attribute to control scroll speed (pixels per second). Use slider to dynamically adjust speed in real-time.

auto-scroll-text/speed

:::

## Event Handling

Listen to various scroll events for enhanced user experience.

:::demo The component emits events: `scroll-start`, `scroll-pause`, `scroll-resume`, `scroll-end`, and `close`. Use event handlers to respond to scroll state changes.

auto-scroll-text/events

:::

## Custom Configuration

Customize component appearance and behavior with various options.

:::demo Configure `loop`, `auto-start`, `show-controls`, `pause-on-hover` and other attributes to customize component behavior. Use `title`, `description`, `center`, `show-icon` to customize Alert appearance.

auto-scroll-text/custom

:::

## Advanced Usage

Dynamic content updates and responsive configuration.

:::demo Dynamically update text content, scroll direction, speed, and Alert properties. The component automatically adjusts to property changes and provides real-time status feedback.

auto-scroll-text/advanced

:::

## API Reference

Complete API documentation with all properties, events, and methods.

:::demo Comprehensive API reference showing all available properties, events, methods, and slots. Includes interactive method calling examples and real-time results.

auto-scroll-text/api

:::

## Auto Scroll Text API

### Attributes

| Name               | Description                               | Type                                                 | Default    |
| ------------------ | ----------------------------------------- | ---------------------------------------------------- | ---------- |
| text               | Text content to scroll (required)         | ^[string]                                            | —          |
| direction          | Scroll direction                          | ^[enum]`'horizontal' \| 'vertical'`                  | horizontal |
| speed              | Scroll speed in pixels per second         | ^[number]                                            | 50         |
| auto-start         | Whether to start scrolling automatically  | ^[boolean]                                           | true       |
| show-controls      | Whether to show control buttons           | ^[boolean]                                           | true       |
| loop               | Whether to loop scrolling                 | ^[boolean]                                           | true       |
| pause-on-hover     | Whether to pause scrolling on mouse hover | ^[boolean]                                           | true       |
| title              | Alert title                               | ^[string]                                            | —          |
| type               | Alert type                                | ^[enum]`'success' \| 'warning' \| 'info' \| 'error'` | info       |
| description        | Alert description                         | ^[string]                                            | —          |
| closable           | Whether Alert can be closed               | ^[boolean]                                           | false      |
| show-icon          | Whether to show Alert icon                | ^[boolean]                                           | true       |
| center             | Whether to center Alert content           | ^[boolean]                                           | false      |
| effect             | Alert theme                               | ^[enum]`'light' \| 'dark'`                           | light      |
| pause-button-text  | Custom text for pause button              | ^[string]                                            | —          |
| resume-button-text | Custom text for resume button             | ^[string]                                            | —          |
| reset-button-text  | Custom text for reset button              | ^[string]                                            | —          |

### Events

| Name          | Description                      | Callback Parameters |
| ------------- | -------------------------------- | ------------------- |
| scroll-start  | Triggered when scrolling starts  | —                   |
| scroll-pause  | Triggered when scrolling pauses  | —                   |
| scroll-resume | Triggered when scrolling resumes | —                   |
| scroll-end    | Triggered when scrolling ends    | —                   |
| close         | Triggered when Alert is closed   | —                   |

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
type AlertType = 'success' | 'warning' | 'info' | 'error'
type AlertEffect = 'light' | 'dark'
```

## Features

- **Automatic Scrolling**: Automatically detects when text exceeds container and starts scrolling
- **Bidirectional Support**: Supports both horizontal and vertical scrolling
- **Seamless Loop**: Smooth infinite scrolling with seamless transitions
- **Interactive Control**: Built-in control buttons and mouse hover pause
- **Alert Integration**: Built on Element Plus Alert component with full customization
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
