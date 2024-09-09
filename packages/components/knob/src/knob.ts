import { buildProps } from '@element-plus/utils'
import type { ExtractPropTypes } from 'vue'
import type Knob from './knob.vue'

export const knobProps = buildProps({
  /**
   * @description Value of the component.
   */
  modelValue: {
    type: Number,
    default: null,
  },
  /**
   * @description Size of the component in pixels.
   */
  size: {
    type: Number,
    default: 100,
  },
  /**
   * @description When present, it specifies that the component should be disabled.
   */
  disabled: {
    type: Boolean,
    default: false,
  },
  /**
   * @description When present, it specifies that the component value cannot be edited.
   */
  readonly: {
    type: Boolean,
    default: false,
  },
  /**
   * @description
   */
  type: {
    type: String,
    default: '',
  },

  /**
   * @description Step factor to increment/decrement the value.
   */
  step: {
    type: Number,
    default: 1,
  },
  /**
   * @description Mininum boundary value.
   */
  min: {
    type: Number,
    default: 0,
  },
  /**
   * @description Maximum boundary value.
   */
  max: {
    type: Number,
    default: 100,
  },
  /**
   * @description Background color of the range.
   */
  valueColor: {
    type: String,
    default: '',
  },
  /**
   * @description Background color of the range.
   */
  rangeColor: {
    type: String,
    default: '',
  },
  /**
   * @description Color of the value text.
   */
  textColor: {
    type: String,
    default: 'var(--el-text-color-regular)',
  },
  /**
   * @description Width of the knob stroke.
   */
  strokeWidth: {
    type: Number,
    default: 14,
  },
  /**
   * @description Whether the show the value inside the knob.
   */
  showValue: {
    type: Boolean,
    default: true,
  },
  /**
   * @description Value template
   */
  valueTemplate: {
    type: [String, Function],
    default: '{value}',
  },
  /**
   * @description Index of the element in tabbing order.
   */
  tabindex: {
    type: Number,
    default: 0,
  },
  /**
   * @description Establishes relationships between the component and label(s) where its value should be one or more element IDs.
   */
  ariaLabelledby: {
    type: String,
    default: null,
  },
  /**
   * @description Used to define a string that labels the element.
   */
  ariaLabel: {
    type: String,
    default: null,
  },
} as const)
export type KnobProps = ExtractPropTypes<typeof knobProps>
export type KnobInstance = InstanceType<typeof Knob>
