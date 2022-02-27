<template>
  <a
    :class="[
      ns.b(),
      type ? ns.m(type) : '',
      ns.is('disabled', disabled),
      ns.is('underline', underline && !disabled),
    ]"
    :href="disabled || !href ? undefined : href"
    @click="handleClick"
  >
    <el-icon v-if="icon"><component :is="icon" /></el-icon>
    <span v-if="$slots.default" :class="ns.m('inner')">
      <slot></slot>
    </span>

    <slot v-if="$slots.icon" name="icon"></slot>
  </a>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { ElIcon } from '@element-plus/components/icon'
import { useNamespace } from '@element-plus/hooks'
import { linkProps, linkEmits } from './link'

export default defineComponent({
  name: 'ElLink',

  components: { ElIcon },

  props: linkProps,
  emits: linkEmits,

  setup(props, { emit }) {
    const ns = useNamespace('link')

    function handleClick(event: MouseEvent) {
      if (!props.disabled) emit('click', event)
    }

    return {
      ns,
      handleClick,
    }
  },
})
</script>
