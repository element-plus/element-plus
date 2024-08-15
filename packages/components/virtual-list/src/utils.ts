// @ts-nocheck
import {
  BACKWARD,
  FORWARD,
  HORIZONTAL,
  LTR,
  PageKey,
  RTL,
  RTL_OFFSET_NAG,
  RTL_OFFSET_POS_ASC,
  RTL_OFFSET_POS_DESC,
} from './defaults'

import type { CSSProperties } from 'vue'
import type { Direction, LayoutDirection, RTLOffsetType } from './types'

export const getScrollDir = (prev: number, cur: number) =>
  prev < cur ? FORWARD : BACKWARD

export const isHorizontal = (dir: string) =>
  dir === LTR || dir === RTL || dir === HORIZONTAL

export const isRTL = (dir: Direction) => dir === RTL

let cachedRTLResult: RTLOffsetType | null = null

export function getRTLOffsetType(recalculate = false): RTLOffsetType {
  if (cachedRTLResult === null || recalculate) {
    const outerDiv = document.createElement('div')
    const outerStyle = outerDiv.style
    outerStyle.width = '50px'
    outerStyle.height = '50px'
    outerStyle.overflow = 'scroll'
    outerStyle.direction = 'rtl'

    const innerDiv = document.createElement('div')
    const innerStyle = innerDiv.style
    innerStyle.width = '100px'
    innerStyle.height = '100px'

    outerDiv.appendChild(innerDiv)

    document.body.appendChild(outerDiv)

    if (outerDiv.scrollLeft > 0) {
      cachedRTLResult = RTL_OFFSET_POS_DESC
    } else {
      outerDiv.scrollLeft = 1
      if (outerDiv.scrollLeft === 0) {
        cachedRTLResult = RTL_OFFSET_NAG
      } else {
        cachedRTLResult = RTL_OFFSET_POS_ASC
      }
    }

    document.body.removeChild(outerDiv)

    return cachedRTLResult
  }

  return cachedRTLResult
}

export const getRelativePos = (
  e: TouchEvent | MouseEvent,
  layout: LayoutDirection
) => {
  return 'touches' in e ? e.touches[0][PageKey[layout]] : e[PageKey[layout]]
}

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
  style.msTransform = translate
  // polyfill
  ;(style as any).webkitTransform = translate

  if (layout === 'horizontal') {
    style.height = '100%'
  } else {
    style.width = '100%'
  }

  return style
}
