<template>
  <ul
    v-if="props.collapseTransition"
    :key="+props.collapse"
    role="menubar"
    :style="{ backgroundColor: props.backgroundColor || '' }"
    :class="{
      'el-menu': true,
      'el-menu--horizontal': mode === 'horizontal',
      'el-menu--collapse': props.collapse,
    }"
  >
    <slot></slot>
  </ul>
  <el-menu-collapse-transition v-else>
    <ul
      :key="+props.collapse"
      role="menubar"
      :style="{ backgroundColor: props.backgroundColor || '' }"
      :class="{
        'el-menu': true,
        'el-menu--horizontal': mode === 'horizontal',
        'el-menu--collapse': props.collapse,
      }"
    >
      <slot></slot>
    </ul>
  </el-menu-collapse-transition>
</template>
<script lang="ts">
import {
  defineComponent,
  getCurrentInstance,
  watch,
  computed,
  ref,
  provide,
  Ref,
  onMounted,
  ComputedRef,
} from 'vue'
import mitt from 'mitt'
import { hasClass, addClass, removeClass } from '@element-plus/utils/dom'
import {
  IMenuProps,
  RootMenuProvider,
  RegisterMenuItem,
  SubMenuProvider,
} from './menu'
import Menubar from '@element-plus/utils/menu/menu-bar'
import useMenuColor from './useMenuColor'

