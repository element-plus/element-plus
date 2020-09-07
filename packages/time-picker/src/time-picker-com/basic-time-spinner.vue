<template>
  <div class="el-time-spinner" :class="{ 'has-seconds': showSeconds }">
    <template v-if="!arrowControl">
      <el-scrollbar
        v-for="item in spinnerItems"
        :key="item"
        :ref="getRefId(item)"
        class="el-time-spinner__wrapper"
        wrap-style="max-height: inherit;"
        view-class="el-time-spinner__list"
        noresize
        tag="ul"
        @mouseenter="emitSelectRange(item)"
        @mousemove="adjustCurrentSpinner(item)"
      >
        <li
          v-for="(disabled, key) in listMap[item].value"
          :key="key"
          class="el-time-spinner__item"
          :class="{ 'active': key === timePartsMap[item].value, disabled }"
          @click="handleClick(item, { value: key, disabled })"
        >
          <template v-if="item === 'hours'">
            {{ ('0' + (amPmMode ? (key % 12 || 12) : key )).slice(-2) }}{{ getAmPmFlag(key) }}
          </template>
          <template v-else>
            {{ ('0' + key).slice(-2) }}
          </template>
        </li>
      </el-scrollbar>
    </template>
    <template v-if="arrowControl">
      <div
        v-for="item in spinnerItems"
        :key="item"
        class="el-time-spinner__wrapper is-arrow"
        @mouseenter="emitSelectRange(item)"
      >
        <i v-repeat-click="onDecreaseClick" class="el-time-spinner__arrow el-icon-arrow-up"></i>
        <i v-repeat-click="onIncreaseClick" class="el-time-spinner__arrow el-icon-arrow-down"></i>
        <ul class="el-time-spinner__list">
          <li
            v-for="(time, key) in arrowListMap[item].value"
            :key="key"
            class="el-time-spinner__item"
            :class="{ 'active': time === timePartsMap[item].value, 'disabled': listMap[item].value[time] }"
          >
            {{ time === undefined ? '' : ('0' + (amPmMode ? (time % 12 || 12) : time )).slice(-2) + getAmPmFlag(time) }}
          </li>
        </ul>
      </div>
    </template>
  </div>
</template>
<script lang='ts'>
import {
  defineComponent,
  ref,
  Ref,
  nextTick,
  computed,
  onMounted,
  PropType,
  inject,
} from 'vue'
import { Dayjs } from 'dayjs'
import RepeatClick from './repeat-click'
import ElScrollbar from '@element-plus/scrollbar/src'

