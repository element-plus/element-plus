import type { CSSProperties } from 'vue'
import type { ThumbProps } from './thumb'

export const GAP = 4 // top 2 + bottom 2 of bar instance

export const BAR_MAP = {
  vertical: {
    offset: 'offsetHeight',
    scroll: 'scrollTop',
    scrollSize: 'scrollHeight',
    size: 'height',
    key: 'vertical',
    axis: 'Y',
    client: 'clientY',
    direction: 'top',
  },
  horizontal: {
    offset: 'offsetWidth',
    scroll: 'scrollLeft',
    scrollSize: 'scrollWidth',
    size: 'width',
    key: 'horizontal',
    axis: 'X',
    client: 'clientX',
    direction: 'left',
  },
} as const

export interface EaseInOutQuadOptions {
  /** The specified time to start the animation */
  timeElapsed: number
  /** The specified starting position of the object on the x-axis */
  startValue: number
  /** The specified value of the object changes */
  byValue: number
  /** The specified duration of the entire process */
  duration: number
}

export const renderThumbStyle = ({
  move,
  size,
  bar,
}: Pick<ThumbProps, 'move' | 'size'> & {
  bar: typeof BAR_MAP[keyof typeof BAR_MAP]
}): CSSProperties => ({
  [bar.size]: size,
  transform: `translate${bar.axis}(${move}%)`,
})

/**
 * @description Quadratic easing in and out
 */
export const easeInOutQuad = ({
  timeElapsed,
  startValue,
  byValue,
  duration,
}: EaseInOutQuadOptions): number => {
  timeElapsed /= duration / 2
  if (timeElapsed < 1) {
    return (byValue / 2) * timeElapsed ** 2 + startValue
  }
  return (-byValue / 2) * (--timeElapsed * (timeElapsed - 2) - 1) + startValue
}
