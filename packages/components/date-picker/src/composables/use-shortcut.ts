import { getCurrentInstance, useAttrs, useSlots } from 'vue'
import dayjs from 'dayjs'
import { isFunction } from '@element-plus/utils'
import { Shortcut } from '@element-plus/components/time-picker'

import type { useLocale } from '@element-plus/hooks'

export const useShortcut = (lang: ReturnType<typeof useLocale>['lang']) => {
  const { emit } = getCurrentInstance()!
  const attrs = useAttrs()
  const slots = useSlots()

  const handleShortcutClick = (shortcut: Shortcut) => {
    const shortcutValues = (
      isFunction(shortcut.value) ? shortcut.value() : shortcut.value
    ) as [Date, Date]

    if (shortcutValues) {
      emit('pick', [
        dayjs(shortcutValues[0]).locale(lang.value),
        dayjs(shortcutValues[1]).locale(lang.value),
      ])
      return
    }
    if (shortcut.onClick) {
      shortcut.onClick({
        attrs,
        slots,
        emit,
      })
    }
  }

  return handleShortcutClick
}
