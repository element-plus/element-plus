import { buildProps, definePropType } from '@element-plus/utils'
import { tooltipV2RootProps } from './root'
import { tooltipV2TriggerProps } from './trigger'
import { tooltipV2ArrowProps } from './arrow'
import { tooltipV2ContentProps } from './content'

import type {
  ExtractPropTypes,
  TransitionProps,
  __ExtractPublicPropTypes,
} from 'vue'

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
    type: definePropType<string | HTMLElement>([String, Object]),
    default: 'body',
  },
} as const)

export type TooltipV2Props = ExtractPropTypes<typeof tooltipV2Props>
export type TooltipV2PropsPublic = __ExtractPublicPropTypes<
  typeof tooltipV2Props
>
