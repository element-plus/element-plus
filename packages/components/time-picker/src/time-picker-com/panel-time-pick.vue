<template>
  <transition :name="transitionName">
    <div v-if="actualVisible || visible" :class="ns.b('panel')">
      <div :class="[ns.be('panel', 'content'), { 'has-seconds': showSeconds }]">
        <time-spinner
          ref="spinner"
          :role="datetimeRole || 'start'"
          :arrow-control="arrowControl"
          :show-seconds="showSeconds"
          :am-pm-mode="amPmMode"
          :spinner-date="(parsedValue as any)"
          :disabled-hours="disabledHours"
          :disabled-minutes="disabledMinutes"
          :disabled-seconds="disabledSeconds"
          @change="handleChange"
          @set-option="onSetOption"
          @select-range="setSelectionRange"
        />
      </div>
      <div :class="ns.be('panel', 'footer')">
        <button
          type="button"
          :class="[ns.be('panel', 'btn'), 'cancel']"
          @click="handleCancel"
        >
          {{ t('el.datepicker.cancel') }}
        </button>
        <button
          type="button"
          :class="[ns.be('panel', 'btn'), 'confirm']"
          @click="handleConfirm()"
        >
          {{ t('el.datepicker.confirm') }}
        </button>
      </div>
    </div>
  </transition>
</template>

<script lang="ts" setup>
import { computed, inject, ref } from 'vue'
import dayjs from 'dayjs'
import { EVENT_CODE } from '@element-plus/constants'
import { useLocale, useNamespace } from '@element-plus/hooks'
import { isUndefined } from '@element-plus/utils'
import { panelTimePickerProps } from '../props/panel-time-picker'
import { useTimePanel } from '../composables/use-time-panel'
import {
  buildAvailableTimeSlotGetter,
  useOldValue,
} from '../composables/use-time-picker'
import TimeSpinner from './basic-time-spinner.vue'

import type { Dayjs } from 'dayjs'

const props = defineProps(panelTimePickerProps)
const emit = defineEmits(['pick', 'select-range', 'set-picker-option'])

// Injections
const pickerBase = inject('EP_PICKER_BASE') as any
const {
  arrowControl,
  disabledHours,
  disabledMinutes,
  disabledSeconds,
  defaultValue,
} = pickerBase.props
const { getAvailableHours, getAvailableMinutes, getAvailableSeconds } =
  buildAvailableTimeSlotGetter(disabledHours, disabledMinutes, disabledSeconds)

const ns = useNamespace('time')
const { t, lang } = useLocale()
// data
const selectionRange = ref([0, 2])
const oldValue = useOldValue(props)
// computed
const transitionName = computed(() => {
  return isUndefined(props.actualVisible)
    ? `${ns.namespace.value}-zoom-in-top`
    : ''
})
const showSeconds = computed(() => {
  return props.format.includes('ss')
})
const amPmMode = computed(() => {
  if (props.format.includes('A')) return 'A'
  if (props.format.includes('a')) return 'a'
  return ''
})
// method
const isValidValue = (_date: Dayjs) => {
  const parsedDate = dayjs(_date).locale(lang.value)
  const result = getRangeAvailableTime(parsedDate)
  return parsedDate.isSame(result)
}
const handleCancel = () => {
  emit('pick', oldValue.value, false)
}
const handleConfirm = (visible = false, first = false) => {
  if (first) return
  emit('pick', props.parsedValue, visible)
}
const handleChange = (_date: Dayjs) => {
  // visible avoids edge cases, when use scrolls during panel closing animation
  if (!props.visible) {
    return
  }
  const result = getRangeAvailableTime(_date).millisecond(0)
  emit('pick', result, true)
}

const setSelectionRange = (start: number, end: number) => {
  emit('select-range', start, end)
  selectionRange.value = [start, end]
}

const changeSelectionRange = (step: number) => {
  const list = [0, 3].concat(showSeconds.value ? [6] : [])
  const mapping = ['hours', 'minutes'].concat(
    showSeconds.value ? ['seconds'] : []
  )
  const index = list.indexOf(selectionRange.value[0])
  const next = (index + step + list.length) % list.length
  timePickerOptions['start_emitSelectRange'](mapping[next])
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
    timePickerOptions['start_scrollDown'](step)
    event.preventDefault()
    return
  }
}

const { timePickerOptions, onSetOption, getAvailableTime } = useTimePanel({
  getAvailableHours,
  getAvailableMinutes,
  getAvailableSeconds,
})

const getRangeAvailableTime = (date: Dayjs) => {
  return getAvailableTime(date, props.datetimeRole || '', true)
}

const parseUserInput = (value: Dayjs) => {
  if (!value) return null
  return dayjs(value, props.format).locale(lang.value)
}

const formatToString = (value: Dayjs) => {
  if (!value) return null
  return value.format(props.format)
}

const getDefaultValue = () => {
  return dayjs(defaultValue).locale(lang.value)
}

emit('set-picker-option', ['isValidValue', isValidValue])
emit('set-picker-option', ['formatToString', formatToString])
emit('set-picker-option', ['parseUserInput', parseUserInput])
emit('set-picker-option', ['handleKeydownInput', handleKeydown])
emit('set-picker-option', ['getRangeAvailableTime', getRangeAvailableTime])
emit('set-picker-option', ['getDefaultValue', getDefaultValue])
</script>
