// @ts-nocheck
import { nextTick } from 'vue'
import { mount } from '@vue/test-utils'
import { describe, expect, test, vi } from 'vitest'
import defineGetter from '@element-plus/test-utils/define-getter'
import sleep from '@element-plus/test-utils/sleep'
import Tree from '../src/tree.vue'
import Button from '../../button/src/button.vue'
import type Node from '../src/model/node'

const ALL_NODE_COUNT = 9

const getTreeVm = (props = '', options = {}) => {
  const wrapper = mount(
    Object.assign(
      {
        components: {
          'el-tree': Tree,
        },
        template: `
      <el-tree ref="tree" :data="data" ${props}></el-tree>
    `,
        data() {
          return {
            currentId: null,
            currentNode: null,
            nodeExpended: false,
            defaultExpandedKeys: [],
            defaultCheckedKeys: [],
            clickedNode: null,
            count: 1,
            data: [
              {
                id: 1,
                label: '一级 1',
                children: [
                  {
                    id: 11,
                    label: '二级 1-1',
                    children: [
                      {
                        id: 111,
                        label: '三级 1-1',
                      },
                    ],
                  },
                ],
              },
              {
                id: 2,
                label: '一级 2',
                children: [
                  {
                    id: 21,
                    label: '二级 2-1',
                  },
                  {
                    id: 22,
                    label: '二级 2-2',
                  },
                ],
              },
              {
                id: 3,
                label: '一级 3',
                children: [
                  {
                    id: 31,
                    label: '二级 3-1',
                  },
                  {
                    id: 32,
                    label: '二级 3-2',
                  },
                ],
              },
            ],
            defaultProps: {
              children: 'children',
              label: 'label',
            },
          }
        },
      },
      options
    )
  )
  return { wrapper, vm: wrapper.vm }
}

const getDisableTreeVm = (props = '', options = {}) => {
  const wrapper = mount(
    Object.assign(
      {
        components: {
          'el-tree': Tree,
        },
        template: `
      <el-tree ref="tree" :data="data" ${props}></el-tree>
    `,
        data() {
          return {
            defaultExpandedKeys: [],
            defaultCheckedKeys: [],
            clickedNode: null,
            count: 1,
            data: [
              {
                id: 1,
                label: '一级 1',
                children: [
                  {
                    id: 11,
                    label: '二级 1-1',
                    children: [
                      {
                        id: 111,
                        label: '三级 1-1',
                        disabled: true,
                      },
                    ],
                  },
                ],
              },
              {
                id: 2,
                label: '一级 2',
                children: [
                  {
                    id: 21,
                    label: '二级 2-1',
                  },
                  {
                    id: 22,
                    label: '二级 2-2',
                  },
                ],
              },
              {
                id: 3,
                label: '一级 3',
                children: [
                  {
                    id: 31,
                    label: '二级 3-1',
                  },
                  {
                    id: 32,
                    label: '二级 3-2',
                  },
                ],
              },
            ],
            defaultProps: {
              children: 'children',
              label: 'label',
              disabled: 'disabled',
            },
          }
        },
      },
      options
    )
  )
  return { wrapper, vm: wrapper.vm }
}

