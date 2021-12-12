<template>
  <span
    v-if="!disableTransitions"
    :class="classes"
    :style="{ backgroundColor: color }"
    @click="handleClick"
  >
    <slot></slot>
    <el-icon v-if="closable" class="el-tag__close" @click="handleClose">
      <close />
    </el-icon>
  </span>
  <transition v-else name="el-zoom-in-center">
    <span
      :class="classes"
      :style="{ backgroundColor: color }"
      @click="handleClick"
    >
      <slot></slot>
      <el-icon v-if="closable" class="el-tag__close" @click="handleClose">
        <close />
      </el-icon>
    </span>
  </transition>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import ElIcon from '@element-plus/components/icon'
import { Close } from '@element-plus/icons-vue'

import { useSize } from '@element-plus/hooks'
import { tagProps, tagEmits } from './tag'

export default defineComponent({
  name: 'ElTag',

  components: { ElIcon, Close },

  props: tagProps,
  emits: tagEmits,

  setup(props, { emit }) {
    const tagSize = useSize()
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
