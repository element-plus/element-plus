<script setup lang="ts">
import { withBase } from 'vitepress'
import { shallowRef, onMounted } from 'vue'

const props = defineProps({
  file: {
    type: String,
    required: true,
  },
  demo: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <div class="example-showcase">
    <ClientOnly>
      <component v-if="demo" :is="demo" v-bind="$attrs" />
    </ClientOnly>
  </div>
</template>

<style lang="scss" scoped>
.example-showcase {
  padding: 1rem;
  margin: 0.5px;
  background-color: var(--bg-color);
  &.transparent-enabled {
    background-image: linear-gradient(
        45deg,
        rgb(249, 249, 250) 25%,
        transparent 25%
      ),
      linear-gradient(135deg, rgb(249, 249, 250) 25%, transparent 25%),
      linear-gradient(45deg, transparent 75%, rgb(249, 249, 250) 75%),
      linear-gradient(135deg, transparent 75%, rgb(249, 249, 250) 75%);
    background-size: 20px 20px;
    background-position: 0px 0px, 10px 0px, 10px -10px, 0px 10px;
  }

  @at-root .dark .example-showcase {
    background-image: unset;
    background-color: var(--bg-color-soft);
  }
}
</style>
