import { buildProps, definePropType } from '@element-plus/utils'

export const GroupProps = buildProps({
  item: {
    type: definePropType<{
      isTitle: boolean
      label: string
    }>(Object),
    required: true,
    default: () => ({
      isTitle: false,
      label: '',
    }),
  },
  style: {
    type: Object,
    default: {},
  },
  height: {
    type: Number,
    default: 0,
  },
})
