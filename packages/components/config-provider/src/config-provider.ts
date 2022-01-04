import { defineComponent, renderSlot } from 'vue'
import { buildProps, definePropType } from '@element-plus/utils/props'
import {
  useLocaleProps,
  provideLocale,
  provideGlobalConfig,
} from '@element-plus/hooks'
import type { ButtonConfigContext } from '@element-plus/components/button'

export const configProviderProps = buildProps({
  ...useLocaleProps,

  size: {
    type: String,
    values: ['large', 'default', 'small'],
  },

  button: {
    type: definePropType<ButtonConfigContext>(Object),
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
    const config = provideGlobalConfig(props)
    return () => renderSlot(slots, 'default', { config: config?.value })
  },
})
