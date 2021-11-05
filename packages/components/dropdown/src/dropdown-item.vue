<template>
  <li
    class="el-dropdown-menu__item"
    :class="{
      'is-disabled': disabled,
      'el-dropdown-menu__item--divided': divided,
    }"
    :aria-disabled="disabled"
    :tabindex="disabled ? null : -1"
    @click="handleClick"
  >
    <el-icon v-if="icon"><component :is="icon" /></el-icon>
    <slot></slot>
  </li>
</template>
<script lang="ts">
import { defineComponent, getCurrentInstance } from 'vue'
import ElIcon from '@element-plus/components/icon'
import { buildProps, definePropType } from '@element-plus/utils/props'
import { useDropdown } from './useDropdown'
import type { Component } from 'vue'

export default defineComponent({
  name: 'ElDropdownItem',
  components: { ElIcon },
  props: buildProps({
    command: {
      type: [Object, String, Number],
      default: () => ({}),
    },
    disabled: Boolean,
    divided: Boolean,
    icon: {
      type: definePropType<string | Component>([String, Object]),
    },
  } as const),
  setup(props) {
    const { elDropdown } = useDropdown()
    const _instance = getCurrentInstance()

    function handleClick(e: UIEvent) {
      // if disabled don't collapse the drop-down list
      if (props.disabled) {
        e.stopImmediatePropagation()
        return
      }
      if (elDropdown.hideOnClick.value) {
        elDropdown.handleClick?.()
      }
      elDropdown.commandHandler?.(props.command, _instance, e)
    }

    return {
      handleClick,
    }
  },
})
</script>
