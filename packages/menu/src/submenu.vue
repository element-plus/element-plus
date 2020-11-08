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
    <transition v-if="isMenuPopup" :name="menuTransitionName">
      <el-popper
        ref="popperVnode"
        :transform-origin="false"
        :placemen="data.currentPlacement"
      >
        <template #trigger>
          <div
            v-show="opened"
            ref="menu"
            :class="[`el-menu--${mode}`, popperClass]"
            @mouseenter="$event => handleMouseenter($event, 100)"
            @mouseleave="() => handleMouseleave(true)"
            @focus="$event => handleMouseenter($event, 100)"
          >
            <ul
              role="menu"
              :class="[
                'el-menu el-menu--popup',
                `el-menu--popup-${data.currentPlacement}`,
              ]"
              :style="{ backgroundColor: rootProps.backgroundColor || '' }"
            >
              <slot></slot>
            </ul>
          </div>
        </template>
      </el-popper>
    </transition>
    <el-collapse-transition v-else>
      <ul
        v-show="opened"
        role="menu"
        class="el-menu el-menu--inline"
        :style="{ backgroundColor: rootProps.backgroundColor || '' }"
      >
        <slot></slot>
      </ul>
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
  onBeforeMount,
  onBeforeUnmount,
  ComponentPublicInstance,
} from 'vue'
import ElCollapseTransition from '@element-plus/transition/collapse-transition/index.vue'
import { ISubmenuProps, RootMenuProvider } from './menu'
import useMenu from './useMenu'
import { Popper as ElPopper } from '@element-plus/popper'

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
      opened: false,
    })
    const popperVnode = ref<Nullable<ComponentPublicInstance>>(null)

    // instance
    const instance = getCurrentInstance()
    const { paddingStyle, indexPath, parentMenu } = useMenu(
      instance,
      props.index,
    )

    // inject
    const {
      items,
      submenus,
      openedMenus,
      isMenuPopup,
      methods: rootMethods,
      props: rootProps,
      methods: { closeMenu },
      rootMenuOn,
    } = inject<RootMenuProvider>('rootMenu')

    // computed
    const isFirstLevel = computed(() => {
      let isFirstLevel = true
      let parent = instance.parent
      while (parent && parent.type.name !== 'ElMenu') {
        if (['ElSubmenu', 'ElMenuItemGroup'].includes(parent.type.name)) {
          isFirstLevel = false
          break
        } else {
          parent = parent.parent
        }
      }
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
      return openedMenus.value.includes(props.index)
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
      return ''
      // return rootData.hoverBackground.value
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

    // emitter
    const subMenuEmitter = mitt()
    // TODO: emitters

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
    }
    const removeItem = item => {
      delete data.items[item.index]
    }
    const addSubmenu = item => {
      data.submenus[item.index] = item
    }
    const removeSubmenu = item => {
      delete data.submenus[item.index]
    }
    const handleClick = () => {
      const disabled = props.disabled
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
      console.log(event)
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
      subMenuEmitter.emit('submenu:mouse-enter-child')
      clearTimeout(data.timeout)
      data.timeout = setTimeout(() => {
        rootMethods.openMenu(props.index, indexPath.value)
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

      if (appendToBody.value && deepDispatch) {
        if (instance.parent.type.name === 'ElSubmenu') {
          // this.$parent.handleMouseleave(true)
        }
      }
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

    // watch
    watch(
      () => openedMenus.value,
      val => {
        console.log('openedMenus')
        console.log(val)
      },
    )
    watch(
      () => isMenuPopup.value,
      val => {
        console.log('isMenuPopup')
        console.log(val)
      },
    )

    // function initPopper() {
    //   this.referenceElm = this.$el
    //   this.popperElm = this.$refs.menu
    //   this.updatePlacement()
    // }

    // lifecycle
    onBeforeMount(() => {
      // come from ElMenu
      rootMenuOn('rootMenu:toggle-collapse', (val: boolean) => {
        handleCollapseToggle(val)
      })
      subMenuEmitter.on('submenu:mouse-enter-child', () => {
        data.mouseInChild = true
        clearTimeout(data.timeout)
      })
      subMenuEmitter.on('submenu:mouse-leave-child', () => {
        data.mouseInChild = false
        clearTimeout(data.timeout)
      })
    })

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

    return {
      data,
      mode,
      active,
      isMenuPopup,
      opened,
      paddingStyle,
      titleStyle,
      backgroundColor,
      rootProps,
      menuTransitionName,
      // submenuTitleIcon,
      // popperClass

      handleClick,
      handleMouseenter,
      handleMouseleave,
      handleTitleMouseenter,
      handleTitleMouseleave,

      addItem,
      removeItem,
      addSubmenu,
      removeSubmenu,

      popperVnode,
    }
  },
}
</script>
