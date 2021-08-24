<template>
  <li
    :aria-selected="selected"
    :style="style"
    :class="{
      'el-select-dropdown__option-item': true,
      'is-selected': selected,
      'is-disabled': disabled,
      'hover': hovering
    }"
    @mouseenter="hoverItem"
    @click.stop="selectOptionClick"
  >
    <slot :item="item" :index="index" :disabled="disabled">
      <span>{{ item.label }}</span>
    </slot>
  </li>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    data: Array,
    disabled: Boolean,
    hovering: Boolean,
    item: Object,
    index: Number,
    style: Object,
    selected: Boolean,
  },
  emits: ['select', 'hover'],
  setup(props, { emit }) {

    // fill in hooks.

    // change these to variables
    return {
      hoverItem: () => {
        emit('hover', props.index)
      },
      selectOptionClick: () => {
        if (!props.disabled) {
          emit('select', props.item, props.index)
        }
      },
    }
  },
})
</script>
