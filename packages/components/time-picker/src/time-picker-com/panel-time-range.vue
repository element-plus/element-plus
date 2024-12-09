<template>
  <div
    v-if="actualVisible"
    :class="[nsTime.b('range-picker'), nsPicker.b('panel')]"
  >
    <div :class="nsTime.be('range-picker', 'content')">
      <div :class="nsTime.be('range-picker', 'cell')">
        <div :class="nsTime.be('range-picker', 'header')">
          {{ t('el.datepicker.startTime') }}
        </div>
        <div :class="startContainerKls">
          <time-spinner
            ref="minSpinner"
            role="start"
            :show-seconds="showSeconds"
            :am-pm-mode="amPmMode"
            :arrow-control="arrowControl"
            :spinner-date="startTime"
            :disabled-hours="disabledHours_"
            :disabled-minutes="disabledMinutes_"
            :disabled-seconds="disabledSeconds_"
            @change="handleMinChange"
            @set-option="onSetOption"
            @select-range="setMinSelectionRange"
          />
        </div>
      </div>
      <div :class="nsTime.be('range-picker', 'cell')">
        <div :class="nsTime.be('range-picker', 'header')">
          {{ t('el.datepicker.endTime') }}
        </div>
        <div :class="endContainerKls">
          <time-spinner
            ref="maxSpinner"
            role="end"
            :show-seconds="showSeconds"
            :am-pm-mode="amPmMode"
            :arrow-control="arrowControl"
            :spinner-date="endTime"
            :disabled-hours="disabledHours_"
            :disabled-minutes="disabledMinutes_"
            :disabled-seconds="disabledSeconds_"
            @change="handleMaxChange"
            @set-option="onSetOption"
            @select-range="setMaxSelectionRange"
          />
        </div>
      </div>
    </div>
    <div :class="nsTime.be('panel', 'footer')">
      <button
        type="button"
        :class="[nsTime.be('panel', 'btn'), 'cancel']"
        @click="handleCancel()"
      >
        {{ t('el.datepicker.cancel') }}
      </button>
      <button
        type="button"
        :class="[nsTime.be('panel', 'btn'), 'confirm']"
        :disabled="btnConfirmDisabled"
        @click="handleConfirm()"
      >
        {{ t('el.datepicker.confirm') }}
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, inject, ref, unref } from 'vue'
import dayjs from 'dayjs'
import { union } from 'lodash-unified'
import { useLocale, useNamespace } from '@element-plus/hooks'
import { isArray } from '@element-plus/utils'
import { EVENT_CODE } from '@element-plus/constants'
import { panelTimeRangeProps } from '../props/panel-time-range'
import { useTimePanel } from '../composables/use-time-panel'
import {
  buildAvailableTimeSlotGetter,
  useOldValue,
} from '../composables/use-time-picker'
import TimeSpinner from './basic-time-spinner.vue'

import type { Dayjs } from 'dayjs'

const props = defineProps(panelTimeRangeProps)
const emit = defineEmits(['pick', 'select-range', 'set-picker-option'])

const makeSelectRange = (start: number, end: number) => {
  const result: number[] = []
  for (let i = start; i <= end; i++) {
    result.push(i)
  }
  return result
}

const { t, lang } = useLocale()
const nsTime = useNamespace('time')
const nsPicker = useNamespace('picker')
const pickerBase = inject('EP_PICKER_BASE') as any
const {
  arrowControl,
  disabledHours,
  disabledMinutes,
  disabledSeconds,
  defaultValue,
} = pickerBase.props

const startContainerKls = computed(() => [
  nsTime.be('range-picker', 'body'),
  nsTime.be('panel', 'content'),
  nsTime.is('arrow', arrowControl),
  showSeconds.value ? 'has-seconds' : '',
])
const endContainerKls = computed(() => [
  nsTime.be('range-picker', 'body'),
  nsTime.be('panel', 'content'),
  nsTime.is('arrow', arrowControl),
  showSeconds.value ? 'has-seconds' : '',
])

const startTime = computed(() => props.parsedValue![0])
const endTime = computed(() => props.parsedValue![1])
const oldValue = useOldValue(props)
const handleCancel = () => {
  emit('pick', oldValue.value, false)
}
const showSeconds = computed(() => {
  return props.format.includes('ss')
})
const amPmMode = computed(() => {
  if (props.format.includes('A')) return 'A'
  if (props.format.includes('a')) return 'a'
  return ''
})

const handleConfirm = (visible = false) => {
  emit('pick', [startTime.value, endTime.value], visible)
}

const handleMinChange = (date: Dayjs) => {
  handleChange(date.millisecond(0), endTime.value)
}
const handleMaxChange = (date: Dayjs) => {
  handleChange(startTime.value, date.millisecond(0))
}

const isValidValue = (_date: Dayjs[]) => {
  const parsedDate = _date.map((_) => dayjs(_).locale(lang.value))
  const result = getRangeAvailableTime(parsedDate)
  return parsedDate[0].isSame(result[0]) && parsedDate[1].isSame(result[1])
}

const handleChange = (start: Dayjs, end: Dayjs) => {
  if (!props.visible) {
    return
  }
  // todo getRangeAvailableTime(_date).millisecond(0)
  emit('pick', [start, end], true)
}
const btnConfirmDisabled = computed(() => {
  return startTime.value > endTime.value
})

