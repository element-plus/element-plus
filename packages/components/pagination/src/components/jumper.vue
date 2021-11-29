<template>
  <span class="el-pagination__jump">
    {{ t('el.pagination.goto') }}
    <el-input
      size="small"
      class="el-pagination__editor is-in-pagination"
      :min="1"
      :max="pageCount"
      :disabled="disabled"
      :model-value="innerValue"
      type="number"
      @update:model-value="handleInput"
      @change="handleChange"
    />
    {{ t('el.pagination.pageClassifier') }}
  </span>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue'
import { useLocale } from '@element-plus/hooks'
import ElInput from '@element-plus/components/input'
import { usePagination } from '../usePagination'

export default defineComponent({
  name: 'ElPaginationJumper',
  components: {
    ElInput,
  },

  setup() {
    const { t } = useLocale()
    const { pageCount, disabled, currentPage, changeEvent } = usePagination()
    const userInput = ref<number>()
    const innerValue = computed(() => userInput.value ?? currentPage?.value)

    function handleInput(val: number | string) {
      userInput.value = +val
    }

    function handleChange(val: number | string) {
      changeEvent?.(+val)
      userInput.value = undefined
    }

    return {
      pageCount,
      disabled,
      innerValue,

      t,
      handleInput,
      handleChange,
    }
  },
})
</script>
