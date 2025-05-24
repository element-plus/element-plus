import { computed, inject, nextTick, ref } from 'vue'
import { useLocale } from '@element-plus/hooks'
import { PICKER_BASE_INJECTION_KEY } from '@element-plus/components/time-picker'
import { getValidDateOfMonth, getValidDateOfYear } from '../utils'

import type { PanelDateRangeProps } from '../props/panel-date-range'
import type { Dayjs } from 'dayjs'
import type { ComputedRef, Ref } from 'vue'

type CurrentView = 'date' | 'year' | 'month'
type CurrentViewRef = { focus: () => void }

export type Emits = (
  event: 'pick' | 'set-picker-option' | 'calendar-change' | 'panel-change',
  ...args: any[]
) => void

export const usePanelDateRange = (
  props: PanelDateRangeProps,
  emit: Emits,
  leftDate: Ref<Dayjs>,
  rightDate: Ref<Dayjs>
) => {
  const leftCurrentView = ref<CurrentView>('date')
  const leftCurrentViewRef = ref<CurrentViewRef>()
  const rightCurrentView = ref<CurrentView>('date')
  const rightCurrentViewRef = ref<CurrentViewRef>()
  const pickerBase = inject(PICKER_BASE_INJECTION_KEY) as any
  const { disabledDate } = pickerBase.props
  const { t, lang } = useLocale()

  const leftYear = computed(() => {
    return leftDate.value.year()
  })
  const leftMonth = computed(() => {
    return leftDate.value.month()
  })

  const rightYear = computed(() => {
    return rightDate.value.year()
  })
  const rightMonth = computed(() => {
    return rightDate.value.month()
  })

  function computedYearLabel(
    currentView: Ref<CurrentView>,
    yearValue: ComputedRef<number>
  ) {
    const yearTranslation = t('el.datepicker.year')
    if (currentView.value === 'year') {
      const startYear = Math.floor(yearValue.value! / 10) * 10
      return yearTranslation
        ? `${startYear} ${yearTranslation} - ${
            startYear + 9
          } ${yearTranslation}`
        : `${startYear} - ${startYear + 9}`
    }
    return `${yearValue.value} ${yearTranslation}`
  }

  function focusPicker(currentViewRef?: CurrentViewRef) {
    currentViewRef?.focus()
  }

  async function showPicker(
    pickerType: 'left' | 'right',
    view: 'month' | 'year'
  ) {
    const currentView =
      pickerType === 'left' ? leftCurrentView : rightCurrentView
    const currentViewRef =
      pickerType === 'left' ? leftCurrentViewRef : rightCurrentViewRef
    currentView.value = view
    await nextTick()
    focusPicker(currentViewRef.value)
  }

  async function handlePick(
    mode: 'month' | 'year',
    pickerType: 'left' | 'right',
    value: number
  ) {
    const isLeftPicker = pickerType === 'left'
    const startDate = isLeftPicker ? leftDate : rightDate
    const endDate = isLeftPicker ? rightDate : leftDate
    const currentView = isLeftPicker ? leftCurrentView : rightCurrentView
    const currentViewRef = isLeftPicker
      ? leftCurrentViewRef
      : rightCurrentViewRef

    if (mode === 'year') {
      const data = startDate.value.year(value)
      startDate.value = getValidDateOfYear(data, lang.value, disabledDate)
    }

    if (mode === 'month') {
      startDate.value = getValidDateOfMonth(
        startDate.value,
        startDate.value.year(),
        value,
        lang.value,
        disabledDate
      )
    }

    if (!props.unlinkPanels) {
      endDate.value =
        pickerType === 'left'
          ? startDate.value.add(1, 'month')
          : startDate.value.subtract(1, 'month')
    }

    currentView.value = mode === 'year' ? 'month' : 'date'
    await nextTick()
    focusPicker(currentViewRef.value)
    handlePanelChange(mode)
  }

  function handlePanelChange(mode: 'month' | 'year') {
    emit(
      'panel-change',
      [leftDate.value.toDate(), rightDate.value.toDate()],
      mode
    )
  }

  function adjustDateByView(
    currentView: CurrentView,
    date: Dayjs,
    forward: boolean
  ) {
    const action = forward ? 'add' : 'subtract'
    return currentView === 'year'
      ? date[action](10, 'year')
      : date[action](1, 'year')
  }

  return {
    leftCurrentView,
    rightCurrentView,
    leftCurrentViewRef,
    rightCurrentViewRef,
    leftYear,
    rightYear,
    leftMonth,
    rightMonth,
    leftYearLabel: computed(() => computedYearLabel(leftCurrentView, leftYear)),
    rightYearLabel: computed(() =>
      computedYearLabel(rightCurrentView, rightYear)
    ),
    showLeftPicker: (view: 'month' | 'year') => showPicker('left', view),
    showRightPicker: (view: 'month' | 'year') => showPicker('right', view),
    handleLeftYearPick: (year: number) => handlePick('year', 'left', year),
    handleRightYearPick: (year: number) => handlePick('year', 'right', year),
    handleLeftMonthPick: (month: number) => handlePick('month', 'left', month),
    handleRightMonthPick: (month: number) =>
      handlePick('month', 'right', month),
    handlePanelChange,
    adjustDateByView,
  }
}
