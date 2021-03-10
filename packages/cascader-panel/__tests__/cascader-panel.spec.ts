import { nextTick } from 'vue'
import { mount } from '@vue/test-utils'
import CascaderPanel from '../src/index.vue'

const NORMAL_OPTIONS = [
  {
    value: 'beijing',
    label: 'Beijing',
    children: [],
    leaf: true,
  },
  {
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [
      {
        value: 'hangzhou',
        label: 'Hangzhou',
      },
      {
        value: 'ningbo',
        label: 'Ningbo',
      },
    ],
  },
  {
    value: 'shanghai',
    label: 'Shanghai',
    children: [
      // for test nodes in different levels have same value
      {
        value: 'shanghai',
        label: 'Shanghai',
      },
    ],
  },
]

const DISABLED_OPTIONS = [
  {
    value: 'beijing',
    label: 'beijing',
    disabled: true,
  },
  {
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [
      {
        value: 'hangzhou',
        label: 'Hangzhou',
      },
    ],
  },
  {
    value: 'jiangsu',
    label: 'Jiangsu',
    disabled: true,
    children: [
      {
        value: 'nanjing',
        label: 'Nanjing',
      },
    ],
  },
]

const CUSTOM_PROPS_OPTIONS = [
  {
    id: 'beijing',
    name: 'Beijing',
    areas: [],
  },
  {
    id: 'zhejiang',
    name: 'Zhejiang',
    areas: [
      {
        id: 'hangzhou',
        name: 'Hangzhou',
      },
      {
        id: 'ningbo',
        name: 'Ningbo',
        invalid: true,
      },
    ],
  },
]

const MENU = '.el-cascader-menu'
const NODE = '.el-cascader-node'
const VALID_NODE = '.el-cascader-node:not(.is-disabled)'
const EXPAND_ARROW = '.el-icon-arrow-right.el-cascader-node__postfix'
const CHECKBOX = '.el-checkbox__input'
const RADIO = '.el-radio__input'

let id = 0

const _mount: typeof mount = options => mount({
  components: {
    CascaderPanel,
  },
  ...options,
})

const lazyLoad = (node, resolve) => {
  const { level } = node
  setTimeout(() => {
    const nodes = Array.from({ length: level + 1 })
      .map(() => ({
        value: ++id,
        label: `option${id}`,
        leaf: level >= 1,
      }))
    resolve(nodes)
  }, 1000)
}

beforeEach(() => {
  id = 0
})

jest.useFakeTimers()

