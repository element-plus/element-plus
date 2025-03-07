// @ts-nocheck
import { nextTick, ref } from 'vue'
import { afterEach, beforeAll, describe, expect, it, vi } from 'vitest'
import { NOOP, hasClass } from '@element-plus/utils'
import { EVENT_CODE } from '@element-plus/constants'
import { makeMountFunc } from '@element-plus/test-utils/make-mount'
import { rAF } from '@element-plus/test-utils/tick'
import { CircleClose } from '@element-plus/icons-vue'
import { usePopperContainerId } from '@element-plus/hooks'
import Select from '../src/select.vue'
import type { Props } from '../useProps'

vi.mock('lodash-unified', async () => {
  return {
    ...((await vi.importActual('lodash-unified')) as Record<string, any>),
    debounce: vi.fn((fn) => {
      fn.cancel = vi.fn()
      fn.flush = vi.fn()
      return fn
    }),
  }
})

const _mount = makeMountFunc({
  components: {
    'el-select': Select,
  },
})

const createData = (count = 1000) => {
  const initials = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']
  return Array.from({ length: count }).map((_, idx) => ({
    value: `option_${idx + 1}`,
    label: `${initials[idx % 10]}${idx}`,
  }))
}

const clickClearButton = async (wrapper) => {
  const select = wrapper.findComponent(Select)
  const selectVm = select.vm as any
  selectVm.states.inputHovering = true
  await nextTick()
  const clearBtn = wrapper.findComponent(CircleClose)
  expect(clearBtn.exists()).toBeTruthy()
  await clearBtn.trigger('click')
}

interface SelectProps {
  popperClass?: string
  value?: string | string[] | number | number[]
  options?: any[]
  props?: Props
  disabled?: boolean
  clearable?: boolean
  multiple?: boolean
  collapseTags?: boolean
  collapseTagsTooltip?: boolean
  maxCollapseTags?: number
  filterable?: boolean
  remote?: boolean
  multipleLimit?: number
  allowCreate?: boolean
  popperAppendToBody?: boolean
  placeholder?: string
  [key: string]: any
}

interface SelectEvents {
  onChange?: (value?: string) => void
  onVisibleChange?: (visible?: boolean) => void
  onRemoveTag?: (tag?: string) => void
  onFocus?: (event?: FocusEvent) => void
  onBlur?: (event?) => void
  filterMethod?: (query: string) => void | undefined
  remoteMethod?: (query: string) => void | undefined
  [key: string]: (...args) => any
}

const createSelect = (
  options: {
    data?: () => SelectProps
    methods?: SelectEvents
    slots?: {
      empty?: string
      default?: string
    }
  } = {}
) => {
  const emptySlot =
    (options.slots &&
      options.slots.empty &&
      `<template #empty>${options.slots.empty}</template>`) ||
    ''
  const defaultSlot =
    (options.slots &&
      options.slots.default &&
      `<template #default="{item}">${options.slots.default}</template>`) ||
    ''
  return _mount(
    `
      <el-select
        :options="options"
        :props="props"
        :popper-class="popperClass"
        :value-key="valueKey"
        :disabled="disabled"
        :clearable="clearable"
        :multiple="multiple"
        :collapseTags="collapseTags"
        :collapseTagsTooltip="collapseTagsTooltip"
        :max-collapse-tags="maxCollapseTags"
        :filterable="filterable"
        :multiple-limit="multipleLimit"
        :placeholder="placeholder"
        :allow-create="allowCreate"
        :remote="remote"
        :reserve-keyword="reserveKeyword"
        :scrollbar-always-on="scrollbarAlwaysOn"
        :teleported="teleported"
        :tabindex="tabindex"
        ${
          options.methods && options.methods.filterMethod
            ? `:filter-method="filterMethod"`
            : ''
        }
        ${
          options.methods && options.methods.remoteMethod
            ? `:remote-method="remoteMethod"`
            : ''
        }
        @change="onChange"
        @visible-change="onVisibleChange"
        @remove-tag="onRemoveTag"
        @focus="onFocus"
        @blur="onBlur"
        v-model="value">
        ${defaultSlot}
        ${emptySlot}
      </el-select>
    `,
    {
      data() {
        return {
          options: createData(),
          props: {
            label: 'label',
            value: 'value',
            disabled: 'disabled',
            options: 'options',
          },
          value: '',
          popperClass: '',
          allowCreate: false,
          valueKey: 'value',
          disabled: false,
          clearable: false,
          multiple: false,
          collapseTags: false,
          collapseTagsTooltip: false,
          maxCollapseTags: 1,
          remote: false,
          filterable: false,
          reserveKeyword: false,
          multipleLimit: 0,
          placeholder: DEFAULT_PLACEHOLDER,
          scrollbarAlwaysOn: false,
          popperAppendToBody: undefined,
          teleported: undefined,
          tabindex: undefined,
          ...(options.data && options.data()),
        }
      },
      methods: {
        onChange: NOOP,
        onVisibleChange: NOOP,
        onRemoveTag: NOOP,
        onFocus: NOOP,
        onBlur: NOOP,
        ...options.methods,
      },
    }
  )
}

function getOptions(): HTMLElement[] {
  return Array.from(
    document.querySelectorAll<HTMLElement>(`.${OPTION_ITEM_CLASS_NAME}`)
  )
}

const CLASS_NAME = 'el-select'
const WRAPPER_CLASS_NAME = 'el-select__wrapper'
const OPTION_ITEM_CLASS_NAME = 'el-select-dropdown__item'
const PLACEHOLDER_CLASS_NAME = 'el-select__placeholder'
const DEFAULT_PLACEHOLDER = 'Select'

