// @ts-nocheck
import { defineComponent, markRaw, nextTick, ref } from 'vue'
import { mount } from '@vue/test-utils'
import { afterEach, describe, expect, it, test, vi } from 'vitest'
import { EVENT_CODE } from '@element-plus/constants'
import { ArrowDown, CaretTop, CircleClose } from '@element-plus/icons-vue'
import { usePopperContainerId } from '@element-plus/hooks'
import { hasClass } from '@element-plus/utils'
import { ElFormItem } from '@element-plus/components/form'
import Select from '../src/select.vue'
import Group from '../src/option-group.vue'
import Option from '../src/option.vue'

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

interface SelectProps {
  filterMethod?: any
  remoteMethod?: any
  multiple?: boolean
  clearable?: boolean
  filterable?: boolean
  allowCreate?: boolean
  remote?: boolean
  collapseTags?: boolean
  automaticDropdown?: boolean
  multipleLimit?: number
  popperClass?: string
  defaultFirstOption?: boolean
  fitInputWidth?: boolean
  size?: 'small' | 'default' | 'large'
}

const _mount = (template: string, data: any = () => ({}), otherObj?) =>
  mount(
    {
      components: {
        'el-select': Select,
        'el-option': Option,
        'el-group-option': Group,
        'el-form-item': ElFormItem,
      },
      template,
      data,
      setup() {
        return usePopperContainerId()
      },
      ...otherObj,
    },
    {
      attachTo: 'body',
      global: {
        provide: {
          namespace: 'el',
        },
      },
    }
  )

function getOptions(): HTMLElement[] {
  return Array.from(
    document.querySelectorAll<HTMLElement>(
      'body > div:last-child .el-select-dropdown__item'
    )
  )
}

const getSelectVm = (configs: SelectProps = {}, options?) => {
  ;[
    'multiple',
    'clearable',
    'defaultFirstOption',
    'filterable',
    'allowCreate',
    'remote',
    'collapseTags',
    'automaticDropdown',
    'fitInputWidth',
  ].forEach((config) => {
    configs[config] = configs[config] || false
  })
  configs.multipleLimit = configs.multipleLimit || 0
  if (!options) {
    options = [
      {
        value: '选项1',
        label: '黄金糕',
        disabled: false,
      },
      {
        value: '选项2',
        label: '双皮奶',
        disabled: false,
      },
      {
        value: '选项3',
        label: '蚵仔煎',
        disabled: false,
      },
      {
        value: '选项4',
        label: '龙须面',
        disabled: false,
      },
      {
        value: '选项5',
        label: '北京烤鸭',
        disabled: false,
      },
    ]
  }

  return _mount(
    `
    <el-select
      ref="select"
      v-model="value"
      :multiple="multiple"
      :multiple-limit="multipleLimit"
      :popper-class="popperClass"
      :clearable="clearable"
      :default-first-option="defaultFirstOption"
      :filterable="filterable"
      :collapse-tags="collapseTags"
      :allow-create="allowCreate"
      :filterMethod="filterMethod"
      :remote="remote"
      :loading="loading"
      :remoteMethod="remoteMethod"
      :automatic-dropdown="automaticDropdown"
      :size="size"
      :fit-input-width="fitInputWidth">
      <el-option
        v-for="item in options"
        :label="item.label"
        :key="item.value"
        :disabled="item.disabled"
        :value="item.value">
      </el-option>
    </el-select>
  `,
    () => ({
      options,
      multiple: configs.multiple,
      multipleLimit: configs.multipleLimit,
      clearable: configs.clearable,
      defaultFirstOption: configs.defaultFirstOption,
      filterable: configs.filterable,
      collapseTags: configs.collapseTags,
      allowCreate: configs.allowCreate,
      popperClass: configs.popperClass,
      automaticDropdown: configs.automaticDropdown,
      fitInputWidth: configs.fitInputWidth,
      loading: false,
      filterMethod: configs.filterMethod,
      remote: configs.remote,
      remoteMethod: configs.remoteMethod,
      value: configs.multiple ? [] : '',
      size: configs.size || 'default',
    })
  )
}

const getGroupSelectVm = (configs: SelectProps = {}, options?) => {
  ;[
    'multiple',
    'clearable',
    'filterable',
    'allowCreate',
    'remote',
    'collapseTags',
    'automaticDropdown',
    'fitInputWidth',
  ].forEach((config) => {
    configs[config] = configs[config] || false
  })
  configs.multipleLimit = configs.multipleLimit || 0
  if (!options) {
    options = [
      {
        label: 'Australia',
        options: [
          {
            value: 'Sydney',
            label: 'Sydney',
          },
          {
            value: 'Melbourne',
            label: 'Melbourne',
          },
        ],
      },
      {
        label: 'China',
        options: [
          {
            value: 'Shanghai',
            label: 'Shanghai',
          },
          {
            value: 'Shenzhen',
            label: 'Shenzhen',
          },
          {
            value: 'Guangzhou',
            label: 'Guangzhou',
          },
          {
            value: 'Dalian',
            label: 'Dalian',
          },
        ],
      },
      {
        label: 'India',
        options: [
          {
            value: 'Mumbai',
            label: 'Mumbai',
          },
          {
            value: 'Delhi',
            label: 'Delhi',
          },
          {
            value: 'Bangalore',
            label: 'Bangalore',
          },
        ],
      },
      {
        label: 'Indonesia',
        options: [
          {
            value: 'Bandung',
            label: 'Bandung',
          },
          {
            value: 'Jakarta',
            label: 'Jakarta',
          },
        ],
      },
    ]
  }
  return _mount(
    `
    <el-select
      ref="select"
      v-model="value"
      :multiple="multiple"
      :multiple-limit="multipleLimit"
      :popper-class="popperClass"
      :clearable="clearable"
      :filterable="filterable"
      :collapse-tags="collapseTags"
      :allow-create="allowCreate"
      :filterMethod="filterMethod"
      :remote="remote"
      :loading="loading"
      :remoteMethod="remoteMethod"
      :automatic-dropdown="automaticDropdown"
      :fit-input-width="fitInputWidth">
     <el-group-option
        v-for="group in options"
        :key="group.label"
        :disabled="group.disabled"
        :label="group.label">
        <el-option
          v-for="item in group.options"
          :key="item.value"
          :label="item.label"
          :value="item.value"/>
      </el-group-option>
    </el-select>
`,
    () => ({
      options,
      multiple: configs.multiple,
      multipleLimit: configs.multipleLimit,
      clearable: configs.clearable,
      filterable: configs.filterable,
      collapseTags: configs.collapseTags,
      allowCreate: configs.allowCreate,
      popperClass: configs.popperClass,
      automaticDropdown: configs.automaticDropdown,
      fitInputWidth: configs.fitInputWidth,
      loading: false,
      filterMethod: configs.filterMethod,
      remote: configs.remote,
      remoteMethod: configs.remoteMethod,
      value: configs.multiple ? [] : '',
    })
  )
}

const CLASS_NAME = 'el-select'
const WRAPPER_CLASS_NAME = 'el-select__wrapper'
const OPTION_ITEM_CLASS_NAME = 'el-select-dropdown__item'
const PLACEHOLDER_CLASS_NAME = 'el-select__placeholder'
const DEFAULT_PLACEHOLDER = 'Select'

