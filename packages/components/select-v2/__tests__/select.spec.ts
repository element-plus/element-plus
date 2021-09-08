import { nextTick } from 'vue'
import { NOOP } from '@vue/shared'
import { EVENT_CODE } from '@element-plus/utils/aria'
import { makeMountFunc } from '@element-plus/test-utils/make-mount'
import Select from '../src/select.vue'

jest.useFakeTimers()

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
  selectVm.states.comboBoxHovering = true
  await nextTick()
  const clearBtn = wrapper.find(`.${selectVm.clearIcon}`)
  expect(clearBtn.exists()).toBeTruthy()
  await clearBtn.trigger('click')
}

interface SelectProps {
  popperClass?: string
  value?: string | string[] | number | number[]
  options?: any[]
  disabled?: boolean
  clearable?: boolean
  multiple?: boolean
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
        :popper-class="popperClass"
        :disabled="disabled"
        :clearable="clearable"
        :multiple="multiple"
        :filterable="filterable"
        :multiple-limit="multipleLimit"
        :popper-append-to-body="popperAppendToBody"
        :placeholder="placeholder"
        :allow-create="allowCreate"
        :remote="remote"
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
        @remove-tah="onRemoveTag"
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
          value: '',
          popperClass: '',
          allowCreate: false,
          disabled: false,
          clearable: false,
          multiple: false,
          remote: false,
          filterable: false,
          multipleLimit: 0,
          popperAppendToBody: true,
          placeholder: DEFAULT_PLACEHOLDER,
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

const CLASS_NAME = 'el-select-v2'
const WRAPPER_CLASS_NAME = 'el-select-v2__wrapper'
const OPTION_ITEM_CLASS_NAME = 'el-select-dropdown__option-item'
const PLACEHOLDER_CLASS_NAME = 'el-select-v2__placeholder'
const DEFAULT_PLACEHOLDER = 'Select'

describe('Select', () => {
  afterEach(() => {
    document.body.innerHTML = ''
  })

  it('create', async () => {
    const wrapper = createSelect()
    await nextTick()
    expect(wrapper.classes()).toContain(CLASS_NAME)
    expect(wrapper.find(`.${PLACEHOLDER_CLASS_NAME}`).text()).toContain(
      DEFAULT_PLACEHOLDER
    )
    const select = wrapper.findComponent(Select)
    await wrapper.trigger('click')
    expect((select.vm as any).expanded).toBeTruthy()
  })

  it('options rendered correctly', async () => {
    const wrapper = createSelect()
    await nextTick()
    const vm = wrapper.vm as any
    const options = document.getElementsByClassName(OPTION_ITEM_CLASS_NAME)
    const result = [].every.call(options, (option, index) => {
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
    expect(document.querySelector('.el-popper').classList).toContain(
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
    const wrapper = createSelect()
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
      `.el-select-dropdown__option-item.is-disabled`
    )
    expect(option.textContent).toBe(vm.options[1].label)
    option.click()
    await nextTick()
    expect(vm.value).toBe('')
    expect(placeholder.text()).toBe(DEFAULT_PLACEHOLDER)
    vm.options[2].disabled = true
    await nextTick()
    const options = document.querySelectorAll<HTMLElement>(
      `.el-select-dropdown__option-item.is-disabled`
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
    await wrapper.trigger('click')
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
    expect(vm.value).toBe('')
    const placeholder = wrapper.find(`.${PLACEHOLDER_CLASS_NAME}`)
    expect(placeholder.text()).toBe(DEFAULT_PLACEHOLDER)
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
      const wrapper = createSelect({
        data() {
          return {
            removeTag: '',
            multiple: true,
          }
        },
        methods: {
          onRemoveTag(tag) {
            this.removeTag = tag
          },
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
  })

  describe('event', () => {
    it('focus & blur', async () => {
      const onFocus = jest.fn()
      const onBlur = jest.fn()
      const wrapper = createSelect({
        methods: {
          onFocus,
          onBlur,
        },
      })
      const input = wrapper.find('input')
      const select = wrapper.findComponent(Select)
      await input.trigger('focus')
      const selectVm = select.vm as any
      // Simulate focus state to trigger menu multiple times
      selectVm.toggleMenu()
      await nextTick()
      selectVm.toggleMenu()
      await nextTick()
      // Simulate click the outside
      selectVm.handleClickOutside()
      await nextTick()
      expect(onFocus).toHaveBeenCalledTimes(1)
      expect(onBlur).toHaveBeenCalled()
    })

    it('focus & blur for multiple & filterable select', async () => {
      const onFocus = jest.fn()
      const onBlur = jest.fn()
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
      const input = wrapper.find('input')
      const select = wrapper.findComponent(Select)
      await input.trigger('focus')
      const selectVm = select.vm as any
      // Simulate focus state to trigger menu multiple times
      selectVm.toggleMenu()
      await nextTick()
      selectVm.toggleMenu()
      await nextTick()
      // Select multiple items in multiple mode without triggering focus
      const options = getOptions()
      options[1].click()
      await nextTick()
      options[2].click()
      await nextTick()
      expect(onFocus).toHaveBeenCalledTimes(1)
      // Simulate click the outside
      selectVm.handleClickOutside()
      await nextTick()
      await nextTick()
      expect(onBlur).toHaveBeenCalled()
    })

    it('only emit change on user input', async () => {
      const handleChanged = jest.fn()
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
            popperAppendToBody: false,
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
      selectVm.expanded = true
      await nextTick()
      const vm = wrapper.vm as any
      const input = wrapper.find('input')
      // create a new option
      input.element.value = '1111'
      await input.trigger('input')
      await nextTick()
      expect(selectVm.filteredOptions.length).toBe(1)
      // selected the new option
      selectVm.onSelect(selectVm.filteredOptions[0])
      expect(vm.value).toBe('1111')
      selectVm.expanded = false
      await nextTick()
      selectVm.expanded = true
      await nextTick()
      expect(selectVm.filteredOptions.length).toBe(4)
      selectVm.handleClear()
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
      await wrapper.trigger('click')
      const input = wrapper.find('input')
      input.element.value = '1111'
      await input.trigger('input')
      await nextTick()
      const select = wrapper.findComponent(Select)
      const selectVm = select.vm as any
      expect(selectVm.filteredOptions.length).toBe(1)
      // selected the new option
      selectVm.onSelect(selectVm.filteredOptions[0])
      // closed the menu
      await wrapper.trigger('click')
      input.element.value = '2222'
      await input.trigger('input')
      await nextTick()
      selectVm.onSelect(selectVm.filteredOptions[0])
      expect(JSON.stringify(vm.value)).toBe(JSON.stringify(['1111', '2222']))
      await wrapper.trigger('click')
      expect(selectVm.filteredOptions.length).toBe(5)
      // remove tag
      const tagCloseIcons = wrapper.findAll('.el-tag__close')
      await tagCloseIcons[1].trigger('click')
      expect(selectVm.filteredOptions.length).toBe(4)
      // simulate backspace
      await wrapper.find('input').trigger('keydown', {
        key: EVENT_CODE.backspace,
      })
      expect(selectVm.filteredOptions.length).toBe(3)
    })
  })

  it('render empty slot', async () => {
    const wrapper = createSelect({
      data() {
        return {
          options: [],
          popperAppendToBody: false,
        }
      },
      slots: {
        empty: '<div class="empty-slot">EmptySlot</div>',
      },
    })
    await nextTick()
    expect(wrapper.find('.empty-slot').exists()).toBeTruthy()
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
      data() {
        return {
          popperAppendToBody: false,
        }
      },
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
    expect(wrapper.findAll('.custom-renderer').length).toBeGreaterThan(0)
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
      const filterMethod = jest.fn()
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
      const remoteMethod = jest.fn()
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
    await wrapper.trigger('click')
    await nextTick()
    expect(selectVm.states.hoveringIndex).toBe(-1)
    // should skip the disabled option
    selectVm.onKeyboardNavigate('forward')
    selectVm.onKeyboardNavigate('forward')
    await nextTick()
    expect(selectVm.states.hoveringIndex).toBe(3)
    //  should skip the group option
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
    expect(selectVm.states.hoveringIndex).toBe(9)
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
    const selectDom = wrapper.find('.el-select-v2__wrapper').element
    const selectRect = {
      height: 40,
      width: 221,
      x: 44,
      y: 8,
      top: 8,
    }
    const mockSelectWidth = jest
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
    const tagWrappers = wrapper.findAll('.el-select-v2__tags-text')
    for (let i = 0; i < tagWrappers.length; i++) {
      const tagWrapperDom = tagWrappers[i].element
      expect(
        parseInt(tagWrapperDom.style.maxWidth) === selectRect.width - 42
      ).toBe(true)
    }
    mockSelectWidth.mockRestore()
  })
})
