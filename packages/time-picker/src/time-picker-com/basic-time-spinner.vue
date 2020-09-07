<template>
  <div class="el-time-spinner" :class="{ 'has-seconds': showSeconds }">
    <template v-if="!arrowControl">
      <el-scrollbar
        ref="listHourRef"
        class="el-time-spinner__wrapper"
        wrap-style="max-height: inherit;"
        view-class="el-time-spinner__list"
        noresize
        tag="ul"
        @mouseenter="emitSelectRange('hours')"
        @mousemove="adjustCurrentSpinner('hours')"
      >
        <li
          v-for="(disabled, hour) in hoursList"
          :key="hour"
          class="el-time-spinner__item"
          :class="{ 'active': hour === hours, disabled }"
          @click="handleClick('hours', { value: hour, disabled })"
        >
          {{ ('0' + (amPmMode ? (hour % 12 || 12) : hour )).slice(-2) }}{{ amPm(hour) }}
        </li>
      </el-scrollbar>
      <el-scrollbar
        ref="listMinuteRef"
        class="el-time-spinner__wrapper"
        wrap-style="max-height: inherit;"
        view-class="el-time-spinner__list"
        noresize
        tag="ul"
        @mouseenter="emitSelectRange('minutes')"
        @mousemove="adjustCurrentSpinner('minutes')"
      >
        <li
          v-for="(disabled, key) in minutesList"
          :key="key"
          class="el-time-spinner__item"
          :class="{ 'active': key === minutes, disabled }"
          @click="handleClick('minutes', { value: key, disabled })"
        >
          {{ ('0' + key).slice(-2) }}
        </li>
      </el-scrollbar>
      <el-scrollbar
        v-show="showSeconds"
        ref="listSecondRef"
        class="el-time-spinner__wrapper"
        wrap-style="max-height: inherit;"
        view-class="el-time-spinner__list"
        noresize
        tag="ul"
        @mouseenter="emitSelectRange('seconds')"
        @mousemove="adjustCurrentSpinner('seconds')"
      >
        <li
          v-for="(disabled, key) in secondsList"
          :key="key"
          class="el-time-spinner__item"
          :class="{ 'active': key === seconds, disabled }"
          @click="handleClick('seconds', { value: key, disabled })"
        >
          {{ ('0' + key).slice(-2) }}
        </li>
      </el-scrollbar>
    </template>
    <template v-if="arrowControl">
      <div
        class="el-time-spinner__wrapper is-arrow"
        @mouseenter="emitSelectRange('hours')"
      >
        <i v-repeat-click="decrease" class="el-time-spinner__arrow el-icon-arrow-up"></i>
        <i v-repeat-click="increase" class="el-time-spinner__arrow el-icon-arrow-down"></i>
        <ul class="el-time-spinner__list">
          <li
            v-for="(hour, key) in arrowHourList"
            :key="key"
            class="el-time-spinner__item"
            :class="{ 'active': hour === hours, 'disabled': hoursList[hour] }"
          >
            {{ hour === undefined ? '' : ('0' + (amPmMode ? (hour % 12 || 12) : hour )).slice(-2) + amPm(hour) }}
          </li>
        </ul>
      </div>
      <div
        class="el-time-spinner__wrapper is-arrow"
        @mouseenter="emitSelectRange('minutes')"
      >
        <i v-repeat-click="decrease" class="el-time-spinner__arrow el-icon-arrow-up"></i>
        <i v-repeat-click="increase" class="el-time-spinner__arrow el-icon-arrow-down"></i>
        <ul class="el-time-spinner__list">
          <li
            v-for="(minute, key) in arrowMinuteList"
            :key="key"
            class="el-time-spinner__item"
            :class="{ 'active': minute === minutes, 'disabled': minutesList[minute] }"
          >
            {{ minute === undefined ? '' : ('0' + minute).slice(-2) }}
          </li>
        </ul>
      </div>
      <div
        v-if="showSeconds"
        class="el-time-spinner__wrapper is-arrow"
        @mouseenter="emitSelectRange('seconds')"
      >
        <i v-repeat-click="decrease" class="el-time-spinner__arrow el-icon-arrow-up"></i>
        <i v-repeat-click="increase" class="el-time-spinner__arrow el-icon-arrow-down"></i>
        <ul class="el-time-spinner__list">
          <li
            v-for="(second, key) in arrowSecondList"
            :key="key"
            class="el-time-spinner__item"
            :class="{ 'active': second === seconds, 'disabled': secondsList[second] }"
          >
            {{ second === undefined ? '' : ('0' + second).slice(-2) }}
          </li>
        </ul>
      </div>
    </template>
  </div>
