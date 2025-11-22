import {
  computed,
  createVNode,
  defineComponent,
  getCurrentInstance,
  nextTick,
  provide,
  ref,
  renderSlot,
  watch,
} from 'vue'
import { omit } from 'lodash-unified'
import {
  buildProps,
  definePropType,
  getEventCode,
  isNumber,
  isString,
  isUndefined,
} from '@element-plus/utils'
import { EVENT_CODE, UPDATE_MODEL_EVENT } from '@element-plus/constants'
import ElIcon from '@element-plus/components/icon'
import { Plus } from '@element-plus/icons-vue'
import { useNamespace, useOrderedChildren } from '@element-plus/hooks'
import { tabsRootContextKey } from './constants'
import TabNav from './tab-nav'

import type { ExtractPropTypes, VNode, __ExtractPublicPropTypes } from 'vue'
import type { Awaitable } from '@element-plus/utils'
import type { TabNavInstance } from './tab-nav'
import type { TabPaneName, TabsPaneContext } from './constants'

export const tabsProps = buildProps({
  /**
   * @description type of Tab
   */
  type: {
    type: String,
    values: ['card', 'border-card', ''],
    default: '',
  },
  /**
   * @description whether Tab is closable
   */
  closable: Boolean,
  /**
   * @description whether Tab is addable
   */
  addable: Boolean,
  /**
   * @description binding value, name of the selected tab
   */
  modelValue: {
    type: [String, Number],
  },
  /**
   * @description initial value when `model-value` is not set
   */
  defaultValue: {
    type: [String, Number],
  },
  /**
   * @description whether Tab is addable and closable
   */
  editable: Boolean,
  /**
   * @description position of tabs
   */
  tabPosition: {
    type: String,
    values: ['top', 'right', 'bottom', 'left'],
    default: 'top',
  },
  /**
   * @description hook function before switching tab. If `false` is returned or a `Promise` is returned and then is rejected, switching will be prevented
   */
  beforeLeave: {
    type: definePropType<
      (newName: TabPaneName, oldName: TabPaneName) => Awaitable<void | boolean>
    >(Function),
    default: () => true,
  },
  /**
   * @description whether width of tab automatically fits its container
   */
  stretch: Boolean,
  /**
   * @description tabs tabindex
   */
  tabindex: {
    type: [String, Number],
    default: 0,
  },
} as const)
export type TabsProps = ExtractPropTypes<typeof tabsProps>
export type TabsPropsPublic = __ExtractPublicPropTypes<typeof tabsProps>

const isPaneName = (value: unknown): value is string | number =>
  isString(value) || isNumber(value)

export const tabsEmits = {
  [UPDATE_MODEL_EVENT]: (name: TabPaneName) => isPaneName(name),
  tabClick: (pane: TabsPaneContext, ev: Event) => ev instanceof Event,
  tabChange: (name: TabPaneName) => isPaneName(name),
  edit: (paneName: TabPaneName | undefined, action: 'remove' | 'add') =>
    ['remove', 'add'].includes(action),
  tabRemove: (name: TabPaneName) => isPaneName(name),
  tabAdd: () => true,
}
export type TabsEmits = typeof tabsEmits

export type TabsPanes = Record<number, TabsPaneContext>

