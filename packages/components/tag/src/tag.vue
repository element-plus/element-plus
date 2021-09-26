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

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { useGlobalConfig } from '@element-plus/utils/util'

import { tagProps, tagEmits } from './tag'

export default defineComponent({
  name: 'ElTag',

  props: tagProps,
  emits: tagEmits,

  setup(props, { emit }) {
    const ELEMENT = useGlobalConfig()

    const tagSize = computed(() => props.size || ELEMENT.size)
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
    const handleClose = (event: MouseEvent) => {
      event.stopPropagation()
      emit('close', event)
    }

    const handleClick = (event: MouseEvent) => {
      emit('click', event)
    }

    return {
      classes,
      handleClose,
      handleClick,
    }
  },
})
</script>
