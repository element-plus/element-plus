import { defineComponent, renderSlot, watch } from 'vue'
import { buildProps, definePropType } from '@element-plus/utils'
import { provideGlobalConfig } from '@element-plus/hooks'

import type { ExtractPropTypes } from 'vue'
import type { ExperimentalFeatures } from '@element-plus/tokens'
import type { Language } from '@element-plus/locale'
import type { ButtonConfigContext } from '@element-plus/components/button'
import type { MessageConfigContext } from '@element-plus/components/message'

export const messageConfig: MessageConfigContext = {}

export const configProviderProps = buildProps({
  // Controlling if the users want a11y features.
  a11y: {
    type: Boolean,
    default: true,
  },

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

  experimentalFeatures: {
    type: definePropType<ExperimentalFeatures>(Object),
  },

  // Controls if we should handle keyboard navigation
  keyboardNavigation: {
    type: Boolean,
    default: true,
  },

  message: {
    type: definePropType<MessageConfigContext>(Object),
  },

  zIndex: {
    type: Number,
  },

  namespace: {
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
    const config = provideGlobalConfig(props)
    return () => renderSlot(slots, 'default', { config: config?.value })
  },
})

export type ConfigProviderProps = ExtractPropTypes<typeof configProviderProps>
