<template>
  <span :class="ns.e('jump')" :disabled="disabled">
    <span :class="[ns.e('goto')]">{{ t('el.pagination.goto') }}</span>
    <el-input
      :size="size"
      :class="[ns.e('editor'), ns.is('in-pagination')]"
      :min="1"
      :max="pageCount"
      :disabled="disabled"
      :model-value="innerValue"
      :validate-event="false"
      :label="t('el.pagination.page')"
      type="number"
      @update:model-value="handleInput"
      @change="handleChange"
    />
    <span :class="[ns.e('classifier')]">{{
      t('el.pagination.pageClassifier')
    }}</span>
  </span>
</template>

<script lang="ts" setup>
import { computed, defineExpose, onUnmounted, ref, watch } from 'vue'
import { useLocale, useNamespace } from '@element-plus/hooks'
import ElInput from '@element-plus/components/input'
import { usePagination } from '../usePagination'
import { paginationJumperProps } from './jumper'

defineOptions({
  name: 'ElPaginationJumper',
})

defineProps(paginationJumperProps)
const { t } = useLocale()
const ns = useNamespace('pagination')
const { pageCount, disabled, currentPage, changeEvent } = usePagination()
const userInput = ref<number | string>()
const innerValue = computed(() => userInput.value ?? currentPage?.value)
let timer = 0

function handleInput(val: number | string) {
  userInput.value = val ? +val : ''
}

function handleChange(val: number | string) {
  timer = setTimeout(() => {
    val = Math.trunc(+val)
    changeEvent?.(val)
    userInput.value = undefined
  }, 100)
}

function clearTimer() {
  timer && clearTimeout(timer)
  timer = 0
}

watch(currentPage!, () => {
  userInput.value = undefined
  timer && clearTimeout(timer)
})

onUnmounted(() => {
  clearTimer()
})

defineExpose({
  handleChange,
})
</script>