const selectionRange = ref([0, 2])
const setMinSelectionRange = (start: number, end: number) => {
  emit('select-range', start, end, 'min')
  selectionRange.value = [start, end]
}

const offset = computed(() => (showSeconds.value ? 11 : 8))
const setMaxSelectionRange = (start: number, end: number) => {
  emit('select-range', start, end, 'max')
  const _offset = unref(offset)
  selectionRange.value = [start + _offset, end + _offset]
}

const changeSelectionRange = (step: number) => {
  const list = showSeconds.value ? [0, 3, 6, 11, 14, 17] : [0, 3, 8, 11]
  const mapping = ['hours', 'minutes'].concat(
    showSeconds.value ? ['seconds'] : []
  )
  const index = list.indexOf(selectionRange.value[0])
  const next = (index + step + list.length) % list.length
  const half = list.length / 2
  if (next < half) {
    timePickerOptions['start_emitSelectRange'](mapping[next])
  } else {
    timePickerOptions['end_emitSelectRange'](mapping[next - half])
  }
}

const handleKeydown = (event: KeyboardEvent) => {
  const code = event.code

  const { left, right, up, down } = EVENT_CODE

  if ([left, right].includes(code)) {
    const step = code === left ? -1 : 1
    changeSelectionRange(step)
    event.preventDefault()
    return
  }

  if ([up, down].includes(code)) {
    const step = code === up ? -1 : 1
    const role = selectionRange.value[0] < offset.value ? 'start' : 'end'
    timePickerOptions[`${role}_scrollDown`](step)
    event.preventDefault()
    return
  }
}

const disabledHours_ = (role: string, compare?: Dayjs) => {
  const defaultDisable = disabledHours ? disabledHours(role) : []
  const isStart = role === 'start'
  const compareDate = compare || (isStart ? endTime.value : startTime.value)
  const compareHour = compareDate.hour()
  const nextDisable = isStart
    ? makeSelectRange(compareHour + 1, 23)
    : makeSelectRange(0, compareHour - 1)
  return union(defaultDisable, nextDisable)
}
const disabledMinutes_ = (hour: number, role: string, compare?: Dayjs) => {
  const defaultDisable = disabledMinutes ? disabledMinutes(hour, role) : []
  const isStart = role === 'start'
  const compareDate = compare || (isStart ? endTime.value : startTime.value)
  const compareHour = compareDate.hour()
  if (hour !== compareHour) {
    return defaultDisable
  }
  const compareMinute = compareDate.minute()
  const nextDisable = isStart
    ? makeSelectRange(compareMinute + 1, 59)
    : makeSelectRange(0, compareMinute - 1)
  return union(defaultDisable, nextDisable)
}
const disabledSeconds_ = (
  hour: number,
  minute: number,
  role: string,
  compare?: Dayjs
) => {
  const defaultDisable = disabledSeconds
    ? disabledSeconds(hour, minute, role)
    : []
  const isStart = role === 'start'
  const compareDate = compare || (isStart ? endTime.value : startTime.value)
  const compareHour = compareDate.hour()
  const compareMinute = compareDate.minute()
  if (hour !== compareHour || minute !== compareMinute) {
    return defaultDisable
  }
  const compareSecond = compareDate.second()
  const nextDisable = isStart
    ? makeSelectRange(compareSecond + 1, 59)
    : makeSelectRange(0, compareSecond - 1)
  return union(defaultDisable, nextDisable)
}

const getRangeAvailableTime = ([start, end]: Array<Dayjs>) => {
  return [
    getAvailableTime(start, 'start', true, end),
    getAvailableTime(end, 'end', false, start),
  ] as const
}

const { getAvailableHours, getAvailableMinutes, getAvailableSeconds } =
  buildAvailableTimeSlotGetter(
    disabledHours_,
    disabledMinutes_,
    disabledSeconds_
  )

const {
  timePickerOptions,

  getAvailableTime,
  onSetOption,
} = useTimePanel({
  getAvailableHours,
  getAvailableMinutes,
  getAvailableSeconds,
})

const parseUserInput = (days: Dayjs[] | Dayjs) => {
  if (!days) return null
  if (isArray(days)) {
    return days.map((d) => dayjs(d, props.format).locale(lang.value))
  }
  return dayjs(days, props.format).locale(lang.value)
}

const formatToString = (days: Dayjs[] | Dayjs) => {
  if (!days) return null
  if (isArray(days)) {
    return days.map((d) => d.format(props.format))
  }
  return days.format(props.format)
}

const getDefaultValue = () => {
  if (isArray(defaultValue)) {
    return defaultValue.map((d: Date) => dayjs(d).locale(lang.value))
  }
  const defaultDay = dayjs(defaultValue).locale(lang.value)
  return [defaultDay, defaultDay.add(60, 'm')]
}

emit('set-picker-option', ['formatToString', formatToString])
emit('set-picker-option', ['parseUserInput', parseUserInput])
emit('set-picker-option', ['isValidValue', isValidValue])
emit('set-picker-option', ['handleKeydownInput', handleKeydown])
emit('set-picker-option', ['getDefaultValue', getDefaultValue])
emit('set-picker-option', ['getRangeAvailableTime', getRangeAvailableTime])
</script>
