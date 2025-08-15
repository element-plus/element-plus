import { defineComponent, renderSlot, watch } from 'vue'
import { provideGlobalConfig } from './hooks/use-global-config'
import { configProviderProps } from './config-provider-props'
import { MESSAGE_DEFAULT_PLACEMENT } from '@element-plus/components/message'

import type { MessageConfigContext } from '@element-plus/components/message'

export const messageConfig: MessageConfigContext = {
  placement: MESSAGE_DEFAULT_PLACEMENT,
}

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
    return () => renderSlot(slots, 'default', { config: config?.value })
  },
})
export type ConfigProviderInstance = InstanceType<typeof ConfigProvider> &
  unknown

export default ConfigProvider
