<template>
  <div :class="[ns.b('spinner'), { 'has-seconds': showSeconds }]">
    <template v-if="!arrowControl">
      <el-scrollbar
        v-for="item in spinnerItems"
        :key="item"
        :ref="(scrollbar: unknown) => setRef(scrollbar as any, item)"
        :class="ns.be('spinner', 'wrapper')"
        wrap-style="max-height: inherit;"
        :view-class="ns.be('spinner', 'list')"
        noresize
        tag="ul"
        @mouseenter="emitSelectRange(item)"
        @mousemove="adjustCurrentSpinner(item)"
      >
        <li
          v-for="({ disabled, key }, index) in timeList[item]"
          :key="key"
          :class="[
            ns.be('spinner', 'item'),
            ns.is('active', key === timePartials[item]),
            ns.is('disabled', disabled),
          ]"
          @click="handleClick(item, { value: key, index, disabled })"
        >
          <template v-if="item === 'hours'">
            {{ ('0' + (amPmMode ? key % 12 || 12 : key)).slice(-2)
            }}{{ getAmPmFlag(key) }}
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
        :class="[ns.be('spinner', 'wrapper'), ns.is('arrow')]"
        @mouseenter="emitSelectRange(item)"
      >
        <el-icon
          v-repeat-click="onDecrement"
          :class="['arrow-up', ns.be('spinner', 'arrow')]"
        >
          <arrow-up />
        </el-icon>
        <el-icon
          v-repeat-click="onIncrement"
          :class="['arrow-down', ns.be('spinner', 'arrow')]"
        >
          <arrow-down />
        </el-icon>
        <ul :class="ns.be('spinner', 'list')">
          <li
            v-for="(timeItem, key) in arrowControlTimeList[item]"
            :key="key"
            :class="[
              ns.be('spinner', 'item'),
              ns.is('active', timeItem?.key === timePartials[item]),
              ns.is('disabled', timeItem?.disabled),
            ]"
          >
            <template v-if="timeItem">
              <template v-if="item === 'hours'">
                {{
                  (
                    '0' + (amPmMode ? timeItem.key % 12 || 12 : timeItem.key)
                  ).slice(-2)
                }}{{ getAmPmFlag(timeItem.key) }}
              </template>
              <template v-else>
                {{ ('0' + timeItem.key).slice(-2) }}
              </template>
            </template>
          </li>
        </ul>
      </div>
    </template>
  </div>
</template>
<script lang="ts" setup>
import { computed, inject, nextTick, onMounted, ref, unref, watch } from 'vue'
import { debounce } from 'lodash-unified'
import { vRepeatClick } from '@element-plus/directives'
import ElScrollbar from '@element-plus/components/scrollbar'
import ElIcon from '@element-plus/components/icon'
import { ArrowDown, ArrowUp } from '@element-plus/icons-vue'
import { useNamespace } from '@element-plus/hooks'
import { getStyle } from '@element-plus/utils'
import { timeUnits } from '../constants'
import { buildTimeList } from '../utils'
import { basicTimeSpinnerProps } from '../props/basic-time-spinner'
import { getTimeLists } from '../composables/use-time-picker'

import type { Ref } from 'vue'
import type { ScrollbarInstance } from '@element-plus/components/scrollbar'
import type { TimeUnit } from '../constants'
import type { TimeList, TimeOption } from '../utils'

const pickerBase = inject('EP_PICKER_BASE') as any
const { timeFilter } = pickerBase.props
const props = defineProps(basicTimeSpinnerProps)
const emit = defineEmits(['change', 'select-range', 'set-option'])

const ns = useNamespace('time')

const { getHoursList, getMinutesList, getSecondsList } = getTimeLists(
  props.disabledHours,
  props.disabledMinutes,
  props.disabledSeconds
)

// data
let isScrolling = false

const currentScrollbar = ref<TimeUnit>()
const listHoursRef = ref<ScrollbarInstance>()
const listMinutesRef = ref<ScrollbarInstance>()
const listSecondsRef = ref<ScrollbarInstance>()
const listRefsMap: Record<TimeUnit, Ref<ScrollbarInstance | undefined>> = {
  hours: listHoursRef,
  minutes: listMinutesRef,
  seconds: listSecondsRef,
}

