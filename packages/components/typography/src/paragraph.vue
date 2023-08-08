<template>
  <div class="paragraph">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
</script>

<style lang="scss" scoped>
.paragraph {
  display: inline-block;
  width: inherit;
  margin-bottom: 1rem;
  border: solid rebeccapurple 1px;
}
</style>
