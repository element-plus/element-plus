<template>
  <el-select
    ref="select"
    v-model="value"
    :disabled="!editable"
    :clearable="clearable"
    :size="size"
    :placeholder="this.placeholder"
    :default-value="defaultValue"
    default-first-option
    filterable
    @change="value => $emit('change', value)"
    @blur="event => $emit('blur', event)"
    @focus="event => $emit('focus', event)"
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

<script>
const parseTime = function (time) {
  const values = (time || '').split(':')
  if (values.length >= 2) {
    const hours = parseInt(values[0], 10)
    const minutes = parseInt(values[1], 10)
    return {
      hours,
      minutes,
    }
  }
  /* istanbul ignore next */
  return null
}
const compareTime = function (time1, time2) {
  const value1 = parseTime(time1)
  const value2 = parseTime(time2)
  const minutes1 = value1.minutes + value1.hours * 60
  const minutes2 = value2.minutes + value2.hours * 60
  if (minutes1 === minutes2) {
    return 0
  }
  return minutes1 > minutes2 ? 1 : -1
}
const formatTime = function (time) {
  return (
    (time.hours < 10 ? '0' + time.hours : time.hours) +
    ':' +
    (time.minutes < 10 ? '0' + time.minutes : time.minutes)
  )
}
const nextTime = function (time, step) {
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
export default {
  model: {
    prop: 'value',
    event: 'change',
  },
  props: {
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
    defaultValue: {
      type: String,
      default: '',
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
      default: 'el-icon-circle-closes',
    },
  },
  data() {
    return {
      start: '09:00',
      end: '18:00',
      step: '00:30',
      value: '',
      minTime: '',
      maxTime: '',
    }
  },
  computed: {
    items() {
      const start = this.start
      const end = this.end
      const step = this.step
      const result = []
      if (start && end && step) {
        let current = start
        while (compareTime(current, end) <= 0) {
          result.push({
            value: current,
            disabled:
              compareTime(current, this.minTime || '-1:-1') <= 0 ||
              compareTime(current, this.maxTime || '100:100') >= 0,
          })
          current = nextTime(current, step)
        }
      }
      return result
    },
  },
  watch: {
    pickerOptions() {
      this.updateOptions()
    },
  },
  methods: {
    handleClick(item) {
      if (!item.disabled) {
        this.$emit('pick', item.value)
      }
    },
    handleClear() {
      this.$emit('pick', null)
    },
    updateOptions() {
      const options = this.pickerOptions
      for (const option in options) {
        if (options.hasOwnProperty(option)) {
          this[option] = options[option]
        }
      }
    },
    focus() {
      this.$refs.select.focus()
    },
    blur() {
      this.$refs.select.blur()
    },
  },
}
</script>
