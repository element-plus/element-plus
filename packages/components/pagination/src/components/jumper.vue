<template>
  <span :class="ns.e('jump')" :disabled="disabled">
    {{ t('el.pagination.goto') }}
    <el-input
      size="small"
      :class="[ns.e('editor'), ns.is('in-pagination')]"
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
import { useLocale, useNamespace } from '@element-plus/hooks'
import ElInput from '@element-plus/components/input'
import { usePagination } from '../usePagination'

export default defineComponent({
  name: 'ElPaginationJumper',
  components: {
    ElInput,
  },

  setup() {
    const { t } = useLocale()
    const ns = useNamespace('pagination')
    const { pageCount, disabled, currentPage, changeEvent } = usePagination()
    const userInput = ref<number>()
    const innerValue = computed(() => userInput.value ?? currentPage?.value)

    function handleInput(val: number | string) {
      userInput.value = +val
    }

    function handleChange(val: number | string) {
      val = Math.trunc(+val)
      changeEvent?.(+val)
      userInput.value = undefined
    }

    return {
      ns,
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
