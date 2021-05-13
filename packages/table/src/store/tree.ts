import { walkTreeNode, getRowIdentity } from '../util'
import { ref, computed, watch, getCurrentInstance, unref } from 'vue'
import { WatcherPropsData } from './index'
import { Table, TableProps } from '../table/defaults'

function useTree<T>(watcherData: WatcherPropsData<T>) {
  const expandRowKeys = ref<string[]>([])
  const treeData = ref<unknown>({})
  const indent = ref(16)
  const lazy = ref(false)
  const lazyTreeNodeMap = ref({})
  const lazyColumnIdentifier = ref('hasChildren')
  const childrenColumnName = ref('children')
  const instance = getCurrentInstance() as Table<T>
  const normalizedData = computed(() => {
    if (!watcherData.rowKey.value) return {}
    const data = watcherData.data.value || []
    return normalize(data)
  })
  const normalizedLazyNode = computed(() => {
    const rowKey = watcherData.rowKey.value
    const keys = Object.keys(lazyTreeNodeMap.value)
    const res = {}
    if (!keys.length) return res
    keys.forEach(key => {
      if (lazyTreeNodeMap.value[key].length) {
        const item = { children: [] }
        lazyTreeNodeMap.value[key].forEach(row => {
          const currentRowKey = getRowIdentity(row, rowKey)
          item.children.push(currentRowKey)
          if (row[lazyColumnIdentifier.value] && !res[currentRowKey]) {
            res[currentRowKey] = { children: [] }
          }
        })
        res[key] = item
      }
    })
    return res
  })

  const normalize = data => {
    const rowKey = watcherData.rowKey.value
    const res = {}
    walkTreeNode(
      data,
      (parent, children, level) => {
        const parentId = getRowIdentity(parent, rowKey)
        if (Array.isArray(children)) {
          res[parentId] = {
            children: children.map(row => getRowIdentity(row, rowKey)),
            level,
          }
        } else if (lazy.value) {
          // 当 children 不存在且 lazy 为 true，该节点即为懒加载的节点
          res[parentId] = {
            children: [],
            lazy: true,
            level,
          }
        }
      },
      childrenColumnName.value,
      lazyColumnIdentifier.value,
    )
    return res
  }

  const updateTreeData = () => {
    const nested = normalizedData.value
    const normalizedLazyNode_ = normalizedLazyNode.value
    const keys = Object.keys(nested)
    const newTreeData = {}
    if (keys.length) {
      const oldTreeData = unref(treeData)
      const defaultExpandAll = instance.store?.states.defaultExpandAll.value
      const rootLazyRowKeys = []
      const getExpanded = (oldValue, key) => {
        const included =
          defaultExpandAll ||
          (expandRowKeys.value && expandRowKeys.value.indexOf(key) !== -1)
        return !!((oldValue && oldValue.expanded) || included)
      }
      // 合并 expanded 与 display，确保数据刷新后，状态不变
      keys.forEach(key => {
        const oldValue = oldTreeData[key]
        const newValue = { ...nested[key] }
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
        lazyKeys.forEach(key => {
          const oldValue = oldTreeData[key]
          const lazyNodeChildren = normalizedLazyNode_[key].children
          if (rootLazyRowKeys.indexOf(key) !== -1) {
            // 懒加载的 root 节点，更新一下原有的数据，原来的 children 一定是空数组
            if (newTreeData[key].children.length !== 0) {
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
              level: '',
            }
          }
        })
      }
    }
    treeData.value = newTreeData
    instance.store?.updateTableScrollY()
  }

  watch(() => normalizedData.value, updateTreeData)
  watch(() => normalizedLazyNode.value, updateTreeData)

  const updateTreeExpandKeys = (value: string[]) => {
    expandRowKeys.value = value
    updateTreeData()
  }

  const toggleTreeExpansion = (row: T, expanded?: boolean) => {
    instance.store.assertRowKey()

    const rowKey = watcherData.rowKey.value
    const id = getRowIdentity(row, rowKey)
    const data = id && treeData.value[id]
    if (id && data && 'expanded' in data) {
      const oldExpanded = data.expanded
      expanded = typeof expanded === 'undefined' ? !data.expanded : expanded
      treeData.value[id].expanded = expanded
      if (oldExpanded !== expanded) {
        instance.emit('expand-change', row, expanded)
      }
      instance.store.updateTableScrollY()
    }
  }

  const loadOrToggle = row => {
    instance.store.assertRowKey()
    const rowKey = watcherData.rowKey.value
    const id = getRowIdentity(row, rowKey)
    const data = treeData.value[id]
    if (lazy.value && data && 'loaded' in data && !data.loaded) {
      loadData(row, id, data)
    } else {
      toggleTreeExpansion(row, undefined)
    }
  }

  const loadData = (row: T, key: string, treeNode) => {
    const { load } = (instance.props as unknown) as TableProps<T>
    if (load && !treeData.value[key].loaded) {
      treeData.value[key].loading = true
      load(row, treeNode, data => {
        if (!Array.isArray(data)) {
          throw new Error('[ElTable] data must be an array')
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

  return {
    loadData,
    loadOrToggle,
    toggleTreeExpansion,
    updateTreeExpandKeys,
    updateTreeData,
    normalize,
    states: {
      expandRowKeys,
      treeData,
      indent,
      lazy,
      lazyTreeNodeMap,
      lazyColumnIdentifier,
      childrenColumnName,
    },
  }
}

export default useTree
