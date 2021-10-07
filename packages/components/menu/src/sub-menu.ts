import {
  defineComponent,
  computed,
  ref,
  provide,
  inject,
  getCurrentInstance,
  watch,
  onMounted,
  onBeforeUnmount,
  withDirectives,
  Fragment,
  vShow,
  h,
  reactive,
} from 'vue'
import { useTimeoutFn } from '@vueuse/core'
import ElCollapseTransition from '@element-plus/components/collapse-transition'
import ElPopper from '@element-plus/components/popper'
import { buildProps } from '@element-plus/utils/props'
import { throwError } from '@element-plus/utils/error'
import useMenu from './use-menu'
import { useMenuCssVar } from './use-menu-css-var'
import type { Placement } from '@element-plus/components/popper'

import type { ExtractPropTypes, VNodeArrayChildren, CSSProperties } from 'vue'
import type { MenuProvider, SubMenuProvider } from './types'

export const subMenuProps = buildProps({
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
} as const)
export type SubMenuProps = ExtractPropTypes<typeof subMenuProps>

const COMPONENT_NAME = 'ElSubMenu'
export default defineComponent({
  name: COMPONENT_NAME,
  props: subMenuProps,

  setup(props, { slots, expose }) {
    const instance = getCurrentInstance()!
    const { paddingStyle, indexPath, parentMenu } = useMenu(
      instance,
      computed(() => props.index)
    )

    // inject
    const rootMenu = inject<MenuProvider>('rootMenu')
    if (!rootMenu) throwError(COMPONENT_NAME, 'can not inject root menu')

    const subMenu = inject<SubMenuProvider>(`subMenu:${parentMenu.value!.uid}`)
    if (!subMenu) throwError(COMPONENT_NAME, 'can not inject sub menu')

    const items = ref<MenuProvider['items']>({})
    const subMenus = ref<MenuProvider['subMenus']>({})

    let timeout: (() => void) | undefined
    const currentPlacement = ref<Placement | ''>('')
    const mouseInChild = ref(false)
    const verticalTitleRef = ref<HTMLDivElement>()
    const vPopper = ref()

    // computed
    const subMenuTitleIcon = computed(() => {
      return (mode.value === 'horizontal' && isFirstLevel.value) ||
        (mode.value === 'vertical' && !rootMenu.props.collapse)
        ? 'el-icon-arrow-down'
        : 'el-icon-arrow-right'
    })
    const isFirstLevel = computed(() => {
      let isFirstLevel = true
      let parent = instance.parent
      while (parent && parent.type.name !== 'ElMenu') {
        if (['ElSubMenu', 'ElMenuItemGroup'].includes(parent.type.name!)) {
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
    const menuTransitionName = computed(() =>
      rootMenu.props.collapse ? 'el-zoom-in-left' : 'el-zoom-in-top'
    )
    const fallbackPlacements = computed<Placement[]>(() =>
      mode.value === 'horizontal' && isFirstLevel.value
        ? [
            'bottom-start',
            'bottom-end',
            'top-start',
            'top-end',
            'right-start',
            'left-start',
          ]
        : [
            'right-start',
            'left-start',
            'bottom-start',
            'bottom-end',
            'top-start',
            'top-end',
          ]
    )
    const opened = computed(() => rootMenu.openedMenus.includes(props.index))
    const active = computed(() => {
      let isActive = false

      Object.values(items.value).forEach((item) => {
        if (item.active) {
          isActive = true
        }
      })

      Object.values(subMenus.value).forEach((subItem) => {
        if (subItem.active) {
          isActive = true
        }
      })

      return isActive
    })

    const backgroundColor = computed(() => rootMenu.props.backgroundColor || '')
    const activeTextColor = computed(() => rootMenu.props.activeTextColor || '')
    const textColor = computed(() => rootMenu.props.textColor || '')
    const mode = computed(() => rootMenu.props.mode)
    const item = reactive({
      index: props.index,
      indexPath,
      active,
    })

    const titleStyle = computed<CSSProperties>(() => {
      if (mode.value !== 'horizontal') {
        return {
          color: textColor.value,
        }
      }
      return {
        borderBottomColor: active.value
          ? rootMenu.props.activeTextColor
            ? activeTextColor.value
            : ''
          : 'transparent',
        color: active.value ? activeTextColor.value : textColor.value,
      }
    })

    // methods
    const doDestroy = () => vPopper.value?.doDestroy()

    const handleCollapseToggle = (value: boolean) => {
      if (value) {
        updatePlacement()
      } else {
        doDestroy()
      }
    }

    const handleClick = () => {
      if (
        (rootMenu.props.menuTrigger === 'hover' &&
          rootMenu.props.mode === 'horizontal') ||
        (rootMenu.props.collapse && rootMenu.props.mode === 'vertical') ||
        props.disabled
      )
        return

      rootMenu.handleSubMenuClick({
        index: props.index,
        indexPath: indexPath.value,
        active: active.value,
      })
    }

    const handleMouseenter = (
      event: MouseEvent | FocusEvent,
      showTimeout = props.showTimeout
    ) => {
      if (event.type === 'focus' && !event.relatedTarget) {
        return
      }
      if (
        (rootMenu.props.menuTrigger === 'click' &&
          rootMenu.props.mode === 'horizontal') ||
        (!rootMenu.props.collapse && rootMenu.props.mode === 'vertical') ||
        props.disabled
      ) {
        return
      }
      mouseInChild.value = true

      timeout?.()
      ;({ stop: timeout } = useTimeoutFn(
        () => rootMenu.openMenu(props.index, indexPath.value),
        showTimeout
      ))

      if (appendToBody.value) {
        parentMenu.value.vnode.el?.dispatchEvent(new MouseEvent('mouseenter'))
      }
    }

    const handleMouseleave = (deepDispatch = false) => {
      if (
        (rootMenu.props.menuTrigger === 'click' &&
          rootMenu.props.mode === 'horizontal') ||
        (!rootMenu.props.collapse && rootMenu.props.mode === 'vertical')
      ) {
        return
      }
      mouseInChild.value = false
      timeout?.()
      ;({ stop: timeout } = useTimeoutFn(
        () => !mouseInChild.value && rootMenu.closeMenu(props.index),
        props.hideTimeout
      ))

      if (appendToBody.value && deepDispatch) {
        if (instance.parent?.type.name === 'ElSubMenu') {
          subMenu.handleMouseleave?.(true)
        }
      }
    }

    const updatePlacement = () => {
      currentPlacement.value =
        mode.value === 'horizontal' && isFirstLevel.value
          ? 'bottom-start'
          : 'right-start'
    }

    watch(
      () => rootMenu.props.collapse,
      (value) => handleCollapseToggle(Boolean(value))
    )

    // provide
    {
      const addSubMenu: SubMenuProvider['addSubMenu'] = (item) => {
        subMenus.value[item.index] = item
      }
      const removeSubMenu: SubMenuProvider['removeSubMenu'] = (item) => {
        delete subMenus.value[item.index]
      }
      provide<SubMenuProvider>(`subMenu:${instance.uid}`, {
        addSubMenu,
        removeSubMenu,
        handleMouseleave,
      })
    }

    // expose
    expose({
      opened,
    })

    // lifecycle
    onMounted(() => {
      rootMenu.addSubMenu(item)
      subMenu.addSubMenu(item)
      updatePlacement()
    })

    onBeforeUnmount(() => {
      subMenu.removeSubMenu(item)
      rootMenu.removeSubMenu(item)
    })

    return () => {
      const titleTag: VNodeArrayChildren = [
        slots.title?.(),
        h('i', {
          class: ['el-sub-menu__icon-arrow', subMenuTitleIcon.value],
        }),
      ]

      const ulStyle = useMenuCssVar(rootMenu.props)

      // this render function is only used for bypass `Vue`'s compiler caused patching issue.
      // temporarily mark ElPopper as any due to type inconsistency.
      const child = rootMenu.isMenuPopup
        ? h(
            // TODO: correct popper's type.
            ElPopper as any,
            {
              ref: vPopper,
              manualMode: true,
              visible: opened.value,
              effect: 'light',
              pure: true,
              offset: 6,
              showArrow: false,
              popperClass: props.popperClass,
              placement: currentPlacement.value,
              appendToBody: appendToBody.value,
              fallbackPlacements: fallbackPlacements.value,
              transition: menuTransitionName.value,
              gpuAcceleration: false,
            },
            {
              default: () =>
                h(
                  'div',
                  {
                    class: [`el-menu--${mode.value}`, props.popperClass],
                    onMouseenter: (evt: MouseEvent) =>
                      handleMouseenter(evt, 100),
                    onMouseleave: () => handleMouseleave(true),
                    onFocus: (evt: FocusEvent) => handleMouseenter(evt, 100),
                  },
                  [
                    h(
                      'ul',
                      {
                        class: [
                          'el-menu el-menu--popup',
                          `el-menu--popup-${currentPlacement.value}`,
                        ],
                        style: ulStyle.value,
                      },
                      [slots.default?.()]
                    ),
                  ]
                ),
              trigger: () =>
                h(
                  'div',
                  {
                    class: 'el-sub-menu__title',
                    style: [
                      paddingStyle.value,
                      titleStyle.value,
                      { backgroundColor: backgroundColor.value },
                    ],
                    onClick: handleClick,
                  },
                  titleTag
                ),
            }
          )
        : h(Fragment, {}, [
            h(
              'div',
              {
                class: 'el-sub-menu__title',
                style: [
                  paddingStyle.value,
                  titleStyle.value,
                  { backgroundColor: backgroundColor.value },
                ],
                ref: verticalTitleRef,
                onClick: handleClick,
              },
              titleTag
            ),
            h(
              ElCollapseTransition,
              {},
              {
                default: () =>
                  withDirectives(
                    h(
                      'ul',
                      {
                        role: 'menu',
                        class: 'el-menu el-menu--inline',
                        style: ulStyle.value,
                      },
                      [slots.default?.()]
                    ),
                    [[vShow, opened.value]]
                  ),
              }
            ),
          ])

      return h(
        'li',
        {
          class: [
            'el-sub-menu',
            {
              'is-active': active.value,
              'is-opened': opened.value,
              'is-disabled': props.disabled,
            },
          ],
          role: 'menuitem',
          ariaHaspopup: true,
          ariaExpanded: opened.value,
          onMouseenter: handleMouseenter,
          onMouseleave: () => handleMouseleave(true),
          onFocus: handleMouseenter,
        },
        [child]
      )
    }
  },
})
