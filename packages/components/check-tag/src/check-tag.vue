<script lang="ts" setup>
import { CHANGE_EVENT } from '@element-plus/constants'
import { useNamespace } from '@element-plus/hooks'
import { checkTagEmits, checkTagProps } from './check-tag'

const props = defineProps(checkTagProps)
const emit = defineEmits(checkTagEmits)
defineOptions({
  name: 'ElCheckTag',
})
const ns = useNamespace('check-tag')

const handleChange = () => {
  const checked = !props.checked
  emit(CHANGE_EVENT, checked)
  emit('update:checked', checked)
}
</script>

<template>
  <span :class="[ns.b(), ns.is('checked', checked)]" @click="handleChange">
    <slot />
  </span>
</template>
