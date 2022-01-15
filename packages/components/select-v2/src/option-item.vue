<template>
  <li
    :aria-selected="selected"
    :style="style"
    :class="{
      [prefixClass]: true,
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
import { usePrefixClass } from '@element-plus/hooks'

export default defineComponent({
  props: OptionProps,
  emits: ['select', 'hover'],
  setup(props, { emit }) {
    const prefixClass = usePrefixClass('select-dropdown__option-item')
    const { hoverItem, selectOptionClick } = useOption(props, { emit })
    return {
      prefixClass,
      hoverItem,
      selectOptionClick,
    }
  },
})
</script>
