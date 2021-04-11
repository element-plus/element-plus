import {
  FORWARD,
  BACKWARD,
  LTR,
  RTL,
  HORIZONTAL,
  RTL_OFFSET_NAG,
  RTL_OFFSET_POS_DESC,
  RTL_OFFSET_POS_ASC,
} from './defaults'

import type { RTLOffsetType } from './types'

export const getScrollDir = (prev: number, cur: number) =>
  prev < cur ? FORWARD : BACKWARD

export const isHorizontal = (dir: string) =>
  dir === LTR || dir === RTL || dir === HORIZONTAL

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
