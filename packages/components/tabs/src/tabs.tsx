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
import {
  buildProps,
  definePropType,
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

import type { TabNavInstance } from './tab-nav'
import type { TabsPaneContext } from './constants'
import type { ExtractPropTypes, FunctionalComponent, VNode } from 'vue'
import type { Awaitable } from '@element-plus/utils'

export type TabPaneName = string | number

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
} as const)
export type TabsProps = ExtractPropTypes<typeof tabsProps>

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
      addChild: sortPane,
      removeChild: unregisterPane,
    } = useOrderedChildren<TabsPaneContext>(getCurrentInstance()!, 'ElTabPane')

    const nav$ = ref<TabNavInstance>()
    const currentName = ref<TabPaneName>(props.modelValue ?? '0')

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
          currentName.value = value
          if (trigger) {
            emit(UPDATE_MODEL_EVENT, value)
            emit('tabChange', value)
          }

          nav$.value?.removeFocus?.()
        }
      } catch {}
    }

    const handleTabClick = (
      tab: TabsPaneContext,
      tabName: TabPaneName,
      event: Event
    ) => {
      if (tab.props.disabled) return
      setCurrentName(tabName, true)
      emit('tabClick', tab, event)
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

    watch(
      () => props.modelValue,
      (modelValue) => setCurrentName(modelValue)
    )

    watch(currentName, async () => {
      await nextTick()
      nav$.value?.scrollToActiveTab()
    })

    provide(tabsRootContextKey, {
      props,
      currentName,
      registerPane: (pane: TabsPaneContext) => {
        panes.value.push(pane)
      },
      sortPane,
      unregisterPane,
    })

    expose({
      currentName,
    })
    const TabNavRenderer: FunctionalComponent<{ render: () => VNode }> = ({
      render,
    }) => {
      return render()
    }
    return () => {
      const addSlot = slots['add-icon']
      const newButton =
        props.editable || props.addable ? (
          <div
            class={[
              ns.e('new-tab'),
              isVertical.value && ns.e('new-tab-vertical'),
            ]}
            tabindex="0"
            onClick={handleTabAdd}
            onKeydown={(ev: KeyboardEvent) => {
              if ([EVENT_CODE.enter, EVENT_CODE.numpadEnter].includes(ev.code))
                handleTabAdd()
            }}
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

      const header = (
        <div
          class={[
            ns.e('header'),
            isVertical.value && ns.e('header-vertical'),
            ns.is(props.tabPosition),
          ]}
        >
          <TabNavRenderer
            render={() => {
              const hasLabelSlot = panes.value.some((pane) => pane.slots.label)
              return createVNode(
                TabNav,
                {
                  ref: nav$,
                  currentName: currentName.value,
                  editable: props.editable,
                  type: props.type,
                  panes: panes.value,
                  stretch: props.stretch,
                  onTabClick: handleTabClick,
                  onTabRemove: handleTabRemove,
                },
                { $stable: !hasLabelSlot }
              )
            }}
          />
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
}

export default Tabs
