<template>
  <el-menu-collapse-transition v-if="props.collapseTransition">
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
  <ul
    v-else
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
  isRef,
} from 'vue'
import mitt from 'mitt'
import {
  IMenuProps,
  RootMenuProvider,
  RegisterMenuItem,
  SubMenuProvider,
} from './menu'
import Menubar from '@element-plus/utils/menu/menu-bar'
import ElMenuCollapseTransition from './menu-collapse-transition.vue'
import useMenuColor from './useMenuColor'

export default defineComponent({
  name: 'ElMenu',
  componentName: 'ElMenu',
  components: {
    ElMenuCollapseTransition,
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
    const alteredCollapse = ref(false)
    const rootMenuEmitter = mitt()
    const router = instance.appContext.config.globalProperties.$router

    const hoverBackground = useMenuColor(props)

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
      const activeItem = items.value[index]
      if (!activeItem || props.mode === 'horizontal' || props.collapse) return

      let indexPath = activeItem.indexPath

      // 展开该菜单项的路径上所有子菜单
      // expand all submenus of the menu item
      indexPath.forEach(index => {
        let submenu = submenus.value[index]
        submenu && openMenu(index, submenu?.indexPath)
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

    const openMenu = (index: string, indexPath?: Ref<string[]> | string[]) => {
      if (openedMenus.value.includes(index)) return
      // 将不在该菜单路径下的其余菜单收起
      // collapse all menu that are not under current menu item
      if (props.uniqueOpened) {
        openedMenus.value = openedMenus.value.filter((index: string) => {
          return (
            (isRef(indexPath) ? indexPath.value : indexPath).indexOf(index) !==
            -1
          )
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
      const { indexPath } = submenus.value[index.toString()]
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
        ctx.emit('close', index, indexPath.value)
      } else {
        openMenu(index, indexPath)
        ctx.emit('open', index, indexPath.value)
      }
    }

    const handleItemClick = (item: {
      index: string
      indexPath: ComputedRef<string[]>
      route?: any
    }) => {
      const { index, indexPath } = item
      const hasIndex = item.index !== null
      const emitParams = [index, indexPath.value, item]

      if (props.mode === 'horizontal' || props.collapse) {
        openedMenus.value = []
      }

      if (!hasIndex) {
        return
      }

      if (props.router && router) {
        let route = item.route || item.index
        const routerResult = router
          .push(route)
          .then(navigationResult => {
            if (!navigationResult) {
              activeIndex.value = item.index
            }
            return navigationResult
          })
        ctx.emit('select', ...emitParams.concat(routerResult))
      } else {
        activeIndex.value = item.index
        ctx.emit('select', ...emitParams)
      }
    }

    const updateActiveIndex = (val?: string) => {
      const itemsInData = items.value
      const item =
        itemsInData[val] ||
        itemsInData[activeIndex.value] ||
        itemsInData[props.defaultActive]

      if (item) {
        activeIndex.value = item.index
        initializeMenu()
      } else {
        // Can't find item when collapsing
        // and activeIndex shouldn't be changed when 'collapse' was changed.
        // Then reset 'alteredCollapse' immediately.
        if (!alteredCollapse.value) {
          activeIndex.value = null
        } else {
          alteredCollapse.value = false
        }
      }
    }

    // watch

    watch(
      () => props.defaultActive,
      currentActive => {
        if (!items.value[currentActive]) {
          activeIndex.value = ''
        }
        updateActiveIndex(currentActive)
      },
    )

    watch(items.value, () => {
      updateActiveIndex()
    })

    watch(
      () => props.collapse,
      (value, prev) => {
        if (value !== prev) {
          alteredCollapse.value = true
        }
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
