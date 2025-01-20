import { ComputedRef, Ref, computed, inject, nextTick, ref } from 'vue'
import {
  getValidDateOfMonth,
  getValidDateOfYear,
} from '@element-plus/components/date-picker/src/utils'
import { PanelDateRangeProps } from '@element-plus/components/date-picker/src/props/panel-date-range'
import { Translator, useLocale } from '@element-plus/hooks'
import type { Dayjs } from 'dayjs'
import type {
  MonthsPickerEmits,
  YearsPickerEmits,
} from '@element-plus/components/date-picker/src/props/basic-date-table'

type CurrentView = 'date' | 'year' | 'month'
type CurrentViewRef = { focus: () => void }

export type Emits = {
  (e: 'pick', value: any): void
  (e: 'set-picker-option', value: any): void
  (e: 'calendar-change', value: any): void
  (e: 'panel-change', value: any, mode: string): void
}

export const usePanelDateRange = (
  props: PanelDateRangeProps,
  emit: Emits,
  leftDate: Ref<Dayjs>,
  rightDate: Ref<Dayjs>,
  t: Translator
) => {
  const leftCurrentView = ref<CurrentView>('date')
  const leftCurrentViewRef = ref<CurrentViewRef>()
  const rightCurrentView = ref<CurrentView>('date')
  const rightCurrentViewRef = ref<CurrentViewRef>()
  const pickerBase = inject('EP_PICKER_BASE') as any
  const { disabledDate } = pickerBase.props
  const { lang } = useLocale()

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

  const computedYearLabel = (
    currentView: Ref<CurrentView>,
    yearValue: ComputedRef<number>
  ) => {
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

  const focusPicker = (currentViewRef?: CurrentViewRef) => {
    currentViewRef?.focus()
  }

  const showPicker = async (
    pickerType: 'left' | 'right',
    view: 'month' | 'year'
  ) => {
    const currentView =
      pickerType === 'left' ? leftCurrentView : rightCurrentView
    const currentViewRef =
      pickerType === 'left' ? leftCurrentViewRef : rightCurrentViewRef
    currentView.value = view
    await nextTick()
    focusPicker(currentViewRef.value)
  }

  const adjustDate = (
    type: 'left' | 'right',
    startDate: Ref<Dayjs>,
    endDate: Ref<Dayjs>
  ) => {
    if (!props.unlinkPanels) {
      endDate.value =
        type === 'left'
          ? startDate.value.add(1, 'month')
          : startDate.value.subtract(1, 'month')
    }
  }

  const yearPick = async (
    pickerType: 'left' | 'right',
    year: number | YearsPickerEmits
  ) => {
    const startDate = pickerType === 'left' ? leftDate : rightDate
    const endDate = pickerType === 'left' ? rightDate : leftDate
    const currentView =
      pickerType === 'left' ? leftCurrentView : rightCurrentView
    const currentViewRef =
      pickerType === 'left' ? leftCurrentViewRef : rightCurrentViewRef

    const data = startDate.value.year(year as number)
    startDate.value = getValidDateOfYear(data, lang.value, disabledDate)
    adjustDate(pickerType, startDate, endDate)

    currentView.value = 'month'
    await nextTick()
    focusPicker(currentViewRef.value)
    handlePanelChange('year')
  }

  const monthPick = async (
    pickerType: 'left' | 'right',
    month: number | MonthsPickerEmits
  ) => {
    const startDate = pickerType === 'left' ? leftDate : rightDate
    const endDate = pickerType === 'left' ? rightDate : leftDate
    const currentView =
      pickerType === 'left' ? leftCurrentView : rightCurrentView
    const currentViewRef =
      pickerType === 'left' ? leftCurrentViewRef : rightCurrentViewRef
    startDate.value = getValidDateOfMonth(
      startDate.value.year(),
      month as number,
      lang.value,
      disabledDate
    )
    adjustDate(pickerType, startDate, endDate)

    currentView.value = 'date'
    await nextTick()
    focusPicker(currentViewRef.value)
    handlePanelChange('year')
  }

  function handlePanelChange(mode: 'month' | 'year') {
    emit(
      'panel-change',
      [leftDate.value.toDate(), rightDate.value.toDate()],
      mode
    )
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
    handleLeftYearPick: (year: number | YearsPickerEmits) =>
      yearPick('left', year),
    handleRightYearPick: (year: number | YearsPickerEmits) =>
      yearPick('right', year),
    handleLeftMonthPick: (month: number | MonthsPickerEmits) =>
      monthPick('left', month),
    handleRightMonthPick: (month: number | MonthsPickerEmits) =>
      monthPick('right', month),
    handlePanelChange,
  }
}
