import { computed, ref } from 'vue'
import { useGlobalConfig } from '../use-global-config'

const maximumValueOfZIndexAtDocument = () => {
  const minimumValueOfZIndex = 1
  let result = minimumValueOfZIndex
  // Check if it is server-side rendering or not
  if (typeof window !== 'undefined') {
    // In client side
    result = Math.max(
      minimumValueOfZIndex,
      ...Array.from(window.document.querySelectorAll('*'))
        .map((el) => getComputedStyle(el).zIndex)
        .filter((v) => !Number.isNaN(Number.parseInt(v[1])))
        .map((o) => Number.parseInt(o))
    )
  }
  return result
}
const zIndex = ref(0)

export const useZIndex = () => {
  const initialZIndex = useGlobalConfig('zIndex', 2000) // TODO: move to @element-plus/constants
  const currentZIndex = computed(() =>
    Math.max(initialZIndex.value, zIndex.value)
  )

  const nextZIndex = () => {
    zIndex.value = maximumValueOfZIndexAtDocument()
    return currentZIndex.value
  }

  return {
    initialZIndex,
    currentZIndex,
    nextZIndex,
  }
}
