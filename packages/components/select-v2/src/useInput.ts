import { ref } from 'vue'
import { isFunction } from '@vue/shared'
import { isKorean } from '@element-plus/utils'

export function useInput(handleInput: (event: CompositionEvent) => void) {
  const isComposing = ref(false)

  const handleCompositionStart = () => {
    isComposing.value = true
  }

  const handleCompositionUpdate = (event: CompositionEvent) => {
    const text = (event.target as HTMLInputElement).value
    const lastCharacter = text[text.length - 1] || ''
    isComposing.value = !isKorean(lastCharacter)
  }

  const handleCompositionEnd = (event: CompositionEvent) => {
    if (isComposing.value) {
      isComposing.value = false
      if (isFunction(handleInput)) {
        handleInput(event)
      }
    }
  }

  return {
    handleCompositionStart,
    handleCompositionUpdate,
    handleCompositionEnd,
  }
}
