import type { ComponentInstance } from 'vue'
import type { ComponentExposed } from 'vue-component-type-helpers'
import type Input from './input.vue'

export type InputInstance = ComponentInstance<typeof Input> &
  ComponentExposed<typeof Input>
