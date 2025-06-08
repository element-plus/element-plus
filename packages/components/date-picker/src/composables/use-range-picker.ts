import { getCurrentInstance, inject, ref, unref, watch } from 'vue'
import dayjs from 'dayjs'
import { isArray } from '@element-plus/utils'
import { useLocale, useNamespace } from '@element-plus/hooks'
import { getDefaultValue, isValidRange } from '../utils'
import { ROOT_PICKER_INJECTION_KEY } from '../constants'
import { useShortcut } from './use-shortcut'

import type { Ref } from 'vue'
import type { Dayjs } from 'dayjs'
import type { PanelRangeSharedProps, RangeState } from '../props/shared'
import type { DefaultValue } from '../utils'

type UseRangePickerProps = {
  onParsedValueChanged: (
    minDate: Dayjs | undefined,
    maxDate: Dayjs | undefined
  ) => void
  defaultValue: Ref<DefaultValue>
  defaultTime?: Ref<DefaultValue>
  leftDate: Ref<Dayjs>
  rightDate: Ref<Dayjs>
  step?: number
  unit: 'month' | 'year'
}

export const useRangePicker = (
  props: PanelRangeSharedProps,
  {
    defaultValue,
    defaultTime,
    leftDate,
    rightDate,
    step,
    unit,

    onParsedValueChanged,
  }: UseRangePickerProps
) => {
  const { emit } = getCurrentInstance()!

  const { pickerNs } = inject(ROOT_PICKER_INJECTION_KEY)!
  const drpNs = useNamespace('date-range-picker')
  const { t, lang } = useLocale()
  const handleShortcutClick = useShortcut(lang)
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

  const onReset = (parsedValue: PanelRangeSharedProps['parsedValue']) => {
    if (isArray(parsedValue) && parsedValue.length === 2) {
      const [start, end] = parsedValue
      minDate.value = start
      leftDate.value = start
      maxDate.value = end
      onParsedValueChanged(unref(minDate), unref(maxDate))
    } else {
      restoreDefault()
    }
  }

  const restoreDefault = () => {
    let [start, end] = getDefaultValue(unref(defaultValue), {
      lang: unref(lang),
      step,
      unit,
      unlinkPanels: props.unlinkPanels,
    })
    const getShift = (day: Dayjs) => {
      return day.diff(day.startOf('d'), 'ms')
    }
    const maybeTimes = unref(defaultTime)
    if (maybeTimes) {
      let leftShift = 0
      let rightShift = 0
      if (isArray(maybeTimes)) {
        const [timeStart, timeEnd] = maybeTimes.map(dayjs)
        leftShift = getShift(timeStart)
        rightShift = getShift(timeEnd)
      } else {
        const shift = getShift(dayjs(maybeTimes))
        leftShift = shift
        rightShift = shift
      }
      start = start.startOf('d').add(leftShift, 'ms')
      end = end.startOf('d').add(rightShift, 'ms')
    }

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

  watch(() => props.parsedValue, onReset, { immediate: true })

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
    onReset,
    t,
  }
}
