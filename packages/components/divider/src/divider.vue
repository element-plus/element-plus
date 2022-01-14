<template>
  <div
    :class="[prefixClass, `${prefixClass}--${direction}`]"
    :style="{ '--el-border-style': borderStyle }"
  >
    <div
      v-if="$slots.default && direction !== 'vertical'"
      :class="[`${prefixClass}__text`, `is-${contentPosition}`]"
    >
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { usePrefixClass } from '@element-plus/hooks'
import { dividerProps } from './divider'

export default defineComponent({
  name: 'ElDivider',
  props: dividerProps,
  setup() {
    const prefixClass = usePrefixClass('divider')
    return {
      prefixClass,
    }
  },
})
</script>
