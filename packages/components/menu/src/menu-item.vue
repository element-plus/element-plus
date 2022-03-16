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
        $slots.title
      "
      :effect="Effect.DARK"
      placement="right"
      persistent
      :fallback-placements="['right', 'left', 'bottom', 'top']"
    >
      <template #content>
        <slot name="title" />
      </template>
      <div class="el-menu-tooltip__trigger">
        <slot />
      </div>
    </el-tooltip>
    <template v-else>
      <slot />
      <slot name="title" />
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
  toRef,
  reactive,
} from 'vue'
import ElTooltip from '@element-plus/components/tooltip'
import { Effect } from '@element-plus/components/popper'
import { throwError } from '@element-plus/utils'
import useMenu from './use-menu'
import { menuItemEmits, menuItemProps } from './menu-item'

import type { MenuItemRegistered, MenuProvider, SubMenuProvider } from './types'

const COMPONENT_NAME = 'ElMenuItem'
export default defineComponent({
  name: COMPONENT_NAME,
  components: {
    ElTooltip,
  },

  props: menuItemProps,
  emits: menuItemEmits,

  setup(props, { emit }) {
    const instance = getCurrentInstance()!
    const rootMenu = inject<MenuProvider>('rootMenu')
    if (!rootMenu) throwError(COMPONENT_NAME, 'can not inject root menu')

    const { parentMenu, paddingStyle, indexPath } = useMenu(
      instance,
      toRef(props, 'index')
    )

    const subMenu = inject<SubMenuProvider>(`subMenu:${parentMenu.value.uid}`)
    if (!subMenu) throwError(COMPONENT_NAME, 'can not inject sub menu')

    const active = computed(() => props.index === rootMenu.activeIndex)
    const item: MenuItemRegistered = reactive({
      index: props.index,
      indexPath,
      active,
    })

    const handleClick = () => {
      if (!props.disabled) {
        rootMenu.handleMenuItemClick({
          index: props.index,
          indexPath: indexPath.value,
          route: props.route,
        })
        emit('click', item)
      }
    }

    onMounted(() => {
      subMenu.addSubMenu(item)
      rootMenu.addMenuItem(item)
    })

    onBeforeUnmount(() => {
      subMenu.removeSubMenu(item)
      rootMenu.removeMenuItem(item)
    })

    return {
      Effect,
      parentMenu,
      rootMenu,
      paddingStyle,
      active,

      handleClick,
    }
  },
})
</script>
