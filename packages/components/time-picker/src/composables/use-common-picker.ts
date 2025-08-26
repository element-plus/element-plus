import { computed, ref } from 'vue'
import { isEqual } from 'lodash-unified'
import { useLocale } from '@element-plus/hooks/use-locale'
import { isArray } from '@element-plus/utils'
import { UPDATE_MODEL_EVENT } from '@element-plus/constants'
import { dayOrDaysToDate, formatter, parseDate, valueEquals } from '../utils'

import type { Dayjs } from 'dayjs'
import type {
  DateModelType,
  DayOrDays,
  ModelValueType,
  PickerOptions,
  SingleOrRange,
  UserInput,
} from '../common/props'

interface CommonPickerProps {
  modelValue: ModelValueType | null
  valueFormat?: string
}
type CommonPickerEmits = (
  event: 'update:modelValue' | 'calendar-change' | 'panel-change',
  ...args: any[]
) => void

export const useCommonPicker = <
  P extends CommonPickerProps,
  E extends CommonPickerEmits
>(
  props: P,
  emit: E
) => {
  const { lang } = useLocale()
  const pickerVisible = ref(false)
  const pickerActualVisible = ref(false)
  const userInput = ref<UserInput>(null)

  const valueIsEmpty = computed(() => {
    const { modelValue } = props
    return (
      !modelValue || (isArray(modelValue) && !modelValue.filter(Boolean).length)
    )
  })

  const emitInput = (input: SingleOrRange<DateModelType> | null) => {
    if (!valueEquals(props.modelValue, input)) {
      let formatted
      if (isArray(input)) {
        formatted = input.map((item) =>
          formatter(item, props.valueFormat, lang.value)
        )
      } else if (input) {
        formatted = formatter(input, props.valueFormat, lang.value)
      }
      if (!formatted || !valueEquals(props.modelValue, formatted)) {
        const emitVal = input ? formatted : input
        emit(UPDATE_MODEL_EVENT, emitVal, lang.value)
      }
    }
  }

  const parsedValue = computed(() => {
    let dayOrDays: DayOrDays
    if (valueIsEmpty.value) {
      if (pickerOptions.value.getDefaultValue) {
        dayOrDays = pickerOptions.value.getDefaultValue()
      }
    } else {
      if (isArray(props.modelValue)) {
        dayOrDays = props.modelValue.map((d) =>
          parseDate(d, props.valueFormat, lang.value)
        ) as [Dayjs, Dayjs]
      } else {
        dayOrDays = parseDate(
          props.modelValue ?? '',
          props.valueFormat,
          lang.value
        )!
      }
    }

    if (pickerOptions.value.getRangeAvailableTime) {
      const availableResult = pickerOptions.value.getRangeAvailableTime(
        dayOrDays!
      )
      if (!isEqual(availableResult, dayOrDays!)) {
        dayOrDays = availableResult

        // The result is corrected only when model-value exists
        if (!valueIsEmpty.value) {
          emitInput(dayOrDaysToDate(dayOrDays))
        }
      }
    }
    if (isArray(dayOrDays!) && dayOrDays.some((day) => !day)) {
      dayOrDays = [] as unknown as DayOrDays
    }
    return dayOrDays!
  })

  const pickerOptions = ref<Partial<PickerOptions>>({})

  const onSetPickerOption = <T extends keyof PickerOptions>(
    e: [T, PickerOptions[T]]
  ) => {
    pickerOptions.value[e[0]] = e[1]
    pickerOptions.value.panelReady = true
  }

  const onCalendarChange = (e: [Date, null | Date]) => {
    emit('calendar-change', e)
  }

  const onPanelChange = (
    value: [Dayjs, Dayjs],
    mode: 'month' | 'year',
    view: unknown
  ) => {
    emit('panel-change', value, mode, view)
  }

  const onPick = (date: any = '', visible = false) => {
    pickerVisible.value = visible
    let result
    if (isArray(date)) {
      result = date.map((_) => _.toDate())
    } else {
      // clear btn emit null
      result = date ? date.toDate() : date
    }
    userInput.value = null
    emitInput(result)
  }

  return {
    parsedValue,
    pickerActualVisible,
    pickerOptions,
    pickerVisible,
    userInput,
    valueIsEmpty,
    emitInput,
    onCalendarChange,
    onPanelChange,
    onPick,
    onSetPickerOption,
  }
}

export type CommonPickerContext = ReturnType<typeof useCommonPicker>
