import { nextTick, ref } from 'vue'
import { mount } from '@vue/test-utils'
import { beforeEach, describe, expect, test, vi } from 'vitest'
import { Check, Loading } from '@element-plus/icons-vue'
import CascaderPanel from '../src/index.vue'
import Node from '../src/node.vue'

import type {
  CascaderOption,
  CascaderProps,
  CascaderValue,
  LazyLoad,
} from '../src/node'

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
  {
    value: 'guangdong',
    label: 'Guangdong',
    children: [],
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
const EXPAND_ARROW = '.arrow-right.el-cascader-node__postfix'
const CHECKBOX = '.el-checkbox__input'
const RADIO = '.el-radio__input'

let id = 0

const lazyLoad: LazyLoad = (node, resolve) => {
  const { level } = node
  setTimeout(() => {
    const nodes = Array.from({ length: level + 1 }).map(() => ({
      value: ++id,
      label: `option${id}`,
      leaf: level >= 1,
    }))
    resolve(nodes)
  }, 1000)
}

describe('CascaderPanel.vue', () => {
  beforeEach(() => {
    id = 0
  })

  test('expand and check', async () => {
    const handleChange = vi.fn()
    const handleExpandChange = vi.fn()
    const value = ref([])
    const wrapper = mount(() => (
      <CascaderPanel
        v-model={value.value}
        options={NORMAL_OPTIONS}
        onChange={handleChange}
        onExpand-change={handleExpandChange}
      />
    ))

    const options = wrapper.findAll(NODE)
    const [bjNode, zjNode, , gdNode] = options

    expect(wrapper.findAll(MENU).length).toBe(1)
    expect(options.length).toBe(4)
    expect(bjNode.text()).toBe('Beijing')
    expect(bjNode.find(EXPAND_ARROW).exists()).toBe(false)
    expect(zjNode.find(EXPAND_ARROW).exists()).toBe(true)
    expect(gdNode.find(EXPAND_ARROW).exists()).toBe(false)

    await zjNode.trigger('click')
    const menus = wrapper.findAll(MENU)
    const hzNode = menus[1].find(NODE)
    expect(menus.length).toBe(2)
    expect(handleExpandChange).toBeCalledTimes(1)

    await hzNode.trigger('click')
    // won't trigger when expanding node not change
    expect(handleExpandChange).toBeCalledTimes(1)
    expect(handleChange).toBeCalledTimes(1)
    expect(value.value).toEqual(['zhejiang', 'hangzhou'])

    await bjNode.trigger('click')
    expect(wrapper.findAll(MENU).length).toBe(1)
    expect(handleExpandChange).toBeCalledTimes(2)
    expect(handleChange).toBeCalledTimes(2)
    expect(value.value).toEqual(['beijing'])

    await gdNode.trigger('click')
    expect(wrapper.findAll(MENU).length).toBe(1)
    expect(handleExpandChange).toBeCalledTimes(3)
    expect(handleChange).toBeCalledTimes(3)
    expect(value.value).toEqual(['guangdong'])
  })

  test('with default value', async () => {
    const value = ref<null | CascaderValue>(['zhejiang', 'hangzhou'])
    const wrapper = mount(() => (
      <CascaderPanel v-model={value.value} options={NORMAL_OPTIONS} />
    ))

    await nextTick()

    const menus = wrapper.findAll(MENU)
    const [, zjNode, shNode] = menus[0].findAll(NODE)
    const hzNode = menus[1].find(NODE)

    expect(menus.length).toBe(2)
    expect(zjNode.classes('in-active-path')).toBe(true)
    expect(hzNode.classes('is-active')).toBe(true)
    expect(hzNode.findComponent(Check).exists()).toBe(true)

    value.value = ['beijing']

    await nextTick()
    expect(wrapper.findAll(MENU).length).toBe(1)
    expect(wrapper.find(NODE).classes('is-active')).toBe(true)

    // leaf node should be checked
    value.value = ['shanghai', 'shanghai']
    await nextTick()
    const secondMenu = wrapper.findAll(MENU)[1]
    expect(shNode.classes('is-active')).toBe(false)
    expect(secondMenu.find(NODE).classes('is-active')).toBe(true)

    // leaf node should be checked
    value.value = null
    await nextTick()
    expect(wrapper.find('is-active').exists()).toBe(false)
  })

  test('disabled options', async () => {
    const handleChange = vi.fn()
    const handleExpandChange = vi.fn()

    const value = ref([])
    const wrapper = mount(() => (
      <CascaderPanel
        v-model={value.value}
        options={DISABLED_OPTIONS}
        onChange={handleChange}
        onExpand-change={handleExpandChange}
      />
    ))

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
    const options = ref(NORMAL_OPTIONS)
    const wrapper = mount(() => <CascaderPanel options={options.value} />)

    expect(wrapper.find(NODE).exists()).toBe(true)
    options.value = []
    await nextTick()
    expect(wrapper.find(NODE).exists()).toBe(false)
  })

  test('expand by hover', async () => {
    const props: CascaderProps = { expandTrigger: 'hover' }
    const wrapper = mount(() => (
      <CascaderPanel options={DISABLED_OPTIONS} props={props} />
    ))

    const [zjNode, jsNode] = wrapper.findAll(NODE).slice(1)

    await jsNode.trigger('mouseenter')
    expect(wrapper.findAll(MENU).length).toBe(1)

    await zjNode.trigger('mouseenter')
    expect(wrapper.findAll(MENU).length).toBe(2)
  })

  test('emit value only', async () => {
    const value = ref('shanghai')
    const props = { emitPath: false }
    const wrapper = mount(() => (
      <CascaderPanel
        v-model={value.value}
        options={NORMAL_OPTIONS}
        props={props}
      />
    ))

    await nextTick()

    const shNode = wrapper.findAll(MENU)[1].find(NODE)
    expect(shNode.classes('is-active')).toBe(true)

    await wrapper.find(NODE).trigger('click')
    expect(value.value).toBe('beijing')
  })

  test('emit value only, issue 1531', async () => {
    const value = ref(null)
    const options = [
      {
        value: 0,
        label: 'label one',
      },
      {
        value: 1,
        label: 'label two',
      },
    ]
    const props = { emitPath: false }
    const wrapper = mount(() => (
      <CascaderPanel v-model={value.value} options={options} props={props} />
    ))

    await nextTick()

    const shNode = wrapper.findAll(MENU)[0].find(NODE)
    expect(shNode.classes('is-active')).toBe(false)

    await wrapper.findAll(NODE)[0].trigger('click')
    expect(value.value).toBe(0)

    await wrapper.findAll(NODE)[1].trigger('click')
    expect(value.value).toBe(1)
  })

  test('multiple mode', async () => {
    const value = ref([])
    const props = {
      multiple: true,
    }
    const wrapper = mount(() => (
      <CascaderPanel
        v-model={value.value}
        options={NORMAL_OPTIONS}
        props={props}
      />
    ))

    const zjNode = wrapper.findAll(NODE)[1]
    const zjCheckbox = zjNode.find(CHECKBOX)
    expect(zjCheckbox.exists()).toBe(true)

    await zjNode.trigger('click')
    const secondMenu = wrapper.findAll(MENU)[1]
    const [hzCheckbox, nbCheckbox] = secondMenu.findAll(CHECKBOX)

    await hzCheckbox.find('input').trigger('click')
    expect(hzCheckbox.classes('is-checked')).toBe(true)
    expect(zjCheckbox.classes('is-indeterminate')).toBe(true)
    expect(value.value).toEqual([['zhejiang', 'hangzhou']])

    await nbCheckbox.find('input').trigger('click')
    expect(zjCheckbox.classes('is-checked')).toBe(true)
    expect(value.value).toEqual([
      ['zhejiang', 'hangzhou'],
      ['zhejiang', 'ningbo'],
    ])

    await zjCheckbox.find('input').trigger('click')
    expect(zjCheckbox.classes('is-checked')).toBe(false)
    expect(nbCheckbox.classes('is-checked')).toBe(false)
    expect(nbCheckbox.classes('is-checked')).toBe(false)
    expect(value.value).toEqual([])
  })

  test('multiple mode with disabled default value', async () => {
    const props = {
      multiple: true,
    }
    const wrapper = mount(() => (
      <CascaderPanel
        modelValue={[['beijing']]}
        options={DISABLED_OPTIONS}
        props={props}
      />
    ))

    await nextTick()

    const bjNode = wrapper.find(NODE)
    const bjCheckbox = wrapper.find(CHECKBOX)
    expect(bjNode.classes('is-disabled')).toBe(true)
    expect(bjCheckbox.classes('is-disabled')).toBe(true)
    expect(bjCheckbox.classes('is-checked')).toBe(true)
  })

  test('check strictly in single mode', async () => {
    const value = ref([])
    const props = {
      checkStrictly: true,
    }
    const wrapper = mount(() => (
      <CascaderPanel
        v-model={value.value}
        options={NORMAL_OPTIONS}
        props={props}
      />
    ))

    const zjRadio = wrapper.findAll(RADIO)[1]
    expect(zjRadio.exists()).toBe(true)

    await zjRadio.find('input').trigger('click')
    expect(value.value).toEqual(['zhejiang'])
  })

  test('check strictly in single mode with disabled options', async () => {
    const props = {
      checkStrictly: true,
    }
    const wrapper = mount(() => (
      <CascaderPanel options={DISABLED_OPTIONS} props={props} />
    ))

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
    const value = ref([['shanghai']])
    const props = {
      checkStrictly: true,
      multiple: true,
    }
    const wrapper = mount(() => (
      <CascaderPanel
        v-model={value.value}
        options={NORMAL_OPTIONS}
        props={props}
      />
    ))

    const shNode = wrapper.findAll(NODE)[2]
    const [, zjCheckbox, shCheckbox] = wrapper.findAll(CHECKBOX)

    await nextTick()
    await shNode.trigger('click')

    const shCheckbox2 = wrapper.findAll(MENU)[1].find(CHECKBOX)
    expect(shCheckbox.classes('is-checked')).toBe(true)
    expect(shCheckbox2.classes('is-checked')).toBe(false)

    await zjCheckbox.find('input').trigger('click')
    expect(value.value).toEqual([['shanghai'], ['zhejiang']])
  })

  test('custom props', async () => {
    const value = ref([])
    const props = {
      value: 'id',
      label: 'name',
      children: 'areas',
      disabled: 'invalid',
      leaf: (data: typeof CUSTOM_PROPS_OPTIONS[0]) => !data.areas?.length,
    }
    const wrapper = mount(() => (
      <CascaderPanel
        v-model={value.value}
        options={CUSTOM_PROPS_OPTIONS}
        props={props as any}
      />
    ))

    const [bjNode, zjNode] = wrapper.findAll(NODE)
    expect(bjNode.text()).toBe('Beijing')
    expect(bjNode.find(EXPAND_ARROW).exists()).toBe(false)

    await zjNode.trigger('click')
    const [hzNode, nbNode] = wrapper.findAll(MENU)[1].findAll(NODE)
    expect(hzNode.exists()).toBe(true)
    expect(nbNode.classes('is-disabled')).toBe(true)

    await hzNode.trigger('click')
    expect(value.value).toEqual(['zhejiang', 'hangzhou'])
  })

  test('lazy load', async () => {
    vi.useFakeTimers()
    const value = ref([])
    const props = {
      lazy: true,
      lazyLoad,
    }
    const wrapper = mount(() => (
      <CascaderPanel v-model={value.value} props={props} />
    ))

    vi.runAllTimers()
    await nextTick()
    const firstOption = wrapper.find(NODE)
    expect(firstOption.exists()).toBe(true)

    await firstOption.trigger('click')
    expect(firstOption.findComponent(Loading).exists()).toBe(true)
    vi.runAllTimers()
    await nextTick()
    expect(firstOption.findComponent(Loading).exists()).toBe(false)

    const secondMenu = wrapper.findAll(MENU)[1]
    expect(secondMenu.exists()).toBe(true)

    await secondMenu.find(NODE).trigger('click')
    expect(value.value).toEqual([1, 2])
    vi.useRealTimers()
  })

  test('lazy load with default primitive value', async () => {
    vi.useFakeTimers()
    const props = {
      lazy: true,
      lazyLoad,
    }
    const wrapper = mount(() => (
      <CascaderPanel modelValue={[1, 2]} props={props} />
    ))

    vi.runAllTimers()
    await nextTick()

    expect(wrapper.findAll(MENU).length).toBe(2)
    expect(wrapper.find(`.is-active`).text()).toBe('option2')
    vi.useRealTimers()
  })

  test('lazy load with default object value', async () => {
    vi.useFakeTimers()
    const value = [{ id: 1 }, { id: 2 }] as any
    const props: CascaderProps = {
      lazy: true,
      lazyLoad(node, resolve) {
        const { level } = node
        setTimeout(() => {
          const nodes = Array.from({ length: level + 1 }).map(() => ({
            value: { id: ++id },
            label: `option${id}`,
            leaf: level >= 1,
          }))
          resolve(nodes as any)
        }, 1000)
      },
    }
    const wrapper = mount(() => (
      <CascaderPanel modelValue={value} props={props} />
    ))

    vi.runAllTimers()
    await nextTick()

    expect(wrapper.findAll(MENU).length).toBe(2)
    expect(wrapper.find(`.is-active`).text()).toBe('option2')
    vi.useRealTimers()
  })

  test('no loaded nodes should not be checked', async () => {
    vi.useFakeTimers()
    const props: CascaderProps = {
      multiple: true,
      lazy: true,
      lazyLoad(node, resolve) {
        const { level } = node
        setTimeout(() => {
          const nodes = Array.from({ length: level + 1 }).map(() => {
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
    }
    const wrapper = mount(() => <CascaderPanel props={props} />)

    vi.runAllTimers()
    await nextTick()
    const firstMenu = wrapper.findAll(MENU)[0]
    const firstOption = wrapper.find(NODE)
    await firstOption.trigger('click')
    vi.runAllTimers()
    await nextTick()

    await firstMenu.find(CHECKBOX).find('input').trigger('click')

    const secondMenu = wrapper.findAll(MENU)[1]
    expect(secondMenu.exists()).toBe(true)
    expect(firstMenu.find(CHECKBOX).classes('is-checked')).toBe(false)
    expect(firstMenu.find(CHECKBOX).classes('is-indeterminate')).toBe(true)
    expect(secondMenu.findAll(CHECKBOX)[0].classes('is-checked')).toBe(false)
    expect(secondMenu.findAll(CHECKBOX)[0].classes('is-indeterminate')).toBe(
      false
    )
    expect(secondMenu.findAll(CHECKBOX)[1].classes('is-checked')).toBe(true)
    expect(secondMenu.findAll(CHECKBOX)[1].classes('is-indeterminate')).toBe(
      false
    )
    vi.useRealTimers()
  })

  test('no loaded nodes with checkStrictly should be selectable', async () => {
    vi.useFakeTimers()
    const props: CascaderProps = {
      checkStrictly: true,
      lazy: true,
      lazyLoad(node, resolve) {
        const { level } = node
        setTimeout(() => {
          const nodes = Array.from({ length: level + 1 }).map(() => ({
            value: ++id,
            label: `Option - ${id}`,
            leaf: level >= 2,
          }))
          resolve(nodes)
        }, 1000)
      },
    }
    const wrapper = mount(() => <CascaderPanel props={props} />)

    vi.runAllTimers()
    await nextTick()
    const firstMenu = wrapper.findAll(MENU)[0]
    await firstMenu.find(RADIO).trigger('click')
    expect(firstMenu.find(RADIO).classes('is-checked')).toBe(true)
    expect(firstMenu.find(RADIO).classes('is-indeterminate')).toBe(false)

    vi.runAllTimers()
    await nextTick()
    let secondMenu = wrapper.findAll(MENU)[1]
    expect(secondMenu).toBeUndefined()
    await firstMenu.find(NODE).trigger('click')

    vi.runAllTimers()
    await nextTick()
    secondMenu = wrapper.findAll(MENU)[1]
    await secondMenu.find(NODE).trigger('click')
    expect(secondMenu.find(RADIO).classes('is-checked')).toBe(false)
    expect(secondMenu.find(RADIO).classes('is-indeterminate')).toBe(false)
    vi.useRealTimers()
  })

  test('lazy load with return item has children', async () => {
    vi.useFakeTimers()
    const value = ref([])
    const props: CascaderProps = {
      lazy: true,
      lazyLoad(node, resolve) {
        const { level } = node
        setTimeout(() => {
          if (level === 0) {
            resolve([
              {
                label: '1',
                value: 1,
              },
            ])
          } else {
            resolve([
              {
                label: '11',
                value: 11,
                children: [
                  {
                    label: '111',
                    value: 111,
                    leaf: true,
                  },
                  {
                    label: '112',
                    value: 112,
                    leaf: true,
                  },
                ],
              },
            ])
          }
        }, 1000)
      },
    }
    const wrapper = mount(() => (
      <CascaderPanel v-model={value.value} props={props} />
    ))
    vi.runAllTimers()
    await nextTick()
    const firstMenu = wrapper.findAll(MENU)[0]
    const firstOption = firstMenu.find(NODE)
    await firstOption.trigger('click')
    vi.runAllTimers()
    await nextTick()

    const secondMenu = wrapper.findAll(MENU)[1]
    const secondOption = secondMenu.find(NODE)
    await secondOption.trigger('click')
    vi.runAllTimers()
    await nextTick()

    const thridMenu = wrapper.findAll(MENU)[2]
    const thridOption = thridMenu.find(NODE)
    await thridOption.trigger('click')
    expect(value.value).toEqual([1, 11, 111])
    vi.useRealTimers()
  })

  test('getCheckedNodes and clearCheckedNodes', () => {
    const props = { multiple: true }
    const wrapper = mount(() => (
      <CascaderPanel
        options={NORMAL_OPTIONS}
        props={props}
        modelValue={[['shanghai', 'shanghai']]}
      />
    ))

    const vm = wrapper.findComponent(CascaderPanel).vm

    expect(vm.getCheckedNodes(false)?.length).toBe(2)
    expect(vm.getCheckedNodes(true)?.length).toBe(1)
    vm.clearCheckedNodes()
    expect(vm.getCheckedNodes(false)?.length).toBe(0)
  })

  test('options async load with default value', async () => {
    const options = ref<CascaderOption[]>([])
    const wrapper = mount(() => (
      <CascaderPanel
        options={options.value}
        modelValue={['shanghai', 'shanghai']}
      />
    ))

    const vm = wrapper.findComponent(CascaderPanel).vm
    expect(vm.getCheckedNodes(false)?.length).toBe(0)
    options.value = NORMAL_OPTIONS
    await nextTick()
    expect(vm.getCheckedNodes(true)?.length).toBe(1)
  })

  test('rerender node after changing model-value', async () => {
    const value = ref(['zhejiang', 'hangzhou'])
    const wrapper = mount(() => (
      <CascaderPanel options={NORMAL_OPTIONS} model-value={value.value} />
    ))
    const nodes = wrapper.findAllComponents(Node)
    const node = nodes.find((node) => node.props('node').value === 'ningbo')
    expect(node!.classes('is-active')).toBe(false)
    value.value = ['zhejiang', 'ningbo']
    await nextTick()
    expect(node!.classes('is-active')).toBe(true)
  })
})
