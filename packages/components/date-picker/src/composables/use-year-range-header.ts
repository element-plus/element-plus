import { computed } from 'vue'
import { useLocale } from '@element-plus/hooks'
import type { Ref, ToRef } from 'vue'
import type { Dayjs } from 'dayjs'

export const useYearRangeHeader = ({
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
    leftDate.value = leftDate.value.subtract(10, 'year')
    if (!unlinkPanels.value) {
      rightDate.value = rightDate.value.subtract(10, 'year')
    }
  }

  const rightNextYear = () => {
    if (!unlinkPanels.value) {
      leftDate.value = leftDate.value.add(10, 'year')
    }
    rightDate.value = rightDate.value.add(10, 'year')
  }

  const leftNextYear = () => {
    leftDate.value = leftDate.value.add(10, 'year')
  }

  const rightPrevYear = () => {
    rightDate.value = rightDate.value.subtract(10, 'year')
  }
  const leftLabel = computed(() => {
    const yearTranslation = t('el.datepicker.year')

    const startYear = Math.floor(leftDate.value.year() / 10) * 10
    if (yearTranslation) {
      return `${startYear} ${yearTranslation} - ${
        startYear + 9
      } ${yearTranslation}`
    }

    return `${startYear} - ${startYear + 9}`
  })

  const rightLabel = computed(() => {
    const yearTranslation = t('el.datepicker.year')

    const startYear = Math.floor(rightDate.value.year() / 10) * 10
    if (yearTranslation) {
      return `${startYear} ${yearTranslation} - ${
        startYear + 9
      } ${yearTranslation}`
    }

    return `${startYear} - ${startYear + 9}`
  })

  const leftYear = computed(() => {
    return leftDate.value.year()
  })

  const rightYear = computed(() => {
    return rightDate.value.year() === leftDate.value.year()
      ? leftDate.value.year() + 10
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
