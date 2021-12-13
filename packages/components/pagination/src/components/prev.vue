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

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { ElIcon } from '@element-plus/components/icon'
import { ArrowLeft } from '@element-plus/icons-vue'

const paginationPrevProps = {
  disabled: Boolean,
  currentPage: {
    type: Number,
    default: 1,
  },
  prevText: {
    type: String,
    default: '',
  },
} as const

export default defineComponent({
  name: 'ElPaginationPrev',

  components: {
    ElIcon,
    ArrowLeft,
  },
  props: paginationPrevProps,
  emits: ['click'],

  setup(props) {
    const internalDisabled = computed(
      () => props.disabled || props.currentPage <= 1
    )
    return {
      internalDisabled,
    }
  },
})
</script>
