import type { Ref, StyleValue } from 'vue'
import type Input from './input.vue'
import type { InputAutoSize } from './input'

export type InputExpose = {
  blur: () => void
  clear: () => void
  focus: () => void
  input: Ref<HTMLInputElement>
  textarea: Ref<HTMLTextAreaElement>
  ref: Ref<HTMLInputElement | HTMLTextAreaElement>
  textareaStyle: Ref<StyleValue>
  autosize: Ref<InputAutoSize>
  resizeTextarea: () => void
  select: () => void
  isComposing: Ref<boolean>
}

export type InputInstance = InstanceType<typeof Input> & InputExpose
