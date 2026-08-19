---
title: Marquee
lang: en-US
---

# Marquee

Automatically scrolls content when it exceeds the container size, supporting both horizontal and vertical scrolling with seamless loop functionality.

## Basic Usage

The Marquee component automatically scrolls content when it exceeds the container dimensions, supporting both horizontal and vertical directions.

:::demo Use the `el-marquee` component directly with your content. Set `direction` to control scroll direction and `speed` to control scroll speed.

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

| Name           | Description                               | Type                                | Default    |
| -------------- | ----------------------------------------- | ----------------------------------- | ---------- |
| direction      | Scroll direction                          | ^[enum]`'horizontal' \| 'vertical'` | horizontal |
| speed          | Scroll speed in pixels per second         | ^[number]                           | 50         |
| auto-start     | Whether to start scrolling automatically  | ^[boolean]                          | true       |
| loop           | Whether to loop scrolling                 | ^[boolean]                          | true       |
| pause-on-hover | Whether to pause scrolling on mouse hover | ^[boolean]                          | true       |

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

| Name              | Description                                    | Type                      |
| ----------------- | ---------------------------------------------- | ------------------------- |
| isPaused          | Current pause state                            | ^`[Ref]<boolean>`         |
| scrollPosition    | Current scroll position                        | ^`[Ref]<number>`          |
| shouldScroll      | Whether scrolling is needed                    | ^`[ComputedRef]<boolean>` |
| singleContentSize | Total size of all content                      | ^`[ComputedRef]<number>`  |
| containerSize     | Container dimensions                           | ^`[ComputedRef]<number>`  |
| requiredCopies    | Number of copies needed for seamless scrolling | ^`[ComputedRef]<number>`  |
| containerRef      | Container element reference                    | ^`[Ref]<HTMLElement>`     |
| textRef           | Text element reference                         | ^`[Ref]<HTMLElement>`     |

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

## Features

- **Automatic Scrolling**: Automatically detects when content exceeds container and starts scrolling
- **Bidirectional Support**: Supports both horizontal and vertical scrolling
- **Smart Seamless Loop**: Dynamically calculates required copies for seamless infinite scrolling
- **Content Flexibility**: Accepts any content through slots for maximum flexibility
- **Interactive Control**: Mouse hover pause and programmatic control methods
- **Event System**: Comprehensive event system for scroll state changes
- **Performance Optimized**: Uses requestAnimationFrame for smooth animations
- **Responsive Design**: Automatically adapts to container size changes
- **TypeScript Support**: Full TypeScript support with comprehensive type definitions

## Seamless Scrolling Mechanism

The Marquee component implements an intelligent seamless scrolling mechanism that automatically calculates the optimal number of content copies needed for smooth infinite scrolling.

### How It Works

1. **Dynamic Copy Calculation**: The component automatically calculates the required number of copies based on:

   - Container dimensions (width/height)
   - Total content size (sum of all child element dimensions)
   - Mathematical formula: `Math.ceil((containerSize + contentSize) / contentSize)`

2. **Content Flexibility**: You can put any content directly inside the marquee:

   ```vue
   <el-marquee>
     <span>Your content here</span>
     <img src="image.jpg" alt="Image" />
     <div>More content</div>
   </el-marquee>
   ```

   The component automatically calculates the total width/height of all child elements combined.

3. **Seamless Transition**: When the first copy completely scrolls out of view, the position resets to show the second copy, creating a seamless loop effect.

4. **Performance Optimization**: Only creates the minimum number of copies needed, avoiding unnecessary DOM elements.

### Technical Details

- **Copy Generation**: Uses `v-for` to dynamically generate required copies
- **Size Calculation**: Iterates through all child elements to calculate total dimensions
- **Reset Timing**: Precisely resets position when first copy exits viewport
- **Memory Efficient**: Minimal memory footprint with optimal copy count

## Use Cases

- **News Tickers**: Display scrolling news headlines
- **Status Messages**: Show long status messages in limited space
- **Notifications**: Display scrolling notification content
- **Banners**: Create dynamic banner text
- **Chat Applications**: Show long usernames or messages
- **Data Displays**: Present long data strings in compact spaces
