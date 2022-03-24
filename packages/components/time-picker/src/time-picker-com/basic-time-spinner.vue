<template>
  <div
    :class="[
      ns.b('spinner'),
      { 'has-seconds': showSeconds, 'has-minutes': showMinutes },
    ]"
  >
    <template v-if="!arrowControl">
      <el-scrollbar
        v-for="item in spinnerItems"
        :key="item"
        :ref="(scollbar) => setRef(scollbar, item)"
        :class="ns.be('spinner', 'wrapper')"
        wrap-style="max-height: inherit;"
        :view-class="ns.be('spinner', 'list')"
        noresize
        tag="ul"
        @mouseenter="emitSelectRange(item)"
        @mousemove="adjustCurrentSpinner(item)"
      >
        <li
          v-for="({ value, disabled }, index) in listMap[item].value"
          :key="value"
          :class="[
            ns.be('spinner', 'item'),
            ns.is('active', value === timePartsMap[item].value),
            ns.is('disabled', disabled),
          ]"
          @click="handleClick(item, { index, disabled })"
        >
          <template v-if="item === 'hours'">
            {{ ('0' + (amPmMode ? value % 12 || 12 : value)).slice(-2)
            }}{{ getAmPmFlag(value) }}
          </template>
          <template v-else>
            {{ ('0' + value).slice(-2) }}
          </template>
        </li>
      </el-scrollbar>
    </template>
    <template v-if="arrowControl">
      <div
        v-for="item in spinnerItems"
        :key="item"
        :class="[ns.be('spinner', 'wrapper'), ns.is('arrow')]"
        @mouseenter="emitSelectRange(item)"
      >
        <el-icon
          v-repeat-click="onDecreaseClick"
          :class="['arrow-up', ns.be('spinner', 'arrow')]"
        >
          <arrow-up />
        </el-icon>
        <el-icon
          v-repeat-click="onIncreaseClick"
          :class="['arrow-down', ns.be('spinner', 'arrow')]"
        >
          <arrow-down />
        </el-icon>
        <ul :class="ns.be('spinner', 'list')">
          <li
            v-for="(time, key) in arrowListMap[item].value"
            :key="key"
            :class="[
              ns.be('spinner', 'item'),
              ns.is('active', time === timePartsMap[item].value),
              ns.is(
                'disabled',
                listMap[item].value?.find(({ value }) => value === time)
                  ?.disabled
              ),
            ]"
          >
            <template v-if="typeof time === 'number'">
              <template v-if="item === 'hours'">
                {{ ('0' + (amPmMode ? time % 12 || 12 : time)).slice(-2)
                }}{{ getAmPmFlag(time) }}
              </template>
              <template v-else>
                {{ ('0' + time).slice(-2) }}
              </template>
            </template>
          </li>
        </ul>
      </div>
    </template>
  </div>
</template>
<script lang="ts">
import { computed, defineComponent, nextTick, onMounted, ref, watch } from 'vue'
import { debounce } from 'lodash-unified'
import { RepeatClick } from '@element-plus/directives'
import ElScrollbar from '@element-plus/components/scrollbar'
import ElIcon from '@element-plus/components/icon'
import { ArrowDown, ArrowUp } from '@element-plus/icons-vue'
import { useNamespace } from '@element-plus/hooks'
import { getAvailableList, getTimeLists } from './useTimePicker'

import type { PropType, Ref } from 'vue'
import type { Dayjs } from 'dayjs'
import type { Nullable } from '@element-plus/utils'

