import type Input from './input.vue'
import type { ComponentExposed } from 'vue-component-type-helpers'
import type { ComponentPublicInstance } from 'vue'

export type InputInstance = ComponentPublicInstance<typeof Input> &
  ComponentExposed<typeof Input> &
  unknown
