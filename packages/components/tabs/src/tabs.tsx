import {
  Fragment,
  defineComponent,
  getCurrentInstance,
  nextTick,
  onMounted,
  onUpdated,
  provide,
  ref,
  renderSlot,
  watch,
} from 'vue'
import { NOOP } from '@vue/shared'
import {
  buildProps,
  definePropType,
  isNumber,
  isPromise,
  isString,
} from '@element-plus/utils'
import {
  EVENT_CODE,
  INPUT_EVENT,
  UPDATE_MODEL_EVENT,
} from '@element-plus/constants'
import ElIcon from '@element-plus/components/icon'
import { Plus } from '@element-plus/icons-vue'
import { tabsRootContextKey } from '@element-plus/tokens'
import { useNamespace } from '@element-plus/hooks'
import TabNav from './tab-nav'
import type { TabNavInstance } from './tab-nav'
import type { TabsPaneContext } from '@element-plus/tokens'

import type {
  Component,
  ComponentInternalInstance,
  ExtractPropTypes,
  Ref,
  VNode,
} from 'vue'
import type { Awaitable } from '@element-plus/utils'

export type TabPanelName = string | number

export const tabsProps = buildProps({
  type: {
    type: String,
    values: ['card', 'border-card', ''],
    default: '',
  },
  activeName: {
    type: [String, Number],
    default: '',
  },
  closable: Boolean,
  addable: Boolean,
  modelValue: {
    type: [String, Number],
    default: '',
  },
  editable: Boolean,
  tabPosition: {
    type: String,
    values: ['top', 'right', 'bottom', 'left'],
    default: 'top',
  },
  beforeLeave: {
    type: definePropType<
      (
        newName: TabPanelName,
        oldName: TabPanelName
      ) => Awaitable<void | boolean>
    >(Function),
    default: () => true,
  },
  stretch: Boolean,
} as const)
export type TabsProps = ExtractPropTypes<typeof tabsProps>

const isPanelName = (value: unknown): value is string | number =>
  isString(value) || isNumber(value)

export const tabsEmits = {
  [UPDATE_MODEL_EVENT]: (name: TabPanelName) => isPanelName(name),
  [INPUT_EVENT]: (name: TabPanelName) => isPanelName(name),
  'tab-click': (pane: TabsPaneContext, ev: Event) => ev instanceof Event,
  'tab-change': (name: TabPanelName) => isPanelName(name),
  edit: (paneName: TabPanelName | undefined, action: 'remove' | 'add') =>
    ['remove', 'add'].includes(action),
  'tab-remove': (name: TabPanelName) => isPanelName(name),
  'tab-add': () => true,
}
export type TabsEmits = typeof tabsEmits

const getPaneInstanceFromSlot = (
  vnode: VNode,
  paneInstanceList: ComponentInternalInstance[] = []
) => {
  const children = (vnode.children || []) as ArrayLike<VNode>
  Array.from(children).forEach((node) => {
    let type = node.type
    type = (type as Component).name || type
    if (type === 'ElTabPane' && node.component) {
      paneInstanceList.push(node.component)
    } else if (type === Fragment || type === 'template') {
      getPaneInstanceFromSlot(node, paneInstanceList)
    }
  })
  return paneInstanceList
}

export default defineComponent({
  name: 'ElTabs',

  props: tabsProps,
  emits: tabsEmits,

  setup(props, { emit, slots, expose }) {
    const instance = getCurrentInstance()!
    const ns = useNamespace('tabs')

    const nav$ = ref<TabNavInstance>()
    const panes: Ref<TabsPaneContext[]> = ref([])
    const currentName = ref(props.modelValue || props.activeName || '0')

    const paneStatesMap: Record<number, TabsPaneContext> = {}

    const updatePaneInstances = (isForceUpdate = false) => {
      if (slots.default) {
        const children = instance.subTree.children as ArrayLike<VNode>
        const content = Array.from(children).find(
          ({ props }) => props?.class === ns.e('content')
        )
        if (!content) return

        const paneInstanceList: TabsPaneContext[] = getPaneInstanceFromSlot(
          content
        ).map((paneComponent) => paneStatesMap[paneComponent.uid])

        const panesChanged = !(
          paneInstanceList.length === panes.value.length &&
          paneInstanceList.every(
            (pane, index) => pane.uid === panes.value[index].uid
          )
        )

        if (isForceUpdate || panesChanged) {
          panes.value = paneInstanceList
        }
      } else if (panes.value.length !== 0) {
        panes.value = []
      }
    }

    const changeCurrentName = (value: TabPanelName) => {
      currentName.value = value
      emit(INPUT_EVENT, value)
      emit(UPDATE_MODEL_EVENT, value)
      emit('tab-change', value)
    }

    const setCurrentName = (value: TabPanelName) => {
      // should do nothing.
      if (currentName.value === value) return

      const canLeave = props.beforeLeave?.(value, currentName.value)
      if (isPromise(canLeave)) {
        canLeave.then(
          () => {
            changeCurrentName(value)

            // call exposed function, Vue doesn't support expose in typescript yet.
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-expect-error
            nav$.value?.removeFocus?.()
          },
          // ignore promise rejection in `before-leave` hook
          NOOP
        )
      } else if (canLeave !== false) {
        changeCurrentName(value)
      }
    }

    const handleTabClick = (
      tab: TabsPaneContext,
      tabName: TabPanelName,
      event: Event
    ) => {
      if (tab.props.disabled) return
      setCurrentName(tabName)
      emit('tab-click', tab, event)
    }

    const handleTabRemove = (pane: TabsPaneContext, ev: Event) => {
      if (pane.props.disabled) return
      ev.stopPropagation()
      emit('edit', pane.props.name, 'remove')
      emit('tab-remove', pane.props.name)
    }

    const handleTabAdd = () => {
      emit('edit', undefined, 'add')
      emit('tab-add')
    }

    onUpdated(() => updatePaneInstances())
    onMounted(() => updatePaneInstances())

    watch(
      () => props.activeName,
      (modelValue) => setCurrentName(modelValue)
    )

    watch(
      () => props.modelValue,
      (modelValue) => setCurrentName(modelValue)
    )

    watch(currentName, async () => {
      updatePaneInstances(true)
      await nextTick()
      await nav$.value?.$nextTick()

      // call exposed function, Vue doesn't support expose in typescript yet.
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      nav$.value?.scrollToActiveTab()
    })

    provide(tabsRootContextKey, {
      props,
      currentName,
      updatePaneState: (pane) => (paneStatesMap[pane.uid] = pane),
    })

    expose({
      currentName,
    })

    return () => {
      const newButton =
        props.editable || props.addable ? (
          <span
            class={ns.e('new-tab')}
            tabindex="0"
            onClick={handleTabAdd}
            onKeydown={(ev: KeyboardEvent) => {
              if (ev.code === EVENT_CODE.enter) handleTabAdd()
            }}
          >
            <ElIcon class={ns.is('icon-plus')}>
              <Plus />
            </ElIcon>
          </span>
        ) : null

      const header = (
        <div class={[ns.e('header'), ns.is(props.tabPosition)]}>
          {newButton}
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
          {...props.tabPosition !== 'bottom'
            ? [header, panels]
            : [panels, header]}
        </div>
      )
    }
  },
})
