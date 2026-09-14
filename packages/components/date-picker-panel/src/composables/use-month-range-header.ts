import { computed, ref } from 'vue'
import { useLocale } from '@element-plus/hooks'

import type { ComputedRef, Ref } from 'vue'
import type { Dayjs } from 'dayjs'
import type { PanelMonthRangeProps } from '../props/panel-month-range'

type CurrentView = 'month' | 'year'

export const useMonthRangeHeader = ({
  props,
  leftDate,
  rightDate,
}: {
  props: PanelMonthRangeProps
  leftDate: Ref<Dayjs>
  rightDate: Ref<Dayjs>
}) => {
  const { t } = useLocale()
  const leftCurrentView = ref<CurrentView>('month')
  const rightCurrentView = ref<CurrentView>('month')

  const leftYearIncr = computed(() =>
    leftCurrentView.value === 'month' ? 1 : 10
  )
  const rightYearIncr = computed(() =>
    rightCurrentView.value === 'month' ? 1 : 10
  )

  const leftPrevYear = () => {
    leftDate.value = leftDate.value.subtract(leftYearIncr.value, 'year')
    if (!props.unlinkPanels) {
      rightDate.value = rightDate.value.subtract(leftYearIncr.value, 'year')
    }
  }

  const rightNextYear = () => {
    if (!props.unlinkPanels) {
      leftDate.value = leftDate.value.add(rightYearIncr.value, 'year')
    }
    rightDate.value = rightDate.value.add(rightYearIncr.value, 'year')
  }

  const leftNextYear = () => {
    leftDate.value = leftDate.value.add(leftYearIncr.value, 'year')
  }

  const rightPrevYear = () => {
    rightDate.value = rightDate.value.subtract(rightYearIncr.value, 'year')
  }

  function getLabel(
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

  const leftYear = computed(() => {
    return leftDate.value.year()
  })

  const rightYear = computed(() => {
    return rightDate.value.year() === leftDate.value.year()
      ? leftDate.value.year() + 1
      : rightDate.value.year()
  })

  const leftLabel = computed(() => {
    return getLabel(leftCurrentView, leftYear)
  })

  const rightLabel = computed(() => {
    return getLabel(rightCurrentView, rightYear)
  })

  const togglePicker = (pickerType: 'left' | 'right') => {
    if (props.disabled) return
    const currentView =
      pickerType === 'left' ? leftCurrentView : rightCurrentView
    currentView.value = currentView.value === 'year' ? 'month' : 'year'
  }

  return {
    leftCurrentView,
    rightCurrentView,
    leftPrevYear,
    rightNextYear,
    leftNextYear,
    rightPrevYear,
    togglePicker,
    leftLabel,
    rightLabel,
    leftYear,
    rightYear,
  }
}
