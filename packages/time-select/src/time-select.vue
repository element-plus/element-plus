<template>
  <el-select
    v-model="value"
    :disabled="!editable"
    :clearable="clearable"
    :clear-icon="clearIcon"
    :size="size"
    :placeholder="placeholder"
    default-first-option
    filterable
    @change="
      (value) => {
        $emit('change', value)
        $emit('update:modelValue', value)
      }
    "
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
      <i :class="`el-input__icon ${prefixIcon}`"></i>
    </template>
  </el-select>
</template>

<script lang="ts">
import { defineComponent, ref, computed, watch } from 'vue'
import ElSelect from '@element-plus/select'
interface Time {
  hours: number
  minutes: number
}
const parseTime = function (time: string): null | Time {
  const values = (time || '').split(':')
  if (values.length >= 2) {
    const hours = parseInt(values[0], 10)
    const minutes = parseInt(values[1], 10)
    return {
      hours,
      minutes,
    }
  }
  return null
}
const compareTime = function (time1: string, time2: string): number {
  const value1 = parseTime(time1)
  const value2 = parseTime(time2)
  const minutes1 = value1.minutes + value1.hours * 60
  const minutes2 = value2.minutes + value2.hours * 60
  if (minutes1 === minutes2) {
    return 0
  }
  return minutes1 > minutes2 ? 1 : -1
}
const formatTime = function (time: Time): string {
  return (
    (time.hours < 10 ? '0' + time.hours : time.hours) +
    ':' +
    (time.minutes < 10 ? '0' + time.minutes : time.minutes)
  )
}
const nextTime = function (time: string, step: string): string {
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

  components: { ElSelect },
  model: {
    prop: 'value',
    event: 'change',
  },
  props: {
    modelValue: String,
    editable: {
      type: Boolean,
      default: true,
    },
    clearable: {
      type: Boolean,
      default: true,
    },
    size: {
      type: String,
      default: '',
      validator: function (value) {
        return !value || ['medium', 'small', 'mini'].indexOf(value) !== -1
      },
    },
    placeholder: {
      type: String,
      default: '',
    },
    pickerOptions: {
      type: Object,
      default: () => {
        return {}
      },
    },
    name: {
      type: String,
      default: '',
    },
    prefixIcon: {
      type: String,
      default: 'el-icon-time',
    },
    clearIcon: {
      type: String,
      default: 'el-icon-circle-close',
    },
  },
  emits: ['change', 'blur', 'focus', 'update:modelValue'],
  setup(props) {
    // data
    const start = ref('09:00')
    const end = ref('18:00')
    const step = ref('00:30')
    const value = ref(props.modelValue)
    const minTime = ref('00:00')
    const maxTime = ref('')
    let data = {
      start,
      end,
      step,
      value,
      minTime,
      maxTime,
    }
    // computed
    const items = computed(() => {
      const result = []
      if (start.value && end.value && step.value) {
        let current = start.value
        while (compareTime(current, end.value) <= 0) {
          result.push({
            value: current,
            disabled:
              compareTime(current, minTime.value || '-1:-1') <= 0 ||
              compareTime(current, maxTime.value || '100:100') >= 0,
          })
          current = nextTime(current, step.value)
        }
      }
      return result
    })
    // methods
    const updateOptions = () => {
      const options = props.pickerOptions
      for (const option in options) {
        if (options.hasOwnProperty(option)) {
          data[option].value = options[option]
        }
      }
    }
    // watch
    watch(
      () => props.pickerOptions,
      () => {
        updateOptions()
      },
    )
    return {
      ...data,
      items,
      updateOptions,
    }
  },
})
</script>
