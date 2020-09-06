<template>
  <transition
    name="el-zoom-in-top"
  >
    <div
      v-if="visible"
      class="el-time-range-picker el-picker-panel"
    >
      <div class="el-time-range-picker__content">
        <div class="el-time-range-picker__cell">
          <div class="el-time-range-picker__header">{{ t('el.datepicker.startTime') }}</div>
          <div
            :class="{ 'has-seconds': showSeconds, 'is-arrow': arrowControl }"
            class="el-time-range-picker__body el-time-panel__content"
          >
            <time-spinner
              ref="minSpinner"
              role="min"
              :show-seconds="showSeconds"
              :am-pm-mode="amPmMode"
              :arrow-control="arrowControl"
              :spinner-date="minDate"
              :selectable-range="minSelectableRange"
              @change="handleMinChange"
              @select-range="setMinSelectionRange"
            />
          </div>
        </div>
        <div class="el-time-range-picker__cell">
          <div class="el-time-range-picker__header">{{ t('el.datepicker.endTime') }}</div>
          <div
            :class="{ 'has-seconds': showSeconds, 'is-arrow': arrowControl }"
            class="el-time-range-picker__body el-time-panel__content"
          >
            <time-spinner
              ref="maxSpinner"
              role="max"
              :show-seconds="showSeconds"
              :am-pm-mode="amPmMode"
              :selectable-range="maxSelectableRange"
              :arrow-control="arrowControl"
              :spinner-date="maxDate"
              @change="handleMaxChange"
              @select-range="setMaxSelectionRange"
            />
          </div>
        </div>
      </div>
      <div class="el-time-panel__footer">
        <button
          type="button"
          class="el-time-panel__btn cancel"
          @click="handleCancel()"
        >
          {{ t('el.datepicker.cancel') }}
        </button>
        <button
          type="button"
          class="el-time-panel__btn confirm"
          :disabled="btnConfirmDisabled"
          @click="handleConfirm()"
        >
          {{ t('el.datepicker.confirm') }}
        </button>
      </div>
    </div>
  </transition>
</template>

<script lang="ts">
import {
  parseDate,
  limitTimeRange,
  modifyDate,
  clearMilliseconds,
  timeWithinRange,
} from './time-picker-utils'
import { t } from '@element-plus/locale'
import TimeSpinner from './basic-time-spinner.vue'
import mitt from 'mitt'
import { eventKeys } from '@element-plus/utils/aria'
import {
  defineComponent,
  ref,
  computed,
  PropType,
  inject,
  provide,
} from 'vue'

const MIN_TIME = () => {
  let _d
  if (!_d) _d = parseDate('00:00:00', 'HH:mm:ss')
  return _d
}
const MAX_TIME = () => {
  let _d
  if (!_d) _d = parseDate('23:59:59', 'HH:mm:ss')
  return _d
}

const minTimeOfDay = function(date) {
  return modifyDate(MIN_TIME(), date.getFullYear(), date.getMonth(), date.getDate())
}

const maxTimeOfDay = function(date) {
  return modifyDate(MAX_TIME(), date.getFullYear(), date.getMonth(), date.getDate())
}

// increase time by amount of milliseconds, but within the range of day
const advanceTime = function(date, amount) {
  return new Date(Math.min(date.getTime() + amount, maxTimeOfDay(date).getTime()))
}

export default defineComponent({

  components: { TimeSpinner },

  props: {
    visible:{
      type: [Boolean],
      default: false,
    },
    arrowControl: {
      type: [Boolean],
      default: false,
    },
    parsedValue: {
      type: Array as PropType<Array<Date>>,
      default: '',
    },
    pickerOptions: {
      type: Object,
      default: () => ({}),
    },
    rangeSeparator: { // todo move to time range picker
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
    const minDate = computed(() => props.parsedValue[0] as Date)
    const maxDate = computed(() => props.parsedValue[1] as Date)
    const handleCancel = () =>{
      ctx.emit('pick', null, null, true)
    }
    const showSeconds = computed(() => {
      return (props.format || '').indexOf('ss') !== -1
    })
    const amPmMode = computed(() => {
      if ((props.format || '').indexOf('A') !== -1) return 'A'
      if ((props.format || '').indexOf('a') !== -1) return 'a'
      return ''
    })

    const minSelectableRange = ref([])
    const maxSelectableRange = ref([])

    const handleConfirm = (visible = false) => {
      const _minDate = limitTimeRange(minDate.value, minSelectableRange.value, props.format)
      const _maxDate = limitTimeRange(maxDate.value, maxSelectableRange.value, props.format)
      ctx.emit('pick', [_minDate, _maxDate], visible)
    }

    const handleMinChange = date => {
      handleChange(clearMilliseconds(date), maxDate.value)
    }
    const handleMaxChange = date => {
      handleChange(minDate.value, clearMilliseconds(date))
    }

    const isValidValue = date => {
      return Array.isArray(date) &&
          timeWithinRange(date[0], minSelectableRange.value, props.format) &&
          timeWithinRange(date[1], maxSelectableRange.value, props.format)
    }

    const handleChange = (_minDate, _maxDate) => {
      if (isValidValue([_minDate, _maxDate])) {
        minSelectableRange.value = [[minTimeOfDay(_minDate), _maxDate]]
        maxSelectableRange.value = [[_minDate, maxTimeOfDay(_maxDate)]]
        ctx.emit('pick', [_minDate, _maxDate], true)
      }
    }
    const btnConfirmDisabled = computed(() => {
      return minDate.value.getTime() > maxDate.value.getTime()
    })

    const selectionRange = ref([0,2])
    const setMinSelectionRange = (start, end) => {
      ctx.emit('select-range', start, end, 'min')
      selectionRange.value = [start, end]
    }

    const offset = computed(() => showSeconds.value ? 11 : 8)
    const setMaxSelectionRange = (start, end) => {
      ctx.emit('select-range', start, end, 'max')
      selectionRange.value = [start + offset.value, end + offset.value]
    }

    const changeSelectionRange = step => {
      const list = showSeconds.value ? [0, 3, 6, 11, 14, 17] : [0, 3, 8, 11]
      const mapping = ['hours', 'minutes'].concat(showSeconds.value ? ['seconds'] : [])
      const index = list.indexOf(selectionRange.value[0])
      const next = (index + step + list.length) % list.length
      const half = list.length / 2
      if (next < half) {
        timePickeOptions['min_emitSelectRange'](mapping[next])
      } else {
        timePickeOptions['max_emitSelectRange'](mapping[next - half])
      }
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
        const role = selectionRange.value[0] < offset.value ? 'min' : 'max'
        timePickeOptions[`${role}_scrollDown`](step)
        event.preventDefault()
        return
      }
    }

    const pickerBase = inject('EP_PICKER_BASE') as any
    pickerBase.emit('isValidValue', isValidValue)
    pickerBase.emit('SetPickerOption',['handleKeydown', handleKeydown])

    const timePickeOptions = {} as any
    const pickerHub = mitt()
    pickerHub.on('SetOption', e => {
      timePickeOptions[e[0]] = e[1]
    })
    provide('EP_TIMEPICK_PANEL', pickerHub)

    return {
      setMaxSelectionRange,
      setMinSelectionRange,
      btnConfirmDisabled,
      handleCancel,
      handleConfirm,
      t,
      showSeconds,
      minDate,
      maxDate,
      amPmMode,
      handleMinChange,
      handleMaxChange,
      minSelectableRange,
      maxSelectableRange,
    }
  },
})
</script>
<style scoped>
.el-time-range-picker__content {
  z-index: 1
}
</style>
