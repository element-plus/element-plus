import type { CSSProperties } from 'vue'

/** converting camel-cased strings to be lowercase and link it with Separato */
export function toLowercaseSeparator(key: string) {
  return key.replace(/([A-Z])/g, '-$1').toLowerCase()
}

export function getStyleStr(style: CSSProperties): string {
  return Object.keys(style)
    .map(
      (key) =>
        `${toLowercaseSeparator(key)}: ${style[key as keyof CSSProperties]};`
    )
    .join(' ')
}

/** Returns the ratio of the device's physical pixel resolution to the css pixel resolution */
export function getPixelRatio() {
  return window.devicePixelRatio || 1
}

/** Whether to re-render the watermark */
export const reRendering = (
  mutation: MutationRecord,
  watermarkElement?: HTMLElement
) => {
  let flag = false
  // Whether to delete the watermark node
  if (mutation.removedNodes.length && watermarkElement) {
    flag = Array.from(mutation.removedNodes).includes(watermarkElement)
  }
  // Whether the watermark dom property value has been modified
  if (mutation.type === 'attributes' && mutation.target === watermarkElement) {
    flag = true
  }
  return flag
}
