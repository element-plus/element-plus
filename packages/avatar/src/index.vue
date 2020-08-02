<template>
  <span :class="avatarClass" :style="sizeStyle">
    <img
      v-if="(src || srcSet) && !hasLoadError"
      :src="src"
      @error="handleError"
      :alt="alt"
      :srcset="srcSet"
      :style="{objectFit: fit}"
    />
    <i  v-else-if="icon" :class="icon"/>
    <slot v-else/>
  </span>
</template>

<script lang="ts">
import { defineComponent, computed, ref } from 'vue'
import type {EventEmitter} from '@element-plus/utils/types'

export default defineComponent({
  name: 'ElAvatar',
  props: {
    size: {
      type: [Number, String],
      validator(val) {
        if (typeof val === 'string') {
          return ['large', 'medium', 'small'].includes(val)
        }
        return typeof val === 'number'
      }
    },
    shape: {
      type: String,
      default: 'circle',
      validator(val: string) {
        return ['circle', 'square'].includes(val)
      }
    },
    icon: String,
    src: String,
    alt: String,
    srcSet: String,
    error: Function,
    fit: {
      type: String,
      default: 'cover'
    }
  },
  setup(props: any, {emit}) {
    const hasLoadError = ref(false)

    const avatarClass = computed(() => {
      const {size, icon, shape} = props
      let classList = ['el-avatar']
      if (size && typeof size === 'string') {
        classList.push(`el-avatar--${size}`)
      }
      if (icon) {
        classList.push('el-avatar--icon')
      }
      if (shape) {
        classList.push(`el-avatar--${shape}`)
      }
      return classList
    })

    const sizeStyle = computed(() => {
      const {size} = props
      return typeof size === 'number' ? {
          height: `${size}px`,
          width: `${size}px`,
          lineHeight: `${size}px`
        } : {}
    })

    function handleError(e: Event) {
      hasLoadError.value = true
      emit('error', e)
    }
    return {
      hasLoadError, avatarClass, sizeStyle, handleError
    }
  }
})
</script>
