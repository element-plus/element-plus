<script lang='ts'>
import { h, defineComponent, ref, onMounted, onUpdated, provide, watch, nextTick, getCurrentInstance, ComponentInternalInstance } from 'vue'
import { Fragment } from '@vue/runtime-core'
import TabNav from './tab-nav.vue'

type RefElement = Nullable<HTMLElement>

export default defineComponent({
  name: 'ElTabs',
  components: { TabNav },
  props: {
    type: {
      type: String,
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
      type: String,
      default: 'top',
    },
    beforeLeave: {
      type: Function,
      default: null,
    },
    stretch: Boolean,
  },
  emits: ['tab-click', 'edit', 'tab-remove', 'tab-add', 'input', 'update:modelValue'],
  setup(props, ctx) {
    const nav$ = ref<RefElement>(null)
    const currentName = ref(props.modelValue || props.activeName || '0')
    const panes = ref<ComponentInternalInstance[]>([])
    const instance = getCurrentInstance()

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

    const getPaneInstanceFromSlot = (vnode, paneInstanceList = []) => {
      [...(vnode.children || [])].forEach(node => {
        let type = node.type
        type = type.name || type
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

        const content = [...children].find(({ props }) => {
          return props.class === 'el-tabs__content'
        })

        if(!content) return

        const paneInstanceList = getPaneInstanceFromSlot(content)
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
      if(currentName.value !== value && props.beforeLeave) {
        const before = props.beforeLeave(value, currentName.value)
        if(before && before.then) {
          before.then(() => {
            changeCurrentName(value)
            nav$.value && nav$.value.removeFocus()
          }, () => {
            // ignore promise rejection in `before-leave` hook
          })
        } else if(before !== false) {
          changeCurrentName(value)
        }
      } else {
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

    provide('rootTabs', getCurrentInstance())

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
        onKeydown: ev => { if (ev.keyCode === 13) { handleTabAdd() }},
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
<style scoped>
</style>
