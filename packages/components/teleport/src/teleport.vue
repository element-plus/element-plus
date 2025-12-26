<template>
  <teleport :disabled="disabled" :to="to">
    <slot />
  </teleport>
</template>

<script lang="ts" setup>
import { teleportProps } from './teleport'

defineProps(teleportProps)
</script>
