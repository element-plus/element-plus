<template>
  <slot v-if="show" />
</template>

<script lang="ts" setup>
import { computed, inject, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { isUndefined } from '@element-plus/utils'
import { avatarKey } from '@element-plus/tokens'
import { avatarFallbackProps } from './avatar-fallback'

const props = defineProps(avatarFallbackProps)
const { imageLoadingStatus } = inject(avatarKey)!

const canRender = ref(isUndefined(props.delayMs))
const show = computed(() => {
  return canRender.value && imageLoadingStatus.value !== 'loaded'
})

let timer: number

onMounted(() => {
  watch(
    () => props.delayMs,
    (delay) => {
      timer = window.setTimeout(() => {
        canRender.value = true
      }, delay)
    },
    {
      immediate: true,
    }
  )
})

onBeforeUnmount(() => {
  if (timer) {
    window.clearTimeout(timer)
  }
})
</script>
