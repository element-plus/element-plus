import { getCurrentInstance, useAttrs, useSlots } from 'vue'
import dayjs from 'dayjs'
import { isFunction } from '@element-plus/utils'

import type { SetupContext } from 'vue'
import type { useLocale } from '@element-plus/hooks'
import type { RangePickerSharedEmits } from '../props/shared'

// FIXME: extract this to `date-picker.ts`
export type Shortcut = {
  text: string
  value: [Date, Date] | (() => [Date, Date])
  onClick?: (ctx: Omit<SetupContext<RangePickerSharedEmits>, 'expose'>) => void
}

export const useShortcut = (lang: ReturnType<typeof useLocale>['lang']) => {
  const { emit } = getCurrentInstance()!
  const attrs = useAttrs()
  const slots = useSlots()

  const handleShortcutClick = (shortcut: Shortcut) => {
    const shortcutValues = isFunction(shortcut.value)
      ? shortcut.value()
      : shortcut.value

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
