<template>
  <div :class="ns.b()">
    <div v-if="!!$slots.title || title" ref="title" :class="ns.e('head')">
      <span :class="ns.e('title')">
        <slot name="title">
          {{ title }}
        </slot>
      </span>
    </div>
    <div :class="ns.e('content')">
      <span v-if="!!$slots.title || prefix" :class="ns.e('prefix')">
        <slot name="prefix">
          {{ prefix }}
        </slot>
      </span>
      <span v-if="value" :class="ns.e('number')" :style="valueStyle">
        <slot name="formatter"> {{ disposeValue }}</slot>
      </span>
      <span v-if="!!$slots.title || suffix" :class="ns.e('suffix')">
        <slot name="suffix">
          {{ suffix }}
        </slot>
      </span>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { isNil } from 'lodash-unified'
import { useNamespace } from '@element-plus/hooks'
import { countdownProps, diffDate, formatTimeStr } from './countdown'

const emit = defineEmits(['finish', 'change'])
const props = defineProps(countdownProps)

defineOptions({
  name: 'ElCountdown',
})

const ns = useNamespace('statistic')
const disposeValue: any = ref(null)
const timeTask = ref<ReturnType<typeof setInterval> | null>(null)
const REFRESH_INTERVAL = 1000 / 30
onMounted(() => {
  countDown()
})
watch(
  () => props.value,
  () => {
    countDown()
  }
)

onBeforeUnmount(() => {
  suspend(true)
})

const suspend = function (isStop: boolean): any {
  if (isStop && timeTask.value) {
    clearInterval(timeTask.value)
    timeTask.value = null
  } else {
    countDown()
  }
  return disposeValue.value
}
const countDown = function () {
  const { value } = props
  if (timeTask.value || isNil(value)) return
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
    disposeValue.value = formatTimeStr(
      props.format,
      diffTiem,
      Number(props.value)
    )
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
