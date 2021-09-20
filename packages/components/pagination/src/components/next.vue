<template>
  <button
    type="button"
    class="btn-next"
    :disabled="internalDisabled"
    :aria-disabled="internalDisabled"
    @click="$emit('click', $event)"
  >
    <span v-if="nextText">{{ nextText }}</span>
    <i v-else class="el-icon el-icon-arrow-right"></i>
  </button>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'

const paginationNextProps = {
  disabled: Boolean,
  currentPage: {
    type: Number,
    default: 1,
  },
  pageCount: {
    type: Number,
    default: 50,
  },
  nextText: {
    type: String,
    default: '',
  },
} as const

export default defineComponent({
  name: 'ElPaginationNext',

  props: paginationNextProps,
  emits: ['click'],

  setup(props) {
    const internalDisabled = computed(
      () =>
        props.disabled ||
        props.currentPage === props.pageCount ||
        props.pageCount === 0
    )

    return {
      internalDisabled,
    }
  },
})
</script>
