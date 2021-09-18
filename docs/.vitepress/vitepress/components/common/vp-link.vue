<script setup lang="ts">
import { computed } from 'vue'
import ExternalLink from '../icons/external-link-icon.vue'

const props = defineProps<{
  href?: string
  noIcon?: boolean
}>()

const isExternal = computed(() => props.href && /^[a-z]+:/i.test(props.href))
</script>

<template>
  <component
    :is="href ? 'a' : 'span'"
    class="link-item"
    :class="{ link: href }"
    :href="href"
    :target="isExternal ? '_blank' : undefined"
    :rel="isExternal ? 'noopener noreferrer' : undefined"
  >
    <slot />
    <ElIcon v-if="isExternal && !noIcon">
      <ExternalLink class="link-icon" />
    </ElIcon>
  </component>
</template>

<style scoped>
.link-item {
  display: flex;
  align-items: center;
}

.el-icon {
  margin-left: 4px;
}
</style>
