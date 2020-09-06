<template>
  <transition name="el-zoom-in-top">
    <div
      v-if="visible"
      class="el-time-panel"
    >
      <div class="el-time-panel__content" :class="{ 'has-seconds': showSeconds }">
        <time-spinner
          ref="spinner"
          :arrow-control="arrowControl"
          :show-seconds="showSeconds"
          :am-pm-mode="amPmMode"
          :spinner-date="spinnerValue"
          :selectable-range="selectableRange"
          :selection-range="selectionRange"
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
          class="el-time-panel__btn confirm"
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
  inject,
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
    arrowControl: {
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
    format: {
      type: String,
      default: '',
    },
  },

  emits: ['pick', 'select-range'],

  setup(props, ctx) {
    const selectionRange = ref([0, 2])
    const showSeconds = computed(() => {
      return (props.format || '').indexOf('ss') !== -1
    })
    const amPmMode = computed(() => {
      if ((props.format || '').indexOf('A') !== -1) return 'A'
      if ((props.format || '').indexOf('a') !== -1) return 'a'
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
      const _date = clearMilliseconds(limitTimeRange(props.parsedValue, selectableRange.value, props.format))
      ctx.emit('pick', _date, visible)
    }
    const handleChange = _date => {
      // visible avoids edge cases, when use scrolls during panel closing animation
      if (!props.visible) { return }
      const result = clearMilliseconds(_date)
      // if date is out of range, do not emit
      if (isValidValue(result)) {
        ctx.emit('pick', result, true)
      }
    }
    const isValidValue = _date => {
      return timeWithinRange(_date, selectableRange.value, props.format)
    }
    const setSelectionRange = (start, end) => {
      ctx.emit('select-range', start, end)
      selectionRange.value = [start, end]
    }
    const handleCancel = () => {
      ctx.emit('pick', '', false, true)
    }
    const spinnerValue = computed(() => {
      return limitTimeRange(props.parsedValue, selectableRange.value, props.format)
    })

    const pickerBase = inject('EP_PICKER_BASE') as any
    pickerBase.emit('SetPickerOption', ['isValidValue', isValidValue])

    return {
      spinnerValue,
      t,
      handleConfirm,
      handleChange,
      setSelectionRange,
      amPmMode,
      showSeconds,
      handleCancel,
      selectableRange,
    }
  },

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


  //   adjustSpinners() {
  //     return this.$refs.spinner.adjustSpinners()
  //   },

})
</script>
<style scoped>
.el-time-panel {
  position: relative;
}
</style>
