import { buildProps, definePropType } from '@element-plus/utils'
import { usePopperTriggerProps } from '@element-plus/components/popper'
import { EVENT_CODE } from '@element-plus/constants'
import type { ExtractPropTypes } from 'vue'

const triggers = ['hover', 'focus', 'click', 'contextmenu'] as const
export type Trigger = typeof triggers[number]

export const useTooltipTriggerProps = buildProps({
  ...usePopperTriggerProps,
  disabled: Boolean,
  trigger: {
    type: definePropType<Trigger | Trigger[]>([String, Array]),
    default: 'hover',
  },
  triggerKeys: {
    type: definePropType<string[]>(Array),
    default: () => [EVENT_CODE.enter, EVENT_CODE.space],
  },
} as const)

export type ElTooltipTriggerProps = ExtractPropTypes<
  typeof useTooltipTriggerProps
>
