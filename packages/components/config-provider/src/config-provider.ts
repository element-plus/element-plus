import { useLocaleProps } from '@element-plus/hooks'
import { buildProps, definePropType } from '@element-plus/utils/props'
import type { ButtonConfigContext } from '@element-plus/components/button'

export const configProviderProps = buildProps({
  ...useLocaleProps,

  size: {
    type: String,
    values: ['large', 'medium', 'small', 'mini'],
  },

  button: {
    type: definePropType<ButtonConfigContext>(Object),
  },
} as const)
