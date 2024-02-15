<script setup lang="ts">
import { computed } from 'vue'
import type { Component } from 'vue'

const props = defineProps<{
  icon: Component
  link: string
  text: string
}>()

const targetLink = computed(() => {
  if (props.text === 'GitHub') {
    const isPreview = window.location.host.startsWith('preview')
    if (isPreview) {
      const pr = window.location.host.split('-', 2)[1]
      return `${targetLink.value}/pull/${pr}`
    }
  }
  return props.link
})
</script>

<template>
  <a
    :href="targetLink"
    :title="text"
    target="_blank"
    rel="noreferrer noopener"
    class="social-link"
  >
    <ElIcon v-if="icon" :size="24">
      <component :is="icon" />
    </ElIcon>
  </a>
</template>

<style scoped lang="scss">
.social-link {
  color: var(--text-color);
}
</style>
