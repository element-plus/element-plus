<template>
  <span
    :class="{
      'el-check-tag': true,
      'is-checked': checked,
    }"
    @click="onChange"
  >
    <slot></slot>
  </span>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

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
    const onChange = () => {
      const checked = !props.checked
      emit('change', checked)
      emit('update:checked', checked)
    }

    return {
      onChange,
    }
  },
})
</script>
