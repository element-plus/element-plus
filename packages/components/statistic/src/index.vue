<template>
  <div :class="[ns.b()]">
    <div class="head">
      <slot name="title">
        <span class="title">
          {{ title }}
        </span>
      </slot>
    </div>
    <div class="con">
      <span class="prefix">
        <slot name="prefix">
          {{ prefix }}
        </slot>
      </span>

      <span class="number" :style="valueStyle">
        <slot name="formatter"> {{ disposeValue }}</slot>
      </span>
      <span class="suffix">
        <slot name="suffix">
          {{ suffix }}
        </slot>
      </span>
    </div>
  </div>
</template>
<script lang="ts" setup>
// import { defineComponent } from 'vue'
import { onBeforeMount, onMounted, ref, watch } from 'vue'
import { ceil, fill } from 'lodash-unified'
import { useNamespace } from '@element-plus/hooks'
import {
  diffDate,
  formatTimeStr,
  magnification,
  statisticProps,
} from './statistic'
const emit = defineEmits(['finish', 'change'])
// import { useStatisticCustomStyle } from './statistic-custom'
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
function branch() {
  if (props.timeIndices) {
    countDown()
  } else {
    dispose()
  }
}
onBeforeMount(() => {
  suspend(true)
})
const dispose = function (option: any = {}): string {
  const {
    value: Pvalue,
    precision,
    groupSeparator,
    rate,
    decimalSeparator,
  } = props || option
  let value: any = Pvalue
  if (precision) value = ceil(value, precision)
  let integer: number | string = String(value).split('.')[0]
  const decimals =
    String(value).split('.')[1] ||
    (precision ? fill(Array.from({ length: precision }), 0).join('') : '')
  let result: number | string = 0
  // 1000 multiplying power
  if (groupSeparator) {
    integer = magnification(Number(integer), rate, groupSeparator)
  }

  result = [integer, decimals].join(decimals ? decimalSeparator || '.' : '')
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
  // const { format } = props
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
