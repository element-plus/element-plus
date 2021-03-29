<template>
  <div v-if="actualVisible" class="el-time-range-picker el-picker-panel">
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
            :disabled-hours="disabledHours_"
            :disabled-minutes="disabledMinutes_"
            :disabled-seconds="disabledSeconds_"
            @change="handleMinChange"
            @set-option="onSetOption"
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
            :disabled-hours="disabledHours_"
            :disabled-minutes="disabledMinutes_"
            :disabled-seconds="disabledSeconds_"
            @change="handleMaxChange"
            @set-option="onSetOption"
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
</template>

<script lang="ts">
import {
  defineComponent,
  ref,
  computed,
  PropType,
  inject,
} from 'vue'
import dayjs, { Dayjs } from 'dayjs'
import union from 'lodash/union'
import { t } from '@element-plus/locale'
import { EVENT_CODE } from '@element-plus/utils/aria'
import TimeSpinner from './basic-time-spinner.vue'
import { getAvaliableArrs, useOldValue } from './useTimePicker'

const makeSelectRange = (start, end) => {
  const result = []
  for (let i = start; i <= end; i++) {
    result.push(i)
  }
  return result
}
export default defineComponent({

  components: { TimeSpinner },

  props: {
    visible: Boolean,
    actualVisible: Boolean,
    parsedValue: {
      type: [Array, String] as PropType<string | Array<Dayjs>>,
    },
    format: {
      type: String,
      default: '',
    },
  },

  emits: ['pick', 'select-range', 'set-picker-option'],

  setup(props, ctx) {
    const minDate = computed(() => props.parsedValue[0])
    const maxDate = computed(() => props.parsedValue[1])
    const oldValue = useOldValue(props)
    const handleCancel = () => {
      ctx.emit('pick', oldValue.value, null)
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
      const code = event.code

      if (code === EVENT_CODE.left || code === EVENT_CODE.right) {
        const step = (code === EVENT_CODE.left) ? -1 : 1
        changeSelectionRange(step)
        event.preventDefault()
        return
      }

      if (code === EVENT_CODE.up || code === EVENT_CODE.down) {
        const step = (code === EVENT_CODE.up) ? -1 : 1
        const role = selectionRange.value[0] < offset.value ? 'start' : 'end'
        timePickeOptions[`${role}_scrollDown`](step)
        event.preventDefault()
        return
      }
    }

    const disabledHours_ = (role, compare) => {
      const defaultDisable = disabledHours ? disabledHours(role) : []
      const isStart = role === 'start'
      const compareDate = compare || (isStart ? maxDate.value : minDate.value)
      const compareHour = compareDate.hour()
      const nextDisable = isStart ? makeSelectRange(compareHour + 1, 23) : makeSelectRange(0, compareHour - 1)
      return union(defaultDisable, nextDisable)
    }
    const disabledMinutes_ = (hour, role, compare) => {
      const defaultDisable = disabledMinutes ? disabledMinutes(hour, role) : []
      const isStart = role === 'start'
      const compareDate = compare || (isStart ? maxDate.value : minDate.value)
      const compareHour = compareDate.hour()
      if (hour !== compareHour) {
        return defaultDisable
      }
      const compareMinute = compareDate.minute()
      const nextDisable = isStart ? makeSelectRange(compareMinute + 1, 59) : makeSelectRange(0, compareMinute - 1)
      return union(defaultDisable, nextDisable)
    }
    const disabledSeconds_ = (hour, minute, role, compare) => {
      const defaultDisable = disabledSeconds ? disabledSeconds(hour, minute, role) : []
      const isStart = role === 'start'
      const compareDate = compare || (isStart ? maxDate.value : minDate.value)
      const compareHour = compareDate.hour()
      const compareMinute = compareDate.minute()
      if (hour !== compareHour || minute !== compareMinute) {
        return defaultDisable
      }
      const compareSecond = compareDate.second()
      const nextDisable = isStart ? makeSelectRange(compareSecond + 1, 59) : makeSelectRange(0, compareSecond - 1)
      return union(defaultDisable, nextDisable)
    }

    const getRangeAvaliableTime = (dates: Array<Dayjs>) => {
      return dates.map((_, index) => getRangeAvaliableTimeEach(dates[0], dates[1], index === 0 ? 'start' : 'end'))
    }

    const {
      getAvaliableHours,
      getAvaliableMinutes,
      getAvaliableSeconds,
    } = getAvaliableArrs(disabledHours_, disabledMinutes_, disabledSeconds_)

    const getRangeAvaliableTimeEach = (startDate: Dayjs, endDate: Dayjs, role) => {
      const avaliableMap = {
        hour: getAvaliableHours,
        minute: getAvaliableMinutes,
        second: getAvaliableSeconds,
      }
      const isStart = role === 'start'
      let result = isStart ? startDate : endDate
      const compareDate = isStart ? endDate : startDate;
      ['hour', 'minute', 'second'].forEach(_ => {
        if (avaliableMap[_]) {
          let avaliableArr
          const method = avaliableMap[_]
          if (_ === 'minute') {
            avaliableArr = method(result.hour(), role, compareDate)
          } else if (_ === 'second') {
            avaliableArr = method(result.hour(), result.minute(), role, compareDate)
          } else {
            avaliableArr = method(role, compareDate)
          }
          if (avaliableArr && avaliableArr.length && !avaliableArr.includes(result[_]())) {
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

    const getDefaultValue = () => {
      if (Array.isArray(defaultValue)) {
        return defaultValue.map(_=> dayjs(_))
      }
      return [
        dayjs(defaultValue),
        dayjs(defaultValue).add(60,'m'),
      ]
    }

    ctx.emit('set-picker-option',['formatToString', formatToString])
    ctx.emit('set-picker-option',['parseUserInput', parseUserInput])
    ctx.emit('set-picker-option',['isValidValue', isValidValue])
    ctx.emit('set-picker-option',['handleKeydown', handleKeydown])
    ctx.emit('set-picker-option',['getDefaultValue', getDefaultValue])
    ctx.emit('set-picker-option',['getRangeAvaliableTime', getRangeAvaliableTime])

    const timePickeOptions = {} as any
    const onSetOption = e => {
      timePickeOptions[e[0]] = e[1]
    }

    const pickerBase = inject('EP_PICKER_BASE') as any
    const { arrowControl, disabledHours, disabledMinutes, disabledSeconds, defaultValue } = pickerBase.props

    return {
      arrowControl,
      onSetOption,
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
      disabledHours_,
      disabledMinutes_,
      disabledSeconds_,
    }
  },
})
</script>
