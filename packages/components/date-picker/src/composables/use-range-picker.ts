import { getCurrentInstance, inject, ref, unref, useAttrs, useSlots } from 'vue'
import dayjs from 'dayjs'
import { isFunction } from '@element-plus/utils'
import { ROOT_PICKER_INJECTION_KEY } from '@element-plus/tokens'
import { useLocale, useNamespace } from '@element-plus/hooks'

import { isValidRange } from '../utils'

import type { SetupContext } from 'vue'
import type { Dayjs } from 'dayjs'
import type { RangePickerSharedEmits, RangeState } from '../props/shared'

// FIXME: extract this to `date-picker.ts`
type Shortcut = {
  text: string
  value: [Date, Date] | (() => [Date, Date])
  onClick?: (ctx: Omit<SetupContext<RangePickerSharedEmits>, 'expose'>) => void
}

export const useRangePicker = () => {
  const { emit } = getCurrentInstance()!
  const attrs = useAttrs()
  const slots = useSlots()

  const { pickerNs } = inject(ROOT_PICKER_INJECTION_KEY)!
  const drpNs = useNamespace('date-range-picker')
  const { t, lang } = useLocale()
  const minDate = ref<Dayjs>()
  const maxDate = ref<Dayjs>()
  const rangeState = ref<RangeState>({
    endDate: null,
    selecting: false,
  })

  const handleChangeRange = (val: RangeState) => {
    rangeState.value = val
  }

  const handleRangeConfirm = (visible = false) => {
    const _minDate = unref(minDate)
    const _maxDate = unref(maxDate)

    if (isValidRange([_minDate, _maxDate])) {
      emit('pick', [_minDate, _maxDate], visible)
    }
  }

  const onSelect = (selecting: boolean) => {
    rangeState.value.selecting = selecting
    if (!selecting) {
      rangeState.value.endDate = null
    }
  }

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

  return {
    minDate,
    maxDate,
    rangeState,
    lang,
    ppNs: pickerNs,
    drpNs,

    handleChangeRange,
    handleRangeConfirm,
    handleShortcutClick,
    onSelect,
    t,
  }
}
