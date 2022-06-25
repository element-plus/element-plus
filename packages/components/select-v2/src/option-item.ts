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
    defualt: () => ({
      label: '',
    }),
  },
  index: Number,
  style: Object,
  selected: Boolean,
  created: Boolean,
})

export const OptionsEmits = ['select', 'hover']