const Tabs = defineComponent({
  name: 'ElTabs',

  props: tabsProps,
  emits: tabsEmits,

  setup(props, { emit, slots, expose }) {
    const ns = useNamespace('tabs')

    const isVertical = computed(() =>
      ['left', 'right'].includes(props.tabPosition)
    )

    const {
      children: panes,
      addChild: registerPane,
      removeChild: unregisterPane,
      ChildrenSorter: PanesSorter,
    } = useOrderedChildren<TabsPaneContext>(getCurrentInstance()!, 'ElTabPane')

    const nav$ = ref<TabNavInstance>()
    const currentName = ref<TabPaneName>(
      (isUndefined(props.modelValue) ? props.defaultValue : props.modelValue) ??
        '0'
    )

    const setCurrentName = async (value?: TabPaneName, trigger = false) => {
      // should do nothing.
      if (currentName.value === value || isUndefined(value)) return

      try {
        let canLeave
        if (props.beforeLeave) {
          const result = props.beforeLeave(value, currentName.value)
          canLeave = result instanceof Promise ? await result : result
        } else {
          canLeave = true
        }

        if (canLeave !== false) {
          const isFocusInsidePane = panes.value
            .find((item) => item.paneName === currentName.value)
            ?.isFocusInsidePane()

          currentName.value = value
          if (trigger) {
            emit(UPDATE_MODEL_EVENT, value)
            emit('tabChange', value)
          }

          nav$.value?.removeFocus?.()
          if (isFocusInsidePane) {
            nav$.value?.focusActiveTab()
          }
        }
      } catch {}
    }

    const handleTabClick = (
      tab: TabsPaneContext,
      tabName: TabPaneName,
      event: Event
    ) => {
      if (tab.props.disabled) return
      emit('tabClick', tab, event)
      setCurrentName(tabName, true)
    }

    const handleTabRemove = (pane: TabsPaneContext, ev: Event) => {
      if (pane.props.disabled || isUndefined(pane.props.name)) return
      ev.stopPropagation()
      emit('edit', pane.props.name, 'remove')
      emit('tabRemove', pane.props.name)
    }

    const handleTabAdd = () => {
      emit('edit', undefined, 'add')
      emit('tabAdd')
    }

    const handleKeydown = (event: KeyboardEvent) => {
      const code = getEventCode(event)
      if ([EVENT_CODE.enter, EVENT_CODE.numpadEnter].includes(code))
        handleTabAdd()
    }

    const swapChildren = (
      vnode: VNode & {
        el: HTMLDivElement
        children: VNode<HTMLDivElement>[]
      }
    ) => {
      const actualFirstChild = vnode.el.firstChild!
      const firstChild = ['bottom', 'right'].includes(props.tabPosition)
        ? vnode.children[0].el!
        : vnode.children[1].el!

      if (actualFirstChild !== firstChild) {
        actualFirstChild.before(firstChild)
      }
    }

    watch(
      () => props.modelValue,
      (modelValue) => setCurrentName(modelValue)
    )

    watch(
      () => props.defaultValue,
      (defaultValue) => {
        if (isUndefined(props.modelValue)) {
          setCurrentName(defaultValue)
        }
      }
    )

    watch(currentName, async () => {
      await nextTick()
      nav$.value?.scrollToActiveTab()
    })

    provide(tabsRootContextKey, {
      props,
      currentName,
      registerPane,
      unregisterPane,
      nav$,
    })

    expose({
      currentName,
      get tabNavRef() {
        return omit(nav$.value, ['scheduleRender'])
      },
    })

    return () => {
      const addSlot = slots['add-icon']
      const newButton =
        props.editable || props.addable ? (
          <div
            class={[
              ns.e('new-tab'),
              isVertical.value && ns.e('new-tab-vertical'),
            ]}
            tabindex={props.tabindex}
            onClick={handleTabAdd}
            onKeydown={handleKeydown}
          >
            {addSlot ? (
              renderSlot(slots, 'add-icon')
            ) : (
              <ElIcon class={ns.is('icon-plus')}>
                <Plus />
              </ElIcon>
            )}
          </div>
        ) : null

      const tabNav = () => (
        <TabNav
          ref={nav$}
          currentName={currentName.value}
          editable={props.editable}
          type={props.type}
          panes={panes.value}
          stretch={props.stretch}
          onTabClick={handleTabClick}
          onTabRemove={handleTabRemove}
        />
      )

      const header = (
        <div
          class={[
            ns.e('header'),
            isVertical.value && ns.e('header-vertical'),
            ns.is(props.tabPosition),
          ]}
        >
          {createVNode(PanesSorter, null, {
            default: tabNav,
            $stable: true,
          })}
          {newButton}
        </div>
      )

      const panels = (
        <div class={ns.e('content')}>{renderSlot(slots, 'default')}</div>
      )

      return (
        <div
          class={[
            ns.b(),
            ns.m(props.tabPosition),
            {
              [ns.m('card')]: props.type === 'card',
              [ns.m('border-card')]: props.type === 'border-card',
            },
          ]}
          // @ts-ignore
          onVnodeMounted={swapChildren}
          onVnodeUpdated={swapChildren}
        >
          {panels}
          {header}
        </div>
      )
    }
  },
})

export type TabsInstance = InstanceType<typeof Tabs> & {
  currentName: TabPaneName
  tabNavRef: TabNavInstance | undefined
}

export default Tabs
