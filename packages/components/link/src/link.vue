<template>
  <a
    :class="[
      'el-link',
      type ? `el-link--${type}` : '',
      disabled && 'is-disabled',
      underline && !disabled && 'is-underline',
    ]"
    :href="disabled || !href ? undefined : href"
    @click="handleClick"
  >
    <el-icon v-if="icon"><component :is="icon" /></el-icon>
    <span v-if="$slots.default" class="el-link--inner">
      <slot></slot>
    </span>

    <slot v-if="$slots.icon" name="icon"></slot>
  </a>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { ElIcon } from '@element-plus/components/icon'
import { linkProps, linkEmits } from './link'

export default defineComponent({
  name: 'ElLink',

  components: { ElIcon },

  props: linkProps,
  emits: linkEmits,

  setup(props, { emit }) {
    function handleClick(event: MouseEvent) {
      if (!props.disabled) emit('click', event)
    }

    return {
      handleClick,
    }
  },
})
</script>
