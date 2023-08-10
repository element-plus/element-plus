<template>
  <main ref="el$" role="typography" :class="[ns.b()]"><slot /></main>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue'
// import { useNamespace } from '@element-plus/hooks'
import { typographyProps } from './typography'
import { ns } from './util'
// const ns = useNamespace('typography')
defineOptions({
  name: 'ElTypography',
})

const props = defineProps(typographyProps)
console.log('props', props)
</script>
