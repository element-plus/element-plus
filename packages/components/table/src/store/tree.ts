import { computed, getCurrentInstance, ref, unref, watch } from 'vue'
import { isArray, isUndefined } from '@element-plus/utils'
import { getRowIdentity, walkTreeNode } from '../util'

import type { WatcherPropsData } from '.'
import type { DefaultRow, Table, TableProps, TreeNode } from '../table/defaults'

export interface TreeData extends TreeNode {
  children?: string[]
  lazy?: boolean
  loaded?: boolean
}

function useTree<T extends DefaultRow>(watcherData: WatcherPropsData<T>) {
  const expandRowKeys = ref<Array<string | number>>([])
  const treeData = ref<Record<string, TreeData>>({})
  const indent = ref(16)
  const lazy = ref(false)
  const lazyTreeNodeMap = ref<Record<string, T[]>>({})
  const lazyColumnIdentifier = ref('hasChildren')
  const childrenColumnName = ref('children')
  const checkStrictly = ref(false)
  const instance = getCurrentInstance() as Table<T>
  const normalizedData = computed(() => {
    if (!watcherData.rowKey.value) return {}
    const data = watcherData.data.value || []
    return normalize(data)
  })
  const normalizedLazyNode = computed(() => {
    const rowKey = watcherData.rowKey.value
    const keys = Object.keys(lazyTreeNodeMap.value)
    const res: Record<string, { children: string[] }> = {}
    if (!keys.length) return res
    keys.forEach((key) => {
      if (lazyTreeNodeMap.value[key].length) {
        const item: typeof res[number] = { children: [] }
        lazyTreeNodeMap.value[key].forEach((row) => {
          const currentRowKey = getRowIdentity(row, rowKey)
          if (currentRowKey) {
            item.children.push(currentRowKey)
            if (row[lazyColumnIdentifier.value] && !res[currentRowKey]) {
              res[currentRowKey] = { children: [] }
            }
          }
        })
        res[key] = item
      }
    })
    return res
  })

  const normalize = (data: T[]) => {
    const rowKey = watcherData.rowKey.value
    const res = new Map<string | number, TreeData>() // 使用 Map 替代 Object，解决 number key 的问题
    walkTreeNode(
      data,
      (parent, children, level) => {
        const parentId = getRowIdentity(parent, rowKey, true)
        if (isArray(children)) {
          res.set(parentId, {
            children: children.map((row) => row[rowKey!]),
            level,
          })
        } else if (lazy.value) {
          // 当 children 不存在且 lazy 为 true，该节点即为懒加载的节点
          res.set(parentId, {
            children: [],
            lazy: true,
            level,
          })
        }
      },
      childrenColumnName.value,
      lazyColumnIdentifier.value,
      lazy.value
    )
    return res
  }

  const updateTreeData = (
    ifChangeExpandRowKeys = false,
    ifExpandAll?: boolean
  ) => {
    ifExpandAll ||= instance.store?.states.defaultExpandAll.value
    const nested = normalizedData.value
    const normalizedLazyNode_ = normalizedLazyNode.value
    const newTreeData: Record<string, TreeData> = {}
    if (nested instanceof Map && nested.size) {
      const oldTreeData = unref(treeData)
      const rootLazyRowKeys: string[] = []
      const getExpanded = (oldValue: TreeData, key: string) => {
        if (ifChangeExpandRowKeys) {
          if (expandRowKeys.value) {
            return ifExpandAll || expandRowKeys.value.includes(key)
          } else {
            return !!(ifExpandAll || oldValue?.expanded)
          }
        } else {
          const included =
            ifExpandAll ||
            (expandRowKeys.value && expandRowKeys.value.includes(key))
          return !!(oldValue?.expanded || included)
        }
      }
      // 合并 expanded 与 display，确保数据刷新后，状态不变
      nested.forEach((_, key) => {
        const oldValue = oldTreeData[key]
        const newValue = { ...nested.get(key) }
        newValue.expanded = getExpanded(oldValue, key)
        if (newValue.lazy) {
          const { loaded = false, loading = false } = oldValue || {}
          newValue.loaded = !!loaded
          newValue.loading = !!loading
          rootLazyRowKeys.push(key)
        }
        newTreeData[key] = newValue
      })
      // 根据懒加载数据更新 treeData
      const lazyKeys = Object.keys(normalizedLazyNode_)
      if (lazy.value && lazyKeys.length && rootLazyRowKeys.length) {
        lazyKeys.forEach((key) => {
          const oldValue = oldTreeData[key]
          const lazyNodeChildren = normalizedLazyNode_[key].children
          if (rootLazyRowKeys.includes(key)) {
            // 懒加载的 root 节点，更新一下原有的数据，原来的 children 一定是空数组
            if (newTreeData[key].children?.length !== 0) {
              throw new Error('[ElTable]children must be an empty array.')
            }
            newTreeData[key].children = lazyNodeChildren
          } else {
            const { loaded = false, loading = false } = oldValue || {}
            newTreeData[key] = {
              lazy: true,
              loaded: !!loaded,
              loading: !!loading,
              expanded: getExpanded(oldValue, key),
              children: lazyNodeChildren,
              level: undefined,
            }
          }
        })
      }
    }
    treeData.value = newTreeData
    instance.store?.updateTableScrollY()
  }

  watch(
    () => expandRowKeys.value,
    () => {
      updateTreeData(true)
    }
  )

  watch(
    () => normalizedData.value,
    () => {
      updateTreeData()
    }
  )
  watch(
    () => normalizedLazyNode.value,
    () => {
      updateTreeData()
    }
  )

  const updateTreeExpandKeys = (value: (string | number)[]) => {
    expandRowKeys.value = value
    updateTreeData()
  }
  const isUseLazy = (data: TreeData) => {
    return lazy.value && data && 'loaded' in data && !data.loaded
  }
  const toggleTreeExpansion = (row: T, expanded?: boolean) => {
    instance.store.assertRowKey()

    const rowKey = watcherData.rowKey.value
    const id = getRowIdentity(row, rowKey)
    const data = id && treeData.value[id]
    if (id && data && 'expanded' in data) {
      const oldExpanded = data.expanded
      expanded = isUndefined(expanded) ? !data.expanded : expanded
      treeData.value[id].expanded = expanded
      if (oldExpanded !== expanded) {
        instance.emit('expand-change', row, expanded)
      }
      isUseLazy(data) && loadData(row, id, data)
      instance.store.updateTableScrollY()
    }
  }

  const loadOrToggle = (row: T) => {
    instance.store.assertRowKey()
    const rowKey = watcherData.rowKey.value
    const id = getRowIdentity(row, rowKey)
    const data = treeData.value[id]
    if (isUseLazy(data)) {
      loadData(row, id, data)
    } else {
      toggleTreeExpansion(row, undefined)
    }
  }

  const loadData = (row: T, key: string, treeNode: TreeNode) => {
    const { load } = instance.props as unknown as TableProps<T>
    if (load && !treeData.value[key].loaded) {
      treeData.value[key].loading = true
      load(row, treeNode, (data) => {
        if (!isArray(data)) {
          throw new TypeError('[ElTable] data must be an array')
        }
        treeData.value[key].loading = false
        treeData.value[key].loaded = true
        treeData.value[key].expanded = true
        if (data.length) {
          lazyTreeNodeMap.value[key] = data
        }
        instance.emit('expand-change', row, true)
      })
    }
  }

  const updateKeyChildren = (key: string, data: T[]) => {
    const { lazy, rowKey } = instance.props as unknown as TableProps<T>
    if (!lazy) return
    if (!rowKey) throw new Error('[Table] rowKey is required in updateKeyChild')

    if (lazyTreeNodeMap.value[key]) {
      lazyTreeNodeMap.value[key] = data
    }
  }

  return {
    loadData,
    loadOrToggle,
    toggleTreeExpansion,
    updateTreeExpandKeys,
    updateTreeData,
    updateKeyChildren,
    normalize,
    states: {
      expandRowKeys,
      treeData,
      indent,
      lazy,
      lazyTreeNodeMap,
      lazyColumnIdentifier,
      childrenColumnName,
      checkStrictly,
    },
  }
}

export default useTree
