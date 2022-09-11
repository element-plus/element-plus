import { h, nextTick, ref } from 'vue'
import { mount } from '@vue/test-utils'
import { afterEach, describe, expect, test, vi } from 'vitest'
import { rAF } from '@element-plus/test-utils/tick'
import TreeSelect from '../src/tree-select.vue'
import type { RenderFunction } from 'vue'
import type { VueWrapper } from '@vue/test-utils'
import type ElSelect from '@element-plus/components/select'
import type ElTree from '@element-plus/components/tree'

const createComponent = ({
  slots = {},
  props = {},
}: {
  slots?: Record<string, any>
  props?: typeof TreeSelect['props']
} = {}) => {
  // vm can not get component expose, use ref
  const wrapperRef = ref()
  const value = props.modelValue || ref('')
  const wrapper = mount({
    data() {
      return {
        modelValue: value,
        data: [
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
        ],
        'onUpdate:modelValue': (val: string) => (value.value = val),
        renderAfterExpand: false,
        ...props,
      }
    },
    render() {
      return h(
        TreeSelect,
        {
          ...this.$data,
          ref: (val: object) => (wrapperRef.value = val),
        },
        slots
      )
    },
  })

  return {
    wrapper,
    getWrapperRef: () =>
      new Promise<InstanceType<typeof ElTree> & InstanceType<typeof ElSelect>>(
        (resolve) => nextTick(() => resolve(wrapperRef.value))
      ),
    getSelect: () =>
      new Promise<VueWrapper<InstanceType<typeof ElSelect>>>((resolve) =>
        nextTick(() => resolve(wrapper.findComponent({ name: 'ElSelect' })))
      ),
    getTree: () =>
      new Promise<VueWrapper<InstanceType<typeof ElTree>>>((resolve) =>
        nextTick(() => resolve(wrapper.findComponent({ name: 'ElTree' })))
      ),
  }
}

