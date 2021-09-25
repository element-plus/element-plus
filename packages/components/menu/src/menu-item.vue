<template>
  <li
    class="el-menu-item"
    role="menuitem"
    tabindex="-1"
    :style="paddingStyle"
    :class="{
      'is-active': active,
      'is-disabled': disabled,
    }"
    @click="handleClick"
  >
    <el-tooltip
      v-if="
        parentMenu.type.name === 'ElMenu' &&
        rootMenu.props.collapse &&
        slots.title
      "
      :effect="Effect.DARK"
      placement="right"
    >
      <template #content>
        <slot name="title"></slot>
      </template>
      <div
        style="
          position: absolute;
          left: 0;
          top: 0;
          height: 100%;
          width: 100%;
          display: inline-block;
          box-sizing: border-box;
          padding: 0 20px;
        "
      >
        <slot></slot>
      </div>
    </el-tooltip>
    <template v-else>
      <slot></slot>
      <slot name="title"></slot>
    </template>
  </li>
</template>
<script lang="ts">
import {
  defineComponent,
  computed,
  onMounted,
  onBeforeUnmount,
  inject,
  getCurrentInstance,
} from 'vue'
import ElTooltip from '@element-plus/components/tooltip'
import { Effect } from '@element-plus/components/popper'
import useMenu from './use-menu'
import { menuItemEmits, menuItemProps } from './menu-item'

import type { MenuProvider, SubMenuProvider } from './types'

export default defineComponent({
  name: 'ElMenuItem',
  components: {
    ElTooltip,
  },

  props: menuItemProps,
  emits: menuItemEmits,

  setup(props, { emit, slots }) {
    const instance = getCurrentInstance()
    const rootMenu = inject<MenuProvider>('rootMenu')
    const { parentMenu, paddingStyle, indexPath } = useMenu(
      instance,
      computed(() => props.index)
    )
    const { addSubMenu, removeSubMenu } = inject<SubMenuProvider>(
      `subMenu:${parentMenu.value.uid}`
    )

    const active = computed(() => {
      return props.index === rootMenu.activeIndex
    })

    const handleClick = () => {
      if (!props.disabled) {
        rootMenu.handleMenuItemClick({
          index: props.index,
          indexPath: indexPath.value,
          route: props.route,
        })
        emit('click', {
          index: props.index,
          indexPath: indexPath.value,
        })
      }
    }

    onMounted(() => {
      addSubMenu({ index: props.index, indexPath, active })
      rootMenu.addMenuItem({ index: props.index, indexPath, active })
    })

    onBeforeUnmount(() => {
      removeSubMenu({ index: props.index, indexPath, active })
      rootMenu.removeMenuItem({ index: props.index, indexPath, active })
    })

    return {
      Effect,
      parentMenu,
      rootMenu,
      slots,

      paddingStyle,
      active,
      handleClick,
    }
  },
})
</script>
