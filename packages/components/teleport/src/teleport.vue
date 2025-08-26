<template>
  <template v-if="disabled">
    <slot />
  </template>
  <teleport v-else :to="to">
    <slot />
  </teleport>
</template>

<script lang="ts" setup>
import { teleportProps } from './teleport'

defineProps(teleportProps)
</script>
