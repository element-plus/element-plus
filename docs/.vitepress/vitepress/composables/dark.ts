import { useDark, useToggle } from '@vueuse/core'

export const isDark =
  // @ts-expect-error when PROD is true, do not useDark
  import.meta.env.PROD ||
  useDark({
    storageKey: 'el-theme-appearance',
  })
// remove as boolean when dark mode is ok
export const toggleDark = useToggle(isDark as boolean)
