import { defineComponent, renderSlot, watch, ref } from 'vue'
import { buildProps, definePropType } from '@element-plus/utils/props'
import { provideGlobalConfig } from '@element-plus/hooks'
import type { Ref } from 'vue'
import type { Language } from '@element-plus/locale'
import type { ButtonConfigContext } from '@element-plus/components/button'
import type { MessageConfigContext } from '@element-plus/components/message'

export const messageConfig: MessageConfigContext = {}

export const prefixClass: Ref<string> = ref('el')

export const configProviderProps = buildProps({
  locale: {
    type: definePropType<Language>(Object),
  },

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

  prefixClass: {
    type: String,
    default: 'el',
  },
} as const)

export default defineComponent({
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
    watch(
      () => props.prefixClass,
      (val) => {
        prefixClass.value = val
      },
      { immediate: true }
    )

    const config = provideGlobalConfig(props)
    return () => renderSlot(slots, 'default', { config: config?.value })
  },
})
