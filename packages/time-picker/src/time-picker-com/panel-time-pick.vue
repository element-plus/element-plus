<template>
  <transition name="el-zoom-in-top">
    <div
      v-if="visible"
      class="el-time-panel"
    >
      <div class="el-time-panel__content" :class="{ 'has-seconds': showSeconds }">
        <time-spinner
          ref="spinner"
          role="start"
          :arrow-control="arrowControl"
          :show-seconds="showSeconds"
          :am-pm-mode="amPmMode"
          :spinner-date="parsedValue"
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
import {
  defineComponent,
  ref,
  computed,
  inject,
  provide,
  PropType,
} from 'vue'
import { EVENT_CODE } from '@element-plus/utils/aria'
import { t } from '@element-plus/locale'
import mitt from 'mitt'
import TimeSpinner from './basic-time-spinner.vue'
import dayjs, { Dayjs } from 'dayjs'
import { getAvaliableArrs } from './useTimePicker'

export default defineComponent({
  components: {
    TimeSpinner,
  },

  props: {
    visible: {
      type: Boolean,
      default: false,
    },
    parsedValue: {
      type: Dayjs as PropType<Dayjs>,
      default: '',
    },
    arrowControl: {
      type: Boolean,
      default: false,
    },
    pickerOptions: {
      type: Object,
      default: () => ({}),
    },
    format: {
      type: String,
      default: '',
    },
  },

  emits: ['pick', 'select-range'],

  setup(props, ctx) {
    // data
    const selectionRange = ref([0, 2])
    // computed
    const showSeconds = computed(() => {
      return props.format.includes('ss')
    })
    const amPmMode = computed(() => {
      if (props.format.includes('A')) return 'A'
      if (props.format.includes('a')) return 'a'
      return ''
    })
    // method
    const isValidValue = _date => {
      const parsedDate = dayjs(_date)
      const result = getRangeAvaliableTime(parsedDate)
      return parsedDate.isSame(result)
    }
    const handleCancel = () => {
      ctx.emit('pick', '', false, true)
    }
    const handleConfirm = (visible = false, first) => {
      if (first) return
      ctx.emit('pick', props.parsedValue, visible)
    }
    const handleChange = (_date: Dayjs) => {
      // visible avoids edge cases, when use scrolls during panel closing animation
      if (!props.visible) { return }
      const result = getRangeAvaliableTime(_date).millisecond(0)
      ctx.emit('pick', result, true)
    }

    const setSelectionRange = (start, end) => {
      ctx.emit('select-range', start, end)
      selectionRange.value = [start, end]
    }

    const changeSelectionRange = step => {
      const list = [0, 3].concat(showSeconds.value ? [6] : [])
      const mapping = ['hours', 'minutes'].concat(showSeconds.value ? ['seconds'] : [])
      const index = list.indexOf(selectionRange.value[0])
      const next = (index + step + list.length) % list.length
      timePickeOptions['start_emitSelectRange'](mapping[next])
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
        timePickeOptions['min_scrollDown'](step)
        event.preventDefault()
        return
      }
    }

    const getRangeAvaliableTime = (date: Dayjs) => {
      const avaliableMap = {
        hour: getAvaliableHours,
        minute: getAvaliableMinutes,
        second: getAvaliableSeconds,
      }
      let result = date;
      ['hour', 'minute', 'second'].forEach(_ => {
        if (avaliableMap[_]) {
          let avaliableArr
          const method = avaliableMap[_]
          if (_ === 'minute') {
            avaliableArr = method(result.hour())
          } else if (_ === 'second') {
            avaliableArr = method(result.hour(), result.minute())
          } else {
            avaliableArr = method()
          }
          if (avaliableArr && avaliableArr.length && !avaliableArr.includes(result[_]())) {
            result = result[_](avaliableArr[0])
          }
        }
      })
      return result
    }

    const parseUserInput = value => {
      if (!value) return null
      return dayjs(value, props.format)
    }

    const formatToString = value => {
      if (!value) return null
      return value.format(props.format)
    }

    const pickerBase = inject('EP_PICKER_BASE') as any
    pickerBase.hub.emit('SetPickerOption', ['isValidValue', isValidValue])
    pickerBase.hub.emit('SetPickerOption', ['formatToString', formatToString])
    pickerBase.hub.emit('SetPickerOption', ['parseUserInput', parseUserInput])
    pickerBase.hub.emit('SetPickerOption',['handleKeydown', handleKeydown])
    pickerBase.hub.emit('SetPickerOption',['getRangeAvaliableTime', getRangeAvaliableTime])
    const timePickeOptions = {} as any
    const pickerHub = mitt()
    pickerHub.on('SetOption', e => {
      timePickeOptions[e[0]] = e[1]
    })

    const { disabledHours, disabledMinutes, disabledSeconds } = pickerBase.props
    const {
      getAvaliableHours,
      getAvaliableMinutes,
      getAvaliableSeconds,
    } = getAvaliableArrs(disabledHours, disabledMinutes, disabledSeconds)
    provide('EP_TIMEPICK_PANEL', {
      hub: pickerHub,
      methods: {
        disabledHours, disabledMinutes, disabledSeconds,
      },
    })
    return {
      t,
      handleConfirm,
      handleChange,
      setSelectionRange,
      amPmMode,
      showSeconds,
      handleCancel,
    }
  },
})
</script>
<style scoped>
.el-time-panel {
  position: relative;
}
</style>
