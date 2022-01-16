<template>
  <span
    :class="{
      [`${prefixClass}`]: true,
      'is-checked': checked,
    }"
    @click="onChange"
  >
    <slot></slot>
  </span>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { usePrefixClass } from '@element-plus/hooks'
import type { ExtractPropTypes } from 'vue'

export const checkTagProps = {
  checked: {
    type: Boolean,
    default: false,
  },
} as const

export type CheckTagProps = ExtractPropTypes<typeof checkTagProps>

export default defineComponent({
  name: 'ElCheckTag',

  props: checkTagProps,
  emits: ['change', 'update:checked'],

  setup(props, { emit }) {
    const prefixClass = usePrefixClass('check-tag')

    const onChange = () => {
      const checked = !props.checked
      emit('change', checked)
      emit('update:checked', checked)
    }

    return {
      prefixClass,
      onChange,
    }
  },
})
</script>
