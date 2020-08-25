import { walkTreeNode, getRowIdentity } from '../util'
import { reactive, computed, watch, getCurrentInstance } from 'vue'

function useTree (watcherData: any) {
  const that = reactive({
    states: {
      expandRowKeys: [],
      treeData: {},
      indent: 16,
      lazy: false,
      lazyTreeNodeMap: {},
      lazyColumnIdentifier: 'hasChildren',
      childrenColumnName: 'children',
    },
  })
  const instance = getCurrentInstance() as any
  const normalizedData = computed(() => {
    if (!watcherData.states.rowKey) return {}
    const data = watcherData.states.data || []
    return normalize(data)
  })
  const normalizedLazyNode = computed(() => {
    const { rowKey } = watcherData.states
    const { lazyTreeNodeMap, lazyColumnIdentifier } = that.states
    const keys = Object.keys(lazyTreeNodeMap)
    const res = {}
    if (!keys.length) return res
    keys.forEach(key => {
      if (lazyTreeNodeMap[key].length) {
        const item = { children: [] }
        lazyTreeNodeMap[key].forEach(row => {
          const currentRowKey = getRowIdentity(row, rowKey)
          item.children.push(currentRowKey)
          if (row[lazyColumnIdentifier] && !res[currentRowKey]) {
            res[currentRowKey] = { children: [] }
          }
        })
        res[key] = item
      }
    })
    return res
  })

  const normalize = data => {
    const {
      childrenColumnName,
      lazyColumnIdentifier,
      lazy,
    } = that.states
    const {
      rowKey,
    } = watcherData
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
        } else if (lazy) {
          // 当 children 不存在且 lazy 为 true，该节点即为懒加载的节点
          res[parentId] = {
            children: [],
            lazy: true,
            level,
          }
        }
      },
      childrenColumnName,
      lazyColumnIdentifier,
    )
    return res
  }

  const updateTreeData = () => {
    const nested = normalizedData.value
    const normalizedLazyNode_ = normalizedLazyNode.value
    const keys = Object.keys(nested)
    const newTreeData = {}
    if (keys.length) {
      const {
        treeData: oldTreeData,
        expandRowKeys,
        lazy,
      } = that.states
      const {
        defaultExpandAll,
      } = instance
      const rootLazyRowKeys = []
      const getExpanded = (oldValue, key) => {
        const included =
          defaultExpandAll ||
          (expandRowKeys && expandRowKeys.indexOf(key) !== -1)
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
      if (lazy && lazyKeys.length && rootLazyRowKeys.length) {
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
    that.states.treeData = newTreeData
    instance.updateTableScrollY()
  }

  watch(() => normalizedData.value, updateTreeData)
  watch(() => normalizedLazyNode.value, updateTreeData)

  const updateTreeExpandKeys = value => {
    that.states.expandRowKeys = value
    updateTreeData()
  }

  const toggleTreeExpansion = (row, expanded) => {
    instance.assertRowKey()

    const { treeData } = that.states
    const { rowKey } = watcherData.states
    const id = getRowIdentity(row, rowKey)
    const data = id && treeData[id]
    if (id && data && ('expanded' in data)) {
      const oldExpanded = data.expanded
      expanded = typeof expanded === 'undefined' ? !data.expanded : expanded
      treeData[id].expanded = expanded
      if (oldExpanded !== expanded) {
        instance.table.$emit('expand-change', row, expanded)
      }
      instance.updateTableScrollY()
    }
  }

  const loadOrToggle = row => {
    instance.assertRowKey()
    const { lazy, treeData } = that.states
    const { rowKey } = watcherData.states
    const id = getRowIdentity(row, rowKey)
    const data = treeData[id]
    if (lazy && data && 'loaded' in data && !data.loaded) {
      loadData(row, id, data)
    } else {
      toggleTreeExpansion(row, undefined)
    }
  }

  const loadData = (row, key, treeNode) => {
    const { load } = instance.table
    const { lazyTreeNodeMap, treeData } = that.states
    if (load && !treeData[key].loaded) {
      treeData[key].loading = true
      load(row, treeNode, data => {
        if (!Array.isArray(data)) {
          throw new Error('[ElTable] data must be an array')
        }
        treeData[key].loading = false
        treeData[key].loaded = true
        treeData[key].expanded = true
        if (data.length) {
          instance.$set(lazyTreeNodeMap, key, data)
        }
        instance.table.$emit('expand-change', row, true)
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
  }
}

export default useTree
