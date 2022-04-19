import { buildProps, definePropType } from '@element-plus/utils'

import type { ExtractPropTypes } from 'vue'

type StateUpdater = (state: boolean) => void

export const tooltipV2RootProps = buildProps({
  delayDuration: {
    type: Number,
    default: 300,
  },
  defaultOpen: Boolean,
  open: {
    type: Boolean,
    default: undefined,
  },
  onOpenChange: {
    type: definePropType<StateUpdater>(Function),
  },
  'onUpdate:open': {
    type: definePropType<StateUpdater>(Function),
  },
} as const)

export type TooltipV2RootProps = ExtractPropTypes<typeof tooltipV2RootProps>
