<template>
  <li
    :aria-selected="selected"
    :style="style"
    :class="{
      'el-select-dropdown__option-item': true,
      'is-selected': selected,
      'is-disabled': disabled,
      'is-created': created,
      hover: hovering,
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
import { useOption } from './useOption'
import { OptionProps } from './defaults'
export default defineComponent({
  props: OptionProps,
  emits: ['select', 'hover'],
  setup(props, { emit }) {
    const { hoverItem, selectOptionClick } = useOption(props, { emit })
    return {
      hoverItem,
      selectOptionClick,
    }
  },
})
</script>
