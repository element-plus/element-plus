import { nextTick, reactive, ref } from 'vue'
import { mount } from '@vue/test-utils'
import { afterEach, beforeEach, describe, expect, test, vi } from 'vitest'
import { CircleClose } from '@element-plus/icons-vue'
import TreeSelect from '../src/tree-select.vue'
import Tree from '@element-plus/components/tree/src/tree.vue'
import defineGetter from '@element-plus/test-utils/define-getter'
import { EVENT_CODE } from '@element-plus/constants'

import type { TreeSelectInstance } from '../src/instance'
import type { RenderFunction } from 'vue'
import type { VueWrapper } from '@vue/test-utils'

// Keep track of all mounted wrappers for cleanup
const mountedWrappers: VueWrapper<any>[] = []

beforeEach(() => {
  document.body.innerHTML = ''
})

afterEach(async () => {
  mountedWrappers.forEach((wrapper) => {
    if (wrapper && wrapper.exists()) {
      wrapper.unmount()
    }
  })
  mountedWrappers.length = 0
  document.body.innerHTML = ''
  vi.clearAllTimers()

  const frameIds = new Set<number>()
  const originalRequestAnimationFrame = global.requestAnimationFrame

  global.requestAnimationFrame = function (cb) {
    const id = originalRequestAnimationFrame((timestamp) => {
      frameIds.delete(id)
      cb(timestamp)
    })
    frameIds.add(id)
    return id
  }

  const cancelAllAnimationFrames = () => {
    frameIds.forEach((id) => global.cancelAnimationFrame(id))
    frameIds.clear()
  }

  cancelAllAnimationFrames()
  await new Promise((resolve) => setTimeout(resolve, 0))
})

const createComponent = ({
  slots = {},
  props = {},
}: {
  slots?: Record<string, any>
  props?: (typeof TreeSelect)['props']
} = {}) => {
  const wrapperRef = ref<TreeSelectInstance>()
  const defaultData = ref([
    {
      value: 1,
      label: '一级 1',
      children: [
        {
          value: 11,
          label: '二级 1-1',
          children: [
            {
              value: 111,
              label: '三级 1-1',
            },
          ],
        },
      ],
    },
  ])

  const bindProps = reactive({
    modelValue: ref(),
    data: defaultData,
    renderAfterExpand: false,
    ...props,
  })

  const wrapper = mount(
    {
      render() {
        return (
          <TreeSelect
            {...bindProps}
            onUpdate:modelValue={(val: string) => (bindProps.modelValue = val)}
            ref={(val: TreeSelectInstance) => (wrapperRef.value = val)}
            v-slots={slots}
          />
        )
      },
    },
    {
      attachTo: 'body',
    }
  )

  // Add wrapper to tracking array for cleanup
  mountedWrappers.push(wrapper)

  return {
    wrapper,
    getWrapperRef: () =>
      new Promise<TreeSelectInstance>((resolve) =>
        nextTick(() =>
          resolve(wrapperRef.value! as unknown as TreeSelectInstance)
        )
      ),
    select: wrapper.findComponent({
      name: 'ElSelect',
    }) as VueWrapper<TreeSelectInstance['selectRef']>,
    tree: wrapper.findComponent({ name: 'ElTree' }) as VueWrapper<
      TreeSelectInstance['treeRef']
    >,
  }
}