describe('Select', () => {
  beforeAll(() => {
    HTMLCanvasElement.prototype.getContext = vi.fn(() => null)
  })

  afterEach(() => {
    document.body.innerHTML = ''
  })

  it('create', async () => {
    const wrapper = createSelect()
    await nextTick()
    expect(wrapper.classes()).toContain(CLASS_NAME)
    expect(wrapper.find(`.${PLACEHOLDER_CLASS_NAME}`).text()).toBe(
      DEFAULT_PLACEHOLDER
    )
    const select = wrapper.findComponent(Select)
    const tipDefWrapper = wrapper.find(`.${WRAPPER_CLASS_NAME}`)
    await tipDefWrapper.trigger('click')
    expect((select.vm as any).expanded).toBeTruthy()
  })

  it('options rendered correctly', async () => {
    const wrapper = createSelect()
    await nextTick()
    const vm = wrapper.vm as any
    const options = Array.from(
      document.querySelectorAll(`.${OPTION_ITEM_CLASS_NAME}`)
    )
    const result = options.every((option, index) => {
      const text = option.textContent
      return text === vm.options[index].label
    })
    expect(result).toBeTruthy()
  })

  it('custom dropdown class', async () => {
    createSelect({
      data: () => ({
        popperClass: 'custom-dropdown',
      }),
    })
    await nextTick()
    expect([...document.querySelector('.el-popper').classList]).toContain(
      'custom-dropdown'
    )
  })

  it('default value', async () => {
    const wrapper = createSelect({
      data: () => ({
        value: '2',
        options: [
          {
            value: '1',
            label: 'option_a',
          },
          {
            value: '2',
            label: 'option_b',
          },
          {
            value: '3',
            label: 'option_c',
          },
        ],
      }),
    })
    const vm = wrapper.vm as any
    await nextTick()
    expect(wrapper.find(`.${PLACEHOLDER_CLASS_NAME}`).text()).toBe(
      vm.options[1].label
    )
  })

  it('default value is null or undefined', async () => {
    const wrapper = createSelect({
      data: () => ({
        value: undefined,
      }),
    })
    const vm = wrapper.vm as any
    const placeholder = wrapper.find(`.${PLACEHOLDER_CLASS_NAME}`)
    expect(placeholder.text()).toBe(DEFAULT_PLACEHOLDER)
    vm.value = vm.options[2].value
    await nextTick()
    expect(placeholder.text()).toBe(vm.options[2].label)
    vm.value = null
    await nextTick()
    expect(placeholder.text()).toBe(DEFAULT_PLACEHOLDER)
  })

  it('default value is Object', async () => {
    const wrapper = createSelect({
      data: () => ({
        valueKey: 'id',
        value: { id: 1 },
        options: [
          {
            value: { id: 1 },
            label: 'option_a',
          },
          {
            value: { id: 2 },
            label: 'option_b',
          },
          {
            value: { id: 3 },
            label: 'option_c',
          },
        ],
      }),
    })
    const vm = wrapper.vm as any
    await nextTick()
    expect(wrapper.find(`.${PLACEHOLDER_CLASS_NAME}`).text()).toBe(
      vm.options[0].label
    )
    expect(vm.value).toEqual(vm.options[0].value)
  })

  it('sync set value and options', async () => {
    const wrapper = createSelect()
    await nextTick()
    const placeholder = wrapper.find(`.${PLACEHOLDER_CLASS_NAME}`)
    const vm = wrapper.vm as any
    vm.value = vm.options[1].value
    await nextTick()
    expect(placeholder.text()).toBe(vm.options[1].label)
    vm.options[1].label = 'option bb aa'
    await nextTick()
    expect(placeholder.text()).toBe('option bb aa')
  })

  it('single select', async () => {
    const wrapper = createSelect({
      data() {
        return {
          count: 0,
        }
      },
      methods: {
        onChange() {
          this.count++
        },
      },
    })
    await nextTick()
    const options = getOptions()
    const vm = wrapper.vm as any
    const placeholder = wrapper.find(`.${PLACEHOLDER_CLASS_NAME}`)
    expect(vm.value).toBe('')
    expect(placeholder.text()).toBe(DEFAULT_PLACEHOLDER)
    options[2].click()
    await nextTick()
    expect(vm.value).toBe(vm.options[2].value)
    expect(placeholder.text()).toBe(vm.options[2].label)
    options[4].click()
    await nextTick()
    expect(vm.value).toBe(vm.options[4].value)
    expect(placeholder.text()).toBe(vm.options[4].label)
    expect(vm.count).toBe(2)
  })

  it('value-key option', async () => {
    const wrapper = createSelect({
      data: () => {
        return {
          options: [
            {
              value: { id: 1 },
              label: 'option 1',
            },
            {
              value: { id: 2 },
              label: 'option 2',
            },
            {
              value: { id: 3 },
              label: 'option 3',
            },
          ],
          value: undefined,
          valueKey: 'id',
        }
      },
    })

    await nextTick()
    const vm = wrapper.vm as any
    const options = getOptions()
    options[1].click()
    await nextTick()
    expect(vm.value).toEqual(vm.options[1].value)

    options[2].click()
    await nextTick()
    expect(vm.value).toEqual(vm.options[2].value)
  })

  it('disabled option', async () => {
    const wrapper = createSelect({
      data: () => {
        return {
          options: [
            {
              value: '1',
              label: 'option 1',
              disabled: false,
            },
            {
              value: '2',
              label: 'option 2',
              disabled: true,
            },
            {
              value: '3',
              label: 'option 3',
              disabled: false,
            },
          ],
        }
      },
    })
    await nextTick()
    const vm = wrapper.vm as any
    const placeholder = wrapper.find(`.${PLACEHOLDER_CLASS_NAME}`)
    const option = document.querySelector<HTMLElement>(
      `.el-select-dropdown__item.is-disabled`
    )
    expect(option.textContent).toBe(vm.options[1].label)
    option.click()
    await nextTick()
    expect(vm.value).toBe('')
    expect(placeholder.text()).toBe(DEFAULT_PLACEHOLDER)
    vm.options[2].disabled = true
    await nextTick()
    const options = document.querySelectorAll<HTMLElement>(
      `.el-select-dropdown__item.is-disabled`
    )
    expect(options.length).toBe(2)
    expect(options.item(1).textContent).toBe(vm.options[2].label)
    options.item(1).click()
    await nextTick()
    expect(vm.value).toBe('')
    expect(placeholder.text()).toBe(DEFAULT_PLACEHOLDER)
  })

  it('disabled select', async () => {
    const wrapper = createSelect({
      data: () => {
        return {
          disabled: true,
        }
      },
    })
    await nextTick()
    expect(wrapper.find(`.${WRAPPER_CLASS_NAME}`).classes()).toContain(
      'is-disabled'
    )
  })

  it('visible event', async () => {
    const wrapper = createSelect({
      data: () => {
        return {
          visible: false,
        }
      },
      methods: {
        onVisibleChange(visible) {
          this.visible = visible
        },
      },
    })
    await nextTick()
    const vm = wrapper.vm as any
    const tipDefWrapper = wrapper.find(`.${WRAPPER_CLASS_NAME}`)
    await tipDefWrapper.trigger('click')
    await nextTick()
    expect(vm.visible).toBeTruthy()
  })

  it('clearable', async () => {
    const wrapper = createSelect({
      data: () => ({ clearable: true }),
    })
    const vm = wrapper.vm as any
    vm.value = vm.options[1].value
    await nextTick()
    await clickClearButton(wrapper)
    expect(vm.value).toBeUndefined()
    const placeholder = wrapper.find(`.${PLACEHOLDER_CLASS_NAME}`)
    expect(placeholder.text()).toBe(DEFAULT_PLACEHOLDER)
  })

  describe('initial value', () => {
    it.each([
      [null, DEFAULT_PLACEHOLDER],
      [undefined, DEFAULT_PLACEHOLDER],
      ['', DEFAULT_PLACEHOLDER],
      [[], DEFAULT_PLACEHOLDER],
      [{}, ''],
    ])(
      '[single select] initial value is %s, placeholder is "%s"',
      async (value, placeholder) => {
        const wrapper = createSelect({
          data: () => {
            return {
              value,
            }
          },
        })
        await nextTick()
        expect(wrapper.find(`.${PLACEHOLDER_CLASS_NAME}`).text()).toBe(
          placeholder
        )
      }
    )

    it.each([
      [null, DEFAULT_PLACEHOLDER],
      [undefined, DEFAULT_PLACEHOLDER],
      ['', DEFAULT_PLACEHOLDER],
      [[], DEFAULT_PLACEHOLDER],
      [{}, DEFAULT_PLACEHOLDER],
    ])(
      '[multiple select] initial value is %s, placeholder is "%s"',
      async (value, placeholder) => {
        const wrapper = createSelect({
          data: () => {
            return {
              multiple: true,
              value,
            }
          },
        })
        await nextTick()
        expect(wrapper.find(`.${PLACEHOLDER_CLASS_NAME}`).text()).toBe(
          placeholder
        )
      }
    )
  })

  describe('expose', () => {
    it('select label', async () => {
      const wrapper = createSelect({
        data: () => {
          return {
            options: [
              { value: 'value1', label: 'label1' },
              { value: 'value2', label: 'label2' },
            ],
            multiple: false,
            value: '',
          }
        },
      })
      await nextTick()
      const select = wrapper.findComponent(Select)
      const selectVm = select.vm as any
      const vm = wrapper.vm as any

      const options = getOptions()
      options[0].click()
      expect(selectVm.selectedLabel).toBe('label1')
      vm.value = 'value2'
      await nextTick()
      expect(selectVm.selectedLabel).toBe('label2')

      vm.multiple = true
      vm.value = []
      await nextTick()
      expect(selectVm.selectedLabel).toStrictEqual([])
      vm.value = ['value1', 'value2']
      await nextTick()
      expect(selectVm.selectedLabel).toStrictEqual(['label1', 'label2'])
    })
  })

  describe('multiple', () => {
    it('multiple select', async () => {
      const wrapper = createSelect({
        data: () => {
          return {
            multiple: true,
            value: [],
          }
        },
      })
      await nextTick()
      const vm = wrapper.vm as any
      const options = getOptions()
      options[1].click()
      await nextTick()
      expect(vm.value.length).toBe(1)
      expect(vm.value[0]).toBe(vm.options[1].value)
      options[3].click()
      await nextTick()
      expect(vm.value.length).toBe(2)
      expect(vm.value[1]).toBe(vm.options[3].value)
      const tagIcon = wrapper.find('.el-tag__close')
      await tagIcon.trigger('click')
      expect(vm.value.length).toBe(1)
    })

    it('remove-tag', async () => {
      const onRemoveTag = vi.fn()
      const wrapper = createSelect({
        data() {
          return {
            removeTag: '',
            multiple: true,
          }
        },
        methods: {
          onRemoveTag,
        },
      })
      await nextTick()
      const vm = wrapper.vm as any
      const options = getOptions()
      options[0].click()
      await nextTick()
      options[1].click()
      await nextTick()
      options[2].click()
      await nextTick()
      expect(vm.value.length).toBe(3)
      const tagCloseIcons = wrapper.findAll('.el-tag__close')
      await tagCloseIcons[1].trigger('click')
      expect(vm.value.length).toBe(2)
      await tagCloseIcons[0].trigger('click')
      expect(vm.value.length).toBe(1)

      const input = wrapper.find('input')
      input.trigger('keydown.delete')
      expect(vm.value.length).toBe(0)
      expect(onRemoveTag).toHaveBeenLastCalledWith('option_3')
    })

    it('limit', async () => {
      const wrapper = createSelect({
        data() {
          return {
            multiple: true,
            multipleLimit: 2,
            value: [],
          }
        },
      })
      await nextTick()
      const vm = wrapper.vm as any
      const options = getOptions()
      options[1].click()
      await nextTick()
      options[2].click()
      await nextTick()
      expect(vm.value.length).toBe(2)
      options[3].click()
      await nextTick()
      expect(vm.value.length).toBe(2)
    })

    it('value-key option', async () => {
      const wrapper = createSelect({
        data: () => {
          return {
            options: [
              {
                value: { id: 1, value: 'a' },
                label: 'option 1',
              },
              {
                value: { id: 2, value: 'b' },
                label: 'option 2',
              },
              {
                value: { id: 3, value: 'c' },
                label: 'option 3',
              },
            ],
            multiple: true,
            value: [],
            valueKey: 'id',
          }
        },
      })

      await nextTick()
      const vm = wrapper.vm as any
      const options = getOptions()
      options[1].click()
      await nextTick()
      expect(vm.value.length).toBe(1)
      expect(vm.value).toContainEqual(vm.options[1].value)
      options[2].click()
      await nextTick()
      expect(vm.value.length).toBe(2)
      expect(vm.value).toContainEqual(vm.options[2].value)
      options[2].click()
      await nextTick()
      expect(vm.value.length).toBe(1)
      expect(vm.value).not.toContainEqual(vm.options[2].value)

      vm.valueKey = 'value'
      await nextTick()
      expect(vm.value.length).toBe(1)
      expect(vm.value).toContainEqual(vm.options[1].value)
      options[0].click()
      await nextTick()
      expect(vm.value.length).toBe(2)
      expect(vm.value).toContainEqual(vm.options[0].value)
    })

    it('use aliases for custom options when default value is not in the options', async () => {
      const wrapper = createSelect({
        data() {
          return {
            multiple: true,
            value: ['option'],
            options: [
              {
                id: '1',
                name: 'option 1',
              },
              {
                id: '2',
                name: 'option 2',
              },
              {
                id: '3',
                name: 'option 3',
              },
            ],
            props: {
              label: 'name',
              value: 'id',
            },
          }
        },
      })

      await nextTick()
      const vm = wrapper.vm as any
      expect(wrapper.findAll('.el-tag').length).toBe(1)
      expect(wrapper.find('.el-select__tags-text').text()).toBe('option')
      const tagCloseIcons = wrapper.findAll('.el-tag__close')
      await tagCloseIcons[0].trigger('click')
      expect(vm.value.length).toBe(0)
    })
  })

  describe('collapseTags', () => {
    it('use collapseTags', async () => {
      const wrapper = createSelect({
        data: () => {
          return {
            multiple: true,
            collapseTags: true,
            value: [],
          }
        },
      })
      await nextTick()
      const vm = wrapper.vm as any
      const options = getOptions()
      options[0].click()
      await nextTick()
      expect(vm.value.length).toBe(1)
      expect(vm.value[0]).toBe(vm.options[0].value)
      options[1].click()
      await nextTick()
      options[2].click()
      await nextTick()
      expect(vm.value.length).toBe(3)
      const tags = wrapper.findAll('.el-tag').filter((item) => {
        return !hasClass(item.element, 'in-tooltip')
      })
      expect(tags.length).toBe(2)
    })

    it('use collapseTagsTooltip', async () => {
      const wrapper = createSelect({
        data: () => {
          return {
            multiple: true,
            collapseTags: true,
            collapseTagsTooltip: true,
            value: [],
          }
        },
      })
      await nextTick()
      const vm = wrapper.vm as any
      const options = getOptions()
      options[0].click()
      await nextTick()
      expect(vm.value.length).toBe(1)
      expect(vm.value[0]).toBe(vm.options[0].value)
      options[1].click()
      await nextTick()
      options[2].click()
      await nextTick()
      expect(vm.value.length).toBe(3)
      expect(wrapper.findAll('.el-tag')[1].element.textContent.trim()).toBe(
        '+ 2'
      )
    })

    it('use maxCollapseTags', async () => {
      const wrapper = createSelect({
        data: () => {
          return {
            multiple: true,
            collapseTags: true,
            collapseTagsTooltip: true,
            maxCollapseTags: 3,
            value: [],
          }
        },
      })
      await nextTick()
      const vm = wrapper.vm as any
      const options = getOptions()
      options[0].click()
      await nextTick()
      options[1].click()
      await nextTick()
      options[2].click()
      await nextTick()
      options[3].click()
      await nextTick()
      expect(vm.value.length).toBe(4)
      const tags = wrapper.findAll('.el-tag').filter((item) => {
        return !hasClass(item.element, 'in-tooltip')
      })
      expect(tags.length).toBe(4)
    })
  })

  describe('manually set modelValue', () => {
    it('set modelValue in single select', async () => {
      const wrapper = createSelect({
        data: () => {
          return {
            value: '',
          }
        },
      })
      await nextTick()
      const options = getOptions()
      const vm = wrapper.vm as any
      const placeholder = wrapper.find(`.${PLACEHOLDER_CLASS_NAME}`)

      expect(vm.value).toBe('')
      expect(placeholder.text()).toBe(DEFAULT_PLACEHOLDER)

      options[0].click()
      await nextTick()
      expect(vm.value).toBe(vm.options[0].value)
      expect(placeholder.text()).toBe(vm.options[0].label)
      const option = vm.options[0].value

      vm.value = ''
      await nextTick()
      expect(vm.value).toBe('')
      expect(placeholder.text()).toBe(DEFAULT_PLACEHOLDER)

      vm.value = option
      await nextTick()
      expect(vm.value).toBe('option_1')
      expect(placeholder.text()).toBe('a0')
    })

    it('set modelValue in multiple select', async () => {
      const wrapper = createSelect({
        data: () => {
          return {
            multiple: true,
            value: [],
          }
        },
      })
      await nextTick()
      const vm = wrapper.vm as any
      let placeholder = wrapper.find(`.${PLACEHOLDER_CLASS_NAME}`)
      expect(placeholder.exists()).toBeTruthy()

      vm.value = ['option_1']
      await nextTick()
      expect(wrapper.find('.el-select__tags-text').text()).toBe('a0')
      placeholder = wrapper.find(`.${PLACEHOLDER_CLASS_NAME}`)
      expect(placeholder.exists()).toBeFalsy()

      vm.value = []
      await nextTick()
      expect(wrapper.find('.el-select__tags-text').exists()).toBeFalsy()
      placeholder = wrapper.find(`.${PLACEHOLDER_CLASS_NAME}`)
      expect(placeholder.exists()).toBeTruthy()
    })

    it('set modelValue when filtering in multiple select', async () => {
      const wrapper = createSelect({
        data: () => {
          return {
            multiple: true,
            filterable: true,
            value: [],
          }
        },
      })
      const vm = wrapper.vm as any
      const input = wrapper.find('input')
      await input.trigger('click')
      input.element.value = '1111'
      await input.trigger('input')
      vm.value = ['option_1']
      await nextTick()
      expect(wrapper.find('.el-select__tags-text').text()).toBe('a0')
    })

    it('set object modelValue in single select', async () => {
      const wrapper = createSelect({
        data: () => {
          return {
            value: null,
            valueKey: 'id',
            options: [
              {
                label: 'aa',
                value: { id: 1, name: 'a1' },
              },
              {
                label: 'bb',
                value: { id: 2, name: 'b2' },
              },
              {
                label: 'cc',
                value: { id: 3, name: 'c3' },
              },
            ],
          }
        },
      })
      await nextTick()
      const options = getOptions()
      const vm = wrapper.vm as any
      const placeholder = wrapper.find(`.${PLACEHOLDER_CLASS_NAME}`)

      expect(vm.value).toBe(null)
      expect(placeholder.text()).toBe(DEFAULT_PLACEHOLDER)
      options[0].click()
      await nextTick()
      expect(vm.value).toBe(vm.options[0].value)
      expect(placeholder.text()).toBe(vm.options[0].label)

      vm.value = { id: 2, name: 'b2' }
      await nextTick()
      expect(vm.value).toEqual(vm.options[1].value)
      expect(placeholder.text()).toBe(vm.options[1].label)
    })
  })

  describe('event', () => {
    it('focus', async () => {
      const onFocus = vi.fn()
      const wrapper = createSelect({
        methods: {
          onFocus,
        },
      })
      const select = wrapper.findComponent(Select)
      const input = select.find('input')
      await input.trigger('focus')

      expect(input.exists()).toBe(true)
      await input.trigger('focus')
      expect(onFocus).toHaveBeenCalledTimes(1)
    })

    it('blur', async () => {
      const onBlur = vi.fn()
      const wrapper = createSelect({
        methods: {
          onBlur,
        },
      })
      const select = wrapper.findComponent(Select)
      const input = select.find('input')
      expect(input.exists()).toBe(true)
      await input.trigger('blur')
      expect(onBlur).toHaveBeenCalledTimes(1)
    })

    it('focus & blur for multiple & filterable select', async () => {
      const onFocus = vi.fn()
      const onBlur = vi.fn()
      const wrapper = createSelect({
        data() {
          return {
            multiple: true,
            filterable: true,
            value: [],
          }
        },
        methods: {
          onFocus,
          onBlur,
        },
      })
      const select = wrapper.findComponent(Select)
      const input = select.find('input')

      expect(input.exists()).toBe(true)
      await input.trigger('focus')
      expect(onFocus).toHaveBeenCalledTimes(1)
      await input.trigger('blur')
      expect(onBlur).toHaveBeenCalled()

      await input.trigger('focus')
      expect(onFocus).toHaveBeenCalledTimes(2)
      await input.trigger('blur')
      expect(onBlur).toHaveBeenCalled()
    })

    it('only emit change on user input', async () => {
      const handleChanged = vi.fn()
      const wrapper = createSelect({
        methods: {
          onChange: handleChanged,
        },
      })
      await nextTick()
      const vm = wrapper.vm as any
      vm.value = 'option_2'
      await nextTick()
      expect(handleChanged).toHaveBeenCalledTimes(0)
      const options = getOptions()
      options[4].click()
      await nextTick()
      expect(handleChanged).toHaveBeenCalled()
    })
  })

  describe('allow-create', () => {
    it('single select', async () => {
      const wrapper = createSelect({
        data: () => {
          return {
            allowCreate: true,
            filterable: true,
            clearable: true,
            options: [
              {
                value: '1',
                label: 'option 1',
              },
              {
                value: '2',
                label: 'option 2',
              },
              {
                value: '3',
                label: 'option 3',
              },
            ],
          }
        },
      })
      await nextTick()
      const select = wrapper.findComponent(Select)
      const selectVm = select.vm as any
      const input = wrapper.find('input')
      await input.trigger('click')
      await rAF()
      const vm = wrapper.vm as any
      // create a new option
      input.element.value = '1111'
      await input.trigger('input')
      await nextTick()
      expect(selectVm.filteredOptions.length).toBe(1)
      // selected the new option
      selectVm.onSelect(selectVm.filteredOptions[0])
      expect(vm.value).toBe('1111')
      await input.trigger('click')
      await nextTick()
      await rAF()
      await input.trigger('click')
      await nextTick()
      await rAF()
      expect(selectVm.filteredOptions.length).toBe(4)
      selectVm.handleClear()
      await nextTick()
      expect(selectVm.filteredOptions.length).toBe(3)
    })

    it('multiple', async () => {
      const wrapper = createSelect({
        data: () => {
          return {
            allowCreate: true,
            filterable: true,
            clearable: true,
            multiple: true,
            options: [
              {
                value: '1',
                label: 'option 1',
              },
              {
                value: '2',
                label: 'option 2',
              },
              {
                value: '3',
                label: 'option 3',
              },
            ],
          }
        },
      })
      await nextTick()
      const vm = wrapper.vm as any
      const input = wrapper.find('input')
      await input.trigger('click')
      input.element.value = '1111'
      await input.trigger('input')
      await nextTick()
      const select = wrapper.findComponent(Select)
      const selectVm = select.vm as any
      expect(selectVm.filteredOptions.length).toBe(1)
      // selected the new option
      selectVm.onSelect(selectVm.filteredOptions[0])
      // closed the menu
      await input.trigger('click')
      await rAF()
      input.element.value = '2222'
      await input.trigger('input')
      await nextTick()
      selectVm.onSelect(selectVm.filteredOptions[0])
      expect(JSON.stringify(vm.value)).toBe(JSON.stringify(['1111', '2222']))
      await input.trigger('click')
      expect(selectVm.filteredOptions.length).toBe(5)
      // remove tag
      const tagCloseIcons = wrapper.findAll('.el-tag__close')
      await tagCloseIcons[1].trigger('click')
      await rAF()
      expect(selectVm.filteredOptions.length).toBe(4)
      // simulate backspace
      await wrapper.find('input').trigger('keydown', {
        key: EVENT_CODE.backspace,
      })
      expect(selectVm.filteredOptions.length).toBe(3)
    })
  })

  it('reserve-keyword', async () => {
    const wrapper = createSelect({
      data: () => {
        return {
          filterable: true,
          clearable: true,
          multiple: true,
          reserveKeyword: true,
          options: [
            {
              value: 'a1',
              label: 'a1',
            },
            {
              value: 'b1',
              label: 'b1',
            },
            {
              value: 'a2',
              label: 'a2',
            },
            {
              value: 'b2',
              label: 'b2',
            },
          ],
        }
      },
    })
    await nextTick()
    const vm = wrapper.vm as any
    await nextTick()
    await wrapper.trigger('click')
    const input = wrapper.find('input')

    input.element.value = 'a'
    await input.trigger('input')
    await nextTick()
    let options = getOptions()
    expect(options.length).toBe(2)
    options[0].click()
    await nextTick()
    options = getOptions()
    expect(options.length).toBe(2)

    input.element.value = ''
    await input.trigger('input')
    await nextTick()
    options = getOptions()
    expect(options.length).toBe(4)

    vm.reserveKeyword = false
    await nextTick()
    input.element.value = 'a'
    await input.trigger('input')
    await nextTick()
    options = getOptions()
    expect(options.length).toBe(2)
    options[0].click()
    await nextTick()
    options = getOptions()
    expect(options.length).toBe(4)
  })

  it('render empty slot', async () => {
    const wrapper = createSelect({
      data() {
        return {
          options: [],
        }
      },
      slots: {
        empty: '<div class="empty-slot">EmptySlot</div>',
      },
    })
    await nextTick()
    expect(
      wrapper
        .findComponent({
          name: 'ElPopperContent',
        })
        .find('.empty-slot')
        .exists()
    ).toBeTruthy()
  })

  it('should set placeholder to label of selected option when filterable is true and multiple is false', async () => {
    const wrapper = createSelect({
      data() {
        return {
          options: [
            {
              value: '1',
              label: 'option 1',
            },
            {
              value: '2',
              label: 'option 2',
            },
            {
              value: '3',
              label: 'option 3',
            },
          ],
          filterable: true,
          multiple: false,
        }
      },
    })
    await nextTick()
    const vm = wrapper.vm as any
    const placeholder = wrapper.find(`.${PLACEHOLDER_CLASS_NAME}`)
    vm.value = '2'
    await nextTick()
    const select = wrapper.findComponent(Select)
    const selectVm = select.vm as any
    selectVm.toggleMenu()
    const input = wrapper.find('input')
    await input.trigger('focus')
    expect(placeholder.text()).toBe('option 2')
  })

  it('not options keep the selected label', async () => {
    const initial = [
      {
        value: '1',
        label: 'option 1',
      },
      {
        value: '2',
        label: 'option 2',
      },
    ]

    const wrapper = createSelect({
      data() {
        return {
          value: '1',
          options: [...initial],
        }
      },

      methods: {
        handleSearch(value) {
          this.options = initial.filter((item) => item.label.includes(value))
        },
      },
    })

    await nextTick()

    const select = wrapper.findComponent(Select)
    const selectVm = select.vm as any
    const vm = wrapper.vm as any

    expect(selectVm.selectedLabel).toBe('option 1')

    const trigger = wrapper.find(`.${WRAPPER_CLASS_NAME}`)

    await trigger.trigger('mouseenter')
    await trigger.trigger('click')

    vm.handleSearch('2')
    await nextTick()
    expect(wrapper.vm.options.length).toBe(1)
    expect(selectVm.selectedLabel).toBe('option 1')

    vm.handleSearch('3')
    await nextTick()
    expect(wrapper.vm.options.length).toBe(0)
    expect(selectVm.selectedLabel).toBe('option 1')

    vm.value = '3'
    await nextTick()
    expect(selectVm.selectedLabel).toBe('3')

    vm.value = ''
    await nextTick()
    expect(selectVm.selectedLabel).toBe('')
  })

  it('default value is null or undefined', async () => {
    const wrapper = createSelect({
      data() {
        return {
          value: null,
        }
      },
    })
    await nextTick()
    const vm = wrapper.vm as any
    const placeholder = wrapper.find(`.${PLACEHOLDER_CLASS_NAME}`)
    expect(placeholder.text()).toBe(DEFAULT_PLACEHOLDER)
    vm.value = undefined
    await nextTick()
    expect(placeholder.text()).toBe(DEFAULT_PLACEHOLDER)
  })

  it('default value is 0', async () => {
    const wrapper = createSelect({
      data: () => ({
        value: 0,
        options: [
          {
            value: 0,
            label: 'option_a',
          },
          {
            value: 1,
            label: 'option_b',
          },
          {
            value: 2,
            label: 'option_c',
          },
        ],
      }),
    })
    await nextTick()
    const placeholder = wrapper.find(`.${PLACEHOLDER_CLASS_NAME}`)
    expect(placeholder.text()).toBe('option_a')
  })

  it('the scroll position of the dropdown should be correct when value is 0', async () => {
    const options = Array.from({ length: 1000 }).map((_, idx) => ({
      value: 999 - idx,
      label: `options ${999 - idx}`,
    }))
    const wrapper = createSelect({
      data() {
        return {
          value: 0,
          options,
        }
      },
    })
    await nextTick()
    await wrapper.find(`.${WRAPPER_CLASS_NAME}`).trigger('click')
    const optionsDoms = Array.from(
      document.querySelectorAll(`.${OPTION_ITEM_CLASS_NAME}`)
    )
    const result = optionsDoms.some((option) => {
      const text = option.textContent
      return text === 'options 0'
    })
    expect(result).toBeTruthy()
  })

  it('emptyText error show', async () => {
    const wrapper = createSelect({
      data() {
        return {
          value: `${Math.random()}`,
        }
      },
    })
    await nextTick()
    const vm = wrapper.vm as any
    const placeholder = wrapper.find(`.${PLACEHOLDER_CLASS_NAME}`)
    expect(placeholder.text()).toBe(vm.value)
  })

  it('customized option renderer', async () => {
    const wrapper = createSelect({
      slots: {
        default: `
          <div class="custom-renderer">
            <span style="margin-right: 8px;">{{ item.label }}</span>
            <span style="color: var(--el-text-color-secondary); font-size: 13px">
              {{ item.value }}
            </span>
          </div>
        `,
      },
    })
    await nextTick()
    expect(
      wrapper
        .findComponent({
          name: 'ElPopperContent',
        })
        .findAll('.custom-renderer').length
    ).toBeGreaterThan(0)
  })

  it('tag of disabled option is not closable', async () => {
    const wrapper = createSelect({
      data() {
        return {
          multiple: true,
          options: [
            {
              value: 1,
              label: 'option 1',
              disabled: true,
            },
            {
              value: 2,
              label: 'option 2',
              disabled: true,
            },
            {
              value: 3,
              label: 'option 3',
            },
          ],
          value: [2, 3],
        }
      },
    })
    await nextTick()
    expect(wrapper.findAll('.el-tag').length).toBe(2)
    const tagCloseIcons = wrapper.findAll('.el-tag__close')
    expect(tagCloseIcons.length).toBe(1)
    await tagCloseIcons[0].trigger('click')
    expect(wrapper.findAll('.el-tag__close').length).toBe(0)
    expect(wrapper.findAll('.el-tag').length).toBe(1)
  })

  it('modelValue should be deep reactive in multiple mode', async () => {
    const wrapper = createSelect({
      data() {
        return {
          multiple: true,
          value: ['option_1', 'option_2', 'option_3'],
        }
      },
    })
    await nextTick()
    expect(wrapper.findAll('.el-tag').length).toBe(3)
    const vm = wrapper.vm as any
    vm.value.splice(0, 1)
    await nextTick()
    expect(wrapper.findAll('.el-tag').length).toBe(2)
  })

  it('should reset placeholder after clear when both multiple and filterable are true', async () => {
    const wrapper = createSelect({
      data() {
        return {
          value: ['option_1'],
          clearable: true,
          filterable: true,
          multiple: true,
        }
      },
    })
    await nextTick()
    expect(wrapper.find(`.${PLACEHOLDER_CLASS_NAME}`).exists()).toBeFalsy()
    // When all tags are removed, the placeholder should be displayed
    const tagCloseIcon = wrapper.find('.el-tag__close')
    await tagCloseIcon.trigger('click')
    expect(wrapper.find(`.${PLACEHOLDER_CLASS_NAME}`).text()).toBe(
      DEFAULT_PLACEHOLDER
    )
    // The placeholder should disappear after it is selected again
    const options = getOptions()
    options[0].click()
    await nextTick()
    expect(wrapper.find(`.${PLACEHOLDER_CLASS_NAME}`).exists()).toBeFalsy()
    // Simulate keyboard events
    const selectInput = wrapper.find('input')
    await selectInput.trigger('keydown', {
      key: EVENT_CODE.backspace,
    })
    await nextTick()
    expect(wrapper.find(`.${PLACEHOLDER_CLASS_NAME}`).text()).toBe(
      DEFAULT_PLACEHOLDER
    )
  })

  describe('filter method', () => {
    async function testFilterMethod({ multiple = false }) {
      const filterMethod = vi.fn()
      const wrapper = createSelect({
        data() {
          return {
            filterable: true,
            multiple,
          }
        },
        methods: {
          filterMethod,
        },
      })
      const input = wrapper.find('input')
      input.element.value = 'query'
      await input.trigger('input')
      expect(filterMethod).toHaveBeenCalled()
    }
    it('should call filter method', async () => {
      await testFilterMethod({ multiple: false })
    })

    it('should call filter method in multiple mode', async () => {
      await testFilterMethod({ multiple: true })
    })

    it('should re-render', async () => {
      const wrapper = createSelect({
        data() {
          return {
            multiple: true,
            filterable: true,
          }
        },
        methods: {
          filterMethod() {
            this.options = [
              {
                value: 1,
                label: 'option 1',
              },
              {
                value: 2,
                label: 'option 2',
              },
              {
                value: 3,
                label: 'option 3',
              },
            ]
          },
        },
      })
      const input = wrapper.find('input')
      input.element.value = 'query'
      await input.trigger('input')
      await nextTick()
      input.element.value = ''
      await input.trigger('input')
      await nextTick()
      const options = getOptions()
      expect(options.length).toBe(3)
    })
  })

  describe('remote search', () => {
    async function testRemoteSearch({ multiple = false }) {
      const remoteMethod = vi.fn()
      const wrapper = createSelect({
        data() {
          return {
            filterable: true,
            remote: true,
            multiple,
          }
        },
        methods: {
          remoteMethod,
        },
      })
      const input = wrapper.find('input')
      input.element.value = 'query'
      await input.trigger('input')
      expect(remoteMethod).toHaveBeenCalled()
    }
    it('should call remote method', async () => {
      await testRemoteSearch({ multiple: false })
    })

    it('should call remote method in multiple mode', async () => {
      await testRemoteSearch({ multiple: true })
    })
  })

  it('remote search should be not initialized', async () => {
    const states = ['Alabama', 'Alaska', 'Arizona', 'Arkansas']
    const list = states.map((item): ListItem => {
      return { value: `value:${item}`, label: `label:${item}` }
    })
    const options = ref([{ value: `value:Alabama`, label: `label:Alabama` }])
    const remoteMethod = (query: string) => {
      if (query !== '') {
        options.value = list.filter((item) => {
          return item.label.toLowerCase().includes(query.toLowerCase())
        })
      } else {
        options.value = []
      }
    }
    const wrapper = createSelect({
      data() {
        return {
          filterable: true,
          remote: true,
          options,
          multiple: true,
          value: ['value:Alabama'],
        }
      },
      methods: {
        remoteMethod,
      },
    })
    const input = wrapper.find('input')
    await input.trigger('click')
    input.element.value = 'A'
    await input.trigger('input')

    const tag = wrapper.find('.el-select__tags-text')
    // filter or remote-search scenarios should be not initialized
    expect(tag.text()).toBe('label:Alabama')

    await wrapper.trigger('blur')
    await input.trigger('click')
    // filter or remote-search scenarios should be not initialized
    expect(tag.text()).toBe('label:Alabama')
  })

  it('keyboard operations', async () => {
    const wrapper = createSelect({
      data() {
        return {
          multiple: true,
          options: [
            {
              value: 1,
              label: 'option 1',
              disabled: true,
            },
            {
              value: 2,
              label: 'option 2',
              disabled: true,
            },
            {
              value: 3,
              label: 'option 3',
            },
            {
              value: 4,
              label: 'option 4',
            },
            {
              value: 5,
              label: 'option 5',
              options: [
                {
                  value: 51,
                  label: 'option 5-1',
                },
                {
                  value: 52,
                  label: 'option 5-2',
                },
                {
                  value: 53,
                  label: 'option 5-3',
                  disabled: true,
                },
              ],
            },
            {
              value: 6,
              label: 'option 6',
            },
          ],
          value: [],
        }
      },
    })
    const select = wrapper.findComponent(Select)
    const selectVm = select.vm as any
    const vm = wrapper.vm as any
    const tipDefWrapper = wrapper.find(`.${WRAPPER_CLASS_NAME}`)
    await tipDefWrapper.trigger('click')
    await nextTick()
    expect(selectVm.states.hoveringIndex).toBe(-1)
    // should skip the disabled option
    selectVm.onKeyboardNavigate('forward')
    selectVm.onKeyboardNavigate('forward')
    await nextTick()
    expect(selectVm.states.hoveringIndex).toBe(3)
    // should skip the group option
    selectVm.onKeyboardNavigate('backward')
    selectVm.onKeyboardNavigate('backward')
    selectVm.onKeyboardNavigate('backward')
    selectVm.onKeyboardNavigate('backward')
    await nextTick()
    expect(selectVm.states.hoveringIndex).toBe(5)
    selectVm.onKeyboardNavigate('backward')
    selectVm.onKeyboardNavigate('backward')
    selectVm.onKeyboardNavigate('backward')
    await nextTick()
    // navigate to the last one
    expect(selectVm.states.hoveringIndex).toBe(8)
    selectVm.onKeyboardSelect()
    await nextTick()
    expect(vm.value).toEqual([6])
  })

  it('multiple select when content overflow', async () => {
    const wrapper = createSelect({
      data() {
        return {
          options: [
            {
              value: '选项1',
              label:
                '黄金糕黄金糕黄金糕黄金糕黄金糕黄金糕黄金糕黄金糕黄金糕黄金糕黄金糕黄金糕黄金糕黄金糕黄金糕黄金糕黄金糕黄金糕黄金糕黄金糕',
            },
            {
              value: '选项2',
              label:
                '双皮奶双皮奶双皮奶双皮奶双皮奶双皮奶双皮奶双皮奶双皮奶双皮奶双皮奶双皮奶双皮奶',
            },
            {
              value: '选项3',
              label: '蚵仔煎蚵仔煎蚵仔煎蚵仔煎蚵仔煎蚵仔煎',
            },
            {
              value: '选项4',
              label: '龙须面',
            },
            {
              value: '选项5',
              label: '北京烤鸭',
            },
          ],
        }
      },
    })
    const select = wrapper.findComponent(Select)
    const selectVm = select.vm as any
    const selectDom = wrapper.find('.el-select__wrapper').element
    const selectRect = {
      height: 40,
      width: 221,
      x: 44,
      y: 8,
      top: 8,
    }
    const mockSelectWidth = vi
      .spyOn(selectDom, 'getBoundingClientRect')
      .mockReturnValue(selectRect as DOMRect)
    selectVm.handleResize()
    const options = getOptions()
    options[0].click()
    await nextTick()
    options[1].click()
    await nextTick()
    options[2].click()
    await nextTick()
    const tagWrappers = wrapper.findAll('.el-select__tags-text')
    for (const tagWrapper of tagWrappers) {
      const tagWrapperDom = tagWrapper.element
      expect(
        Number.parseInt(tagWrapperDom.style.maxWidth) === selectRect.width - 42
      ).toBe(true)
    }
    mockSelectWidth.mockRestore()
  })

  describe('scrollbarAlwaysOn flag control the scrollbar whether always displayed', () => {
    it('The default scrollbar is not always displayed', async () => {
      const wrapper = createSelect()
      await nextTick()
      const select = wrapper.findComponent(Select)
      const tipDefWrapper = wrapper.find(`.${WRAPPER_CLASS_NAME}`)
      await tipDefWrapper.trigger('click')
      expect((select.vm as any).expanded).toBeTruthy()
      const box = document.querySelector<HTMLElement>('.el-vl__wrapper')
      expect(hasClass(box, 'always-on')).toBe(false)
    })

    it('set the scrollbar-always-on value to true, keep the scroll bar displayed', async () => {
      const wrapper = createSelect({
        data() {
          return {
            scrollbarAlwaysOn: true,
          }
        },
      })
      await nextTick()
      const select = wrapper.findComponent(Select)
      const tipDefWrapper = wrapper.find(`.${WRAPPER_CLASS_NAME}`)
      await tipDefWrapper.trigger('click')
      expect((select.vm as any).expanded).toBeTruthy()
      const box = document.querySelector<HTMLElement>('.el-vl__wrapper')
      expect(hasClass(box, 'always-on')).toBe(true)
    })
  })

  describe('teleported API', () => {
    it('should mount on popper container', async () => {
      expect(document.body.innerHTML).toBe('')
      createSelect({
        data() {
          return {
            options: [
              {
                value: '选项1',
                label:
                  '黄金糕黄金糕黄金糕黄金糕黄金糕黄金糕黄金糕黄金糕黄金糕黄金糕黄金糕黄金糕黄金糕黄金糕黄金糕黄金糕黄金糕黄金糕黄金糕黄金糕',
              },
              {
                value: '选项2',
                label:
                  '双皮奶双皮奶双皮奶双皮奶双皮奶双皮奶双皮奶双皮奶双皮奶双皮奶双皮奶双皮奶双皮奶',
              },
              {
                value: '选项3',
                label: '蚵仔煎蚵仔煎蚵仔煎蚵仔煎蚵仔煎蚵仔煎',
              },
              {
                value: '选项4',
                label: '龙须面',
              },
              {
                value: '选项5',
                label: '北京烤鸭',
              },
            ],
          }
        },
      })

      await nextTick()
      const { selector } = usePopperContainerId()
      expect(document.body.querySelector(selector.value)!.innerHTML).not.toBe(
        ''
      )
    })

    it('should not mount on the popper container', async () => {
      expect(document.body.innerHTML).toBe('')
      createSelect({
        data() {
          return {
            teleported: false,
            options: [
              {
                value: '选项1',
                label:
                  '黄金糕黄金糕黄金糕黄金糕黄金糕黄金糕黄金糕黄金糕黄金糕黄金糕黄金糕黄金糕黄金糕黄金糕黄金糕黄金糕黄金糕黄金糕黄金糕黄金糕',
              },
              {
                value: '选项2',
                label:
                  '双皮奶双皮奶双皮奶双皮奶双皮奶双皮奶双皮奶双皮奶双皮奶双皮奶双皮奶双皮奶双皮奶',
              },
              {
                value: '选项3',
                label: '蚵仔煎蚵仔煎蚵仔煎蚵仔煎蚵仔煎蚵仔煎',
              },
              {
                value: '选项4',
                label: '龙须面',
              },
              {
                value: '选项5',
                label: '北京烤鸭',
              },
            ],
          }
        },
      })

      await nextTick()
      const { selector } = usePopperContainerId()
      expect(document.body.querySelector(selector.value).innerHTML).toBe('')
    })
  })

  it('filterable case-insensitive', async () => {
    const wrapper = createSelect({
      data: () => {
        return {
          filterable: true,
          options: [
            {
              value: '1',
              label: 'option 1',
            },
            {
              value: '2',
              label: 'option 2',
            },
            {
              value: '3',
              label: 'OPtion 3',
            },
          ],
        }
      },
    })
    await nextTick()
    const select = wrapper.findComponent(Select)
    const selectVm = select.vm as any
    selectVm.expanded = true
    await nextTick()
    await rAF()
    const input = wrapper.find('input')
    input.element.value = 'op'
    await input.trigger('input')
    await nextTick()
    expect(selectVm.filteredOptions.length).toBe(3)
  })

  it('backspace key should delete selected tag but should not delete disabled options', async () => {
    const wrapper = createSelect({
      data() {
        return {
          multiple: true,
          filterable: true,
          options: [
            {
              value: 'Option1',
              label: 'option 1',
              disabled: true,
            },
            {
              value: 'Option2',
              label: 'option 2',
              disabled: false,
            },
          ],
          value: ['Option2', 'Option1'],
        }
      },
    })
    await nextTick()
    const selectInput = wrapper.find('.el-select__input')
    expect(wrapper.findAll('.el-tag').length).toBe(2)
    // after deletion, an el-tag will be deleted
    await selectInput.trigger('keydown', {
      code: EVENT_CODE.backspace,
      key: EVENT_CODE.backspace,
    })
    await nextTick()
    expect(wrapper.findAll('.el-tag').length).toBe(1)
    await selectInput.trigger('keydown', {
      code: EVENT_CODE.backspace,
      key: EVENT_CODE.backspace,
    })
    await nextTick()
    // after deletion, an el-tag still exist
    expect(wrapper.findAll('.el-tag').length).toBe(1)
  })

  it('should be trigger the click event', async () => {
    const handleClick = vi.fn()
    const wrapper = _mount(`<el-select :options="[]" @click="handleClick" />`, {
      methods: {
        handleClick,
      },
    })

    await wrapper.find(`.${WRAPPER_CLASS_NAME}`).trigger('click')
    expect(handleClick).toHaveBeenCalledOnce()
  })

  describe('It should generate accessible attributes', () => {
    it('create', async () => {
      const wrapper = createSelect()

      const input = wrapper.find('input')
      expect(input.attributes('role')).toBe('combobox')
      expect(input.attributes('tabindex')).toBe('0')
      expect(input.attributes('aria-autocomplete')).toBe('list')
      expect(input.attributes('aria-expanded')).toBe('false')
      expect(input.attributes('aria-haspopup')).toBe('listbox')
    })

    it('tabindex', () => {
      const wrapper = createSelect({
        data: () => ({
          tabindex: 1,
        }),
      })

      const input = wrapper.find('input')
      expect(input.attributes('tabindex')).toBe('1')
    })
  })
})
