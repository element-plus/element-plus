import {
  computed,
  defineComponent,
  getCurrentInstance,
  provide,
  reactive,
  ref,
  renderSlot,
  watch,
} from 'vue'
import {
  buildProps,
  definePropType,
  isFunction,
  isNumber,
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
import { useDeprecated, useNamespace } from '@element-plus/hooks'
import TabNav from './tab-nav'
import type { TabNavInstance } from './tab-nav'
import type { TabsPaneContext } from '@element-plus/tokens'

import type { ExtractPropTypes } from 'vue'
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
  /** @deprecated use `tab-change` instead */
  [INPUT_EVENT]: (name: TabPanelName) => isPanelName(name),
  'tab-click': (pane: TabsPaneContext, ev: Event) => ev instanceof Event,
  'tab-change': (name: TabPanelName) => isPanelName(name),
  edit: (paneName: TabPanelName | undefined, action: 'remove' | 'add') =>
    ['remove', 'add'].includes(action),
  'tab-remove': (name: TabPanelName) => isPanelName(name),
  'tab-add': () => true,
}
export type TabsEmits = typeof tabsEmits

export default defineComponent({
  name: 'ElTabs',

  props: tabsProps,
  emits: tabsEmits,

  setup(props, { emit, slots, expose }) {
    const instance = getCurrentInstance()!
    const ns = useNamespace('tabs')

    const nav$ = ref<TabNavInstance>()
    const panes: Record<number, TabsPaneContext> = reactive({})
    const currentName = ref(props.modelValue || props.activeName || '0')

    useDeprecated(
      {
        scope: 'el-tabs',
        type: 'Event',
        from: 'input',
        replacement: 'tab-change',
        version: '2.5.0',
        ref: 'https://element-plus.org/en-US/component/tabs.html#tabs-events',
      },
      computed(() => isFunction(instance.vnode.props?.onInput))
    )

    const changeCurrentName = (value: TabPanelName) => {
      currentName.value = value
      /** @deprecated use `tab-change` instead */
      emit(INPUT_EVENT, value)
      emit(UPDATE_MODEL_EVENT, value)
      emit('tab-change', value)
    }

    const setCurrentName = async (value: TabPanelName) => {
      // should do nothing.
      if (currentName.value === value) return

      try {
        const canLeave = await props.beforeLeave?.(value, currentName.value)
        if (canLeave !== false) {
          changeCurrentName(value)

          // call exposed function, Vue doesn't support expose in typescript yet.
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-expect-error
          nav$.value?.removeFocus?.()
        }
      } catch {}
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

    watch(
      () => props.activeName,
      (modelValue) => setCurrentName(modelValue)
    )

    watch(
      () => props.modelValue,
      (modelValue) => setCurrentName(modelValue)
    )

    watch(currentName, async () => {
      // call exposed function, Vue doesn't support expose in typescript yet.
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      nav$.value?.scrollToActiveTab()
    })

    {
      const registerPane = (pane: TabsPaneContext) => (panes[pane.uid] = pane)
      const unregisterPane = (uid: number) => delete panes[uid]

      provide(tabsRootContextKey, {
        props,
        currentName,
        registerPane,
        unregisterPane,
      })
    }

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
            panes={Object.values(panes)}
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
