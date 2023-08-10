// import { getDesignatedType } from './util'
import type { inputProps } from '@element-plus/component/input/src/input'
import type { InternalBlockProps } from './typography'
import type { PropType } from 'vue'
export interface EditConfig {
  editing?: boolean
  tooltip?: boolean
  onStart?: () => void
  onChange?: (value: string) => void
  onCancel?: () => void
  onEnd?: () => void
  maxlength?: number
  triggerType?: ('icon' | 'text')[]
  // ...getDesignatedType(inputProps, ['autosize']),
  autoSize?: inputProps['autosize']
}

export interface copyConfig {
  text: string | (() => string)
  onCopy: () => void
  tooltip: false
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
})
