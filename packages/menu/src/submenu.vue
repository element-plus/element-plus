<template>
  <li
    class=""
    role="menuitem"
    aria-haspopup="true"
    aria-expanded="opened"
    :mouseenter="this.handleMouseenter"
    :mouseleave="() => this.handleMouseleave(false)"
    :focus="this.handleMouseenter"
  >
    <div
      ref="submenu-title"
      class="el-submenu__title"
      on-click="this.handleClick"
      on-mouseenter="this.handleTitleMouseenter"
      on-mouseleave="this.handleTitleMouseleave"
      style="[paddingStyle, titleStyle, { backgroundColor }]"
    >
      <i class="[ 'el-submenu__icon-arrow', submenuTitleIcon ]"></i>
    </div>
    <transition v-if="isMenuPopup" name="menuTransitionName">
      <div
        v-show="opened"
        ref="menu"
        class="[`el-menu--${mode}`, popperClass]"
        :mouseenter="$event => this.handleMouseenter($event, 100)"
        :mouseleave="() => this.handleMouseleave(true)"
        :focus="$event => this.handleMouseenter($event, 100)"
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
import { RootMenuProvider } from './menu.vue'

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
  setup(props) {
    const data = reactive({
      popperJS: null,
      timeout: null,
      items: {},
      submenus: {},
      mouseInChild: false,
    })

    // instance
    const instance = getCurrentInstance()
    instance.parent.type.name

    // inject
    const { data: rootData, methods: rootMethods, props: rootProps } = inject<
      RootMenuProvider
    >('rootMenu')

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

    const indexPath = computed(() => {
      const path = [props.index]
      let parent = instance.parent
      // while (parent.type.name !== 'ElMenu') {
      //   if (parent.index) {
      //     path.unshift(parent.index)
      //   }
      //   parent = parent.$parent
      // }
      return path
    })
    const parentMenu = computed(() => {
      let parent = instance.parent
      // while (
      //   parent &&
      //   ['ElMenu', 'ElSubmenu'].indexOf(parent.$options.componentName) === -1
      // ) {
      //   parent = parent.$parent
      // }
      return parent
    })
    const paddingStyle = computed(() => {
      if (rootProps.mode !== 'vertical') return {}

      let padding = 20
      let parent = instance.parent

      if (rootProps.collapse) {
        padding = 20
      } else {
        // while (parent && parent.$options.componentName !== 'ElMenu') {
        //   if (parent.$options.componentName === 'ElSubmenu') {
        //     padding += 20
        //   }
        //   parent = parent.$parent
        // }
      }
      return { paddingLeft: padding + 'px' }
    })

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
        initPopper()
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
      subMenuEmitter.emit('rootmenu:submenu-click', this)
    }
    const handleMouseenter = (event, showTimeout = this.showTimeout) => {
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
      const { rootMenu } = this
      if (
        (rootMenu.menuTrigger === 'click' && rootMenu.mode === 'horizontal') ||
        (!rootMenu.collapse && rootMenu.mode === 'vertical')
      ) {
        return
      }
      this.dispatch('ElSubmenu', 'mouse-leave-child')
      clearTimeout(data.timeout)
      data.timeout = setTimeout(() => {
        !this.mouseInChild && this.rootMenu.closeMenu(this.index)
      }, this.hideTimeout)

      if (this.appendToBody && deepDispatch) {
        if (this.$parent.$options.name === 'ElSubmenu') {
          this.$parent.handleMouseleave(true)
        }
      }
    }
    const handleTitleMouseenter = () => {
      if (this.mode === 'horizontal' && !this.rootMenu.backgroundColor) return
      const title = this.$refs['submenu-title']
      title && (title.style.backgroundColor = this.rootMenu.hoverBackground)
    }
    const handleTitleMouseleave = () => {
      if (this.mode === 'horizontal' && !this.rootMenu.backgroundColor) return
      const title = this.$refs['submenu-title']
      title &&
        (title.style.backgroundColor = this.rootMenu.backgroundColor || '')
    }
    const updatePlacement = () => {
      this.currentPlacement =
        this.mode === 'horizontal' && this.isFirstLevel
          ? 'bottom-start'
          : 'right-start'
    }
    function initPopper() {
      this.referenceElm = this.$el
      this.popperElm = this.$refs.menu
      this.updatePlacement()
    }

    // lifecycle

    onMounted(() => {
      rootMethods.addSubMenu(this)
      // this.parentMenu.addSubmenu(this)
      // this.initPopper()
    })
    onBeforeUnmount(() => {
      // this.parentMenu.removeSubmenu(this);
      rootMethods.removeSubMenu(this)
    })

    // watch(() => {

    // }
    // )
  },
}
</script>