</template>
<script lang='ts'>
const newArray = (start, end) => {
  let result = []
  for (let i = start; i <= end; i++) {
    result.push(i)
  }
  return result
}

import RepeatClick from './repeat-click'
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
import ElScrollbar from '@element-plus/scrollbar/src'
import { Dayjs } from 'dayjs'
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
    const currentScrollbar = ref(null)
    const listHourRef: Ref<Nullable<HTMLElement>> = ref(null)
    const listMinuteRef: Ref<Nullable<HTMLElement>> = ref(null)
    const listSecondRef: Ref<Nullable<HTMLElement>> = ref(null)
    const listRefsMap = {
      hours: listHourRef, minutes: listMinuteRef, seconds: listSecondRef,
    }
    const hours = computed(() => {
      return props.spinnerDate.hour()
    })
    const minutes = computed(() => {
      return props.spinnerDate.minute()
    })
    const seconds = computed(() => {
      return props.spinnerDate.second()
    })
    const timePartsMap = {
      hours, minutes, seconds,
    }
    const hoursList = computed(() =>{
      const arr = []
      const enabledArr = pickerBase.props.enabledHours()
      for (let i = 0; i < 24; i++) {
        arr[i] = !enabledArr.includes(i)
      }
      return arr
    })
    const minutesList = computed(() =>{
      const arr = []
      const enabledArr = pickerBase.props.enabledMinutes(hours.value)
      for (let i = 0; i < 60; i++) {
        arr[i] = !enabledArr.includes(i)
      }
      return arr
    })
    const secondsList = computed(() =>{
      const arr = []
      const enabledArr = pickerBase.props.enabledSeconds(hours.value, minutes.value)
      for (let i = 0; i < 60; i++) {
        arr[i] = !enabledArr.includes(i)
      }
      return arr
    })
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
    const amPm = hour => {
      let shouldShowAmPm = props.amPmMode.toLowerCase() === 'a'
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
      adjustSpinner(type, timePartsMap[type].value)
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
      if (el) {
        el.value.$el.querySelector('.el-scrollbar__wrap').scrollTop = Math.max(0, value * typeItemHeight(type))
      }
    }

    const typeItemHeight  = type =>{
      const el = listRefsMap[type]
      return el.value.$el.querySelector('li').offsetHeight
    }

    const increase = () => {
      scrollDown(1)
    }

    const decrease = () => {
      scrollDown(-1)
    }

    const scrollDown = step => {
      if (!currentScrollbar.value) {
        emitSelectRange('hours')
      }

      const label = currentScrollbar.value
      const _hoursList = hoursList.value
      let now = timePartsMap[label].value

      if (currentScrollbar.value === 'hours') {
        let total = Math.abs(step)
        step = step > 0 ? 1 : -1
        let length = _hoursList.length
        while (length-- && total) {
          now = (now + step + _hoursList.length) % _hoursList.length
          if (_hoursList[now]) {
            continue
          }
          total--
        }
        if (_hoursList[now]) return
      } else {
        now = (now + step + 60) % 60
      }

      modifyDateField(label, now)
      adjustSpinner(label, now)
      nextTick(() => emitSelectRange(currentScrollbar.value))
    }

    const modifyDateField = (type, value) =>{
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

    const  handleScroll = type => {
      const value = Math.min(Math.round((listRefsMap[type].value.$el.querySelector('.el-scrollbar__wrap').scrollTop - (scrollBarHeight(type) * 0.5 - 10) / typeItemHeight(type) + 3) / typeItemHeight(type)), (type === 'hours' ? 23 : 59))
      modifyDateField(type, value)
    }

    const scrollBarHeight = type => {
      return listRefsMap[type].value.$el.offsetHeight
    }

    const bindScrollEvent = () => {
      const bindFuntion = type => {
        listRefsMap[type].value.$el.querySelector('.el-scrollbar__wrap').onscroll = () => {
          // TODO: scroll is emitted when set scrollTop programatically
          // should find better solutions in the future!
          handleScroll(type)
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

    const pickerPanel = inject('EP_TIMEPICK_PANEL') as any
    pickerPanel.emit('SetOption',[`${props.role}_scrollDown`, scrollDown])
    pickerPanel.emit('SetOption',[`${props.role}_emitSelectRange`, emitSelectRange])
    const pickerBase = inject('EP_PICKER_BASE') as any

    return {
      currentScrollbar,
      hours,
      minutes,
      seconds,
      hoursList,
      minutesList,
      arrowHourList,
      arrowMinuteList,
      arrowSecondList,
      amPm,
      emitSelectRange,
      adjustCurrentSpinner,
      typeItemHeight,
      listHourRef,
      listMinuteRef,
      listSecondRef,
      increase,
      decrease,
      handleClick,
      secondsList,
    }
  },
})
</script>
