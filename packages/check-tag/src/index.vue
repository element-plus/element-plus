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
<script lang='ts'>
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'ElCheckTag',
  props: {
    checked: Boolean,
  },
  emits: ['change'],
  setup(props, { emit }) {

    const onChange = () => {
      emit('change', !props.checked)
    }

    return {
      onChange,
    }
  },
})
</script>
