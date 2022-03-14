<template>
  <span :class="[ns.b(), ns.is('checked', checked)]" @click="handleChange">
    <slot />
  </span>
</template>

<script lang="ts" setup>
import { useNamespace } from '@element-plus/hooks'
import { checkTagProps, checkTagEmits } from './check-tag'

defineOptions({
  name: 'ElCheckTag',
})
const props = defineProps(checkTagProps)
const emit = defineEmits(checkTagEmits)

const ns = useNamespace('check-tag')

const handleChange = () => {
  const checked = !props.checked
  emit('change', checked)
  emit('update:checked', checked)
}
</script>
