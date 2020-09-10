<template>
  <span class="el-pagination__jump">
    {{ t('el.pagination.goto') }}
    <el-input
      class="el-pagination__editor is-in-pagination"
      :min="1"
      :max="pageCount"
      :disabled="disabled"
      :model-value="innerValue"
      type="number"
      @input="handleInput"
      @change="handleChange"
      @keyup="handleKeyup"
    />
    {{ t('el.pagination.pageClassifier') }}
  </span>
</template>

<script lang="ts">
import {
  computed,
  defineComponent,
  ref,
} from 'vue'
import { t } from '@element-plus/locale'
import { eventKeys } from '@element-plus/utils/aria'
import ElInput from '@element-plus/input/src/index.vue'
import { usePagination } from './usePagination'

export default defineComponent({
  components: {
    ElInput,
  },
  setup() {
    const { pagination, pageCount, disabled, currentPage } = usePagination()
    const userInput = ref<Nullable<number>>(null)
    const innerValue = computed(() => userInput.value ?? currentPage.value)

    function handleInput(event: InputEvent) {
      userInput.value = +(event?.target as HTMLInputElement).value
    }

    function handleChange(val: number) {
      pagination?.changeEvent(+val)
      userInput.value = null
    }

    function handleKeyup({ keyCode, target }: KeyboardEvent) {
      if (keyCode === eventKeys.enter) {
        handleChange(+(target as HTMLInputElement).value)
      }
    }

    return {
      t,
      userInput,
      pageCount,
      disabled,
      handleInput,
      handleKeyup,
      handleChange,
      innerValue,
    }
  },
})
</script>
