import {
  defineComponent,
  getCurrentInstance,
  watch,
  computed,
  ref,
  provide,
  onMounted,
  h,
  withDirectives,
  reactive,
  nextTick,
} from 'vue'
import { Resize } from '@element-plus/directives'
import Menubar from '@element-plus/utils/menu/menu-bar'
import { buildProps, definePropType, mutable } from '@element-plus/utils/props'
import { isString, isObject } from '@element-plus/utils/util'
import ElMenuCollapseTransition from './menu-collapse-transition.vue'
import ElSubMenu from './sub-menu'
import { useMenuCssVar } from './use-menu-css-var'

import type { MenuItemClicked, MenuProvider, SubMenuProvider } from './types'
import type { NavigationFailure, Router } from 'vue-router'
import type { VNode, ExtractPropTypes, VNodeNormalizedChildren } from 'vue'

export const menuProps = buildProps({
  mode: {
    type: String,
    values: ['horizontal', 'vertical'],
    default: 'vertical',
  },
  defaultActive: {
    type: String,
    default: '',
  },
  defaultOpeneds: {
    type: definePropType<string[]>(Array),
    default: () => mutable([] as const),
  },
  uniqueOpened: Boolean,
  router: Boolean,
  menuTrigger: {
    type: String,
    values: ['hover', 'click'],
    default: 'hover',
  },
  collapse: Boolean,
  backgroundColor: String,
  textColor: String,
  activeTextColor: String,
  collapseTransition: {
    type: Boolean,
    default: true,
  },
  ellipsis: {
    type: Boolean,
    default: true,
  },
} as const)
export type MenuProps = ExtractPropTypes<typeof menuProps>

const checkIndexPath = (indexPath: unknown): indexPath is string[] =>
  Array.isArray(indexPath) && indexPath.every((path) => isString(path))

export const menuEmits = {
  close: (index: string, indexPath: string[]) =>
    isString(index) && checkIndexPath(indexPath),

  open: (index: string, indexPath: string[]) =>
    isString(index) && checkIndexPath(indexPath),

  select: (
    index: string,
    indexPath: string[],
    item: MenuItemClicked,
    routerResult?: Promise<void | NavigationFailure>
  ) =>
    isString(index) &&
    checkIndexPath(indexPath) &&
    isObject(item) &&
    (routerResult === undefined || routerResult instanceof Promise),
}
export type MenuEmits = typeof menuEmits

