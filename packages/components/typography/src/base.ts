import { textProps } from '@element-plus/components/text'
import type { PropType } from 'vue'
// import { getDesignatedType } from './util'
import type { InputAutoSize } from '@element-plus/components/input'
import type { InternalBlockProps } from './typography'
export interface EditConfig {
  value: string
  editing?: boolean
  tooltip?: boolean
  onStart?: () => void
  onChange?: (value: string) => void
  onCancel?: () => void
  onEnd?: () => void
  // maxLength?: number
  placeholder?: string
  triggerType?: 'icon' | 'text'
  icon?: any
  triggerText?: string
  autoSize?: InputAutoSize
  tooltipContent?: string
}
export interface copyConfig {
  text: string | (() => string)
  onCopy: () => void
  tooltip: boolean
  tooltipContent: string
}

export const baseProps = () => ({
  editable: {
    type: [Boolean, Object] as PropType<InternalBlockProps['editable']>,
    default: undefined as InternalBlockProps['editable'],
  },
  content: {
    type: String,
    default: '',
  },
  copyable: {
    type: [Boolean, Object] as PropType<InternalBlockProps['copyable']>,
    default: undefined as InternalBlockProps['copyable'],
  },
  keyboard: {
    type: Boolean,
    default: false,
  },
  code: {
    type: Boolean,
    default: false,
  },
  left: {
    type: String,
    default: '',
  },
  color: {
    type: String,
    default: '',
  },
  ...textProps,
})
