<template>
  <button
    type="button"
    class="btn-prev"
    :disabled="internalDisabled"
    :aria-disabled="internalDisabled"
    @click="$emit('click', $event)"
  >
    <span v-if="prevText">{{ prevText }}</span>
    <el-icon v-else>
      <component :is="prevIcon" />
    </el-icon>
  </button>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { ElIcon } from '@element-plus/components/icon'
import { paginationPrevEmits, paginationPrevProps } from './prev'

defineOptions({
  name: 'ElPaginationPrev',
})

const props = defineProps(paginationPrevProps)
defineEmits(paginationPrevEmits)

const internalDisabled = computed(
  () => props.disabled || props.currentPage <= 1
)
</script>
