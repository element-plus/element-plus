import { buildProps, definePropType } from '@element-plus/utils'
import { tooltipV2RootProps } from './root'
import { tooltipV2TriggerProps } from './trigger'
import { tooltipV2ArrowProps } from './arrow'
import { tooltipV2ContentProps } from './content'

import type { ExtractPropTypes, TeleportProps, TransitionProps } from 'vue'

export const tooltipV2Props = buildProps({
  ...tooltipV2RootProps,
  ...tooltipV2ArrowProps,
  ...tooltipV2TriggerProps,
  ...tooltipV2ContentProps,
  alwaysOn: Boolean,
  fullTransition: Boolean,
  transitionProps: {
    type: definePropType<TransitionProps | null>(Object),
    default: null,
  },
  teleported: Boolean,
  to: {
    type: definePropType<TeleportProps['to']>(String),
    default: 'body',
  },
} as const)

export type TooltipV2Props = ExtractPropTypes<typeof tooltipV2Props>
