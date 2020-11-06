<template>
  <li
    :class="[
      'el-submenu',
      active && 'is-active',
      opened && 'is-opened',
      disabled && 'is-disabled',
    ]"
    role="menuitem"
    aria-haspopup="true"
    aria-expanded="opened"
    @mouseenter="handleMouseenter"
    @mouseleave="() => handleMouseleave(false)"
    @focus="handleMouseenter"
  >
    <div
      ref="submenu-title"
      class="el-submenu__title"
      :style="[paddingStyle, titleStyle, { backgroundColor }]"
      @click="handleClick"
      @mouseenter="handleTitleMouseenter"
      @mouseleave="handleTitleMouseleave"
    >
      <slot name="title"></slot>
      <!-- <i :class="[ 'el-submenu__icon-arrow', submenuTitleIcon ]"></i> -->
      <i :class="['el-submenu__icon-arrow']"></i>
    </div>
    <transition v-if="isMenuPopup" name="menuTransitionName">
      <div
        v-show="opened"
        ref="menu"
        :class="[`el-menu--${mode}`, popperClass]"
        :mouseenter="$event => handleMouseenter($event, 100)"
        :mouseleave="() => handleMouseleave(true)"
        :focus="$event => handleMouseenter($event, 100)"
      >
        <ul
          role="menu"
          class="['el-menu el-menu--popup', `el-menu--popup-${currentPlacement}`]"
          style="{ backgroundColor: rootMenu.backgroundColor || '' }"
        ></ul>
      </div>
    </transition>
    <el-collapse-transition v-else>
      <ul
        v-show="opened"
        role="menu"
        class="el-menu el-menu--inline"
        style="backgroundColor: rootMenu.backgroundColor || '' "
      ></ul>
    </el-collapse-transition>
  </li>
</template>

<script lang="ts">
import mitt from 'mitt'
import {
  defineComponent,
  toRefs,
  watch,
  computed,
  ref,
  provide,
  inject,
  ToRefs,
  getCurrentInstance,
  reactive,
  onMounted,
  onBeforeUnmount,
} from 'vue'
import ElCollapseTransition from '@element-plus/transition/collapse-transition/index.vue'
import { ISubmenuProps, RootMenuProvider } from './menu'
import useMenu from './useMenu'

