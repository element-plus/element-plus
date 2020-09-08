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
              role="start"
              :show-seconds="showSeconds"
              :am-pm-mode="amPmMode"
              :arrow-control="arrowControl"
              :spinner-date="minDate"
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
              role="end"
              :show-seconds="showSeconds"
              :am-pm-mode="amPmMode"
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
  defineComponent,
  ref,
  computed,
  PropType,
  inject,
  provide,
} from 'vue'
import dayjs, { Dayjs } from 'dayjs'
import mitt from 'mitt'
import { t } from '@element-plus/locale'
import { eventKeys } from '@element-plus/utils/aria'
import TimeSpinner from './basic-time-spinner.vue'

const makeSelectRange = (start, end) => {
  const result = []
  for (let i = start; i < end; i++) {
    result.push(i)
  }
  return result
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
      type: Array as PropType<Array<Dayjs>>,
      default: '',
    },
    format: {
      type: String,
      default: '',
    },
  },

  emits: ['pick', 'select-range'],

  setup(props, ctx) {
    const minDate = computed(() => props.parsedValue[0])
    const maxDate = computed(() => props.parsedValue[1])
    const handleCancel = () =>{
      ctx.emit('pick', null, null, true)
    }
    const showSeconds = computed(() => {
      return props.format.includes('ss')
    })
    const amPmMode = computed(() => {
      if (props.format.includes('A')) return 'A'
      if (props.format.includes('a')) return 'a'
      return ''
    })

    const minSelectableRange = ref([])
    const maxSelectableRange = ref([])

    const handleConfirm = (visible = false) => {
      ctx.emit('pick', [minDate.value, maxDate.value], visible)
    }

    const handleMinChange = date => {
      handleChange(date.millisecond(0), maxDate.value)
    }
    const handleMaxChange = date => {
      handleChange(minDate.value, date.millisecond(0))
    }

    const isValidValue = _date => {
      const parsedDate = _date.map(_=> dayjs(_))
      const result = getRangeAvaliableTime(parsedDate)
      return parsedDate[0].isSame(result[0]) && parsedDate[1].isSame(result[1])
    }

    const handleChange = (_minDate, _maxDate) => {
      // todo getRangeAvaliableTime(_date).millisecond(0)
      ctx.emit('pick', [_minDate, _maxDate], true)
    }
    const btnConfirmDisabled = computed(() => {
      return minDate.value > maxDate.value
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
        timePickeOptions['start_emitSelectRange'](mapping[next])
      } else {
        timePickeOptions['end_emitSelectRange'](mapping[next - half])
      }
    }

    const handleKeydown = event => {
      const keyCode = event.keyCode

      if (keyCode === eventKeys.left || keyCode === eventKeys.right) {
        const step = (keyCode === eventKeys.left) ? -1 : 1
        changeSelectionRange(step)
        event.preventDefault()
        return
      }

      if (keyCode === eventKeys.up || keyCode === eventKeys.down) {
        const step = (keyCode === eventKeys.up) ? -1 : 1
        const role = selectionRange.value[0] < offset.value ? 'start' : 'end'
        timePickeOptions[`${role}_scrollDown`](step)
        event.preventDefault()
        return
      }
    }

    const enabledHours = (role, compare) => {
      const defaultEnable = pickerBase.props.enabledHours ? pickerBase.props.enabledHours(role) : makeSelectRange(0, 23)
      const isStart = role === 'start'
      const compareDate = compare || (isStart ? maxDate.value : minDate.value)
      const hour = compareDate.hour()
      const hourIndex = defaultEnable.indexOf(hour)
      if (hourIndex < 0) {
        return defaultEnable
      }
      return isStart ? defaultEnable.slice(0, hourIndex + 1) : defaultEnable.slice(hourIndex)
    }
    const enabledMinutes = (hour, role, compare) => {
      const defaultEnable = pickerBase.props.enabledMinutes ? pickerBase.props.enabledMinutes(hour, role) : makeSelectRange(0, 59)
      const isStart = role === 'start'
      const compareDate = compare || (isStart ? maxDate.value : minDate.value)
      const compareHour = compareDate.hour()
      if (hour !== compareHour) {
        return defaultEnable
      }
      const minute = compareDate.minute()
      const minuteIndex = defaultEnable.indexOf(minute)
      if (minuteIndex < 0) {
        return defaultEnable
      }
      return isStart ? defaultEnable.slice(0, minuteIndex + 1) : defaultEnable.slice(minuteIndex)
    }
    const enabledSeconds = (hour, minute, role, compare) => {
      const defaultEnable = pickerBase.props.enabledSeconds ? pickerBase.props.enabledSeconds(hour, minute ,role) : makeSelectRange(0, 59)
      const isStart = role === 'start'
      const compareDate = compare || (isStart ? maxDate.value : minDate.value)
      const compareHour = compareDate.hour()
      const compareMinute = compareDate.minute()
      if (hour !== compareHour || minute !== compareMinute) {
        return defaultEnable
      }
      const second = compareDate.second()
      const secondIndex = defaultEnable.indexOf(second)
      if (secondIndex < 0) {
        return defaultEnable
      }
      return isStart ? defaultEnable.slice(0, secondIndex + 1) : defaultEnable.slice(secondIndex)
    }

    const getRangeAvaliableTime = (dates: Array<Dayjs>) => {
      return dates.map((_, index) => getRangeAvaliableTimeEach(dates[0], dates[1], index === 0 ? 'start' : 'end'))
    }

    const getRangeAvaliableTimeEach = (startDate: Dayjs, endDate: Dayjs, role) => {
      const enabledMap = {
        hour: enabledHours,
        minute: enabledMinutes,
        second: enabledSeconds,
      }
      const isStart = role === 'start'
      let result = isStart ? startDate : endDate
      const compareDate = isStart ? endDate : startDate;
      ['hour', 'minute', 'second'].forEach(_ => {
        if (enabledMap[_]) {
          let avaliableArr
          const method = enabledMap[_]
          if (_ === 'minute') {
            avaliableArr = method(result.hour(), role, compareDate)
          } else if (_ === 'second') {
            avaliableArr = method(result.hour(), result.minute(), role, compareDate)
          } else {
            avaliableArr = method(role, compareDate)
          }
          if (!avaliableArr.includes(result[_]())) {
            const pos = isStart ? 0 : avaliableArr.length - 1
            result = result[_](avaliableArr[pos])
          }
        }
      })
      return result
    }

    const parseUserInput = value => {
      if (!value) return null
      if (Array.isArray(value)) {
        return value.map(_=> dayjs(_, props.format))
      }
      return dayjs(value, props.format)
    }

    const formatToString = value => {
      if (!value) return null
      if (Array.isArray(value)) {
        return value.map(_=> _.format(props.format))
      }
      return value.format(props.format)
    }

    const pickerBase = inject('EP_PICKER_BASE') as any
    pickerBase.hub.emit('SetPickerOption',['formatToString', formatToString])
    pickerBase.hub.emit('SetPickerOption',['parseUserInput', parseUserInput])
    pickerBase.hub.emit('SetPickerOption',['isValidValue', isValidValue])
    pickerBase.hub.emit('SetPickerOption',['handleKeydown', handleKeydown])
    pickerBase.hub.emit('SetPickerOption',['getRangeAvaliableTime', getRangeAvaliableTime])

    const timePickeOptions = {} as any
    const pickerHub = mitt()
    pickerHub.on('SetOption', e => {
      timePickeOptions[e[0]] = e[1]
    })
    provide('EP_TIMEPICK_PANEL', {
      hub: pickerHub,
      methods: {
        enabledHours,
        enabledMinutes,
        enabledSeconds,
      },
    })

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
