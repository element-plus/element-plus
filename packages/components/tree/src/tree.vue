<template>
  <div
    ref="el$"
    :class="[
      ns.b(),
      ns.is('dragging', !!dragState.draggingNode),
      ns.is('drop-not-allow', !dragState.allowDrop),
      ns.is('drop-inner', dragState.dropType === 'inner'),
      { [ns.m('highlight-current')]: highlightCurrent },
    ]"
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
    <div v-if="isEmpty" :class="ns.e('empty-block')">
      <slot name="empty">
        <span :class="ns.e('empty-text')">
          {{ emptyText ?? t('el.tree.emptyText') }}
        </span>
      </slot>
    </div>
    <div
      v-show="dragState.showDropIndicator"
      ref="dropIndicator$"
      :class="ns.e('drop-indicator')"
    />
  </div>
</template>

<script lang="ts">
import {
  computed,
  defineComponent,
  getCurrentInstance,
  inject,
  provide,
  ref,
  watch,
} from 'vue'
import { definePropType, iconPropType } from '@element-plus/utils'
import { useLocale, useNamespace } from '@element-plus/hooks'
import { formItemContextKey } from '@element-plus/components/form'
import { selectKey } from '@element-plus/components/select/src/token'
import TreeStore from './model/tree-store'
import { getNodeKey as getNodeKeyUtil, handleCurrentChange } from './model/util'
import ElTreeNode from './tree-node.vue'
import { useNodeExpandEventBroadcast } from './model/useNodeExpandEventBroadcast'
import { useDragNodeHandler } from './model/useDragNode'
import { useKeydown } from './model/useKeydown'
import { ROOT_TREE_INJECTION_KEY } from './tokens'
import { isEqual } from 'lodash-unified'

import type Node from './model/node'
import type { ComponentInternalInstance, PropType } from 'vue'
import type { Nullable } from '@element-plus/utils'
import type {
  AllowDragFunction,
  AllowDropFunction,
  FilterValue,
  RenderContentFunction,
  TreeComponentProps,
  TreeData,
  TreeKey,
  TreeNodeData,
} from './tree.type'

