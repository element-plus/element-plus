<template>
  <a
    :class="[
      'el-link',
      type ? `el-link--${type}` : '',
      disabled && 'is-disabled',
      underline && !disabled && 'is-underline'
    ]"
    :href="disabled ? null : href"
    @click="handleClick"
  >
    <i v-if="icon" :class="icon"></i>

    <span v-if="$slots.default" class="el-link--inner">
      <slot></slot>
    </span>

    <slot v-if="$slots.icon" name="icon"></slot>
  </a>
</template>
<script lang='ts'>
import { defineComponent, PropType } from 'vue'

type ILinkType = PropType<'primary' | 'success' | 'warning' | 'info' | 'danger' | 'default'>

export default defineComponent({
  name: 'ElLink',
  props: {
    type: {
      type: String as ILinkType,
      default: 'default',
      validator: (val: string) => {
        return ['default', 'primary', 'success', 'warning', 'info', 'danger'].includes(val)
      },
    },
    underline: {
      type: Boolean,
      default: true,
    },
    disabled: { type: Boolean, default: false },
    href: { type: String, default: '' },
    icon: { type: String, default: '' },
  },
  emits: ['click'],
  setup(props, { emit }) {

    function handleClick(event: Event) {
      if (!props.disabled) {
        emit('click', event)
      }
    }

    return {
      handleClick,
    }
  },
})
</script>
