<template>
  <button
    type="button"
    class="btn-prev"
    :disabled="internalDisabled"
    :aria-disabled="internalDisabled"
    @click.self.prevent
  >
    <span v-if="prevText ">{{ prevText }}</span>
    <i v-else class="el-icon el-icon-arrow-left"></i>
  </button>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'

export default defineComponent({
  name: 'Prev',
  props: {
    disabled: Boolean,
    currentPage: {
      type: Number,
      default: 1,
    },
    prevText: {
      type: String,
      default: '',
    },
  },
  setup(props) {
    const internalDisabled = computed(() => props.disabled || props.currentPage <= 1)
    return {
      internalDisabled,
    }
  },
})
</script>
