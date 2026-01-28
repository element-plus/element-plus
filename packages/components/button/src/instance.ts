import type { ComputedRef, Ref } from 'vue'
import type { ComponentSize } from '@element-plus/constants'
import type { ButtonType } from './button'
import type Button from './button.vue'
import type ButtonGroup from './button-group.vue'

export type ButtonExpose = {
  ref: Ref<HTMLButtonElement>
  size: ComputedRef<ComponentSize>
  type: ComputedRef<ButtonType>
  disabled: ComputedRef<boolean>
  shouldAddSpace: ComputedRef<boolean>
}

export type ButtonInstance = InstanceType<typeof Button> & ButtonExpose

export type ButtonGroupInstance = InstanceType<typeof ButtonGroup> & unknown
