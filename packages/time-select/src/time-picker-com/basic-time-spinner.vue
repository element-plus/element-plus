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
          :class="{ 'active': hour === hours, 'disabled': disabled }"
          @click="handleClick('hours', { value: hour, disabled: disabled })"
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
          v-for="(enabled, key) in minutesList"
          :key="key"
          class="el-time-spinner__item"
          :class="{ 'active': key === minutes, disabled: !enabled }"
          @click="handleClick('minutes', { value: key, disabled: false })"
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
          v-for="(second, key) in 60"
          :key="key"
          class="el-time-spinner__item"
          :class="{ 'active': key === seconds }"
          @click="handleClick('seconds', { value: key, disabled: false })"
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
            :class="{ 'active': minute === minutes }"
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
            :class="{ 'active': second === seconds }"
          >
            {{ second === undefined ? '' : ('0' + second).slice(-2) }}
          </li>
        </ul>
      </div>
    </template>
  </div>
</template>
<script lang='ts'>
const newArray = function(start, end) {
  let result = []
  for (let i = start; i <= end; i++) {
    result.push(i)
  }
  return result
}
const getRangeHours = function(ranges) {
  const hours = []
  let disabledHours = [];

  (ranges || []).forEach(range => {
    const value = range.map(date => date.getHours())

    disabledHours = disabledHours.concat(newArray(value[0], value[1]))
  })

  if (disabledHours.length) {
    for (let i = 0; i < 24; i++) {
      hours[i] = disabledHours.indexOf(i) === -1
    }
  } else {
    for (let i = 0; i < 24; i++) {
      hours[i] = false
    }
  }
  return hours
}
const setRangeData = (arr, start, end, value) => {
  for (let i = start; i < end; i++) {
    arr[i] = value
  }
}

const getRangeMinutes = function(ranges, hour) {
  const minutes = new Array(60)

  if (ranges.length > 0) {
    ranges.forEach(range => {
      const start = range[0]
      const end = range[1]
      const startHour = start.getHours()
      const startMinute = start.getMinutes()
      const endHour = end.getHours()
      const endMinute = end.getMinutes()
      if (startHour === hour && endHour !== hour) {
        setRangeData(minutes, startMinute, 60, true)
      } else if (startHour === hour && endHour === hour) {
        setRangeData(minutes, startMinute, endMinute + 1, true)
      } else if (startHour !== hour && endHour === hour) {
        setRangeData(minutes, 0, endMinute + 1, true)
      } else if (startHour < hour && endHour > hour) {
        setRangeData(minutes, 0, 60, true)
      }
    })
  } else {
    setRangeData(minutes, 0, 60, true)
  }
  return minutes
}
export const modifyTime = function(date, h, m, s) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate(), h, m, s, date.getMilliseconds())
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
} from 'vue'
import ElScrollbar from '@element-plus/scrollbar/src'
export default defineComponent({

  directives: {
    repeatClick: RepeatClick,
  },

  components: {
    ElScrollbar,
  },

  props: {
    spinnerDate: {
      type: Date as PropType<Date>,
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
    selectableRange: {
      type: Array,
      default: () => [],
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
      return props.spinnerDate.getHours()
    })
    const minutes = computed(() => {
      return props.spinnerDate.getMinutes()
    })
    const seconds = computed(() => {
      return props.spinnerDate.getSeconds()
    })
    const timePartsMap = {
      hours, minutes, seconds,
    }
    const hoursList = computed(() =>{
      return getRangeHours(props.selectableRange)
    })
    const minutesList = computed(() =>{
      return getRangeMinutes(props.selectableRange, hours.value)
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
    const amPm = (hour) => {
      let shouldShowAmPm = props.amPmMode.toLowerCase() === 'a'
      if (!shouldShowAmPm) return ''
      let isCapital = props.amPmMode === 'A'
      // todo locale
      let content = (hour < 12) ? ' am' : ' pm'
      if (isCapital) content = content.toUpperCase()
      return content
    }

    const emitSelectRange = (type) =>{
      if (type === 'hours') {
        ctx.emit('select-range', 0, 2)
      } else if (type === 'minutes') {
        ctx.emit('select-range', 3, 5)
      } else if (type === 'seconds') {
        ctx.emit('select-range', 6, 8)
      }
      currentScrollbar.value = type
    }

    const adjustCurrentSpinner = (type) =>{
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

    const typeItemHeight  = (type) =>{
      const el = listRefsMap[type]
      return el.value.$el.querySelector('li').offsetHeight
    }

    const increase = () => {
      scrollDown(1)
    }

    const decrease = () => {
      scrollDown(-1)
    }

    const scrollDown = (step) => {
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

    const  modifyDateField = (type, value) =>{
      switch (type) {
        case 'hours': ctx.emit('change', modifyTime(props.spinnerDate, value, minutes.value, seconds.value)); break
        case 'minutes': ctx.emit('change', modifyTime(props.spinnerDate, hours.value, value, seconds.value)); break
        case 'seconds': ctx.emit('change', modifyTime(props.spinnerDate, hours.value, minutes.value, value)); break
      }
    }

    const handleClick = (type, { value, disabled }) => {
      if (!disabled) {
        modifyDateField(type, value)
        emitSelectRange(type)
        adjustSpinner(type, value)
      }
    }

    const  handleScroll = (type) => {
      const value = Math.min(Math.round((listRefsMap[type].value.$el.querySelector('.el-scrollbar__wrap').scrollTop - (scrollBarHeight(type) * 0.5 - 10) / typeItemHeight(type) + 3) / typeItemHeight(type)), (type === 'hours' ? 23 : 59))
      modifyDateField(type, value)
    }

    const scrollBarHeight = (type) => {
      return listRefsMap[type].value.$el.offsetHeight
    }

    const bindScrollEvent = () => {
      const bindFuntion = (type) => {
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
    }
  },
})
</script>
