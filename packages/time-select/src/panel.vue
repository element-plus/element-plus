<template>
  <transition name="el-zoom-in-top" @before-enter="handleMenuEnter" @after-leave="$emit('destroy')">
    <div
      v-show="visible"
      ref="popper"
      :style="{ width: width + 'px' }"
      :class="popperClass"
      class="el-picker-panel time-select el-popper"
    >
      <el-scrollbar noresize wrap-class="el-picker-panel__content">
        <div
          v-for="item in items"
          :key="item.value"
          class="time-select-item"
          :class="{ selected: value === item.value, disabled: item.disabled, default: item.value === defaultValue }"
          :disabled="item.disabled"
          @click="handleClick(item)"
        >
          {{ item.value }}
        </div>
      </el-scrollbar>
    </div>
  </transition>
</template>

<script type="ts">
import { defineComponent, ref, computed, inject, provide, PropType } from 'vue'
import ElScrollbar from '@element-plus/scrollbar'
import scrollIntoView from '@element-plus/utils/scroll-into-view'
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
export default defineComponent({
  components: { ElScrollbar },
  emits: ['pick', 'destroy'],
  setup(props, ctx) {
    // data
    const popperClass = ref('')
    const start = ref('09:00')
    const end = ref('18:00')
    const step = ref('00:30')
    const value = ref('')
    const defaultValue = ref('')
    const visible = ref(false)
    const minTime = ref('')
    const maxTime = ref('')
    const width = ref(0)
    // computed
    const items = computed(() => {
      const start = start.value
      const end = end.value
      const step = step.value
      const result = []
      if (start && end && step) {
        let current = start
        while (compareTime(current, end) <= 0) {
          result.push({
            value: current,
            disabled:
              compareTime(current, minTime.value || '-1:-1') <= 0 ||
              compareTime(current, maxTime.value || '100:100') >= 0,
          })
          current = nextTime(current, step)
        }
      }
      return result
    })
    // methods
    const handleClick = item => {
      if (!item.disabled) {
        ctx.$emit('pick', item.value)
      }
    }
    const handleClear = () => {
      ctx.$emit('pick', null)
    }
    const scrollToOption = (selector = '.selected') => {
      const menu = ctx.$refs.popper.querySelector('.el-picker-panel__content')
      scrollIntoView(menu, menu.querySelector(selector))
    },
    const handleMenuEnter = () => {
      const selected =
        items.value.map(item => item.value).indexOf(this.value) !== -1
      const hasDefault =
        items.value.map(item => item.value).indexOf(this.defaultValue) !== -1
      const option =
        (selected && '.selected') ||
        (hasDefault && '.default') ||
        '.time-select-item:not(.disabled)'
      ctx.$nextTick(() => scrollToOption(option))
    }
    const scrollDown = step => {
      const items = items.value
      const length = items.length
      let total = items.length
      let index = items.map(item => item.value).indexOf(this.value)
      while (total--) {
        index = (index + step + length) % length
        if (!items[index].disabled) {
          this.$emit('pick', items[index].value, true)
          return
        }
      }
    }
    const isValidValue = date => {
      return (
        items.value
          .filter(item => !item.disabled)
          .map(item => item.value)
          .indexOf(date) !== -1
      )
    }
    const handleKeydown = event => {
      const keyCode = event.keyCode
      if (keyCode === 38 || keyCode === 40) {
        const mapping = { 40: 1, 38: -1 }
        const offset = mapping[keyCode.toString()]
        scrollDown(offset)
        event.stopPropagation()
        return
      }
    }
  },
  watch: {
    value(val) {
      if (!val) return
      this.$nextTick(() => this.scrollToOption())
    },
  },
})
</script>
