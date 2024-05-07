import {
  Fragment,
  computed,
  defineComponent,
  getCurrentInstance,
  h,
  inject,
  onBeforeUnmount,
  onMounted,
  provide,
  reactive,
  ref,
  vShow,
  watch,
  withDirectives,
} from 'vue'
import { useTimeoutFn } from '@vueuse/core'
import ElCollapseTransition from '@element-plus/components/collapse-transition'
import ElTooltip from '@element-plus/components/tooltip'
import {
  buildProps,
  iconPropType,
  isString,
  throwError,
} from '@element-plus/utils'
import { useNamespace } from '@element-plus/hooks'
import { ArrowDown, ArrowRight } from '@element-plus/icons-vue'
import { ElIcon } from '@element-plus/components/icon'
import useMenu from './use-menu'
import { useMenuCssVar } from './use-menu-css-var'

import type { Placement } from '@element-plus/components/popper'
import type { ExtractPropTypes, VNodeArrayChildren } from 'vue'
import type { MenuProvider, SubMenuProvider } from './types'

export const subMenuProps = buildProps({
  index: {
    type: String,
    required: true,
  },
  showTimeout: Number,
  hideTimeout: Number,
  popperClass: String,
  disabled: Boolean,
  teleported: {
    type: Boolean,
    default: undefined,
  },
  popperOffset: Number,
  expandCloseIcon: {
    type: iconPropType,
  },
  expandOpenIcon: {
    type: iconPropType,
  },
  collapseCloseIcon: {
    type: iconPropType,
  },
  collapseOpenIcon: {
    type: iconPropType,
  },
} as const)
export type SubMenuProps = ExtractPropTypes<typeof subMenuProps>

