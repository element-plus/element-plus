<template>
  <span :class="ns.e('jump')" :disabled="disabled">
    <span :class="[ns.e('goto')]">{{ t('g.pagination.goto') }}</span>
    <g-input
      :size="size"
      :class="[ns.e('editor'), ns.is('in-pagination')]"
      :min="1"
      :max="pageCount"
      :disabled="disabled"
      :model-value="innerValue"
      :validate-event="false"
      :aria-label="t('g.pagination.page')"
      type="number"
      @update:model-value="handleInput"
      @change="handleChange"
    />
    <span :class="[ns.e('classifier')]">{{
      t('g.pagination.pageClassifier')
    }}</span>
  </span>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue'
import { useLocale, useNamespace } from '@element-plus/hooks'
import GInput from '@element-plus/components/input'
import { usePagination } from '../usePagination'
import { paginationJumperProps } from './jumper'

defineOptions({
  name: 'GPaginationJumper',
})

defineProps(paginationJumperProps)
const { t } = useLocale()
const ns = useNamespace('pagination')
const { pageCount, disabled, currentPage, changeEvent } = usePagination()
const userInput = ref<number | string>()
const innerValue = computed(() => userInput.value ?? currentPage?.value)

function handleInput(val: number | string) {
  userInput.value = val ? +val : ''
}

function handleChange(val: number | string) {
  val = Math.trunc(+val)
  changeEvent?.(val)
  userInput.value = undefined
}
</script>
