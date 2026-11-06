import { isClient } from '@element-plus/utils'

type RTLOffsetType = 'negative' | 'positive-descending' | 'positive-ascending'

let cachedRTLResult: RTLOffsetType | null = null

export function getRTLOffsetType(recalculate = false): RTLOffsetType {
  if (!isClient) return 'negative'
  if (cachedRTLResult === null || recalculate) {
    const outerDiv = document.createElement('div')
    const outerStyle = outerDiv.style
    outerStyle.width = '50px'
    outerStyle.height = '50px'
    outerStyle.overflow = 'scroll'
    outerStyle.direction = 'rtl'
    outerStyle.position = 'absolute'
    outerStyle.visibility = 'hidden'
    outerStyle.top = '-9999px'

    const innerDiv = document.createElement('div')
    const innerStyle = innerDiv.style
    innerStyle.width = '100px'
    innerStyle.height = '100px'

    outerDiv.appendChild(innerDiv)
    document.body.appendChild(outerDiv)

    if (outerDiv.scrollLeft > 0) {
      cachedRTLResult = 'positive-descending'
    } else {
      outerDiv.scrollLeft = 1
      cachedRTLResult =
        outerDiv.scrollLeft === 0 ? 'negative' : 'positive-ascending'
    }

    document.body.removeChild(outerDiv)
  }

  return cachedRTLResult
}
