<template>
  <component
    :is="tag"
    :class="[
      ns.b(),
      ns.is(`justify-${props.justify}`, justify !== 'start'),
      ns.is(`align-${props.align}`, align !== 'top'),
    ]"
    :style="style"
  >
    <slot />
  </component>
</template>

<script setup lang="ts">
import { computed, provide } from 'vue'
import { useNamespace } from '@element-plus/hooks'
import { rowContextKey } from '@element-plus/tokens'
import { rowProps } from './row'
import type { CSSProperties } from 'vue'

defineOptions({
  name: 'ElRow',
})

const props = defineProps(rowProps)

const ns = useNamespace('row')
const gutter = computed(() => props.gutter)

provide(rowContextKey, {
  gutter,
})

const style = computed(() => {
  const styles: CSSProperties = {}
  if (!props.gutter) {
    return styles
  }

  styles.marginRight = styles.marginLeft = `-${props.gutter / 2}px`
  return styles
})
</script>
