import { mount } from '@vue/test-utils'
import { nextTick } from 'vue'
import Tree from '../src/tree.vue'
import { sleep, defineGetter } from '@element-plus/test-utils'

const ALL_NODE_COUNT = 9

const getTreeVm = (props = '', options = {}) => {
  const wrapper = mount(Object.assign({
    components: {
      'el-tree': Tree,
    },
    template: `
      <el-tree ref="tree" :data="data" ${ props }></el-tree>
    `,
    data() {
      return {
        currentNode: null,
        nodeExpended: false,
        defaultExpandedKeys: [],
        defaultCheckedKeys: [],
        clickedNode: null,
        count: 1,
        data: [{
          id: 1,
          label: '一级 1',
          children: [{
            id: 11,
            label: '二级 1-1',
            children: [{
              id: 111,
              label: '三级 1-1',
            }],
          }],
        }, {
          id: 2,
          label: '一级 2',
          children: [{
            id: 21,
            label: '二级 2-1',
          }, {
            id: 22,
            label: '二级 2-2',
          }],
        }, {
          id: 3,
          label: '一级 3',
          children: [{
            id: 31,
            label: '二级 3-1',
          }, {
            id: 32,
            label: '二级 3-2',
          }],
        }],
        defaultProps: {
          children: 'children',
          label: 'label',
        },
      }
    },
  }, options))
  return { wrapper, vm: wrapper.vm }
}

const getDisableTreeVm = (props = '', options = {}) => {
  const wrapper = mount(Object.assign({
    components: {
      'el-tree': Tree,
    },
    template: `
      <el-tree ref="tree" :data="data" ${ props }></el-tree>
    `,
    data() {
      return {
        defaultExpandedKeys: [],
        defaultCheckedKeys: [],
        clickedNode: null,
        count: 1,
        data: [{
          id: 1,
          label: '一级 1',
          children: [{
            id: 11,
            label: '二级 1-1',
            children: [{
              id: 111,
              label: '三级 1-1',
              disabled: true,
            }],
          }],
        }, {
          id: 2,
          label: '一级 2',
          children: [{
            id: 21,
            label: '二级 2-1',
          }, {
            id: 22,
            label: '二级 2-2',
          }],
        }, {
          id: 3,
          label: '一级 3',
          children: [{
            id: 31,
            label: '二级 3-1',
          }, {
            id: 32,
            label: '二级 3-2',
          }],
        }],
        defaultProps: {
          children: 'children',
          label: 'label',
          disabled: 'disabled',
        },
      }
    },
  }, options))
  return { wrapper, vm: wrapper.vm }
}

