<template>
  <button
    type="button"
    class="btn-prev"
    :disabled="internalDisabled"
    :aria-disabled="internalDisabled"
    @click="$emit('click', $event)"
  >
    <span v-if="prevText">{{ prevText }}</span>
    <i v-else class="el-icon el-icon-arrow-left"></i>
  </button>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'

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
