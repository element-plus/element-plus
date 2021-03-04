import { mount } from '@vue/test-utils'
import { nextTick } from 'vue'
import Select from '../src/select.vue'
import Group from '../src/option-group.vue'
import Option from '../src/option.vue'

jest.useFakeTimers()

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
}

const _mount = (template: string, data: any = () => ({}), otherObj?) => mount({
  components: {
    'el-select': Select,
    'el-option': Option,
    'el-group-option': Group,
  },
  template,
  data,
  ...otherObj,
}, {
  attachTo: 'body',
})

function getOptions(): HTMLElement[] {
  return Array.from(document.querySelectorAll<HTMLElement>(
    'body > div:last-child .el-select-dropdown__item',
  ))
}

const getSelectVm = (configs: SelectProps = {}, options?) => {
  ['multiple', 'clearable', 'filterable', 'allowCreate', 'remote', 'collapseTags', 'automaticDropdown'].forEach(config => {
    configs[config] = configs[config] || false
  })
  configs.multipleLimit = configs.multipleLimit || 0
  if (!options) {
    options = [{
      value: '选项1',
      label: '黄金糕',
      disabled: false,
    }, {
      value: '选项2',
      label: '双皮奶',
      disabled: false,
    }, {
      value: '选项3',
      label: '蚵仔煎',
      disabled: false,
    }, {
      value: '选项4',
      label: '龙须面',
      disabled: false,
    }, {
      value: '选项5',
      label: '北京烤鸭',
      disabled: false,
    }]
  }

  return _mount(`
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
      :automatic-dropdown="automaticDropdown">
      <el-option
        v-for="item in options"
        :label="item.label"
        :key="item.value"
        :disabled="item.disabled"
        :value="item.value">
      </el-option>
    </el-select>
  `, () => ({
    options,
    multiple: configs.multiple,
    multipleLimit: configs.multipleLimit,
    clearable: configs.clearable,
    filterable: configs.filterable,
    collapseTags: configs.collapseTags,
    allowCreate: configs.allowCreate,
    popperClass: configs.popperClass,
    automaticDropdown: configs.automaticDropdown,
    loading: false,
    filterMethod: configs.filterMethod,
    remote: configs.remote,
    remoteMethod: configs.remoteMethod,
    value: configs.multiple ? [] : '',
  }))
}

