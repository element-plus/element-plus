<template>
  <component :is="tag" :class="[ns.b(), classes]" :style="style">
    <slot />
  </component>
</template>

<script setup lang="ts">
import { computed, inject } from 'vue'
import { isNumber, isObject } from '@element-plus/utils'
import { useNamespace } from '@element-plus/hooks'
import { rowContextKey } from '@element-plus/tokens'
import { colProps } from './col'
import type { CSSProperties } from 'vue'

defineOptions({
  name: 'ElCol',
})

const props = defineProps(colProps)

const { gutter } = inject(rowContextKey, { gutter: computed(() => 0) })
const ns = useNamespace('col')

const style = computed(() => {
  const styles: CSSProperties = {}
  if (gutter.value) {
    styles.paddingLeft = styles.paddingRight = `${gutter.value / 2}px`
  }
  return styles
})

const classes = computed(() => {
  const classes: string[] = []
  const pos = ['span', 'offset', 'pull', 'push'] as const

  pos.forEach((prop) => {
    const size = props[prop]
    if (isNumber(size)) {
      if (prop === 'span') classes.push(ns.b(`${props[prop]}`))
      else if (size > 0) classes.push(ns.b(`${prop}-${props[prop]}`))
    }
  })

  const sizes = ['xs', 'sm', 'md', 'lg', 'xl'] as const
  sizes.forEach((size) => {
    if (isNumber(props[size])) {
      classes.push(ns.b(`${size}-${props[size]}`))
    } else if (isObject(props[size])) {
      Object.entries(props[size]).forEach(([prop, sizeProp]) => {
        classes.push(
          prop !== 'span'
            ? ns.b(`${size}-${prop}-${sizeProp}`)
            : ns.b(`${size}-${sizeProp}`)
        )
      })
    }
  })

  // this is for the fix
  if (gutter.value) {
    classes.push(ns.is('guttered'))
  }
  return classes
})
</script>
