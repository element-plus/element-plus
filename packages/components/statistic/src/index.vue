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
import { onMounted, ref, watch } from 'vue'
import { ceil, fill } from 'lodash'
import { useNamespace } from '@element-plus/hooks'
import {
  diffDate,
  formatTimeStr,
  magnification,
  statisticProps,
} from './statistic'
const emit = defineEmits(['finish'])
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
  props.timeIndices ? countDown() : dispose()
}

const dispose = function (): number {
  const {
    value: Pvalue,
    precision,
    groupSeparator,
    rate,
    decimalSeparator,
  } = props
  let value: any = Pvalue
  if (precision) value = ceil(value, precision)
  let integer: any = String(value).split('.')[0]
  const decimals =
    String(value).split('.')[1] ||
    (precision ? fill(Array.from({ length: precision }), 0).join('') : '')
  let result: any = 0
  // 1000 multiplying power
  if (groupSeparator) {
    integer = magnification(integer, rate, groupSeparator)
  }

  result = [integer, decimals].join(decimals ? decimalSeparator || '.' : '')
  disposeValue.value = result
  return result
}
const suspend = function (isStop: boolean): any {
  if (isStop && timeTask.value) {
    clearInterval(timeTask.value)
  } else {
    branch()
  }
  return disposeValue.value
}

const countDown = function () {
  const { value, format } = props
  let diffTiem = diffDate(Number(value), Date.now())
  const disappearTime = function (time: any) {
    let result = true // stop
    if (value > Date.now()) {
      result = false
    } else {
      result = true

      emit('finish', true)
    }
    return result
  }

  timeTask.value = setInterval(() => {
    if (disappearTime(diffTiem) && timeTask.value) clearInterval(timeTask.value)
    diffTiem = diffTiem < REFRESH_INTERVAL ? 0 : diffTiem - REFRESH_INTERVAL
    disposeValue.value = formatTimeStr(format, diffTiem)
  }, REFRESH_INTERVAL)
}
defineExpose({
  disposeValue,
  timeTask,
  REFRESH_INTERVAL,
  suspend,
})
</script>