describe('Select', () => {
  let wrapper: ReturnType<typeof _mount>
  afterEach(() => {
    document.body.innerHTML = ''
  })

  test('create', async () => {
    wrapper = _mount(`<el-select v-model="value"></el-select>`, () => ({
      value: '',
    }))
    expect(wrapper.classes()).toContain(CLASS_NAME)
    expect(wrapper.find(`.${PLACEHOLDER_CLASS_NAME}`).text()).toBe(
      DEFAULT_PLACEHOLDER
    )
    const select = wrapper.findComponent({ name: 'ElSelect' })
    const trigger = wrapper.find(`.${WRAPPER_CLASS_NAME}`)
    await trigger.trigger('mouseenter')
    await trigger.trigger('click')
    await nextTick()
    expect((select.vm as any).expanded).toBe(true)
  })

  test('options rendered correctly', () => {
    wrapper = getSelectVm()
    const options = wrapper.element.querySelectorAll(
      `.${OPTION_ITEM_CLASS_NAME}`
    )
    const result = Array.prototype.every.call(options, (option, index) => {
      const text = option.querySelector('span').textContent
      const vm = wrapper.vm as any
      return text === vm.options[index].label
    })
    expect(result).toBe(true)
  })

  test('custom dropdown class', () => {
    wrapper = getSelectVm({ popperClass: 'custom-dropdown' })
    const dropdown = wrapper.findComponent({ name: 'ElSelectDropdown' })
    expect(dropdown.classes()).toContain('custom-dropdown')
  })

  test('default value', async () => {
    wrapper = _mount(
      `
      <el-select v-model="value">
        <el-option
          v-for="item in options"
          :label="item.label"
          :key="item.value"
          :value="item.value">
        </el-option>
      </el-select>
    `,
      () => ({
        options: [
          {
            value: '选项1',
            label: '黄金糕',
          },
          {
            value: '选项2',
            label: '双皮奶',
          },
        ],
        value: '选项2',
      })
    )
    await nextTick()

    expect(wrapper.find(`.${PLACEHOLDER_CLASS_NAME}`).text()).toBe('双皮奶')
  })

  test('expose select label', async () => {
    wrapper = _mount(
      `
      <el-select v-model="value" :multiple="multiple">
        <el-option
          v-for="item in options"
          :label="item.label"
          :key="item.value"
          :value="item.value">
        </el-option>
      </el-select>
    `,
      () => ({
        options: [
          { value: '选项1', label: '黄金糕' },
          { value: '选项2', label: '双皮奶' },
        ],
        value: '选项2',
        multiple: false,
      })
    )
    await nextTick()
    const select = wrapper.findComponent({ name: 'ElSelect' })
    const vm = wrapper.vm as any
    const selectVm = select.vm as any

    expect(selectVm.selectedLabel).toBe('双皮奶')

    const options = getOptions()
    options[0].click()
    await nextTick()
    expect(selectVm.selectedLabel).toBe('黄金糕')
    vm.value = ''
    await nextTick()
    expect(selectVm.selectedLabel).toBe('')

    vm.value = []
    vm.multiple = true
    await nextTick()
    expect(selectVm.selectedLabel).toStrictEqual([])
    vm.value = ['选项1', '选项2']
    await nextTick()
    expect(selectVm.selectedLabel).toStrictEqual(['黄金糕', '双皮奶'])
  })

  test('set default value to object', async () => {
    wrapper = _mount(
      `
      <el-select v-model="value">
        <el-option
          v-for="item in options"
          :label="item.label"
          :key="item.value.value"
          :value="item.value">
        </el-option>
      </el-select>
    `,
      () => ({
        options: [
          {
            value: {
              value: '选项1',
            },
            label: '黄金糕',
          },
          {
            value: {
              value: '选项2',
            },
            label: '双皮奶',
          },
        ],
        value: {
          value: '选项2',
        },
      })
    )
    await nextTick()

    expect(wrapper.find(`.${PLACEHOLDER_CLASS_NAME}`).text()).toBe('双皮奶')
  })

  test('custom label', async () => {
    wrapper = _mount(
      `
      <el-select v-model="value">
        <el-option
          v-for="item in options"
          :label="item.name"
          :key="item.id"
          :value="item.id">
        </el-option>
      </el-select>
    `,
      () => ({
        options: [
          {
            id: 1,
            name: '黄金糕',
          },
          {
            id: 2,
            name: '双皮奶',
          },
        ],
        value: 2,
      })
    )
    await nextTick()

    expect(wrapper.find(`.${PLACEHOLDER_CLASS_NAME}`).text()).toBe('双皮奶')
  })

  test('custom label with object', async () => {
    wrapper = _mount(
      `
      <el-select v-model="value" value-key="id">
        <el-option
          v-for="item in options"
          :label="item.name"
          :key="item.id"
          :value="item">
        </el-option>
      </el-select>
    `,
      () => ({
        options: [
          {
            id: 1,
            name: '黄金糕',
          },
          {
            id: 2,
            name: '双皮奶',
          },
        ],
        value: {
          id: 2,
        },
      })
    )
    await nextTick()

    expect(wrapper.find(`.${PLACEHOLDER_CLASS_NAME}`).text()).toBe('双皮奶')
  })

  test('value bind object with value-key', async () => {
    wrapper = _mount(
      `
      <el-select v-model="value" value-key="id">
        <el-option
          v-for="item in options"
          :key="item.id"
          :label="item.label"
          :value="item"
        />
      </el-select>
    `,
      () => ({
        options: [
          { id: 1, label: 'Option A', desc: 'Option A - 230506' },
          { id: 2, label: 'Option B', desc: 'Option B - 230506' },
          { id: 3, label: 'Option C', desc: 'Option C - 230506' },
          { id: 4, label: 'Option D', desc: 'Option D - 230507' },
        ],
        value: {
          value: '',
        },
      })
    )
    await nextTick()
    await wrapper.find(`.${WRAPPER_CLASS_NAME}`).trigger('click')
    const options = getOptions()
    options[2].click()
    await nextTick()
    expect(wrapper.find(`.${PLACEHOLDER_CLASS_NAME}`).text()).toBe('Option C')
    options[3].click()
    await nextTick()
    expect(wrapper.find(`.${PLACEHOLDER_CLASS_NAME}`).text()).toBe('Option D')
  })

  test('set default value to object with value-key', async () => {
    wrapper = _mount(
      `
      <el-select v-model="value" value-key="id">
        <el-option
          v-for="item in options"
          :key="item.id"
          :label="item.label"
          :value="item"
        />
      </el-select>
    `,
      () => ({
        options: [
          { id: 1, label: 'Option A', desc: 'Option A - 230506' },
          { id: 2, label: 'Option B', desc: 'Option B - 230506' },
          { id: 3, label: 'Option C', desc: 'Option C - 230506' },
          { id: 4, label: 'Option A', desc: 'Option A - 230507' },
        ],
        value: { id: 3 },
      })
    )
    await nextTick()
    const options = getOptions()
    expect(wrapper.find(`.${PLACEHOLDER_CLASS_NAME}`).text()).toBe('Option C')
    expect(Array.from(options[2].classList)).toContain('is-selected')
  })

  test('sync set value and options', async () => {
    wrapper = _mount(
      `
    <el-select v-model="value">
      <el-option
        v-for="item in options"
        :label="item.label"
        :key="item.value"
        :value="item.value">
      </el-option>
    </el-select>
  `,
      () => ({
        options: [
          {
            value: '选项1',
            label: '黄金糕',
          },
          {
            value: '选项2',
            label: '双皮奶',
          },
        ],
        value: '选项2',
      })
    )
    const vm = wrapper.vm as any
    vm.options = [
      {
        value: '选项1',
        label: '黄金糕',
      },
    ]
    vm.value = '选项1'
    await nextTick()
    expect(wrapper.find(`.${PLACEHOLDER_CLASS_NAME}`).text()).toBe('黄金糕')
  })

  test('single select', async () => {
    wrapper = _mount(
      `
      <el-select v-model="value" @change="handleChange">
        <el-option
          v-for="item in options"
          :label="item.label"
          :key="item.value"
          :value="item.value">
          <p>{{item.label}} {{item.value}}</p>
        </el-option>
      </el-select>
    `,
      () => ({
        options: [
          {
            value: '选项1',
            label: '黄金糕',
          },
          {
            value: '选项2',
            label: '双皮奶',
          },
          {
            value: '选项3',
            label: '蚵仔煎',
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
        value: '',
        count: 0,
      }),
      {
        methods: {
          handleChange() {
            this.count++
          },
        },
      }
    )

    await wrapper.find(`.${WRAPPER_CLASS_NAME}`).trigger('click')
    const options = getOptions()
    const vm = wrapper.vm as any
    expect(vm.value).toBe('')
    expect(wrapper.find(`.${PLACEHOLDER_CLASS_NAME}`).text()).toBe(
      DEFAULT_PLACEHOLDER
    )
    options[2].click()
    await nextTick()
    expect(vm.value).toBe('选项3')
    expect(wrapper.find(`.${PLACEHOLDER_CLASS_NAME}`).text()).toBe('蚵仔煎')
    expect(vm.count).toBe(1)
    options[4].click()
    await nextTick()
    expect(vm.value).toBe('选项5')
    expect(wrapper.find(`.${PLACEHOLDER_CLASS_NAME}`).text()).toBe('北京烤鸭')
    expect(vm.count).toBe(2)
  })

  test('disabled option', async () => {
    wrapper = getSelectVm()
    const vm = wrapper.vm as any
    wrapper.find(`.${WRAPPER_CLASS_NAME}`).trigger('click')
    vm.options[1].disabled = true
    await nextTick()
    const options = getOptions()
    expect(options[1].className).toContain('is-disabled')
    options[1].click()
    await nextTick()
    expect(vm.value).toBe('')
  })

  test('disabled select', () => {
    wrapper = _mount(`<el-select disabled></el-select>`)
    expect(wrapper.find(`.${WRAPPER_CLASS_NAME}`).classes()).toContain(
      'is-disabled'
    )
  })

  test('group disabled option', () => {
    const optionGroupData = [
      {
        label: 'Australia',
        disabled: true,
        options: [
          {
            value: 'Sydney',
            label: 'Sydney',
          },
          {
            value: 'Melbourne',
            label: 'Melbourne',
          },
        ],
      },
    ]
    wrapper = getGroupSelectVm({}, optionGroupData)
    const options = wrapper.findAllComponents(Option)
    expect(options[0].classes('is-disabled')).toBeTruthy()
  })

  test('keyboard operations when option-group is disabled', async () => {
    const optionGroupData = [
      {
        label: 'Australia',
        disabled: true,
        options: [
          {
            value: 'Sydney',
            label: 'Sydney',
          },
          {
            value: 'Melbourne',
            label: 'Melbourne',
          },
        ],
      },
      {
        label: 'China',
        options: [
          {
            value: 'Shanghai',
            label: 'Shanghai',
          },
          {
            value: 'Shenzhen',
            label: 'Shenzhen',
          },
          {
            value: 'Guangzhou',
            label: 'Guangzhou',
          },
          {
            value: 'Dalian',
            label: 'Dalian',
          },
        ],
      },
    ]
    wrapper = getGroupSelectVm({}, optionGroupData)
    const select = wrapper.findComponent({ name: 'ElSelect' })
    const vm = select.vm as any
    let i = 8
    while (i--) {
      vm.navigateOptions('next')
    }
    vm.navigateOptions('prev')
    vm.navigateOptions('prev')
    vm.navigateOptions('prev')
    await nextTick()
    vm.selectOption()
    await nextTick()
    expect((wrapper.vm as any).value).toBe('Dalian')
  })

  test('visible event', async () => {
    wrapper = _mount(
      `
    <el-select v-model="value" @visible-change="handleVisibleChange">
      <el-option
        v-for="item in options"
        :label="item.label"
        :key="item.value"
        :value="item.value">
      </el-option>
    </el-select>`,
      () => ({
        options: [],
        value: '',
        visible: '',
      }),
      {
        methods: {
          handleVisibleChange(val) {
            this.visible = val
          },
        },
      }
    )
    const select = wrapper.findComponent({ name: 'ElSelect' })
    const vm = wrapper.vm as any
    const selectVm = select.vm as any
    selectVm.expanded = true
    await selectVm.$nextTick()
    expect(vm.visible).toBe(true)
  })

  test('keyboard operations', async () => {
    vi.useFakeTimers()
    wrapper = getSelectVm()
    const select = wrapper.findComponent({ name: 'ElSelect' })
    const vm = select.vm as any
    let i = 8
    while (i--) {
      vm.navigateOptions('next')
    }
    vm.navigateOptions('prev')
    vm.navigateOptions('prev')
    vm.navigateOptions('prev')
    await nextTick()
    expect(vm.states.hoveringIndex).toBe(3)
    vm.selectOption()
    await nextTick()
    expect((wrapper.vm as any).value).toBe('选项4')
    vm.toggleMenu()

    vi.runAllTimers()
    await nextTick()

    vm.toggleMenu()
    await nextTick()
    expect(vm.states.hoveringIndex).toBe(3)
    vi.useRealTimers()
  })

  test('keyboard operations when options have the same label', async () => {
    wrapper = _mount(
      `<el-select
        v-model="value"
        clearable
        filterable
      >
        <el-option
          v-for="item in options"
          :label="item.label"
          :key="item.value"
          :value="item.value"
        />
      </el-select>`,
      () => ({
        options: [
          {
            value: 'Option1',
            label: 'Option1',
          },
          {
            value: 'Option2',
            label: 'Option1',
          },
          {
            value: 'Option3',
            label: 'Option1',
          },
          {
            value: 'Option4',
            label: 'Option4',
          },
          {
            value: 'Option5',
            label: 'Option5',
          },
        ],
        value: 'Option1',
      })
    )
    const select = wrapper.findComponent({ name: 'ElSelect' })
    const selectVm = select.vm as any
    const input = wrapper.find('input')
    await input.trigger('click')
    expect(selectVm.states.hoveringIndex).toBe(0)
    selectVm.navigateOptions('next')
    expect(selectVm.states.hoveringIndex).toBe(1)
    selectVm.navigateOptions('next')
    expect(selectVm.states.hoveringIndex).toBe(2)
    selectVm.navigateOptions('next')
    expect(selectVm.states.hoveringIndex).toBe(3)
    selectVm.navigateOptions('next')
    expect(selectVm.states.hoveringIndex).toBe(4)
  })

  // #19136
  test('keyboard operations when options are disabled due to multiple-limit', async () => {
    wrapper = getSelectVm({ multiple: true, multipleLimit: 2 })
    const select = wrapper.findComponent({ name: 'ElSelect' })
    await wrapper.setProps({
      modelValue: ['选项1', '选项2'],
    })
    const selectVm = select.vm as any
    const input = select.find('input')
    await input.trigger('click')
    expect(selectVm.states.hoveringIndex).toBe(0)
    selectVm.navigateOptions('next')
    expect(selectVm.states.hoveringIndex).toBe(1)
    selectVm.navigateOptions('next')
    expect(selectVm.states.hoveringIndex).toBe(0)
  })

  test('clearable', async () => {
    wrapper = getSelectVm({ clearable: true })
    const select = wrapper.findComponent({ name: 'ElSelect' })
    const vm = wrapper.vm as any
    const selectVm = select.vm as any
    vm.value = '选项1'
    await nextTick()
    selectVm.states.inputHovering = true
    await selectVm.$nextTick()
    const iconClear = wrapper.findComponent(CircleClose)
    expect(iconClear.exists()).toBe(true)
    await iconClear.trigger('click')
    expect(vm.value).toBe(undefined)
  })

  test('suffix icon', async () => {
    wrapper = _mount(`<el-select></el-select>`)
    let suffixIcon = wrapper.findComponent(ArrowDown)
    expect(suffixIcon.exists()).toBe(true)
    await wrapper.setProps({ suffixIcon: markRaw(CaretTop) })
    suffixIcon = wrapper.findComponent(CaretTop)
    expect(suffixIcon.exists()).toBe(true)
  })

  test('test remote show suffix', async () => {
    wrapper = _mount(`<el-select></el-select>`)
    await wrapper.setProps({
      remote: true,
      filters: true,
      remoteShowSuffix: true,
    })

    const suffixIcon = wrapper.findComponent(ArrowDown)
    expect(suffixIcon.exists()).toBe(true)
  })

  test('fitInputWidth', async () => {
    wrapper = getSelectVm({ fitInputWidth: true })
    const selectRef = wrapper.findComponent({ name: 'ElSelect' })
    const selectDom = selectRef.element
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
    const dropdown = wrapper.findComponent({ name: 'ElSelectDropdown' })
    dropdown.vm.minWidth = `${
      selectRef.element.getBoundingClientRect().width
    }px`
    await nextTick()
    expect(dropdown.element.style.width).toBe('221px')
    mockSelectWidth.mockRestore()
  })

  test('check default first option', async () => {
    wrapper = getSelectVm({
      filterable: true,
      defaultFirstOption: true,
    })
    const select = wrapper.findComponent({ name: 'ElSelect' })
    const selectVm = select.vm as any
    const input = wrapper.find('input')
    await input.trigger('click')
    expect(selectVm.states.hoveringIndex).toBe(0)
    selectVm.navigateOptions('next')
    expect(selectVm.states.hoveringIndex).toBe(1)
  })

  test('check default first option when the very first option is disabled', async () => {
    const demoOptions = [
      {
        value: 'HTML',
        label: 'HTML',
        disabled: true,
      },
      {
        value: 'CSS',
        label: 'CSS',
        disabled: false,
      },
      {
        value: 'JavaScript',
        label: 'JavaScript',
        disabled: false,
      },
    ]
    wrapper = getSelectVm(
      {
        filterable: true,
        defaultFirstOption: true,
      },
      demoOptions
    )
    const select = wrapper.findComponent({ name: 'ElSelect' })
    const selectVm = select.vm as any
    const input = wrapper.find('input')
    await input.trigger('click')

    expect(selectVm.states.hoveringIndex).toBe(1) // index 0 was skipped
    selectVm.navigateOptions('next')
    expect(selectVm.states.hoveringIndex).toBe(2)
    selectVm.navigateOptions('next')
    expect(selectVm.states.hoveringIndex).toBe(1) // index 0 was skipped
  })

  test('allow create', async () => {
    wrapper = getSelectVm({ filterable: true, allowCreate: true })
    const select = wrapper.findComponent({ name: 'ElSelect' })
    const selectVm = select.vm as any
    const input = wrapper.find('input')
    await input.trigger('click')
    await input.setValue('new')
    selectVm.debouncedOnInputChange()
    await nextTick()
    const options = [...getOptions()]
    const target = options.find((option) => option.textContent === 'new')
    target.click()
    expect((wrapper.vm as any).value).toBe('new')
  })

  test('allow create with default first option', async () => {
    wrapper = getSelectVm(
      {
        filterable: true,
        allowCreate: true,
        defaultFirstOption: true,
      },
      [
        {
          value: 'HTML',
          label: 'HTML',
        },
        {
          value: 'CSS',
          label: 'CSS',
        },
        {
          value: 'JavaScript',
          label: 'JavaScript',
        },
      ]
    )
    const select = wrapper.findComponent({ name: 'ElSelect' })
    const selectVm = select.vm as any
    const input = wrapper.find('input')
    await input.trigger('click')
    await input.setValue('Java')
    selectVm.debouncedOnInputChange()
    await nextTick()
    const options = [...getOptions()]
    expect(Array.from(options[0].classList)).toContain('is-hovering')
    options[0].click()
    expect((wrapper.vm as any).value).toBe('Java')
  })

  test('allow create async option', async () => {
    const options = [
      {
        value: '选项1',
        label: '黄金糕',
      },
      {
        value: '选项2',
        label: '双皮奶',
      },
    ]
    wrapper = _mount(
      `
      <el-select
        v-model="value"
        filterable
        allowCreate
      >
        <el-option
          v-for="item in options"
          :label="item.label"
          :key="item.value"
          :value="item.value">
        </el-option>
      </el-select>
    `,
      () => ({
        options: [],
        value: '选项2',
      })
    )

    await nextTick()
    expect(wrapper.find(`.${PLACEHOLDER_CLASS_NAME}`).text()).toBe('选项2')
    await wrapper.setData({
      options,
    })
    expect(getOptions()).toHaveLength(options.length)
  })

  test('multiple select', async () => {
    wrapper = getSelectVm({ multiple: true })
    await wrapper.find(`.${WRAPPER_CLASS_NAME}`).trigger('click')
    const options = getOptions()
    const vm = wrapper.vm as any
    vm.value = ['选项1']
    nextTick()
    options[1].click()
    await nextTick()
    options[3].click()
    await nextTick()
    expect(vm.value.includes('选项2') && vm.value.includes('选项4')).toBe(true)
    const tagCloseIcons = wrapper.findAll('.el-tag__close')
    await tagCloseIcons[0].trigger('click')
    expect(vm.value.indexOf('选项1')).toBe(-1)
  })

  test('multiple select when content overflow', async () => {
    wrapper = _mount(
      `
      <el-select v-model="selectedList" multiple placeholder="请选择">
        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
        </el-option>
      </el-select>
    `,
      () => ({
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
        selectedList: [],
      })
    )
    await wrapper.find(`.${WRAPPER_CLASS_NAME}`).trigger('click')
    const options = getOptions()
    const selectRef = wrapper.findComponent(Select)
    selectRef.vm.states.selectionWidth = 200
    options[0].click()
    await nextTick()
    options[1].click()
    await nextTick()
    options[2].click()
    await nextTick()
    const tagWrappers = wrapper.findAll('.el-tag')
    for (const tagWrapper of tagWrappers) {
      const tagWrapperDom = tagWrapper.element
      expect(tagWrapperDom.style.maxWidth).toBe('200px')
    }
  })

  test('multiple select with collapseTags when content overflow', async () => {
    wrapper = _mount(
      `
      <el-select v-model="selectedList" multiple collapseTags placeholder="请选择">
        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
        </el-option>
      </el-select>
    `,
      () => ({
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
        selectedList: [],
      })
    )
    await wrapper.find(`.${WRAPPER_CLASS_NAME}`).trigger('click')
    const options = getOptions()
    const selectRef = wrapper.findComponent(Select)
    selectRef.vm.states.selectionWidth = 200
    options[0].click()
    await nextTick()
    const tagWrappers = wrapper.findAll('.el-tag')
    const tagWrapperDom = tagWrappers[0].element
    expect(tagWrapperDom.style.maxWidth).toBe('200px')
    options[1].click()
    await nextTick()
    options[2].click()
    selectRef.vm.states.collapseItemWidth = 38
    await nextTick()
    expect(tagWrapperDom.style.maxWidth).toBe('156px')
  })

  test('multiple select with collapseTagsTooltip', async () => {
    wrapper = _mount(
      `
      <el-select v-model="selectedList" multiple collapseTags collapse-tags-tooltip placeholder="请选择">
        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
        </el-option>
      </el-select>
    `,
      () => ({
        options: [
          {
            value: '选项1',
            label: '黄金糕',
          },
          {
            value: '选项2',
            label: '双皮奶',
          },
          {
            value: '选项3',
            label: '蚵仔煎',
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
        selectedList: [],
      })
    )
    await wrapper.find(`.${WRAPPER_CLASS_NAME}`).trigger('click')
    const options = getOptions()

    options[0].click()
    await nextTick()
    options[1].click()
    await nextTick()
    options[2].click()
    await nextTick()
    const triggerWrappers = wrapper.findAll('.el-tooltip__trigger')
    expect(triggerWrappers[0]).toBeDefined()
    const tags = document.querySelectorAll('.el-select__tags-text')
    expect(tags.length).toBe(4)
    expect(tags[3].textContent).toBe('蚵仔煎')
  })

  test('multiple select with maxCollapseTags', async () => {
    wrapper = _mount(
      `
      <el-select v-model="selectedList" multiple collapseTags :max-collapse-tags="3" placeholder="请选择">
        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
        </el-option>
      </el-select>
    `,
      () => ({
        options: [
          {
            value: '选项1',
            label: '黄金糕',
          },
          {
            value: '选项2',
            label: '双皮奶',
          },
          {
            value: '选项3',
            label: '蚵仔煎',
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
        selectedList: [],
      })
    )
    await wrapper.find(`.${WRAPPER_CLASS_NAME}`).trigger('click')
    const options = getOptions()

    options[0].click()
    await nextTick()
    options[1].click()
    await nextTick()
    options[2].click()
    await nextTick()
    const triggerWrappers = wrapper.findAll('.el-tooltip__trigger')
    expect(triggerWrappers[0]).toBeDefined()
    const tags = document.querySelectorAll('.el-select__tags-text')
    expect(tags.length).toBe(3)
  })

  test('multiple remove-tag', async () => {
    const handleRemoveTag = vi.fn()

    wrapper = _mount(
      `
      <el-select v-model="value" multiple @remove-tag="handleRemoveTag">
        <el-option
          v-for="item in options"
          :label="item.label"
          :key="item.value"
          :value="item.value">
          <p>{{item.label}} {{item.value}}</p>
        </el-option>
      </el-select>
    `,
      () => ({
        options: [
          {
            value: '选项1',
            label: '黄金糕',
          },
          {
            value: '选项2',
            label: '双皮奶',
          },
          {
            value: '选项3',
            label: '蚵仔煎',
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
        value: ['选项1', '选项2'],
        handleRemoveTag,
      })
    )

    const vm = wrapper.vm as any
    await nextTick()
    expect(vm.value.length).toBe(2)
    const tagCloseIcons = wrapper.findAll('.el-tag__close')
    await tagCloseIcons[1].trigger('click')
    expect(vm.value.length).toBe(1)

    const input = wrapper.find('input')
    input.trigger('keydown.delete')
    expect(vm.value.length).toBe(0)
    expect(handleRemoveTag).toHaveBeenLastCalledWith('选项1')
  })

  test('multiple limit', async () => {
    wrapper = getSelectVm({ multiple: true, multipleLimit: 1 })
    const vm = wrapper.vm as any
    await wrapper.find(`.${WRAPPER_CLASS_NAME}`).trigger('click')
    const options = getOptions()
    options[1].click()
    await nextTick()
    expect(vm.value.includes('选项2')).toBe(true)
    options[3].click()
    await nextTick()
    expect(vm.value.indexOf('选项4')).toBe(-1)
  })

  test('event:focus', async () => {
    const handleFocus = vi.fn()
    wrapper = _mount(`<el-select @focus="handleFocus" />`, () => ({
      handleFocus,
    }))
    const select = wrapper.findComponent({ name: 'ElSelect' })
    const input = select.find('input')

    expect(input.exists()).toBe(true)
    await input.trigger('focus')
    expect(handleFocus).toHaveBeenCalledTimes(1)
  })

  test('event:blur', async () => {
    const handleBlur = vi.fn()
    wrapper = _mount(`<el-select @blur="handleBlur" />`, () => ({
      handleBlur,
    }))
    const select = wrapper.findComponent({ name: 'ElSelect' })
    const input = select.find('input')

    expect(input.exists()).toBe(true)
    await input.trigger('blur')
    expect(handleBlur).toHaveBeenCalledTimes(1)
  })

  test('event:focus & blur for clearable & filterable', async () => {
    const handleFocus = vi.fn()
    const handleBlur = vi.fn()
    wrapper = _mount(
      `<el-select
        v-model="value"
        clearable
        filterable
        @focus="handleFocus"
        @blur="handleBlur"
      >
        <el-option
          v-for="item in options"
          :label="item.label"
          :key="item.value"
          :value="item.value"
        />
      </el-select>`,
      () => ({
        options: [
          {
            value: '选项1',
            label: '黄金糕',
          },
        ],
        value: '选项1',
        handleFocus,
        handleBlur,
      })
    )

    const select = wrapper.findComponent({ name: 'ElSelect' })
    const vm = wrapper.vm as any
    const selectVm = select.vm as any
    selectVm.states.inputHovering = true
    await selectVm.$nextTick()

    const iconClear = wrapper.findComponent(CircleClose)
    expect(iconClear.exists()).toBe(true)
    await iconClear.trigger('click')
    expect(vm.value).toBe(undefined)
    expect(handleFocus).toHaveBeenCalledTimes(1)
    expect(handleBlur).not.toHaveBeenCalled()

    const options = getOptions()
    options[0].click()
    await nextTick()
    expect(vm.value).toBe('选项1')
    selectVm.states.inputHovering = true
    await iconClear.trigger('click')
    expect(handleFocus).toHaveBeenCalledTimes(1)
    expect(handleBlur).not.toHaveBeenCalled()

    const input = select.find('input')
    await input.trigger('blur')
    expect(handleBlur).toHaveBeenCalled()
  })

  test('event:focus & blur for multiple & filterable select', async () => {
    const handleFocus = vi.fn()
    const handleBlur = vi.fn()
    wrapper = _mount(
      `
    <el-select
      @focus="handleFocus"
      @blur="handleBlur"
      multiple
      filterable
    />`,
      () => ({
        handleFocus,
        handleBlur,
      })
    )
    const select = wrapper.findComponent({ name: 'ElSelect' })
    const input = select.find('input')

    expect(input.exists()).toBe(true)
    await input.trigger('focus')
    expect(handleFocus).toHaveBeenCalled()
    await input.trigger('blur')
    expect(handleBlur).toHaveBeenCalled()

    await input.trigger('focus')
    expect(handleFocus).toHaveBeenCalledTimes(2)
    await input.trigger('blur')
    expect(handleBlur).toHaveBeenCalled()
  })

  test('event:focus & blur for multiple tag close', async () => {
    const handleFocus = vi.fn()
    const handleBlur = vi.fn()
    wrapper = _mount(
      `<el-select
        v-model="value"
        multiple
        @focus="handleFocus"
        @blur="handleBlur"
      >
        <el-option
          v-for="item in options"
          :label="item.label"
          :key="item.value"
          :value="item.value">
          <p>{{item.label}} {{item.value}}</p>
        </el-option>
      </el-select>`,
      () => ({
        options: [
          {
            value: '选项1',
            label: '黄金糕',
          },
          {
            value: '选项2',
            label: '双皮奶',
          },
          {
            value: '选项3',
            label: '蚵仔煎',
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
        value: ['选项1', '选项2'],
        handleFocus,
        handleBlur,
      })
    )

    const select = wrapper.findComponent({ name: 'ElSelect' })
    const input = select.find('input')

    await input.trigger('focus')
    expect(handleFocus).toHaveBeenCalledTimes(1)
    const tagCloseIcons = wrapper.findAll('.el-tag__close')
    await tagCloseIcons[1].trigger('click')
    await tagCloseIcons[0].trigger('click')
    expect(handleFocus).toHaveBeenCalledTimes(1)
    expect(handleBlur).not.toHaveBeenCalled()
    await input.trigger('blur')
    expect(handleBlur).toHaveBeenCalled()
  })

  it('should be target blur event when click outside', async () => {
    const handleBlur = vi.fn()
    wrapper = _mount(
      `
      <el-select @blur="handleBlur" />
      <button>button</button>
      `,
      () => ({ handleBlur })
    )
    const select = wrapper.findComponent({ name: 'ElSelect' })
    const input = select.find('input')
    await input.trigger('focus')

    expect(wrapper.find(`.${WRAPPER_CLASS_NAME}`).classes()).toContain(
      'is-focused'
    )

    await wrapper.find('button').trigger('mousedown')
    await wrapper.find('button').trigger('mouseup')

    expect(wrapper.find(`.${WRAPPER_CLASS_NAME}`).classes()).not.toContain(
      'is-focused'
    )
    expect(handleBlur).toHaveBeenCalledTimes(1)
  })

  test('should not open popper when automatic-dropdown not set', async () => {
    wrapper = getSelectVm()
    const select = wrapper.findComponent({ name: 'ElSelect' })
    const input = select.find('input')
    await input.trigger('focus')
    expect((select.vm as any).expanded).toBe(false)
  })

  test('should open popper when automatic-dropdown is set', async () => {
    wrapper = getSelectVm({ automaticDropdown: true })
    const select = wrapper.findComponent({ name: 'ElSelect' })
    const input = select.find('input')
    await input.trigger('focus')
    expect((select.vm as any).expanded).toBe(true)
  })

  test('only emit change on user input', async () => {
    let callCount = 0
    wrapper = _mount(
      `
    <el-select v-model="value" @change="change" ref="select">
      <el-option label="1" value="1" />
      <el-option label="2" value="2" />
      <el-option label="3" value="3" />
    </el-select>`,
      () => ({
        value: '1',
        change: () => ++callCount,
      })
    )

    expect(callCount).toBe(0)
    await wrapper.find(`.${WRAPPER_CLASS_NAME}`).trigger('click')
    const options = getOptions()
    options[2].click()
    expect(callCount).toBe(1)
  })

  test('render slot `empty`', async () => {
    wrapper = _mount(
      `
      <el-select v-model="value">
        <template #empty>
          <div class="empty-slot">EmptySlot</div>
        </template>
      </el-select>`,
      () => ({
        value: '1',
      })
    )
    await wrapper.find(`.${WRAPPER_CLASS_NAME}`).trigger('click')
    expect(
      document.querySelector<HTMLElement>('.empty-slot')?.textContent
    ).toBe('EmptySlot')
  })

  test('should set placeholder to label of selected option when filterable is true and multiple is false', async () => {
    wrapper = _mount(
      `
      <el-select ref="select" v-model="value" filterable>
        <el-option label="test" value="test" />
      </el-select>`,
      () => ({ value: 'test' })
    )
    const vm = wrapper.vm as any
    const trigger = wrapper.find(`.${WRAPPER_CLASS_NAME}`)
    await trigger.trigger('mouseenter')
    await trigger.trigger('click')
    const selectVm = wrapper.findComponent({ name: 'ElSelect' }).vm as any
    expect(selectVm.expanded).toBe(true)
    expect(wrapper.find(`.${PLACEHOLDER_CLASS_NAME}`).text()).toBe('test')
    expect(vm.value).toBe('test')
  })

  test('default value is null or undefined', async () => {
    wrapper = _mount(
      `
    <el-select v-model="value">
      <el-option
        v-for="item in options"
        :label="item.label"
        :key="item.value"
        :value="item.value">
      </el-option>
    </el-select>`,
      () => ({
        options: [
          {
            value: '选项1',
            label: '黄金糕',
          },
          {
            value: '选项2',
            label: '双皮奶',
          },
        ],
        value: undefined,
      })
    )
    const vm = wrapper.vm as any
    vm.value = null
    await nextTick()
    expect(wrapper.find(`.${PLACEHOLDER_CLASS_NAME}`).text()).toBe(
      DEFAULT_PLACEHOLDER
    )
    vm.value = '选项1'
    await nextTick()
    expect(wrapper.find(`.${PLACEHOLDER_CLASS_NAME}`).text()).toBe('黄金糕')
  })

  test('emptyText error show', async () => {
    wrapper = _mount(
      `
    <el-select :model-value="value" filterable placeholder="Select">
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value">
      </el-option>
    </el-select>`,
      () => ({
        options: [
          {
            value: 'Option1',
            label: 'Option1',
          },
          {
            value: 'Option2',
            label: 'Option2',
          },
          {
            value: 'Option3',
            label: 'Option3',
          },
          {
            value: 'Option4',
            label: 'Option4',
          },
          {
            value: 'Option5',
            label: 'Option5',
          },
        ],
        value: 'test',
      })
    )
    const trigger = wrapper.find(`.${WRAPPER_CLASS_NAME}`)
    await trigger.trigger('mouseenter')
    await trigger.trigger('click')
    await nextTick()
    expect(
      !!(document.querySelector('.el-select__popper') as HTMLElement).style
        .display
    ).toBeFalsy()
    expect(wrapper.findAll('.el-select-dropdown__empty').length).toBe(0)
  })

  test('multiple select with remote load', async () => {
    vi.useFakeTimers()
    wrapper = mount({
      template: `
      <el-select
        v-model="value"
        multiple
        filterable
        remote
        reserve-keyword
        placeholder="请输入关键词"
        :remote-method="remoteMethod"
        :loading="loading"
      >
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item"
        />
      </el-select>`,
      components: { ElSelect: Select, ElOption: Option },
      data() {
        return {
          options: [],
          value: [],
          list: [],
          loading: false,
          states: [
            'Alabama',
            'Alaska',
            'Arizona',
            'Arkansas',
            'California',
            'Colorado',
            'Connecticut',
            'Delaware',
            'Florida',
            'Georgia',
            'Hawaii',
            'Idaho',
            'Illinois',
            'Indiana',
            'Iowa',
            'Kansas',
            'Kentucky',
            'Louisiana',
            'Maine',
            'Maryland',
            'Massachusetts',
            'Michigan',
            'Minnesota',
            'Mississippi',
            'Missouri',
            'Montana',
            'Nebraska',
            'Nevada',
            'New Hampshire',
            'New Jersey',
            'New Mexico',
            'New York',
            'North Carolina',
            'North Dakota',
            'Ohio',
            'Oklahoma',
            'Oregon',
            'Pennsylvania',
            'Rhode Island',
            'South Carolina',
            'South Dakota',
            'Tennessee',
            'Texas',
            'Utah',
            'Vermont',
            'Virginia',
            'Washington',
            'West Virginia',
            'Wisconsin',
            'Wyoming',
          ],
        }
      },
      mounted() {
        this.list = this.states.map((item) => {
          return { value: `value:${item}`, label: `label:${item}` }
        })
      },
      methods: {
        remoteMethod(query) {
          if (query !== '') {
            this.loading = true
            setTimeout(() => {
              this.loading = false
              this.options = this.list.filter((item) => {
                return item.label.toLowerCase().includes(query.toLowerCase())
              })
            }, 200)
          } else {
            this.options = []
          }
        },
      },
    })

    const select = wrapper.findComponent({ name: 'ElSelect' }).vm
    select.onInput({
      target: {
        value: '',
      },
    })

    select.onInput({
      target: {
        value: 'a',
      },
    })
    vi.runAllTimers()
    await nextTick()
    let options = getOptions()
    options[0].click()
    await nextTick()
    select.onInput({
      target: {
        value: 'n',
      },
    })
    vi.runAllTimers()
    await nextTick()
    options = getOptions()
    options[5].click()
    await nextTick()
    expect(select.states.selected.length === 2).toBeTruthy()
    expect(select.states.selected[0].currentLabel !== '').toBeTruthy()
    expect(select.states.selected[1].currentLabel !== '').toBeTruthy()
    vi.useRealTimers()
  })

  test('disabled group', async () => {
    wrapper = _mount(
      `
    <el-select v-model="value">
      <el-group-option
        v-for="group in options"
        :key="group.label"
        :label="group.label"
        :disabled="group.disabled">
        <el-option
          v-for="item in group.options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-group-option>
    </el-select>`,
      () => ({
        options: [
          {
            label: 'Popular cities',
            options: [
              { value: 'Shanghai', label: 'Shanghai' },
              { value: 'Beijing', label: 'Beijing' },
            ],
          },
          {
            label: 'City name',
            options: [
              { value: 'Chengdu', label: 'Chengdu' },
              { value: 'Shenzhen', label: 'Shenzhen' },
              { value: 'Guangzhou', label: 'Guangzhou' },
              { value: 'Dalian', label: 'Dalian' },
            ],
          },
        ],
        value: '',
      })
    )

    const vm = wrapper.vm as any
    wrapper.find(`.${WRAPPER_CLASS_NAME}`).trigger('click')
    await nextTick()
    vm.options[1].disabled = true
    await nextTick()
    const options = getOptions()
    expect(options[0].className).not.toContain('is-disabled')
    expect(options[2].className).toContain('is-disabled')
    options[0].click()
    await nextTick()
    expect(vm.value).toBe('Shanghai')
    options[2].click()
    await nextTick()
    expect(vm.value).toBe('Shanghai')
  })

  test('el-option-group should visible when el-option in a component', async () => {
    const Options = defineComponent({
      components: {
        'el-option': Option,
      },
      props: {
        options: {
          type: Array,
          default: () => [],
        },
      },
      template: `
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        />
      `,
    })

    wrapper = mount({
      template: `
        <el-select v-model="value">
          <el-option-group
            v-for="group in options"
            :key="group.label"
            :label="group.label"
          >
            <Options :options="group.options" />
          </el-option-group>
        </el-select>
      `,
      components: {
        'el-select': Select,
        'el-option-group': Group,
        Options,
      },
      data() {
        return {
          value: '',
          options: [
            {
              label: 'Popular cities',
              options: [
                {
                  value: 'Shanghai',
                  label: 'Shanghai',
                },
                {
                  value: 'Beijing',
                  label: 'Beijing',
                },
              ],
            },
          ],
        }
      },
    })

    expect(wrapper.findComponent(Group).vm.visible).toBe(true)
  })

  test('el-option-group should visible when custom option component', async () => {
    const CustomOptions = defineComponent({
      components: {
        'el-option': Option,
      },
      props: {
        label: {
          type: String,
          default: '',
        },
        value: {
          type: [String, Number],
          default: null,
        },
      },
      template: `
        <el-option
          :label="label"
          :value="value"
        >
          {{label}} - some extra text
        </el-option>
      `,
    })

    wrapper = mount({
      template: `
        <el-select v-model="value">
          <el-option-group
            v-for="group in options"
            :key="group.label"
            :label="group.label"
          >
            <custom-options
              v-for="item in group.options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-option-group>
        </el-select>
      `,
      components: {
        'el-select': Select,
        'el-option-group': Group,
        CustomOptions,
      },
      data() {
        return {
          value: '',
          options: [
            {
              label: 'Popular cities',
              options: [
                {
                  value: 'Shanghai',
                  label: 'Shanghai',
                },
                {
                  value: 'Beijing',
                  label: 'Beijing',
                },
              ],
            },
          ],
        }
      },
    })

    expect(wrapper.findComponent(Group).vm.visible).toBe(true)
  })

  test('tag of disabled option is not closable', async () => {
    wrapper = _mount(
      `
    <el-select v-model="vendors" multiple :collapse-tags="isCollapsed" :clearable="isClearable" placeholder="Select Business Unit">
    <el-option
      v-for="(vendor, index) in options"
      :key="index"
      :value="index + 1"
      :label="vendor.name"
      :disabled="vendor.isDisabled"
    >
    </el-option>
  </el-select>`,
      () => ({
        vendors: [2, 3, 4],
        isCollapsed: false,
        isClearable: false,
        options: [
          { name: 'Test 1', isDisabled: false },
          { name: 'Test 2', isDisabled: true },
          { name: 'Test 3', isDisabled: false },
          { name: 'Test 4', isDisabled: true },
        ],
      })
    )
    const vm = wrapper.vm as any
    await nextTick()
    const selectVm = wrapper.findComponent({ name: 'ElSelect' }).vm as any
    expect(wrapper.findAll('.el-tag').length).toBe(3)
    const tagCloseIcons = wrapper.findAll('.el-tag__close')
    expect(tagCloseIcons.length).toBe(1)
    await tagCloseIcons[0].trigger('click')
    expect(wrapper.findAll('.el-tag__close').length).toBe(0)
    expect(wrapper.findAll('.el-tag').length).toBe(2)

    //test if is clearable
    vm.isClearable = true
    vm.vendors = [2, 3, 4]
    await nextTick()
    selectVm.states.inputHovering = true
    await selectVm.$nextTick()
    const iconClear = wrapper.findComponent(CircleClose)
    expect(wrapper.findAll('.el-tag').length).toBe(3)
    await iconClear.trigger('click')
    expect(wrapper.findAll('.el-tag').length).toBe(2)

    // test for collapse select
    vm.vendors = [1, 2, 4]
    vm.isCollapsed = true
    vm.isClearable = false
    await nextTick()
    expect(
      wrapper.findAll('.el-tag').filter((item) => {
        return !hasClass(item.element, 'in-tooltip')
      }).length
    ).toBe(2)
    await wrapper.find('.el-tag__close').trigger('click')
    expect(
      wrapper.findAll('.el-tag').filter((item) => {
        return !hasClass(item.element, 'in-tooltip')
      }).length
    ).toBe(2)
    expect(wrapper.findAll('.el-tag__close').length).toBe(0)

    // test for collapse select if is clearable
    vm.vendors = [1, 2, 4]
    vm.isCollapsed = true
    vm.isClearable = true
    await nextTick()
    expect(
      wrapper.findAll('.el-tag__close').filter((item) => {
        return !hasClass(item.element.parentElement, 'in-tooltip')
      }).length
    ).toBe(1)
    await wrapper.find('.el-tag__close').trigger('click')
    expect(
      wrapper.findAll('.el-tag').filter((item) => {
        return !hasClass(item.element, 'in-tooltip')
      }).length
    ).toBe(2)
    expect(wrapper.findAll('.el-tag__close').length).toBe(0)
  })

  test('tag type', async () => {
    wrapper = _mount(
      `
      <el-select v-model="value" multiple tag-type="success">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
    `,
      () => ({
        options: [
          {
            value: '选项1',
            label: '黄金糕',
          },
          {
            value: '选项2',
            label: '双皮奶',
          },
        ],
        value: [],
      })
    )

    await wrapper.find(`.${WRAPPER_CLASS_NAME}`).trigger('click')
    const options = getOptions()
    options[1].click()
    await nextTick()
    expect(wrapper.find('.el-tag').classes()).toContain('el-tag--success')
  })

  test('modelValue should be deep reactive in multiple mode', async () => {
    wrapper = _mount(
      `
    <el-select v-model="modelValue" multiple>
      <el-option
        v-for="option in options"
        :key="option.value"
        :value="option.value"
        :label="option.label"
      >
      </el-option>
    </el-select>`,
      () => ({
        modelValue: [1],
        options: [
          { label: 'Test 1', value: 1 },
          { label: 'Test 2', value: 2 },
          { label: 'Test 3', value: 3 },
          { label: 'Test 4', value: 4 },
        ],
      })
    )
    const vm = wrapper.vm as any
    await nextTick()
    expect(wrapper.findAll('.el-tag').length).toBe(1)

    vm.modelValue.splice(0, 1)

    await nextTick()
    expect(wrapper.findAll('.el-tag').length).toBe(0)
  })

  test('should reset placeholder after clear when both multiple and filterable are true', async () => {
    const placeholder = 'placeholder'
    wrapper = _mount(
      `
    <el-select v-model="modelValue" multiple filterable placeholder=${placeholder}>
      <el-option label="1" value="1" />
    </el-select>`,
      () => ({
        modelValue: ['1'],
      })
    )
    await nextTick()

    expect(wrapper.find(`.${PLACEHOLDER_CLASS_NAME}`).exists()).toBe(false)

    const tagCloseIcon = wrapper.find('.el-tag__close')
    await tagCloseIcon.trigger('click')
    expect(wrapper.find(`.${PLACEHOLDER_CLASS_NAME}`).text()).toBe(placeholder)

    const input = wrapper.find('input')
    await input.setValue('a')
    await nextTick()

    expect(wrapper.find(`.${PLACEHOLDER_CLASS_NAME}`).exists()).toBe(false)
    await input.setValue('')
    expect(wrapper.find(`.${PLACEHOLDER_CLASS_NAME}`).text()).toBe(placeholder)
  })

  test('should close popper when click icon twice', async () => {
    wrapper = getSelectVm({
      filterable: true,
      clearable: true,
    })
    const select = wrapper.findComponent({ name: 'ElSelect' })
    const trigger = wrapper.find(`.${WRAPPER_CLASS_NAME}`)
    await trigger.trigger('click')
    expect((select.vm as any).expanded).toBe(true)
    await trigger.trigger('click')
    expect((select.vm as any).expanded).toBe(false)
  })

  test('mouseenter click', async () => {
    wrapper = getSelectVm({
      filterable: true,
      clearable: true,
    })
    const select = wrapper.findComponent({ name: 'ElSelect' })
    const trigger = wrapper.find(`.${WRAPPER_CLASS_NAME}`)
    await trigger.trigger('click')
    expect((select.vm as any).expanded).toBe(true)

    await trigger.trigger('click')
    expect((select.vm as any).expanded).toBe(false)
  })

  describe('should show all options when open select dropdown', () => {
    async function testShowOptions({ filterable, multiple }: SelectProps = {}) {
      wrapper = getSelectVm({ filterable, multiple })
      const options = wrapper.findAllComponents({ name: 'ElOption' })

      await wrapper.find(`.${WRAPPER_CLASS_NAME}`).trigger('click')
      expect(options.every((option) => option.vm.visible)).toBe(true)

      await options[1].trigger('click')
      await wrapper.find(`.${WRAPPER_CLASS_NAME}`).trigger('click')
      expect(options.every((option) => option.vm.visible)).toBe(true)
    }

    test('both filterable and multiple are false', async () => {
      await testShowOptions()
    })

    test('filterable is true and multiple is false', async () => {
      await testShowOptions({ filterable: true })
    })

    test('filterable is false and multiple is true', async () => {
      await testShowOptions({ multiple: true })
    })

    test('both filterable and multiple are true', async () => {
      await testShowOptions({ filterable: true, multiple: true })
    })

    test('filterable is true with grouping', async () => {
      wrapper = getGroupSelectVm({ filterable: true })
      await wrapper.find(`.${WRAPPER_CLASS_NAME}`).trigger('click')
      const vm = wrapper.findComponent(Select).vm
      const event = { target: { value: 'sh' } }
      vm.onInput(event)
      await nextTick()
      const groups = wrapper.findAllComponents(Group)
      expect(
        groups.filter((group) => {
          const vm = group.vm as any
          return vm.visible
        }).length
      ).toBe(1)
    })
  })

  describe('after search', () => {
    async function testAfterSearch({
      multiple,
      filterMethod,
      remote,
      remoteMethod,
    }: SelectProps) {
      wrapper = getSelectVm({
        filterable: true,
        multiple,
        filterMethod,
        remote,
        remoteMethod,
      })
      const method = remote ? remoteMethod : filterMethod
      const firstInputLetter = 'a'
      const secondInputLetter = 'aa'

      await nextTick()
      await wrapper.trigger('mouseenter')

      const input = wrapper.find('input')
      await input.setValue(firstInputLetter)
      expect(method).toBeCalled()
      expect(method.mock.calls[0][0]).toBe(firstInputLetter)

      await input.setValue(secondInputLetter)
      expect(method).toBeCalledTimes(2)
      expect(method.mock.calls[1][0]).toBe(secondInputLetter)
    }

    test('should call filter method', async () => {
      const filterMethod = vi.fn()
      await testAfterSearch({ filterMethod })
    })

    test('should call filter method in multiple mode', async () => {
      const filterMethod = vi.fn()
      await testAfterSearch({ multiple: true, filterMethod })
    })

    test('should call remote method', async () => {
      const remoteMethod = vi.fn()
      await testAfterSearch({ remote: true, remoteMethod })
    })

    test('should call remote method in multiple mode', async () => {
      const remoteMethod = vi.fn()
      await testAfterSearch({ multiple: true, remote: true, remoteMethod })
    })
  })

  describe('teleported API', () => {
    it('should mount on popper container', async () => {
      expect(document.body.innerHTML).toBe('')
      wrapper = _mount(
        `
      <el-select v-model="modelValue" multiple>
        <el-option
          v-for="option in options"
          :key="option.value"
          :value="option.value"
          :label="option.label"
        >
        </el-option>
      </el-select>`,
        () => ({
          modelValue: [1],
          options: [
            { label: 'Test 1', value: 1 },
            { label: 'Test 2', value: 2 },
            { label: 'Test 3', value: 3 },
            { label: 'Test 4', value: 4 },
          ],
        })
      )

      await nextTick()
      const { selector } = wrapper.vm
      expect(document.body.querySelector(selector).innerHTML).not.toBe('')
    })

    it('should not mount on the popper container', async () => {
      expect(document.body.innerHTML).toBe('')
      wrapper = _mount(
        `
      <el-select v-model="modelValue" multiple :teleported="false">
        <el-option
          v-for="option in options"
          :key="option.value"
          :value="option.value"
          :label="option.label"
        >
        </el-option>
      </el-select>`,
        () => ({
          modelValue: [1],
          options: [
            { label: 'Test 1', value: 1 },
            { label: 'Test 2', value: 2 },
            { label: 'Test 3', value: 3 },
            { label: 'Test 4', value: 4 },
          ],
        })
      )

      await nextTick()
      const { selector } = wrapper.vm
      expect(document.body.querySelector(selector).innerHTML).toBe('')
    })
  })

  it('multiple select has an initial value', async () => {
    const options = [{ value: `value:Alaska`, label: `label:Alaska` }]
    const modelValue = [{ value: `value:Alaska`, label: `label:Alaska` }]
    const wrapper = _mount(
      `
    <el-select v-model="modelValue"
      multiple
      value-key="value"
      filterable>
      <el-option
        v-for="option in options"
        :key="option.value"
        :value="option.value"
        :label="option.label"
      >
      </el-option>
    </el-select>`,
      () => ({
        modelValue,
        options,
      })
    )
    const select = wrapper.findComponent({ name: 'ElSelect' }).vm
    expect(select.states.selected[0].currentLabel).toBe(options[0].label)
  })

  test('should reset selectedLabel when toggle multiple', async () => {
    wrapper = getSelectVm({ multiple: false })
    const select = wrapper.findComponent({ name: 'ElSelect' })
    const vm = wrapper.vm as any
    const selectVm = select.vm as any
    vm.value = '选项1'
    await nextTick()
    expect(selectVm.states.selectedLabel).toBe('黄金糕')
    vm.multiple = true
    vm.value = []
    await nextTick()
    expect(selectVm.states.selectedLabel).toBe('')
  })

  test('should modify size height change', async () => {
    // no need to calculate input height
  })

  describe('form item accessibility integration', () => {
    it('automatic id attachment', async () => {
      const wrapper = _mount(
        `<el-form-item label="Foobar" data-test-ref="item">
          <el-select v-model="modelValue">
            <el-option label="1" value="1" />
          </el-select>
        </el-form-item>`,
        () => ({
          modelValue: 1,
        })
      )

      await nextTick()
      const formItem = wrapper.find('[data-test-ref="item"]')
      const formItemLabel = formItem.find('.el-form-item__label')
      const innerInput = wrapper.find('input')
      expect(formItem.attributes().role).toBeFalsy()
      expect(formItemLabel.attributes().for).toBe(innerInput.attributes().id)
    })

    it('specified id attachment', async () => {
      const wrapper = _mount(
        `<el-form-item label="Foobar" data-test-ref="item">
          <el-select id="foobar" v-model="modelValue">
            <el-option label="1" value="1" />
          </el-select>
        </el-form-item>`,
        () => ({
          modelValue: 1,
        })
      )

      await nextTick()
      const formItem = wrapper.find('[data-test-ref="item"]')
      const formItemLabel = formItem.find('.el-form-item__label')
      const innerInput = wrapper.find('input')
      expect(formItem.attributes().role).toBeFalsy()
      expect(innerInput.attributes().id).toBe('foobar')
      expect(formItemLabel.attributes().for).toBe(innerInput.attributes().id)
    })

    it('form item role is group when multiple inputs', async () => {
      const wrapper = _mount(
        `<el-form-item label="Foobar" data-test-ref="item">
          <el-select v-model="modelValue">
            <el-option label="1" value="1" />
          </el-select>
          <el-select v-model="modelValue">
            <el-option label="1" value="1" />
          </el-select>
        </el-form-item>`,
        () => ({
          modelValue: 1,
        })
      )

      await nextTick()
      const formItem = wrapper.find('[data-test-ref="item"]')
      expect(formItem.attributes().role).toBe('group')
    })
  })

  // fix: 8544
  it('When props are changed, label can be displayed correctly after selecting operation', async () => {
    wrapper = getGroupSelectVm({}, [
      {
        label: 'group1',
        options: [
          { value: 0, label: 'x' },
          { value: 1, label: 'y' },
          { value: 2, label: 'z' },
        ],
      },
    ])
    await wrapper.find(`.${WRAPPER_CLASS_NAME}`).trigger('click')
    let options = getOptions()
    const vm = wrapper.vm as any
    expect(vm.value).toBe('')
    expect(wrapper.find(`.${PLACEHOLDER_CLASS_NAME}`).text()).toBe(
      DEFAULT_PLACEHOLDER
    )
    await nextTick()
    options[1].click()
    await nextTick()
    expect(vm.value).toBe(1)
    expect(wrapper.find(`.${PLACEHOLDER_CLASS_NAME}`).text()).toBe('y')
    wrapper.vm.options = [
      {
        label: 'group2',
        options: [
          { value: 0, label: 'x' },
          { value: 1, label: 'y' },
          { value: 2, label: 'z' },
        ],
      },
    ]

    await nextTick()
    options = getOptions()
    options[1].click()
    await nextTick()
    expect(vm.value).toBe(1)
    expect(wrapper.find(`.${PLACEHOLDER_CLASS_NAME}`).text()).toBe('y')
    options[2].click()
    await nextTick()
    expect(vm.value).toBe(2)
    expect(wrapper.find(`.${PLACEHOLDER_CLASS_NAME}`).text()).toBe('z')
  })

  it('should update selected data when the options prop is changed and the select is focused', async () => {
    const options = [
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
    ]

    const wrapper = getSelectVm()
    const vm = wrapper.vm
    const input = wrapper.find('input')
    const nativeInput = input.element

    await wrapper.setProps({ modelValue: '1' })
    expect(wrapper.find(`.${PLACEHOLDER_CLASS_NAME}`).text()).toEqual('1')

    nativeInput.focus()
    vm.options = options
    await nextTick()
    expect(wrapper.find(`.${PLACEHOLDER_CLASS_NAME}`).text()).toEqual(
      'option 1'
    )

    vm.options = []
    await wrapper.setProps({ modelValue: ['1'] })
    await wrapper.setProps({ multiple: true })

    nativeInput.focus()
    vm.options = options
    await nextTick()
    expect(wrapper.findAll('.el-tag')[0].text()).toBe('option 1')
  })

  // fix: https://github.com/element-plus/element-plus/issues/11991
  it('backspace key should delete selected tag but should not delete disabled options', async () => {
    const options = [
      {
        value: 'Option1',
        label: 'Option1',
        disable: true,
      },
      {
        value: 'Option2',
        label: 'Option2',
        disable: false,
      },
    ]
    const value = ['Option2', 'Option1']
    const wrapper = _mount(
      `
          <el-select v-model="value"
            multiple
            filterable
          >
            <el-option
              v-for="option in options"
              :key="option.value"
              :value="option.value"
              :label="option.label"
              :disabled="option.disable"
            >
            </el-option>
          </el-select>
        `,
      () => ({
        value,
        options,
      })
    )
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
  it('should ensure that isDisabled is fresh to prevent selected tag from being cleared', async () => {
    const disabled = ref(false)
    const wrapper = _mount(
      `
            <el-select v-model="value" multiple clearable>
              <el-option
                label="foo"
                value="foo"
                :disabled="disabled"
              >
              </el-option>
            </el-select>
          `,
      () => ({
        value: ['foo'],
        disabled,
      })
    )
    disabled.value = true
    const selectVm = wrapper.findComponent({ name: 'ElSelect' }).vm
    selectVm.states.inputHovering = true
    await nextTick()
    const iconClear = wrapper.findComponent(CircleClose)
    await iconClear.trigger('click')
    expect(wrapper.findAll('.el-tag').length).toBe(1)
    const selectInput = wrapper.find('.el-select__input')
    await selectInput.trigger('keydown', {
      code: EVENT_CODE.backspace,
      key: EVENT_CODE.backspace,
    })
    await nextTick()
    expect(wrapper.findAll('.el-tag').length).toBe(1)
    await selectInput.trigger('keydown', {
      code: EVENT_CODE.enter,
      key: EVENT_CODE.enter,
    })
    await nextTick()
    expect(wrapper.findAll('.el-tag').length).toBe(1)
  })
  it('It should generate accessible attributes', async () => {
    wrapper = _mount(
      `<el-select v-model="value">
        <el-option label="label" value="1" />
        <el-option label="disabled" value="2" disabled />
      </el-select>`,
      () => ({ value: '1' })
    )

    const dropdown = wrapper.findComponent({ name: 'ElSelectDropdown' })
    const input = wrapper.find('input')
    const list = dropdown.find('.el-select-dropdown__list')
    const option = dropdown.find('.el-select-dropdown__item')
    const disabledOption = dropdown.find(
      '.el-select-dropdown__item:nth-child(2)'
    )

    expect(input.attributes('role')).toBe('combobox')
    expect(input.attributes('tabindex')).toBe('0')
    expect(input.attributes('aria-autocomplete')).toBe('none')
    expect(input.attributes('aria-controls')).toBe(list.attributes('id'))
    expect(input.attributes('aria-expanded')).toBe('false')
    expect(input.attributes('aria-haspopup')).toBe('listbox')
    expect(input.attributes('aria-activedescendant')).toBe('')

    expect(list.attributes('id')).toBeTruthy()
    expect(list.attributes('role')).toBe('listbox')
    expect(list.attributes('aria-orientation')).toBe('vertical')

    expect(option.attributes('id')).toBeTruthy()
    expect(option.attributes('role')).toBe('option')
    expect(option.attributes('aria-disabled')).toBe(undefined)
    expect(option.attributes('aria-selected')).toBe('true')
    expect(disabledOption.attributes('aria-disabled')).toBe('true')
  })

  it('tabindex', async () => {
    wrapper = _mount(
      `<el-select v-model="value" tabindex="1">
        <el-option label="label" value="1" />
        <el-option label="disabled" value="2" disabled />
      </el-select>`,
      () => ({ value: '1' })
    )

    const input = wrapper.find('input')
    expect(input.attributes('tabindex')).toBe('1')
  })

  it('should be trigger the click event', async () => {
    const handleClick = vi.fn()
    const wrapper = _mount(`<el-select @click="handleClick" />`, () => ({
      handleClick,
    }))

    await wrapper.find(`.${WRAPPER_CLASS_NAME}`).trigger('click')
    expect(handleClick).toHaveBeenCalledOnce()
  })

  test('should be run normally when switching multiple', async () => {
    wrapper = getSelectVm({ multiple: false })
    const vm = wrapper.vm as any

    await (vm.value = undefined)
    await (vm.multiple = true)
    await (vm.multiple = false)
    expect(vm.value).toBe(undefined)
  })

  // case #18022
  it('should be do not expend options when select is disabled', async () => {
    const value = null
    const wrapper = _mount(
      `
        <el-select v-model="value"
          filterable
          automatic-dropdown
          disabled
        >
          <el-option value="1">1</el-option>
          <el-option value="2">2</el-option>
        </el-select>
      `,
      () => ({
        value,
      })
    )
    await nextTick()
    await wrapper.find(`.${WRAPPER_CLASS_NAME}`).trigger('focus')
    await nextTick()
    expect(
      (document.querySelector('.el-select__popper') as HTMLElement).style
        .display
    ).toBe('none')
  })

  describe('check default first option after input', () => {
    it('defalut', async () => {
      vi.useFakeTimers()
      wrapper = getSelectVm({
        filterable: true,
        defaultFirstOption: true,
      })

      const select = wrapper.findComponent({ name: 'ElSelect' })
      const selectVm = select.vm as any
      const input = wrapper.find('input')
      input.element.focus()

      selectVm.onInput({
        target: {
          value: '蚵仔煎',
        },
      })

      vi.runAllTimers()
      await nextTick()
      expect(selectVm.states.hoveringIndex).toBe(2)

      vi.useRealTimers()
    })

    it('with multiple', async () => {
      vi.useFakeTimers()
      wrapper = getSelectVm({
        multiple: true,
        filterable: true,
        defaultFirstOption: true,
      })

      const select = wrapper.findComponent({ name: 'ElSelect' })
      const selectVm = select.vm as any
      const input = wrapper.find('input')
      input.element.focus()

      selectVm.onInput({
        target: {
          value: '蚵仔煎',
        },
      })

      vi.runAllTimers()
      await nextTick()
      expect(selectVm.states.hoveringIndex).toBe(2)

      vi.useRealTimers()
    })

    it('the value is string with value-key', async () => {
      vi.useFakeTimers()
      wrapper = getSelectVm({
        filterable: true,
        defaultFirstOption: true,
        valueKey: 'label',
      })

      const select = wrapper.findComponent({ name: 'ElSelect' })
      const selectVm = select.vm as any
      const input = wrapper.find('input')
      input.element.focus()

      selectVm.onInput({
        target: {
          value: '蚵仔煎',
        },
      })

      vi.runAllTimers()
      await nextTick()
      expect(selectVm.states.hoveringIndex).toBe(2)

      vi.useRealTimers()
    })

    it('the value is object with value-key', async () => {
      vi.useFakeTimers()
      wrapper = _mount(
        `
        <el-select v-model="value" value-key="id" filterable default-first-option>
          <el-option
            v-for="item in options"
            :label="item.name"
            :key="item.id"
            :value="item">
          </el-option>
        </el-select>
      `,
        () => ({
          options: [
            {
              id: 1,
              name: '黄金糕',
            },
            {
              id: 2,
              name: '双皮奶',
            },
            {
              id: 3,
              name: '蚵仔煎',
            },
          ],
          value: null,
        })
      )

      const select = wrapper.findComponent({ name: 'ElSelect' })
      const selectVm = select.vm as any
      const input = wrapper.find('input')
      input.element.focus()

      selectVm.onInput({
        target: {
          value: '蚵仔煎',
        },
      })

      vi.runAllTimers()
      await nextTick()
      expect(selectVm.states.hoveringIndex).toBe(2)

      vi.useRealTimers()
    })
  })

  it('should keep the selected label after filtering options', async () => {
    const initials = [
      {
        value: 'aa',
        label: 'label aa',
      },
      {
        value: 'bb',
        label: 'label bb',
      },
    ]

    const wrapper = _mount(
      `
        <el-select v-model="value">
          <el-option
            v-for="option in options"
            :key="option.value"
            :value="option.value"
            :label="option.label"
          />
        </el-select>
      `,
      () => ({
        value: 'aa',
        options: initials,
      }),
      {
        methods: {
          handleSearch(val) {
            this.options = initials.filter((item) => item.label.includes(val))
          },
        },
      }
    )

    await nextTick()
    const select = wrapper.findComponent(Select)
    const selectVm = select.vm as any
    const vm = wrapper.vm as any

    expect(selectVm.selectedLabel).toBe('label aa')

    const trigger = wrapper.find(`.${WRAPPER_CLASS_NAME}`)
    await trigger.trigger('mouseenter')
    await trigger.trigger('click')
    vm.handleSearch('bb')

    await nextTick()
    expect(wrapper.vm.options.length).toBe(1)
    expect(selectVm.selectedLabel).toBe('label aa')
    vm.handleSearch('bbb')

    await nextTick()
    expect(wrapper.vm.options.length).toBe(0)
    expect(selectVm.selectedLabel).toBe('label aa')

    vm.value = 'bb'
    await nextTick()
    expect(selectVm.selectedLabel).toBe('bb')

    vm.value = ''
    await nextTick()
    expect(selectVm.selectedLabel).toBe('')
  })
})