export default defineComponent({
  name: 'ElTree',
  components: { ElTreeNode },
  props: {
    data: {
      type: definePropType<TreeData>(Array),
      default: () => [],
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
    checkOnClickLeaf: {
      type: Boolean,
      default: true,
    },
    checkDescendants: Boolean,
    autoExpandParent: {
      type: Boolean,
      default: true,
    },
    defaultCheckedKeys: Array as PropType<
      TreeComponentProps['defaultCheckedKeys']
    >,
    defaultExpandedKeys: Array as PropType<
      TreeComponentProps['defaultExpandedKeys']
    >,
    currentNodeKey: [String, Number] as PropType<string | number>,
    renderContent: {
      type: definePropType<RenderContentFunction>(Function),
    },
    showCheckbox: Boolean,
    draggable: Boolean,
    allowDrag: {
      type: definePropType<AllowDragFunction>(Function),
    },
    allowDrop: {
      type: definePropType<AllowDropFunction>(Function),
    },
    props: {
      type: Object as PropType<TreeComponentProps['props']>,
      default: () => ({
        children: 'children',
        label: 'label',
        disabled: 'disabled',
      }),
    },
    lazy: Boolean,
    highlightCurrent: Boolean,
    load: Function as PropType<TreeComponentProps['load']>,
    filterNodeMethod: Function as PropType<
      TreeComponentProps['filterNodeMethod']
    >,
    accordion: Boolean,
    indent: {
      type: Number,
      default: 18,
    },
    icon: {
      type: iconPropType,
    },
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
  ] as string[],
  setup(props, ctx) {
    const { t } = useLocale()
    const ns = useNamespace('tree')
    const selectInfo = inject(selectKey, null)

    const store = ref<TreeStore>(
      new TreeStore({
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
      })
    )

    store.value.initialize()

    const root = ref<Node>(store.value.root)
    const currentNode = ref<Node | null>(null)
    const el$ = ref<Nullable<HTMLElement>>(null)
    const dropIndicator$ = ref<Nullable<HTMLElement>>(null)

    const { broadcastExpanded } = useNodeExpandEventBroadcast(props)

    const { dragState } = useDragNodeHandler({
      props,
      ctx,
      el$,
      dropIndicator$,
      store,
    })

    useKeydown({ el$ }, store)

    const isEmpty = computed(() => {
      const { childNodes } = root.value
      const hasFilteredOptions = selectInfo
        ? (selectInfo as any).hasFilteredOptions !== 0
        : false
      return (
        (!childNodes ||
          childNodes.length === 0 ||
          childNodes.every(({ visible }) => !visible)) &&
        !hasFilteredOptions
      )
    })

    watch(
      () => props.currentNodeKey,
      (newVal) => {
        store.value.setCurrentNodeKey(newVal ?? null)
      }
    )

    watch(
      () => props.defaultCheckedKeys,
      (newVal, oldVal) => {
        if (isEqual(newVal, oldVal)) return

        store.value.setDefaultCheckedKey(newVal ?? [])
      }
    )

    watch(
      () => props.defaultExpandedKeys,
      (newVal) => {
        store.value.setDefaultExpandedKeys(newVal ?? [])
      }
    )

    watch(
      () => props.data,
      (newVal) => {
        store.value.setData(newVal)
      },
      { deep: true }
    )

    watch(
      () => props.checkStrictly,
      (newVal) => {
        store.value.checkStrictly = newVal
      }
    )

    const filter = (value: FilterValue) => {
      if (!props.filterNodeMethod)
        throw new Error('[Tree] filterNodeMethod is required when filter')
      store.value.filter(value)
    }

    const getNodeKey = (node: Node) => {
      return getNodeKeyUtil(props.nodeKey, node.data)
    }

    const getNodePath = (data: TreeKey | TreeNodeData) => {
      if (!props.nodeKey)
        throw new Error('[Tree] nodeKey is required in getNodePath')
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

    const getCheckedNodes = (
      leafOnly?: boolean,
      includeHalfChecked?: boolean
    ): TreeNodeData[] => {
      return store.value.getCheckedNodes(leafOnly, includeHalfChecked)
    }

    const getCheckedKeys = (leafOnly?: boolean): TreeKey[] => {
      return store.value.getCheckedKeys(leafOnly)
    }

    const getCurrentNode = () => {
      const currentNode = store.value.getCurrentNode()
      return currentNode ? currentNode.data : null
    }

    const getCurrentKey = (): TreeKey | null => {
      if (!props.nodeKey)
        throw new Error('[Tree] nodeKey is required in getCurrentKey')
      const currentNode = getCurrentNode()
      return currentNode ? currentNode[props.nodeKey] : null
    }

    const setCheckedNodes = (nodes: Node[], leafOnly?: boolean) => {
      if (!props.nodeKey)
        throw new Error('[Tree] nodeKey is required in setCheckedNodes')
      store.value.setCheckedNodes(nodes, leafOnly)
    }

    const setCheckedKeys = (keys: TreeKey[], leafOnly?: boolean) => {
      if (!props.nodeKey)
        throw new Error('[Tree] nodeKey is required in setCheckedKeys')
      store.value.setCheckedKeys(keys, leafOnly)
    }

    const setChecked = (
      data: TreeKey | TreeNodeData,
      checked: boolean,
      deep: boolean
    ) => {
      store.value.setChecked(data, checked, deep)
    }

    const getHalfCheckedNodes = (): TreeNodeData[] => {
      return store.value.getHalfCheckedNodes()
    }

    const getHalfCheckedKeys = (): TreeKey[] => {
      return store.value.getHalfCheckedKeys()
    }

    const setCurrentNode = (node: Node, shouldAutoExpandParent = true) => {
      if (!props.nodeKey)
        throw new Error('[Tree] nodeKey is required in setCurrentNode')

      handleCurrentChange(store, ctx.emit, () => {
        broadcastExpanded(node)
        store.value.setUserCurrentNode(node, shouldAutoExpandParent)
      })
    }

    const setCurrentKey = (key?: TreeKey, shouldAutoExpandParent = true) => {
      if (!props.nodeKey)
        throw new Error('[Tree] nodeKey is required in setCurrentKey')

      handleCurrentChange(store, ctx.emit, () => {
        broadcastExpanded()
        store.value.setCurrentNodeKey(key ?? null, shouldAutoExpandParent)
      })
    }

    const getNode = (data: TreeKey | TreeNodeData): Node => {
      return store.value.getNode(data)
    }

    const remove = (data: TreeNodeData | Node) => {
      store.value.remove(data)
    }

    const append = (
      data: TreeNodeData,
      parentNode: TreeNodeData | TreeKey | Node
    ) => {
      store.value.append(data, parentNode)
    }

    const insertBefore = (
      data: TreeNodeData,
      refNode: TreeKey | TreeNodeData | Node
    ) => {
      store.value.insertBefore(data, refNode)
    }

    const insertAfter = (
      data: TreeNodeData,
      refNode: TreeKey | TreeNodeData | Node
    ) => {
      store.value.insertAfter(data, refNode)
    }

    const handleNodeExpand = (
      nodeData: TreeNodeData,
      node: Node,
      instance: ComponentInternalInstance
    ) => {
      broadcastExpanded(node)
      ctx.emit('node-expand', nodeData, node, instance)
    }

    const updateKeyChildren = (key: TreeKey, data: TreeData) => {
      if (!props.nodeKey)
        throw new Error('[Tree] nodeKey is required in updateKeyChild')
      store.value.updateChildren(key, data)
    }

    provide(ROOT_TREE_INJECTION_KEY, {
      ctx,
      props,
      store,
      root,
      currentNode,
      instance: getCurrentInstance(),
    })

    provide(formItemContextKey, undefined)

    return {
      ns,
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
