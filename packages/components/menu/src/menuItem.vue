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

import type { RootMenuProvider, SubMenuProvider } from './menu.type'

export default defineComponent({
  name: 'ElMenuItem',

  // componentName: 'ElMenuItem',

  components: { ElTooltip },

  props: {
    index: {
      type: String,
      default: null,
    },
    route: [String, Object],
    disabled: Boolean,
  },
  emits: ['click'],
  setup(props, { emit, slots }) {
    const instance = getCurrentInstance()
    const rootMenu = inject<RootMenuProvider>('rootMenu')
    const { parentMenu, paddingStyle, indexPath } = useMenu(
      instance,
      computed(() => props.index)
    )
    const { addSubMenu, removeSubMenu } = inject<SubMenuProvider>(
      `subMenu:${parentMenu.value.uid}`
    )

    const active = computed(() => {
      return props.index === rootMenu.activeIndex.value
    })

    const handleClick = () => {
      if (!props.disabled) {
        rootMenu.methods.handleMenuItemClick({
          index: props.index,
          indexPath,
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
      rootMenu.methods.addMenuItem({ index: props.index, indexPath, active })
    })

    onBeforeUnmount(() => {
      removeSubMenu({ index: props.index, indexPath, active })
      rootMenu.methods.removeMenuItem({ index: props.index, indexPath, active })
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
