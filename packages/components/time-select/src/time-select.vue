<template>
  <el-select
    ref="select"
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
    @update:model-value="(event) => $emit('update:modelValue', event)"
    @change="(event) => $emit('change', event)"
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
import { timeSelectProps } from './time-select'
import { compareTime, formatTime, nextTime, parseTime } from './utils'

dayjs.extend(customParseFormat)

const { Option: ElOption } = ElSelect

defineOptions({
  name: 'ElTimeSelect',
})

defineEmits(['change', 'blur', 'focus', 'clear', 'update:modelValue'])

const props = defineProps(timeSelectProps)

const nsInput = useNamespace('input')
const select = ref<typeof ElSelect>()

const _disabled = useFormDisabled()
const { lang } = useLocale()

const value = computed(() => props.modelValue)
const start = computed(() => {
  const time = parseTime(props.start)
  return time ? formatTime(time) : null
})

const end = computed(() => {
  const time = parseTime(props.end)
  return time ? formatTime(time) : null
})

const step = computed(() => {
  const time = parseTime(props.step)
  return time ? formatTime(time) : null
})

const minTime = computed(() => {
  const time = parseTime(props.minTime || '')
  return time ? formatTime(time) : null
})

const maxTime = computed(() => {
  const time = parseTime(props.maxTime || '')
  return time ? formatTime(time) : null
})

const items = computed(() => {
  const result: { value: string; disabled: boolean }[] = []
  const push = (formattedValue: string, rawValue: string) => {
    result.push({
      value: formattedValue,
      disabled:
        compareTime(rawValue, minTime.value || '-1:-1') <= 0 ||
        compareTime(rawValue, maxTime.value || '100:100') >= 0,
    })
  }

  if (props.start && props.end && props.step) {
    let current = start.value
    let currentTime: string
    while (current && end.value && compareTime(current, end.value) <= 0) {
      currentTime = dayjs(current, 'HH:mm')
        .locale(lang.value)
        .format(props.format)
      push(currentTime, current)
      current = nextTime(current, step.value!)
    }
    if (
      props.includeEndTime &&
      end.value &&
      result[result.length - 1]?.value !== end.value
    ) {
      const formattedValue = dayjs(end.value, 'HH:mm')
        .locale(lang.value)
        .format(props.format)
      push(formattedValue, end.value)
    }
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
   * @description focus the Input component
   */
  blur,
  /**
   * @description blur the Input component
   */
  focus,
})
</script>
