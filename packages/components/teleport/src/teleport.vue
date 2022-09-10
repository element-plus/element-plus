<template>
  <teleport v-if="isClient && container" :to="container" :disabled="disabled">
    <div ref="containerRef" :class="ns.b()" :style="containerStyle">
      <slot />
    </div>
  </teleport>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue'
import { useMounted } from '@vueuse/core'
import { useNamespace } from '@element-plus/hooks'
import { teleportProps } from './teleport'
import type { StyleValue } from 'vue'

const props = defineProps(teleportProps)

const ns = useNamespace('teleport')
const isClient = useMounted()
const containerRef = ref<HTMLElement>()

const containerStyle = computed<StyleValue>(() => {
  return props.container === 'body'
    ? [
        props.style,
        {
          position: 'absolute',
          top: `0px`,
          left: `0px`,
          zIndex: props.zIndex,
        },
      ]
    : {}
})

defineExpose({
  /** @description container element */
  containerRef,
})
</script>
