<template>
  <div class="el-empty">
    <div>
      <slot name="image"></slot>
    </div>
    <div>
      <slot name="description"></slot>
    </div>
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ElEmpty',
  props: {
    description: {
      type: String,
      default: '',
    },
    image: {
      type: String,
      default: '',
    },
  },
  setup(props, { slots }) {
    // init here
  },
})
</script>