const COMPONENT_NAME = 'ElSubMenu'
export default defineComponent({
  name: COMPONENT_NAME,
  props: subMenuProps,

  setup(props, { slots, expose }) {
    const instance = getCurrentInstance()!
    const { indexPath, parentMenu } = useMenu(
      instance,
      computed(() => props.index)
    )
    const nsMenu = useNamespace('menu')
    const nsSubMenu = useNamespace('sub-menu')

    // inject
    const rootMenu = inject<MenuProvider>('rootMenu')
    if (!rootMenu) throwError(COMPONENT_NAME, 'can not inject root menu')

    const subMenu = inject<SubMenuProvider>(`subMenu:${parentMenu.value!.uid}`)
    if (!subMenu) throwError(COMPONENT_NAME, 'can not inject sub menu')

    const items = ref<MenuProvider['items']>({})
    const subMenus = ref<MenuProvider['subMenus']>({})

    let timeout: (() => void) | undefined
    const mouseInChild = ref(false)
    const verticalTitleRef = ref<HTMLDivElement>()
    const vPopper = ref<InstanceType<typeof ElTooltip> | null>(null)

    // computed
    const currentPlacement = computed<Placement>(() =>
      mode.value === 'horizontal' && isFirstLevel.value
        ? 'bottom-start'
        : 'right-start'
    )
    const subMenuTitleIcon = computed(() => {
      return (mode.value === 'horizontal' && isFirstLevel.value) ||
        (mode.value === 'vertical' && !rootMenu.props.collapse)
        ? props.expandCloseIcon && props.expandOpenIcon
          ? opened.value
            ? props.expandOpenIcon
            : props.expandCloseIcon
          : ArrowDown
        : props.collapseCloseIcon && props.collapseOpenIcon
        ? opened.value
          ? props.collapseOpenIcon
          : props.collapseCloseIcon
        : ArrowRight
    })
    const isFirstLevel = computed(() => {
      return subMenu.level === 0
    })
    const appendToBody = computed(() => {
      const value = props.teleported
      return value === undefined ? isFirstLevel.value : value
    })
    const menuTransitionName = computed(() =>
      rootMenu.props.collapse
        ? `${nsMenu.namespace.value}-zoom-in-left`
        : `${nsMenu.namespace.value}-zoom-in-top`
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
            'right',
            'right-end',
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

    const mode = computed(() => rootMenu.props.mode)
    const item = reactive({
      index: props.index,
      indexPath,
      active,
    })

    const ulStyle = useMenuCssVar(rootMenu.props, subMenu.level + 1)

    const subMenuPopperOffset = computed(() => {
      return props.popperOffset ?? rootMenu.props.popperOffset
    })

    const subMenuPopperClass = computed(() => {
      return props.popperClass ?? rootMenu.props.popperClass
    })

    const subMenuShowTimeout = computed(() => {
      return props.showTimeout ?? rootMenu.props.showTimeout
    })

    const subMenuHideTimeout = computed(() => {
      return props.hideTimeout ?? rootMenu.props.hideTimeout
    })

    // methods
    const doDestroy = () =>
      vPopper.value?.popperRef?.popperInstanceRef?.destroy()

    const handleCollapseToggle = (value: boolean) => {
      if (!value) {
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
      showTimeout = subMenuShowTimeout.value
    ) => {
      if (event.type === 'focus') {
        return
      }
      if (
        (rootMenu.props.menuTrigger === 'click' &&
          rootMenu.props.mode === 'horizontal') ||
        (!rootMenu.props.collapse && rootMenu.props.mode === 'vertical') ||
        props.disabled
      ) {
        subMenu.mouseInChild.value = true
        return
      }
      subMenu.mouseInChild.value = true

      timeout?.()
      ;({ stop: timeout } = useTimeoutFn(() => {
        rootMenu.openMenu(props.index, indexPath.value)
      }, showTimeout))

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
        subMenu.mouseInChild.value = false
        return
      }
      timeout?.()
      subMenu.mouseInChild.value = false
      ;({ stop: timeout } = useTimeoutFn(
        () =>
          !mouseInChild.value &&
          rootMenu.closeMenu(props.index, indexPath.value),
        subMenuHideTimeout.value
      ))

      if (appendToBody.value && deepDispatch) {
        subMenu.handleMouseleave?.(true)
      }
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
        mouseInChild,
        level: subMenu.level + 1,
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
    })

    onBeforeUnmount(() => {
      subMenu.removeSubMenu(item)
      rootMenu.removeSubMenu(item)
    })

    return () => {
      const titleTag: VNodeArrayChildren = [
        slots.title?.(),
        h(
          ElIcon,
          {
            class: nsSubMenu.e('icon-arrow'),
            style: {
              transform: opened.value
                ? (props.expandCloseIcon && props.expandOpenIcon) ||
                  (props.collapseCloseIcon &&
                    props.collapseOpenIcon &&
                    rootMenu.props.collapse)
                  ? 'none'
                  : 'rotateZ(180deg)'
                : 'none',
            },
          },
          {
            default: () =>
              isString(subMenuTitleIcon.value)
                ? h(instance.appContext.components[subMenuTitleIcon.value])
                : h(subMenuTitleIcon.value),
          }
        ),
      ]

      // this render function is only used for bypass `Vue`'s compiler caused patching issue.
      // temporarily mark ElPopper as any due to type inconsistency.
      const child = rootMenu.isMenuPopup
        ? h(
            // TODO: correct popper's type.
            ElTooltip as any,
            {
              ref: vPopper,
              visible: opened.value,
              effect: 'light',
              pure: true,
              offset: subMenuPopperOffset.value,
              showArrow: false,
              persistent: true,
              popperClass: subMenuPopperClass.value,
              placement: currentPlacement.value,
              teleported: appendToBody.value,
              fallbackPlacements: fallbackPlacements.value,
              transition: menuTransitionName.value,
              gpuAcceleration: false,
            },
            {
              content: () =>
                h(
                  'div',
                  {
                    class: [
                      nsMenu.m(mode.value),
                      nsMenu.m('popup-container'),
                      subMenuPopperClass.value,
                    ],
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
                          nsMenu.b(),
                          nsMenu.m('popup'),
                          nsMenu.m(`popup-${currentPlacement.value}`),
                        ],
                        style: ulStyle.value,
                      },
                      [slots.default?.()]
                    ),
                  ]
                ),
              default: () =>
                h(
                  'div',
                  {
                    class: nsSubMenu.e('title'),
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
                class: nsSubMenu.e('title'),
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
                        class: [nsMenu.b(), nsMenu.m('inline')],
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
            nsSubMenu.b(),
            nsSubMenu.is('active', active.value),
            nsSubMenu.is('opened', opened.value),
            nsSubMenu.is('disabled', props.disabled),
          ],
          role: 'menuitem',
          ariaHaspopup: true,
          ariaExpanded: opened.value,
          onMouseenter: handleMouseenter,
          onMouseleave: () => handleMouseleave(),
          onFocus: handleMouseenter,
        },
        [child]
      )
    }
  },
})
