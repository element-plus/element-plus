import { defineComponent, onMounted, renderSlot, watch, watchEffect } from 'vue'
import { isClient } from '@vueuse/core'
import { provideGlobalConfig } from './hooks/use-global-config'
import { configProviderProps } from './config-provider-props'

import type { MessageConfigContext } from '@element-plus/components/message'

export const messageConfig: MessageConfigContext = {}

const ConfigProvider = defineComponent({
  name: 'ElConfigProvider',
  props: configProviderProps,

  setup(props, { slots }) {
    watch(
      () => props.message,
      (val) => {
        Object.assign(messageConfig, val ?? {})
      },
      { immediate: true, deep: true }
    )
    const setBaseTheme = (theme: Record<string, string>) => {
      if (isClient) {
        Object.keys(theme).forEach((key) => {
          document.documentElement.style.setProperty(key, theme[key])
        })
      }
    }
    watchEffect(() => {
      setBaseTheme(props.themeOverride?.common || {})
    })
    onMounted(() => {
      setBaseTheme(props.themeOverride?.common || {})
    })

    const config = provideGlobalConfig(props)
    return () => renderSlot(slots, 'default', { config: config?.value })
  },
})
export type ConfigProviderInstance = InstanceType<typeof ConfigProvider>

export default ConfigProvider
