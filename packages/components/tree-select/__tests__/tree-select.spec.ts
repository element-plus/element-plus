import { nextTick, ref, h } from 'vue'
import { mount, VueWrapper } from '@vue/test-utils'
import TreeSelect from '../src/tree-select.vue'
import type ElTree from '@element-plus/components/tree'
import type ElSelect from '@element-plus/components/select'

const createComponent = ({ slots = {}, props = {} } = {}) => {
  // vm can not get component expose, use ref
  const wrapperRef = ref(null)
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
        ...props,
      }
    },
    render() {
      return h(
        TreeSelect,
        { ...this.$data, ref: (val) => (wrapperRef.value = val) },
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
    const { wrapper, getWrapperRef, select, tree } = createComponent({
      props: {
        modelValue: value,
        checkStrictly: true,
        showCheckbox: true,
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

    await tree.findAll('.el-checkbox')[1].trigger('click')
    await nextTick()
    expect(select.vm.modelValue).toBe(11)
    expect(wrapperRef.getCheckedKeys()).toEqual([11])
  })

  test('disabled', async () => {
    const { wrapper, select, tree } = createComponent({
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
    const { wrapper, getWrapperRef, select, tree } = createComponent({
      props: {
        modelValue: value,
        checkStrictly: true,
        showCheckbox: true,
        multiple: true,
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
    expect(select.vm.modelValue).toEqual([11, 111, 1])
    expect(wrapperRef.getCheckedKeys()).toEqual([1, 11, 111])

    await tree.findAll('.el-checkbox')[1].trigger('click')
    await nextTick()
    expect(select.vm.modelValue).toEqual([1, 111])
    expect(wrapperRef.getCheckedKeys()).toEqual([1, 111])
  })

  test('filter', async () => {
    const { wrapper, select, tree } = createComponent({
      props: {
        filterable: true,
      },
    })

    select.vm.query = '一级 1'
    await nextTick()
    expect(tree.findAll('.el-tree-node').length).toBe(1)
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
    expect(tree.find('.el-tree-node').text()).toBe('1')
    wrapper.vm.modelValue = '2'
    await nextTick()
    expect(select.vm.selectedLabel).toBe('2')
  })
  test('slots', async () => {
    const { wrapper, select, tree } = createComponent({
      slots: {
        default: ({ data }) => '123' + data.label,
        prefix: () => 'prefix',
      },
    })

    await nextTick()
    expect(tree.find('.el-select-dropdown__item').text()).toBe('123一级 1')
    expect(select.find('.el-input__prefix-inner').text()).toBe('prefix')
  })
  test('renderContent', async () => {
    const { wrapper, tree } = createComponent({
      props: {
        renderContent: (h, { data }) => {
          return '123' + data.label
        },
      },
    })

    await nextTick()
    expect(tree.find('.el-select-dropdown__item').text()).toBe('123一级 1')
  })
  test('lazy', async () => {
    const { wrapper, select, tree } = createComponent({
      props: {
        data: [
          {
            value: 1,
            label: 1,
          },
        ],
        lazy: true,
        load: (node, resolve) => {
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
    const onNodeClick = jest.fn()
    const { wrapper, tree } = createComponent({
      props: {
        onNodeClick,
      },
    })
    await nextTick()
    await tree.find('.el-tree-node').trigger('click')
    await nextTick()
    expect(onNodeClick).toBeCalled()
  })
})
