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
import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { ElStatistic } from '@element-plus/components/statistic'
import { cAF, rAF } from '@element-plus/utils'
import { countdownEmits, countdownProps } from './countdown'
import { formatTime, getTime } from './utils'

defineOptions({
  name: 'ElCountdown',
})

const props = defineProps(countdownProps)
const emit = defineEmits(countdownEmits)

let timer: ReturnType<typeof rAF> | undefined
const rawValue = ref<number>(0)
const displayValue = computed(() => formatTime(rawValue.value, props.format))

const formatter = (val: number) => formatTime(val, props.format)

const stopTimer = () => {
  if (timer) {
    cAF(timer)
    timer = undefined
  }
}

const startTimer = () => {
  const timestamp = getTime(props.value)
  const frameFunc = () => {
    let diff = timestamp - Date.now()
    emit('change', diff)
    if (diff <= 0) {
      diff = 0
      stopTimer()
      emit('finish')
    } else {
      timer = rAF(frameFunc)
    }
    rawValue.value = diff
  }
  timer = rAF(frameFunc)
}

onMounted(() => {
  rawValue.value = getTime(props.value) - Date.now()

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
})

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
