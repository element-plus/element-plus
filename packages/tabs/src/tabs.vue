<script lang='ts'>
import { h, defineComponent, ref, onMounted, onUpdated, provide, watch, nextTick, getCurrentInstance, ComputedRef, PropType, Ref, ComponentInternalInstance, VNode, Component, Fragment } from 'vue'
import { isPromise } from '@vue/shared'
import { EVENT_CODE } from '@element-plus/utils/aria'
import TabNav from './tab-nav.vue'

type BeforeLeave = (newTabName: string, oldTabName: string) => void | Promise<void> | boolean

export type ITabType = 'card' | 'border-card' | ''
type ITabPosition = 'top' | 'right' | 'bottom' | 'left'

export interface IETabsProps {
  type: ITabType
  activeName: string
  closable: boolean
  addable: boolean
  modelValue: string
  editable: boolean
  tabPosition: ITabPosition
  beforeLeave: BeforeLeave
  stretch: boolean
}

export interface RootTabs {
  props: IETabsProps
  currentName: Ref<string>
}

export interface IEPaneProps {
  label: string
  name: string
  closable: boolean
  disabled: boolean
  lazy: boolean
}

export interface Pane {
  uid: number
  instance: ComponentInternalInstance
  props: IEPaneProps
  paneName: ComputedRef<string>
  active: ComputedRef<boolean>
  index: Ref<string>
  isClosable: ComputedRef<boolean>
}

export type UpdatePaneStateCallback = (pane: Pane) => void

export default defineComponent({
  name: 'ElTabs',
  components: { TabNav },
  props: {
    type: {
      type: String as PropType<ITabType>,
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
      type: String as PropType<ITabPosition>,
      default: 'top',
    },
    beforeLeave: {
      type: Function as PropType<BeforeLeave>,
      default: null,
    },
    stretch: Boolean,
  },
  emits: ['tab-click', 'edit', 'tab-remove', 'tab-add', 'input', 'update:modelValue'],
  setup(props: IETabsProps, ctx) {
    const nav$ = ref<typeof TabNav>(null)
    const currentName = ref(props.modelValue || props.activeName || '0')
    const panes = ref([])
    const instance = getCurrentInstance()
    const paneStatesMap = {}

    provide<RootTabs>('rootTabs', {
      props,
      currentName,
    })

    provide<UpdatePaneStateCallback>('updatePaneState', (pane: Pane) => {
      paneStatesMap[pane.uid] = pane
    })

    watch(() => props.activeName, modelValue => {
      setCurrentName(modelValue)
    })

    watch(() => props.modelValue, modelValue => {
      setCurrentName(modelValue)
    })

    watch(currentName, () => {
      if (nav$.value) {
        nextTick(() => {
          nav$.value.$nextTick(() => {
            nav$.value.scrollToActiveTab()
          })
        })
      }
      setPaneInstances(true)
    })

    const getPaneInstanceFromSlot = (vnode: VNode, paneInstanceList: ComponentInternalInstance[] = []) => {

      Array.from((vnode.children || []) as ArrayLike<VNode>).forEach(node => {
        let type = node.type
        type = (type as Component).name || type
        if (type === 'ElTabPane' && node.component) {
          paneInstanceList.push(node.component)
        } else if(type === Fragment || type === 'template') {
          getPaneInstanceFromSlot(node, paneInstanceList)
        }
      })
      return paneInstanceList
    }

    const setPaneInstances = (isForceUpdate = false) => {
      if(ctx.slots.default) {
        const children = instance.subTree.children

        const content = Array.from(children as ArrayLike<VNode>).find(({ props }) => {
          return props.class === 'el-tabs__content'
        })

        if(!content) return

        const paneInstanceList: Pane[] = getPaneInstanceFromSlot(content).map(paneComponent => {
          return paneStatesMap[paneComponent.uid]
        })
        const panesChanged = !(paneInstanceList.length === panes.value.length && paneInstanceList.every((pane, index) => pane.uid === panes.value[index].uid))

        if (isForceUpdate || panesChanged) {
          panes.value = paneInstanceList
        }
      } else if (panes.value.length !== 0) {
        panes.value = []
      }
    }

    const changeCurrentName = value => {
      currentName.value = value
      ctx.emit('input', value)
      ctx.emit('update:modelValue', value)
    }

    const setCurrentName = value => {
      // should do nothing.
      if (currentName.value === value) return

      const beforeLeave = props.beforeLeave
      const before = beforeLeave && beforeLeave(value, currentName.value)
      if (before && isPromise(before)) {
        before.then(() => {
          changeCurrentName(value)
          nav$.value.removeFocus?.()
        }, () => {
          // ignore promise rejection in `before-leave` hook
        })
      } else if (before !== false) {
        changeCurrentName(value)
      }
    }

    const handleTabClick = (tab, tabName, event) => {
      if(tab.props.disabled) return
      setCurrentName(tabName)
      ctx.emit('tab-click', tab, event)
    }

    const handleTabRemove = (pane, ev) => {
      if(pane.props.disabled) return
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

  render(){
    let {
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

    const newButton = editable || addable ? h(
      'span',
      {
        class: 'el-tabs__new-tab',
        tabindex: '0',
        onClick: handleTabAdd,
        onKeydown: ev => { if (ev.code === EVENT_CODE.enter) { handleTabAdd() }},
      },
      [h('i', { class: 'el-icon-plus' })],
    ) : null

    const header = h(
      'div',
      {
        class: ['el-tabs__header', `is-${tabPosition}`],
      },
      [
        newButton,
        h(
          TabNav,
          {
            currentName,
            editable,
            type,
            panes,
            stretch,
            ref: 'nav$',
            onTabClick: handleTabClick,
            onTabRemove: handleTabRemove,
          },
        ),
      ],
    )

    const panels = h(
      'div',
      {
        class: 'el-tabs__content',
      },
      this.$slots?.default(),
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
      tabPosition !== 'bottom' ? [header, panels] : [panels, header],
    )
  },
})
</script>
