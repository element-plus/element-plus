import { defineComponent, renderSlot } from 'vue'
import { buildProps, definePropType } from '@element-plus/utils/props'
import {
  useLocaleProps,
  provideLocale,
  provideGlobalConfig,
} from '@element-plus/hooks'
import type { ButtonConfigContext } from '@element-plus/components/button'
import type { MessageConfigContext } from '@element-plus/components/message'

export const messageConfig: MessageConfigContext = {}

export const configProviderProps = buildProps({
  ...useLocaleProps,

  size: {
    type: String,
    values: ['large', 'default', 'small'],
  },

  button: {
    type: definePropType<ButtonConfigContext>(Object),
  },

  message: {
    type: definePropType<MessageConfigContext>(Object),
  },

  zIndex: {
    type: Number,
  },
} as const)

export default defineComponent({
  name: 'ElConfigProvider',
  props: configProviderProps,

  setup(props, { slots }) {
    provideLocale()
    Object.assign(messageConfig, props.message || {})
    const config = provideGlobalConfig(props)
    return () => renderSlot(slots, 'default', { config: config?.value })
  },
})
