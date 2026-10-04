<script lang="ts" setup>
import type { EpThemeColor } from '~/utils/theme'

defineProps<{ name: EpThemeColor }>()
</script>

<template>
  <div class="mt-4">
    <EpThemeColorInput :name="name" />
    <EpThemeColorBar class="mt-2" :name="name" />
  </div>
</template>
