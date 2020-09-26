import { mount } from '@vue/test-utils'
import Select from '../src/select.vue'
import Option from '../src/option.vue'

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
  },
  template,
  data,
  ...otherObj,
})

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
    const options = wrapper.findAll('.el-select-dropdown__item')
    const vm = wrapper.vm as any
    expect(vm.value).toBe('')
    options[2].trigger('click')
    expect(vm.value).toBe('选项3')
    expect(vm.count).toBe(1)
    options[4].trigger('click')
    expect(vm.value).toBe('选项5')
    expect(vm.count).toBe(2)
  })

  test('disabled option', async() => {
    const wrapper = getSelectVm()
    const vm = wrapper.vm as any
    vm.options[1].disabled = true
    await vm.$nextTick()
    const options = wrapper.findAll('.el-select-dropdown__item')
    expect(options[1].classes()).toContain('is-disabled')
    options[1].trigger('click')
    await vm.$nextTick()
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
    await input.trigger('focus')
    selectVm.selectedLabel = 'new'
    selectVm.debouncedOnInputChange()
    await selectVm.$nextTick()
    const options = wrapper.findAll('.el-select-dropdown__item span')
    const target = options.filter(option => option.text() === 'new')
    await target[0].trigger('click')
    expect((wrapper.vm as any).value).toBe('new')
  })

  test('multiple select', async () => {
    const wrapper = getSelectVm({ multiple: true })
    const options = wrapper.findAll('.el-select-dropdown__item')
    const vm = wrapper.vm as any
    vm.value = ['选项1']
    vm.$nextTick()
    await options[1].trigger('click')
    await options[3].trigger('click')
    expect(vm.value.indexOf('选项2') > -1 && vm.value.indexOf('选项4') > -1).toBe(true)
    const tagCloseIcons = wrapper.findAll('.el-tag__close')
    await tagCloseIcons[0].trigger('click')
    expect(vm.value.indexOf('选项1')).toBe(-1)
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
          console.log('remove tag')
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
    const options = wrapper.findAll('.el-select-dropdown__item')
    await options[1].trigger('click')
    expect(vm.value.indexOf('选项2') > -1).toBe(true)
    await options[3].trigger('click')
    expect(vm.value.indexOf('选项4')).toBe(-1)
  })

  test('multiple remote search', async done => {
    const wrapper = getSelectVm({
      multiple: true,
      remote: true,
      filterable: true,
    })
    const vm = wrapper.vm as any
    wrapper.setProps({ remoteMethod: async query => {
      vm.loading = true
      await vm.$nextTick()
      vm.options = vm.options.filter(option => {
        return option.label.indexOf(query) > -1
      })
      vm.loading = false
    },
    })

    const select = wrapper.findComponent({ name: 'ElSelect' })
    const selectVm = select.vm as any
    selectVm.debouncedQueryChange({ target: { value: '' } })
    selectVm.debouncedQueryChange({ target: { value: '面' } })

    setTimeout(async () => {
      expect(selectVm.filteredOptionsCount).toBe(1)
      const options = selectVm.options.filter(option => option.visible)
      options[0].$el.click()
      expect(vm.value[0]).toBe('选项4')
      selectVm.deletePrevTag({ target: selectVm.input })
      selectVm.resetInputState({ keyCode: 1 })
      await selectVm.$nextTick()
      expect(vm.value.length).toBe(0)
      done()
    }, 200)
  })

  test('event:focus & blur', async done => {
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
    input.trigger('blur')
    setTimeout(() => {
      expect(handleBlur).toHaveBeenCalled()
      done()
    }, 70)
  })

  // TODO:
  // test('should return focus to input inside select after option select', async done => {
  //   const selectFocus = jest.fn()
  //   const wrapper = _mount(`<el-select
  //     @focus="selectFocus"
  //     v-model="value"
  //     ref="select">
  //       <el-option label="1" value="1" />
  //     </el-select>`,
  //   () => ({
  //     value: '',
  //     selectFocus,
  //   }))
  //   const option = wrapper.find('.el-select-dropdown__item')
  //   expect(option.exists()).toBe(true)
  //   await option.trigger('click')
  //   expect(selectFocus).toHaveBeenCalled()
  // })

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
    const options = wrapper.findAll('.el-select-dropdown__item')
    await options[2].trigger('click')
    expect(callCount).toBe(1)
  })

  test('render slot `empty`', () => {
    const wrapper = _mount(`
      <el-select v-model="value">
        <div class="empty-slot" slot="empty">EmptySlot</div>
      </el-select>`,
    () => ({
      value: '1',
    }))
    expect(wrapper.find('.empty-slot').text()).toBe('EmptySlot')
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
})