describe('Tree.vue', () => {
  test('create', async () => {
    const { wrapper, vm } = getTreeVm(
      `:props="defaultProps" default-expand-all`
    )

    expect(wrapper.find('.el-tree').exists()).toBeTruthy()
    expect(wrapper.findAll('.el-tree > .el-tree-node').length).toEqual(3)
    expect(wrapper.findAll('.el-tree .el-tree-node').length).toEqual(
      ALL_NODE_COUNT
    )
    vm.data[1].children = [{ label: '二级 2-1' }] as any
    await nextTick()
    expect(wrapper.findAll('.el-tree .el-tree-node').length).toEqual(
      ALL_NODE_COUNT - 1
    )
  })

  test('click node', async () => {
    const { wrapper, vm } = getTreeVm(
      `:props="defaultProps" @node-click="handleNodeClick"`,
      {
        methods: {
          handleNodeClick(data) {
            this.clickedNode = data
          },
        },
      }
    )

    const firstNodeContentWrapper = wrapper.find('.el-tree-node__content')
    const firstNodeWrapper = wrapper.find('.el-tree-node')

    await firstNodeContentWrapper.trigger('click')
    await nextTick() // because node click method to expaned is async

    expect(vm.clickedNode.label).toEqual('一级 1')
    expect(firstNodeWrapper.classes('is-expanded')).toBe(true)
    expect(firstNodeWrapper.classes('is-current')).toBe(true)

    await firstNodeContentWrapper.trigger('click')
    await nextTick() // because node click method to expaned is async

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
    const { wrapper } = getTreeVm(
      `:props="defaultProps" :expand-on-click-node="false"`
    )

    const firstNodeContentWrapper = wrapper.find('.el-tree-node__content')
    const firstNodeWrapper = wrapper.find('.el-tree-node')

    await firstNodeContentWrapper.trigger('click')
    await nextTick() // because node click method to expaned is async

    expect(firstNodeWrapper.classes('is-expanded')).toBe(false)
  })

  test('checkOnNodeClick', async () => {
    const { wrapper } = getTreeVm(
      `:props="defaultProps" node-key="id" show-checkbox check-on-click-node`
    )

    const treeWrapper = wrapper.findComponent(Tree)
    const firstNodeContentWrapper = wrapper.find('.el-tree-node__content')

    await firstNodeContentWrapper.trigger('click')
    expect(
      (treeWrapper.vm as InstanceType<typeof Tree>).getCheckedKeys()
    ).toEqual([1, 11, 111])
  })

  test('current-node-key', async () => {
    const { wrapper } = getTreeVm(
      `:props="defaultProps" default-expand-all highlight-current node-key="id" :current-node-key="11"`
    )

    const currentNodeLabelWrapper = wrapper.find(
      '.is-current .el-tree-node__label'
    )

    expect(currentNodeLabelWrapper.text()).toEqual('二级 1-1')
    expect(wrapper.find('.el-tree--highlight-current').exists()).toBe(true)
  })

  test('update tree-data after current-node-key', async () => {
    const { wrapper, vm } = getTreeVm(
      `:props="defaultProps" :expand-on-click-node="false" default-expand-all highlight-current node-key="id" :current-node-key="currentId"`
    )

    vm.currentId = 22
    await nextTick()
    const currentNodeLabelWrapper = wrapper.find(
      '.is-current .el-tree-node__label'
    )
    expect(wrapper.find('.el-tree--highlight-current').exists()).toBe(true)
    expect(currentNodeLabelWrapper.text()).toEqual('二级 2-2')
    const _data = [...vm.data]
    await nextTick()
    vm.data = [..._data]
    await nextTick()
    const currentNodeLabelWrapper2 = wrapper.find(
      '.is-current .el-tree-node__label'
    )
    expect(currentNodeLabelWrapper2.exists()).toBe(true)
    expect(currentNodeLabelWrapper2.text()).toEqual('二级 2-2')
    expect(wrapper.find('.el-tree--highlight-current').exists()).toBe(true)
  })

  test('defaultExpandAll', async () => {
    const { wrapper } = getTreeVm(`:props="defaultProps" default-expand-all`)
    const expanedNodeWrappers = wrapper.findAll('.el-tree-node.is-expanded')
    expect(expanedNodeWrappers.length).toEqual(ALL_NODE_COUNT)
  })

  test('defaultExpandedKeys', async () => {
    const { wrapper } = getTreeVm(
      `:props="defaultProps" :default-expanded-keys="defaultExpandedKeys" node-key="id"`,
      {
        created() {
          this.defaultExpandedKeys = [1, 3]
        },
      }
    )
    const expanedNodeWrappers = wrapper.findAll('.el-tree-node.is-expanded')
    expect(expanedNodeWrappers.length).toEqual(2)
  })

  test('defaultExpandedKeys set', async () => {
    const { wrapper, vm } = getTreeVm(
      `:props="defaultProps" :default-expanded-keys="defaultExpandedKeys" node-key="id"`,
      {
        created() {
          this.defaultExpandedKeys = [1, 3]
        },
      }
    )
    await nextTick()
    let expanedNodeWrappers = wrapper.findAll('.el-tree-node.is-expanded')
    expect(expanedNodeWrappers.length).toEqual(2)
    vm.defaultExpandedKeys = [2]
    await nextTick()
    await nextTick()
    vm.data = [
      {
        id: 4,
        label: 'L1 4',
        children: [],
      },
      ...JSON.parse(JSON.stringify(vm.data)),
    ]
    await nextTick()
    await nextTick()
    await nextTick()
    expanedNodeWrappers = wrapper.findAll('.el-tree-node.is-expanded')
    expect(expanedNodeWrappers.length).toEqual(1)
  })

  test('filter-node-method', async () => {
    const { wrapper } = getTreeVm(
      `:props="defaultProps" :filter-node-method="filterNode"`,
      {
        methods: {
          filterNode(value, data) {
            if (!value) return true
            return data.label.includes(value)
          },
        },
      }
    )

    const treeWrapper = wrapper.findComponent(Tree)
    ;(treeWrapper.vm as InstanceType<typeof Tree>).filter('2-1')

    await nextTick()
    expect(treeWrapper.findAll('.el-tree-node.is-hidden').length).toEqual(3)
  })
  test('lazy load with filter expand loaded node', async () => {
    const { wrapper } = getTreeVm(
      `:props="defaultProps" lazy :load="loadNode" :filter-node-method="filterNode"`,
      {
        methods: {
          loadNode(node, resolve) {
            if (node.level === 0) {
              return resolve([{ label: 'a', id: 'a', type: 'root' }])
            }
            if (node.data.type === 'root') {
              return resolve([
                {
                  label: 'node1',
                  id: 'node1',
                  type: 'node',
                },
                {
                  label: 'node2',
                  id: 'node2',
                  type: 'node',
                },
              ])
            }
            if (node.data.type === 'node') {
              return resolve([
                {
                  label: `${node.data.label}-child1`,
                  id: `${node.data.label}-child1`,
                  type: 'item',
                  leaf: true,
                },
                {
                  label: `${node.data.label}-child2`,
                  id: `${node.data.label}-child2`,
                  type: 'item',
                  leaf: true,
                },
              ])
            }
            resolve([])
          },
          filterNode(value, data) {
            if (!value) return true
            return data.label.includes(value)
          },
        },
      }
    )

    let nodeWrappers = wrapper.findAll('.el-tree-node__content')

    expect(nodeWrappers.length).toEqual(1)
    nodeWrappers[0].trigger('click')
    await sleep()
    nodeWrappers = wrapper.findAll('.el-tree-node__content')
    expect(nodeWrappers.length).toEqual(3)
    nodeWrappers[1].trigger('click')
    nodeWrappers[2].trigger('click')
    await sleep()
    nodeWrappers = wrapper.findAll('.el-tree-node__content')
    expect(nodeWrappers.length).toEqual(7)
    expect(wrapper.findAll('.is-expanded').length).toEqual(3)
    // collapse node
    const rootNode = nodeWrappers[0]
    rootNode.trigger('click')
    await sleep()
    expect(rootNode.element.parentNode.getAttribute('aria-expanded')).toEqual(
      'false'
    )
    // filter
    wrapper.findComponent(Tree).vm.filter('1')
    await sleep()
    expect(rootNode.element.parentNode.getAttribute('aria-expanded')).toEqual(
      'true'
    )
  })

  test('autoExpandParent = true', async () => {
    const { wrapper } = getTreeVm(
      `:props="defaultProps" :default-expanded-keys="defaultExpandedKeys" node-key="id"`,
      {
        created() {
          this.defaultExpandedKeys = [111]
        },
      }
    )
    expect(wrapper.findAll('.el-tree-node.is-expanded').length).toEqual(3)
  })

  test('autoExpandParent = false', async () => {
    const { wrapper } = getTreeVm(
      `:props="defaultProps" :default-expanded-keys="defaultExpandedKeys" node-key="id" :auto-expand-parent="false"`,
      {
        created() {
          this.defaultExpandedKeys = [11]
        },
      }
    )
    expect(wrapper.findAll('.el-tree-node.is-expanded').length).toEqual(0)

    const firstNodeContentWrapper = wrapper.find('.el-tree-node__content')
    await firstNodeContentWrapper.trigger('click')
    await nextTick()

    expect(wrapper.findAll('.el-tree-node.is-expanded').length).toEqual(2)
  })

  test('defaultCheckedKeys & check-strictly = false', async () => {
    const { wrapper } = getTreeVm(
      `:props="defaultProps" default-expand-all show-checkbox :default-checked-keys="defaultCheckedKeys" node-key="id"`,
      {
        created() {
          this.defaultCheckedKeys = [1]
        },
      }
    )
    expect(wrapper.findAll('.el-checkbox .is-checked').length).toEqual(3)
  })

  test('defaultCheckedKeys & check-strictly', async () => {
    const { wrapper } = getTreeVm(
      `:props="defaultProps" default-expand-all show-checkbox :default-checked-keys="defaultCheckedKeys" node-key="id" check-strictly`,
      {
        created() {
          this.defaultCheckedKeys = [1]
        },
      }
    )
    expect(wrapper.findAll('.el-checkbox .is-checked').length).toEqual(1)
  })

  test('show checkbox', async () => {
    const { wrapper } = getTreeVm(`:props="defaultProps" show-checkbox`)

    const treeWrapper = wrapper.findComponent(Tree)
    const treeVm = treeWrapper.vm as InstanceType<typeof Tree>
    const secondNodeContentWrapper = treeWrapper.findAll(
      '.el-tree-node__content'
    )[1]
    const secondNodeCheckboxWrapper =
      secondNodeContentWrapper.find('.el-checkbox')
    const secondNodeExpandIconWrapper = secondNodeContentWrapper.find(
      '.el-tree-node__expand-icon'
    )

    expect(secondNodeCheckboxWrapper.exists()).toBe(true)
    await secondNodeCheckboxWrapper.trigger('click')

    expect(treeVm.getCheckedNodes().length).toEqual(3)
    expect(treeVm.getCheckedNodes(true).length).toEqual(2)

    await secondNodeExpandIconWrapper.trigger('click')
    await nextTick()

    const secondTreeNodeWrapper = treeWrapper.findAll('.el-tree-node')[1]
    const secondNodefirstLeafCheckboxWrapper = secondTreeNodeWrapper.find(
      '.el-tree-node__children .el-tree-node__content .el-checkbox'
    )

    await secondNodefirstLeafCheckboxWrapper.trigger('click')
    expect(treeVm.getCheckedNodes().length).toEqual(1)
  })

  test('check', async () => {
    const handleCheckMockFunction = vi.fn()
    const { wrapper } = getTreeVm(
      `:props="defaultProps" show-checkbox @check="handleCheck"`,
      {
        methods: {
          handleCheck: handleCheckMockFunction,
        },
      }
    )

    const secondNodeContentWrapper = wrapper.findAll(
      '.el-tree-node__content'
    )[1]
    const secondNodeCheckboxWrapper =
      secondNodeContentWrapper.find('.el-checkbox')
    expect(secondNodeCheckboxWrapper.exists()).toBe(true)

    await secondNodeCheckboxWrapper.trigger('click')
    await nextTick()

    expect(handleCheckMockFunction.mock.calls.length).toBe(1)
    const [data, args] = handleCheckMockFunction.mock.calls[0]
    expect(data.id).toEqual(2)
    expect(args.checkedNodes.length).toEqual(3)
  })

  test('check by clicking on leaf node', async () => {
    const { wrapper } = getTreeVm(`:props="defaultProps" show-checkbox`)
    const treeVm = wrapper.findComponent(Tree).vm

    expect(treeVm.getCheckedNodes().length).toEqual(0)

    const secondTreeNodeWrapper = wrapper.findAll('.el-tree-node')[2]
    await secondTreeNodeWrapper.trigger('click')

    const secondNodeContentWrapper = secondTreeNodeWrapper.findAll(
      '.el-tree-node__content'
    )[1]
    await secondNodeContentWrapper.trigger('click')

    expect(treeVm.getCheckedNodes().length).toEqual(1)
  })

  test('show-checkbox :check-on-click-leaf="false"', async () => {
    const { wrapper } = getTreeVm(
      `:props="defaultProps" show-checkbox :check-on-click-leaf="false"`
    )
    const treeVm = wrapper.findComponent(Tree).vm

    expect(treeVm.getCheckedNodes().length).toEqual(0)

    const secondTreeNodeWrapper = wrapper.findAll('.el-tree-node')[2]
    await secondTreeNodeWrapper.trigger('click')

    const secondNodeContentWrapper = secondTreeNodeWrapper.findAll(
      '.el-tree-node__content'
    )[1]
    await secondNodeContentWrapper.trigger('click')

    expect(treeVm.getCheckedNodes().length).toEqual(0)
  })

  test('setCheckedNodes', async () => {
    const { wrapper } = getTreeVm(
      `:props="defaultProps" show-checkbox node-key="id"`
    )
    const treeWrapper = wrapper.findComponent(Tree)
    const treeVm = treeWrapper.vm as InstanceType<typeof Tree>
    const secondNodeContentWrapper = wrapper.findAll(
      '.el-tree-node__content'
    )[1]
    const secondNodeCheckWrapper = secondNodeContentWrapper.find('.el-checkbox')
    await secondNodeCheckWrapper.trigger('click')

    expect(treeVm.getCheckedNodes().length).toEqual(3)
    expect(treeVm.getCheckedNodes(true).length).toEqual(2)

    treeVm.setCheckedNodes([])
    expect(treeVm.getCheckedNodes().length).toEqual(0)
  })

  test('setCheckedNodes with disabled node', async () => {
    const nodes = [
      {
        id: 1,
        label: 'Level one 1',
        children: [
          {
            id: 4,
            label: 'Level two 1-1',
            children: [
              {
                id: 9,
                label: 'Level three 1-1-1',
              },
              {
                id: 10,
                label: 'Level three 1-1-2',
              },
            ],
          },
        ],
      },
      {
        id: 2,
        label: 'Level one 2',
        children: [
          {
            id: 5,
            disabled: true,
            label: 'Level two 2-1',
          },
          {
            id: 6,
            label: 'Level two 2-2',
          },
        ],
      },
      {
        id: 3,
        label: 'Level one 3',
        children: [
          {
            id: 7,
            label: 'Level two 3-1',
          },
          {
            id: 8,
            label: 'Level two 3-2',
          },
        ],
      },
    ]
    const wrapper = mount(
      Object.assign({
        components: {
          'el-tree': Tree,
        },
        template: `
        <el-tree ref="tree" :data="data" :props="defaultProps" default-expand-all show-checkbox node-key="id"></el-tree>
      `,
        data() {
          return {
            data: nodes,
            defaultProps: {
              children: 'children',
              label: 'label',
            },
          }
        },
      })
    )
    const treeWrapper = wrapper.findComponent(Tree)
    const treeVm = treeWrapper.vm as InstanceType<typeof Tree>
    expect(treeVm.getCheckedNodes().length).toEqual(0)

    function flattenTree(data) {
      const result = []

      function flatten(node) {
        result.push(node)
        if (node?.children?.length) {
          node.children.forEach(flatten)
        }
      }

      data.forEach(flatten)
      return result
    }
    const list = flattenTree(nodes).filter((item) => !item.disabled)

    treeVm.setCheckedNodes(list)
    expect(treeVm.getCheckedNodes().length).toEqual(8)
  })

  test('setCheckedKeys', async () => {
    const { wrapper } = getTreeVm(
      `:props="defaultProps" show-checkbox node-key="id"`
    )
    const treeWrapper = wrapper.findComponent(Tree)
    const tree = treeWrapper.vm as InstanceType<typeof Tree>

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
    const { wrapper } = getTreeVm(
      `:props="defaultProps" checkStrictly show-checkbox node-key="id"`
    )
    const treeWrapper = wrapper.findComponent(Tree)
    const tree = treeWrapper.vm as InstanceType<typeof Tree>

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
    const { wrapper } = getTreeVm(
      `:props="defaultProps" show-checkbox node-key="id"`
    )
    const treeWrapper = wrapper.findComponent(Tree)
    const tree = treeWrapper.vm as InstanceType<typeof Tree>

    tree.setChecked(111, true, true)
    expect(tree.getCheckedNodes().length).toEqual(3)
    expect(tree.getCheckedKeys().length).toEqual(3)

    tree.setChecked(tree.data[0], false, true)
    expect(tree.getCheckedNodes().length).toEqual(0)
    expect(tree.getCheckedKeys().length).toEqual(0)
  })

  test('setCheckedKeys with leafOnly=false', async () => {
    const { wrapper } = getTreeVm(
      `:props="defaultProps" show-checkbox node-key="id"`
    )
    const treeWrapper = wrapper.findComponent(Tree)
    const tree = treeWrapper.vm as InstanceType<typeof Tree>

    tree.setCheckedKeys([1, 11, 111, 2], false)
    expect(tree.getCheckedNodes().length).toEqual(6)
    expect(tree.getCheckedKeys().length).toEqual(6)
  })

  test('setCheckedKeys with leafOnly=true', async () => {
    const { wrapper } = getTreeVm(
      `:props="defaultProps" show-checkbox node-key="id"`
    )
    const treeWrapper = wrapper.findComponent(Tree)
    const tree = treeWrapper.vm as InstanceType<typeof Tree>

    tree.setCheckedKeys([2], true)
    expect(tree.getCheckedNodes().length).toEqual(2)
    expect(tree.getCheckedKeys().length).toEqual(2)
  })

  test('setCurrentKey', async () => {
    const { wrapper } = getTreeVm(
      `:props="defaultProps" show-checkbox node-key="id"`
    )
    const treeWrapper = wrapper.findComponent(Tree)
    const tree = treeWrapper.vm as InstanceType<typeof Tree>

    tree.setCurrentKey(111)
    expect(tree.store.currentNode.data.id).toEqual(111)

    tree.setCurrentKey(null)
    expect(tree.store.currentNode).toEqual(null)
  })

  test('setCurrentKey should also auto expand parent', async () => {
    const { wrapper } = getTreeVm(
      `:props="defaultProps" show-checkbox node-key="id"`
    )
    const treeWrapper = wrapper.findComponent(Tree)
    const tree = treeWrapper.vm as InstanceType<typeof Tree>

    tree.setCurrentKey(111)
    await nextTick()
    expect(wrapper.find('.is-current').exists()).toBeTruthy()

    tree.setCurrentKey(null)
    await nextTick()
    expect(wrapper.find('.is-current').exists()).toBeFalsy()
  })

  test('setCurrentKey should not expand self', async () => {
    const { wrapper } = getTreeVm(
      `:props="defaultProps" show-checkbox node-key="id"`
    )
    const treeWrapper = wrapper.findComponent(Tree)
    const tree = treeWrapper.vm as InstanceType<typeof Tree>

    tree.setCurrentKey(1)
    await nextTick()
    await nextTick()
    await nextTick()
    expect(wrapper.text()).toBe('一级 1一级 2一级 3')
    expect(wrapper.findAll('.is-expanded')).toHaveLength(0)

    tree.setCurrentKey(11)
    await nextTick()
    await nextTick()
    await nextTick()
    expect(wrapper.text()).toBe('一级 1二级 1-1一级 2一级 3')
    expect(wrapper.findAll('.is-expanded')).toHaveLength(1)

    tree.setCurrentKey(111)
    await nextTick()
    await nextTick()
    await nextTick()
    expect(wrapper.text()).toBe('一级 1二级 1-1三级 1-1一级 2一级 3')
    expect(wrapper.findAll('.is-expanded')).toHaveLength(2)
  })

  test('setCurrentNode', async () => {
    const { wrapper } = getTreeVm(
      `:props="defaultProps" show-checkbox node-key="id"`
    )
    const treeWrapper = wrapper.findComponent(Tree)
    const tree = treeWrapper.vm as InstanceType<typeof Tree>

    tree.setCurrentNode({
      id: 111,
      label: '三级 1-1',
    } as Node)
    expect(tree.store.currentNode.data.id).toEqual(111)

    tree.setCurrentKey(null)
    expect(tree.store.currentNode).toEqual(null)
  })

  test('setCurrentNode should also auto expand parent', async () => {
    const { wrapper } = getTreeVm(
      `:props="defaultProps" show-checkbox node-key="id"`
    )
    const treeWrapper = wrapper.findComponent(Tree)
    const tree = treeWrapper.vm as InstanceType<typeof Tree>

    tree.setCurrentNode({
      id: 111,
      label: '三级 1-1',
    } as Node)
    await nextTick()
    expect(wrapper.find('.is-current').exists()).toBeTruthy()

    tree.setCurrentKey(null)
    await nextTick()
    expect(wrapper.find('.is-current').exists()).toBeFalsy()
  })

  test('setCurrentNode should not expand self', async () => {
    const { wrapper } = getTreeVm(
      `:props="defaultProps" show-checkbox node-key="id"`
    )
    await nextTick()
    const treeWrapper = wrapper.findComponent(Tree)
    const tree = treeWrapper.vm as InstanceType<typeof Tree>

    tree.setCurrentNode({
      id: 1,
      label: '一级 1-1',
    } as Node)
    await nextTick()
    await nextTick()
    await nextTick()
    expect(wrapper.text()).toBe('一级 1一级 2一级 3')
    expect(wrapper.findAll('.is-expanded')).toHaveLength(0)

    tree.setCurrentNode({
      id: 11,
      label: '二级 1-1',
    } as Node)
    await nextTick()
    await nextTick()
    await nextTick()
    expect(wrapper.text()).toBe('一级 1二级 1-1一级 2一级 3')
    expect(wrapper.findAll('.is-expanded')).toHaveLength(1)

    tree.setCurrentNode({
      id: 111,
      label: '三级 1-1',
    } as Node)
    await nextTick()
    await nextTick()
    await nextTick()
    expect(wrapper.text()).toBe('一级 1二级 1-1三级 1-1一级 2一级 3')
    expect(wrapper.findAll('.is-expanded')).toHaveLength(2)
  })

  test('getCurrentKey', async () => {
    const { wrapper } = getTreeVm(
      `:props="defaultProps" show-checkbox node-key="id"`
    )
    const treeWrapper = wrapper.findComponent(Tree)
    const tree = treeWrapper.vm as InstanceType<typeof Tree>

    tree.setCurrentKey(111)
    expect(tree.getCurrentKey()).toEqual(111)

    tree.setCurrentKey(null)
    expect(tree.getCurrentKey()).toEqual(null)
  })

  test('getCurrentNode', async () => {
    const { wrapper } = getTreeVm(
      `:props="defaultProps" show-checkbox node-key="id"`
    )
    const treeWrapper = wrapper.findComponent(Tree)
    const tree = treeWrapper.vm as InstanceType<typeof Tree>

    tree.setCurrentKey(111)
    expect(tree.getCurrentNode().id).toEqual(111)
  })

  test('getNode', async () => {
    const { wrapper } = getTreeVm(`:props="defaultProps" node-key="id"`)
    const treeWrapper = wrapper.findComponent(Tree)
    const tree = treeWrapper.vm as InstanceType<typeof Tree>

    const node = tree.getNode(111)
    expect(node.data.id).toEqual(111)
  })

  test('remove', async () => {
    const { wrapper } = getTreeVm(`:props="defaultProps" node-key="id"`)
    const treeWrapper = wrapper.findComponent(Tree)
    const tree = treeWrapper.vm as InstanceType<typeof Tree>

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
    const tree = treeWrapper.vm as InstanceType<typeof Tree>

    const nodeData = { id: 88, label: '88' }
    tree.append(nodeData, tree.getNode(1))

    expect(tree.data[0].children.length).toEqual(2)
    expect(tree.getNode(88).data).toEqual(nodeData)
  })

  test('insertBefore', async () => {
    const { wrapper } = getTreeVm(`:props="defaultProps" node-key="id"`)
    const treeWrapper = wrapper.findComponent(Tree)
    const tree = treeWrapper.vm as InstanceType<typeof Tree>

    const nodeData = { id: 88, label: '88' }
    tree.insertBefore(nodeData, tree.getNode(11))
    expect(tree.data[0].children.length).toEqual(2)
    expect(tree.data[0].children[0]).toEqual(nodeData)
    expect(tree.getNode(88).data).toEqual(nodeData)
  })

  test('insertAfter', async () => {
    const { wrapper } = getTreeVm(`:props="defaultProps" node-key="id"`)
    const treeWrapper = wrapper.findComponent(Tree)
    const tree = treeWrapper.vm as InstanceType<typeof Tree>

    const nodeData = { id: 88, label: '88' }
    tree.insertAfter(nodeData, tree.getNode(11))
    expect(tree.data[0].children.length).toEqual(2)
    expect(tree.data[0].children[1]).toEqual(nodeData)
    expect(tree.getNode(88).data).toEqual(nodeData)
  })

  test('set disabled checkbox', async () => {
    const { wrapper } = getDisableTreeVm(
      `:props="defaultProps" show-checkbox node-key="id" default-expand-all`
    )
    const nodeWrapper = wrapper.findAll('.el-tree-node__content')[2]
    const checkboxWrapper = nodeWrapper.find('.el-checkbox input')

    expect((checkboxWrapper.element as HTMLInputElement).disabled).toEqual(true)
  })

  test('check strictly', async () => {
    const { wrapper } = getTreeVm(
      `:props="defaultProps" show-checkbox check-strictly default-expand-all`
    )
    const treeWrapper = wrapper.findComponent(Tree)
    const secondNodeContentWrapper = wrapper.findAll(
      '.el-tree-node__content'
    )[3]
    const secondNodeCheckboxWrapper =
      secondNodeContentWrapper.find('.el-checkbox')
    await secondNodeCheckboxWrapper.trigger('click')
    expect(
      (treeWrapper.vm as InstanceType<typeof Tree>).getCheckedNodes().length
    ).toEqual(1)
    expect(
      (treeWrapper.vm as InstanceType<typeof Tree>).getCheckedNodes(true).length
    ).toEqual(0)

    const secondTreeNodeWrapper = treeWrapper.findAll('.el-tree-node')[3]
    const secondNodefirstLeafCheckboxWrapper = secondTreeNodeWrapper.find(
      '.el-tree-node__children .el-tree-node__content .el-checkbox'
    )
    await secondNodefirstLeafCheckboxWrapper.trigger('click')
    expect(
      (treeWrapper.vm as InstanceType<typeof Tree>).getCheckedNodes().length
    ).toEqual(2)
  })

  test('render content', async () => {
    const { wrapper } = getTreeVm(
      `:props="defaultProps" :render-content="renderContent"`,
      {
        methods: {
          renderContent(h, node) {
            return h('div', { class: 'custom-content' }, [
              h('button', { class: 'el-button' }, [node.node.label]),
            ])
          },
        },
      }
    )
    const firstNodeWrapper = wrapper.find('.el-tree-node__content')
    expect(firstNodeWrapper.find('.custom-content').exists()).toBe(true)

    const buttonWrapper = firstNodeWrapper.find('.custom-content button')
    expect(buttonWrapper.exists()).toBe(true)
    expect(buttonWrapper.text()).toEqual('一级 1')
  })

  test('custom-node-class', async () => {
    const { wrapper } = getTreeVm(
      `:props="{class:(data)=>{return data.id===11?'is-test':null}}" default-expand-all highlight-current node-key="id" :current-node-key="11"`
    )

    const currentNodeLabelWrapper = wrapper.find(
      '.is-test .el-tree-node__label'
    )

    expect(currentNodeLabelWrapper.text()).toEqual('二级 1-1')
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
    const { wrapper } = getTreeVm(
      `:props="defaultProps" lazy :load="loadNode" show-checkbox`,
      {
        methods: {
          loadNode(node, resolve) {
            if (node.level === 0) {
              return resolve([{ label: 'region1' }, { label: 'region2' }])
            }
            if (node.level > 4) return resolve([])
            setTimeout(() => {
              resolve([
                {
                  label: `zone${this.count++}`,
                },
                {
                  label: `zone${this.count++}`,
                },
              ])
            }, 50)
          },
        },
      }
    )

    let nodeWrappers = wrapper.findAll('.el-tree-node__content')

    expect(nodeWrappers.length).toEqual(2)
    vi.useFakeTimers()
    await nodeWrappers[0].trigger('click')
    vi.runAllTimers()
    vi.useRealTimers()
    await nextTick() // wait load finish
    nodeWrappers = wrapper.findAll('.el-tree-node__content')
    expect(nodeWrappers.length).toEqual(4)
  })

  test('lazy defaultChecked', async () => {
    const { wrapper } = getTreeVm(
      `:props="defaultProps" node-key="id" lazy :load="loadNode" show-checkbox`,
      {
        methods: {
          loadNode(node, resolve) {
            if (node.level === 0) {
              return resolve([
                { label: 'region1', id: this.count++ },
                { label: 'region2', id: this.count++ },
              ])
            }
            if (node.level > 4) return resolve([])
            setTimeout(() => {
              resolve([
                {
                  label: `zone${this.count}`,
                  id: this.count++,
                },
                {
                  label: `zone${this.count}`,
                  id: this.count++,
                },
              ])
            }, 50)
          },
        },
      }
    )

    const treeWrapper = wrapper.findComponent(Tree)
    const tree = treeWrapper.vm as InstanceType<typeof Tree>
    const firstNodeWrapper = treeWrapper.find('.el-tree-node__content')
    expect(firstNodeWrapper.find('.is-indeterminate').exists()).toEqual(false)

    tree.store.setCheckedKeys([3])
    vi.useFakeTimers()
    await firstNodeWrapper.find('.el-tree-node__expand-icon').trigger('click')
    vi.runAllTimers()
    vi.useRealTimers()
    await nextTick()

    expect(firstNodeWrapper.find('.is-indeterminate').exists()).toEqual(true)
    const childWrapper = treeWrapper.findAll('.el-tree-node__content')[1]
    expect(childWrapper.find('input').element.checked).toEqual(true)
  })

  test('lazy expandOnChecked', async () => {
    const { wrapper } = getTreeVm(
      `:props="defaultProps" node-key="id" lazy :load="loadNode" show-checkbox check-descendants`,
      {
        methods: {
          loadNode(node, resolve) {
            if (node.level === 0) {
              return resolve([
                { label: 'region1', id: this.count++ },
                { label: 'region2', id: this.count++ },
              ])
            }
            if (node.level > 2) return resolve([])
            setTimeout(() => {
              resolve([
                {
                  label: `zone${this.count}`,
                  id: this.count++,
                },
                {
                  label: `zone${this.count}`,
                  id: this.count++,
                },
              ])
            }, 10)
          },
        },
      }
    )

    const treeWrapper = wrapper.findComponent(Tree)
    const tree = treeWrapper.vm as InstanceType<typeof Tree>

    vi.useFakeTimers()
    tree.store.setCheckedKeys([1])
    vi.runAllTimers()
    vi.useRealTimers()
    await nextTick()
    expect(tree.getCheckedKeys().length).toEqual(7)
  })

  test('lazy without expandOnChecked', async () => {
    const { wrapper } = getTreeVm(
      `:props="defaultProps" node-key="id" lazy :load="loadNode" show-checkbox`,
      {
        methods: {
          loadNode(node, resolve) {
            if (node.level === 0) {
              return resolve([
                { label: 'region1', id: this.count++ },
                { label: 'region2', id: this.count++ },
              ])
            }
            if (node.level > 4) return resolve([])
            setTimeout(() => {
              resolve([
                {
                  label: `zone${this.count}`,
                  id: this.count++,
                },
                {
                  label: `zone${this.count}`,
                  id: this.count++,
                },
              ])
            }, 50)
          },
        },
      }
    )

    const treeWrapper = wrapper.findComponent(Tree)
    const tree = treeWrapper.vm as InstanceType<typeof Tree>

    tree.store.setCheckedKeys([1])
    await nextTick()

    const nodeWrappers = treeWrapper.findAll('.el-tree-node__content')
    expect(nodeWrappers[0].find('input').element.checked).toEqual(true)
    expect(nodeWrappers.length).toEqual(2)
  })

  test('accordion', async () => {
    const { wrapper } = getTreeVm(`:props="defaultProps" accordion`)

    const firstNodeContentWrapper = wrapper.find('.el-tree-node__content')
    const secondNodeContentWrapper = wrapper.find(
      '.el-tree-node:nth-child(2) .el-tree-node__content'
    )
    await firstNodeContentWrapper.trigger('click')

    expect(wrapper.find('.el-tree-node').classes('is-expanded')).toBe(true)
    await secondNodeContentWrapper.trigger('click')
    expect(wrapper.find('.el-tree-node').classes('is-expanded')).toBe(false)
  })

  test('handleNodeOpen & handleNodeClose', async () => {
    const { wrapper, vm } = getTreeVm(
      `:props="defaultProps" lazy :load="loadNode" @node-expand="handleNodeOpen" @node-collapse="handleNodeClose"`,
      {
        methods: {
          loadNode(node, resolve) {
            if (node.level === 0) {
              return resolve([{ label: 'region1' }, { label: 'region2' }])
            }
            if (node.level > 4) return resolve([])
            nextTick(() => {
              resolve([
                {
                  label: `zone${this.count++}`,
                },
                {
                  label: `zone${this.count++}`,
                },
              ])
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
      }
    )

    const firstNodeContentWrapper = wrapper.find('.el-tree-node__content')
    const firstNodeWrapper = wrapper.find('.el-tree-node')

    expect(firstNodeWrapper.find('.el-tree-node__children').exists()).toBe(
      false
    )

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
    const { wrapper } = getTreeVm(
      `:props="defaultProps" show-checkbox node-key="id" default-expand-all`
    )

    const treeWrapper = wrapper.findComponent(Tree)
    const tree = treeWrapper.vm as InstanceType<typeof Tree>

    tree.updateKeyChildren(1, [
      {
        id: 111,
        label: '三级 1-1',
      },
    ])

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

  test('navigate with defaultExpandAll', () => {
    const { wrapper } = getTreeVm(``, {
      template: `
        <div>
          <el-tree default-expand-all ref="tree1" :data="data" node-key="id" :props="defaultProps"></el-tree>
        </div>
      `,
    })
    const tree = wrapper.findComponent({ name: 'ElTree' })
    expect(
      Object.values(
        (tree.vm as InstanceType<typeof Tree>).store.nodesMap
      ).filter((item) => item.canFocus).length
    ).toBe(9)
  })

  test('navigate up', async () => {
    const { wrapper } = getTreeVm(``, {
      template: `
        <div>
          <el-tree ref="tree1" :data="data" node-key="id" :props="defaultProps"></el-tree>
        </div>
      `,
    })
    let flag = false
    function handleFocus() {
      return () => (flag = true)
    }
    await nextTick()
    const tree = wrapper.findComponent({ name: 'ElTree' })
    const targetElement = wrapper.find('div[data-key="3"]').element
    const fromElement = wrapper.find('div[data-key="1"]').element
    defineGetter(targetElement, 'focus', handleFocus)
    ;(tree.vm as InstanceType<typeof Tree>).setCurrentKey(1)
    expect(fromElement.classList.contains('is-focusable')).toBeTruthy()
    fromElement.dispatchEvent(
      new KeyboardEvent('keydown', {
        code: 'ArrowUp',
        bubbles: true,
        cancelable: false,
      })
    )
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
    function handleFocus() {
      return () => (flag = true)
    }
    await nextTick()
    const tree = wrapper.findComponent({ name: 'ElTree' })
    const targetElement = wrapper.find('div[data-key="2"]').element
    const fromElement = wrapper.find('div[data-key="1"]').element
    defineGetter(targetElement, 'focus', handleFocus)
    ;(tree.vm as InstanceType<typeof Tree>).setCurrentKey(1)
    expect(fromElement.classList.contains('is-focusable')).toBeTruthy()
    fromElement.dispatchEvent(
      new KeyboardEvent('keydown', {
        code: 'ArrowDown',
        bubbles: true,
        cancelable: false,
      })
    )
    expect(flag).toBe(true)
  })

  test('navigate with disabled', async () => {
    const wrapper = mount({
      template: `
        <div>
          <el-tree ref="tree1" :data="data" node-key="id" :props="defaultProps"></el-tree>
        </div>
      `,
      components: {
        'el-tree': Tree,
      },
      data() {
        return {
          data: [
            {
              id: 1,
              label: '一级 1',
              children: [
                {
                  id: 11,
                  label: '二级 1-1',
                  children: [
                    {
                      id: 111,
                      label: '三级 1-1',
                      disabled: true,
                    },
                  ],
                },
              ],
            },
            {
              id: 2,
              label: '一级 2',
              disabled: true,
              children: [
                {
                  id: 21,
                  label: '二级 2-1',
                },
                {
                  id: 22,
                  label: '二级 2-2',
                },
              ],
            },
            {
              id: 3,
              label: '一级 3',
              children: [
                {
                  id: 31,
                  label: '二级 3-1',
                },
                {
                  id: 32,
                  label: '二级 3-2',
                },
              ],
            },
          ],
          defaultProps: {
            children: 'children',
            label: 'label',
            disabled: 'disabled',
          },
        }
      },
    })
    let flag = false
    function handleFocus() {
      return () => (flag = true)
    }
    await nextTick()
    const tree = wrapper.findComponent({ name: 'ElTree' })
    const targetElement = wrapper.find('div[data-key="3"]').element
    const fromElement = wrapper.find('div[data-key="1"]').element
    defineGetter(targetElement, 'focus', handleFocus)
    ;(tree.vm as InstanceType<typeof Tree>).setCurrentKey(1)
    expect(fromElement.classList.contains('is-focusable')).toBeTruthy()
    fromElement.dispatchEvent(
      new KeyboardEvent('keydown', {
        code: 'ArrowDown',
        bubbles: true,
        cancelable: false,
      })
    )
    expect(flag).toBe(true)
  })

  test('custom children and label', async () => {
    const wrapper = mount({
      template: `
        <div>
          <el-tree ref="tree1" :data="data" node-key="id" :props="defaultProps"></el-tree>
          <el-button @click="addNewNode">add</el-button>
        </div>
      `,
      components: {
        'el-tree': Tree,
        'el-button': Button,
      },
      data() {
        return {
          data: [
            {
              id: 1,
              l: '一级 1',
              c: [
                {
                  id: 11,
                  l: '二级 1-1',
                  c: [
                    {
                      id: 111,
                      l: '三级 1-1',
                    },
                  ],
                },
              ],
            },
            {
              id: 2,
              l: '一级 2',
              c: [
                {
                  id: 21,
                  l: '二级 2-1',
                },
                {
                  id: 22,
                  l: '二级 2-2',
                },
              ],
            },
            {
              id: 3,
              l: '一级 3',
              c: [
                {
                  id: 31,
                  l: '二级 3-1',
                },
                {
                  id: 32,
                  l: '二级 3-2',
                },
              ],
            },
          ],
          defaultProps: {
            children: 'c',
            label: 'l',
          },
        }
      },
      methods: {
        addNewNode() {
          this.data[0].c.push({
            id: 12,
            l: 'new node',
          })
        },
      },
    })
    const tree = wrapper.findComponent({ name: 'ElTree' })
    const button = wrapper.findComponent({ name: 'ElButton' })
    const firstNode = wrapper.find('.el-tree-node')

    expect(tree.vm.getNode(1).data.l).toEqual('一级 1')
    expect(tree.vm.getNode(1).data.c[0].l).toEqual('二级 1-1')

    firstNode.trigger('click')
    await nextTick()

    const firstChildrenNode = firstNode.element.querySelector(
      '.el-tree-node__children'
    )
    expect(firstChildrenNode.children.length).toEqual(1)

    button.trigger('click')
    await nextTick()

    expect(tree.vm.getNode(1).data.c[1].l).toEqual('new node')
    expect(firstChildrenNode.children.length).toEqual(2)
    expect(firstChildrenNode.children[1].textContent).toEqual('new node')
  })

  test('navigate with lazy and without node-key', async () => {
    const wrapper = mount({
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
      data() {
        return {
          defaultProps: {
            children: 'children',
            label: 'label',
            disabled: 'disabled',
          },
          count: 0,
        }
      },
      methods: {
        loadNode(node: Node, resolve: typeof Promise.resolve) {
          if (node.level === 0) {
            return resolve([{ name: 'region1' }, { name: 'region2' }])
          }
          if (node.level > 3) return resolve([])

          let hasChild: boolean
          if (node.data.name === 'region1') {
            hasChild = true
          } else if (node.data.name === 'region2') {
            hasChild = false
          } else {
            hasChild = false
          }

          let data: { name: string }[]
          if (hasChild) {
            data = [
              {
                name: `zone${++this.count}`,
              },
              {
                name: `zone${++this.count}`,
              },
            ]
          } else {
            data = []
          }
          resolve(data)
        },
      },
    })
    let flag = false
    function handleFocus() {
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
    await nextTick()
    await nextTick()
    expect(
      Object.values((tree.vm as InstanceType<typeof Tree>).store.nodesMap)
    ).toHaveLength(5) // The root node (void node) + 4 child nodes (region1, region2, zone1, zone2)
    expect(
      Object.values(
        Object.values(
          (tree.vm as InstanceType<typeof Tree>).store.nodesMap
        ).filter((item) => item.canFocus).length === 4
      )
    ).toBeTruthy()
    // collapse
    region1.dispatchEvent(new MouseEvent('click'))
    expect(
      Object.values(
        Object.values(
          (tree.vm as InstanceType<typeof Tree>).store.nodesMap
        ).filter((item) => item.canFocus).length === 2
      )
    ).toBeTruthy()
    // ArrowDown, region2 focus
    region1.dispatchEvent(
      new KeyboardEvent('keydown', {
        code: 'ArrowDown',
        bubbles: true,
        cancelable: false,
      })
    )
    expect(flag).toBe(true)
    defineGetter(region1, 'focus', handleFocus)
    // ArrowDown, region1 focus
    region2.dispatchEvent(
      new KeyboardEvent('keydown', {
        code: 'ArrowDown',
        bubbles: true,
        cancelable: false,
      })
    )
    expect(flag).toBe(false)
  })

  test('customize some node contents', async () => {
    const wrapper = mount({
      template: `
        <el-tree :data="data">
          <template #default="{ data }">
            <div v-if="data.id === '1'">
              customize: {{ data.label }}
            </div>
          </template>
        </el-tree>
      `,
      components: {
        'el-tree': Tree,
      },
      data() {
        return {
          data: [
            {
              id: '1',
              label: 'Level one 1',
              children: [
                {
                  id: '1-1',
                  label: 'Level two 1-1',
                  children: [
                    {
                      label: 'Level three 1-1-1',
                    },
                  ],
                },
              ],
            },
            {
              id: '2',
              label: 'Level one 2',
              children: [
                {
                  id: '2-1',
                  label: 'Level two 2-1',
                  children: [
                    {
                      label: 'Level three 2-1-1',
                    },
                  ],
                },
              ],
            },
          ],
        }
      },
    })
    const nodeContentWrapper1 = wrapper.findAll('.el-tree-node__content')[0]
    const nodeContentWrapper2 = wrapper.findAll('.el-tree-node__content')[1]

    const nodeLabelWrapper1 = nodeContentWrapper1.find('div')
    const nodeLabelWrapper2 = nodeContentWrapper2.find(
      'span.el-tree-node__label'
    )
    expect(nodeLabelWrapper1.text()).toEqual('customize: Level one 1')
    expect(nodeLabelWrapper2.text()).toEqual('Level one 2')
  })
})
