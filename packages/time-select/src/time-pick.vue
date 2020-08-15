<template>
  <transition name="el-zoom-in-top" @after-leave="$emit('dodestroy')">
    <div
      v-show="visible"
      class="el-time-panel el-popper"
      :class="popperClass"
    >
      <div class="el-time-panel__content" :class="{ 'has-seconds': showSeconds }">
        <time-spinner
          ref="spinner"
          :arrow-control="useArrow"
          :show-seconds="showSeconds"
          :am-pm-mode="amPmMode"
          :date="date"
          @change="handleChange"
          @select-range="setSelectionRange"
        />
      </div>
      <div class="el-time-panel__footer">
        <button
          type="button"
          class="el-time-panel__btn cancel"
          @click="handleCancel"
        >
          {{ t('el.datepicker.cancel') }}
        </button>
        <button
          type="button"
          class="el-time-panel__btn"
          :class="{confirm: !disabled}"
          @click="handleConfirm()"
        >
          {{ t('el.datepicker.confirm') }}
        </button>
      </div>
    </div>
  </transition>
</template>

<script type="text/babel">
const limitTimeRange = function(date, ranges, format = 'HH:mm:ss') {
  // TODO: refactory a more elegant solution
  if (ranges.length === 0) return date
  const normalizeDate = date => fecha.parse(fecha.format(date, format), format)
  const ndate = normalizeDate(date)
  const nranges = ranges.map(range => range.map(normalizeDate))
  if (nranges.some(nrange => ndate >= nrange[0] && ndate <= nrange[1])) return date

  let minDate = nranges[0][0]
  let maxDate = nranges[0][0]

  nranges.forEach(nrange => {
    minDate = new Date(Math.min(nrange[0], minDate))
    maxDate = new Date(Math.max(nrange[1], minDate))
  })

  const ret = ndate < minDate ? minDate : maxDate
  // preserve Year/Month/Date
  return modifyDate(
    ret,
    date.getFullYear(),
    date.getMonth(),
    date.getDate(),
  )
}
const isDate = function(date) {
  if (date === null || date === undefined) return false
  if (isNaN(new Date(date).getTime())) return false
  if (Array.isArray(date)) return false // deal with `new Date([ new Date() ]) -> new Date()`
  return true
}
const clearMilliseconds = function(date) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds(), 0)
}
const timeWithinRange = function(date, selectableRange, format) {
  const limitedDate = limitTimeRange(date, selectableRange, format)
  return limitedDate.getTime() === date.getTime()
}
import { t } from '@element-plus/locale'
import TimeSpinner from './time-spinner'

export default {

  components: {
    TimeSpinner,
  },

  props: {
    visible: Boolean,
    timeArrowControl: Boolean,
  },

  data() {
    return {
      popperClass: '',
      format: 'HH:mm:ss',
      value: '',
      defaultValue: null,
      date: new Date(),
      oldValue: new Date(),
      selectableRange: [],
      selectionRange: [0, 2],
      disabled: false,
      arrowControl: false,
      needInitAdjust: true,
    }
  },

  computed: {
    showSeconds() {
      return (this.format || '').indexOf('ss') !== -1
    },
    useArrow() {
      return this.arrowControl || this.timeArrowControl || false
    },
    amPmMode() {
      if ((this.format || '').indexOf('A') !== -1) return 'A'
      if ((this.format || '').indexOf('a') !== -1) return 'a'
      return ''
    },
  },

  watch: {
    visible(val) {
      if (val) {
        this.oldValue = this.value
        this.$nextTick(() => this.$refs.spinner.emitSelectRange('hours'))
      } else {
        this.needInitAdjust = true
      }
    },

    value(newVal) {
      let date
      if (newVal instanceof Date) {
        date = limitTimeRange(newVal, this.selectableRange, this.format)
      } else if (!newVal) {
        date = this.defaultValue ? new Date(this.defaultValue) : new Date()
      }

      this.date = date
      if (this.visible && this.needInitAdjust) {
        this.$nextTick(_ => this.adjustSpinners())
        this.needInitAdjust = false
      }
    },

    selectableRange(val) {
      this.$refs.spinner.selectableRange = val
    },

    defaultValue(val) {
      if (!isDate(this.value)) {
        this.date = val ? new Date(val) : new Date()
      }
    },
  },

  mounted() {
    this.$nextTick(() => this.handleConfirm(true, true))
    this.$emit('mounted')
  },

  methods: {
    t(a) {
      return t(a)
    },
    handleCancel() {
      this.$emit('pick', this.oldValue, false)
    },

    handleChange(date) {
      // this.visible avoids edge cases, when use scrolls during panel closing animation
      if (this.visible) {
        this.date = clearMilliseconds(date)
        // if date is out of range, do not emit
        if (this.isValidValue(this.date)) {
          this.$emit('pick', this.date, true)
        }
      }
    },

    setSelectionRange(start, end) {
      this.$emit('select-range', start, end)
      this.selectionRange = [start, end]
    },

    handleConfirm(visible = false, first) {
      if (first) return
      const date = clearMilliseconds(limitTimeRange(this.date, this.selectableRange, this.format))
      this.$emit('pick', date, visible, first)
    },

    handleKeydown(event) {
      const keyCode = event.keyCode
      const mapping = { 38: -1, 40: 1, 37: -1, 39: 1 }

      // Left or Right
      if (keyCode === 37 || keyCode === 39) {
        const step = mapping[keyCode]
        this.changeSelectionRange(step)
        event.preventDefault()
        return
      }

      // Up or Down
      if (keyCode === 38 || keyCode === 40) {
        const step = mapping[keyCode]
        this.$refs.spinner.scrollDown(step)
        event.preventDefault()
        return
      }
    },

    isValidValue(date) {
      return timeWithinRange(date, this.selectableRange, this.format)
    },

    adjustSpinners() {
      return this.$refs.spinner.adjustSpinners()
    },

    changeSelectionRange(step) {
      const list = [0, 3].concat(this.showSeconds ? [6] : [])
      const mapping = ['hours', 'minutes'].concat(this.showSeconds ? ['seconds'] : [])
      const index = list.indexOf(this.selectionRange[0])
      const next = (index + step + list.length) % list.length
      this.$refs.spinner.emitSelectRange(mapping[next])
    },
  },
}
</script>