export default defineComponent({
  name: 'ElMenu',

  props: menuProps,
  emits: menuEmits,

  setup(props, { emit, slots, expose }) {
    const instance = getCurrentInstance()!
    const router = instance.appContext.config.globalProperties.$router as Router
    const menu = ref<HTMLUListElement>()

    // data
    const openedMenus = ref<MenuProvider['openedMenus']>(
      props.defaultOpeneds && !props.collapse
        ? props.defaultOpeneds.slice(0)
        : []
    )
    const activeIndex = ref<MenuProvider['activeIndex']>(props.defaultActive)
    const items = ref<MenuProvider['items']>({})
    const subMenus = ref<MenuProvider['subMenus']>({})

    const alteredCollapse = ref(false)

    // computed
    const isMenuPopup = computed<MenuProvider['isMenuPopup']>(() => {
      return (
        props.mode === 'horizontal' ||
        (props.mode === 'vertical' && props.collapse)
      )
    })

    // methods
    const initMenu = () => {
      const activeItem = activeIndex.value && items.value[activeIndex.value]
      if (!activeItem || props.mode === 'horizontal' || props.collapse) return

      const indexPath = activeItem.indexPath

      // 展开该菜单项的路径上所有子菜单
      // expand all subMenus of the menu item
      indexPath.forEach((index) => {
        const subMenu = subMenus.value[index]
        subMenu && openMenu(index, subMenu.indexPath)
      })
    }

    const openMenu: MenuProvider['openMenu'] = (index, indexPath) => {
      if (openedMenus.value.includes(index)) return
      // 将不在该菜单路径下的其余菜单收起
      // collapse all menu that are not under current menu item
      if (props.uniqueOpened) {
        openedMenus.value = openedMenus.value.filter((index: string) =>
          indexPath.includes(index)
        )
      }
      openedMenus.value.push(index)
    }

    const closeMenu: MenuProvider['closeMenu'] = (index) => {
      const i = openedMenus.value.indexOf(index)
      if (i !== -1) {
        openedMenus.value.splice(i, 1)
      }
    }

    const handleSubMenuClick: MenuProvider['handleSubMenuClick'] = ({
      index,
      indexPath,
    }) => {
      const isOpened = openedMenus.value.includes(index)

      if (isOpened) {
        closeMenu(index)
        emit('close', index, indexPath)
      } else {
        openMenu(index, indexPath)
        emit('open', index, indexPath)
      }
    }

    const handleMenuItemClick: MenuProvider['handleMenuItemClick'] = (
      menuItem
    ) => {
      if (props.mode === 'horizontal' || props.collapse) {
        openedMenus.value = []
      }

      const { index, indexPath } = menuItem
      if (index === undefined || indexPath === undefined) return

      if (props.router && router) {
        const route = menuItem.route || index
        const routerResult = router.push(route).then((res) => {
          if (!res) activeIndex.value = index
          return res
        })
        emit(
          'select',
          index,
          indexPath,
          { index, indexPath, route },
          routerResult
        )
      } else {
        activeIndex.value = index
        emit('select', index, indexPath, { index, indexPath })
      }
    }

    const updateActiveIndex = (val: string) => {
      const itemsInData = items.value
      const item =
        itemsInData[val] ||
        (activeIndex.value && itemsInData[activeIndex.value]) ||
        itemsInData[props.defaultActive]

      if (item) {
        activeIndex.value = item.index
        initMenu()
      } else {
        // Can't find item when collapsing
        // and activeIndex shouldn't be changed when 'collapse' was changed.
        // Then reset 'alteredCollapse' immediately.
        if (!alteredCollapse.value) {
          activeIndex.value = undefined
        } else {
          alteredCollapse.value = false
        }
      }
    }
    const handleResize = () =>
      nextTick(() => {
        instance.proxy!.$forceUpdate()
      })

    watch(
      () => props.defaultActive,
      (currentActive) => {
        if (!items.value[currentActive]) {
          activeIndex.value = ''
        }
        updateActiveIndex(currentActive)
      }
    )

    watch(items.value, () => initMenu())

    watch(
      () => props.collapse,
      (value, prev) => {
        if (value !== prev) {
          alteredCollapse.value = true
        }
        if (value) openedMenus.value = []
      }
    )

    // provide
    {
      const addSubMenu: MenuProvider['addSubMenu'] = (item) => {
        subMenus.value[item.index] = item
      }

      const removeSubMenu: MenuProvider['removeSubMenu'] = (item) => {
        delete subMenus.value[item.index]
      }

      const addMenuItem: MenuProvider['addMenuItem'] = (item) => {
        items.value[item.index] = item
      }

      const removeMenuItem: MenuProvider['removeMenuItem'] = (item) => {
        delete items.value[item.index]
      }
      provide<MenuProvider>(
        'rootMenu',
        reactive({
          props,
          openedMenus,
          items,
          subMenus,
          activeIndex,
          isMenuPopup,

          addMenuItem,
          removeMenuItem,
          addSubMenu,
          removeSubMenu,
          openMenu,
          closeMenu,
          handleMenuItemClick,
          handleSubMenuClick,
        })
      )
      provide<SubMenuProvider>(`subMenu:${instance.uid}`, {
        addSubMenu,
        removeSubMenu,
      })
    }

    // lifecycle
    onMounted(() => {
      initMenu()
      if (props.mode === 'horizontal') {
        new Menubar(instance.vnode.el!)
      }
    })

    {
      const open = (index: string) => {
        const { indexPath } = subMenus.value[index]
        indexPath.forEach((i) => openMenu(i, indexPath))
      }
      expose({
        open,
        close: closeMenu,
        handleResize,
      })
    }

    const flattedChildren = (children: VNodeNormalizedChildren) => {
      const vnodes = Array.isArray(children) ? children : [children]
      const result: any[] = []
      vnodes.forEach((child: any) => {
        if (Array.isArray(child.children)) {
          result.push(...flattedChildren(child.children))
        } else {
          result.push(child)
        }
      })
      return result
    }

    const useVNodeResize = (vnode: VNode) =>
      props.mode === 'horizontal'
        ? withDirectives(vnode, [[Resize, handleResize]])
        : vnode
    return () => {
      let slot = slots.default?.() ?? []
      const vShowMore: VNode[] = []

      if (props.mode === 'horizontal' && menu.value) {
        const items = Array.from(menu.value?.childNodes ?? []).filter(
          (item) => item.nodeName !== '#text' || item.nodeValue
        ) as HTMLElement[]
        const originalSlot = flattedChildren(slot)
        const moreItemWidth = 64
        const paddingLeft = parseInt(
          getComputedStyle(menu.value).paddingLeft,
          10
        )
        const paddingRight = parseInt(
          getComputedStyle(menu.value).paddingRight,
          10
        )
        const menuWidth = menu.value.clientWidth - paddingLeft - paddingRight
        let calcWidth = 0
        let sliceIndex = 0
        items.forEach((item, index) => {
          calcWidth += item.offsetWidth || 0
          if (calcWidth <= menuWidth - moreItemWidth) {
            sliceIndex = index + 1
          }
        })
        const slotDefault = originalSlot.slice(0, sliceIndex)
        const slotMore = originalSlot.slice(sliceIndex)
        if (slotMore?.length && props.ellipsis) {
          slot = slotDefault
          vShowMore.push(
            h(
              ElSubMenu,
              {
                index: 'sub-menu-more',
                class: 'el-sub-menu__hide-arrow',
              },
              {
                title: () =>
                  h('i', {
                    class: ['el-icon-more', 'el-sub-menu__icon-more'],
                  }),
                default: () => slotMore,
              }
            )
          )
        }
      }

      const ulStyle = useMenuCssVar(props)

      const resizeMenu = (vNode: VNode) =>
        props.ellipsis ? useVNodeResize(vNode) : vNode

      const vMenu = resizeMenu(
        h(
          'ul',
          {
            key: String(props.collapse),
            role: 'menubar',
            ref: menu,
            style: ulStyle.value,
            class: {
              'el-menu': true,
              'el-menu--horizontal': props.mode === 'horizontal',
              'el-menu--collapse': props.collapse,
            },
          },
          [...slot.map((vnode) => resizeMenu(vnode)), ...vShowMore]
        )
      )

      if (props.collapseTransition && props.mode === 'vertical') {
        return h(ElMenuCollapseTransition, () => vMenu)
      }

      return vMenu
    }
  },
})
