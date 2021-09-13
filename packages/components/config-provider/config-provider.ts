import { defineComponent } from 'vue'

import { useLocaleProps, useLocale } from '@element-plus/hooks'

export const ConfigProvider = defineComponent({
  name: 'ElConfigProvider',
  props: {
    ...useLocaleProps,
    // Add more configs
  },

  setup(_, { slots }) {
    useLocale()

    return () => slots.default?.()
  },
})
