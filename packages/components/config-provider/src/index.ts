import { provide, defineComponent } from 'vue'
import { provideLocale } from '@element-plus/hooks'
import { configProviderContextKey } from '@element-plus/tokens'
import { configProviderProps } from './config-provider'

export const ConfigProvider = defineComponent({
  name: 'ElConfigProvider',
  props: configProviderProps,
  setup(props, { slots }) {
    provideLocale()
    provide(configProviderContextKey, props)
    return () => slots.default?.()
  },
})
