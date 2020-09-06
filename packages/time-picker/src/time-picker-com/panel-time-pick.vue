<template>
  <transition name="el-zoom-in-top">
    <div
      v-if="visible"
      class="el-time-panel"
    >
      <div class="el-time-panel__content" :class="{ 'has-seconds': showSeconds }">
        <time-spinner
          ref="spinner"
          role="min"
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
  provide,
} from 'vue'
import { eventKeys } from '@element-plus/utils/aria'
import { t } from '@element-plus/locale'
import mitt from 'mitt'
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

    const changeSelectionRange = step => {
      const list = [0, 3].concat(showSeconds.value ? [6] : [])
      const mapping = ['hours', 'minutes'].concat(showSeconds.value ? ['seconds'] : [])
      const index = list.indexOf(selectionRange.value[0])
      const next = (index + step + list.length) % list.length
      timePickeOptions['min_emitSelectRange'](mapping[next])
    }

    const handleKeydown = event => {
      const keyCode = event.keyCode
      const mapping = { 38: -1, 40: 1, 37: -1, 39: 1 }

      if (keyCode === eventKeys.left || keyCode === eventKeys.right) {
        const step = mapping[keyCode]
        changeSelectionRange(step)
        event.preventDefault()
        return
      }

      if (keyCode === eventKeys.up || keyCode === eventKeys.down) {
        const step = mapping[keyCode]
        timePickeOptions['min_scrollDown'](step)
        event.preventDefault()
        return
      }
    }

    const pickerBase = inject('EP_PICKER_BASE') as any
    pickerBase.emit('SetPickerOption', ['isValidValue', isValidValue])
    pickerBase.emit('SetPickerOption',['handleKeydown', handleKeydown])

    const timePickeOptions = {} as any
    const pickerHub = mitt()
    pickerHub.on('SetOption', e => {
      timePickeOptions[e[0]] = e[1]
    })
    provide('EP_TIMEPICK_PANEL', pickerHub)
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
})
</script>
<style scoped>
.el-time-panel {
  position: relative;
}
</style>
