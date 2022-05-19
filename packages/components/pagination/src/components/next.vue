<template>
  <button
    type="button"
    class="btn-next"
    :disabled="internalDisabled"
    :aria-disabled="internalDisabled"
    @click="$emit('click', $event)"
  >
    <span v-if="nextText">{{ nextText }}</span>
    <el-icon v-else><arrow-right /></el-icon>
  </button>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { ElIcon } from '@element-plus/components/icon'
import { ArrowRight } from '@element-plus/icons-vue'
import { paginationNextProps } from './next'

defineOptions({
  name: 'ElPaginationNext',
})

const props = defineProps(paginationNextProps)

defineEmits(['click'])

const internalDisabled = computed(
  () =>
    props.disabled ||
    props.currentPage === props.pageCount ||
    props.pageCount === 0
)
</script>
