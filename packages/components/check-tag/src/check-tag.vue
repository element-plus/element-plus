<template>
  <span :class="[ns.b(), ns.is('checked', checked)]" @click="onChange">
    <slot></slot>
  </span>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { useNamespace } from '@element-plus/hooks'
import { checkTagProps, checkTagEmits } from './check-tag'

export default defineComponent({
  name: 'ElCheckTag',

  props: checkTagProps,
  emits: checkTagEmits,

  setup(props, { emit }) {
    const ns = useNamespace('check-tag')

    const onChange = () => {
      const checked = !props.checked
      emit('change', checked)
      emit('update:checked', checked)
    }

    return {
      ns,
      onChange,
    }
  },
})
</script>
