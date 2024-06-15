<script setup lang="ts">
import { onMounted, ref } from 'vue'
import type { Component } from 'vue'

const props = defineProps<{
  icon: Component
  link: string
  text: string
}>()

const targetLink = ref(props.link)
onMounted(() => {
  if (props.text === 'GitHub') {
    const isPreview = globalThis.location?.host.startsWith('preview')
    if (isPreview) {
      const pr = globalThis.location.host.split('-', 2)[1]
      targetLink.value = `${targetLink.value}/pull/${pr}`
    }
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
