import {
  computed,
  defineComponent,
  getCurrentInstance,
  h,
  nextTick,
  onMounted,
  provide,
  reactive,
  ref,
  watch,
  watchEffect,
  withDirectives,
} from 'vue'

import { useResizeObserver } from '@vueuse/core'
import { isNil } from 'lodash-unified'
import ElIcon from '@element-plus/components/icon'
import { More } from '@element-plus/icons-vue'
import {
  buildProps,
  definePropType,
  flattedChildren,
  iconPropType,
  isArray,
  isObject,
  isString,
  mutable,
} from '@element-plus/utils'
import { useNamespace } from '@element-plus/hooks'
import { ClickOutside as vClickoutside } from '@element-plus/directives'
import Menubar from './utils/menu-bar'
import ElMenuCollapseTransition from './menu-collapse-transition.vue'
import ElSubMenu from './sub-menu'
import { useMenuCssVar } from './use-menu-css-var'
import type { PopperEffect } from '@element-plus/components/popper'

import type { MenuItemClicked, MenuProvider, SubMenuProvider } from './types'
import type { NavigationFailure, Router } from 'vue-router'
import type {
  Component,
  DirectiveArguments,
  ExtractPropTypes,
  VNode,
  VNodeArrayChildren,
} from 'vue'
import type { UseResizeObserverReturn } from '@vueuse/core'

export const menuProps = buildProps({
  /**
   * @description menu display mode
   */
  mode: {
    type: String,
    values: ['horizontal', 'vertical'],
    default: 'vertical',
  },
  /**
   * @description index of active menu on page load
   */
  defaultActive: {
    type: String,
    default: '',
  },
  /**
   * @description array that contains indexes of currently active sub-menus
   */
  defaultOpeneds: {
    type: definePropType<string[]>(Array),
    default: () => mutable([] as const),
  },
  /**
   * @description whether only one sub-menu can be active
   */
  uniqueOpened: Boolean,
  /**
   * @description whether `vue-router` mode is activated. If true, index will be used as 'path' to activate the route action. Use with `default-active` to set the active item on load.
   */
  router: Boolean,
  /**
   * @description how sub-menus are triggered, only works when `mode` is 'horizontal'
   */
  menuTrigger: {
    type: String,
    values: ['hover', 'click'],
    default: 'hover',
  },
  /**
   * @description whether the menu is collapsed (available only in vertical mode)
   */
  collapse: Boolean,
  /**
   * @description background color of Menu (hex format) (deprecated, use `--bg-color` instead)
   * @deprecated use `--bg-color` instead
   */
  backgroundColor: String,
  /**
   * @description text color of Menu (hex format) (deprecated, use `--text-color` instead)
   * @deprecated use `--text-color` instead
   */
  textColor: String,
  /**
   * @description text color of currently active menu item (hex format) (deprecated, use `--active-color` instead)
   * @deprecated use `--active-color` instead
   */
  activeTextColor: String,
  /**
   * @description optional, whether menu is collapsed when clicking outside
   */
  closeOnClickOutside: Boolean,
  /**
   * @description whether to enable the collapse transition
   */
  collapseTransition: {
    type: Boolean,
    default: true,
  },
  /**
   * @description whether the menu is ellipsis (available only in horizontal mode)
   */
  ellipsis: {
    type: Boolean,
    default: true,
  },
  /**
   * @description offset of the popper (effective for all submenus)
   */
  popperOffset: {
    type: Number,
    default: 6,
  },
  /**
   * @description custom ellipsis icon (available only in horizontal mode and ellipsis is true)
   */
  ellipsisIcon: {
    type: iconPropType,
    default: () => More,
  },
  /**
   * @description Tooltip theme, built-in theme: `dark` / `light` when menu is collapsed
   */
  popperEffect: {
    type: definePropType<PopperEffect>(String),
    default: 'dark',
  },
  /**
   * @description custom class name for all popup menus
   */
  popperClass: String,
  /**
   * @description control timeout for all menus before showing
   */
  showTimeout: {
    type: Number,
    default: 300,
  },
  /**
   * @description control timeout for all menus before hiding
   */
  hideTimeout: {
    type: Number,
    default: 300,
  },
  /**
   * @description when menu inactive and `persistent` is `false` , dropdown menu will be destroyed
   */
  persistent: {
    type: Boolean,
    default: true,
  },
} as const)
export type MenuProps = ExtractPropTypes<typeof menuProps>

