<template>
  <div
    ref="el$"
    class="el-tree"
    :class="{
      'el-tree--highlight-current': highlightCurrent,
      'is-dragging': !!dragState.draggingNode,
      'is-drop-not-allow': !dragState.allowDrop,
      'is-drop-inner': dragState.dropType === 'inner'
    }"
    role="tree"
  >
    <el-tree-node
      v-for="child in root.childNodes"
      :key="getNodeKey(child)"
      :node="child"
      :props="props"
      :accordion="accordion"
      :render-after-expand="renderAfterExpand"
      :show-checkbox="showCheckbox"
      :render-content="renderContent"
      @node-expand="handleNodeExpand"
    />
    <div v-if="isEmpty" class="el-tree__empty-block">
      <span class="el-tree__empty-text">{{ emptyText || t('el.tree.emptyText') }}</span>
    </div>
    <div
      v-show="dragState.showDropIndicator"
      ref="dropIndicator$"
      class="el-tree__drop-indicator"
    >
    </div>
  </div>
</template>
<script lang='ts'>
import { defineComponent, ref, provide, computed, watch, PropType, getCurrentInstance, ComponentInternalInstance } from 'vue'
import TreeStore from './model/tree-store'
import { getNodeKey as getNodeKeyUtil } from './model/util'
import ElTreeNode from './tree-node.vue'
import { useNodeExpandEventBroadcast } from './model/useNodeExpandEventBroadcast'
import { useDragNodeHandler } from './model/useDragNode'
import { useKeydown } from './model/useKeydown'
import Node from './model/node'
import { useLocaleInject } from '@element-plus/hooks'
import {
  TreeComponentProps,
  TreeNodeData,
  TreeKey,
  TreeData,
  RootTreeType,
} from './tree.type'

type Nullable<T> = null | T

