import {
  getCurrentInstance,
  inject,
  ref,
  unref,
  useAttrs,
  useSlots,
  watch,
} from 'vue'
import dayjs from 'dayjs'
import { isArray, isFunction } from '@element-plus/utils'
import { ROOT_PICKER_INJECTION_KEY } from '@element-plus/tokens'
import { useLocale, useNamespace } from '@element-plus/hooks'

import { getDefaultValue, isValidRange } from '../utils'

import type { Ref, SetupContext } from 'vue'
import type { Dayjs } from 'dayjs'
import type {
  PanelRangeSharedProps,
  RangePickerSharedEmits,
  RangeState,
} from '../props/shared'
import type { DefaultValue } from '../utils'

// FIXME: extract this to `date-picker.ts`
type Shortcut = {
  text: string
  value: [Date, Date] | (() => [Date, Date])
  onClick?: (ctx: Omit<SetupContext<RangePickerSharedEmits>, 'expose'>) => void
}

type UseRangePickerProps = {
  onParsedValueChanged: (
    minDate: Dayjs | undefined,
    maxDate: Dayjs | undefined
  ) => void
  defaultValue: Ref<DefaultValue>
  leftDate: Ref<Dayjs>
  rightDate: Ref<Dayjs>
  unit: 'month' | 'year'
}

export const useRangePicker = (
  props: PanelRangeSharedProps,
  {
    defaultValue,
    leftDate,
    rightDate,
    unit,

    onParsedValueChanged,
  }: UseRangePickerProps
) => {
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

  const restoreDefault = () => {
    const [start, end] = getDefaultValue(unref(defaultValue), {
      lang: unref(lang),
      unit,
      unlinkPanels: props.unlinkPanels,
    })
    minDate.value = undefined
    maxDate.value = undefined
    leftDate.value = start
    rightDate.value = end
  }

  watch(
    defaultValue,
    (val) => {
      if (val) {
        restoreDefault()
      }
    },
    { immediate: true }
  )

  watch(
    () => props.parsedValue,
    (parsedValue) => {
      if (isArray(parsedValue) && parsedValue.length === 2) {
        const [start, end] = parsedValue
        minDate.value = start
        leftDate.value = start
        maxDate.value = end
        onParsedValueChanged(unref(minDate), unref(maxDate))
      } else {
        restoreDefault()
      }
    },
    { immediate: true }
  )

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
