import type { ShallowRef } from 'vue'

// Keep input cursor in the correct position when we use formatter.
export function useCursor(
  input: ShallowRef<HTMLInputElement | undefined>
): [() => void] {
  function setCursor() {
    if (input.value == undefined) return
    // test set cursor left
    input.value.setSelectionRange(0, 0)
  }

  return [setCursor]
}
