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
      <span :class="ns.e('number')" :style="valueStyle">
        {{ displayValue }}
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
import { onBeforeUnmount, ref, watch } from 'vue'
import { useNamespace } from '@element-plus/hooks'
import { isNumber } from '@element-plus/utils'
import { countdownEmits, countdownProps, formatTimeStr } from './countdown'

const REFRESH_INTERVAL = 1000 / 30

defineOptions({
  name: 'ElCountdown',
})

const props = defineProps(countdownProps)
const emit = defineEmits(countdownEmits)
const ns = useNamespace('statistic')
const displayValue = ref('')
let timer: ReturnType<typeof setInterval> | undefined

const getTime = (val: number) => {
  return new Date(val).getTime()
}

const stopTimer = () => {
  if (timer) {
    clearInterval(timer)
    timer = undefined
  }
}

const startTimer = () => {
  const { value, format } = props
  const timestamp = getTime(isNumber(value) ? value : value.valueOf())
  displayValue.value = formatTimeStr(format, timestamp - Date.now())
  timer = setInterval(() => {
    let diff = timestamp - Date.now()
    emit('change', diff)
    if (diff <= 0) {
      diff = 0
      stopTimer()
      emit('finish')
    }
    displayValue.value = formatTimeStr(format, diff)
  }, REFRESH_INTERVAL)
}

watch(
  () => [props.value, props.format],
  () => {
    stopTimer()
    startTimer()
  },
  {
    immediate: true,
  }
)

onBeforeUnmount(() => {
  stopTimer()
})

defineExpose({
  /**
   * @description Current display value
   */
  displayValue,
})
</script>
