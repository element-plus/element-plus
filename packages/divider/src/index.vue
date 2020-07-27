<template>
  <div
    v-bind="$attrs"
    :class="['el-divider', `el-divider--${direction}`]"
  >
    <div
      v-if="$slots.default && direction !== 'vertical'"
      :class="['el-divider__text', `is-${contentPosition}`]"
    >
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'ElDivider',
  props: {
    direction: {
      type: String,
      default: 'horizontal',
      validator(val: string): boolean {
        return ['horizontal', 'vertical'].indexOf(val) !== -1
      },
    },
    contentPosition: {
      type: String,
      default: 'center',
      validator(val: string): boolean {
        return ['left', 'center', 'right'].indexOf(val) !== -1
      },
    },
  },
}
</script>
