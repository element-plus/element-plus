import { useLocaleProps } from '@element-plus/hooks'
import { buildProps, definePropType } from '@element-plus/utils/props'
import type { ButtonConfigContext } from '@element-plus/components/button'
import type { MessageConfigContext } from '@element-plus/components/message'

export const configProviderProps = buildProps({
  ...useLocaleProps,

  size: {
    type: String,
    values: ['large', 'medium', 'small', 'mini'],
  },

  button: {
    type: definePropType<ButtonConfigContext>(Object),
  },

  message: {
    type: definePropType<MessageConfigContext>(Object),
  },
} as const)
