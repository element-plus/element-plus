<template>
  <span
    v-if="!disableTransitions"
    :class="classes"
    :style="{ backgroundColor: color }"
    @click="handleClick"
  >
    <slot></slot>
    <i
      v-if="closable"
      class="el-tag__close el-icon-close"
      @click="handleClose"
    ></i>
  </span>
  <transition v-else name="el-zoom-in-center">
    <span
      :class="classes"
      :style="{ backgroundColor: color }"
      @click="handleClick"
    >
      <slot></slot>
      <i
        v-if="closable"
        class="el-tag__close el-icon-close"
        @click="handleClose"
      ></i>
    </span>
  </transition>
</template>

<script lang='ts'>
import { computed, defineComponent } from 'vue'
import { useGlobalConfig } from '@element-plus/utils/util'
import { isValidComponentSize } from '@element-plus/utils/validators'

import type { PropType } from 'vue'

export default defineComponent({
  name: 'ElTag',
  props: {
    closable: Boolean,
    type: {
      type: String as PropType<'success' | 'info' | 'warning' | 'danger' | ''>,
      default: '',
    },
    hit: Boolean,
    disableTransitions: Boolean,
    color: {
      type: String,
      default: '',
    },
    size: {
      type: String as PropType<ComponentSize>,
      validator: isValidComponentSize,
    },
    effect: {
      type: String,
      default: 'light',
      validator: (val: string): boolean => {
        return ['dark', 'light', 'plain'].indexOf(val) !== -1
      },
    },
  },
  emits: ['close','click'],
  setup(props, ctx) {
    const ELEMENT = useGlobalConfig()

    const tagSize = computed(() => {
      return props.size || ELEMENT.size
    })
    const classes = computed(() => {
      const { type, hit, effect } = props
      return [
        'el-tag',
        type ? `el-tag--${type}` : '',
        tagSize.value ? `el-tag--${tagSize.value}` : '',
        effect ? `el-tag--${effect}` : '',
        hit && 'is-hit',
      ]
    })

    // methods
    const handleClose = event => {
      event.stopPropagation()
      ctx.emit('close', event)
    }

    const handleClick = event => {
      ctx.emit('click', event)
    }

    return {
      tagSize,
      classes,
      handleClose,
      handleClick,
    }
  },
})
</script>