describe('TreeSelect.vue', () => {
  afterEach(() => {
    document.body.innerHTML = ''
  })

  test('render test', async () => {
    const { wrapper, getTree } = createComponent({
      props: {
        defaultExpandAll: true,
      },
    })

    const tree = await getTree()
    expect(wrapper.find('.el-tree')).toBeTruthy()
    expect(wrapper.find('.el-select')).toBeTruthy()

    expect(tree.findAll('.el-tree > .el-tree-node').length).toBe(1)
    expect(tree.findAll('.el-tree .el-tree-node').length).toBe(3)
    expect(tree.findAll('.el-tree .el-select-dropdown__item').length).toBe(3)

    wrapper.vm.data[0].children = []

    await nextTick()

    expect(tree.findAll('.el-tree .el-tree-node').length).toBe(1)
  })

  test('modelValue', async () => {
    const value = ref(1)
    const { wrapper, getWrapperRef, getTree, getSelect } = createComponent({
      props: {
        modelValue: value,
        checkStrictly: true,
        showCheckbox: true,
        checkOnClickNode: true,
      },
    })

    const wrapperRef = await getWrapperRef()
    const tree = await getTree()
    const select = await getSelect()

    setTimeout(async () => {
      await wrapper.trigger('click')
      await rAF()

      expect(select.vm.modelValue).toBe(1)
      expect(wrapperRef.getCheckedKeys()).toEqual([1])

      value.value = 11
      await nextTick(nextTick)
      expect(select.vm.modelValue).toBe(11)
      expect(wrapperRef.getCheckedKeys()).toEqual([11])

      await tree
        .findAll('.el-select-dropdown__item')
        .slice(-1)[0]
        .trigger('click')
      await nextTick()
      expect(select.vm.modelValue).toBe(111)
      expect(wrapperRef.getCheckedKeys()).toEqual([111])

      await tree.find('.el-tree-node__content').trigger('click')
      await nextTick()
      expect(select.vm.modelValue).toBe(1)
      expect(wrapperRef.getCheckedKeys()).toEqual([1])

      await tree.findAll('.el-checkbox__original')[1].trigger('click')
      await nextTick()
      expect(select.vm.modelValue).toBe(11)
      expect(wrapperRef.getCheckedKeys()).toEqual([11])
    })
  })

  test('disabled', async () => {
    const { wrapper, getTree } = createComponent({
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

    const tree = await getTree()

    await nextTick()
    await tree.find('.el-tree-node').trigger('click')
    await tree.find('.el-tree-node .el-checkbox.is-disabled').trigger('click')
    await tree
      .find('.el-tree-node .el-select-dropdown__item.is-disabled')
      .trigger('click')
    await nextTick()
    expect(wrapper.vm.modelValue).toBe('1')
  })

  test('multiple', async () => {
    const value = ref([1])
    const { wrapper, getWrapperRef, getTree, getSelect } = createComponent({
      props: {
        modelValue: value,
        checkStrictly: true,
        showCheckbox: true,
        multiple: true,
        checkOnClickNode: true,
      },
    })

    const wrapperRef = await getWrapperRef()
    const tree = await getTree()
    const select = await getSelect()

    setTimeout(async () => {
      await wrapper.trigger('click')
      await rAF()

      expect(select.vm.modelValue).toEqual([1])
      expect(wrapperRef.getCheckedKeys()).toEqual([1])

      value.value = [11]
      await nextTick(nextTick)
      expect(select.vm.modelValue).toEqual([11])
      expect(wrapperRef.getCheckedKeys()).toEqual([11])

      await tree
        .findAll('.el-select-dropdown__item')
        .slice(-1)[0]
        .trigger('click')
      await nextTick()
      expect(select.vm.modelValue).toEqual([11, 111])
      expect(wrapperRef.getCheckedKeys()).toEqual([11, 111])

      await tree.find('.el-tree-node__content').trigger('click')
      await nextTick()
      expect(select.vm.modelValue).toEqual([1, 11, 111])
      expect(wrapperRef.getCheckedKeys()).toEqual([1, 11, 111])

      await tree.findAll('.el-checkbox')[1].trigger('click')
      await nextTick()
      expect(select.vm.modelValue).toEqual([1, 111])
      expect(wrapperRef.getCheckedKeys()).toEqual([1, 111])
    })
  })

  test('filter', async () => {
    const { getTree } = createComponent({
      props: {
        filterable: true,
      },
    })

    const tree = await getTree()

    tree.vm.filter('一级 1')
    await nextTick()
    expect(tree.findAll('.el-tree-node:not(.is-hidden)').length).toBe(1)
  })

  test('props', async () => {
    const { wrapper, getTree, getSelect } = createComponent({
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

    const tree = await getTree()
    const select = await getSelect()

    await nextTick()
    expect(tree.find('.el-select-dropdown__item').text()).toBe('1')
    wrapper.vm.modelValue = '2'
    await nextTick()
    expect(select.vm.selectedLabel).toBe('2')
  })

  test('slots', async () => {
    const { getTree, getSelect } = createComponent({
      slots: {
        default: ({ data }: { data: { label: string } }) => `123${data.label}`,
        prefix: () => 'prefix',
      },
    })

    const tree = await getTree()
    const select = await getSelect()

    await nextTick()
    expect(tree.find('.el-select-dropdown__item').text()).toBe('123一级 1')
    expect(select.find('.el-input__prefix-inner').text()).toBe('prefix')
  })

  test('renderContent', async () => {
    const { getTree } = createComponent({
      props: {
        renderContent: (
          h: RenderFunction,
          { data }: { data: { label: string } }
        ) => {
          return `123${data.label}`
        },
      },
    })

    const tree = await getTree()

    await nextTick()
    expect(tree.find('.el-select-dropdown__item').text()).toBe('123一级 1')
  })

  test('lazy', async () => {
    const { getTree } = createComponent({
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

    const tree = await getTree()

    await nextTick()
    await tree.find('.el-tree-node').trigger('click')
    await nextTick()
    expect(tree.find('.el-tree-node .el-tree-node').text()).toBe('2')
  })

  test('events', async () => {
    const onNodeClick = vi.fn()
    const { getTree } = createComponent({
      props: {
        onNodeClick,
      },
    })

    const tree = await getTree()

    await nextTick()
    await tree.find('.el-tree-node').trigger('click')
    await nextTick()
    expect(onNodeClick).toBeCalled()
  })

  test('check-strictly showCheckbox click node', async () => {
    const { getWrapperRef, getTree, getSelect } = createComponent({
      props: {
        checkStrictly: true,
        showCheckbox: true,
        multiple: true,
      },
    })

    const wrapperRef = await getWrapperRef()
    const tree = await getTree()
    const select = await getSelect()

    await tree.findAll('.el-tree-node__content')[0].trigger('click')
    await nextTick()
    expect(select.vm.modelValue).toEqual([])
    expect(wrapperRef.getCheckedKeys()).toEqual([])

    await tree
      .findAll('.el-tree-node__content .el-checkbox')[0]
      .trigger('click')
    await nextTick()
    expect(select.vm.modelValue).toEqual([1])
    expect(wrapperRef.getCheckedKeys()).toEqual([1])
  })

  test('check-strictly showCheckbox checkOnClickNode click node', async () => {
    const { getWrapperRef, getTree, getSelect } = createComponent({
      props: {
        checkStrictly: true,
        showCheckbox: true,
        multiple: true,
        checkOnClickNode: true,
      },
    })

    const wrapperRef = await getWrapperRef()
    const tree = await getTree()
    const select = await getSelect()

    await tree.findAll('.el-tree-node__content')[0].trigger('click')
    await nextTick()
    expect(select.vm.modelValue).toEqual([1])
    expect(wrapperRef.getCheckedKeys()).toEqual([1])

    await tree
      .findAll('.el-tree-node__content .el-checkbox')[0]
      .trigger('click')
    await nextTick()
    expect(select.vm.modelValue).toEqual([])
    expect(wrapperRef.getCheckedKeys()).toEqual([])
  })

  test('only show checkbox', async () => {
    const { getTree, getSelect } = createComponent({
      props: {
        showCheckbox: true,
      },
    })

    const tree = await getTree()
    const select = await getSelect()

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
    const { getTree, getSelect } = createComponent({
      props: {
        showCheckbox: true,
        checkOnClickNode: true,
      },
    })

    const tree = await getTree()
    const select = await getSelect()

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
    const { getTree } = createComponent({
      props: {
        modelValue: value,
      },
    })

    const tree = await getTree()

    expect(tree.findAll('.is-expanded[data-key="1"]').length).toBe(1)
    expect(tree.findAll('.is-expanded[data-key="11"]').length).toBe(1)
  })

  test('expand-on-click-node', async () => {
    const { wrapper, getTree } = createComponent({
      props: {
        expandOnClickNode: false,
        checkOnClickNode: true,
      },
    })

    const tree = await getTree()

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
})
