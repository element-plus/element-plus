<template>
  <span>
    <slot :text="wordCountText">
      {{ wordCountText }}
    </slot>
  </span>
</template>

<script setup lang="ts">
import { computed, useAttrs } from 'vue'

defineOptions({
  name: 'ElInputWordLimit',
})

const props = defineProps({
  textLength: {
    type: [String, Number],
  },
  /**
   * @private
   * @description delimiter between text length and max length
   */
  delimiter: {
    type: String,
    default: '/',
  },
})

const attrs = useAttrs()

const wordCountText = computed(
  () => `${props.textLength} ${props.delimiter} ${attrs.maxlength}`
)
</script>
