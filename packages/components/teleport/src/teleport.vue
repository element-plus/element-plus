<template>
  <template v-if="disabled">
    <slot />
  </template>
  <teleport v-else :to="appendTo">
    <slot />
  </teleport>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { teleportProps } from './teleport'
import { useGlobalConfig } from '@element-plus/components/config-provider'

const props = defineProps(teleportProps)
const globalConfig = useGlobalConfig()
const appendTo = computed(() => globalConfig.value.appendTo || props.to)
</script>