export default defineComponent({
  name: 'ElMenu',
  componentName: 'ElMenu',
  components: {
    'el-menu-collapse-transition': {
      functional: true,
      render(createElement, context) {
        const data = {
          props: {
            mode: 'out-in',
          },
          on: {
            beforeEnter(el) {
              el.style.opacity = 0.2
            },

            enter(el) {
              addClass(el, 'el-opacity-transition')
              el.style.opacity = 1
            },

            afterEnter(el) {
              removeClass(el, 'el-opacity-transition')
              el.style.opacity = ''
            },

            beforeLeave(el) {
              if (!el.dataset) el.dataset = {}

              if (hasClass(el, 'el-menu--collapse')) {
                removeClass(el, 'el-menu--collapse')
                el.dataset.oldOverflow = el.style.overflow
                el.dataset.scrollWidth = el.clientWidth
                addClass(el, 'el-menu--collapse')
              } else {
                addClass(el, 'el-menu--collapse')
                el.dataset.oldOverflow = el.style.overflow
                el.dataset.scrollWidth = el.clientWidth
                removeClass(el, 'el-menu--collapse')
              }

              el.style.width = el.scrollWidth + 'px'
              el.style.overflow = 'hidden'
            },

            leave(el) {
              addClass(el, 'horizontal-collapse-transition')
              el.style.width = el.dataset.scrollWidth + 'px'
            },
          },
        }
        return createElement('transition', data, context.children)
      },
    },
  },
  props: {
    mode: {
      type: String,
      default: 'vertical',
    },
    defaultActive: {
      type: String,
      default: '',
    },
    defaultOpeneds: Array,
    uniqueOpened: Boolean,
    router: Boolean,
    menuTrigger: {
      type: String,
      default: 'hover',
    },
    collapse: Boolean,
    backgroundColor: { type: String },
    textColor: { type: String },
    activeTextColor: { type: String },
    collapseTransition: {
      type: Boolean,
      default: true,
    },
  },
  emits: ['close', 'open', 'select'],
  setup(props: IMenuProps, ctx) {
    // data
    const openedMenus = ref(
      props.defaultOpeneds && !props.collapse
        ? props.defaultOpeneds.slice(0)
        : [],
    )
    const instance = getCurrentInstance()
    const activeIndex = ref(props.defaultActive)
    const items = ref({})
    const submenus = ref({})

    const rootMenuEmitter = mitt()

    const hoverBackground = useMenuColor(props.backgroundColor)

    // computed
    const isMenuPopup = computed(() => {
      return (
        props.mode === 'horizontal' ||
        (props.mode === 'vertical' && props.collapse)
      )
    })

    // methods

    const initializeMenu = () => {
      const index = activeIndex.value
      const activeItem = items[index]
      if (!activeItem || props.mode === 'horizontal' || props.collapse) return

      let indexPath = activeItem.indexPath

      // 展开该菜单项的路径上所有子菜单
      // expand all submenus of the menu item
      indexPath.forEach(index => {
        let submenu = submenus[index]
        submenu && openMenu(index, submenu.indexPath)
      })
    }

    const addSubMenu = (item: RegisterMenuItem) => {
      submenus.value[item.index] = item
    }

    const removeSubMenu = (item: RegisterMenuItem) => {
      delete submenus.value[item.index]
    }

    const addMenuItem = (item: RegisterMenuItem) => {
      items.value[item.index] = item
    }

    const removeMenuItem = (item: RegisterMenuItem) => {
      delete items.value[item.index]
    }

    const openMenu = (index: string, indexPath: Ref<string[]>) => {
      if (openedMenus.value.includes(index)) return
      // 将不在该菜单路径下的其余菜单收起
      // collapse all menu that are not under current menu item
      if (props.uniqueOpened) {
        openedMenus.value = openedMenus.value.filter((index: string) => {
          return indexPath.value.indexOf(index) !== -1
        })
      }
      openedMenus.value.push(index)
    }

    const closeMenu = index => {
      const i = openedMenus.value.indexOf(index)
      if (i !== -1) {
        openedMenus.value.splice(i, 1)
      }
    }

    const open = index => {
      const { indexPath } = submenus[index.toString()]
      indexPath.forEach(i => openMenu(i, indexPath))
    }

    const close = index => {
      closeMenu(index)
    }

    const handleSubmenuClick = submenu => {
      const { index, indexPath } = submenu
      let isOpened = openedMenus.value.includes(index)

      if (isOpened) {
        closeMenu(index)
        ctx.emit('close', index, indexPath)
      } else {
        openMenu(index, indexPath)
        ctx.emit('open', index, indexPath)
      }
    }

    const handleItemClick = (item: {
      index: string
      indexPath: ComputedRef<string[]>
    }) => {
      const { index, indexPath } = item
      const hasIndex = item.index !== null
      // const oldActiveIndex = activeIndex.value

      if (hasIndex) {
        activeIndex.value = item.index
      }

      ctx.emit('select', index, indexPath, item)

      if (props.mode === 'horizontal' || props.collapse) {
        openedMenus.value = []
      }
      // TODO: support vue-router
      // if (this.router && hasIndex) {
      //   routeToItem(item, error => {
      //     data.activeIndex.value = oldActiveIndex
      //     if (error) {
      //       // vue-router 3.1.0+ push/replace cause NavigationDuplicated error
      //       // https://github.com/ElemeFE/element/issues/17044
      //       if (error.name === 'NavigationDuplicated') return
      //       console.error(error)
      //     }
      //   })
      // }
    }

    // const routeToItem = (item, onError) => {
    //   let route = item.route || item.index
    //   try {
    //     // this.$router.push(route, () => null, onError)
    //   } catch (e) {
    //     console.error(e)
    //   }
    // }

    const updateActiveIndex = (val?: string) => {
      const itemsInData = items
      const item =
        itemsInData[val] ||
        itemsInData[activeIndex.value] ||
        itemsInData[props.defaultActive]
      if (item) {
        activeIndex.value = item.index
        initializeMenu()
      } else {
        activeIndex.value = null
      }
    }

    // watch

    watch(
      () => props.defaultActive,
      currentActive => {
        if (!items[currentActive]) {
          activeIndex.value = ''
        }
        updateActiveIndex(currentActive)
      },
    )

    watch(
      () => items,
      () => {
        updateActiveIndex()
      },
    )

    watch(
      () => props.collapse,
      value => {
        if (value) openedMenus.value = []
        rootMenuEmitter.emit(
          'rootMenu:toggle-collapse',
          Boolean(props.collapse),
        )
      },
    )

    // provide
    provide<RootMenuProvider>('rootMenu', {
      props,
      openedMenus,
      items,
      submenus,
      hoverBackground,
      activeIndex,
      isMenuPopup,

      methods: {
        addMenuItem,
        removeMenuItem,
        addSubMenu,
        removeSubMenu,
        openMenu,
        closeMenu,
      },
      rootMenuEmit: rootMenuEmitter.emit,
      rootMenuOn: rootMenuEmitter.on,
    })
    provide<SubMenuProvider>(`subMenu:${instance.uid}`, {
      addSubMenu,
      removeSubMenu,
    })

    // lifecycle

    onMounted(() => {
      initializeMenu()
      rootMenuEmitter.on('menuItem:item-click', handleItemClick)
      rootMenuEmitter.on('submenu:submenu-click', handleSubmenuClick)
      if (props.mode === 'horizontal') {
        new Menubar(instance.vnode.el)
      }
    })

    return {
      hoverBackground,
      isMenuPopup,

      props,

      open,
      close,
    }
  },
})
</script>