// computed
const spinnerItems = computed(() => {
  return props.showSeconds ? timeUnits : timeUnits.slice(0, 2)
})

const timePartials = computed<Record<TimeUnit, number>>(() => {
  const { spinnerDate } = props
  const hours = spinnerDate.hour()
  const minutes = spinnerDate.minute()
  const seconds = spinnerDate.second()
  return { hours, minutes, seconds }
})

const timeList = computed<Record<TimeUnit, TimeOption[]>>(() => {
  const { hours, minutes } = unref(timePartials)
  const list = {
    hours: getHoursList(props.role).map((item, key) => ({
      key,
      disabled: item,
    })),
    minutes: getMinutesList(hours, props.role).map((item, key) => ({
      key,
      disabled: item,
    })),
    seconds: getSecondsList(hours, minutes, props.role).map((item, key) => ({
      key,
      disabled: item,
    })),
  }
  if (timeFilter) {
    for (const [key, value] of Object.entries(list)) {
      list[key as keyof typeof list] = value.filter((item) =>
        timeFilter(key, item)
      )
    }
  }
  return list
})

const arrowControlTimeList = computed<Record<TimeUnit, TimeList>>(() => {
  const { hours, minutes, seconds } = unref(timePartials)

  return {
    hours: buildTimeList(hours, timeList.value['hours']),
    minutes: buildTimeList(minutes, timeList.value['minutes']),
    seconds: buildTimeList(seconds, timeList.value['seconds']),
  }
})

const debouncedResetScroll = debounce((type) => {
  isScrolling = false
  adjustCurrentSpinner(type)
}, 200)

const getAmPmFlag = (hour: number) => {
  const shouldShowAmPm = !!props.amPmMode
  if (!shouldShowAmPm) return ''
  const isCapital = props.amPmMode === 'A'
  // todo locale
  let content = hour < 12 ? ' am' : ' pm'
  if (isCapital) content = content.toUpperCase()
  return content
}

const emitSelectRange = (type: TimeUnit) => {
  let range

  switch (type) {
    case 'hours':
      range = [0, 2]
      break
    case 'minutes':
      range = [3, 5]
      break
    case 'seconds':
      range = [6, 8]
      break
  }
  const [left, right] = range

  emit('select-range', left, right)
  currentScrollbar.value = type
}

const adjustCurrentSpinner = (type: TimeUnit) => {
  const index = timeList.value[type].findIndex(
    (item) => item.key === unref(timePartials)[type]
  )
  adjustSpinner(type, index)
}

const adjustSpinners = () => {
  adjustCurrentSpinner('hours')
  adjustCurrentSpinner('minutes')
  adjustCurrentSpinner('seconds')
}

const getScrollbarElement = (el: HTMLElement) =>
  el.querySelector(`.${ns.namespace.value}-scrollbar__wrap`) as HTMLElement

const adjustSpinner = (type: TimeUnit, value: number) => {
  if (props.arrowControl) return
  const scrollbar = unref(listRefsMap[type])
  if (scrollbar && scrollbar.$el) {
    getScrollbarElement(scrollbar.$el).scrollTop = Math.max(
      0,
      value * typeItemHeight(type)
    )
  }
}

const typeItemHeight = (type: TimeUnit): number => {
  const scrollbar = unref(listRefsMap[type])
  const listItem = scrollbar?.$el.querySelector('li')
  if (listItem) {
    return Number.parseFloat(getStyle(listItem, 'height')) || 0
  }
  return 0
}

const onIncrement = () => {
  scrollDown(1)
}

const onDecrement = () => {
  scrollDown(-1)
}

const scrollDown = (step: number) => {
  if (!currentScrollbar.value) {
    emitSelectRange('hours')
  }

  const label = currentScrollbar.value!
  const now = unref(timePartials)[label]
  const next = findNextUnDisabled(now, timeList.value[label], step)
  if (next.index === -1) {
    return
  }
  modifyDateField(label, next.key)
  adjustSpinner(label, next.index)
  nextTick(() => emitSelectRange(label))
}

