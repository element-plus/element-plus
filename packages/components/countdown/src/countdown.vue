<template>
  <el-statistic
    :value="rawValue"
    :title="title"
    :prefix="prefix"
    :suffix="suffix"
    :value-style="valueStyle"
    :formatter="formatter"
  >
    <template v-for="(_, name) in $slots" #[name]>
      <slot :name="name" />
    </template>
  </el-statistic>
</template>
<script lang="ts" setup>
import { computed, onBeforeUnmount, ref, watch } from 'vue'
import { ElStatistic } from '@element-plus/components/statistic'
import { countdownEmits, countdownProps } from './countdown'
import { formatTime, getTime } from './utils'

defineOptions({
  name: 'ElCountdown',
})

const REFRESH_INTERVAL = 1000 / 30
const props = defineProps(countdownProps)
const emit = defineEmits(countdownEmits)

let timer: ReturnType<typeof setInterval> | undefined

const rawValue = ref(getTime(props.value) - Date.now())

const displayValue = computed(() => formatTime(rawValue.value, props.format))

const formatter = (val: number) => formatTime(val, props.format)

const stopTimer = () => {
  if (timer) {
    clearInterval(timer)
    timer = undefined
  }
}

const startTimer = () => {
  const timestamp = getTime(props.value)

  timer = setInterval(() => {
    let diff = timestamp - Date.now()
    emit('change', diff)
    if (diff <= 0) {
      diff = 0
      stopTimer()
      emit('finish')
    }
    rawValue.value = diff
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
   * @description current display value
   */
  displayValue,
})
</script>