describe('TreeSelect.vue', () => {
  afterEach(() => {
    vi.clearAllTimers()
    vi.useRealTimers()
    document.body.innerHTML = ''
  })
  test('render test', async () => {
    const { wrapper, tree } = createComponent({
      props: {
        defaultExpandAll: true,
      },
    })

    expect(wrapper.find('.el-tree')).toBeTruthy()
    expect(wrapper.find('.el-select')).toBeTruthy()

    expect(tree.findAll('.el-tree > .el-tree-node').length).toBe(1)
    expect(tree.findAll('.el-tree .el-tree-node').length).toBe(3)
    expect(tree.findAll('.el-tree .el-select-dropdown__item').length).toBe(3)

    wrapper.findComponent(TreeSelect).vm.data[0].children = []

    await nextTick()

    expect(tree.findAll('.el-tree .el-tree-node').length).toBe(1)
  })

  test('render tree-select with default value and persistent is false', async () => {
    // This is convenient for testing the default value label rendering when persistent is false.
    process.env.RUN_TEST_WITH_PERSISTENT = 'true'
    const { select, wrapper } = createComponent({
      props: {
        persistent: false,
        modelValue: 1,
      },
    })

    await nextTick()

    expect(select.vm.modelValue).toBe(1)
    expect(select.vm.states.selectedLabel).toBe('一级 1')
    expect(wrapper.find('.el-select__placeholder').text()).toBe('一级 1')
    delete process.env.RUN_TEST_WITH_PERSISTENT
  })

  test('render tree-select with dynamic class', async () => {
    const isClass = ref(false)
    const { wrapper } = createComponent({
      props: {
        class: {
          'dynamic-class': isClass,
        },
      },
    })

    expect(wrapper.find('.el-select')).toBeTruthy()

    isClass.value = true
    await nextTick()
    const select = wrapper.find('.el-select')
    const classes = select.classes()
    expect(classes).toContain('dynamic-class')
  })

  test('modelValue', async () => {
    const value = ref(1)
    const { getWrapperRef, select, tree } = createComponent({
      props: {
        modelValue: value,
        checkStrictly: true,
        showCheckbox: true,
        checkOnClickNode: true,
      },
    })

    const wrapperRef = await getWrapperRef()

    await nextTick()
    expect(select.vm.modelValue).toBe(1)
    expect(wrapperRef.treeRef.getCheckedKeys()).toEqual([1])

    value.value = 11
    await nextTick(nextTick)
    expect(select.vm.modelValue).toBe(11)
    expect(wrapperRef.treeRef.getCheckedKeys()).toEqual([11])

    await tree
      .findAll('.el-select-dropdown__item')
      .slice(-1)[0]
      .trigger('click')
    await nextTick()
    expect(select.vm.modelValue).toBe(111)
    expect(wrapperRef.treeRef.getCheckedKeys()).toEqual([111])

    await tree.find('.el-tree-node__content').trigger('click')
    await nextTick()
    expect(select.vm.modelValue).toBe(1)
    expect(wrapperRef.treeRef.getCheckedKeys()).toEqual([1])

    await tree.findAll('.el-checkbox__original')[1].trigger('click')
    await nextTick()
    expect(select.vm.modelValue).toBe(11)
    expect(wrapperRef.treeRef.getCheckedKeys()).toEqual([11])
  })

  test('disabled', async () => {
    const { wrapper, tree } = createComponent({
      props: {
        data: [
          {
            value: '1',
            label: '1',
            children: [
              {
                value: '2',
                label: '2',
                disabled: true,
              },
            ],
          },
        ],
        showCheckbox: true,
        checkStrictly: true,
        defaultExpandAll: true,
        checkOnClickNode: true,
      },
    })

    await nextTick()
    await tree.find('.el-tree-node').trigger('click')
    await tree.find('.el-tree-node .el-checkbox.is-disabled').trigger('click')
    await tree
      .find('.el-tree-node .el-select-dropdown__item.is-disabled')
      .trigger('click')
    await nextTick()
    expect(wrapper.findComponent(TreeSelect).vm.modelValue).toBe('1')
  })

  test('multiple', async () => {
    const value = ref([1])
    const { getWrapperRef, select, tree } = createComponent({
      props: {
        modelValue: value,
        checkStrictly: true,
        showCheckbox: true,
        multiple: true,
        checkOnClickNode: true,
      },
    })

    const wrapperRef = await getWrapperRef()

    await nextTick()
    expect(select.vm.modelValue).toEqual([1])
    expect(wrapperRef.treeRef.getCheckedKeys()).toEqual([1])

    value.value = [11]
    await nextTick(nextTick)
    expect(select.vm.modelValue).toEqual([11])
    expect(wrapperRef.treeRef.getCheckedKeys()).toEqual([11])

    await tree
      .findAll('.el-select-dropdown__item')
      .slice(-1)[0]
      .trigger('click')
    await nextTick()
    expect(select.vm.modelValue).toEqual([11, 111])
    expect(wrapperRef.treeRef.getCheckedKeys()).toEqual([11, 111])

    await tree.find('.el-tree-node__content').trigger('click')
    await nextTick()
    expect(select.vm.modelValue).toEqual([1, 11, 111])
    expect(wrapperRef.treeRef.getCheckedKeys()).toEqual([1, 11, 111])

    await tree.findAll('.el-checkbox')[1].trigger('click')
    await nextTick()
    expect(select.vm.modelValue).toEqual([1, 111])
    expect(wrapperRef.treeRef.getCheckedKeys()).toEqual([1, 111])
  })

  test('filter', async () => {
    const { tree } = createComponent({
      props: {
        filterable: true,
      },
    })

    tree.vm.filter('一级 1')
    await nextTick()
    expect(tree.findAll('.el-tree-node:not(.is-hidden)').length).toBe(1)
    expect(document.querySelector('.el-select-dropdown__empty')).toBeFalsy()
    tree.vm.filter('no match')
    await vi.waitFor(() => {
      expect(document.querySelector('.el-select-dropdown__empty')).toBeTruthy()
    })
  })

  test('props', async () => {
    const { wrapper, select, tree } = createComponent({
      props: {
        data: [
          {
            id: '1',
            name: '1',
            childrens: [
              {
                id: '2',
                name: '2',
              },
            ],
          },
        ],
        props: {
          label: 'name',
          children: 'childrens',
        },
        valueKey: 'id',
      },
    })

    await nextTick()
    expect(tree.find('.el-select-dropdown__item').text()).toBe('1')
    await wrapper.setProps({ modelValue: '2' })
    expect(select.vm.states.selectedLabel).toBe('2')
  })

  test('slots', async () => {
    const { select, tree } = createComponent({
      slots: {
        default: ({ data }: { data: { label: string } }) => `123${data.label}`,
        prefix: () => 'prefix',
      },
    })

    await nextTick()
    expect(tree.find('.el-select-dropdown__item').text()).toBe('123一级 1')
    expect(select.find('.el-select__prefix').text()).toBe('prefix')
  })

  test('renderContent', async () => {
    const { tree } = createComponent({
      props: {
        renderContent: (
          h: RenderFunction,
          { data }: { data: { label: string } }
        ) => {
          return `123${data.label}`
        },
      },
    })

    await nextTick()
    expect(tree.find('.el-select-dropdown__item').text()).toBe('123一级 1')
  })

  test('lazy', async () => {
    const { tree } = createComponent({
      props: {
        data: [
          {
            value: 1,
            label: 1,
          },
        ],
        lazy: true,
        load: (node: object, resolve: (p: any) => any[]) => {
          resolve([{ value: 2, label: 2, isLeaf: true }])
        },
      },
    })

    await nextTick()
    await tree.find('.el-tree-node').trigger('click')
    await nextTick()
    expect(tree.find('.el-tree-node .el-tree-node').text()).toBe('2')
  })

  test('events', async () => {
    const onNodeClick = vi.fn()
    const { tree } = createComponent({
      props: {
        onNodeClick,
      },
    })
    await nextTick()
    await tree.find('.el-tree-node').trigger('click')
    await nextTick()
    expect(onNodeClick).toBeCalled()
  })

  test('check-strictly showCheckbox click node', async () => {
    const { getWrapperRef, select, tree } = createComponent({
      props: {
        checkStrictly: true,
        showCheckbox: true,
        multiple: true,
      },
    })

    const wrapperRef = await getWrapperRef()
    await tree.findAll('.el-tree-node__content')[0].trigger('click')
    await nextTick()
    expect(select.vm.modelValue).toEqual([])
    expect(wrapperRef.treeRef.getCheckedKeys()).toEqual([])

    await tree
      .findAll('.el-tree-node__content .el-checkbox')[0]
      .trigger('click')
    await nextTick()
    expect(select.vm.modelValue).toEqual([1])
    expect(wrapperRef.treeRef.getCheckedKeys()).toEqual([1])
  })

  test('check-strictly showCheckbox checkOnClickNode click node', async () => {
    const { getWrapperRef, select, tree } = createComponent({
      props: {
        checkStrictly: true,
        showCheckbox: true,
        multiple: true,
        checkOnClickNode: true,
      },
    })

    const wrapperRef = await getWrapperRef()
    await tree.findAll('.el-tree-node__content')[0].trigger('click')
    await nextTick()
    expect(select.vm.modelValue).toEqual([1])
    expect(wrapperRef.treeRef.getCheckedKeys()).toEqual([1])

    await tree
      .findAll('.el-tree-node__content .el-checkbox')[0]
      .trigger('click')
    await nextTick()
    expect(select.vm.modelValue).toEqual([])
    expect(wrapperRef.treeRef.getCheckedKeys()).toEqual([])
  })

  test('only show checkbox', async () => {
    const { select, tree } = createComponent({
      props: {
        showCheckbox: true,
      },
    })

    // check child node when folder node checked,
    // value.value will be 111
    await tree
      .find('.el-tree-node__content .el-checkbox__original')
      .trigger('click')
    await nextTick()
    expect(select.vm.modelValue).equal(111)

    // unselect when has child checked
    await tree
      .find('.el-tree-node__content .el-checkbox__original')
      .trigger('click')
    await nextTick()
    expect(select.vm.modelValue).toBe(undefined)
  })

  test('show checkbox and check on click node', async () => {
    const { select, tree } = createComponent({
      props: {
        showCheckbox: true,
        checkOnClickNode: true,
      },
    })

    // check child node when folder node checked,
    // value.value will be 111
    await tree.findAll('.el-tree-node__content').slice(-1)[0].trigger('click')
    await nextTick()
    expect(select.vm.modelValue).equal(111)

    // unselect when has child checked
    await tree.findAll('.el-tree-node__content').slice(-1)[0].trigger('click')
    await nextTick()
    expect(select.vm.modelValue).toBe(undefined)
  })

  test('expand selected node`s parent in first time', async () => {
    const value = ref(111)
    const { tree } = createComponent({
      props: {
        modelValue: value,
      },
    })

    expect(tree.findAll('.is-expanded[data-key="1"]').length).toBe(1)
    expect(tree.findAll('.is-expanded[data-key="11"]').length).toBe(1)
  })

  test('expand-on-click-node', async () => {
    const { wrapper, tree } = createComponent({
      props: {
        expandOnClickNode: false,
        checkOnClickNode: true,
      },
    })

    await tree.findAll('.el-tree-node__content')[0].trigger('click')
    expect(
      tree.findAll('.el-tree-node__children')[0].attributes('style')
    ).toContain('display: none;')

    await wrapper.setProps({ expandOnClickNode: true })
    await tree.findAll('.el-tree-node__content')[0].trigger('click')
    expect(
      tree.findAll('.el-tree-node__children')[0].attributes('style')
    ).not.toContain('display: none;')
  })

  test('navigate down', async () => {
    const { wrapper } = createComponent({
      props: {
        defaultExpandAll: true,
      },
    })

    await nextTick()

    let flag = false
    function handleFocus() {
      return () => (flag = true)
    }
    vi.useFakeTimers()
    const selectWrapper = wrapper.find('.el-select__wrapper')
    await selectWrapper.trigger('click')
    await selectWrapper.trigger('focus')
    const focused = wrapper.find('.is-focused')
    expect(focused.exists()).toBe(true)
    await selectWrapper
      .find('input')
      .trigger('keydown', { key: EVENT_CODE.down })
    vi.runAllTimers()

    expect((document.activeElement as HTMLElement).dataset.key).toBe('1')

    const treeWrapper = wrapper.findComponent(Tree)
    const allNodes = treeWrapper.findAll('.el-tree-node')
    const len = allNodes.length
    for (let i = 0; i < len; i++) {
      if (allNodes[i + 1]) {
        defineGetter(allNodes[i + 1].element, 'focus', handleFocus)
        // 模拟按下下箭头键
        allNodes[i].element.dispatchEvent(
          new KeyboardEvent('keydown', {
            code: EVENT_CODE.down,
            bubbles: true,
            cancelable: false,
          })
        )
        expect(flag).toBe(true)
        flag = false
      }
    }
  })

  test('navigate up', async () => {
    const { wrapper } = createComponent({
      props: {
        defaultExpandAll: true,
      },
    })

    await nextTick()
    vi.useFakeTimers()
    const selectWrapper = wrapper.find('.el-select__wrapper')
    await selectWrapper.trigger('click')
    await selectWrapper.trigger('focus')
    const focused = wrapper.find('.is-focused')
    expect(focused.exists()).toBe(true)
    await selectWrapper.find('input').trigger('keydown', { key: EVENT_CODE.up })
    vi.runAllTimers()
    expect((document.activeElement as HTMLElement).dataset.key).toBe('111')
  })

  test('show correct label when child options are not rendered', async () => {
    const modelValue = ref<number>()
    const { select } = createComponent({
      props: {
        modelValue,
        renderAfterExpand: true,
      },
    })

    await nextTick()
    expect(select.vm.states.selectedLabel).toBe('')

    modelValue.value = 111
    await nextTick()
    expect(select.vm.states.selectedLabel).toBe('三级 1-1')
  })

  test('show correct label when lazy load', async () => {
    const modelValue = ref<number>(1)
    const cacheData = reactive([{ value: 3, label: '3-label' }])
    const { select } = createComponent({
      props: {
        data: [],
        modelValue,
        lazy: true,
        load: (node: object, resolve: (p: any) => any[]) => {
          resolve([{ value: 2, label: '2-label', isLeaf: true }])
        },
        cacheData,
      },
    })

    // no load & no cache will be default value
    await nextTick()
    expect(select.vm.states.selectedLabel).toBe(1)

    // no load & has cache will be correct label
    modelValue.value = 3
    await nextTick()
    expect(select.vm.states.selectedLabel).toBe('3-label')

    // no load & set cache lazy will be correct label
    modelValue.value = 1
    await nextTick()
    cacheData.push({
      value: 1,
      label: '1-label',
    })
    await nextTick()
    expect(select.vm.states.selectedLabel).toBe('1-label')
  })

  describe('filter method and remote method', () => {
    const data = ref<any[]>([])
    const setData = (keywords: string) => {
      data.value = [
        {
          value: keywords,
          label: keywords,
          children: [
            { value: `${keywords}-child`, label: `${keywords}-child` },
          ],
        },
      ]
    }
    const testMethod = async (props: any) => {
      if (props.filterMethod) {
        props.filterMethod = vi.fn(props.filterMethod)
      } else if (props.remoteMethod) {
        props.remoteMethod = vi.fn(props.remoteMethod)
      }

      const { select, tree } = createComponent({
        props: {
          data,
          multiple: true,
          filterable: true,
          ...props,
        },
      })

      await nextTick()

      const method = props.filterMethod || props.remoteMethod
      const input = select.find('input')

      // show drop menu
      await input.trigger('click')
      expect(method).toBeCalledWith('')

      const testKeywords = async (keywords: string) => {
        await input.setValue(keywords)

        // await debounce
        await new Promise((resolve) => setTimeout(resolve, 300))
        expect(method).toBeCalledWith(keywords)

        // await remote
        await new Promise((resolve) => setTimeout(resolve, 200))
        expect(tree.vm.data).toEqual(data.value)
        expect(
          tree.findAll('.el-select-dropdown__item').map((item) => item.text())
        ).toEqual([keywords, `${keywords}-child`])

        const treeNode = tree.find('.el-tree-node')
        expect(treeNode.classes('is-expanded')).toBe(true)
      }

      await testKeywords('a')

      // check first child
      await tree
        .findAll(
          props.showCheckbox
            ? '.el-checkbox__original'
            : '.el-select-dropdown__item'
        )[1]
        .trigger('click')
      expect(select.vm.modelValue).toEqual([`a-child`])

      await testKeywords('aa')

      // check first child again
      await tree
        .findAll(
          props.showCheckbox
            ? '.el-checkbox__original'
            : '.el-select-dropdown__item'
        )[1]
        .trigger('click')
      expect(select.vm.modelValue).toEqual(['a-child', 'aa-child'])

      // hide drop menu
      await input.trigger('blur')
      expect(method).toBeCalledWith('')
    }

    test('filter-method', async () => {
      await testMethod({
        filterMethod: setData,
      })
    })

    test('filter-method and checkbox', async () => {
      await testMethod({
        filterMethod: setData,
        showCheckbox: true,
      })
    })

    test('filter-method and checkbox & check-strictly', async () => {
      await testMethod({
        filterMethod: setData,
        showCheckbox: true,
        checkStrictly: true,
      })
    })

    test('remote-method', async () => {
      await testMethod({
        remote: true,
        remoteMethod: async (keywords: string) => {
          await new Promise((resolve) => setTimeout(resolve, 200))
          setData(keywords)
        },
      })
    })
  })

  test('check/check-change events can accept correct params', async () => {
    const onCheck = vi.fn()
    const onCheckChange = vi.fn()
    const { select, tree } = createComponent({
      props: {
        showCheckbox: true,
        checkStrictly: true,
        onCheck: (
          node: any,
          { checkedKeys, checkedNodes, halfCheckedKeys, halfCheckedNodes }: any
        ) =>
          onCheck(
            node.value,
            checkedKeys,
            checkedNodes.map((item: any) => item.value),
            halfCheckedKeys,
            halfCheckedNodes.map((item: any) => item.value)
          ),
        onCheckChange: (node: any) => onCheckChange(node.value),
      },
    })

    await nextTick()
    await tree.find('.el-checkbox__original').trigger('click')
    await nextTick()

    expect(select.vm.modelValue).equal(1)
    expect(onCheck).toHaveBeenLastCalledWith(1, [1], [1], [], [])
    expect(onCheckChange).toHaveBeenLastCalledWith(1)

    await nextTick()
    await tree.findAll('.el-checkbox__original')[1].trigger('click')
    await nextTick()

    expect(select.vm.modelValue).equal(11)
    expect(onCheck).toHaveBeenLastCalledWith(11, [11], [11], [], [])
    expect(onCheckChange).toHaveBeenLastCalledWith(11)

    // finally will cancel older checked node
    await nextTick()
    expect(onCheckChange).toHaveBeenLastCalledWith(1)
  })

  test('checking node will not reset checked cache node', async () => {
    const modelValue = ref<number[]>([2])
    const cacheData = reactive([{ value: 2, label: '2-label' }])
    let id = 1
    const { tree } = createComponent({
      props: {
        modelValue,
        multiple: true,
        showCheckbox: true,
        checkStrictly: true,
        lazy: true,
        load: (node: object, resolve: (p: any) => any[]) => {
          resolve([{ value: id, label: `${id}-label`, isLeaf: false }])
          id++
        },
        cacheData,
      },
    })

    await nextTick()

    const node1 = tree.find('.el-tree-node__content')
    const node1Checkbox = node1.find('.el-checkbox__original')

    expect(node1.text()).toBe('1-label')
    await node1Checkbox.trigger('click')

    expect(modelValue.value).toEqual([2, 1])
  })

  test('cached checked node can be canceled', async () => {
    const modelValue = ref<number[]>([2])
    const cacheData = reactive([{ value: 2, label: '2-label' }])
    let id = 1
    const { tree } = createComponent({
      props: {
        modelValue,
        multiple: true,
        showCheckbox: true,
        checkStrictly: true,
        lazy: true,
        load: (node: object, resolve: (p: any) => any[]) => {
          resolve([{ value: id, label: `${id}-label`, isLeaf: false }])
          id++
        },
        cacheData,
      },
    })

    await nextTick()

    const node1 = tree.find('.el-tree-node__content')
    await node1.trigger('click')
    await nextTick()

    const node2 = tree.findAll('.el-tree-node__content')[1]
    expect(node2.text()).toBe('2-label')

    const node2Checkbox = node2.find('.el-checkbox')
    expect(node2Checkbox.element.classList.contains('is-checked')).toBe(true)

    await node2Checkbox.trigger('click')
    expect(node2Checkbox.element.classList.contains('is-checked')).toBe(false)

    expect(modelValue.value).toEqual([])
  })

  test('cached checked node and use lazy multiple', async () => {
    const modelValue = ref<number[]>([5])
    const cacheData = reactive([{ value: 5, label: 'lazy load node5' }])
    let id = 0
    const { tree, select } = createComponent({
      props: {
        modelValue,
        multiple: true,
        showCheckbox: true,
        checkStrictly: false,
        lazy: true,
        load: (node: object, resolve: (p: any) => any[]) => {
          resolve([
            {
              value: ++id,
              label: `lazy load node${id}`,
            },
            {
              value: ++id,
              label: `lazy load node${id}`,
              isLeaf: true,
            },
          ])
        },
        cacheData,
      },
    })

    await nextTick()

    const node1Checkbox = tree
      .findAll('.el-tree-node__content')[0]
      .find('.el-checkbox')
    await node1Checkbox.trigger('click')
    await nextTick()
    expect(select.vm.modelValue).toEqual([5, 1])

    const node2Checkbox = tree
      .findAll('.el-tree-node__content')[1]
      .find('.el-checkbox')
    await node2Checkbox.trigger('click')
    await nextTick()

    expect(select.vm.modelValue).toEqual([5, 1, 2])

    const node1 = tree.findAll('.el-tree-node__content')[0]
    await node1.trigger('click')
    await nextTick()
    expect(select.vm.modelValue).toEqual([5, 3, 4, 2])

    const node2 = tree.findAll('.el-tree-node__content')[1]
    await node2.trigger('click')
    await nextTick()

    expect(select.vm.modelValue).toEqual([5, 6, 4, 2])
  })

  test('check by click on leaf node', async () => {
    const { tree, select } = createComponent({
      props: {
        showCheckbox: true,
      },
    })

    const treeVm = tree.vm
    expect(treeVm.getCheckedNodes().length).toEqual(0)

    await tree.findAll('.el-tree-node__content')[0].trigger('click')
    await tree.findAll('.el-tree-node__content')[1].trigger('click')
    await tree.findAll('.el-tree-node__content')[2].trigger('click')

    expect(select.vm.modelValue).toEqual(111)
    expect(treeVm.getCheckedNodes().length).toEqual(3)
    expect(treeVm.getCheckedNodes(true).length).toEqual(1)
  })

  test('show-checkbox :check-on-click-leaf="false"', async () => {
    const { tree, select } = createComponent({
      props: {
        showCheckbox: true,
        checkOnClickLeaf: false,
      },
    })

    const treeVm = tree.vm
    expect(treeVm.getCheckedNodes().length).toEqual(0)

    await tree.findAll('.el-tree-node__content')[0].trigger('click')
    await tree.findAll('.el-tree-node__content')[1].trigger('click')
    await tree.findAll('.el-tree-node__content')[2].trigger('click')

    expect(select.vm.modelValue).toBeUndefined()
    expect(treeVm.getCheckedNodes().length).toEqual(0)
    expect(treeVm.getCheckedNodes(true).length).toEqual(0)
  })

  test('no checkbox and check on click node', async () => {
    const { select, tree } = createComponent({
      props: {
        checkOnClickNode: true,
        data: [
          { value: 1, label: '1' },
          { value: 2, label: '2' },
        ],
      },
    })

    const nodes = tree.findAll('.el-tree-node__content')

    await nodes[0].trigger('click')
    await nextTick()
    expect(select.vm.modelValue).equal(1)

    // click again not to deselect
    await nodes[0].trigger('click')
    await nextTick()
    expect(select.vm.modelValue).equal(1)

    // can correctly choose another
    await nodes.slice(-1)[0].trigger('click')
    await nextTick()
    expect(select.vm.modelValue).equal(2)

    // again
    await nodes.slice(-1)[0].trigger('click')
    await nextTick()
    expect(select.vm.modelValue).equal(2)
  })

  test('v-model source change', async () => {
    const spy1 = vi.fn()
    const wrapper = mount({
      components: { TreeSelect },
      data() {
        return {
          data: [{ value: null, handleModelValue: spy1 }],
          options: [{ value: 1 }, { value: 2 }],
        }
      },
      template: `<TreeSelect v-for="item in data" v-model="item.value" :data="options" @update:modelValue="item.handleModelValue" />`,
    })

    // Add to tracking for cleanup
    mountedWrappers.push(wrapper)

    const select = wrapper.findComponent({
      name: 'ElSelect',
    })

    select.vm.handleOptionSelect(select.vm.states.options.get(1))
    expect(spy1).toBeCalledWith(1)

    const spy2 = vi.fn()
    wrapper.vm.data = [{ value: 1, handleModelValue: spy2 }]
    await nextTick()

    select.vm.handleOptionSelect(select.vm.states.options.get(2))
    expect(spy2).toBeCalledWith(2)
  })

  test('always focus when using filters', async () => {
    const { tree, select } = createComponent({
      props: {
        filterable: true,
        showCheckbox: true,
        checkOnClickNode: true,
        data: [
          { value: 1, label: 1 },
          { value: 2, label: 2 },
        ],
      },
    })

    await nextTick()

    const input = select.find('input')

    // mock browser blur events
    tree.element.addEventListener('click', () => input.element.blur(), true)

    input.element.focus()
    expect(document.activeElement).toBe(input.element)

    // normal click
    await tree.find('.el-tree-node__content').trigger('click')
    expect(select.vm.modelValue).toBe(1)
    expect(document.activeElement).toBe(input.element)

    // checkbox click
    await tree
      .findAll('.el-tree-node__content .el-checkbox')[1]
      .trigger('click')
    expect(select.vm.modelValue).toBe(2)
    expect(document.activeElement).toBe(input.element)
  })

  test('should show clear btn on focus', async () => {
    const { wrapper } = createComponent({
      props: {
        modelValue: 'value1',
        clearable: true,
      },
    })
    const input = wrapper.find('input')
    await input.trigger('blur')
    await input.trigger('focus')
    expect(wrapper.findComponent(CircleClose).exists()).toBe(true)
  })

  test('render slot `empty`', async () => {
    const { wrapper, tree } = createComponent({
      props: {
        modelValue: '',
        data: [],
      },
      slots: {
        empty: () => <div class="empty-slot">EmptySlot</div>,
      },
    })
    const input = wrapper.find('input')
    await input.trigger('blur')
    await input.trigger('focus')
    expect(
      document.querySelector<HTMLElement>('.empty-slot')?.textContent
    ).toBe('EmptySlot')
    expect(tree.find('.el-tree').exists()).toBe(true)
    expect(tree.find('.el-tree__empty-block').exists()).toBe(false)
  })
})
