<template>
  <span :class="containerKls" @click="handleChange">
    <slot />
  </span>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { CHANGE_EVENT } from '@element-plus/constants'
import { useNamespace } from '@element-plus/hooks'
import { useFormSize } from '@element-plus/components/form'
import { checkTagEmits } from './check-tag'

import type { CheckTagProps } from './check-tag'

defineOptions({
  name: 'ElCheckTag',
})
const props = withDefaults(defineProps<CheckTagProps>(), {
  type: 'primary',
})
const emit = defineEmits(checkTagEmits)

const tagSize = useFormSize()
const ns = useNamespace('check-tag')
const containerKls = computed(() => [
  ns.b(),
  ns.is('checked', props.checked),
  ns.is('disabled', props.disabled),
  ns.m(props.type || 'primary'),
  ns.m(tagSize.value || 'default'),
])

const handleChange = () => {
  if (props.disabled) return

  const checked = !props.checked
  emit(CHANGE_EVENT, checked)
  emit('update:checked', checked)
}
</script>
