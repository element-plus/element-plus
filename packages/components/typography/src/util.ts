import { useNamespace } from '@element-plus/hooks'
export const ns = useNamespace('typography')
export const getDesignatedType = function <T extends object, K extends keyof T>(
  source: T,
  target: Array<K> | K
): object {
  const result = {} as T
  if (Array.isArray(target)) {
    target.forEach((key) => {
      result[key] = source[key]
    })
  } else {
    result[target] = source[target]
  }
  return result
}
export const getTextNode = function (el: HTMLElement) {
  if (!el) return false
  console.log(el)
  return {
    width: `${el.offsetWidth}px`,
    height: `${el.offsetHeight}px `,
  }
}
