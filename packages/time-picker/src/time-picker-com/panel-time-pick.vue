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
          :spinner-date="parsedValue"
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
import { timeWithinRange, limitTimeRange } from './time-picker-utils'
import {
  defineComponent,
  ref,
  computed,
  inject,
  provide,
  PropType,
} from 'vue'
import { eventKeys } from '@element-plus/utils/aria'
import { t } from '@element-plus/locale'
import mitt from 'mitt'
import TimeSpinner from './basic-time-spinner.vue'
import dayjs, { Dayjs } from 'dayjs'

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
      type: Dayjs as PropType<Dayjs>,
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
      const result = getRangeAvaliableTime(_date)
      return _date.isSame(result)
    }
    const handleCancel = () => {
      ctx.emit('pick', '', false, true)
    }
    const handleConfirm = (visible = false, first) => {
      if (first) return
      ctx.emit('pick', props.parsedValue.millisecond(0), visible)
    }
    const handleChange = (_date: Dayjs) => {
      // visible avoids edge cases, when use scrolls during panel closing animation
      if (!props.visible) { return }
      const result = _date.millisecond(0)
      // if date is out of range, do not emit
      if (isValidValue(result)) {
        ctx.emit('pick', result, true)
      }
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

    const getRangeAvaliableTime = (date: Dayjs) => {
      const enabledMap = {
        hour: pickerBase.props.enabledHours,
        minute: pickerBase.props.enabledMinutes,
        second: pickerBase.props.enabledSeconds,
      }
      let result = date;
      ['hour', 'minute', 'second'].forEach(_ => {
        if (enabledMap[_]) {
          const avaliableArr = enabledMap[_]()
          if (!avaliableArr.includes(result[_]())) {
            result = result[_](avaliableArr[0])
          }
        }
      })
      return result
    }

    const pickerBase = inject('EP_PICKER_BASE') as any
    pickerBase.hub.emit('SetPickerOption', ['isValidValue', isValidValue])
    pickerBase.hub.emit('SetPickerOption',['handleKeydown', handleKeydown])
    pickerBase.hub.emit('SetPickerOption',['getRangeAvaliableTime', getRangeAvaliableTime])
    const timePickeOptions = {} as any
    const pickerHub = mitt()
    pickerHub.on('SetOption', e => {
      timePickeOptions[e[0]] = e[1]
    })
    provide('EP_TIMEPICK_PANEL', pickerHub)
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