describe('Select', () => {

  afterEach(() => {
    document.body.innerHTML = ''
  })
  test('create', async () => {
    const wrapper = _mount(`<el-select v-model="value"></el-select>`, () => ({ value: '' }))
    expect(wrapper.classes()).toContain('el-select')
    expect(wrapper.find('.el-input__inner').element.placeholder).toBe('Select')
    const select = wrapper.findComponent({ name: 'ElSelect' })
    wrapper.trigger('click')
    expect((select.vm as any).visible).toBe(true)
  })

  test('options rendered correctly', () => {
    const wrapper = getSelectVm()
    const options = wrapper.element.querySelectorAll('.el-select-dropdown__item')
    const result = [].every.call(options, (option, index) => {
      const text = option.querySelector('span').textContent
      const vm = wrapper.vm as any
      return text === vm.options[index].label
    })
    expect(result).toBe(true)
  })

  test('custom dropdown class', () => {
    const wrapper = getSelectVm({ popperClass: 'custom-dropdown' })
    const dropdown = wrapper.findComponent({ name: 'ElSelectDropdown' })
    expect(dropdown.classes()).toContain('custom-dropdown')
  })

  test('default value', async() => {
    const wrapper = _mount(`
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
      options: [{
        value: '选项1',
        label: '黄金糕',
      }, {
        value: '选项2',
        label: '双皮奶',
      }],
      value: '选项2',
    }))
    await wrapper.vm.$nextTick()
    expect(wrapper.find('.el-input__inner').element.value).toBe('双皮奶')
  })


  test('sync set value and options', async () => {
    const wrapper = _mount(`
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
      options: [{
        value: '选项1',
        label: '黄金糕',
      }, {
        value: '选项2',
        label: '双皮奶',
      }],
      value: '选项2',
    }))
    const vm = wrapper.vm as any
    vm.options = [{
      value: '选项1',
      label: '黄金糕',
    }]
    vm.value = '选项1'
    await wrapper.vm.$nextTick()
    expect(wrapper.find('.el-input__inner').element.value).toBe('黄金糕')
  })

  test('single select', async () => {
    const wrapper = _mount(`
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
      options: [{
        value: '选项1',
        label: '黄金糕',
      }, {
        value: '选项2',
        label: '双皮奶',
      }, {
        value: '选项3',
        label: '蚵仔煎',
      }, {
        value: '选项4',
        label: '龙须面',
      }, {
        value: '选项5',
        label: '北京烤鸭',
      }],
      value: '',
      count: 0,
    }),
    {
      methods: {
        handleChange() {
          this.count++
        },
      },
    })

    await wrapper.find('.select-trigger').trigger('click')
    const options = getOptions()
    const vm = wrapper.vm as any
    expect(vm.value).toBe('')
    expect(wrapper.find('.el-input__inner').element.value).toBe('')
    options[2].click()
    await nextTick()
    expect(vm.value).toBe('选项3')
    expect(wrapper.find('.el-input__inner').element.value).toBe('蚵仔煎')
    expect(vm.count).toBe(1)
    options[4].click()
    await nextTick()
    expect(vm.value).toBe('选项5')
    expect(wrapper.find('.el-input__inner').element.value).toBe('北京烤鸭')
    expect(vm.count).toBe(2)
  })

  test('disabled option', async() => {
    const wrapper = getSelectVm()
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
    const wrapper = _mount(`<el-select disabled></el-select>`)
    expect(wrapper.find('.el-input').classes()).toContain('is-disabled')
  })

  test('visible event', async() => {
    const wrapper = _mount(`
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
    })
    const select = wrapper.findComponent({ name: 'ElSelect' })
    const vm = wrapper.vm as any
    const selectVm = select.vm as any
    selectVm.visible = true
    await selectVm.$nextTick()
    expect(vm.visible).toBe(true)
  })

  test('keyboard operations', async() => {
    const wrapper = getSelectVm()
    const select = wrapper.findComponent({ name: 'ElSelect' })
    const vm = select.vm as any
    let i = 8
    while (i--) {
      vm.navigateOptions('next')
    }
    vm.navigateOptions('prev')
    await vm.$nextTick()
    expect(vm.hoverIndex).toBe(0)
    vm.selectOption()
    await vm.$nextTick()
    expect((wrapper.vm as any).value).toBe('选项1')
  })

  test('clearable', async () => {
    const wrapper = getSelectVm({ clearable: true })
    const select = wrapper.findComponent({ name: 'ElSelect' })
    const vm = wrapper.vm as any
    const selectVm = select.vm as any
    vm.value = '选项1'
    await vm.$nextTick()
    selectVm.inputHovering = true
    await selectVm.$nextTick()
    const iconClear = wrapper.find('.el-input__icon.el-icon-circle-close')
    expect(iconClear.exists()).toBe(true)
    await iconClear.trigger('click')
    expect(vm.value).toBe('')
  })

  test('allow create', async () => {
    const wrapper = getSelectVm({ filterable: true, allowCreate: true })
    const select = wrapper.findComponent({ name: 'ElSelect' })
    const selectVm = select.vm as any
    const input = wrapper.find('input')
    input.element.focus()
    selectVm.selectedLabel = 'new'
    selectVm.debouncedOnInputChange()
    await nextTick()
    const options = [...getOptions()]
    const target = options.filter(option => option.textContent === 'new')
    target[0].click()
    expect((wrapper.vm as any).value).toBe('new')
  })

  test('multiple select', async () => {
    const wrapper = getSelectVm({ multiple: true })
    await wrapper.find('.select-trigger').trigger('click')
    const options = getOptions()
    const vm = wrapper.vm as any
    vm.value = ['选项1']
    vm.$nextTick()
    options[1].click()
    await nextTick()
    options[3].click()
    await nextTick()
    expect(vm.value.indexOf('选项2') > -1 && vm.value.indexOf('选项4') > -1).toBe(true)
    const tagCloseIcons = wrapper.findAll('.el-tag__close')
    await tagCloseIcons[0].trigger('click')
    expect(vm.value.indexOf('选项1')).toBe(-1)
  })

  test('multiple select when content overflow', async () => {
    const wrapper = _mount(`
      <el-select v-model="selectedList" multiple placeholder="请选择">
        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
        </el-option>
      </el-select>
    `,
    () => ({
      options: [{
        value: '选项1',
        label: '黄金糕黄金糕黄金糕黄金糕黄金糕黄金糕黄金糕黄金糕黄金糕黄金糕黄金糕黄金糕黄金糕黄金糕黄金糕黄金糕黄金糕黄金糕黄金糕黄金糕',
      }, {
        value: '选项2',
        label: '双皮奶双皮奶双皮奶双皮奶双皮奶双皮奶双皮奶双皮奶双皮奶双皮奶双皮奶双皮奶双皮奶',
      }, {
        value: '选项3',
        label: '蚵仔煎蚵仔煎蚵仔煎蚵仔煎蚵仔煎蚵仔煎',
      }, {
        value: '选项4',
        label: '龙须面',
      }, {
        value: '选项5',
        label: '北京烤鸭',
      }],
      selectedList: [],
    }))
    await wrapper.find('.select-trigger').trigger('click')
    const options = getOptions()
    const selectWrapper = wrapper.findComponent(Select)
    const inputWrapper = selectWrapper.findComponent({ ref: 'reference' })
    const inputDom = inputWrapper.element
    const inputRect = {
      height: 40,
      width: 221,
      x:44,
      y:8,
      top:8,
    }
    const mockInputWidth = jest.spyOn(inputDom, 'getBoundingClientRect').mockReturnValue(inputRect as DOMRect)
    selectWrapper.vm.handleResize()
    options[0].click()
    await nextTick()
    options[1].click()
    await nextTick()
    options[2].click()
    await nextTick()
    const tagWrappers = wrapper.findAll('.el-select__tags-text')
    for(let i=0;i<tagWrappers.length;i++) {
      const tagWrapperDom = tagWrappers[i].element
      expect(parseInt(tagWrapperDom.style.maxWidth) === inputRect.width - 75).toBe(true)
    }
    mockInputWidth.mockRestore()
  })

  test('multiple select with collapseTags when content overflow', async () => {
    const wrapper = _mount(`
      <el-select v-model="selectedList" multiple collapseTags placeholder="请选择">
        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
        </el-option>
      </el-select>
    `,
    () => ({
      options: [{
        value: '选项1',
        label: '黄金糕黄金糕黄金糕黄金糕黄金糕黄金糕黄金糕黄金糕黄金糕黄金糕黄金糕黄金糕黄金糕黄金糕黄金糕黄金糕黄金糕黄金糕黄金糕黄金糕',
      }, {
        value: '选项2',
        label: '双皮奶双皮奶双皮奶双皮奶双皮奶双皮奶双皮奶双皮奶双皮奶双皮奶双皮奶双皮奶双皮奶',
      }, {
        value: '选项3',
        label: '蚵仔煎蚵仔煎蚵仔煎蚵仔煎蚵仔煎蚵仔煎',
      }, {
        value: '选项4',
        label: '龙须面',
      }, {
        value: '选项5',
        label: '北京烤鸭',
      }],
      selectedList: [],
    }))
    await wrapper.find('.select-trigger').trigger('click')
    const options = getOptions()
    const selectWrapper = wrapper.findComponent(Select)
    const inputWrapper = selectWrapper.findComponent({ ref: 'reference' })
    const inputDom = inputWrapper.element
    const inputRect = {
      height: 40,
      width: 221,
      x:44,
      y:8,
      top:8,
    }
    const mockInputWidth = jest.spyOn(inputDom, 'getBoundingClientRect').mockReturnValue(inputRect as DOMRect)
    selectWrapper.vm.handleResize()
    options[0].click()
    await nextTick()
    options[1].click()
    await nextTick()
    options[2].click()
    await nextTick()
    const tagWrappers = wrapper.findAll('.el-select__tags-text')
    const tagWrapperDom = tagWrappers[0].element
    expect(parseInt(tagWrapperDom.style.maxWidth) === inputRect.width - 123).toBe(true)
    mockInputWidth.mockRestore()
  })

  test('multiple remove-tag', async () => {
    const wrapper = _mount(`
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
      options: [{
        value: '选项1',
        label: '黄金糕',
      }, {
        value: '选项2',
        label: '双皮奶',
      }, {
        value: '选项3',
        label: '蚵仔煎',
      }, {
        value: '选项4',
        label: '龙须面',
      }, {
        value: '选项5',
        label: '北京烤鸭',
      }],
      value: ['选项1', '选项2'],
    }),
    {
      methods: {
        handleRemoveTag() {
          // pass
        },
      },
    })

    const vm = wrapper.vm as any
    await vm.$nextTick()
    expect(vm.value.length).toBe(2)
    const tagCloseIcons = wrapper.findAll('.el-tag__close')
    await tagCloseIcons[1].trigger('click')
    expect(vm.value.length).toBe(1)
    await tagCloseIcons[0].trigger('click')
    expect(vm.value.length).toBe(0)
  })

  test('multiple limit', async () => {
    const wrapper = getSelectVm({ multiple: true, multipleLimit: 1 })
    const vm = wrapper.vm as any
    await wrapper.find('.select-trigger').trigger('click')
    const options = getOptions()
    options[1].click()
    await nextTick()
    expect(vm.value.indexOf('选项2') > -1).toBe(true)
    options[3].click()
    await nextTick()
    expect(vm.value.indexOf('选项4')).toBe(-1)
  })

  test('event:focus & blur', async () => {
    const handleFocus = jest.fn()
    const handleBlur = jest.fn()
    const wrapper = _mount(`<el-select
      @focus="handleFocus"
      @blur="handleBlur" />`, () => ({
      handleFocus,
      handleBlur,
    }))
    const select = wrapper.findComponent(({ name: 'ElSelect' }))
    const input = select.find('input')

    expect(input.exists()).toBe(true)
    await input.trigger('focus')
    expect(handleFocus).toHaveBeenCalled()
    await input.trigger('blur')
    expect(handleBlur).toHaveBeenCalled()
  })

  test('event:focus & blur for multile & filterable select', async () => {
    const handleFocus = jest.fn()
    const handleBlur = jest.fn()
    const wrapper = _mount(`
    <el-select
      @focus="handleFocus"
      @blur="handleBlur"
      multiple
      filterable
    />`, () => ({
      handleFocus,
      handleBlur,
    }))
    const select = wrapper.findComponent(({ name: 'ElSelect' }))
    const input = select.find('input')

    expect(input.exists()).toBe(true)
    await input.trigger('focus')
    expect(handleFocus).toHaveBeenCalled()
    await input.trigger('blur')
    expect(handleBlur).toHaveBeenCalled()
  })

  test('should not open popper when automatic-dropdown not set', async () => {
    const wrapper = getSelectVm()
    const select = wrapper.findComponent({ name: 'ElSelect' })
    await select.findComponent({ ref: 'reference' })
      .find('input')
      .element.focus()
    expect((select.vm as any).visible).toBe(false)
  })

  test('should open popper when automatic-dropdown is set', async () => {
    const wrapper = getSelectVm({ automaticDropdown: true })
    const select = wrapper.findComponent({ name: 'ElSelect' })
    await select.findComponent({ ref: 'reference' }).find('input').trigger('focus')
    expect((select.vm as any).visible).toBe(true)
  })

  test('only emit change on user input', async () => {
    let callCount = 0
    const wrapper = _mount(`
    <el-select v-model="value" @change="change" ref="select">
      <el-option label="1" value="1" />
      <el-option label="2" value="2" />
      <el-option label="3" value="3" />
    </el-select>`,
    () => ({
      value: '1',
      change: () => ++callCount,
    }))

    expect(callCount).toBe(0)
    await wrapper.find('.select-trigger').trigger('click')
    const options = getOptions()
    options[2].click()
    expect(callCount).toBe(1)
  })

  test('render slot `empty`', async () => {
    const wrapper = _mount(`
      <el-select v-model="value">
        <template #empty>
          <div class="empty-slot">EmptySlot</div>
        </template>
      </el-select>`,
    () => ({
      value: '1',
    }))
    await wrapper.find('.select-trigger').trigger('click')
    expect(document.querySelector('.empty-slot').textContent).toBe('EmptySlot')
  })

  test('should set placeholder to label of selected option when filterable is true and multiple is false', async() => {
    const wrapper = _mount(`
      <el-select ref="select" v-model="value" filterable>
        <el-option label="test" value="test" />
      </el-select>`,
    () => ({ value: 'test' }))
    const vm = wrapper.vm as any
    await wrapper.trigger('click')
    const selectVm = wrapper.findComponent({ name: 'ElSelect' }).vm as any
    expect(selectVm.visible).toBe(true)
    expect(wrapper.find('.el-input__inner').element.placeholder).toBe('test')
    expect(vm.value).toBe('test')
  })

  test('default value is null or undefined', async() => {
    const wrapper = _mount(`
    <el-select v-model="value">
      <el-option
        v-for="item in options"
        :label="item.label"
        :key="item.value"
        :value="item.value">
      </el-option>
    </el-select>`,
    () => ({
      options: [{
        value: '选项1',
        label: '黄金糕',
      }, {
        value: '选项2',
        label: '双皮奶',
      }],
      value: undefined,
    }))
    const vm = wrapper.vm as any
    vm.value = null
    await vm.$nextTick()
    expect(wrapper.find('.el-input__inner').element.value).toBe('')
    vm.value = '选项1'
    await vm.$nextTick()
    expect(wrapper.find('.el-input__inner').element.value).toBe('黄金糕')
  })

  test('emptyText error show', async () => {
    const wrapper = _mount(`
    <el-select :model-value="value" filterable placeholder="Select">
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value">
      </el-option>
    </el-select>`,
    () => ({
      options: [{
        value: 'Option1',
        label: 'Option1',
      }, {
        value: 'Option2',
        label: 'Option2',
      }, {
        value: 'Option3',
        label: 'Option3',
      }, {
        value: 'Option4',
        label: 'Option4',
      }, {
        value: 'Option5',
        label: 'Option5',
      }],
      value: 'test',
    }))
    const select = wrapper.findComponent({ name: 'ElSelect' })
    select.trigger('click')
    await nextTick()
    expect(!!document.querySelector('.el-select__popper').style.display).toBeFalsy()
    expect(wrapper.findAll('.el-select-dropdown__empty').length).toBe(0)
  })

  test('multiple select with remote load', async () => {
    const wrapper = mount({
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
          states: ['Alabama', 'Alaska', 'Arizona',
            'Arkansas', 'California', 'Colorado',
            'Connecticut', 'Delaware', 'Florida',
            'Georgia', 'Hawaii', 'Idaho', 'Illinois',
            'Indiana', 'Iowa', 'Kansas', 'Kentucky',
            'Louisiana', 'Maine', 'Maryland',
            'Massachusetts', 'Michigan', 'Minnesota',
            'Mississippi', 'Missouri', 'Montana',
            'Nebraska', 'Nevada', 'New Hampshire',
            'New Jersey', 'New Mexico', 'New York',
            'North Carolina', 'North Dakota', 'Ohio',
            'Oklahoma', 'Oregon', 'Pennsylvania',
            'Rhode Island', 'South Carolina',
            'South Dakota', 'Tennessee', 'Texas',
            'Utah', 'Vermont', 'Virginia',
            'Washington', 'West Virginia', 'Wisconsin',
            'Wyoming'],
        }
      },
      mounted() {
        this.list = this.states.map(item => {
          return { value: `value:${item}`, label: `label:${item}` }
        })
      },
      methods: {
        remoteMethod(query) {
          if (query !== '') {
            this.loading = true
            setTimeout(() => {
              this.loading = false
              this.options = this.list.filter(item => {
                return item.label.toLowerCase()
                  .indexOf(query.toLowerCase()) > -1
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
    jest.runAllTimers()
    await nextTick()
    let options = getOptions()
    options[0].click()
    await nextTick()
    select.debouncedQueryChange({
      target: {
        value: 'n',
      },
    })
    jest.runAllTimers()
    await nextTick()
    options = getOptions()
    options[5].click()
    await nextTick()
    expect(select.selected.length === 2).toBeTruthy()
    expect(select.selected[0].currentLabel !== '').toBeTruthy()
    expect(select.selected[1].currentLabel !== '').toBeTruthy()
  })

  test('disabled group', async () => {
    const wrapper = _mount(`
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
            { value: 'Chengdu',label: 'Chengdu' },
            { value: 'Shenzhen', label: 'Shenzhen' },
            { value: 'Guangzhou',label: 'Guangzhou' },
            { value: 'Dalian',label: 'Dalian' },
          ],
        },
      ],
      value: '',
    }))

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
})
