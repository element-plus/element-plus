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
  toRefs,
  watch,
  computed,
  ref,
  provide,
  ToRefs,
} from 'vue'
import mitt from 'mitt'
import { hasClass, addClass, removeClass } from '@element-plus/utils/dom'
import { IMenuProps, RootMenuProvider } from './menu'
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
    backgroundColor: { type: String, default: '#fffff' },
    textColor: { type: String, default: '#303133' },
    activeTextColor: { type: String, default: '#409EFF' },
    collapseTransition: {
      type: Boolean,
      default: true,
    },
  },
  setup(
    props: IMenuProps = {
      mode: 'vertical',
      collapse: false,
      backgroundColor: '#fffff',
      textColor: '#303133',
      activeTextColor: '#409EFF',
      uniqueOpened: false,
      menuTrigger: 'hover',
      router: false,
      collapseTransition: false,
    },
  ) {
    // data
    const data = toRefs({
      styles: '',
      class: '',
      activeIndex: props.defaultActive,
      openedMenus:
        props.defaultOpeneds && !props.collapse
          ? props.defaultOpeneds.slice(0)
          : [],
      items: {},
      submenus: {},
    })

    console.log(data)

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
      const index = data.activeIndex.value
      const activeItem = data.items[index]
      if (!activeItem || props.mode === 'horizontal' || props.collapse) return

      let indexPath = activeItem.indexPath

      // 展开该菜单项的路径上所有子菜单
      // expand all submenus of the menu item
      indexPath.forEach(index => {
        let submenu = data.submenus[index]
        submenu && openMenu(index, submenu.indexPath)
      })
    }

    const addSubMenu = item => {
      data.submenus.value[item.index] = item
    }

    const removeSubMenu = item => {
      delete data.submenus.value[item.index]
    }

    const addMenuItem = item => {
      data.items.value[item.index] = item
    }

    const removeMenuItem = item => {
      delete data.items.value[item.index]
    }

    const openMenu = (index: string, indexPath: string) => {
      let openedMenus = data.openedMenus.value
      if (openedMenus.indexOf(index) !== -1) return
      // 将不在该菜单路径下的其余菜单收起
      // collapse all menu that are not under current menu item
      if (props.uniqueOpened) {
        data.openedMenus.value = openedMenus.filter((index: string) => {
          return indexPath.indexOf(index) !== -1
        })
      }
      data.openedMenus.value.push(index)
    }

    const closeMenu = index => {
      const i = data.openedMenus.value.indexOf(index)
      if (i !== -1) {
        data.openedMenus.value.splice(i, 1)
      }
    }

    const open = index => {
      const { indexPath } = data.submenus[index.toString()]
      indexPath.forEach(i => openMenu(i, indexPath))
    }

    const close = index => {
      closeMenu(index)
    }

    const handleSubmenuClick = submenu => {
      const { index, indexPath } = submenu
      let isOpened = data.openedMenus.value.indexOf(index) !== -1

      if (isOpened) {
        closeMenu(index)
        // this.$emit('close', index, indexPath);
      } else {
        openMenu(index, indexPath)
        // this.$emit('open', index, indexPath);
      }
    }

    const handleItemClick = item => {
      const { index, indexPath } = item
      const oldActiveIndex = data.activeIndex.value
      const hasIndex = item.index !== null

      if (hasIndex) {
        data.activeIndex.value = item.index
      }

      // this.$emit('select', index, indexPath, item)

      if (props.mode === 'horizontal' || props.collapse) {
        data.openedMenus.value = []
      }

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

    const routeToItem = (item, onError) => {
      let route = item.route || item.index
      try {
        // this.$router.push(route, () => null, onError)
      } catch (e) {
        console.error(e)
      }
    }

    const updateActiveIndex = (val?: string) => {
      const itemsInData = data.items
      const activeIndex = data.activeIndex.value
      const item =
        itemsInData[val] ||
        itemsInData[activeIndex] ||
        itemsInData[props.defaultActive]
      if (item) {
        data.activeIndex = item.index
        initializeMenu()
      } else {
        data.activeIndex = null
      }
    }

    // watch

    watch([props.mode, props.collapse], ([currentMode], [currentCollapse]) => {
      data.class.value = `${
        currentMode === 'horizontal' ? 'el-menu--horizontal' : ''
      } el-menu ${currentCollapse ? 'el-menu--collapse' : ''}`
    })

    watch(
      () => props.defaultActive,
      currentActive => {
        if (!data.items[currentActive]) {
          data.activeIndex.value = ''
        }
        updateActiveIndex(currentActive)
      },
    )

    watch(
      () => data.items,
      () => {
        updateActiveIndex()
      },
    )

    // emitter
    const rootMenuEmitter = mitt()
    // TODO: types of e
    rootMenuEmitter.on('rootmenu:item-click', (e: any) => {
      handleItemClick(e)
    })
    rootMenuEmitter.on('rootmenu:submenu-click', (e: any) => {
      handleSubmenuClick(e)
    })

    // provide
    provide<RootMenuProvider>('rootMenu', {
      data: { ...data, hoverBackground, isMenuPopup },
      props,
      methods: {
        addMenuItem,
        removeMenuItem,
        addSubMenu,
        removeSubMenu,
        openMenu,
        closeMenu,
      },
    })

    return {
      data: {
        ...data,
        hoverBackground,
        isMenuPopup,
      },
      props,
    }
  },
})
</script>
