<template>
  <render />
</template>

<script lang="ts" setup>
import { h, useSlots } from 'vue'
import { useNamespace } from '@element-plus/hooks'
import { useFormSize } from '@element-plus/components/form'
import { textProps } from './text'

defineOptions({
  name: 'ElText',
})
const props = defineProps(textProps)
const slots = useSlots()

const textSize = useFormSize()
const ns = useNamespace('text')

const render = () => {
  return h(
    props.as,
    {
      class: [
        ns.b(),
        ns.m(props.type),
        ns.m(textSize.value),
        ns.is('truncated', props.truncated),
      ],
    },
    slots.default?.()
  )
}
</script>
