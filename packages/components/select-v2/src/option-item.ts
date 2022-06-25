import { buildProps, definePropType } from '@element-plus/utils'

export const OptionProps = buildProps({
  data: Array,
  disabled: Boolean,
  hovering: Boolean,
  item: {
    type: definePropType<{
      label: ''
    }>(Object),
    required: true,
    default: () => ({
      label: '',
    }),
  },
  index: Number,
  style: Object,
  selected: Boolean,
  created: Boolean,
})

export const OptionEmits = ['select', 'hover']