export default defineComponent({
  name: 'ElTree',
  components: { ElTreeNode },
  props: {
    data: {
      type: Array,
    },
    emptyText: {
      type: String,
    },
    renderAfterExpand: {
      type: Boolean,
      default: true,
    },
    nodeKey: String,
    checkStrictly: Boolean,
    defaultExpandAll: Boolean,
    expandOnClickNode: {
      type: Boolean,
      default: true,
    },
    checkOnClickNode: Boolean,
    checkDescendants: {
      type: Boolean,
      default: false,
    },
    autoExpandParent: {
      type: Boolean,
      default: true,
    },
    defaultCheckedKeys: Array,
    defaultExpandedKeys: Array,
    currentNodeKey: [String, Number] as PropType<string | number>,
    renderContent: Function,
    showCheckbox: {
      type: Boolean,
      default: false,
    },
    draggable: {
      type: Boolean,
      default: false,
    },
    allowDrag: Function,
    allowDrop: Function,
    props: {
      type: Object,
      default() {
        return {
          children: 'children',
          label: 'label',
          disabled: 'disabled',
        }
      },
    },
    lazy: {
      type: Boolean,
      default: false,
    },
    highlightCurrent: Boolean,
    load: Function,
    filterNodeMethod: Function,
    accordion: Boolean,
    indent: {
      type: Number,
      default: 18,
    },
    iconClass: String,
  },
  emits: [
    'check-change',
    'current-change',
    'node-click',
    'node-contextmenu',
    'node-collapse',
    'node-expand',
    'check',
    'node-drag-start',
    'node-drag-end',
    'node-drop',
    'node-drag-leave',
    'node-drag-enter',
    'node-drag-over',
  ],
  setup(props: TreeComponentProps, ctx) {
    const { t } = useLocaleInject()

    const store = ref<TreeStore>(new TreeStore({
      key: props.nodeKey,
      data: props.data,
      lazy: props.lazy,
      props: props.props,
      load: props.load,
      currentNodeKey: props.currentNodeKey,
      checkStrictly: props.checkStrictly,
      checkDescendants: props.checkDescendants,
      defaultCheckedKeys: props.defaultCheckedKeys,
      defaultExpandedKeys: props.defaultExpandedKeys,
      autoExpandParent: props.autoExpandParent,
      defaultExpandAll: props.defaultExpandAll,
      filterNodeMethod: props.filterNodeMethod,
    }))

    store.value.initialize()

    const root = ref<Node>(store.value.root)
    const currentNode = ref<Node>(null)
    const el$ = ref<Nullable<HTMLElement>>(null)
    const dropIndicator$ = ref<Nullable<HTMLElement>>(null)

    const { broadcastExpanded } = useNodeExpandEventBroadcast(props)

    const { dragState } = useDragNodeHandler({
      props, ctx, el$, dropIndicator$, store,
    })

    useKeydown({ el$ }, store)

    const isEmpty = computed(() => {
      const { childNodes } = root.value
      return !childNodes || childNodes.length === 0 || childNodes.every(({ visible }) => !visible)
    })

    watch(() => props.defaultCheckedKeys, newVal => {
      store.value.setDefaultCheckedKey(newVal)
    })

    watch(() => props.defaultExpandedKeys, newVal => {
      store.value.defaultExpandedKeys = newVal
      store.value.setDefaultExpandedKeys(newVal)
    })

    watch(() => props.data, newVal => {
      store.value.setData(newVal)
    }, { deep: true })

    watch(() => props.checkStrictly, newVal => {
      store.value.checkStrictly = newVal
    })

    const filter = value => {
      if (!props.filterNodeMethod) throw new Error('[Tree] filterNodeMethod is required when filter')
      store.value.filter(value)
    }

    const getNodeKey = (node: Node) => {
      return getNodeKeyUtil(props.nodeKey, node.data)
    }

    const getNodePath = (data: TreeKey | TreeNodeData) => {
      if (!props.nodeKey) throw new Error('[Tree] nodeKey is required in getNodePath')
      const node = store.value.getNode(data)
      if (!node) return []
      const path = [node.data]
      let parent = node.parent
      while (parent && parent !== root.value) {
        path.push(parent.data)
        parent = parent.parent
      }
      return path.reverse()
    }

    const getCheckedNodes = (leafOnly: boolean, includeHalfChecked: boolean): TreeNodeData[] => {
      return store.value.getCheckedNodes(leafOnly, includeHalfChecked)
    }

    const getCheckedKeys = (leafOnly: boolean): TreeKey[] => {
      return store.value.getCheckedKeys(leafOnly)
    }

    const getCurrentNode = (): TreeNodeData => {
      const currentNode = store.value.getCurrentNode()
      return currentNode ? currentNode.data : null
    }

    const getCurrentKey = (): any => {
      if (!props.nodeKey) throw new Error('[Tree] nodeKey is required in getCurrentKey')
      const currentNode = getCurrentNode()
      return currentNode ? currentNode[props.nodeKey] : null
    }

    const setCheckedNodes = (nodes: Node[], leafOnly: boolean) => {
      if (!props.nodeKey) throw new Error('[Tree] nodeKey is required in setCheckedNodes')
      store.value.setCheckedNodes(nodes, leafOnly)
    }

    const setCheckedKeys = (keys, leafOnly: boolean) => {
      if (!props.nodeKey) throw new Error('[Tree] nodeKey is required in setCheckedKeys')
      store.value.setCheckedKeys(keys, leafOnly)
    }

    const setChecked = (data: TreeKey | TreeNodeData, checked: boolean, deep: boolean) => {
      store.value.setChecked(data, checked, deep)
    }

    const getHalfCheckedNodes = (): TreeNodeData[] => {
      return store.value.getHalfCheckedNodes()
    }

    const getHalfCheckedKeys = (): TreeKey[] => {
      return store.value.getHalfCheckedKeys()
    }

    const setCurrentNode = (node: Node, shouldAutoExpandParent = true) => {
      if (!props.nodeKey) throw new Error('[Tree] nodeKey is required in setCurrentNode')
      store.value.setUserCurrentNode(node, shouldAutoExpandParent)
    }

    const setCurrentKey = (key: TreeKey, shouldAutoExpandParent = true) => {
      if (!props.nodeKey) throw new Error('[Tree] nodeKey is required in setCurrentKey')
      store.value.setCurrentNodeKey(key, shouldAutoExpandParent)
    }

    const getNode = (data: TreeKey | TreeNodeData): Node => {
      return store.value.getNode(data)
    }

    const remove = (data: TreeNodeData | Node) => {
      store.value.remove(data)
    }

    const append = (data: TreeNodeData, parentNode: TreeNodeData | TreeKey | Node) => {
      store.value.append(data, parentNode)
    }

    const insertBefore = (data: TreeNodeData, refNode: TreeKey | TreeNodeData) => {
      store.value.insertBefore(data, refNode)
    }

    const insertAfter = (data: TreeNodeData, refNode: TreeKey | TreeNodeData) => {
      store.value.insertAfter(data, refNode)
    }

    const handleNodeExpand = (nodeData: TreeNodeData, node: Node, instance: ComponentInternalInstance) => {
      broadcastExpanded(node)
      ctx.emit('node-expand', nodeData, node, instance)
    }

    const updateKeyChildren = (key: TreeKey, data: TreeData) => {
      if (!props.nodeKey) throw new Error('[Tree] nodeKey is required in updateKeyChild')
      store.value.updateChildren(key, data)
    }

    provide('RootTree', {
      ctx,
      props,
      store,
      root,
      currentNode,
      instance: getCurrentInstance(),
    } as RootTreeType)

    return {
      // ref
      store,
      root,
      currentNode,
      dragState,
      el$,
      dropIndicator$,

      // computed
      isEmpty,

      // methods
      filter,
      getNodeKey,
      getNodePath,
      getCheckedNodes,
      getCheckedKeys,
      getCurrentNode,
      getCurrentKey,
      setCheckedNodes,
      setCheckedKeys,
      setChecked,
      getHalfCheckedNodes,
      getHalfCheckedKeys,
      setCurrentNode,
      setCurrentKey,
      t,
      getNode,
      remove,
      append,
      insertBefore,
      insertAfter,
      handleNodeExpand,
      updateKeyChildren,
    }
  },
})
</script>