export default {
  name: 'ElSubmenu',
  componentName: 'ElSubmenu',
  components: { ElCollapseTransition },
  props: {
    index: {
      type: String,
      required: true,
    },
    showTimeout: {
      type: Number,
      default: 300,
    },
    hideTimeout: {
      type: Number,
      default: 300,
    },
    popperClass: String,
    disabled: Boolean,
    popperAppendToBody: {
      type: Boolean,
      default: undefined,
    },
  },
  setup(props: ISubmenuProps) {
    const data = reactive({
      popperJS: null,
      timeout: null,
      items: {},
      submenus: {},
      currentPlacement: '',
      mouseInChild: false,
    })

    // instance
    const instance = getCurrentInstance()
    const { paddingStyle } = useMenu(instance, props.index)

    // inject
    const {
      data: rootData,
      methods: rootMethods,
      props: rootProps,
      methods: { closeMenu },
    } = inject<RootMenuProvider>('rootMenu')

    // computed
    const isFirstLevel = computed(() => {
      let isFirstLevel = true
      let parent = instance.parent
      // TODO: recursive find rootMenu
      // while (parent && parent !== this.rootMenu) {
      //   if (
      //     ['ElSubmenu', 'ElMenuItemGroup'].indexOf(
      //       parent.$options.componentName,
      //     ) > -1
      //   ) {
      //     isFirstLevel = false
      //     break
      //   } else {
      //     parent = parent.$parent
      //   }
      // }
      return isFirstLevel
    })
    const appendToBody = computed(() => {
      return props.popperAppendToBody === undefined
        ? isFirstLevel.value
        : props.popperAppendToBody
    })
    const menuTransitionName = computed(() => {
      return rootProps.collapse ? 'el-zoom-in-left' : 'el-zoom-in-top'
    })
    const opened = computed(() => {
      return rootData.openedMenus.value.indexOf(props.index) > -1
    })
    const active = computed(() => {
      let isActive = false
      const submenus = data.submenus
      const items = data.items

      Object.keys(items).forEach(index => {
        if (items[index].active) {
          isActive = true
        }
      })

      Object.keys(submenus).forEach(index => {
        if (submenus[index].active) {
          isActive = true
        }
      })

      return isActive
    })
    const hoverBackground = computed(() => {
      return rootData.hoverBackground.value
    })
    const backgroundColor = computed(() => {
      return rootProps.backgroundColor || ''
    })
    const activeTextColor = computed(() => {
      return rootProps.activeTextColor || ''
    })
    const textColor = computed(() => {
      return rootProps.textColor || ''
    })
    const mode = computed(() => {
      return rootProps.mode
    })
    const isMenuPopup = computed(() => {
      return rootData.isMenuPopup
    })
    const titleStyle = computed(() => {
      if (mode.value !== 'horizontal') {
        return {
          color: textColor.value,
        }
      }
      return {
        borderBottomColor: active.value
          ? rootProps.activeTextColor
            ? activeTextColor.value
            : ''
          : 'transparent',
        color: active.value ? activeTextColor.value : textColor.value,
      }
    })

    // const indexPath = computed(() => {
    //   const path = [props.index]
    //   let parent = instance.parent
    //   // while (parent.type.name !== 'ElMenu') {
    //   //   if (parent.index) {
    //   //     path.unshift(parent.index)
    //   //   }
    //   //   parent = parent.$parent
    //   // }
    //   return path
    // })
    // const parentMenu = computed(() => {
    //   let parent = instance.parent
    //   // while (
    //   //   parent &&
    //   //   ['ElMenu', 'ElSubmenu'].indexOf(parent.$options.componentName) === -1
    //   // ) {
    //   //   parent = parent.$parent
    //   // }
    //   return parent
    // })
    // const paddingStyle = computed(() => {
    //   if (rootProps.mode !== 'vertical') return {}

    //   let padding = 20
    //   let parent = instance.parent

    //   if (rootProps.collapse) {
    //     padding = 20
    //   } else {
    //     // while (parent && parent.$options.componentName !== 'ElMenu') {
    //     //   if (parent.$options.componentName === 'ElSubmenu') {
    //     //     padding += 20
    //     //   }
    //     //   parent = parent.$parent
    //     // }
    //   }
    //   return { paddingLeft: padding + 'px' }
    // })

    // emitter
    const subMenuEmitter = mitt()
    // TODO: emitters
    subMenuEmitter.on('submenu:toggle-collapse', () => {
      // TODO
    })
    subMenuEmitter.on('submenu:mouse-enter', () => {
      // TODO
    })
    subMenuEmitter.on('submenu:mouse-leave', () => {
      // TODO
    })

    // methods

    const handleCollapseToggle = value => {
      if (value) {
        // initPopper()
      } else {
        // TODO: proper destroy
        // this.doDestroy()
      }
    }
    const addItem = item => {
      data.items[item.index] = item
      // this.$set(this.items, item.index, item)
    }
    const removeItem = item => {
      delete data.items[item.index]
    }
    const addSubmenu = item => {
      data.submenus[item.index] = item
      // this.$set(this.submenus, item.index, item)
    }
    const removeSubmenu = item => {
      delete data.submenus[item.index]
    }
    const handleClick = () => {
      const disabled = props.disabled
      // const { rootMenu, disabled } = this
      if (
        (rootProps.menuTrigger === 'hover' &&
          rootProps.mode === 'horizontal') ||
        (rootProps.collapse && rootProps.mode === 'vertical') ||
        disabled
      ) {
        return
      }
      // subMenuEmitter.emit('rootmenu:submenu-click', this)
    }
    const handleMouseenter = (event, showTimeout = props.showTimeout) => {
      if (
        !('ActiveXObject' in window) &&
        event.type === 'focus' &&
        !event.relatedTarget
      ) {
        return
      }
      const disabled = props.disabled
      if (
        (rootProps.menuTrigger === 'click' &&
          rootProps.mode === 'horizontal') ||
        (!rootProps.collapse && rootProps.mode === 'vertical') ||
        disabled
      ) {
        return
      }
      subMenuEmitter.emit('submenu:mouse-enter')
      clearTimeout(data.timeout)
      data.timeout = setTimeout(() => {
        // rootMethods.openMenu(props.index, indexPath.value)
      }, showTimeout)

      if (appendToBody.value) {
        parent.dispatchEvent(new MouseEvent('mouseenter'))
      }
    }
    const handleMouseleave = (deepDispatch = false) => {
      if (
        (rootProps.menuTrigger === 'click' &&
          rootProps.mode === 'horizontal') ||
        (!rootProps.collapse && rootProps.mode === 'vertical')
      ) {
        return
      }
      // this.dispatch('ElSubmenu', 'mouse-leave-child')
      clearTimeout(data.timeout)
      data.timeout = setTimeout(() => {
        !data.mouseInChild && closeMenu(props.index)
      }, props.hideTimeout)

      // if (appendToBody.value && deepDispatch) {
      //   if (this.$parent.$options.name === 'ElSubmenu') {
      //     this.$parent.handleMouseleave(true)
      //   }
      // }
    }
    const handleTitleMouseenter = () => {
      if (mode.value === 'horizontal' && !rootProps.backgroundColor) return
      // const title = this.$refs['submenu-title']
      // title && (title.style.backgroundColor = rootData.hoverBackground)
    }
    const handleTitleMouseleave = () => {
      if (mode.value === 'horizontal' && !rootProps.backgroundColor) return
      // const title = this.$refs['submenu-title']
      // title && (title.style.backgroundColor = rootProps.backgroundColor || '')
    }
    const updatePlacement = () => {
      data.currentPlacement =
        mode.value === 'horizontal' && isFirstLevel.value
          ? 'bottom-start'
          : 'right-start'
    }
    // function initPopper() {
    //   this.referenceElm = this.$el
    //   this.popperElm = this.$refs.menu
    //   this.updatePlacement()
    // }

    // lifecycle

    onMounted(() => {
      rootMethods.addSubMenu({
        index: props.index,
      })
      // this.parentMenu.addSubmenu(this)
      // this.initPopper()
    })
    onBeforeUnmount(() => {
      // this.parentMenu.removeSubmenu(this);
      rootMethods.removeSubMenu({
        index: props.index,
      })
    })

    // watch(() => {

    // }
    // )
    return {
      mode,
      active,
      isMenuPopup,
      opened,
      paddingStyle,
      titleStyle,
      backgroundColor,
      // submenuTitleIcon,
      // popperClass

      handleClick,
      handleMouseenter,
      handleMouseleave,
      handleTitleMouseenter,
      handleTitleMouseleave,
    }
  },
}
</script>
