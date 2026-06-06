<template>
  <el-select
    ref="select"
    :name="name"
    :model-value="value"
    :disabled="_disabled"
    :clearable="clearable"
    :clear-icon="clearIcon"
    :size="size"
    :effect="effect"
    :placeholder="placeholder"
    default-first-option
    :filterable="editable"
    :empty-values="emptyValues"
    :value-on-clear="valueOnClear"
    :popper-class="popperClass"
    :popper-style="popperStyle"
    @update:model-value="(event) => $emit(UPDATE_MODEL_EVENT, event)"
    @change="(event) => $emit(CHANGE_EVENT, event)"
    @blur="(event) => $emit('blur', event)"
    @focus="(event) => $emit('focus', event)"
    @clear="() => $emit('clear')"
  >
    <el-option
      v-for="item in items"
      :key="item.value"
      :label="item.value"
      :value="item.value"
      :disabled="item.disabled"
    />
    <template #prefix>
      <el-icon v-if="prefixIcon" :class="nsInput.e('prefix-icon')">
        <component :is="prefixIcon" />
      </el-icon>
    </template>
  </el-select>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue'
import dayjs from 'dayjs'
import customParseFormat from 'dayjs/plugin/customParseFormat.js'
import ElSelect from '@element-plus/components/select'
import { useFormDisabled } from '@element-plus/components/form'
import ElIcon from '@element-plus/components/icon'
import { useLocale, useNamespace } from '@element-plus/hooks'
import { CHANGE_EVENT, UPDATE_MODEL_EVENT } from '@element-plus/constants'
import { CircleClose, Clock } from '@element-plus/icons-vue'
import {
  compareTime,
  formatTime,
  isValidTime,
  nextTime,
  parseTime,
} from './utils'
import { debugWarn } from '@element-plus/utils'
import { DEFAULT_END, DEFAULT_START, DEFAULT_STEP } from './time-select'

import type { TimeSelectProps } from './time-select'

dayjs.extend(customParseFormat)

const { Option: ElOption } = ElSelect

defineOptions({
  name: 'ElTimeSelect',
})

defineEmits([CHANGE_EVENT, 'blur', 'focus', 'clear', UPDATE_MODEL_EVENT])

const props = withDefaults(defineProps<TimeSelectProps>(), {
  format: 'HH:mm',
  disabled: undefined,
  editable: true,
  effect: 'light',
  clearable: true,
  start: DEFAULT_START,
  end: DEFAULT_END,
  step: DEFAULT_STEP,
  prefixIcon: () => Clock,
  clearIcon: () => CircleClose,
  popperClass: '',
  valueOnClear: undefined,
  popperStyle: undefined,
})

const nsInput = useNamespace('input')
const select = ref<typeof ElSelect>()

const _disabled = useFormDisabled()
const { lang } = useLocale()

const getValidTimeOrDefault = (
  value: string,
  propName: 'start' | 'end' | 'step',
  defaultValue: string,
  allowZero = true
) => {
  const time = parseTime(value)
  if (
    !isValidTime(time) ||
    (!allowZero && time.hours === 0 && time.minutes === 0)
  ) {
    debugWarn(
      'ElTimeSelect',
      `invalid ${propName}, fallback to default ${propName} (${defaultValue}).`
    )
    return defaultValue
  }
  return formatTime(time)
}

const value = computed(() => props.modelValue)
const start = computed(() =>
  getValidTimeOrDefault(props.start, 'start', DEFAULT_START)
)

const end = computed(() => getValidTimeOrDefault(props.end, 'end', DEFAULT_END))

const minTime = computed(() => {
  const time = parseTime(props.minTime || '')
  return time ? formatTime(time) : null
})

const maxTime = computed(() => {
  const time = parseTime(props.maxTime || '')
  return time ? formatTime(time) : null
})

const step = computed(() =>
  getValidTimeOrDefault(props.step, 'step', DEFAULT_STEP, false)
)

const items = computed(() => {
  const result: { value: string; rawValue: string; disabled: boolean }[] = []
  const push = (formattedValue: string, rawValue: string) => {
    result.push({
      value: formattedValue,
      rawValue,
      disabled:
        compareTime(rawValue, minTime.value || '-1:-1') <= 0 ||
        compareTime(rawValue, maxTime.value || '100:100') >= 0,
    })
  }

  let current = start.value
  while (compareTime(current, end.value) <= 0) {
    const currentTime = dayjs(current, 'HH:mm')
      .locale(lang.value)
      .format(props.format)
    push(currentTime, current)
    current = nextTime(current, step.value)
  }
  if (
    props.includeEndTime &&
    result[result.length - 1]?.rawValue !== end.value
  ) {
    const formattedValue = dayjs(end.value, 'HH:mm')
      .locale(lang.value)
      .format(props.format)
    push(formattedValue, end.value)
  }
  return result
})

const blur = () => {
  select.value?.blur?.()
}

const focus = () => {
  select.value?.focus?.()
}

defineExpose({
  /**
   * @description blur the Input component
   */
  blur,
  /**
   * @description focus the Input component
   */
  focus,
})
</script>
