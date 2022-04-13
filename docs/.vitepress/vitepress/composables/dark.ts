import { useDark, useToggle } from '@vueuse/core'

export const isDark = useDark({
  storageKey: 'el-theme-appearance',
})

// TODO: remove when dark mode is ready
if (!import.meta.env.DEV) {
  isDark.value = false
}

export const toggleDark = useToggle(isDark)