describe('Tree.vue', () => {

  test('create', async () => {
    const { wrapper, vm } = getTreeVm(`:props="defaultProps" default-expand-all`)

    expect(wrapper.find('.el-tree').exists()).toBeTruthy()
    expect(wrapper.findAll('.el-tree > .el-tree-node').length).toEqual(3)
    expect(wrapper.findAll('.el-tree .el-tree-node').length).toEqual(ALL_NODE_COUNT)
    vm.data[1].children = [{ label: '二级 2-1' }] as any
    await nextTick()
    expect(wrapper.findAll('.el-tree .el-tree-node').length).toEqual(ALL_NODE_COUNT - 1)
  })

  test('click node', async () => {
    const { wrapper, vm } = getTreeVm(`:props="defaultProps" @node-click="handleNodeClick"`, {
      methods: {
        handleNodeClick(data) {
          this.clickedNode = data
        },
      },
    })

    const firstNodeContentWrapper = wrapper.find('.el-tree-node__content')
    const firstNodeWrapper = wrapper.find('.el-tree-node')

    await firstNodeContentWrapper.trigger('click')
    await sleep() // because node click method to expaned is async

    expect(vm.clickedNode.label).toEqual('一级 1')
    expect(firstNodeWrapper.classes('is-expanded')).toBe(true)
    expect(firstNodeWrapper.classes('is-current')).toBe(true)

    await firstNodeContentWrapper.trigger('click')
    await sleep()

    expect(firstNodeWrapper.classes('is-expanded')).toBe(false)
    expect(firstNodeWrapper.classes('is-current')).toBe(true)
  })

  test('emptyText', async () => {
    const { wrapper, vm } = getTreeVm(`:props="defaultProps"`)
    vm.data = []
    await nextTick()
    expect(wrapper.findAll('.el-tree__empty-block').length).toEqual(1)
  })

  test('expandOnNodeClick', async () => {
    const { wrapper } = getTreeVm(`:props="defaultProps" :expand-on-click-node="false"`)

    const firstNodeContentWrapper = wrapper.find('.el-tree-node__content')
    const firstNodeWrapper = wrapper.find('.el-tree-node')

    await firstNodeContentWrapper.trigger('click')
    await sleep() // because node click method to expaned is async

    expect(firstNodeWrapper.classes('is-expanded')).toBe(false)
  })

  test('checkOnNodeClick', async () => {
    const { wrapper } = getTreeVm(`:props="defaultProps" node-key="id" show-checkbox check-on-click-node`)

    const treeWrapper = wrapper.findComponent(Tree)
    const firstNodeContentWrapper = wrapper.find('.el-tree-node__content')

    await firstNodeContentWrapper.trigger('click')
    expect(treeWrapper.vm.getCheckedKeys()).toEqual([1, 11, 111])
  })

  test('current-node-key', async () => {
    const { wrapper } = getTreeVm(`:props="defaultProps" default-expand-all highlight-current node-key="id" :current-node-key="11"`)

    const currentNodeLabelWrapper = wrapper.find('.is-current .el-tree-node__label')

    expect(currentNodeLabelWrapper.text()).toEqual('二级 1-1')
    expect(wrapper.find('.el-tree--highlight-current').exists()).toBe(true)
  })

  test('defaultExpandAll', async () => {
    const { wrapper } = getTreeVm(`:props="defaultProps" default-expand-all`)
    const expanedNodeWrappers = wrapper.findAll('.el-tree-node.is-expanded')
    expect(expanedNodeWrappers.length).toEqual(ALL_NODE_COUNT)
  })

  test('defaultExpandedKeys', async () => {
    const { wrapper } = getTreeVm(`:props="defaultProps" :default-expanded-keys="defaultExpandedKeys" node-key="id"`, {
      created() {
        this.defaultExpandedKeys = [1, 3]
      },
    })
    const expanedNodeWrappers = wrapper.findAll('.el-tree-node.is-expanded')
    expect(expanedNodeWrappers.length).toEqual(2)
  })

  test('defaultExpandedKeys set', async () => {
    const { wrapper, vm } = getTreeVm(`:props="defaultProps" :default-expanded-keys="defaultExpandedKeys" node-key="id"`, {
      created() {
        this.defaultExpandedKeys = [1, 3]
      },
    })
    let expanedNodeWrappers = wrapper.findAll('.el-tree-node.is-expanded')
    expect(expanedNodeWrappers.length).toEqual(2)

    vm.defaultExpandedKeys = [2]
    await nextTick()
    vm.data = JSON.parse(JSON.stringify(vm.data))
    await sleep()
    expanedNodeWrappers = wrapper.findAll('.el-tree-node.is-expanded')
    expect(expanedNodeWrappers.length).toEqual(1)
  })

  test('filter-node-method', async () => {
    const { wrapper } = getTreeVm(`:props="defaultProps" :filter-node-method="filterNode"`, {
      methods: {
        filterNode(value, data) {
          if (!value) return true
          return data.label.indexOf(value) !== -1
        },
      },
    })

    const treeWrapper = wrapper.findComponent(Tree)
    treeWrapper.vm.filter('2-1')

    await nextTick()
    expect(treeWrapper.findAll('.el-tree-node.is-hidden').length).toEqual(3)
  })

  test('autoExpandParent = true', async () => {
    const { wrapper } = getTreeVm(`:props="defaultProps" :default-expanded-keys="defaultExpandedKeys" node-key="id"`, {
      created() {
        this.defaultExpandedKeys = [111]
      },
    })
    expect(wrapper.findAll('.el-tree-node.is-expanded').length).toEqual(3)
  })

  test('autoExpandParent = false', async () => {
    const { wrapper } = getTreeVm(`:props="defaultProps" :default-expanded-keys="defaultExpandedKeys" node-key="id" :auto-expand-parent="false"`, {
      created() {
        this.defaultExpandedKeys = [11]
      },
    })
    expect(wrapper.findAll('.el-tree-node.is-expanded').length).toEqual(0)

    const firstNodeContentWrapper = wrapper.find('.el-tree-node__content')
    await firstNodeContentWrapper.trigger('click')
    await sleep()

    expect(wrapper.findAll('.el-tree-node.is-expanded').length).toEqual(2)
  })

  test('defaultCheckedKeys & check-strictly = false', async () => {
    const { wrapper } = getTreeVm(`:props="defaultProps" default-expand-all show-checkbox :default-checked-keys="defaultCheckedKeys" node-key="id"`, {
      created() {
        this.defaultCheckedKeys = [1]
      },
    })
    expect(wrapper.findAll('.el-checkbox .is-checked').length).toEqual(3)
  })

  test('defaultCheckedKeys & check-strictly', async () => {
    const { wrapper } = getTreeVm(`:props="defaultProps" default-expand-all show-checkbox :default-checked-keys="defaultCheckedKeys" node-key="id" check-strictly`, {
      created() {
        this.defaultCheckedKeys = [1]
      },
    })
    expect(wrapper.findAll('.el-checkbox .is-checked').length).toEqual(1)
  })

  test('show checkbox', async () => {
    const { wrapper } = getTreeVm(`:props="defaultProps" show-checkbox`)

    const treeWrapper = wrapper.findComponent(Tree)
    const treeVm = treeWrapper.vm
    const seconNodeContentWrapper = treeWrapper.findAll('.el-tree-node__content')[1]
    const seconNodeCheckboxWrapper = seconNodeContentWrapper.find('.el-checkbox')
    const seconNodeExpandIconWrapper = seconNodeContentWrapper.find('.el-tree-node__expand-icon')

    expect(seconNodeCheckboxWrapper.exists()).toBe(true)
    await seconNodeCheckboxWrapper.trigger('click')

    expect(treeVm.getCheckedNodes().length).toEqual(3)
    expect(treeVm.getCheckedNodes(true).length).toEqual(2)

    await seconNodeExpandIconWrapper.trigger('click')
    await sleep()

    const secondTreeNodeWrapper = treeWrapper.findAll('.el-tree-node')[1]
    const secondNodefirstLeafCheckboxWrapper = secondTreeNodeWrapper.find('.el-tree-node__children .el-tree-node__content .el-checkbox')

    await secondNodefirstLeafCheckboxWrapper.trigger('click')
    expect(treeVm.getCheckedNodes().length).toEqual(1)
  })

  test('check', async () => {
    const handleCheckMockFunction = jest.fn()
    const { wrapper } = getTreeVm(`:props="defaultProps" show-checkbox @check="handleCheck"`, {
      methods: {
        handleCheck: handleCheckMockFunction,
      },
    })

    const secondNodeContentWrapper = wrapper.findAll('.el-tree-node__content')[1]
    const secondNodeCheckboxWrapper = secondNodeContentWrapper.find('.el-checkbox')
    expect(secondNodeCheckboxWrapper.exists()).toBe(true)

    await secondNodeCheckboxWrapper.trigger('click')
    await sleep()

    expect(handleCheckMockFunction.mock.calls.length).toBe(1)
    const [data, args] = handleCheckMockFunction.mock.calls[0]
    expect(data.id).toEqual(2)
    expect(args.checkedNodes.length).toEqual(3)
  })

  test('setCheckedNodes', async () => {
    const { wrapper } = getTreeVm(`:props="defaultProps" show-checkbox node-key="id"`)
    const treeWrapper = wrapper.findComponent(Tree)
    const treeVm = treeWrapper.vm
    const secondNodeContentWrapper = wrapper.findAll('.el-tree-node__content')[1]
    const secondNodeCheckWrapper = secondNodeContentWrapper.find('.el-checkbox')
    await secondNodeCheckWrapper.trigger('click')

    expect(treeVm.getCheckedNodes().length).toEqual(3)
    expect(treeVm.getCheckedNodes(true).length).toEqual(2)

    treeVm.setCheckedNodes([])
    expect(treeVm.getCheckedNodes().length).toEqual(0)
  })

  test('setCheckedKeys', async () => {
    const { wrapper } = getTreeVm(`:props="defaultProps" show-checkbox node-key="id"`)
    const treeWrapper = wrapper.findComponent(Tree)
    const tree = treeWrapper.vm

    tree.setCheckedKeys([111])
    expect(tree.getCheckedNodes().length).toEqual(3)
    expect(tree.getCheckedKeys().length).toEqual(3)

    tree.setCheckedKeys([1])
    expect(tree.getCheckedNodes().length).toEqual(3)
    expect(tree.getCheckedKeys().length).toEqual(3)

    tree.setCheckedKeys([2])
    expect(tree.getCheckedNodes().length).toEqual(3)
    expect(tree.getCheckedKeys().length).toEqual(3)

    tree.setCheckedKeys([21])
    expect(tree.getCheckedNodes().length).toEqual(1)
    expect(tree.getCheckedKeys().length).toEqual(1)
  })

  test('setCheckedKeys with checkStrictly', async () => {
    const { wrapper } = getTreeVm(`:props="defaultProps" checkStrictly show-checkbox node-key="id"`)
    const treeWrapper = wrapper.findComponent(Tree)
    const tree = treeWrapper.vm

    tree.setCheckedKeys([111])
    expect(tree.getCheckedNodes().length).toEqual(1)
    expect(tree.getCheckedKeys().length).toEqual(1)

    tree.setCheckedKeys([1])
    expect(tree.getCheckedNodes().length).toEqual(1)
    expect(tree.getCheckedKeys().length).toEqual(1)

    tree.setCheckedKeys([2])
    expect(tree.getCheckedNodes().length).toEqual(1)
    expect(tree.getCheckedKeys().length).toEqual(1)

    tree.setCheckedKeys([21, 22])
    expect(tree.getCheckedNodes().length).toEqual(2)
    expect(tree.getCheckedKeys().length).toEqual(2)
  })

  test('method setChecked', async () => {
    const { wrapper } = getTreeVm(`:props="defaultProps" show-checkbox node-key="id"`)
    const treeWrapper = wrapper.findComponent(Tree)
    const tree = treeWrapper.vm

    tree.setChecked(111, true, true)
    expect(tree.getCheckedNodes().length).toEqual(3)
    expect(tree.getCheckedKeys().length).toEqual(3)

    tree.setChecked(tree.data[0], false, true)
    expect(tree.getCheckedNodes().length).toEqual(0)
    expect(tree.getCheckedKeys().length).toEqual(0)
  })

  test('setCheckedKeys with leafOnly=false', async () => {
    const { wrapper } = getTreeVm(`:props="defaultProps" show-checkbox node-key="id"`)
    const treeWrapper = wrapper.findComponent(Tree)
    const tree = treeWrapper.vm

    tree.setCheckedKeys([1, 11, 111, 2], false)
    expect(tree.getCheckedNodes().length).toEqual(6)
    expect(tree.getCheckedKeys().length).toEqual(6)
  })

  test('setCheckedKeys with leafOnly=true', async () => {
    const { wrapper } = getTreeVm(`:props="defaultProps" show-checkbox node-key="id"`)
    const treeWrapper = wrapper.findComponent(Tree)
    const tree = treeWrapper.vm

    tree.setCheckedKeys([2], true)
    expect(tree.getCheckedNodes().length).toEqual(2)
    expect(tree.getCheckedKeys().length).toEqual(2)
  })

  test('setCurrentKey', async () => {
    const { wrapper } = getTreeVm(`:props="defaultProps" show-checkbox node-key="id"`)
    const treeWrapper = wrapper.findComponent(Tree)
    const tree = treeWrapper.vm

    tree.setCurrentKey(111)
    expect(tree.store.currentNode.data.id).toEqual(111)

    tree.setCurrentKey(null)
    expect(tree.store.currentNode).toEqual(null)
  })

  test('setCurrentKey should also auto expand parent', async () => {
    const { wrapper } = getTreeVm(`:props="defaultProps" show-checkbox node-key="id"`)
    const treeWrapper = wrapper.findComponent(Tree)
    const tree = treeWrapper.vm

    tree.setCurrentKey(111)
    await nextTick()
    expect(wrapper.find('.is-current').exists()).toBeTruthy()

    tree.setCurrentKey(null)
    await nextTick()
    expect(wrapper.find('.is-current').exists()).toBeFalsy()
  })

  test('setCurrentKey should not expand self', async () => {
    const { wrapper } = getTreeVm(`:props="defaultProps" show-checkbox node-key="id"`)
    const treeWrapper = wrapper.findComponent(Tree)
    const tree = treeWrapper.vm

    tree.setCurrentKey(1)
    await sleep(100)
    expect(wrapper.text()).toBe('一级 1一级 2一级 3')
    expect(wrapper.findAll('.is-expanded')).toHaveLength(0)

    tree.setCurrentKey(11)
    await sleep(100)
    expect(wrapper.text()).toBe('一级 1二级 1-1一级 2一级 3')
    expect(wrapper.findAll('.is-expanded')).toHaveLength(1)

    tree.setCurrentKey(111)
    await sleep(100)
    expect(wrapper.text()).toBe('一级 1二级 1-1三级 1-1一级 2一级 3')
    expect(wrapper.findAll('.is-expanded')).toHaveLength(2)
  })

  test('setCurrentNode', async () => {
    const { wrapper } = getTreeVm(`:props="defaultProps" show-checkbox node-key="id"`)
    const treeWrapper = wrapper.findComponent(Tree)
    const tree = treeWrapper.vm

    tree.setCurrentNode({
      id: 111,
      label: '三级 1-1',
    })
    expect(tree.store.currentNode.data.id).toEqual(111)

    tree.setCurrentKey(null)
    expect(tree.store.currentNode).toEqual(null)
  })

  test('setCurrentNode should also auto expand parent', async () => {
    const { wrapper } = getTreeVm(`:props="defaultProps" show-checkbox node-key="id"`)
    const treeWrapper = wrapper.findComponent(Tree)
    const tree = treeWrapper.vm

    tree.setCurrentNode({
      id: 111,
      label: '三级 1-1',
    })
    await nextTick()
    expect(wrapper.find('.is-current').exists()).toBeTruthy()

    tree.setCurrentKey(null)
    await nextTick()
    expect(wrapper.find('.is-current').exists()).toBeFalsy()
  })

  test('setCurrentNode should not expand self', async () => {
    const { wrapper } = getTreeVm(`:props="defaultProps" show-checkbox node-key="id"`)
    const treeWrapper = wrapper.findComponent(Tree)
    const tree = treeWrapper.vm

    tree.setCurrentNode({
      id: 1,
      label: '一级 1-1',
    })
    await sleep(100)
    expect(wrapper.text()).toBe('一级 1一级 2一级 3')
    expect(wrapper.findAll('.is-expanded')).toHaveLength(0)

    tree.setCurrentNode({
      id: 11,
      label: '二级 1-1',
    })
    await sleep(100)
    expect(wrapper.text()).toBe('一级 1二级 1-1一级 2一级 3')
    expect(wrapper.findAll('.is-expanded')).toHaveLength(1)

    tree.setCurrentNode({
      id: 111,
      label: '三级 1-1',
    })
    await sleep(100)
    expect(wrapper.text()).toBe('一级 1二级 1-1三级 1-1一级 2一级 3')
    expect(wrapper.findAll('.is-expanded')).toHaveLength(2)
  })

  test('getCurrentKey', async () => {
    const { wrapper } = getTreeVm(`:props="defaultProps" show-checkbox node-key="id"`)
    const treeWrapper = wrapper.findComponent(Tree)
    const tree = treeWrapper.vm

    tree.setCurrentKey(111)
    expect(tree.getCurrentKey()).toEqual(111)

    tree.setCurrentKey(null)
    expect(tree.getCurrentKey()).toEqual(null)
  })

  test('getCurrentNode', async () => {
    const { wrapper } = getTreeVm(`:props="defaultProps" show-checkbox node-key="id"`)
    const treeWrapper = wrapper.findComponent(Tree)
    const tree = treeWrapper.vm

    tree.setCurrentKey(111)
    expect(tree.getCurrentNode().id).toEqual(111)
  })

  test('getNode', async () => {
    const { wrapper } = getTreeVm(`:props="defaultProps" node-key="id"`)
    const treeWrapper = wrapper.findComponent(Tree)
    const tree = treeWrapper.vm

    const node = tree.getNode(111)
    expect(node.data.id).toEqual(111)
  })

  test('remove', async () => {
    const { wrapper } = getTreeVm(`:props="defaultProps" node-key="id"`)
    const treeWrapper = wrapper.findComponent(Tree)
    const tree = treeWrapper.vm

    tree.setCurrentKey(1)
    expect(tree.getCurrentNode().id).toEqual(1)
    tree.remove(1)

    expect(tree.data[0].id).toEqual(2)
    expect(tree.getNode(1)).toEqual(null)
    expect(tree.getCurrentNode()).toEqual(null)
  })

  test('append', async () => {
    const { wrapper } = getTreeVm(`:props="defaultProps" node-key="id"`)
    const treeWrapper = wrapper.findComponent(Tree)
    const tree = treeWrapper.vm

    const nodeData = { id: 88, label: '88' }
    tree.append(nodeData, tree.getNode(1))

    expect(tree.data[0].children.length).toEqual(2)
    expect(tree.getNode(88).data).toEqual(nodeData)
  })


  test('insertBefore', async () => {
    const { wrapper } = getTreeVm(`:props="defaultProps" node-key="id"`)
    const treeWrapper = wrapper.findComponent(Tree)
    const tree = treeWrapper.vm

    const nodeData = { id: 88, label: '88' }
    tree.insertBefore(nodeData, tree.getNode(11))
    expect(tree.data[0].children.length).toEqual(2)
    expect(tree.data[0].children[0]).toEqual(nodeData)
    expect(tree.getNode(88).data).toEqual(nodeData)
  })

  test('insertAfter', async () => {
    const { wrapper } = getTreeVm(`:props="defaultProps" node-key="id"`)
    const treeWrapper = wrapper.findComponent(Tree)
    const tree = treeWrapper.vm

    const nodeData = { id: 88, label: '88' }
    tree.insertAfter(nodeData, tree.getNode(11))
    expect(tree.data[0].children.length).toEqual(2)
    expect(tree.data[0].children[1]).toEqual(nodeData)
    expect(tree.getNode(88).data).toEqual(nodeData)
  })

  test('set disabled checkbox', async () => {
    const { wrapper } = getDisableTreeVm(`:props="defaultProps" show-checkbox node-key="id" default-expand-all`)
    const nodeWrapper = wrapper.findAll('.el-tree-node__content')[2]
    const checkboxWrapper = nodeWrapper.find('.el-checkbox input')

    expect((checkboxWrapper.element as HTMLInputElement).disabled).toEqual(true)
  })


  test('check strictly', async () => {
    const { wrapper } = getTreeVm(`:props="defaultProps" show-checkbox check-strictly default-expand-all`)
    const treeWrapper = wrapper.findComponent(Tree)
    const secondNodeContentWrapper = wrapper.findAll('.el-tree-node__content')[3]
    const secondNodeCheckboxWrapper = secondNodeContentWrapper.find('.el-checkbox')
    await secondNodeCheckboxWrapper.trigger('click')
    expect(treeWrapper.vm.getCheckedNodes().length).toEqual(1)
    expect(treeWrapper.vm.getCheckedNodes(true).length).toEqual(0)

    const secondTreeNodeWrapper = treeWrapper.findAll('.el-tree-node')[3]
    const secondNodefirstLeafCheckboxWrapper = secondTreeNodeWrapper.find('.el-tree-node__children .el-tree-node__content .el-checkbox')
    await secondNodefirstLeafCheckboxWrapper.trigger('click')
    expect(treeWrapper.vm.getCheckedNodes().length).toEqual(2)
  })

  test('render content', async () => {
    const { wrapper } = getTreeVm(`:props="defaultProps" :render-content="renderContent"`, {
      methods: {
        renderContent(h, node) {
          return h('div', { class: 'custom-content' }, [
            h('button', { class: 'el-button' }, [node.node.label]),
          ])
        },
      },
    })
    const firstNodeWrapper = wrapper.find('.el-tree-node__content')
    expect(firstNodeWrapper.find('.custom-content').exists()).toBe(true)

    const buttonWrapper = firstNodeWrapper.find('.custom-content button')
    expect(buttonWrapper.exists()).toBe(true)
    expect(buttonWrapper.text()).toEqual('一级 1')
  })

  test('scoped slot', async () => {
    const { wrapper } = getTreeVm('', {
      template: `
        <el-tree ref="tree" :data="data">
          <template #default="scope">
            <div class="custom-tree-template">
              <span>{{ scope.node.label }}</span>
              <button></button>
            </div>
          </template>
        </el-tree>
      `,
      methods: {
        renderContent(h, node) {
          return h('div', { class: 'custom-content' }, [
            h('button', { class: 'el-button' }, [node.node.label]),
          ])
        },
      },
    })
    const firstNodeWrapper = wrapper.find('.custom-tree-template')
    expect(firstNodeWrapper.exists()).toBe(true)
    const spanWrapper = firstNodeWrapper.find('span')
    const buttonWrapper = firstNodeWrapper.find('button')
    expect(spanWrapper.exists()).toBe(true)
    expect(spanWrapper.text()).toEqual('一级 1')
    expect(buttonWrapper.exists()).toBe(true)
  })

  test('load node', async () => {
    const { wrapper } = getTreeVm(`:props="defaultProps" lazy :load="loadNode" show-checkbox`, {
      methods: {
        loadNode(node, resolve) {
          if (node.level === 0) {
            return resolve([{ label: 'region1' }, { label: 'region2' }])
          }
          if (node.level > 4) return resolve([])
          setTimeout(() => {
            resolve([{
              label: 'zone' + this.count++,
            }, {
              label: 'zone' + this.count++,
            }])
          }, 50)
        },
      },
    })

    let nodeWrappers = wrapper.findAll('.el-tree-node__content')

    expect(nodeWrappers.length).toEqual(2)
    await nodeWrappers[0].trigger('click')
    await sleep(100) // wait load finish
    nodeWrappers = wrapper.findAll('.el-tree-node__content')
    expect(nodeWrappers.length).toEqual(4)
  })

  test('lazy defaultChecked', async () => {
    const { wrapper } = getTreeVm(`:props="defaultProps" node-key="id" lazy :load="loadNode" show-checkbox`, {
      methods: {
        loadNode(node, resolve) {
          if (node.level === 0) {
            return resolve([{ label: 'region1', id: this.count++ }, { label: 'region2', id: this.count++ }])
          }
          if (node.level > 4) return resolve([])
          setTimeout(() => {
            resolve([{
              label: 'zone' + this.count,
              id: this.count++,
            }, {
              label: 'zone' + this.count,
              id: this.count++,
            }])
          }, 50)
        },
      },
    })

    const treeWrapper = wrapper.findComponent(Tree)
    const tree = treeWrapper.vm
    const firstNodeWrapper = treeWrapper.find('.el-tree-node__content')
    expect(firstNodeWrapper.find('.is-indeterminate').exists()).toEqual(false)

    tree.store.setCheckedKeys([3])
    await firstNodeWrapper.find('.el-tree-node__expand-icon').trigger('click')
    await sleep(100)

    expect(firstNodeWrapper.find('.is-indeterminate').exists()).toEqual(true)
    const childWrapper = treeWrapper.findAll('.el-tree-node__content')[1]
    expect(childWrapper.find('input').element.checked).toEqual(true)
  })

  test('lazy expandOnChecked', async () => {
    const { wrapper } = getTreeVm(`:props="defaultProps" node-key="id" lazy :load="loadNode" show-checkbox check-descendants`, {
      methods: {
        loadNode(node, resolve) {
          if (node.level === 0) {
            return resolve([{ label: 'region1', id: this.count++ }, { label: 'region2', id: this.count++ }])
          }
          if (node.level > 2) return resolve([])
          setTimeout(() => {
            resolve([{
              label: 'zone' + this.count,
              id: this.count++,
            }, {
              label: 'zone' + this.count,
              id: this.count++,
            }])
          }, 10)
        },
      },
    })

    const treeWrapper = wrapper.findComponent(Tree)
    const tree = treeWrapper.vm

    tree.store.setCheckedKeys([1])
    await sleep(400)
    expect(tree.getCheckedKeys().length).toEqual(7)
  })

  test('lazy without expandOnChecked', async () => {
    const { wrapper } = getTreeVm(`:props="defaultProps" node-key="id" lazy :load="loadNode" show-checkbox`, {
      methods: {
        loadNode(node, resolve) {
          if (node.level === 0) {
            return resolve([{ label: 'region1', id: this.count++ }, { label: 'region2', id: this.count++ }])
          }
          if (node.level > 4) return resolve([])
          setTimeout(() => {
            resolve([{
              label: 'zone' + this.count,
              id: this.count++,
            }, {
              label: 'zone' + this.count,
              id: this.count++,
            }])
          }, 50)
        },
      },
    })

    const treeWrapper = wrapper.findComponent(Tree)
    const tree = treeWrapper.vm

    tree.store.setCheckedKeys([1])
    await sleep(300)

    const nodeWrappers = treeWrapper.findAll('.el-tree-node__content')
    expect(nodeWrappers[0].find('input').element.checked).toEqual(true)
    expect(nodeWrappers.length).toEqual(2)
  })

  test('accordion', async () => {
    const { wrapper } = getTreeVm(`:props="defaultProps" accordion`)

    const firstNodeContentWrapper = wrapper.find('.el-tree-node__content')
    const secondNodeContentWrapper = wrapper.find('.el-tree-node:nth-child(2) .el-tree-node__content')
    await firstNodeContentWrapper.trigger('click')
    await sleep()
    expect(wrapper.find('.el-tree-node').classes('is-expanded')).toBe(true)
    await secondNodeContentWrapper.trigger('click')
    await sleep()
    expect(wrapper.find('.el-tree-node').classes('is-expanded')).toBe(false)
  })

  test('handleNodeOpen & handleNodeClose', async () => {
    const { wrapper, vm } = getTreeVm(`:props="defaultProps" lazy :load="loadNode" @node-expand="handleNodeOpen" @node-collapse="handleNodeClose"`, {
      methods: {
        loadNode(node, resolve) {
          if (node.level === 0) {
            return resolve([{ label: 'region1' }, { label: 'region2' }])
          }
          if (node.level > 4) return resolve([])
          nextTick(() => {
            resolve([{
              label: 'zone' + this.count++,
            }, {
              label: 'zone' + this.count++,
            }])
          })
        },
        handleNodeOpen(data) {
          this.currentNode = data
          this.nodeExpended = true
        },
        handleNodeClose(data) {
          this.currentNode = data
          this.nodeExpended = false
        },
      },
    })

    const firstNodeContentWrapper = wrapper.find('.el-tree-node__content')
    const firstNodeWrapper = wrapper.find('.el-tree-node')

    expect(firstNodeWrapper.find('.el-tree-node__children').exists()).toBe(false)

    await firstNodeContentWrapper.trigger('click')
    await nextTick() // first next tick for UI update
    await nextTick() // second next tick for triggering loadNode
    await nextTick() // third next tick for updating props.node.expanded

    expect(vm.nodeExpended).toEqual(true)
    expect(vm.currentNode.label).toEqual('region1')

    await firstNodeContentWrapper.trigger('click')
    await nextTick()
    await nextTick()
    await nextTick()

    expect(vm.nodeExpended).toEqual(false)
    expect(vm.currentNode.label).toEqual('region1')
  })

  test('updateKeyChildren', async () => {
    const { wrapper } = getTreeVm(`:props="defaultProps" show-checkbox node-key="id" default-expand-all`)

    const treeWrapper = wrapper.findComponent(Tree)
    const tree = treeWrapper.vm

    tree.updateKeyChildren(1, [{
      id: 111,
      label: '三级 1-1',
    }])

    await nextTick()

    const nodeContentWrapper = wrapper.findAll('.el-tree-node__content')[1]
    const nodeLabelWrapper = nodeContentWrapper.find('.el-tree-node__label')

    expect(tree.store.nodesMap['11']).toEqual(undefined)
    expect(tree.store.nodesMap['1'].childNodes[0].data.id).toEqual(111)
    expect(nodeLabelWrapper.text()).toEqual('三级 1-1')
  })

  test('update multi tree data', async () => {
    const { wrapper, vm } = getTreeVm(``, {
      template: `
        <div>
          <el-tree ref="tree1" :data="data" node-key="id" :props="defaultProps"></el-tree>
          <el-tree ref="tree2" :data="data" node-key="id" :props="defaultProps"></el-tree>
        </div>
      `,
    })

    const nodeData = { label: '新增 1', id: 4, children: [] }
    vm.data.push(nodeData)
    vm.data = [...vm.data]

    await nextTick()

    const treeWrappers: any = wrapper.findAllComponents(Tree)
    expect(treeWrappers[0].vm.getNode(4).data).toEqual(nodeData)
    expect(treeWrappers[1].vm.getNode(4).data).toEqual(nodeData)
  })

  test('navigate with defaultExpandAll',  () => {
    const { wrapper } = getTreeVm(``, {
      template: `
        <div>
          <el-tree default-expand-all ref="tree1" :data="data" node-key="id" :props="defaultProps"></el-tree>
        </div>
      `,
    })
    const tree = wrapper.findComponent({ name: 'ElTree' })
    expect(Object.values(tree.vm.store.nodesMap).filter(item => item.canFocus).length).toBe(9)
  })

  test('navigate up',  async () => {
    const { wrapper } = getTreeVm(``, {
      template: `
        <div>
          <el-tree ref="tree1" :data="data" node-key="id" :props="defaultProps"></el-tree>
        </div>
      `,
    })
    let flag = false
    function handleFocus(){
      return () => (flag = true)
    }
    await nextTick()
    const tree = wrapper.findComponent({ name: 'ElTree' })
    const targetElement = wrapper.find('div[data-key="3"]').element
    const fromElement =  wrapper.find('div[data-key="1"]').element
    defineGetter(targetElement, 'focus', handleFocus)
    tree.vm.setCurrentKey(1)
    expect(fromElement.classList.contains('is-focusable')).toBeTruthy()
    fromElement.dispatchEvent(new KeyboardEvent('keydown', { code: 'ArrowUp', bubbles: true, cancelable: false }))
    expect(flag).toBe(true)
  })

  test('navigate down', async () => {
    const { wrapper } = getTreeVm(``, {
      template: `
        <div>
          <el-tree ref="tree1" :data="data" node-key="id" :props="defaultProps"></el-tree>
        </div>
      `,
    })
    let flag = false
    function handleFocus(){
      return () => (flag = true)
    }
    await nextTick()
    const tree = wrapper.findComponent({ name: 'ElTree' })
    const targetElement = wrapper.find('div[data-key="2"]').element
    const fromElement =  wrapper.find('div[data-key="1"]').element
    defineGetter(targetElement, 'focus', handleFocus)
    tree.vm.setCurrentKey(1)
    expect(fromElement.classList.contains('is-focusable')).toBeTruthy()
    fromElement.dispatchEvent(new KeyboardEvent('keydown', { code: 'ArrowDown', bubbles: true, cancelable: false }))
    expect(flag).toBe(true)
  })

  test('navigate with disabled',  async () => {
    const wrapper = mount( {
      template: `
        <div>
          <el-tree ref="tree1" :data="data" node-key="id" :props="defaultProps"></el-tree>
        </div>
      `,
      components: {
        'el-tree': Tree,
      },
      data(){
        return {
          data: [{
            id: 1,
            label: '一级 1',
            children: [{
              id: 11,
              label: '二级 1-1',
              children: [{
                id: 111,
                label: '三级 1-1',
                disabled: true,
              }],
            }],
          }, {
            id: 2,
            label: '一级 2',
            disabled: true,
            children: [{
              id: 21,
              label: '二级 2-1',
            }, {
              id: 22,
              label: '二级 2-2',
            }],
          }, {
            id: 3,
            label: '一级 3',
            children: [{
              id: 31,
              label: '二级 3-1',
            }, {
              id: 32,
              label: '二级 3-2',
            }],
          }],
          defaultProps: {
            children: 'children',
            label: 'label',
            disabled: 'disabled',
          },
        }
      },
    })
    let flag = false
    function handleFocus(){
      return () => (flag = true)
    }
    await nextTick()
    const tree = wrapper.findComponent({ name: 'ElTree' })
    const targetElement = wrapper.find('div[data-key="3"]').element
    const fromElement =  wrapper.find('div[data-key="1"]').element
    defineGetter(targetElement, 'focus', handleFocus)
    tree.vm.setCurrentKey(1)
    expect(fromElement.classList.contains('is-focusable')).toBeTruthy()
    fromElement.dispatchEvent(new KeyboardEvent('keydown', { code: 'ArrowDown', bubbles: true, cancelable: false }))
    expect(flag).toBe(true)
  })

  test('navigate with lazy and without node-key',  async () => {
    const wrapper = mount( {
      template: `
        <div>
        <el-tree
          :props="defaultProps"
          :load="loadNode"
          lazy
          show-checkbox>
        </el-tree>
        </div>
      `,
      components: {
        'el-tree': Tree,
      },
      data(){
        return {
          defaultProps: {
            children: 'children',
            label: 'label',
            disabled: 'disabled',
          },
        }
      },
      methods: {
        loadNode(node, resolve) {
          if (node.level === 0) {
            return resolve([{ name: 'region1' }, { name: 'region2' }])
          }
          if (node.level > 3) return resolve([])

          let hasChild
          if (node.data.name === 'region1') {
            hasChild = true
          } else if (node.data.name === 'region2') {
            hasChild = false
          } else {
            hasChild = false
          }

          let data
          if (hasChild) {
            data = [{
              name: 'zone' + this.count++,
            }, {
              name: 'zone' + this.count++,
            }]
          } else {
            data = []
          }
          resolve(data)
        },
      },
    })
    let flag = false
    function handleFocus(){
      return () => (flag = !flag)
    }
    await nextTick()
    const tree = wrapper.findComponent({ name: 'ElTree' })
    const originElements = wrapper.findAll('div[data-key]')
    const region1 = originElements[0].element
    const region2 = originElements[1].element
    defineGetter(region2, 'focus', handleFocus)
    // expand
    region1.dispatchEvent(new MouseEvent('click'))
    expect(region1.classList.contains('is-focusable')).toBeTruthy()
    await sleep(100)
    expect(Object.values(tree.vm.store.nodesMap.length === 4)).toBeTruthy()
    expect(Object.values(Object.values(tree.vm.store.nodesMap).filter(item => item.canFocus).length === 4)).toBeTruthy()
    // collapse
    region1.dispatchEvent(new MouseEvent('click'))
    expect(Object.values(Object.values(tree.vm.store.nodesMap).filter(item => item.canFocus).length === 2)).toBeTruthy()
    // ArrowDown, region2 focus
    region1.dispatchEvent(new KeyboardEvent('keydown', { code: 'ArrowDown', bubbles: true, cancelable: false }))
    expect(flag).toBe(true)
    defineGetter(region1, 'focus', handleFocus)
    // ArrowDown, region1 focus
    region2.dispatchEvent(new KeyboardEvent('keydown', { code: 'ArrowDown', bubbles: true, cancelable: false }))
    expect(flag).toBe(false)
  })
})
