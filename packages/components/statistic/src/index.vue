<template>
  <div :class="[ns.b()]">
    <div :class="ns.e('head')">
      <span :class="ns.e('title')">
        <slot name="title">
          {{ title }}
        </slot>
      </span>
    </div>
    <div :class="ns.e('content')">
      <span :class="ns.e('prefix')">
        <slot name="prefix">
          {{ prefix }}
        </slot>
      </span>

      <span :class="ns.e('number')" :style="valueStyle">
        <slot name="formatter"> {{ disposeValue }}</slot>
      </span>
      <span :class="ns.e('suffix')">
        <slot name="suffix">
          {{ suffix }}
        </slot>
      </span>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { onBeforeUnmount, onMounted, ref, toRefs, watch } from 'vue'
import { ceil, fill, isNull } from 'lodash-unified'
import { useNamespace } from '@element-plus/hooks'
import {
  diffDate,
  formatTimeStr,
  magnification,
  statisticProps,
} from './statistic'
const emit = defineEmits(['finish', 'change'])
const props = defineProps(statisticProps)
defineOptions({
  name: 'ElStatistic',
})
const ns = useNamespace('statistic')
const disposeValue: any = ref(null)
const timeTask = ref<ReturnType<typeof setInterval> | null>(null)
const REFRESH_INTERVAL = 1000 / 30

onMounted(() => {
  branch()
})
watch(
  () => props.value,
  () => {
    branch()
  }
)
watch(
  () =>
    props.precision +
    props.groupSeparator +
    props.rate +
    props.decimalSeparator,
  () => {
    branch()
  }
)
function branch() {
  if (props.timeIndices) {
    countDown()
  } else {
    dispose()
  }
}
onBeforeUnmount(() => {
  suspend(true)
})
const dispose = function (option: any = {}): string {
  const {
    value: Pvalue,
    precision,
    groupSeparator,
    rate,
    decimalSeparator,
  } = toRefs(props) || option

  let value: any = Pvalue.value
  if (!isNull(props.precision)) value = ceil(value, props.precision)
  let integer: number | string = String(value).split('.')[0]
  const decimals =
    String(value).split('.')[1] ||
    (precision.value
      ? fill(Array.from({ length: precision.value }), 0).join('')
      : '')

  let result: number | string = 0
  // 1000 multiplying power
  if (groupSeparator.value) {
    integer = magnification(Number(integer), rate.value, groupSeparator.value)
  }
  result = [integer, decimals].join(
    decimals ? decimalSeparator.value || '.' : ''
  )
  disposeValue.value = result
  return result
}

const suspend = function (isStop: boolean): any {
  if (isStop && timeTask.value) {
    clearInterval(timeTask.value)
    timeTask.value = null
  } else {
    branch()
  }
  return disposeValue.value
}
const countDown = function () {
  if (timeTask.value) return
  const disappearTime = function (time: number): boolean {
    let result = true // stop
    if (time > 0) {
      result = false
      emit('change', true)
    } else {
      result = true
      suspend(true)
      emit('finish', true)
    }
    return result
  }

  timeTask.value = setInterval(() => {
    const diffTiem = diffDate(Number(props.value), Date.now())
    disposeValue.value = formatTimeStr(props.format, diffTiem)
    disappearTime(diffTiem)
  }, REFRESH_INTERVAL)
}
defineExpose({
  disposeValue,
  timeTask,
  REFRESH_INTERVAL,
  suspend,
})
</script>
