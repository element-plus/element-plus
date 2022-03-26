<template>
  <only-child v-if="asChild" :set-ref="setTriggerRef">
    <slot />
  </only-child>
  <button v-else ref="triggerRef">
    <slot />
  </button>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import OnlyChild from './only-child'
import { tooltipTriggerV2Props } from './trigger'

defineProps(tooltipTriggerV2Props)
const triggerRef = ref<HTMLElement | null>(null)
const setTriggerRef = (el: HTMLElement | null) => {
  triggerRef.value = el
}
</script>
