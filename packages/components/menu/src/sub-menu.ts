import {
  defineComponent,
  computed,
  ref,
  provide,
  inject,
  getCurrentInstance,
  reactive,
  watch,
  onMounted,
  onBeforeUnmount,
  withDirectives,
  Fragment,
  vShow,
  h,
  toRefs,
} from 'vue'
import ElCollapseTransition from '@element-plus/components/collapse-transition'
import ElPopper from '@element-plus/components/popper'
import { buildProp } from '@element-plus/utils/props'
import useMenu from './use-menu'
import { useMenuCssVar } from './use-menu-css-var'

import type { ExtractPropTypes } from 'vue'
import type { MenuProvider, SubMenuProvider } from './types'

export const subMenuProps = {
  index: {
    type: String,
    required: true,
  },
  showTimeout: buildProp({
    type: Number,
    default: 300,
  } as const),
  hideTimeout: buildProp({
    type: Number,
    default: 300,
  } as const),
  popperClass: String,
  disabled: Boolean,
  popperAppendToBody: {
    type: Boolean,
    default: undefined,
  },
} as const
export type SubMenuProps = ExtractPropTypes<typeof subMenuProps>

export default defineComponent({
  name: 'ElSubMenu',
  props: subMenuProps,

  setup(props) {
    const data = reactive({
      popperJS: null,
      timeout: null,
      items: {},
      subMenus: {},
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
      computed(() => props.index)
    )

    // inject
    const {
      closeMenu,
      props: rootProps,
      ...rootMenu
    } = inject<MenuProvider>('rootMenu')! /* TODO TO BE REMOVED */
    const { isMenuPopup } = toRefs(rootMenu)

    const {
      addSubMenu: parentAddSubMenu,
      removeSubMenu: parentRemoveSubMenu,
      handleMouseleave: parentHandleMouseleave,
    } = inject<SubMenuProvider>(`subMenu:${parentMenu.value.uid}`)

    // computed
    const subMenuTitleIcon = computed(() => {
      return (mode.value === 'horizontal' && isFirstLevel.value) ||
        (mode.value === 'vertical' && !rootProps.collapse)
        ? 'el-icon-arrow-down'
        : 'el-icon-arrow-right'
    })
    const isFirstLevel = computed(() => {
      let isFirstLevel = true
      let parent = instance.parent
      while (parent && parent.type.name !== 'ElMenu') {
        if (['ElSubMenu', 'ElMenuItemGroup'].includes(parent.type.name)) {
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
    const fallbackPlacements = computed(() =>
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
    const opened = computed(() => {
      return rootMenu.openedMenus.includes(props.index)
    })
    const active = computed(() => {
      let isActive = false
      const subMenus = data.subMenus
      const items = data.items

      Object.keys(items).forEach((index) => {
        if (items[index].active) {
          isActive = true
        }
      })

      Object.keys(subMenus).forEach((index) => {
        if (subMenus[index].active) {
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

    const doDestroy = () => {
      popperVnode.value?.doDestroy()
    }

    // methods

    const handleCollapseToggle = (value) => {
      if (value) {
        updatePlacement()
      } else {
        doDestroy()
      }
    }
    const addItem = (item) => {
      data.items[item.index] = item
    }
    const removeItem = (item) => {
      delete data.items[item.index]
    }
    const addSubMenu = (item) => {
      data.subMenus[item.index] = item
    }
    const removeSubMenu = (item) => {
      delete data.subMenus[item.index]
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
      rootMenu.handleSubMenuClick({
        index: props.index,
        indexPath: indexPath.value,
      })
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
      data.mouseInChild = true
      clearTimeout(data.timeout)
      data.timeout = setTimeout(() => {
        rootMenu.openMenu(props.index, indexPath)
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
      data.mouseInChild = false
      clearTimeout(data.timeout)
      data.timeout = setTimeout(() => {
        !data.mouseInChild && closeMenu(props.index)
      }, props.hideTimeout)

      if (appendToBody.value && deepDispatch) {
        if (instance.parent.type.name === 'ElSubMenu') {
          parentHandleMouseleave(true)
        }
      }
    }

    const updatePlacement = () => {
      data.currentPlacement =
        mode.value === 'horizontal' && isFirstLevel.value
          ? 'bottom-start'
          : 'right-start'
    }

    watch(
      () => rootProps.collapse,
      (value) => {
        handleCollapseToggle(Boolean(value))
      }
    )

    // provide
    provide<SubMenuProvider>(`subMenu:${instance.uid}`, {
      addSubMenu,
      removeSubMenu,
      handleMouseleave,
    })

    // lifecycle
    onMounted(() => {
      rootMenu.addSubMenu({
        index: props.index,
        indexPath,
        active,
      })
      parentAddSubMenu({
        index: props.index,
        indexPath,
        active,
      })
      updatePlacement()
    })
    onBeforeUnmount(() => {
      parentRemoveSubMenu({
        index: props.index,
        indexPath,
        active,
      })
      rootMenu.removeSubMenu({
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
      fallbackPlacements,
      subMenuTitleIcon,
      appendToBody,

      handleClick,
      handleMouseenter,
      handleMouseleave,

      addItem,
      removeItem,
      addSubMenu,
      removeSubMenu,

      popperVnode,
      verticalTitleRef,
    }
  },
  render() {
    const titleTag = [
      this.$slots.title?.(),
      h(
        'i',
        {
          class: ['el-sub-menu__icon-arrow', this.subMenuTitleIcon],
        },
        null
      ),
    ]

    const ulStyle = useMenuCssVar(this.rootProps)

    // this render function is only used for bypass `Vue`'s compiler caused patching issue.
    // temporaryly mark ElPopper as any due to type inconsistency.
    // TODO: correct popper's type.
    const child = this.isMenuPopup
      ? h(
          ElPopper as any,
          {
            ref: 'popperVNode',
            manualMode: true,
            visible: this.opened,
            'onUpdate:visible': (val: boolean) => (this.opened = val),
            effect: 'light',
            pure: true,
            offset: 6,
            showArrow: false,
            popperClass: this.popperClass,
            placement: this.data.currentPlacement,
            appendToBody: this.appendToBody,
            fallbackPlacements: this.fallbackPlacements,
            transition: this.menuTransitionName,
            gpuAcceleration: false,
          },
          {
            default: () =>
              h(
                'div',
                {
                  ref: 'menu',
                  class: [`el-menu--${this.mode}`, this.popperClass],
                  onMouseenter: ($event: Event) =>
                    this.handleMouseenter($event, 100),
                  onMouseleave: () => this.handleMouseleave(true),
                  onFocus: ($event: Event) =>
                    this.handleMouseenter($event, 100),
                },
                [
                  h(
                    'ul',
                    {
                      class: [
                        'el-menu el-menu--popup',
                        `el-menu--popup-${this.data.currentPlacement}`,
                      ],
                      style: ulStyle.value,
                    },
                    [this.$slots.default?.()]
                  ),
                ]
              ),
            trigger: () =>
              h(
                'div',
                {
                  class: 'el-sub-menu__title',
                  style: [
                    this.paddingStyle,
                    this.titleStyle,
                    { backgroundColor: this.backgroundColor },
                  ],
                  onClick: this.handleClick,
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
                this.paddingStyle,
                this.titleStyle,
                { backgroundColor: this.backgroundColor },
              ],
              ref: 'verticalTitleRef',
              onClick: this.handleClick,
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
                    [this.$slots.default?.()]
                  ),
                  [[vShow, this.opened]]
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
            'is-active': this.active,
            'is-opened': this.opened,
            'is-disabled': this.disabled,
          },
        ],
        role: 'menuitem',
        ariaHaspopup: true,
        ariaExpanded: this.opened,
        onMouseenter: this.handleMouseenter,
        onMouseleave: () => this.handleMouseleave(true),
        onFocus: this.handleMouseenter,
      },
      [child]
    )
  },
})
