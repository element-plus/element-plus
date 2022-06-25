// @ts-nocheck
import { markRaw, nextTick } from 'vue'
import { mount } from '@vue/test-utils'
import { afterEach, describe, expect, it, test, vi } from 'vitest'
import { EVENT_CODE } from '@element-plus/constants'
import { ArrowUp, CaretTop, CircleClose } from '@element-plus/icons-vue'
import { POPPER_CONTAINER_SELECTOR } from '@element-plus/hooks'
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
      ...otherObj,
    },
    {
      attachTo: 'body',
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

describe('Select', () => {
  let wrapper: ReturnType<typeof _mount>
  const findInnerInput = () =>
    wrapper.find('.el-input__inner').element as HTMLInputElement

  afterEach(() => {
    document.body.innerHTML = ''
  })

  test('create', async () => {
    wrapper = _mount(`<el-select v-model="value"></el-select>`, () => ({
      value: '',
    }))
    expect(wrapper.classes()).toContain('el-select')
    expect(findInnerInput().placeholder).toBe('Select')
    const select = wrapper.findComponent({ name: 'ElSelect' })
    await select.trigger('click')
    await nextTick()
    expect((select.vm as any).visible).toBe(true)
  })

  test('options rendered correctly', () => {
    wrapper = getSelectVm()
    const options = wrapper.element.querySelectorAll(
      '.el-select-dropdown__item'
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

    expect(findInnerInput().value).toBe('双皮奶')
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

    expect(findInnerInput().value).toBe('双皮奶')
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

    expect(findInnerInput().value).toBe('双皮奶')
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

    expect(findInnerInput().value).toBe('双皮奶')
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
    expect(findInnerInput().value).toBe('黄金糕')
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

    await wrapper.find('.select-trigger').trigger('click')
    const options = getOptions()
    const vm = wrapper.vm as any
    expect(vm.value).toBe('')
    expect(findInnerInput().value).toBe('')
    options[2].click()
    await nextTick()
    expect(vm.value).toBe('选项3')
    expect(findInnerInput().value).toBe('蚵仔煎')
    expect(vm.count).toBe(1)
    options[4].click()
    await nextTick()
    expect(vm.value).toBe('选项5')
    expect(findInnerInput().value).toBe('北京烤鸭')
    expect(vm.count).toBe(2)
  })

  test('disabled option', async () => {
    wrapper = getSelectVm()
    const vm = wrapper.vm as any
    wrapper.find('.select-trigger').trigger('click')
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
    expect(wrapper.find('.el-input').classes()).toContain('is-disabled')
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
    selectVm.visible = true
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
    expect(vm.hoverIndex).toBe(3)
    vm.selectOption()
    await nextTick()
    expect((wrapper.vm as any).value).toBe('选项4')
    vm.toggleMenu()

    vi.runAllTimers()
    await nextTick()

    vm.toggleMenu()
    await nextTick()
    expect(vm.hoverIndex).toBe(3)
    vi.useRealTimers()
  })

  test('clearable', async () => {
    wrapper = getSelectVm({ clearable: true })
    const select = wrapper.findComponent({ name: 'ElSelect' })
    const vm = wrapper.vm as any
    const selectVm = select.vm as any
    vm.value = '选项1'
    await nextTick()
    selectVm.inputHovering = true
    await selectVm.$nextTick()
    const iconClear = wrapper.findComponent(CircleClose)
    expect(iconClear.exists()).toBe(true)
    await iconClear.trigger('click')
    expect(vm.value).toBe('')
  })

  test('suffix icon', async () => {
    wrapper = _mount(`<el-select></el-select>`)
    let suffixIcon = wrapper.findComponent(ArrowUp)
    expect(suffixIcon.exists()).toBe(true)
    await wrapper.setProps({ suffixIcon: markRaw(CaretTop) })
    suffixIcon = wrapper.findComponent(CaretTop)
    expect(suffixIcon.exists()).toBe(true)
  })

  test('fitInputWidth', async () => {
    wrapper = getSelectVm({ fitInputWidth: true })
    const selectWrapper = wrapper.findComponent({ name: 'ElSelect' })
    const selectDom = selectWrapper.element
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
      selectWrapper.element.getBoundingClientRect().width
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
    input.element.focus()

    expect(selectVm.hoverIndex).toBe(0)
    selectVm.navigateOptions('next')
    expect(selectVm.hoverIndex).toBe(1)
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
    input.element.focus()

    expect(selectVm.hoverIndex).toBe(1) // index 0 was skipped
    selectVm.navigateOptions('next')
    expect(selectVm.hoverIndex).toBe(2)
    selectVm.navigateOptions('next')
    expect(selectVm.hoverIndex).toBe(1) // index 0 was skipped
  })

  test('allow create', async () => {
    wrapper = getSelectVm({ filterable: true, allowCreate: true })
    const select = wrapper.findComponent({ name: 'ElSelect' })
    const selectVm = select.vm as any
    const input = wrapper.find('input')
    input.element.focus()
    selectVm.selectedLabel = 'new'
    selectVm.debouncedOnInputChange()
    await nextTick()
    const options = [...getOptions()]
    const target = options.find((option) => option.textContent === 'new')
    target.click()
    expect((wrapper.vm as any).value).toBe('new')
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
    expect(getOptions()).toHaveLength(1)
    await wrapper.setData({
      options,
    })
    expect(getOptions()).toHaveLength(options.length)
  })

  test('multiple select', async () => {
    wrapper = getSelectVm({ multiple: true })
    await wrapper.find('.select-trigger').trigger('click')
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
    await wrapper.find('.select-trigger').trigger('click')
    const options = getOptions()
    const selectWrapper = wrapper.findComponent(Select)
    const inputWrapper = selectWrapper.findComponent({ ref: 'reference' })
    const inputDom = inputWrapper.element
    const inputRect = {
      height: 40,
      width: 221,
      x: 44,
      y: 8,
      top: 8,
    }
    const mockInputWidth = vi
      .spyOn(inputDom, 'getBoundingClientRect')
      .mockReturnValue(inputRect as DOMRect)
    selectWrapper.vm.handleResize()
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
        Number.parseInt(tagWrapperDom.style.maxWidth) === inputRect.width - 75
      ).toBe(true)
    }
    mockInputWidth.mockRestore()
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
    await wrapper.find('.select-trigger').trigger('click')
    const options = getOptions()
    const selectWrapper = wrapper.findComponent(Select)
    const inputWrapper = selectWrapper.findComponent({ ref: 'reference' })
    const inputDom = inputWrapper.element
    const inputRect = {
      height: 40,
      width: 221,
      x: 44,
      y: 8,
      top: 8,
    }
    const mockInputWidth = vi
      .spyOn(inputDom, 'getBoundingClientRect')
      .mockReturnValue(inputRect as DOMRect)
    selectWrapper.vm.handleResize()
    options[0].click()
    await nextTick()
    options[1].click()
    await nextTick()
    options[2].click()
    await nextTick()
    const tagWrappers = wrapper.findAll('.el-select__tags-text')
    const tagWrapperDom = tagWrappers[0].element
    expect(
      Number.parseInt(tagWrapperDom.style.maxWidth) === inputRect.width - 123
    ).toBe(true)
    mockInputWidth.mockRestore()
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
    await wrapper.find('.select-trigger').trigger('click')
    const options = getOptions()

    options[0].click()
    await nextTick()
    options[1].click()
    await nextTick()
    options[2].click()
    await nextTick()
    const triggerWrappers = wrapper.findAll('.el-tooltip__trigger')
    expect(triggerWrappers[0]).toBeDefined()
    const tags = wrapper.findAll('.el-select__tags-text')
    expect(tags.length).toBe(4)
    expect(tags[3].element.textContent).toBe('蚵仔煎')
  })

  test('multiple remove-tag', async () => {
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
      }),
      {
        methods: {
          handleRemoveTag() {
            // pass
          },
        },
      }
    )

    const vm = wrapper.vm as any
    await nextTick()
    expect(vm.value.length).toBe(2)
    const tagCloseIcons = wrapper.findAll('.el-tag__close')
    await tagCloseIcons[1].trigger('click')
    expect(vm.value.length).toBe(1)
    await tagCloseIcons[0].trigger('click')
    expect(vm.value.length).toBe(0)
  })

  test('multiple limit', async () => {
    wrapper = getSelectVm({ multiple: true, multipleLimit: 1 })
    const vm = wrapper.vm as any
    await wrapper.find('.select-trigger').trigger('click')
    const options = getOptions()
    options[1].click()
    await nextTick()
    expect(vm.value.includes('选项2')).toBe(true)
    options[3].click()
    await nextTick()
    expect(vm.value.indexOf('选项4')).toBe(-1)
  })

  test('event:focus & blur', async () => {
    const handleFocus = vi.fn()
    const handleBlur = vi.fn()
    wrapper = _mount(
      `<el-select
      @focus="handleFocus"
      @blur="handleBlur" />`,
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
  })

  test('event:focus & blur for multile & filterable select', async () => {
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
  })

  test('should not open popper when automatic-dropdown not set', async () => {
    wrapper = getSelectVm()
    const select = wrapper.findComponent({ name: 'ElSelect' })
    await select
      .findComponent({ ref: 'reference' })
      .find('input')
      .element.focus()
    expect((select.vm as any).visible).toBe(false)
  })

  test('should open popper when automatic-dropdown is set', async () => {
    wrapper = getSelectVm({ automaticDropdown: true })
    const select = wrapper.findComponent({ name: 'ElSelect' })
    await select
      .findComponent({ ref: 'reference' })
      .find('input')
      .trigger('focus')
    expect((select.vm as any).visible).toBe(true)
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
    await wrapper.find('.select-trigger').trigger('click')
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
    await wrapper.find('.select-trigger').trigger('click')
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
    await wrapper.trigger('click')
    const selectVm = wrapper.findComponent({ name: 'ElSelect' }).vm as any
    expect(selectVm.visible).toBe(true)
    expect(findInnerInput().placeholder).toBe('test')
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
    expect(findInnerInput().value).toBe('')
    vm.value = '选项1'
    await nextTick()
    expect(findInnerInput().value).toBe('黄金糕')
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
    const select = wrapper.findComponent({ name: 'ElSelect' })
    await select.trigger('click')
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
    select.debouncedQueryChange({
      target: {
        value: '',
      },
    })

    select.debouncedQueryChange({
      target: {
        value: 'a',
      },
    })
    vi.runAllTimers()
    await nextTick()
    let options = getOptions()
    options[0].click()
    await nextTick()
    select.debouncedQueryChange({
      target: {
        value: 'n',
      },
    })
    vi.runAllTimers()
    await nextTick()
    options = getOptions()
    options[5].click()
    await nextTick()
    expect(select.selected.length === 2).toBeTruthy()
    expect(select.selected[0].currentLabel !== '').toBeTruthy()
    expect(select.selected[1].currentLabel !== '').toBeTruthy()
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
    wrapper.find('.select-trigger').trigger('click')
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
    selectVm.inputHovering = true
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

    await wrapper.find('.select-trigger').trigger('click')
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

    const innerInput = wrapper.find('.el-input__inner')
    const innerInputEl = innerInput.element as HTMLInputElement
    expect(innerInputEl.placeholder).toBe('')

    const tagCloseIcon = wrapper.find('.el-tag__close')
    await tagCloseIcon.trigger('click')
    expect(innerInputEl.placeholder).toBe(placeholder)

    const selectInput = wrapper.find('.el-select__input')
    const selectInputEl = selectInput.element as HTMLInputElement
    selectInputEl.value = 'a'
    vi.useFakeTimers()
    selectInput.trigger('input')
    await nextTick()
    vi.runAllTimers()
    await nextTick()

    expect(innerInputEl.placeholder).toBe('')

    selectInput.trigger('keydown', {
      key: EVENT_CODE.backspace,
    })
    await nextTick()
    expect(innerInputEl.placeholder).toBe(placeholder)
    vi.useRealTimers()
  })

  test('should close popper when click icon twice', async () => {
    wrapper = getSelectVm({
      filterable: true,
      clearable: true,
    })
    const select = wrapper.findComponent({ name: 'ElSelect' })
    const suffixIcon = select.find('.el-input__suffix')
    await suffixIcon.trigger('click')
    expect((select.vm as any).visible).toBe(true)
    await suffixIcon.trigger('click')
    expect((select.vm as any).visible).toBe(false)
  })

  describe('should show all options when open select dropdown', () => {
    async function testShowOptions({ filterable, multiple }: SelectProps = {}) {
      wrapper = getSelectVm({ filterable, multiple })
      const options = wrapper.findAllComponents({ name: 'ElOption' })

      await wrapper.find('.select-trigger').trigger('click')
      expect(options.every((option) => option.vm.visible)).toBe(true)

      await options[1].trigger('click')
      await wrapper.find('.select-trigger').trigger('click')
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
      await wrapper.find('.select-trigger').trigger('click')
      const vm = wrapper.findComponent(Select).vm
      const event = { target: { value: 'sh' } }
      vm.debouncedQueryChange(event)
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

      const input = wrapper.find(
        multiple ? '.el-select__input' : '.el-input__inner'
      )
      const inputEl = input.element as HTMLInputElement
      await input.trigger('click')
      inputEl.value = firstInputLetter
      await input.trigger('input')
      expect(method).toBeCalled()
      expect(method.mock.calls[0][0]).toBe(firstInputLetter)

      inputEl.value = secondInputLetter
      await input.trigger('input')
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
      expect(
        document.body.querySelector(POPPER_CONTAINER_SELECTOR).innerHTML
      ).not.toBe('')
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
      expect(
        document.body.querySelector(POPPER_CONTAINER_SELECTOR).innerHTML
      ).toBe('')
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
    expect(select.selected[0].currentLabel).toBe(options[0].label)
  })

  test('should reset selectedLabel when toggle multiple', async () => {
    wrapper = getSelectVm({ multiple: false })
    const select = wrapper.findComponent({ name: 'ElSelect' })
    const vm = wrapper.vm as any
    const selectVm = select.vm as any
    vm.value = '选项1'
    await nextTick()
    expect(selectVm.selectedLabel).toBe('黄金糕')
    vm.multiple = true
    vm.value = []
    await nextTick()
    expect(selectVm.selectedLabel).toBe('')
  })

  test('should modify size height change', async () => {
    wrapper = getSelectVm()

    // large size
    await wrapper.setProps({
      size: 'large',
    })
    await nextTick(nextTick)
    const inputEl = wrapper.find('input').element as HTMLDivElement
    const sizeMap: Record<string, number> = {
      small: 24,
      default: 32,
      large: 40,
    }

    for (const size in sizeMap) {
      await wrapper.setProps({
        size,
      })
      await nextTick(nextTick)
      expect(inputEl.style.height).toEqual(`${sizeMap[size] - 2}px`)
    }
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
      const innerInput = wrapper.find('.el-input__inner')
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
      const innerInput = wrapper.find('.el-input__inner')
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
})
