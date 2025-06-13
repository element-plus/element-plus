import { defineComponent, renderSlot, watch } from 'vue'
import { provideGlobalConfig } from './hooks/use-global-config'
import { IconConfigContext, configProviderProps } from './config-provider-props'

import type { MessageConfigContext } from '@element-plus/components/message'

export const messageConfig: MessageConfigContext = {}
export const iconsConfig: IconConfigContext = {}

const ConfigProvider = defineComponent({
  name: 'ElConfigProvider',
  props: configProviderProps,

  setup(props, { slots }) {
    const config = provideGlobalConfig(props)
    watch(
      () => props.message,
      (val) => {
        Object.assign(messageConfig, config?.value?.message ?? {}, val ?? {})
      },
      { immediate: true, deep: true }
    )
    watch(
      () => props.icons,
      (val) => {
        Object.assign(iconsConfig, config?.value?.icons ?? {}, val ?? {})
      },
      { immediate: true, deep: true }
    )
    return () => renderSlot(slots, 'default', { config: config?.value })
  },
})
export type ConfigProviderInstance = InstanceType<typeof ConfigProvider> &
  unknown

export default ConfigProvider
