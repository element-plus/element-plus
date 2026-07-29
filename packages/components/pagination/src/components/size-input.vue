<template>
  <span :class="ns.e('size-input')" :disabled="disabled">
    <el-select
      :size="size"
      :class="ns.e('size-select')"
      :model-value="pageSize"
      :disabled="disabled"
      :popper-class="popperClass"
      :popper-style="popperStyle"
      :teleported="teleported"
      :validate-event="false"
      :append-to="appendSizeTo"
      :aria-label="t('el.pagination.pageSize')"
      filterable
      allow-create
      default-first-option
      @beforeinput.capture="handleBeforeInput"
      @input.capture="handleInput"
      @keydown.esc.capture="handleCancel"
      @click.capture="handleSelectorClick"
      @change="handleChange"
      @blur="handleBlur"
    >
      <el-option
        v-for="item in pageSizes"
        :key="item"
        :value="item"
        :label="String(item)"
      />
    </el-select>
    <span :class="ns.e('size-classifier')">{{
      t('el.pagination.pagesize')
    }}</span>
  </span>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { ElOption, ElSelect } from '@element-plus/components/select'
import { useLocale, useNamespace } from '@element-plus/hooks'
import { usePagination } from '../usePagination'
import { paginationSizeInputProps } from './size-input'

defineOptions({
  name: 'ElPaginationSizeInput',
})

const props = defineProps(paginationSizeInputProps)
const { t } = useLocale()
const ns = useNamespace('pagination')
const selectNs = useNamespace('select')
const { handleSizeChange } = usePagination()
const userInput = ref<string>()

function handleBeforeInput(event: InputEvent) {
  if (
    event.data !== null &&
    event.inputType.startsWith('insert') &&
    !/^\d+$/.test(event.data)
  ) {
    event.preventDefault()
  }
}

function handleInput(event: Event) {
  const input = event.target as HTMLInputElement
  const value = input.value.replace(/\D/g, '')

  if (value !== input.value) {
    input.value = value
  }
  userInput.value = value
}

function handleChange(val: number | string) {
  userInput.value = undefined
  const parsedValue = Number(val)
  if (val === '' || !Number.isFinite(parsedValue)) {
    return
  }

  const min = Number.isFinite(props.min)
    ? Math.max(1, Math.trunc(props.min))
    : 1
  const max = Number.isFinite(props.max)
    ? Math.max(min, Math.trunc(props.max!))
    : Number.POSITIVE_INFINITY
  const pageSize = Math.min(max, Math.max(min, Math.trunc(parsedValue)))

  if (pageSize !== props.pageSize) {
    handleSizeChange?.(pageSize)
  }
}

function handleCancel() {
  userInput.value = undefined
}

function handleSelectorClick(event: MouseEvent) {
  const target = event.target as HTMLElement | null
  if (target?.closest(`.${selectNs.e('suffix')}`)) {
    handleCancel()
  }
}

function handleBlur(event: FocusEvent) {
  const inputValue =
    (event.target as HTMLInputElement | null)?.value ?? userInput.value
  userInput.value = undefined
  if (inputValue) {
    handleChange(inputValue)
  }
}
</script>
