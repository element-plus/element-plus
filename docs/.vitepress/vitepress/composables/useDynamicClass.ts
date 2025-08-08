import { onMounted, onUnmounted } from 'vue'

export interface DynamicClassOptions {
  prefix?: string
  length?: number
}

export function useDynamicClass(
  cssRulesFactory: (className: string) => string,
  options: DynamicClassOptions = {}
) {
  const { prefix = 'doc-content-', length = 9 } = options

  const generateRandomString = (len: number): string => {
    return Array.from(
      { length: len },
      () => String.fromCharCode(97 + Math.floor(Math.random() * 26))
    ).join('')
  }

  const className = `${prefix}${generateRandomString(length)}`

  let styleElement: HTMLStyleElement | null = null

  onMounted(() => {
    styleElement = document.createElement('style')
    const cssRules = cssRulesFactory(className)
    styleElement.textContent = cssRules
    document.head.appendChild(styleElement)
  })

  onUnmounted(() => {
    if (styleElement && styleElement.parentNode) {
      styleElement.parentNode.removeChild(styleElement)
    }
  })

  return {
    className,
    dynamicClass: className
  }
}
