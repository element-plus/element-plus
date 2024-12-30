import { useDark, useToggle } from '@vueuse/core'

export const isDark = useDark({
  storageKey: 'vitepress-theme-appearance',
})

export const toggleDark = useToggle(isDark)
