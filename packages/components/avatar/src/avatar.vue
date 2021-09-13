<template>
  <span :class="avatarClass" :style="sizeStyle">
    <img
      v-if="(src || srcSet) && !hasLoadError"
      :src="src"
      :alt="alt"
      :srcset="srcSet"
      :style="fitStyle"
      @error="handleError"
    />
    <i v-else-if="icon" :class="icon"></i>
    <slot v-else></slot>
  </span>
</template>

<script lang="ts">
import { defineComponent, computed, ref, watch } from 'vue'
import { avatarEmits, avatarProps } from './avatar'

import type { CSSProperties } from 'vue'

export default defineComponent({
  name: 'ElAvatar',

  props: avatarProps,
  emits: avatarEmits,

  setup(props, { emit }) {
    const hasLoadError = ref(false)

    const avatarClass = computed(() => {
      const { size, icon, shape } = props
      const classList = ['el-avatar']
      if (size && typeof size === 'string') classList.push(`el-avatar--${size}`)
      if (icon) classList.push('el-avatar--icon')
      if (shape) classList.push(`el-avatar--${shape}`)
      return classList
    })

    const sizeStyle = computed<CSSProperties>(() => {
      const { size } = props
      return typeof size === 'number'
        ? {
            height: `${size}px`,
            width: `${size}px`,
            lineHeight: `${size}px`,
          }
        : {}
    })

    const fitStyle = computed<CSSProperties>(() => ({
      objectFit: props.fit,
    }))

    // need reset hasLoadError to false if src changed
    watch(
      () => props.src,
      () => (hasLoadError.value = false)
    )

    function handleError(e: Event) {
      hasLoadError.value = true
      emit('error', e)
    }

    return {
      hasLoadError,
      avatarClass,
      sizeStyle,
      fitStyle,
      handleError,
    }
  },
})
</script>
