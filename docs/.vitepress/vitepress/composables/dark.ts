import { useDark, useToggle } from '@vueuse/core'

export const isDark = useDark({
  storageKey: 'el-theme-appearance',
})

export const toggleDark = useToggle(isDark)