const getList = (total, method, methodFunc) => {
  const arr = []
  const enabledArr = method && methodFunc()
  for (let i = 0; i < total; i++) {
    arr[i] = enabledArr ? !enabledArr.includes(i) : false
  }
  return arr
}
export default defineComponent({

  directives: {
    repeatClick: RepeatClick,
  },

  components: {
    ElScrollbar,
  },

  props: {
    role: {
      type: String,
      required: true,
    },
    spinnerDate: {
      type: Dayjs as PropType<Dayjs>,
      required: true,
    },
    showSeconds: {
      type: Boolean,
      default: true,
    },
    arrowControl: Boolean,
    amPmMode: {
      type: String,
      default: '', // 'a': am/pm; 'A': AM/PM
    },
  },

  emits: ['change', 'select-range'],

  setup(props, ctx) {
    // data
    const currentScrollbar = ref(null)
    const listHoursRef: Ref<Nullable<HTMLElement>> = ref(null)
    const listMinutesRef: Ref<Nullable<HTMLElement>> = ref(null)
    const listSecondsRef: Ref<Nullable<HTMLElement>> = ref(null)
    const listRefsMap = {
      hours: listHoursRef, minutes: listMinutesRef, seconds: listSecondsRef,
    }

    // computed
    const spinnerItems = computed(() => {
      const arr = ['hours', 'minutes', 'seconds']
      return props.showSeconds ? arr : arr.slice(0, 2)
    })
    const hours = computed(() => {
      return props.spinnerDate.hour()
    })
    const minutes = computed(() => {
      return props.spinnerDate.minute()
    })
    const seconds = computed(() => {
      return props.spinnerDate.second()
    })
    const timePartsMap = computed(() => ({
      hours, minutes, seconds,
    }))
    const hoursList = computed(() =>{
      return getList(24, pickerBase.props.enabledHours, pickerBase.props.enabledHours)
    })
    const minutesList = computed(() =>{
      return getList(60, pickerBase.props.enabledMinutes, () => pickerBase.props.enabledMinutes(hours.value))
    })
    const secondsList = computed(() =>{
      return getList(60, pickerBase.props.enabledSeconds, () => pickerBase.props.enabledSeconds(hours.value, minutes.value))
    })
    const listMap = computed(() => ({
      hours: hoursList,
      minutes: minutesList,
      seconds: secondsList,
    }))
    const arrowHourList = computed(() => {
      const hour = hours.value
      return [
        hour > 0 ? hour - 1 : undefined,
        hour,
        hour < 23 ? hour + 1 : undefined,
      ]
    })
    const arrowMinuteList = computed(()=> {
      const minute = minutes.value
      return [
        minute > 0 ? minute - 1 : undefined,
        minute,
        minute < 59 ? minute + 1 : undefined,
      ]
    })
    const arrowSecondList = computed(() =>{
      const second = seconds.value
      return [
        second > 0 ? second - 1 : undefined,
        second,
        second < 59 ? second + 1 : undefined,
      ]
    })
    const arrowListMap = computed(() => ({
      hours: arrowHourList,
      minutes: arrowMinuteList,
      seconds: arrowSecondList,
    }))
    const getAmPmFlag = hour => {
      let shouldShowAmPm = !!props.amPmMode
      if (!shouldShowAmPm) return ''
      let isCapital = props.amPmMode === 'A'
      // todo locale
      let content = (hour < 12) ? ' am' : ' pm'
      if (isCapital) content = content.toUpperCase()
      return content
    }

    const emitSelectRange = type =>{
      if (type === 'hours') {
        ctx.emit('select-range', 0, 2)
      } else if (type === 'minutes') {
        ctx.emit('select-range', 3, 5)
      } else if (type === 'seconds') {
        ctx.emit('select-range', 6, 8)
      }
      currentScrollbar.value = type
    }

    const adjustCurrentSpinner = type =>{
      adjustSpinner(type, timePartsMap.value[type].value)
    }

    // NOTE: used by datetime / date-range panel
    //       renamed from adjustScrollTop
    //       should try to refactory it
    const adjustSpinners = () => {
      adjustCurrentSpinner('hours')
      adjustCurrentSpinner('minutes')
      adjustCurrentSpinner('seconds')
    }

    const adjustSpinner = (type, value) => {
      if (props.arrowControl) return
      const el = listRefsMap[type]
      if (el.value) {
        el.value.$el.querySelector('.el-scrollbar__wrap').scrollTop = Math.max(0, value * typeItemHeight(type))
      }
    }

    const typeItemHeight  = type =>{
      const el = listRefsMap[type]
      return el.value.$el.querySelector('li').offsetHeight
    }

    const onIncreaseClick = () => {
      scrollDown(1)
    }

    const onDecreaseClick = () => {
      scrollDown(-1)
    }

    const scrollDown = step => {
      if (!currentScrollbar.value) {
        emitSelectRange('hours')
      }

      const label = currentScrollbar.value
      let now = timePartsMap.value[label].value
      const total = currentScrollbar.value === 'hours' ? 24 : 60
      now = (now + step + total) % total

      modifyDateField(label, now)
      adjustSpinner(label, now)
      nextTick(() => emitSelectRange(currentScrollbar.value))
    }

    const modifyDateField = (type, value) => {
      switch (type) {
        case 'hours': ctx.emit('change',
          props.spinnerDate
            .hour(value)
            .minute(minutes.value)
            .second(seconds.value))
          break
        case 'minutes': ctx.emit('change',
          props.spinnerDate
            .hour(hours.value)
            .minute(value)
            .second(seconds.value))
          break
        case 'seconds': ctx.emit('change',
          props.spinnerDate
            .hour(hours.value)
            .minute(minutes.value)
            .second(value))
          break
      }
    }

    const handleClick = (type, { value, disabled }) => {
      if (!disabled) {
        modifyDateField(type, value)
        emitSelectRange(type)
        adjustSpinner(type, value)
      }
    }

    const handleScroll = type => {
      const value = Math.min(Math.round((listRefsMap[type].value.$el.querySelector('.el-scrollbar__wrap').scrollTop - (scrollBarHeight(type) * 0.5 - 10) / typeItemHeight(type) + 3) / typeItemHeight(type)), (type === 'hours' ? 23 : 59))
      modifyDateField(type, value)
    }

    const scrollBarHeight = type => {
      return listRefsMap[type].value.$el.offsetHeight
    }

    const bindScrollEvent = () => {
      const bindFuntion = type => {
        if (listRefsMap[type].value) {
          listRefsMap[type].value.$el.querySelector('.el-scrollbar__wrap').onscroll = () => {
          // TODO: scroll is emitted when set scrollTop programatically
          // should find better solutions in the future!
            handleScroll(type)
          }
        }
      }
      bindFuntion('hours')
      bindFuntion('minutes')
      bindFuntion('seconds')
    }

    onMounted(() => {
      nextTick(() => {
        !props.arrowControl && bindScrollEvent()
        adjustSpinners()
      })
    })

    const getRefId = item => {
      return `list${item.charAt(0).toUpperCase() + item.slice(1)}Ref`
    }

    const pickerPanel = inject('EP_TIMEPICK_PANEL') as any
    pickerPanel.emit('SetOption',[`${props.role}_scrollDown`, scrollDown])
    pickerPanel.emit('SetOption',[`${props.role}_emitSelectRange`, emitSelectRange])
    const pickerBase = inject('EP_PICKER_BASE') as any

    return {
      getRefId,
      spinnerItems,
      currentScrollbar,
      hours,
      minutes,
      seconds,
      hoursList,
      minutesList,
      arrowHourList,
      arrowMinuteList,
      arrowSecondList,
      getAmPmFlag,
      emitSelectRange,
      adjustCurrentSpinner,
      typeItemHeight,
      listHoursRef,
      listMinutesRef,
      listSecondsRef,
      onIncreaseClick,
      onDecreaseClick,
      handleClick,
      secondsList,
      timePartsMap,
      arrowListMap,
      listMap,
    }
  },
})
</script>
