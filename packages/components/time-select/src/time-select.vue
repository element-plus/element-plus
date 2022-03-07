<template>
  <el-select
    ref="select"
    :model-value="value"
    :disabled="disabled"
    :clearable="clearable"
    :clear-icon="clearIcon"
    :size="size"
    :effect="effect"
    :placeholder="placeholder"
    default-first-option
    :filterable="editable"
    @update:model-value="(event) => $emit('update:modelValue', event)"
    @change="(event) => $emit('change', event)"
    @blur="(event) => $emit('blur', event)"
    @focus="(event) => $emit('focus', event)"
  >
    <el-option
      v-for="item in items"
      :key="item.value"
      :label="item.value"
      :value="item.value"
      :disabled="item.disabled"
    />
    <template #prefix>
      <el-icon v-if="prefixIcon" :class="ns.e('prefix-icon')">
        <component :is="prefixIcon" />
      </el-icon>
    </template>
  </el-select>
</template>

<script lang="ts">
import { defineComponent, computed, ref } from 'vue'
import dayjs from 'dayjs'
import customParseFormat from 'dayjs/plugin/customParseFormat'
import ElSelect from '@element-plus/components/select'
import ElIcon from '@element-plus/components/icon'
import { CircleClose, Clock } from '@element-plus/icons-vue'
import { useNamespace } from '@element-plus/hooks'

import type { PropType, Component } from 'vue'
import type { ComponentSize } from '@element-plus/constants'
dayjs.extend(customParseFormat)

const { Option: ElOption } = ElSelect

interface Time {
  hours: number
  minutes: number
}

const parseTime = (time: string): null | Time => {
  const values = (time || '').split(':')
  if (values.length >= 2) {
    let hours = parseInt(values[0], 10)
    const minutes = parseInt(values[1], 10)
    const timeUpper = time.toUpperCase()
    if (timeUpper.includes('AM') && hours === 12) {
      hours = 0
    } else if (timeUpper.includes('PM') && hours !== 12) {
      hours += 12
    }
    return {
      hours,
      minutes,
    }
  }
  return null
}
const compareTime = (time1: string, time2: string): number => {
  const value1 = parseTime(time1)
  const value2 = parseTime(time2)
  const minutes1 = value1.minutes + value1.hours * 60
  const minutes2 = value2.minutes + value2.hours * 60
  if (minutes1 === minutes2) {
    return 0
  }
  return minutes1 > minutes2 ? 1 : -1
}
const padTime = (time: number | string) => {
  return `${time}`.padStart(2, '0')
}
const formatTime = (time: Time): string => {
  return `${padTime(time.hours)}:${padTime(time.minutes)}`
}
const nextTime = (time: string, step: string): string => {
  const timeValue = parseTime(time)
  const stepValue = parseTime(step)
  const next = {
    hours: timeValue.hours,
    minutes: timeValue.minutes,
  }
  next.minutes += stepValue.minutes
  next.hours += stepValue.hours
  next.hours += Math.floor(next.minutes / 60)
  next.minutes = next.minutes % 60
  return formatTime(next)
}

export default defineComponent({
  name: 'ElTimeSelect',
  components: { ElSelect, ElOption, ElIcon },
  model: {
    prop: 'value',
    event: 'change',
  },
  props: {
    format: {
      type: String,
      default: 'HH:mm',
    },
    modelValue: String,
    disabled: {
      type: Boolean,
      default: false,
    },
    editable: {
      type: Boolean,
      default: true,
    },
    effect: {
      type: String as PropType<'light' | 'dark' | string>,
      default: 'light',
    },
    clearable: {
      type: Boolean,
      default: true,
    },
    size: {
      type: String as PropType<ComponentSize>,
      default: 'default',
      validator: (value: string) =>
        !value || ['large', 'default', 'small'].indexOf(value) !== -1,
    },
    placeholder: {
      type: String,
      default: '',
    },
    start: {
      type: String,
      default: '09:00',
    },
    end: {
      type: String,
      default: '18:00',
    },
    step: {
      type: String,
      default: '00:30',
    },
    minTime: {
      type: String,
      default: '',
    },
    maxTime: {
      type: String,
      default: '',
    },
    name: {
      type: String,
      default: '',
    },
    prefixIcon: {
      type: [String, Object] as PropType<string | Component>,
      default: Clock,
    },
    clearIcon: {
      type: [String, Object] as PropType<string | Component>,
      default: CircleClose,
    },
  },
  emits: ['change', 'blur', 'focus', 'update:modelValue'],
  setup(props) {
    const ns = useNamespace('input')
    const select = ref(null)

    // computed

    const value = computed(() => props.modelValue)
    const start = computed(() => {
      const time = parseTime(props.start)
      return formatTime(time)
    })
    const end = computed(() => {
      const time = parseTime(props.end)
      return formatTime(time)
    })
    const step = computed(() => {
      const time = parseTime(props.step)
      return formatTime(time)
    })
    const minTime = computed(() => {
      const time = parseTime(props.minTime)
      return time ? formatTime(time) : null
    })
    const maxTime = computed(() => {
      const time = parseTime(props.maxTime)
      return time ? formatTime(time) : null
    })
    const items = computed(() => {
      const result = []
      if (props.start && props.end && props.step) {
        let current = start.value
        let currentTime
        while (compareTime(current, end.value) <= 0) {
          currentTime = dayjs(current, 'HH:mm').format(props.format)
          result.push({
            value: currentTime,
            disabled:
              compareTime(current, minTime.value || '-1:-1') <= 0 ||
              compareTime(current, maxTime.value || '100:100') >= 0,
          })
          current = nextTime(current, step.value)
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

    return {
      ns,
      select,
      value,
      items,
      blur,
      focus,
    }
  },
})
</script>
