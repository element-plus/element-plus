<template>
  <li
    class="el-menu-item"
    role="menuitem"
    tabindex="-1"
    :style="[paddingStyle, itemStyle, { backgroundColor }]"
    :class="{
      'is-active': active,
      'is-disabled': disabled,
    }"
    @click="handleClick"
    @mouseenter="onMouseEnter"
    @focus="onMouseEnter"
    @blur="onMouseLeave"
    @mouseleave="onMouseLeave"
  >
    <el-tooltip
      v-if="
        parentMenu.type.name === 'ElMenu' &&
          rootMenu.props.collapse &&
          $slots.title
      "
      effect="dark"
      placement="right"
    >
      <!-- <div slot="content"> -->
      <slot name="title"></slot>
      <!-- </div> -->
      <div
        style="position: absolute;left: 0;top: 0;height: 100%;width: 100%;display: inline-block;box-sizing: border-box;padding: 0 20px;"
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
  computed,
  onMounted,
  onBeforeUnmount,
  inject,
  getCurrentInstance,
} from 'vue'
import { IMenuItemProps, RootMenuProvider } from './menu'
import useMenu from './useMenu'
// import Menu from './menu-mixin'
// import ElTooltip from "element-ui/packages/tooltip";
import mitt from 'mitt'

export default {
  name: 'ElMenuItem',

  componentName: 'ElMenuItem',

  // components: { ElTooltip },

  props: {
    index: {
      default: null,
      validator: val => typeof val === 'string' || val === null,
    },
    route: [String, Object],
    disabled: Boolean,
  },
  setup(props: IMenuItemProps, { emit }) {
    const rootMenu = inject<RootMenuProvider>('rootMenu')
    const instance = getCurrentInstance()
    const { parentMenu, paddingStyle, indexPath } = useMenu(
      instance,
      props.index,
    )

    const active = computed(() => {
      return props.index === rootMenu.activeIndex.value
    })
    const hoverBackground = computed(() => {
      return rootMenu.hoverBackground.value
    })
    const backgroundColor = computed(() => {
      return rootMenu.props.backgroundColor || ''
    })
    const activeTextColor = computed(() => {
      return rootMenu.props.activeTextColor || ''
    })
    const textColor = computed(() => {
      return rootMenu.props.textColor || ''
    })
    const mode = computed(() => {
      return rootMenu.props.mode
    })
    const isNested = computed(() => {
      // return this.parentMenu !== this.rootMenu
    })

    const itemStyle = computed(() => {
      const style = {
        color: active.value ? activeTextColor.value : textColor.value,
        borderBottomColor: '',
      }
      // if (mode.value === 'horizontal' && !isNested.value) {
      //   style.borderBottomColor = active.value
      //     ? rootMenu.props.activeTextColor
      //       ? activeTextColor.value
      //       : ''
      //     : 'transparent'
      // }
      return style
    })

    const onMouseEnter = () => {
      if (mode.value === 'horizontal' && !rootMenu.props.backgroundColor) return
      instance.vnode.el.style.backgroundColor = hoverBackground.value
    }
    const onMouseLeave = () => {
      if (mode.value === 'horizontal' && !rootMenu.props.backgroundColor) return
      instance.vnode.el.style.backgroundColor = backgroundColor.value
    }
    const handleClick = () => {
      if (!props.disabled) {
        // this.dispatch('ElMenu', 'item-click', this)
        emit('click', this)
      }
    }

    onMounted(() => {
      //   this.parentMenu.addItem(this)
      //   this.rootMenu.addItem(this)
    })

    onBeforeUnmount(() => {
      //   this.parentMenu.removeItem(this)
      //   this.rootMenu.removeItem(this)
    })

    return {
      parentMenu,
      rootMenu,

      paddingStyle,
      itemStyle,
      backgroundColor,
      active,
      handleClick,
      onMouseEnter,
      onMouseLeave,
    }
  },
}
</script>
