import { h, nextTick, ref } from 'vue'
import { mount } from '@vue/test-utils'
import { describe, expect, test, vi } from 'vitest'
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
      new Promise((resolve) =>
        nextTick(() => resolve(wrapperRef.value))
      ) as Promise<InstanceType<typeof ElTree> & InstanceType<typeof ElSelect>>,
    select: wrapper.findComponent({ name: 'ElSelect' }) as VueWrapper<
      InstanceType<typeof ElSelect>
    >,
    tree: wrapper.findComponent({ name: 'ElTree' }) as VueWrapper<
      InstanceType<typeof ElTree>
    >,
  }
}

describe('TreeSelect.vue', () => {
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

    wrapper.vm.data[0].children = []

    await nextTick()

    expect(tree.findAll('.el-tree .el-tree-node').length).toBe(1)
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
    expect(wrapper.vm.modelValue).toBe('1')
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

  test('filter', async () => {
    const { tree } = createComponent({
      props: {
        filterable: true,
      },
    })

    tree.vm.filter('一级 1')
    await nextTick()
    expect(tree.findAll('.el-tree-node:not(.is-hidden)').length).toBe(1)
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
    wrapper.vm.modelValue = '2'
    await nextTick()
    expect(select.vm.selectedLabel).toBe('2')
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
    expect(select.find('.el-input__prefix-inner').text()).toBe('prefix')
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

  test('check-strictly showCheckbox clik node', async () => {
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
    expect(wrapperRef.getCheckedKeys()).toEqual([])

    await tree
      .findAll('.el-tree-node__content .el-checkbox')[0]
      .trigger('click')
    await nextTick()
    expect(select.vm.modelValue).toEqual([1])
    expect(wrapperRef.getCheckedKeys()).toEqual([1])
  })

  test('check-strictly showCheckbox checkOnClickNode clik node', async () => {
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
    expect(wrapperRef.getCheckedKeys()).toEqual([1])

    await tree
      .findAll('.el-tree-node__content .el-checkbox')[0]
      .trigger('click')
    await nextTick()
    expect(select.vm.modelValue).toEqual([])
    expect(wrapperRef.getCheckedKeys()).toEqual([])
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
})
