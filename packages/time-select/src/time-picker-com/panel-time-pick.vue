<template>
  <transition name="el-zoom-in-top" @after-leave="$emit('dodestroy')">
    <div
      v-if="visible"
      class="el-time-panel el-popper"
      :class="popperClass"
    >
      <div class="el-time-panel__content" :class="{ 'has-seconds': showSeconds }">
        <time-spinner
          ref="spinner"
          :arrow-control="timeArrowControl"
          :show-seconds="showSeconds"
          :am-pm-mode="amPmMode"
          :date="parsedValue"
          :selectable-range="selectableRange"
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

<script lang="ts">
import { parseDate, timeWithinRange, clearMilliseconds, limitTimeRange } from './time-picker-utils'
import {
  defineComponent,
  ref,
  computed,
} from 'vue'
import { t } from '@element-plus/locale'
import TimeSpinner from './basic-time-spinner.vue'
import dayjs from 'dayjs'

export default defineComponent({
  components: {
    TimeSpinner,
  },

  props: {
    visible: {
      type: [Boolean],
      default: false,
    },
    parsedValue: {
      type: [String, Date],
      default: '',
    },
    timeArrowControl: {
      type: [Boolean],
      default: false,
    },
    pickerOptions: {
      type: Object,
      default: () => ({}),
    },
    rangeSeparator: { // todo move to top picker
      type: String,
      default: '-',
    },
  },

  emits: ['pick', 'select-range'],

  setup(props, ctx) {
    const date = ref(new Date())
    const oldValue = ref(new Date())
    const format = ref('HH:mm:ss')
    const selectionRange = ref([0, 2])
    const showSeconds = computed(() => {
      return (format.value || '').indexOf('ss') !== -1
    })
    const amPmMode = computed(() => {
      if ((format.value || '').indexOf('A') !== -1) return 'A'
      if ((format.value || '').indexOf('a') !== -1) return 'a'
      return ''
    })
    const selectableRange = computed(() => {
      if (!props.pickerOptions || !props.pickerOptions.selectableRange) {
        return []
      }
      let ranges = props.pickerOptions.selectableRange
      const DATE_PARSER = function(text, format) {
        if (format === 'timestamp') return new Date(Number(text))
        return parseDate(text, format)
      }
      const RANGE_PARSER = function(array, format, separator) {
        if (!Array.isArray(array)) {
          array = array.split(separator)
        }
        if (array.length === 2) {
          const range1 = array[0]
          const range2 = array[1]

          return [dayjs(range1, format).toDate(), dayjs(range2, format).toDate()]
        }
        return []
      }
      const parser = RANGE_PARSER
      const format = 'HH:mm:ss'
      ranges = [ranges]
      const result = ranges.map(range => parser(range, format, props.rangeSeparator))
      return result
    })
    const handleConfirm = (visible = false, first) => {
      if (first) return
      const _date = clearMilliseconds(limitTimeRange(date.value, selectableRange.value, format.value))
      ctx.emit('pick', _date, visible)
    }
    const handleChange = (_date) => {
      // visible avoids edge cases, when use scrolls during panel closing animation
      if (!props.visible) {return}
      date.value = clearMilliseconds(_date)
      // if date is out of range, do not emit
      if (isValidValue(date.value)) {
        ctx.emit('pick', date.value, true)
      }
    }
    const isValidValue = (_date) => {
      return timeWithinRange(_date, selectableRange.value, format.value)
    }
    const setSelectionRange = (start, end) => {
      ctx.emit('select-range', start, end)
      selectionRange.value = [start, end]
    }
    const handleCancel = () => {
      ctx.emit('pick', oldValue.value, false)
    }
    return {
      t,
      handleConfirm,
      handleChange,
      setSelectionRange,
      date,
      amPmMode,
      showSeconds,
      handleCancel,
      selectableRange,
    }
  },

  // data() {
  //   return {
  //     popperClass: '',
  //     value: '',
  //     defaultValue: null,
  //     disabled: false,
  //     needInitAdjust: true,
  //   }
  // },

  // watch: {
  //   visible(val) {
  //     if (val) {
  //       this.oldValue = this.value
  //       this.$nextTick(() => this.$refs.spinner.emitSelectRange('hours'))
  //     } else {
  //       this.needInitAdjust = true
  //     }
  //   },

  //   value(newVal) {
  //     let date
  //     if (newVal instanceof Date) {
  //       date = limitTimeRange(newVal, this.selectableRange, this.format)
  //     } else if (!newVal) {
  //       date = this.defaultValue ? new Date(this.defaultValue) : new Date()
  //     }

  //     this.date = date
  //     if (this.visible && this.needInitAdjust) {
  //       this.$nextTick(_ => this.adjustSpinners())
  //       this.needInitAdjust = false
  //     }
  //   },

  //   selectableRange(val) {
  //     this.$refs.spinner.selectableRange = val
  //   },

  //   defaultValue(val) {
  //     if (!isDate(this.value)) {
  //       this.date = val ? new Date(val) : new Date()
  //     }
  //   },
  // },

  // mounted() {
  //   this.$nextTick(() => this.handleConfirm(true, true))
  //   this.$emit('mounted')
  // },

  // methods: {

  //   handleKeydown(event) {
  //     const keyCode = event.keyCode
  //     const mapping = { 38: -1, 40: 1, 37: -1, 39: 1 }

  //     // Left or Right
  //     if (keyCode === 37 || keyCode === 39) {
  //       const step = mapping[keyCode]
  //       this.changeSelectionRange(step)
  //       event.preventDefault()
  //       return
  //     }

  //     // Up or Down
  //     if (keyCode === 38 || keyCode === 40) {
  //       const step = mapping[keyCode]
  //       this.$refs.spinner.scrollDown(step)
  //       event.preventDefault()
  //       return
  //     }
  //   },


  //   adjustSpinners() {
  //     return this.$refs.spinner.adjustSpinners()
  //   },

  //   changeSelectionRange(step) {
  //     const list = [0, 3].concat(this.showSeconds ? [6] : [])
  //     const mapping = ['hours', 'minutes'].concat(this.showSeconds ? ['seconds'] : [])
  //     const index = list.indexOf(this.selectionRange[0])
  //     const next = (index + step + list.length) % list.length
  //     this.$refs.spinner.emitSelectRange(mapping[next])
  //   },
  // },
})
</script>