const findNextUnDisabled = (
  now: number,
  timeList: TimeOption[],
  step: number
) => {
  let curIndex = -1
  let prevIndex = -1
  let nextIndex = -1
  for (const [i, item] of timeList.entries()) {
    if (item.key === now) {
      curIndex = i
    }
    if (!item.disabled && item.key !== now) {
      if (
        curIndex === -1 ||
        (curIndex !== -1 && prevIndex === -1) ||
        prevIndex > curIndex
      ) {
        prevIndex = i
      }
      if (
        nextIndex === -1 ||
        (curIndex !== -1 && i > curIndex && nextIndex < curIndex)
      ) {
        nextIndex = i
      }
    }
  }

  if (step === -1) {
    return {
      index: prevIndex,
      key: timeList[prevIndex]?.key,
    }
  } else {
    return {
      index: nextIndex,
      key: timeList[nextIndex]?.key,
    }
  }
}

const modifyDateField = (type: TimeUnit, value: number) => {
  const list = unref(timeList)[type]
  const isDisabled = list.find((item) => item.key === value)?.disabled
  if (isDisabled) return

  const { hours, minutes, seconds } = unref(timePartials)

  let changeTo
  switch (type) {
    case 'hours':
      changeTo = props.spinnerDate.hour(value).minute(minutes).second(seconds)
      break
    case 'minutes':
      changeTo = props.spinnerDate.hour(hours).minute(value).second(seconds)
      break
    case 'seconds':
      changeTo = props.spinnerDate.hour(hours).minute(minutes).second(value)
      break
  }
  emit('change', changeTo)
}

const handleClick = (
  type: TimeUnit,
  {
    value,
    disabled,
    index,
  }: { value: number; index: number; disabled: boolean }
) => {
  if (!disabled) {
    modifyDateField(type, value)
    emitSelectRange(type)
    adjustSpinner(type, index)
  }
}

const handleScroll = (type: TimeUnit) => {
  isScrolling = true
  debouncedResetScroll(type)
  const value = Math.min(
    Math.round(
      (getScrollbarElement(unref(listRefsMap[type])!.$el).scrollTop -
        (scrollBarHeight(type) * 0.5 - 10) / typeItemHeight(type) +
        3) /
        typeItemHeight(type)
    ),
    type === 'hours' ? 23 : 59
  )
  const option = timeList.value[type].find((item, index) => index === value)
  modifyDateField(type, option?.key as number)
}

const scrollBarHeight = (type: TimeUnit) => {
  return unref(listRefsMap[type])!.$el.offsetHeight
}

const bindScrollEvent = () => {
  const bindFunction = (type: TimeUnit) => {
    const scrollbar = unref(listRefsMap[type])
    if (scrollbar && scrollbar.$el) {
      getScrollbarElement(scrollbar.$el).onscroll = () => {
        // TODO: scroll is emitted when set scrollTop programmatically
        // should find better solutions in the future!
        handleScroll(type)
      }
    }
  }
  bindFunction('hours')
  bindFunction('minutes')
  bindFunction('seconds')
}

const adjustDefaultTime = () => {
  const types: TimeUnit[] = ['hours', 'minutes', 'seconds']
  const times: number[] = []
  types.forEach((type) => {
    let closestIndex = -1
    let closestDiff = Number.POSITIVE_INFINITY
    timeList.value[type].forEach((item, index) => {
      if (!item.disabled) {
        const diff = Math.abs(item.key - unref(timePartials)[type])
        if (diff < closestDiff) {
          closestDiff = diff
          closestIndex = index
        }
      }
    })
    times.push(timeList.value[type][closestIndex].key)
  })
  emit(
    'change',
    props.spinnerDate.hour(times[0]).minute(times[1]).second(times[2])
  )
}

onMounted(() => {
  if (timeFilter) {
    adjustDefaultTime()
  }
  nextTick(() => {
    !props.arrowControl && bindScrollEvent()
    adjustSpinners()
    // set selection on the first hour part
    if (props.role === 'start') emitSelectRange('hours')
  })
})

const setRef = (scrollbar: ScrollbarInstance, type: TimeUnit) => {
  listRefsMap[type].value = scrollbar
}

emit('set-option', [`${props.role}_scrollDown`, scrollDown])
emit('set-option', [`${props.role}_emitSelectRange`, emitSelectRange])

watch(
  () => props.spinnerDate,
  () => {
    if (isScrolling) return
    adjustSpinners()
  }
)
</script>
