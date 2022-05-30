<script lang="ts" setup>
import { computed } from 'vue'
import { ElIcon } from '@element-plus/components/icon'
import { ArrowLeft } from '@element-plus/icons-vue'
import { paginationPrevEmits, paginationPrevProps } from './prev'

const props = defineProps(paginationPrevProps)

defineEmits(paginationPrevEmits)

defineOptions({
  name: 'ElPaginationPrev',
})

const internalDisabled = computed(
  () => props.disabled || props.currentPage <= 1
)
</script>

<template>
  <button
    type="button"
    class="btn-prev"
    :disabled="internalDisabled"
    :aria-disabled="internalDisabled"
    @click="$emit('click', $event)"
  >
    <span v-if="prevText">{{ prevText }}</span>
    <el-icon v-else><arrow-left /></el-icon>
  </button>
</template>
