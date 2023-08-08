import type { PropType } from 'vue'
export interface EditConfig {
  editing?: boolean
  tooltip?: boolean
  onStart?: () => void
  onChange?: (value: string) => void
  onCancel?: () => void
  onEnd?: () => void
  maxlength?: number
  autoSize?: boolean
  //  | AutoSizeType;
  triggerType?: ('icon' | 'text')[]
}

export interface copyConfig {
  text: string | (() => string)
  onCopy: () => void
  tooltip: false
}
export interface InternalBlockProps {
  editable?: boolean | EditConfig
  copyable?: boolean | copyConfig
}
export const baseProps = () => ({
  editable: {
    type: [Boolean, Object] as PropType<EditConfig>,
    default: undefined as InternalBlockProps['editable'],
  },
  content: {
    type: String,
    default: '',
  },
  copyable: {
    type: [Boolean, Object] as PropType<copyConfig>,
    default: undefined as InternalBlockProps['copyable'],
  },
})
