import { provide, defineComponent, watch } from 'vue'
import { buildProps, definePropType } from '@element-plus/utils/props'
import { useLocaleProps, provideLocale } from '@element-plus/hooks'
import { configProviderContextKey } from '@element-plus/tokens'
import { PopupManager } from '@element-plus/utils/popup-manager'
import { isNumber } from '@element-plus/utils/util'
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
    provide(configProviderContextKey, props)

    watch(
      () => props.zIndex,
      () => {
        if (isNumber(props.zIndex))
          PopupManager.globalInitialZIndex = props.zIndex
      },
      { immediate: true }
    )

    return () => slots.default?.()
  },
})
