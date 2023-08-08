<template>
  <div ref="el$" role="typography" :class="[ns.b()]">
    我是排版主体
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue'
import { useNamespace } from '@element-plus/hooks'
import { typographyProps } from './typography'
const ns = useNamespace('typography')

defineOptions({
  name: 'ElTypography',
})

const props = defineProps(typographyProps)
console.log('props', props)
// init here
</script>