describe('CascaderPanel.vue', () => {
  test('expand and check', async () => {
    const handleChange = jest.fn()
    const handleExpandChange = jest.fn()
    const wrapper = _mount({
      template: `
        <cascader-panel
          v-model="value"
          :options="options"
          @change="handleChange"
          @expand-change="handleExpandChange"
        />
      `,
      data() {
        return {
          options: NORMAL_OPTIONS,
          value: [],
        }
      },
      methods: {
        handleChange,
        handleExpandChange,
      },
    })

    const options = wrapper.findAll(NODE)
    const [bjNode, zjNode] = options

    expect(wrapper.findAll(MENU).length).toBe(1)
    expect(options.length).toBe(3)
    expect(bjNode.text()).toBe('Beijing')
    expect(bjNode.find(EXPAND_ARROW).exists()).toBe(false)

    await zjNode.trigger('click')
    const menus = wrapper.findAll(MENU)
    const hzNode = menus[1].find(NODE)
    expect(menus.length).toBe(2)
    expect(handleExpandChange).toBeCalledTimes(1)

    await hzNode.trigger('click')
    // won't trigger when expanding node not change
    expect(handleExpandChange).toBeCalledTimes(1)
    expect(handleChange).toBeCalledTimes(1)
    expect(wrapper.vm.value).toEqual(['zhejiang', 'hangzhou'])

    await bjNode.trigger('click')
    expect(wrapper.findAll(MENU).length).toBe(1)
    expect(handleExpandChange).toBeCalledTimes(2)
    expect(handleChange).toBeCalledTimes(2)
    expect(wrapper.vm.value).toEqual(['beijing'])
  })

  test('with default value', async () => {
    const wrapper = mount(CascaderPanel, {
      props: {
        modelValue: ['zhejiang', 'hangzhou'],
        options: NORMAL_OPTIONS,
      },
    })

    await nextTick()

    const menus = wrapper.findAll(MENU)
    const [, zjNode, shNode] = menus[0].findAll(NODE)
    const hzNode = menus[1].find(NODE)

    expect(menus.length).toBe(2)
    expect(zjNode.classes('in-active-path')).toBe(true)
    expect(hzNode.classes('is-active')).toBe(true)
    expect(hzNode.find('.el-icon-check').exists()).toBe(true)

    await wrapper.setProps({ modelValue: ['beijing'] })

    expect(wrapper.findAll(MENU).length).toBe(1)
    expect(wrapper.find(NODE).classes('is-active')).toBe(true)

    // leaf node should be checked
    await wrapper.setProps({ modelValue: ['shanghai', 'shanghai'] })
    const secondMenu = wrapper.findAll(MENU)[1]
    expect(shNode.classes('is-active')).toBe(false)
    expect(secondMenu.find(NODE).classes('is-active')).toBe(true)

    // leaf node should be checked
    await wrapper.setProps({ modelValue: null })
    expect(wrapper.find('is-active').exists()).toBe(false)
  })

  test('disabled options', async () => {
    const handleChange = jest.fn()
    const handleExpandChange = jest.fn()

    const wrapper = _mount({
      template: `
        <cascader-panel
          v-model="value"
          :options="options"
          @change="handleChange"
          @expand-change="handleExpandChange"
        />
      `,
      data() {
        return {
          options: DISABLED_OPTIONS,
          value: [],
        }
      },
      methods: {
        handleChange,
        handleExpandChange,
      },
    })

    const [bjNode, zjNode, jsNode] = wrapper.findAll(NODE)

    expect(wrapper.findAll(VALID_NODE).length).toBe(1)

    await bjNode.trigger('click')
    expect(handleChange).not.toBeCalled()
    expect(handleExpandChange).not.toBeCalled()

    await jsNode.trigger('click')
    expect(handleExpandChange).not.toBeCalled()

    await zjNode.trigger('click')
    expect(wrapper.findAll(MENU).length).toBe(2)
    expect(handleExpandChange).toBeCalledTimes(1)
  })

  test('options change', async () => {
    const wrapper = mount(CascaderPanel, {
      props: {
        options: NORMAL_OPTIONS,
      },
    })
    expect(wrapper.find(NODE).exists()).toBe(true)
    await wrapper.setProps({ options: null })
    expect(wrapper.find(NODE).exists()).toBe(false)
  })

  test('expand by hover', async () => {
    const wrapper = mount(CascaderPanel, {
      props: {
        options: DISABLED_OPTIONS,
        props: {
          expandTrigger: 'hover',
        },
      },
    })

    const [zjNode, jsNode] = wrapper.findAll(NODE).slice(1)

    await jsNode.trigger('mouseenter')
    expect(wrapper.findAll(MENU).length).toBe(1)

    await zjNode.trigger('mouseenter')
    expect(wrapper.findAll(MENU).length).toBe(2)
  })

  test('emit value only', async () => {
    const wrapper = _mount({
      template: `
        <cascader-panel
          v-model="value"
          :options="options"
          :props="props"
        />
      `,
      data() {
        return {
          options: NORMAL_OPTIONS,
          props: { emitPath: false },
          value: 'shanghai',
        }
      },
    })

    await nextTick()

    const shNode = wrapper.findAll(MENU)[1].find(NODE)
    expect(shNode.classes('is-active')).toBe(true)

    await wrapper.find(NODE).trigger('click')
    expect(wrapper.vm.value).toBe('beijing')
  })

  test('emit value only, issue 1531', async () => {
    const wrapper = _mount({
      template: `
        <cascader-panel
          v-model="value"
          :options="options"
          :props="props"
        />
      `,
      data() {
        return {
          options: [
            {
              value: 0,
              label: 'label one',
            },
            {
              value: 1,
              label: 'label two',
            },
          ],
          props: { emitPath: false },
          value: null,
        }
      },
    })

    await nextTick()

    const shNode = wrapper.findAll(MENU)[0].find(NODE)
    expect(shNode.classes('is-active')).toBe(false)

    await wrapper.findAll(NODE)[0].trigger('click')
    expect(wrapper.vm.value).toBe(0)

    await wrapper.findAll(NODE)[1].trigger('click')
    expect(wrapper.vm.value).toBe(1)
  })

  test('multiple mode', async () => {
    const wrapper = _mount({
      template: `
        <cascader-panel
          v-model="value"
          :options="options"
          :props="props"
        />
      `,
      data() {
        return {
          options: NORMAL_OPTIONS,
          props: { multiple: true },
          value: [],
        }
      },
    })

    const zjNode = wrapper.findAll(NODE)[1]
    const zjCheckbox = zjNode.find(CHECKBOX)
    expect(zjCheckbox.exists()).toBe(true)

    await zjNode.trigger('click')
    const secondMenu = wrapper.findAll(MENU)[1]
    const [hzCheckbox, nbCheckbox] = secondMenu.findAll(CHECKBOX)

    await hzCheckbox.find('input').trigger('click')
    expect(hzCheckbox.classes('is-checked')).toBe(true)
    expect(zjCheckbox.classes('is-indeterminate')).toBe(true)
    expect(wrapper.vm.value).toEqual([['zhejiang', 'hangzhou']])

    await nbCheckbox.find('input').trigger('click')
    expect(zjCheckbox.classes('is-checked')).toBe(true)
    expect(wrapper.vm.value).toEqual([['zhejiang', 'hangzhou'], ['zhejiang', 'ningbo']])

    await zjCheckbox.find('input').trigger('click')
    expect(zjCheckbox.classes('is-checked')).toBe(false)
    expect(nbCheckbox.classes('is-checked')).toBe(false)
    expect(nbCheckbox.classes('is-checked')).toBe(false)
    expect(wrapper.vm.value).toEqual([])
  })

  test('multiple mode with disabled default value', async () => {
    const wrapper = mount(CascaderPanel, {
      props: {
        options: DISABLED_OPTIONS,
        props: { multiple: true },
        modelValue: [['beijing']],
      },
    })

    await nextTick()

    const bjNode = wrapper.find(NODE)
    const bjCheckbox = wrapper.find(CHECKBOX)
    expect(bjNode.classes('is-disabled')).toBe(true)
    expect(bjCheckbox.classes('is-disabled')).toBe(true)
    expect(bjCheckbox.classes('is-checked')).toBe(true)
  })

  test('check strictly in single mode', async () => {
    const wrapper = _mount({
      template: `
        <cascader-panel
          v-model="value"
          :options="options"
          :props="props"
        />
      `,
      data() {
        return {
          options: NORMAL_OPTIONS,
          props: { checkStrictly: true },
          value: [],
        }
      },
    })

    const zjRadio = wrapper.findAll(RADIO)[1]
    expect(zjRadio.exists()).toBe(true)

    await zjRadio.find('input').trigger('click')
    expect(wrapper.vm.value).toEqual(['zhejiang'])
  })

  test('check strictly in single mode with disabled options', async () => {
    const wrapper = mount(CascaderPanel, {
      props: {
        options: DISABLED_OPTIONS,
        props: { checkStrictly: true },
      },
    })

    const [bjNode, , jsNode] = wrapper.findAll(NODE)
    const bjRadio = bjNode.find(RADIO)

    // leaf nodes should add a disabled style for that they are not expandable
    // but non-leaf nodes are not
    expect(bjNode.classes('is-disabled')).toBe(true)
    expect(jsNode.classes('is-disabled')).toBe(false)
    expect(bjRadio.classes('is-disabled')).toBe(true)
    expect(bjRadio.find('input[disabled]').exists()).toBe(true)

    await jsNode.trigger('click')
    expect(wrapper.findAll(MENU).length).toEqual(2)
  })

  test('check strictly in multiple mode', async () => {
    const wrapper = _mount({
      template: `
        <cascader-panel
          v-model="value"
          :options="options"
          :props="props"
        />
      `,
      data() {
        return {
          options: NORMAL_OPTIONS,
          props: { checkStrictly: true, multiple: true },
          value: [['shanghai']],
        }
      },
    })

    const shNode = wrapper.findAll(NODE)[2]
    const [, zjCheckbox, shCheckbox] = wrapper.findAll(CHECKBOX)

    await nextTick()
    await shNode.trigger('click')

    const shCheckbox2 = wrapper.findAll(MENU)[1].find(CHECKBOX)
    expect(shCheckbox.classes('is-checked')).toBe(true)
    expect(shCheckbox2.classes('is-checked')).toBe(false)

    await zjCheckbox.find('input').trigger('click')
    expect(wrapper.vm.value).toEqual([['shanghai'], ['zhejiang']])
  })

  test('custom props', async () => {
    const wrapper = _mount({
      template: `
        <cascader-panel
          v-model="value"
          :options="options"
          :props="props"
        />
      `,
      data() {
        return {
          options: CUSTOM_PROPS_OPTIONS,
          props: {
            value: 'id',
            label: 'name',
            children: 'areas',
            disabled: 'invalid',
            leaf: (data: typeof CUSTOM_PROPS_OPTIONS[0]) => !data.areas?.length,
          },
          value: [],
        }
      },
    })

    const [bjNode, zjNode] = wrapper.findAll(NODE)
    expect(bjNode.text()).toBe('Beijing')
    expect(bjNode.find(EXPAND_ARROW).exists()).toBe(false)

    await zjNode.trigger('click')
    const [hzNode, nbNode] = wrapper.findAll(MENU)[1].findAll(NODE)
    expect(hzNode.exists()).toBe(true)
    expect(nbNode.classes('is-disabled')).toBe(true)

    await hzNode.trigger('click')
    expect(wrapper.vm.value).toEqual(['zhejiang', 'hangzhou'])
  })

  test('lazy load', async () => {
    const wrapper = _mount({
      template: `
        <cascader-panel
          v-model="value"
          :props="props"
        />
      `,
      data() {
        return {
          value: [],
          props: {
            lazy: true,
            lazyLoad,
          },
        }
      },
    })

    jest.runAllTimers()
    await nextTick()
    const firstOption = wrapper.find(NODE)
    expect(firstOption.exists()).toBe(true)

    await firstOption.trigger('click')
    expect(firstOption.find('.el-icon-loading').exists()).toBe(true)
    jest.runAllTimers()
    await nextTick()
    expect(firstOption.find('.el-icon-loading').exists()).toBe(false)

    const secondMenu = wrapper.findAll(MENU)[1]
    expect(secondMenu.exists()).toBe(true)

    await secondMenu.find(NODE).trigger('click')
    expect(wrapper.vm.value).toEqual([1, 2])
  })

  test('lazy load with default value', async () => {
    const wrapper = mount(CascaderPanel, {
      props: {
        props: {
          lazy: true,
          lazyLoad,
        },
        modelValue: [1, 2],
      },
    })

    jest.runAllTimers()
    await nextTick()

    expect(wrapper.findAll(MENU).length).toBe(2)
    expect(wrapper.find(`.is-active`).text()).toBe('option2')
  })

  test('no loaded nodes should not be checked', async () => {
    const wrapper = _mount({
      template: `
        <cascader-panel
          :props="props"
        />
      `,
      data() {
        return {
          props: {
            multiple: true,
            lazy: true,
            lazyLoad (node, resolve) {
              const { level } = node
              setTimeout(() => {
                const nodes = Array.from({ length: level + 1 })
                  .map(() => {
                    ++id
                    return {
                      value: id,
                      label: `option${id}`,
                      leaf: id === 3,
                    }
                  })
                resolve(nodes)
              }, 1000)
            },
          },
        }
      },
    })
    jest.runAllTimers()
    await nextTick()
    const firstMenu = wrapper.findAll(MENU)[0]
    const firstOption = wrapper.find(NODE)
    await firstOption.trigger('click')
    jest.runAllTimers()
    await nextTick()

    await firstMenu.find(CHECKBOX).find('input').trigger('click')

    const secondMenu = wrapper.findAll(MENU)[1]
    expect(secondMenu.exists()).toBe(true)
    expect(firstMenu.find(CHECKBOX).classes('is-checked')).toBe(false)
    expect(firstMenu.find(CHECKBOX).classes('is-indeterminate')).toBe(true)
    expect(secondMenu.findAll(CHECKBOX)[0].classes('is-checked')).toBe(false)
    expect(secondMenu.findAll(CHECKBOX)[0].classes('is-indeterminate')).toBe(false)
    expect(secondMenu.findAll(CHECKBOX)[1].classes('is-checked')).toBe(true)
    expect(secondMenu.findAll(CHECKBOX)[1].classes('is-indeterminate')).toBe(false)
  })

  test('getCheckedNodes and clearCheckedNodes', () => {
    const wrapper = mount(CascaderPanel, {
      props: {
        options: NORMAL_OPTIONS,
        props: { multiple: true },
        modelValue: [['shanghai', 'shanghai']],
      },
    })
    const vm = wrapper.vm as any
    expect(vm.getCheckedNodes().length).toBe(2)
    expect(vm.getCheckedNodes(true).length).toBe(1)
    vm.clearCheckedNodes()
    expect(vm.getCheckedNodes().length).toBe(0)
  })

  test('options async load with default value', async () => {
    const wrapper = mount(CascaderPanel, {
      props: {
        options: [],
        modelValue: ['shanghai', 'shanghai'],
      },
    })

    const vm = wrapper.vm as any
    expect(vm.getCheckedNodes().length).toBe(0)
    await wrapper.setProps({ options: NORMAL_OPTIONS })
    expect(vm.getCheckedNodes(true).length).toBe(1)
  })
})
