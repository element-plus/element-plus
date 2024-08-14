<script setup lang="ts">
import VpLink from '../common/vp-link.vue'

defineProps({
  text: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
  prefix: {
    type: String,
    default: '',
  },
})
</script>

<template>
  <slot>
    <span v-if="prefix" class="mr-1">{{ prefix }}</span>
    <VpLink :href="url">
      {{ text }}
    </VpLink>
  </slot>
</template>

<style scoped>
:deep(.el-icon) {
  font-size: 18px;
}
</style>
