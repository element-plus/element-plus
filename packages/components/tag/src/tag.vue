<template>
  <span
    v-if="!disableTransitions"
    :class="classes"
    :style="{ backgroundColor: color }"
    @click="handleClick"
  >
    <span :class="`${tagPrefixClass}__content`">
      <slot></slot>
    </span>
    <el-icon v-if="closable" :class="`${tagPrefixClass}__close`" @click="handleClose">
      <close />
    </el-icon>
  </span>
  <transition v-else name="el-zoom-in-center">
    <span
      :class="classes"
      :style="{ backgroundColor: color }"
      @click="handleClick"
    >
      <span :class="`${tagPrefixClass}__content`">
        <slot></slot>
      </span>
      <el-icon v-if="closable" :class="`${tagPrefixClass}__close`" @click="handleClose">
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
import { usePrefixClass } from '@element-plus/hooks'

export default defineComponent({
  name: 'ElTag',

  components: { ElIcon, Close },

  props: tagProps,
  emits: tagEmits,

  setup(props, { emit }) {
    const tagPrefixClass = usePrefixClass('tag')
    const tagSize = useSize()
    const classes = computed(() => {
      const { type, hit, effect, closable } = props
      return [
        tagPrefixClass.value,
        closable && 'is-closable',
        type ? `${tagPrefixClass.value}--${type}` : '',
        tagSize.value ? `${tagPrefixClass.value}--${tagSize.value}` : '',
        effect ? `${tagPrefixClass.value}--${effect}` : '',
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
      tagPrefixClass,
      classes,
      handleClose,
      handleClick,
    }
  },
})
</script>
