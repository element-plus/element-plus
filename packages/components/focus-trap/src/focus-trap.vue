<template>
  <slot :handle-keydown="onKeydown" />
</template>

<script lang="ts" setup>
import { focusTrapEmits, focusTrapProps } from './focus-trap'
import { useFocusTrap } from './use-focus-trap'

defineOptions({
  name: 'ElFocusTrap',
  inheritAttrs: false,
})

const props = defineProps(focusTrapProps)

const emit = defineEmits(focusTrapEmits)

const { onKeydown } = useFocusTrap(props, emit)

defineExpose({
  onKeydown,
})
</script>
