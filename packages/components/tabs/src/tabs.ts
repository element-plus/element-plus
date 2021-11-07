import {
  defineComponent,
  Fragment,
  getCurrentInstance,
  h,
  nextTick,
  onMounted,
  onUpdated,
  provide,
  ref,
  renderSlot,
  watch,
} from 'vue'
import { isPromise } from '@vue/shared'
import { EVENT_CODE } from '@element-plus/utils/aria'
import ElIcon from '@element-plus/components/icon'
import { Plus } from '@element-plus/icons'
import { buildProps, definePropType } from '@element-plus/utils/props'
import { INPUT_EVENT, UPDATE_MODEL_EVENT } from '@element-plus/utils/constants'
import TabNav from './tab-nav.vue'

import type {
  Component,
  ComponentInternalInstance,
  VNode,
  ExtractPropTypes,
  Ref,
} from 'vue'
import type {
  BeforeLeave,
  ITabType,
  ITabPosition,
  Pane,
  RootTabs,
  UpdatePaneStateCallback,
} from './token'

export const tabsProps = buildProps({
  type: {
    type: definePropType<ITabType>(String),
    default: '',
  },
  activeName: {
    type: String,
    default: '',
  },
  closable: Boolean,
  addable: Boolean,
  modelValue: {
    type: String,
    default: '',
  },
  editable: Boolean,
  tabPosition: {
    type: definePropType<ITabPosition>(String),
    default: 'top',
  },
  beforeLeave: {
    type: definePropType<BeforeLeave>(Function),
  },
  stretch: Boolean,
} as const)
export type TabsProps = ExtractPropTypes<typeof tabsProps>

export const tabsEmits = {
  [UPDATE_MODEL_EVENT]: (tabName: string) => typeof tabName === 'string',

  [INPUT_EVENT]: (tabName: string) => typeof tabName === 'string',

  'tab-click': (tab: Pane, ev: Event) => ev instanceof Event,

  edit: (paneName: string | null, action: 'remove' | 'add') =>
    action === 'remove' || action === 'add',

  'tab-remove': (paneName: string) => typeof paneName === 'string',

  'tab-add': () => true,
}

export type TabsEmits = typeof tabsEmits

export default defineComponent({
  name: 'ElTabs',
  components: { TabNav },
  props: tabsProps,
  emits: tabsEmits,
  setup(props: TabsProps, ctx) {
    const nav$ = ref<typeof TabNav>(null)
    const currentName = ref(props.modelValue || props.activeName || '0')
    const panes: Ref<Pane[]> = ref([])
    const instance = getCurrentInstance()!
    const paneStatesMap = {}

    provide<RootTabs>('rootTabs', {
      props,
      currentName,
    })

    provide<UpdatePaneStateCallback>('updatePaneState', (pane: Pane) => {
      paneStatesMap[pane.uid] = pane
    })

    watch(
      () => props.activeName,
      (modelValue) => {
        setCurrentName(modelValue)
      }
    )

    watch(
      () => props.modelValue,
      (modelValue) => {
        setCurrentName(modelValue)
      }
    )

    watch(currentName, () => {
      nextTick(() => {
        nav$.value &&
          nav$.value.$nextTick(() => {
            nav$.value && nav$.value.scrollToActiveTab()
          })
      })
      setPaneInstances(true)
    })

    const getPaneInstanceFromSlot = (
      vnode: VNode,
      paneInstanceList: ComponentInternalInstance[] = []
    ) => {
      Array.from((vnode.children || []) as ArrayLike<VNode>).forEach((node) => {
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

    const setPaneInstances = (isForceUpdate = false) => {
      if (ctx.slots.default) {
        const children = instance.subTree.children

        const content = Array.from(children as ArrayLike<VNode>).find(
          ({ props }) => {
            return props.class === 'el-tabs__content'
          }
        )

        if (!content) return

        const paneInstanceList: Pane[] = getPaneInstanceFromSlot(content).map(
          (paneComponent) => {
            return paneStatesMap[paneComponent.uid]
          }
        )
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

    const changeCurrentName = (value) => {
      currentName.value = value
      ctx.emit(INPUT_EVENT, value)
      ctx.emit(UPDATE_MODEL_EVENT, value)
    }

    const setCurrentName = (value) => {
      // should do nothing.
      if (currentName.value === value) return

      const beforeLeave = props.beforeLeave
      const before = beforeLeave && beforeLeave(value, currentName.value)
      if (before && isPromise(before)) {
        before.then(
          () => {
            changeCurrentName(value)
            nav$.value.removeFocus?.()
          },
          () => {
            // ignore promise rejection in `before-leave` hook
          }
        )
      } else if (before !== false) {
        changeCurrentName(value)
      }
    }

    const handleTabClick = (tab: Pane, tabName: string, event: Event) => {
      if (tab.props.disabled) return
      setCurrentName(tabName)
      ctx.emit('tab-click', tab, event)
    }

    const handleTabRemove = (pane: Pane, ev: Event) => {
      if (pane.props.disabled) return
      ev.stopPropagation()
      ctx.emit('edit', pane.props.name, 'remove')
      ctx.emit('tab-remove', pane.props.name)
    }

    const handleTabAdd = () => {
      ctx.emit('edit', null, 'add')
      ctx.emit('tab-add')
    }

    onUpdated(() => {
      setPaneInstances()
    })

    onMounted(() => {
      setPaneInstances()
    })

    return {
      nav$,
      handleTabClick,
      handleTabRemove,
      handleTabAdd,
      currentName,
      panes,
    }
  },

  render() {
    const {
      type,
      handleTabClick,
      handleTabRemove,
      handleTabAdd,
      currentName,
      panes,
      editable,
      addable,
      tabPosition,
      stretch,
    } = this

    const newButton =
      editable || addable
        ? h(
            'span',
            {
              class: 'el-tabs__new-tab',
              tabindex: '0',
              onClick: handleTabAdd,
              onKeydown: (ev) => {
                if (ev.code === EVENT_CODE.enter) {
                  handleTabAdd()
                }
              },
            },
            [h(ElIcon, { class: 'is-icon-plus' }, { default: () => h(Plus) })]
          )
        : null

    const header = h(
      'div',
      {
        class: ['el-tabs__header', `is-${tabPosition}`],
      },
      [
        newButton,
        h(TabNav, {
          currentName,
          editable,
          type,
          panes,
          stretch,
          ref: 'nav$',
          onTabClick: handleTabClick,
          onTabRemove: handleTabRemove,
        }),
      ]
    )

    const panels = h(
      'div',
      {
        class: 'el-tabs__content',
      },
      [renderSlot(this.$slots, 'default')]
    )

    return h(
      'div',
      {
        class: {
          'el-tabs': true,
          'el-tabs--card': type === 'card',
          [`el-tabs--${tabPosition}`]: true,
          'el-tabs--border-card': type === 'border-card',
        },
      },
      tabPosition !== 'bottom' ? [header, panels] : [panels, header]
    )
  },
})
