import { BACKWARD, FORWARD, HORIZONTAL, LTR, RTL } from './defaults'

import type { CSSProperties } from 'vue'
import type { Direction } from './types'

export { getRTLOffsetType } from '@element-plus/utils'

export const getScrollDir = (prev: number, cur: number) =>
  prev < cur ? FORWARD : BACKWARD

export const isHorizontal = (dir: string) =>
  dir === LTR || dir === RTL || dir === HORIZONTAL

export const isRTL = (dir: Direction) => dir === RTL

type RenderThumbStyleParams = {
  bar: {
    size: 'height' | 'width'
    axis: 'X' | 'Y'
  }
  size: string
  move: number
}

export function renderThumbStyle(
  { move, size, bar }: RenderThumbStyleParams,
  layout: string
) {
  const style: CSSProperties = {}
  const translate = `translate${bar.axis}(${move}px)`

  style[bar.size] = size
  style.transform = translate

  if (layout === 'horizontal') {
    style.height = '100%'
  } else {
    style.width = '100%'
  }

  return style
}
