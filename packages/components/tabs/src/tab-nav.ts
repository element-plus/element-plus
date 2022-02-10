import {
  h,
  defineComponent,
  ref,
  inject,
  computed,
  onUpdated,
  onMounted,
  watch,
} from 'vue'
import { NOOP, capitalize } from '@vue/shared'
import {
  useResizeObserver,
  useDocumentVisibility,
  useWindowFocus,
} from '@vueuse/core'
import {
  buildProps,
  definePropType,
  mutable,
  throwError,
  EVENT_CODE,
} from '@element-plus/utils-v2'
import { ElIcon } from '@element-plus/components/icon'
import { ArrowLeft, ArrowRight, Close } from '@element-plus/icons-vue'
import { tabsRootContextKey } from '@element-plus/tokens'
import TabBar from './tab-bar.vue'
import type { ExtractPropTypes, CSSProperties } from 'vue'
import type { TabsPaneContext } from '@element-plus/tokens'
export interface Scrollable {
  next?: boolean
  prev?: number
}

export const tabNavProps = buildProps({
  panes: {
    type: definePropType<TabsPaneContext[]>(Array),
    default: () => mutable([] as const),
  },
  currentName: {
    type: [String, Number],
    default: '',
  },
  editable: Boolean,
  onTabClick: {
    type: definePropType<
      (tab: TabsPaneContext, tabName: string | number, ev: Event) => void
    >(Function),
    default: NOOP,
  },
  onTabRemove: {
    type: definePropType<(tab: TabsPaneContext, ev: Event) => void>(Function),
    default: NOOP,
  },
  type: {
    type: String,
    values: ['card', 'border-card', ''],
    default: '',
  },
  stretch: Boolean,
} as const)

export type TabNavProps = ExtractPropTypes<typeof tabNavProps>

