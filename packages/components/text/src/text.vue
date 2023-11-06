<template>
  <component
    :is="tag"
    :class="textKls"
    :style="{ '-webkit-line-clamp': lineClamp }"
  >
    <slot />
  </component>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { useNamespace } from '@element-plus/hooks'
import { useFormSize } from '@element-plus/components/form'
import { isUndefined } from '@element-plus/utils'
import { textProps } from './text'

defineOptions({
  name: 'ElText',
})

const props = defineProps(textProps)

const textSize = useFormSize()
const ns = useNamespace('text')

const textKls = computed(() => [
  ns.b(),
  ns.m(props.type),
  ns.m(textSize.value),
  ns.is('truncated', props.truncated),
  ns.is('line-clamp', !isUndefined(props.lineClamp)),
])
</script>
