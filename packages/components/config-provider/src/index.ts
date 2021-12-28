import { provide, defineComponent } from 'vue'
import { provideLocale } from '@element-plus/hooks'
import { configProviderContextKey } from '@element-plus/tokens'
import { configProviderProps } from './config-provider'
import type { MessageConfigContext } from '@element-plus/components/message'

export const messageConfig: MessageConfigContext = {}

export const ConfigProvider = defineComponent({
  name: 'ElConfigProvider',
  props: configProviderProps,
  setup(props, { slots }) {
    provideLocale()
    provide(configProviderContextKey, props)
    Object.assign(messageConfig, props.message || {})
    return () => slots.default?.()
  },
})
