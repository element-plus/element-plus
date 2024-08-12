<template>
  <template v-if="disabled || !isLoadTeleport">
    <slot />
  </template>
  <teleport v-else :to="to">
    <slot />
  </teleport>
</template>

<script lang="ts" setup>
import { useLoadTeleport } from '@element-plus/hooks'
import { teleportProps } from './teleport'

const props = defineProps(teleportProps)

const isLoadTeleport = useLoadTeleport(props.to)
</script>