const checkIndexPath = (indexPath: unknown): indexPath is string[] =>
  isArray(indexPath) && indexPath.every((path) => isString(path))

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
    const nsMenu = useNamespace('menu')
    const nsSubMenu = useNamespace('sub-menu')

    // data
    const sliceIndex = ref(-1)

    const openedMenus = ref<MenuProvider['openedMenus']>(
      props.defaultOpeneds && !props.collapse
        ? props.defaultOpeneds.slice(0)
        : []
    )
    const activeIndex = ref<MenuProvider['activeIndex']>(props.defaultActive)
    const items = ref<MenuProvider['items']>({})
    const subMenus = ref<MenuProvider['subMenus']>({})

    // computed
    const isMenuPopup = computed<MenuProvider['isMenuPopup']>(
      () =>
        props.mode === 'horizontal' ||
        (props.mode === 'vertical' && props.collapse)
    )

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
      emit('open', index, indexPath)
    }

    const close = (index: string) => {
      const i = openedMenus.value.indexOf(index)
      if (i !== -1) {
        openedMenus.value.splice(i, 1)
      }
    }

    const closeMenu: MenuProvider['closeMenu'] = (index, indexPath) => {
      close(index)
      emit('close', index, indexPath)
    }

    const handleSubMenuClick: MenuProvider['handleSubMenuClick'] = ({
      index,
      indexPath,
    }) => {
      const isOpened = openedMenus.value.includes(index)

      isOpened ? closeMenu(index, indexPath) : openMenu(index, indexPath)
    }

    const handleMenuItemClick: MenuProvider['handleMenuItemClick'] = (
      menuItem
    ) => {
      if (props.mode === 'horizontal' || props.collapse) {
        openedMenus.value = []
      }
      const { index, indexPath } = menuItem
      if (isNil(index) || isNil(indexPath)) return

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

      activeIndex.value = item?.index ?? val
    }

    const calcMenuItemWidth = (menuItem: HTMLElement) => {
      const computedStyle = getComputedStyle(menuItem)
      const marginLeft = Number.parseInt(computedStyle.marginLeft, 10)
      const marginRight = Number.parseInt(computedStyle.marginRight, 10)
      return menuItem.offsetWidth + marginLeft + marginRight || 0
    }

    const calcSliceIndex = () => {
      if (!menu.value) return -1
      const items = Array.from(menu.value?.childNodes ?? []).filter(
        (item) => item.nodeName !== '#text' || item.nodeValue
      ) as HTMLElement[]
      const moreItemWidth = 64
      const computedMenuStyle = getComputedStyle(menu.value!)
      const paddingLeft = Number.parseInt(computedMenuStyle.paddingLeft, 10)
      const paddingRight = Number.parseInt(computedMenuStyle.paddingRight, 10)
      const menuWidth = menu.value!.clientWidth - paddingLeft - paddingRight
      let calcWidth = 0
      let sliceIndex = 0
      items.forEach((item, index) => {
        if (item.nodeName === '#comment') return
        calcWidth += calcMenuItemWidth(item)
        if (calcWidth <= menuWidth - moreItemWidth) {
          sliceIndex = index + 1
        }
      })
      return sliceIndex === items.length ? -1 : sliceIndex
    }

    const getIndexPath = (index: string) => subMenus.value[index].indexPath

    // Common computer monitor FPS is 60Hz, which means 60 redraws per second. Calculation formula: 1000ms/60 ≈ 16.67ms, In order to avoid a certain chance of repeated triggering when `resize`, set wait to 16.67 * 2 = 33.34
    const debounce = (fn: () => void, wait = 33.34) => {
      let timmer: ReturnType<typeof setTimeout> | null
      return () => {
        timmer && clearTimeout(timmer)
        timmer = setTimeout(() => {
          fn()
        }, wait)
      }
    }

    let isFirstTimeRender = true
    const handleResize = () => {
      if (sliceIndex.value === calcSliceIndex()) return
      const callback = () => {
        sliceIndex.value = -1
        nextTick(() => {
          sliceIndex.value = calcSliceIndex()
        })
      }
      // execute callback directly when first time resize to avoid shaking
      isFirstTimeRender ? callback() : debounce(callback)()
      isFirstTimeRender = false
    }

    watch(
      () => props.defaultActive,
      (currentActive) => {
        if (!items.value[currentActive]) {
          activeIndex.value = ''
        }
        updateActiveIndex(currentActive)
      }
    )

    watch(
      () => props.collapse,
      (value) => {
        if (value) openedMenus.value = []
      }
    )

    watch(items.value, initMenu)

    let resizeStopper: UseResizeObserverReturn['stop']
    watchEffect(() => {
      if (props.mode === 'horizontal' && props.ellipsis)
        resizeStopper = useResizeObserver(menu, handleResize).stop
      else resizeStopper?.()
    })

    const mouseInChild = ref(false)

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
        mouseInChild,
        level: 0,
      })
    }

    // lifecycle
    onMounted(() => {
      if (props.mode === 'horizontal') {
        new Menubar(instance.vnode.el!, nsMenu.namespace.value)
      }
    })

    {
      const open = (index: string) => {
        const { indexPath } = subMenus.value[index]
        indexPath.forEach((i) => openMenu(i, indexPath))
      }

      expose({
        open,
        close,
        handleResize,
      })
    }

    const ulStyle = useMenuCssVar(props, 0)

    return () => {
      let slot: VNodeArrayChildren = slots.default?.() ?? []
      const vShowMore: VNode[] = []

      if (props.mode === 'horizontal' && menu.value) {
        const originalSlot = flattedChildren(slot) as VNodeArrayChildren
        const slotDefault =
          sliceIndex.value === -1
            ? originalSlot
            : originalSlot.slice(0, sliceIndex.value)

        const slotMore =
          sliceIndex.value === -1 ? [] : originalSlot.slice(sliceIndex.value)

        if (slotMore?.length && props.ellipsis) {
          slot = slotDefault
          vShowMore.push(
            h(
              ElSubMenu,
              {
                index: 'sub-menu-more',
                class: nsSubMenu.e('hide-arrow'),
                popperOffset: props.popperOffset,
              },
              {
                title: () =>
                  h(
                    ElIcon,
                    {
                      class: nsSubMenu.e('icon-more'),
                    },
                    {
                      default: () => h(props.ellipsisIcon as Component),
                    }
                  ),
                default: () => slotMore,
              }
            )
          )
        }
      }

      const directives: DirectiveArguments = props.closeOnClickOutside
        ? [
            [
              vClickoutside,
              () => {
                if (!openedMenus.value.length) return

                if (!mouseInChild.value) {
                  openedMenus.value.forEach((openedMenu) =>
                    emit('close', openedMenu, getIndexPath(openedMenu))
                  )

                  openedMenus.value = []
                }
              },
            ],
          ]
        : []

      const vMenu = withDirectives(
        h(
          'ul',
          {
            key: String(props.collapse),
            role: 'menubar',
            ref: menu,
            style: ulStyle.value,
            class: {
              [nsMenu.b()]: true,
              [nsMenu.m(props.mode)]: true,
              [nsMenu.m('collapse')]: props.collapse,
            },
          },
          [...slot, ...vShowMore]
        ),
        directives
      )

      if (props.collapseTransition && props.mode === 'vertical') {
        return h(ElMenuCollapseTransition, () => vMenu)
      }

      return vMenu
    }
  },
})