const COMPONENT_NAME = 'ElTabNav'
export default defineComponent({
  name: COMPONENT_NAME,
  props: tabNavProps,

  setup(props, { expose }) {
    const visibility = useDocumentVisibility()
    const focused = useWindowFocus()

    const rootTabs = inject(tabsRootContextKey)
    if (!rootTabs)
      throwError(COMPONENT_NAME, `ElTabNav must be nested inside ElTabs`)

    const scrollable = ref<false | Scrollable>(false)
    const navOffset = ref(0)
    const isFocus = ref(false)
    const focusable = ref(true)

    const navScroll$ = ref<HTMLDivElement>()
    const nav$ = ref<HTMLDivElement>()
    const el$ = ref<HTMLDivElement>()

    const sizeName = computed(() =>
      ['top', 'bottom'].includes(rootTabs.props.tabPosition)
        ? 'width'
        : 'height'
    )
    const navStyle = computed<CSSProperties>(() => {
      const dir = sizeName.value === 'width' ? 'X' : 'Y'
      return {
        transform: `translate${dir}(-${navOffset.value}px)`,
      }
    })

    const scrollPrev = () => {
      if (!navScroll$.value) return

      const containerSize =
        navScroll$.value[`offset${capitalize(sizeName.value)}`]
      const currentOffset = navOffset.value

      if (!currentOffset) return

      const newOffset =
        currentOffset > containerSize ? currentOffset - containerSize : 0

      navOffset.value = newOffset
    }

    const scrollNext = () => {
      if (!navScroll$.value || !nav$.value) return

      const navSize = nav$.value[`offset${capitalize(sizeName.value)}`]
      const containerSize =
        navScroll$.value[`offset${capitalize(sizeName.value)}`]
      const currentOffset = navOffset.value

      if (navSize - currentOffset <= containerSize) return

      const newOffset =
        navSize - currentOffset > containerSize * 2
          ? currentOffset + containerSize
          : navSize - containerSize

      navOffset.value = newOffset
    }

    const scrollToActiveTab = () => {
      const nav = nav$.value
      if (!scrollable.value || !el$.value || !navScroll$.value || !nav) return

      const activeTab = el$.value.querySelector('.is-active')
      if (!activeTab) return

      const navScroll = navScroll$.value
      const isHorizontal = ['top', 'bottom'].includes(
        rootTabs.props.tabPosition
      )
      const activeTabBounding = activeTab.getBoundingClientRect()
      const navScrollBounding = navScroll.getBoundingClientRect()
      const maxOffset = isHorizontal
        ? nav.offsetWidth - navScrollBounding.width
        : nav.offsetHeight - navScrollBounding.height
      const currentOffset = navOffset.value
      let newOffset = currentOffset

      if (isHorizontal) {
        if (activeTabBounding.left < navScrollBounding.left) {
          newOffset =
            currentOffset - (navScrollBounding.left - activeTabBounding.left)
        }
        if (activeTabBounding.right > navScrollBounding.right) {
          newOffset =
            currentOffset + activeTabBounding.right - navScrollBounding.right
        }
      } else {
        if (activeTabBounding.top < navScrollBounding.top) {
          newOffset =
            currentOffset - (navScrollBounding.top - activeTabBounding.top)
        }
        if (activeTabBounding.bottom > navScrollBounding.bottom) {
          newOffset =
            currentOffset +
            (activeTabBounding.bottom - navScrollBounding.bottom)
        }
      }
      newOffset = Math.max(newOffset, 0)
      navOffset.value = Math.min(newOffset, maxOffset)
    }

    const update = () => {
      if (!nav$.value || !navScroll$.value) return

      const navSize = nav$.value[`offset${capitalize(sizeName.value)}`]
      const containerSize =
        navScroll$.value[`offset${capitalize(sizeName.value)}`]
      const currentOffset = navOffset.value

      if (containerSize < navSize) {
        const currentOffset = navOffset.value
        scrollable.value = scrollable.value || {}
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

    const changeTab = (e: KeyboardEvent) => {
      const code = e.code

      const { up, down, left, right } = EVENT_CODE
      if (![up, down, left, right].includes(code)) return

      // 左右上下键更换tab
      const tabList = Array.from(
        (e.currentTarget as HTMLDivElement).querySelectorAll<HTMLDivElement>(
          '[role=tab]'
        )
      )
      const currentIndex = tabList.indexOf(e.target as HTMLDivElement)

      let nextIndex: number
      if (code === left || code === up) {
        // left
        if (currentIndex === 0) {
          // first
          nextIndex = tabList.length - 1
        } else {
          nextIndex = currentIndex - 1
        }
      } else {
        // right
        if (currentIndex < tabList.length - 1) {
          // not last
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
      if (focusable.value) isFocus.value = true
    }
    const removeFocus = () => (isFocus.value = false)

    watch(visibility, (visibility) => {
      if (visibility === 'hidden') {
        focusable.value = false
      } else if (visibility === 'visible') {
        setTimeout(() => (focusable.value = true), 50)
      }
    })
    watch(focused, (focused) => {
      if (focused) {
        setTimeout(() => (focusable.value = true), 50)
      } else {
        focusable.value = false
      }
    })

    useResizeObserver(el$, update)

    onMounted(() => setTimeout(() => scrollToActiveTab(), 0))
    onUpdated(() => update())

    expose({
      scrollToActiveTab,
      removeFocus,
    })

    return () => {
      const scrollBtn = scrollable.value
        ? [
            h(
              'span',
              {
                class: [
                  'el-tabs__nav-prev',
                  scrollable.value.prev ? '' : 'is-disabled',
                ],
                onClick: scrollPrev,
              },
              [h(ElIcon, {}, { default: () => h(ArrowLeft) })]
            ),
            h(
              'span',
              {
                class: [
                  'el-tabs__nav-next',
                  scrollable.value.next ? '' : 'is-disabled',
                ],
                onClick: scrollNext,
              },
              [h(ElIcon, {}, { default: () => h(ArrowRight) })]
            ),
          ]
        : null

      const tabs = props.panes.map((pane, index) => {
        const tabName = pane.props.name || pane.index || `${index}`
        const closable = pane.isClosable || props.editable
        pane.index = `${index}`

        const btnClose = closable
          ? h(
              ElIcon,
              {
                class: 'is-icon-close',
                onClick: (ev: MouseEvent) => props.onTabRemove(pane, ev),
              },
              { default: () => h(Close) }
            )
          : null

        const tabLabelContent =
          pane.instance.slots.label?.() || pane.props.label
        const tabindex = pane.active ? 0 : -1

        return h(
          'div',
          {
            class: {
              'el-tabs__item': true,
              [`is-${rootTabs.props.tabPosition}`]: true,
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
            tabindex,
            onFocus: () => setFocus(),
            onBlur: () => removeFocus(),
            onClick: (ev: MouseEvent) => {
              removeFocus()
              props.onTabClick(pane, tabName, ev)
            },
            onKeydown: (ev: KeyboardEvent) => {
              if (
                closable &&
                (ev.code === EVENT_CODE.delete ||
                  ev.code === EVENT_CODE.backspace)
              ) {
                props.onTabRemove(pane, ev)
              }
            },
          },
          [tabLabelContent, btnClose]
        )
      })

      return h(
        'div',
        {
          ref: el$,
          class: [
            'el-tabs__nav-wrap',
            scrollable.value ? 'is-scrollable' : '',
            `is-${rootTabs.props.tabPosition}`,
          ],
        },
        [
          scrollBtn,
          h(
            'div',
            {
              class: 'el-tabs__nav-scroll',
              ref: navScroll$,
            },
            [
              h(
                'div',
                {
                  class: [
                    'el-tabs__nav',
                    `is-${rootTabs.props.tabPosition}`,
                    props.stretch &&
                    ['top', 'bottom'].includes(rootTabs.props.tabPosition)
                      ? 'is-stretch'
                      : '',
                  ],
                  ref: nav$,
                  style: navStyle.value,
                  role: 'tablist',
                  onKeydown: changeTab,
                },
                [
                  !props.type
                    ? h(TabBar, {
                        tabs: [...props.panes],
                      })
                    : null,
                  tabs,
                ]
              ),
            ]
          ),
        ]
      )
    }
  },
})
