import type Button from './button.vue'
import type ButtonGroup from './button-group.vue'

export type ButtonInstance = InstanceType<typeof Button> & unknown
export type ButtonGroupInstance = InstanceType<typeof ButtonGroup> & unknown
