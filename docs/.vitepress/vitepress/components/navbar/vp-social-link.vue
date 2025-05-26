<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { usePreview, usePreviewPR } from '../../composables/use-playground'
import type { Component } from 'vue'

const props = defineProps<{
  icon: Component
  link: string
  text: string
}>()

const targetLink = ref(props.link)

onMounted(() => {
  if (props.text === 'GitHub' && usePreview()) {
    targetLink.value = `${targetLink.value}/pull/${usePreviewPR()}`
  }
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