export default defineComponent({
  directives: {
    repeatClick: RepeatClick,
  },

  components: {
    ElScrollbar,
    ElIcon,
    ArrowUp,
    ArrowDown,
  },

  props: {
    role: {
      type: String,
      required: true,
    },
    spinnerDate: {
      type: Object as PropType<Dayjs>,
      required: true,
    },
    showSeconds: {
      type: Boolean,
      default: true,
    },
    showMinutes: {
      type: Boolean,
      default: true,
    },
    arrowControl: Boolean,
    amPmMode: {
      type: String,
      default: '', // 'a': am/pm; 'A': AM/PM
    },
    disabledHours: {
      type: Function,
    },
    disabledMinutes: {
      type: Function,
    },
    disabledSeconds: {
      type: Function,
    },
    start: {
      type: Array as PropType<number[]>,
      default: () => [0, 0, 0],
    },
    end: {
      type: Array as PropType<number[]>,
      default: () => [23, 59, 59],
    },
    step: {
      type: Array as PropType<number[]>,
      default: () => [1, 1, 1],
    },
  },

  emits: ['change', 'select-range', 'set-option'],

  setup(props, ctx) {
    const ns = useNamespace('time')
    // data
    let isScrolling = false
    const debouncedResetScroll = debounce((type) => {
      isScrolling = false
      adjustCurrentSpinner(type)
    }, 200)
    const currentScrollbar = ref(null)
    const listHoursRef: Ref<Nullable<HTMLElement>> = ref(null)
    const listMinutesRef: Ref<Nullable<HTMLElement>> = ref(null)
    const listSecondsRef: Ref<Nullable<HTMLElement>> = ref(null)
    const listRefsMap = {
      hours: listHoursRef,
      minutes: listMinutesRef,
      seconds: listSecondsRef,
    }

    // computed
    const spinnerItems = computed(() => {
      let arr = ['hours', 'minutes', 'seconds']
      if (!props.showMinutes) {
        arr = arr.slice(0, 1)
      } else if (!props.showSeconds) {
        arr = arr.slice(0, 2)
      }
      return arr
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
      hours,
      minutes,
      seconds,
    }))
    const availableItems = computed(() => {
      return getAvailableList(props.start, props.end, props.step)
    })
    const hoursList = computed(() => {
      return getHoursList(availableItems.value.hours, props.role)
    })
    const minutesList = computed(() => {
      return getMinutesList(
        availableItems.value.minutes,
        hours.value,
        props.role
      )
    })
    const secondsList = computed(() => {
      return getSecondsList(
        availableItems.value.seconds,
        hours.value,
        minutes.value,
        props.role
      )
    })
    const listMap = computed(() => ({
      hours: hoursList,
      minutes: minutesList,
      seconds: secondsList,
    }))
    const arrowHourList = computed(() => {
      const hour = hours.value
      const step = props.step[0] || 1
      return [
        hour >= step ? hour - step : undefined,
        hour,
        hour + step <= 23 ? hour + step : undefined,
      ]
    })
    const arrowMinuteList = computed(() => {
      const minute = minutes.value
      const step = props.step[1] || 1
      return [
        minute >= step ? minute - step : undefined,
        minute,
        minute + step <= 59 ? minute + step : undefined,
      ]
    })
    const arrowSecondList = computed(() => {
      const second = seconds.value
      const step = props.step[2] || 1
      return [
        second >= step ? second - step : undefined,
        second,
        second + step <= 59 ? second + step : undefined,
      ]
    })
    const arrowListMap = computed(() => ({
      hours: arrowHourList,
      minutes: arrowMinuteList,
      seconds: arrowSecondList,
    }))
    const getAmPmFlag = (hour) => {
      const shouldShowAmPm = !!props.amPmMode
      if (!shouldShowAmPm) return ''
      const isCapital = props.amPmMode === 'A'
      // todo locale
      let content = hour < 12 ? ' am' : ' pm'
      if (isCapital) content = content.toUpperCase()
      return content
    }

    const emitSelectRange = (type) => {
      if (type === 'hours') {
        ctx.emit('select-range', 0, 2)
      } else if (type === 'minutes') {
        ctx.emit('select-range', 3, 5)
      } else if (type === 'seconds') {
        ctx.emit('select-range', 6, 8)
      }
      currentScrollbar.value = type
    }

    const adjustCurrentSpinner = (type) => {
      const index = availableItems.value[type].indexOf(
        timePartsMap.value[type].value
      )
      adjustSpinner(type, index)
    }

    // NOTE: used by datetime / date-range panel
    //       renamed from adjustScrollTop
    //       should try to refactory it
    const adjustSpinners = () => {
      adjustCurrentSpinner('hours')
      adjustCurrentSpinner('minutes')
      adjustCurrentSpinner('seconds')
    }

    const getScrollbarElement = (el: HTMLElement) =>
      el.querySelector(`.${ns.namespace.value}-scrollbar__wrap`) as HTMLElement

    const adjustSpinner = (type, index) => {
      if (props.arrowControl) return
      const el = listRefsMap[type]
      if (el && el.$el) {
        getScrollbarElement(el.$el).scrollTop = Math.max(
          0,
          index * typeItemHeight(type)
        )
      }
    }

    const typeItemHeight = (type) => {
      const el = listRefsMap[type]
      return el.$el.querySelector('li').offsetHeight
    }

    const onIncreaseClick = () => {
      scrollDown(1)
    }

    const onDecreaseClick = () => {
      scrollDown(-1)
    }

    const scrollDown = (step) => {
      if (!currentScrollbar.value) {
        emitSelectRange('hours')
      }

      const label = currentScrollbar.value as unknown as string
      let nowIndex = availableItems.value[label].indexOf(
        timePartsMap.value[label].value
      )
      const total = availableItems.value[label].length
      nowIndex = nowIndex + step
      nowIndex = (nowIndex + total) % total
      modifyDateField(label, nowIndex)
      adjustSpinner(label, nowIndex)
      nextTick(() => emitSelectRange(currentScrollbar.value))
    }

    const modifyDateField = (type, index) => {
      const list = listMap.value[type].value
      const isDisabled = list[index].disabled
      const value = list[index].value
      if (isDisabled) return
      switch (type) {
        case 'hours':
          ctx.emit(
            'change',
            props.spinnerDate
              .hour(value)
              .minute(minutes.value)
              .second(seconds.value)
          )
          break
        case 'minutes':
          ctx.emit(
            'change',
            props.spinnerDate
              .hour(hours.value)
              .minute(value)
              .second(seconds.value)
          )
          break
        case 'seconds':
          ctx.emit(
            'change',
            props.spinnerDate
              .hour(hours.value)
              .minute(minutes.value)
              .second(value)
          )
          break
      }
    }

    const handleClick = (type, { index, disabled }) => {
      if (!disabled) {
        modifyDateField(type, index)
        emitSelectRange(type)
        adjustSpinner(type, index)
      }
    }

    const handleScroll = (type) => {
      isScrolling = true
      debouncedResetScroll(type)
      const index = Math.min(
        Math.round(
          (getScrollbarElement(listRefsMap[type].$el).scrollTop -
            (scrollBarHeight(type) * 0.5 - 10) / typeItemHeight(type) +
            3) /
            typeItemHeight(type)
        ),
        type === 'hours' ? 23 : 59
      )
      modifyDateField(type, index)
    }

    const scrollBarHeight = (type) => {
      return listRefsMap[type].$el.offsetHeight
    }

    const bindScrollEvent = () => {
      const bindFunction = (type) => {
        if (listRefsMap[type] && listRefsMap[type].$el) {
          getScrollbarElement(listRefsMap[type].$el).onscroll = () => {
            // TODO: scroll is emitted when set scrollTop programatically
            // should find better solutions in the future!
            handleScroll(type)
          }
        }
      }
      bindFunction('hours')
      bindFunction('minutes')
      bindFunction('seconds')
    }

    onMounted(() => {
      nextTick(() => {
        !props.arrowControl && bindScrollEvent()
        adjustSpinners()
        // set selection on the first hour part
        if (props.role === 'start') emitSelectRange('hours')
      })
    })

    const setRef = (scrollbar, type) => {
      listRefsMap[type] = scrollbar
    }

    ctx.emit('set-option', [`${props.role}_scrollDown`, scrollDown])
    ctx.emit('set-option', [`${props.role}_emitSelectRange`, emitSelectRange])

    const { getHoursList, getMinutesList, getSecondsList } = getTimeLists(
      props.disabledHours,
      props.disabledMinutes,
      props.disabledSeconds
    )

    watch(
      () => props.spinnerDate,
      () => {
        if (isScrolling) return
        adjustSpinners()
      }
    )

    return {
      ns,

      setRef,
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
