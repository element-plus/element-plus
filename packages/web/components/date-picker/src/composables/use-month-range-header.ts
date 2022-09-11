import { computed } from 'vue'
import { useLocale } from '@element-plus/hooks'
import type { Ref, ToRef } from 'vue'
import type { Dayjs } from 'dayjs'

export const useMonthRangeHeader = ({
  unlinkPanels,
  leftDate,
  rightDate,
}: {
  unlinkPanels: ToRef<boolean>
  leftDate: Ref<Dayjs>
  rightDate: Ref<Dayjs>
}) => {
  const { t } = useLocale()
  const leftPrevYear = () => {
    leftDate.value = leftDate.value.subtract(1, 'year')
    if (!unlinkPanels) {
      rightDate.value = rightDate.value.subtract(1, 'year')
    }
  }

  const rightNextYear = () => {
    if (!unlinkPanels) {
      leftDate.value = leftDate.value.add(1, 'year')
    }
    rightDate.value = rightDate.value.add(1, 'year')
  }

  const leftNextYear = () => {
    leftDate.value = leftDate.value.add(1, 'year')
  }

  const rightPrevYear = () => {
    rightDate.value = rightDate.value.subtract(1, 'year')
  }
  const leftLabel = computed(() => {
    return `${leftDate.value.year()} ${t('el.datepicker.year')}`
  })

  const rightLabel = computed(() => {
    return `${rightDate.value.year()} ${t('el.datepicker.year')}`
  })

  const leftYear = computed(() => {
    return leftDate.value.year()
  })

  const rightYear = computed(() => {
    return rightDate.value.year() === leftDate.value.year()
      ? leftDate.value.year() + 1
      : rightDate.value.year()
  })

  return {
    leftPrevYear,
    rightNextYear,
    leftNextYear,
    rightPrevYear,
    leftLabel,
    rightLabel,
    leftYear,
    rightYear,
  }
}
