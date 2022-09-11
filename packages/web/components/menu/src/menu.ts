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
} from 'vue'
import { useResizeObserver } from '@vueuse/core'
import ElIcon from '@element-plus/components/icon'
import { More } from '@element-plus/icons-vue'
import {
  buildProps,
  definePropType,
  flattedChildren,
  isObject,
  isString,
  mutable,
} from '@element-plus/utils'
import { useNamespace } from '@element-plus/hooks'
import Menubar from './utils/menu-bar'
import ElMenuCollapseTransition from './menu-collapse-transition.vue'
import ElSubMenu from './sub-menu'
import { useMenuCssVar } from './use-menu-css-var'

import type { MenuItemClicked, MenuProvider, SubMenuProvider } from './types'
import type { NavigationFailure, Router } from 'vue-router'
import type { ExtractPropTypes, VNode, VNodeArrayChildren } from 'vue'
import type { UseResizeObserverReturn } from '@vueuse/core'

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
      emit('open', index, indexPath)
    }

    const closeMenu: MenuProvider['closeMenu'] = (index, indexPath) => {
      const i = openedMenus.value.indexOf(index)
      if (i !== -1) {
        openedMenus.value.splice(i, 1)
      }
      emit('close', index, indexPath)
    }

    const handleSubMenuClick: MenuProvider['handleSubMenuClick'] = ({
      index,
      indexPath,
    }) => {
      const isOpened = openedMenus.value.includes(index)

      if (isOpened) {
        closeMenu(index, indexPath)
      } else {
        openMenu(index, indexPath)
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
      } else {
        activeIndex.value = val
      }
    }

    const calcSliceIndex = () => {
      if (!menu.value) return -1
      const items = Array.from(menu.value?.childNodes ?? []).filter(
        (item) => item.nodeName !== '#text' || item.nodeValue
      ) as HTMLElement[]
      const moreItemWidth = 64
      const paddingLeft = Number.parseInt(
        getComputedStyle(menu.value!).paddingLeft,
        10
      )
      const paddingRight = Number.parseInt(
        getComputedStyle(menu.value!).paddingRight,
        10
      )
      const menuWidth = menu.value!.clientWidth - paddingLeft - paddingRight
      let calcWidth = 0
      let sliceIndex = 0
      items.forEach((item, index) => {
        calcWidth += item.offsetWidth || 0
        if (calcWidth <= menuWidth - moreItemWidth) {
          sliceIndex = index + 1
        }
      })
      return sliceIndex === items.length ? -1 : sliceIndex
    }

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
        mouseInChild: ref(false),
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
        close: closeMenu,
        handleResize,
      })
    }

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
              },
              {
                title: () =>
                  h(
                    ElIcon,
                    {
                      class: nsSubMenu.e('icon-more'),
                    },
                    { default: () => h(More) }
                  ),
                default: () => slotMore,
              }
            )
          )
        }
      }

      const ulStyle = useMenuCssVar(props, 0)

      const vMenu = h(
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
      )

      if (props.collapseTransition && props.mode === 'vertical') {
        return h(ElMenuCollapseTransition, () => vMenu)
      }

      return vMenu
    }
  },
})
