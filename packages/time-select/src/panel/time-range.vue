<template>
  <transition
    name="el-zoom-in-top"
    @after-leave="$emit('dodestroy')"
  >
    <div
      v-if="visible"
      class="el-time-range-picker el-picker-panel el-popper"
      :class="popperClass"
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
              :show-seconds="showSeconds"
              :am-pm-mode="amPmMode"
              :arrow-control="timeArrowControl"
              :date="minDate"
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
              :show-seconds="showSeconds"
              :am-pm-mode="amPmMode"
              :selectable-range="maxSelectableRange"
              :arrow-control="timeArrowControl"
              :date="maxDate"
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

<script type="ts">
import {
  parseDate,
  limitTimeRange,
  modifyDate,
  clearMilliseconds,
  timeWithinRange,
} from './time-pick'
import { t } from '@element-plus/locale'
import TimeSpinner from '../basic/time-spinner.vue'
import {
  defineComponent,
  ref,
  Ref,
  nextTick,
  computed,
  onMounted,
} from 'vue'

const MIN_TIME = parseDate('00:00:00', 'HH:mm:ss')
const MAX_TIME = parseDate('23:59:59', 'HH:mm:ss')

const minTimeOfDay = function(date) {
  return modifyDate(MIN_TIME, date.getFullYear(), date.getMonth(), date.getDate())
}

const maxTimeOfDay = function(date) {
  return modifyDate(MAX_TIME, date.getFullYear(), date.getMonth(), date.getDate())
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
    timeArrowControl: {
      type: [Boolean],
      default: false,
    },
    parsedValue: {
      type: [String, Date],
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
  },

  emits: ['pick', 'select-range'],

  setup(props, ctx) {
    const oldValue = ref(props.parsedValue)
    const minDate = computed(() => props.parsedValue[0])
    const maxDate = computed(() => props.parsedValue[1])
    const handleCancel = () =>{
      ctx.emit('pick', oldValue.value)
    }

    const format = 'HH:mm:ss'
    const showSeconds = computed(() => {
      return (format || '').indexOf('ss') !== -1
    })
    const amPmMode = computed(() => {
      if ((format.value || '').indexOf('A') !== -1) return 'A'
      if ((format.value || '').indexOf('a') !== -1) return 'a'
      return ''
    })

    const minSelectableRange = ref([])
    const maxSelectableRange = ref([])

    const handleConfirm = (visible = false) => {

      const _minDate = limitTimeRange(minDate.value, minSelectableRange.value, format)
      const _maxDate = limitTimeRange(maxDate.value, maxSelectableRange.value, format)

      ctx.emit('pick', [_minDate, _maxDate], visible)
    }

    const handleMinChange = (date) => {
      handleChange(clearMilliseconds(date), maxDate.value)
    }
    const handleMaxChange = (date) => {
      handleChange(minDate.value, clearMilliseconds(date))
    }

    const isValidValue = (date) => {
      return Array.isArray(date) &&
          timeWithinRange(date[0], minSelectableRange.value) &&
          timeWithinRange(date[1], maxSelectableRange.value)
    }

    const handleChange = (_minDate, _maxDate) => {
      if (isValidValue([_minDate, _maxDate])) {
        minSelectableRange.value = [[minTimeOfDay(_minDate), _maxDate]]
        maxSelectableRange.value = [[_minDate, maxTimeOfDay(_maxDate)]]
        ctx.emit('pick', [_minDate, _maxDate], true)
      }
    }
    const btnConfirmDisabled = () => {
      return minDate.value.getTime() > maxDate.value.getTime()
    }

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


  // watch: {
  //   value(value) {
  //     if (Array.isArray(value)) {
  //       this.minDate = new Date(value[0])
  //       this.maxDate = new Date(value[1])
  //     } else {
  //       if (Array.isArray(this.defaultValue)) {
  //         this.minDate = new Date(this.defaultValue[0])
  //         this.maxDate = new Date(this.defaultValue[1])
  //       } else if (this.defaultValue) {
  //         this.minDate = new Date(this.defaultValue)
  //         this.maxDate = advanceTime(new Date(this.defaultValue), 60 * 60 * 1000)
  //       } else {
  //         this.minDate = new Date()
  //         this.maxDate = advanceTime(new Date(), 60 * 60 * 1000)
  //       }
  //     }
  //   },

  //   visible(val) {
  //     if (val) {
  //       this.oldValue = this.value
  //       this.$nextTick(() => this.$refs.minSpinner.emitSelectRange('hours'))
  //     }
  //   },
  // },

  // methods: {





  //   adjustSpinners() {
  //     this.$refs.minSpinner.adjustSpinners()
  //     this.$refs.maxSpinner.adjustSpinners()
  //   },

  //   changeSelectionRange(step) {
  //     const list = this.showSeconds ? [0, 3, 6, 11, 14, 17] : [0, 3, 8, 11]
  //     const mapping = ['hours', 'minutes'].concat(this.showSeconds ? ['seconds'] : [])
  //     const index = list.indexOf(this.selectionRange[0])
  //     const next = (index + step + list.length) % list.length
  //     const half = list.length / 2
  //     if (next < half) {
  //       this.$refs.minSpinner.emitSelectRange(mapping[next])
  //     } else {
  //       this.$refs.maxSpinner.emitSelectRange(mapping[next - half])
  //     }
  //   },


  //   handleKeydown(event) {

  // move here together
  // computed: {
  //   spinner() {
  //     return this.selectionRange[0] < this.offset ? this.$refs.minSpinner : this.$refs.maxSpinner
  //   },
  // },


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
  //       this.spinner.scrollDown(step)
  //       event.preventDefault()
  //       return
  //     }
  //   },
  // },
})
</script>
