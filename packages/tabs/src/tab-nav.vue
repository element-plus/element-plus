<script lang='ts'>
import { h, defineComponent, ref, inject, computed, onUpdated, onMounted, onBeforeUnmount, PropType } from 'vue'
import { addResizeListener, removeResizeListener, ResizableElement } from '@element-plus/utils/resize-event'
import { EVENT_CODE } from '@element-plus/utils/aria'
import { on, off } from '@element-plus/utils/dom'
import throwError from '@element-plus/utils/error'
import TabBar from './tab-bar.vue'
import { NOOP, capitalize } from '@vue/shared'
import { RootTabs, Pane, ITabType } from './tabs.vue'

type RefElement = Nullable<HTMLElement>

interface Scrollable {
  next?: boolean
  prev?: number
}

export default defineComponent({
  name: 'ElTabNav',
  components: {
    TabBar,
  },
  props: {
    panes: {
      type: Array as PropType<Pane[]>,
      default: () => ([] as Pane[]),
    },
    currentName: {
      type: String,
      default: '',
    },
    editable: Boolean,
    onTabClick: {
      type: Function as PropType<(tab: Pane, tabName: string, ev: Event) => void>,
      default: NOOP,
    },
    onTabRemove: {
      type: Function as PropType<(tab: Pane, ev: Event) => void>,
      default: NOOP,
    },
    type: {
      type: String as PropType<ITabType>,
      default: '',
    },
    stretch: Boolean,
  },
  setup() {
    const rootTabs = inject<RootTabs>('rootTabs')
    if (!rootTabs) {
      throwError('[ElTabNav]', `ElTabNav must be nested inside ElTabs`)
    }

    const scrollable = ref<boolean | Scrollable>(false)
    const navOffset = ref(0)
    const isFocus = ref(false)
    const focusable = ref(true)

    const navScroll$ = ref<RefElement>(null)
    const nav$ = ref<RefElement>(null)
    const el$ = ref<RefElement>(null)

    const sizeName = computed(() => {
      return ['top', 'bottom'].includes(rootTabs.props.tabPosition) ? 'width' : 'height'
    })
    const navStyle = computed(() => {
      const dir = sizeName.value === 'width' ? 'X' : 'Y'
      return {
        transform: `translate${dir}(-${navOffset.value}px)`,
      }
    })

    const scrollPrev = () => {
      const containerSize = navScroll$.value[`offset${capitalize(sizeName.value)}`]
      const currentOffset = navOffset.value

      if (!currentOffset) return

      let newOffset = currentOffset > containerSize
        ? currentOffset - containerSize
        : 0

      navOffset.value = newOffset
    }

    const scrollNext = () => {
      const navSize = nav$.value[`offset${capitalize(sizeName.value)}`]
      const containerSize = navScroll$.value[`offset${capitalize(sizeName.value)}`]
      const currentOffset = navOffset.value

      if (navSize - currentOffset <= containerSize) return

      let newOffset = navSize - currentOffset > containerSize * 2
        ? currentOffset + containerSize
        : (navSize - containerSize)

      navOffset.value = newOffset
    }

    const scrollToActiveTab = () => {
      if (!scrollable.value) return
      const nav = nav$.value
      const activeTab = el$.value.querySelector('.is-active')
      if (!activeTab) return
      const navScroll = navScroll$.value
      const isHorizontal = ['top', 'bottom'].includes(rootTabs.props.tabPosition)
      const activeTabBounding = activeTab.getBoundingClientRect()
      const navScrollBounding = navScroll.getBoundingClientRect()
      const maxOffset = isHorizontal
        ? nav.offsetWidth - navScrollBounding.width
        : nav.offsetHeight - navScrollBounding.height
      const currentOffset = navOffset.value
      let newOffset = currentOffset

      if (isHorizontal) {
        if (activeTabBounding.left < navScrollBounding.left) {
          newOffset = currentOffset - (navScrollBounding.left - activeTabBounding.left)
        }
        if (activeTabBounding.right > navScrollBounding.right) {
          newOffset = currentOffset + activeTabBounding.right - navScrollBounding.right
        }
      } else {
        if (activeTabBounding.top < navScrollBounding.top) {
          newOffset = currentOffset - (navScrollBounding.top - activeTabBounding.top)
        }
        if (activeTabBounding.bottom > navScrollBounding.bottom) {
          newOffset = currentOffset + (activeTabBounding.bottom - navScrollBounding.bottom)
        }
      }
      newOffset = Math.max(newOffset, 0)
      navOffset.value = Math.min(newOffset, maxOffset)
    }

    const update = () => {
      if (!nav$.value) return
      const navSize = nav$.value[`offset${capitalize(sizeName.value)}`]
      const containerSize = navScroll$.value[`offset${capitalize(sizeName.value)}`]
      const currentOffset = navOffset.value

      if (containerSize < navSize) {
        const currentOffset = navOffset.value
        scrollable.value = (scrollable.value || {}) as Scrollable
        scrollable.value.prev = currentOffset
        scrollable.value.next = currentOffset + containerSize < navSize
        if (navSize - currentOffset < containerSize) {
          navOffset.value = navSize - containerSize
        }
      } else {
        scrollable.value = false
        if (currentOffset > 0) {
          navOffset.value = 0
        }
      }
    }

    const changeTab = e => {
      const code = e.code
      let nextIndex
      let currentIndex, tabList

      const { up, down, left, right } = EVENT_CODE
      if ([up, down, left, right].indexOf(code) !== -1) { // 左右上下键更换tab
        tabList = e.currentTarget.querySelectorAll('[role=tab]')
        currentIndex = Array.prototype.indexOf.call(tabList, e.target)
      } else {
        return
      }
      if (code === left || code === up) { // left
        if (currentIndex === 0) { // first
          nextIndex = tabList.length - 1
        } else {
          nextIndex = currentIndex - 1
        }
      } else { // right
        if (currentIndex < tabList.length - 1) { // not last
          nextIndex = currentIndex + 1
        } else {
          nextIndex = 0
        }
      }
      tabList[nextIndex].focus() // 改变焦点元素
      tabList[nextIndex].click() // 选中下一个tab
      setFocus()
    }

    const setFocus = () => {
      if (focusable.value) {
        isFocus.value = true
      }
    }

    const removeFocus = () => {
      isFocus.value = false
    }

    const visibilityChangeHandler = () => {
      const visibility = document.visibilityState
      if (visibility === 'hidden') {
        focusable.value = false
      } else if (visibility === 'visible') {
        setTimeout(() => {
          focusable.value = true
        }, 50)
      }
    }

    const windowBlurHandler = () => {
      focusable.value = false
    }

    const windowFocusHandler = () => {
      setTimeout(() => {
        focusable.value = true
      }, 50)
    }

    onUpdated(() => {
      update()
    })

    onMounted(() => {
      addResizeListener(el$.value as ResizableElement, update)
      on(document, 'visibilitychange', visibilityChangeHandler)
      on(window, 'blur', windowBlurHandler)
      on(window, 'focus', windowFocusHandler)
      setTimeout(() => {
        scrollToActiveTab()
      }, 0)
    })

    onBeforeUnmount(() => {
      if(el$.value) {
        removeResizeListener(el$.value as ResizableElement, update)
      }
      off(document, 'visibilitychange', visibilityChangeHandler)
      off(window, 'blur', windowBlurHandler)
      off(window, 'focus', windowFocusHandler)
    })

    return {
      rootTabs,

      scrollable,
      navOffset,
      isFocus,
      focusable,

      navScroll$,
      nav$,
      el$,

      sizeName,
      navStyle,

      scrollPrev,
      scrollNext,
      scrollToActiveTab,
      update,
      changeTab,
      setFocus,
      removeFocus,
      visibilityChangeHandler,
      windowBlurHandler,
      windowFocusHandler,
    }
  },
  render() {
    const {
      type,
      panes,
      editable,
      stretch,
      onTabClick,
      onTabRemove,
      navStyle,
      scrollable,
      scrollNext,
      scrollPrev,
      changeTab,
      setFocus,
      removeFocus,
      rootTabs,
      isFocus,
    } = this

    const scrollBtn = scrollable ? [
      h(
        'span',
        {
          class: ['el-tabs__nav-prev', scrollable.prev ? '' : 'is-disabled'],
          onClick: scrollPrev,
        },
        [h('i', { class: 'el-icon-arrow-left' })],
      ),
      h(
        'span',
        {
          class: ['el-tabs__nav-next', scrollable.next ? '' : 'is-disabled'],
          onClick: scrollNext,
        },
        [h('i', { class: 'el-icon-arrow-right' })],
      ),
    ] : null

    const tabs = panes.map((pane, index) => {
      let tabName = pane.props.name || pane.index || `${index}`
      const closable = pane.isClosable || editable

      pane.index = `${index}`

      const btnClose = closable ?
        h(
          'span',
          {
            class: 'el-icon-close',
            onClick: ev => { onTabRemove(pane, ev) },
          },
        ) : null

      const tabLabelContent = pane.instance.slots.label?.() || pane.props.label
      const tabindex = pane.active ? 0 : -1

      return h(
        'div',
        {
          class: {
            'el-tabs__item': true,
            [`is-${ rootTabs.props.tabPosition }`]: true,
            'is-active': pane.active,
            'is-disabled': pane.props.disabled,
            'is-closable': closable,
            'is-focus': isFocus,
          },
          id: `tab-${tabName}`,
          key: `tab-${tabName}`,
          'aria-controls': `pane-${tabName}`,
          role: 'tab',
          'aria-selected': pane.active,
          ref: `tab-${tabName}`,
          tabindex: tabindex,
          onFocus: () => { setFocus() },
          onBlur: () => { removeFocus() },
          onClick: ev => { removeFocus(); onTabClick(pane, tabName, ev) },
          onKeydown: ev => { if (closable && (ev.code === EVENT_CODE.delete || ev.code === EVENT_CODE.backspace)) { onTabRemove(pane, ev)} },
        },
        [tabLabelContent, btnClose],
      )
    })

    return h(
      'div',
      {
        ref: 'el$',
        class: ['el-tabs__nav-wrap', scrollable ? 'is-scrollable' : '', `is-${ rootTabs.props.tabPosition }`],
      },
      [
        scrollBtn,
        h(
          'div',
          {
            class: 'el-tabs__nav-scroll',
            ref: 'navScroll$',
          },
          [
            h(
              'div',
              {
                class: ['el-tabs__nav', `is-${ rootTabs.props.tabPosition }`, stretch && ['top', 'bottom'].includes(rootTabs.props.tabPosition) ? 'is-stretch' : ''],
                ref: 'nav$',
                style: navStyle,
                role: 'tablist',
                onKeydown: changeTab,
              },
              [
                !type ? h(
                  TabBar,
                  {
                    tabs: panes,
                  },
                ) : null,
                tabs,
              ],
            ),
          ],
        ),
      ],
    )
  },
})
</script>
