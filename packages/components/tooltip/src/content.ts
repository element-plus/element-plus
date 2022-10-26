import { buildProps, definePropType } from '@element-plus/utils'
import { popperContentProps } from '@element-plus/components/popper'
import {
  POPPER_CONTAINER_SELECTOR,
  useDelayedToggleProps,
  useNamespace,
} from '@element-plus/hooks'
import type { ExtractPropTypes } from 'vue'

const ns = useNamespace('tooltip')

export const useTooltipContentProps = buildProps({
  ...useDelayedToggleProps,
  ...popperContentProps,
  appendTo: {
    type: definePropType<string | HTMLElement>([String, Object]),
    default: POPPER_CONTAINER_SELECTOR,
  },
  content: {
    type: String,
    default: '',
  },
  rawContent: {
    type: Boolean,
    default: false,
  },
  persistent: Boolean,
  ariaLabel: String,
  // because model toggle prop is generated dynamically
  // so the typing cannot be evaluated by typescript as type:
  // [name]: { type: Boolean, default: null }
  // so we need to declare that again for type checking.
  visible: {
    type: definePropType<boolean | null>(Boolean),
    default: null,
  },
  transition: {
    type: String,
    default: `${ns.namespace.value}-fade-in-linear`,
  },
  teleported: {
    type: Boolean,
    default: true,
  },
  disabled: {
    type: Boolean,
  },
} as const)

export type ElTooltipContentProps = ExtractPropTypes<
  typeof useTooltipContentProps
>
