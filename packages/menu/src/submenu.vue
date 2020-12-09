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
    <el-popper
      v-if="isMenuPopup"
      ref="popperVnode"
      v-model:visible="opened"
      :manual-mode="true"
      effect="light"
      :pure="true"
      :offset="6"
      :show-arrow="false"
      :popper-class="props.popperClass"
      :placement="data.currentPlacement"
      :append-to-body="appendToBody"
    >
      <template #default>
        <transition :name="menuTransitionName">
          <div
            v-show="opened"
            ref="menu"
            :class="[`el-menu--${mode}`, props.popperClass]"
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
              <slot name="default"></slot>
            </ul>
          </div>
        </transition>
      </template>
      <template #trigger>
        <div
          class="el-submenu__title"
          :style="[paddingStyle, titleStyle, { backgroundColor }]"
          @click="handleClick"
          @mouseenter="handleTitleMouseenter"
          @mouseleave="handleTitleMouseleave"
        >
          <slot name="title"></slot>
          <i :class="['el-submenu__icon-arrow', submenuTitleIcon]"></i>
        </div>
      </template>
    </el-popper>
    <div
      v-if="!isMenuPopup"
      ref="verticalTitleRef"
      class="el-submenu__title"
      :style="[paddingStyle, titleStyle, { backgroundColor }]"
      @click="handleClick"
      @mouseenter="handleTitleMouseenter"
      @mouseleave="handleTitleMouseleave"
    >
      <slot name="title"></slot>
      <i :class="['el-submenu__icon-arrow', submenuTitleIcon]"></i>
    </div>
    <el-collapse-transition v-if="!isMenuPopup">
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
  computed,
  ref,
  provide,
  inject,
  getCurrentInstance,
  reactive,
  onMounted,
  onBeforeMount,
  onBeforeUnmount,
} from 'vue'
import ElCollapseTransition from '@element-plus/collapse-transition'
import { ISubmenuProps, RootMenuProvider, SubMenuProvider } from './menu'
import useMenu from './useMenu'
import ElPopper from '@element-plus/popper'

export default defineComponent({
  name: 'ElSubmenu',
  componentName: 'ElSubmenu',
  components: { ElCollapseTransition, ElPopper },
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
    const verticalTitleRef = ref<HTMLElement>(null)
    const popperVnode = ref(null)

    // instance
    const instance = getCurrentInstance()
    const { paddingStyle, indexPath, parentMenu } = useMenu(
      instance,
      props.index,
    )

    // inject
    const {
      openedMenus,
      isMenuPopup,
      hoverBackground: rootHoverBackground,
      methods: rootMethods,
      props: rootProps,
      methods: { closeMenu },
      rootMenuOn,
      rootMenuEmit,
    } = inject<RootMenuProvider>('rootMenu')

    const {
      addSubMenu: parentAddSubmenu,
      removeSubMenu: parentRemoveSubmenu,
      handleMouseleave: parentHandleMouseleave,
    } = inject<SubMenuProvider>(`subMenu:${parentMenu.value.uid}`)

    // computed
    const submenuTitleIcon = computed(() => {
      return (mode.value === 'horizontal' && isFirstLevel.value) ||
        (mode.value === 'vertical' && !rootProps.collapse)
        ? 'el-icon-arrow-down'
        : 'el-icon-arrow-right'
    })
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
        : Boolean(props.popperAppendToBody)
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

    const doDestroy = () => {
      popperVnode.value?.doDestroy()
    }

    // methods

    const handleCollapseToggle = value => {
      if (value) {
        updatePlacement()
      } else {
        doDestroy()
      }
    }
    const addItem = item => {
      data.items[item.index] = item
    }
    const removeItem = item => {
      delete data.items[item.index]
    }
    const addSubMenu = item => {
      data.submenus[item.index] = item
    }
    const removeSubMenu = item => {
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
      rootMenuEmit('submenu:submenu-click', { index: props.index, indexPath })
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
      subMenuEmitter.emit('submenu:mouse-enter-child')
      clearTimeout(data.timeout)
      data.timeout = setTimeout(() => {
        rootMethods.openMenu(props.index, indexPath)
      }, showTimeout)

      if (appendToBody.value) {
        parentMenu.value.vnode.el.dispatchEvent(new MouseEvent('mouseenter'))
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
      subMenuEmitter.emit('submenu:mouse-leave-child')
      clearTimeout(data.timeout)
      data.timeout = setTimeout(() => {
        !data.mouseInChild && closeMenu(props.index)
      }, props.hideTimeout)

      if (appendToBody.value && deepDispatch) {
        if (instance.parent.type.name === 'ElSubmenu') {
          parentHandleMouseleave(true)
        }
      }
    }
    const handleTitleMouseenter = () => {
      if (mode.value === 'horizontal' && !rootProps.backgroundColor) return
      const title = popperVnode.value?.triggerRef || verticalTitleRef.value
      title && (title.style.backgroundColor = rootHoverBackground.value)
    }
    const handleTitleMouseleave = () => {
      if (mode.value === 'horizontal' && !rootProps.backgroundColor) return
      const title = popperVnode.value?.triggerRef || verticalTitleRef.value
      title && (title.style.backgroundColor = rootProps.backgroundColor || '')
    }
    const updatePlacement = () => {
      data.currentPlacement =
        mode.value === 'horizontal' && isFirstLevel.value
          ? 'bottom-start'
          : 'right-start'
    }

    // provide
    provide<SubMenuProvider>(`subMenu:${instance.uid}`, {
      addSubMenu,
      removeSubMenu,
      handleMouseleave,
    })

    // lifecycle
    onBeforeMount(() => {
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
        indexPath,
        active,
      })
      parentAddSubmenu({
        index: props.index,
        indexPath,
        active,
      })
      updatePlacement()
    })
    onBeforeUnmount(() => {
      parentRemoveSubmenu({
        index: props.index,
        indexPath,
        active,
      })
      rootMethods.removeSubMenu({
        index: props.index,
        indexPath,
        active,
      })
    })

    return {
      data,
      props,
      mode,
      active,
      isMenuPopup,
      opened,
      paddingStyle,
      titleStyle,
      backgroundColor,
      rootProps,
      menuTransitionName,
      submenuTitleIcon,
      appendToBody,

      handleClick,
      handleMouseenter,
      handleMouseleave,
      handleTitleMouseenter,
      handleTitleMouseleave,

      addItem,
      removeItem,
      addSubMenu,
      removeSubMenu,

      popperVnode,
      verticalTitleRef,
    }
  },
})
</script>
