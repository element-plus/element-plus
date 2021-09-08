import { nextTick } from 'vue'
import { mount } from '@vue/test-utils'
import { EVENT_CODE } from '@element-plus/utils/aria'
import Radio from '../src/radio.vue'
import RadioGroup from '../src/radio-group.vue'
import RadioButton from '../src/radio-button.vue'

const _mount = (template: string, data, otherObj?) =>
  mount({
    components: {
      'el-radio': Radio,
      'el-radio-group': RadioGroup,
      'el-radio-button': RadioButton,
    },
    template,
    data,
    ...otherObj,
  })

describe('Radio', () => {
  test('create', async () => {
    const wrapper = _mount(
      `<el-radio v-model="radio" label="a">
    </el-radio>`,
      () => ({ radio: '' })
    )
    expect(wrapper.classes()).toContain('el-radio')
    await wrapper.trigger('click')
    expect(wrapper.classes()).toContain('is-checked')
  })

  test('disabled', async () => {
    const wrapper = _mount(
      `<el-radio
    v-model="radio"
    label="3"
    disabled
  >
  </el-radio>`,
      () => ({ radio: '' })
    )
    await wrapper.trigger('click')
    const vm = wrapper.vm as any
    expect(vm.radio).toBe('')
    expect(wrapper.classes()).toContain('is-disabled')
  })

  test('border', () => {
    const wrapper = _mount(
      `<el-radio
    v-model="radio"
    label="3"
    border
  >
  </el-radio>`,
      () => ({ radio: '' })
    )
    expect(wrapper.classes()).toContain('is-bordered')
  })

  test('disabled', async () => {
    const wrapper = _mount(
      `<el-radio
    v-model="radio"
    label="3"
    @change="handleChange"
  >
  </el-radio>`,
      () => ({
        radio: '',
        changeData: '',
      }),
      {
        methods: {
          handleChange(val) {
            this.changeData = val
          },
        },
      }
    )
    const vm = wrapper.vm as any
    await wrapper.trigger('click')
    await nextTick()
    expect(vm.changeData).toEqual('3')
  })

  test('change event only triggers on user input', async () => {
    const wrapper = _mount(
      `<el-radio
    v-model="radio"
    label="3"
    @change="handleChange"
  >
  </el-radio>`,
      () => ({
        radio: '',
        changeData: '',
      }),
      {
        methods: {
          handleChange(val) {
            this.changeData = val
          },
        },
      }
    )
    const vm = wrapper.vm as any
    vm.radio = '3'
    await nextTick()
    expect(vm.changeData).toEqual('')
    expect(vm.radio).toEqual('3')
  })
})

describe('Radio group', () => {
  it('create', async () => {
    const wrapper = _mount(
      `<el-radio-group v-model="radio">
    <el-radio :label="3" ref="radio1">3</el-radio>
    <el-radio :label="6" ref="radio2">6</el-radio>
    <el-radio :label="9">9</el-radio>
  </el-radio-group>`,
      () => ({
        radio: 3,
      })
    )
    const radio1 = wrapper.findComponent({ ref: 'radio1' })
    expect(radio1.classes()).toContain('is-checked')
    const radio2 = wrapper.findComponent({ ref: 'radio2' })
    await radio2.trigger('click')
    expect(radio2.classes()).toContain('is-checked')
    const vm = wrapper.vm as any
    expect(vm.radio).toEqual(6)
  })

  it('disabled', async () => {
    const wrapper = _mount(
      `<el-radio-group v-model="radio" disabled>
    <el-radio :label="3" ref="radio1">3</el-radio>
    <el-radio :label="6" ref="radio2">6</el-radio>
    <el-radio :label="9">7</el-radio>
  </el-radio-group>`,
      () => ({
        radio: 3,
      })
    )

    expect(wrapper.find('label.is-disabled').exists()).toBe(true)
    const radio1 = wrapper.findComponent({ ref: 'radio1' })
    expect(radio1.classes()).toContain('is-checked')
    const radio2 = wrapper.findComponent({ ref: 'radio2' })
    await radio2.trigger('click')
    const vm = wrapper.vm as any
    expect(vm.radio).toEqual(3)
    expect(radio1.classes()).toContain('is-checked')
  })
  it('change event', async () => {
    const wrapper = _mount(
      `<el-radio-group v-model="radio" @change="onChange">
    <el-radio :label="3">3</el-radio>
    <el-radio :label="6" ref="radio2">6</el-radio>
    <el-radio :label="9">9</el-radio>
  </el-radio-group>`,
      () => ({
        radio: 3,
        data: 0,
      }),
      {
        methods: {
          onChange(val) {
            this.data = val
          },
        },
      }
    )

    const radio2 = wrapper.findComponent({ ref: 'radio2' })
    await radio2.trigger('click')
    await nextTick()
    const vm = wrapper.vm as any
    expect(vm.data).toEqual(6)
  })
  it('change event only triggers on user input', async () => {
    const wrapper = _mount(
      `<el-radio-group v-model="radio" @change="onChange">
    <el-radio :label="3">3</el-radio>
    <el-radio :label="6" ref="radio2">6</el-radio>
    <el-radio :label="9">9</el-radio>
  </el-radio-group>`,
      () => ({
        radio: 3,
        data: 0,
      }),
      {
        methods: {
          onChange(val) {
            this.data = val
          },
        },
      }
    )
    const vm = wrapper.vm as any
    vm.radio = 6
    await nextTick()
    expect(vm.data).toEqual(0)
  })
  it('disabled when children is radio button', async () => {
    const wrapper = _mount(
      `<el-radio-group v-model="radio" disabled>
    <el-radio-button :label="3" ref="radio1">3</el-radio-button>
    <el-radio-button :label="6" ref="radio2">6</el-radio-button>
    <el-radio-button :label="9">9</el-radio-button>
  </el-radio-group>`,
      () => ({
        radio: 3,
      })
    )

    const radio1 = wrapper.findComponent({ ref: 'radio1' })
    const radio2 = wrapper.findComponent({ ref: 'radio2' })
    expect(radio1.classes()).toContain('is-active')
    expect(wrapper.findAll('.is-disabled').length).toBe(3)
    await radio2.trigger('click')
    const vm = wrapper.vm as any
    expect(vm.radio).toEqual(3)
    expect(radio1.classes()).toContain('is-active')
  })
})

describe('Radio Button', () => {
  it('create', async () => {
    const wrapper = _mount(
      `<el-radio-group v-model="radio">
    <el-radio-button :label="3" ref="radio1">3</el-radio-button>
    <el-radio-button :label="6" ref="radio2">6</el-radio-button>
    <el-radio-button :label="9">9</el-radio-button>
  </el-radio-group>`,
      () => ({
        radio: 3,
      })
    )
    const radio1 = wrapper.findComponent({ ref: 'radio1' })
    expect(radio1.classes()).toContain('is-active')
    const radio2 = wrapper.findComponent({ ref: 'radio2' })
    await radio2.trigger('click')
    expect(radio2.classes()).toContain('is-active')
    const vm = wrapper.vm as any
    expect(vm.radio).toEqual(6)
  })
  it('custom color', () => {
    const wrapper = _mount(
      `<el-radio-group v-model="radio" fill="#000" text-color="#ff0">
    <el-radio-button :label="3" ref="radio1">3</el-radio-button>
    <el-radio-button :label="6" ref="radio2">6</el-radio-button>
    <el-radio-button :label="9">9</el-radio-button>
  </el-radio-group>`,
      () => ({
        radio: 3,
      })
    )
    const radio1 = wrapper.findComponent({ ref: 'radio1' })
    expect(radio1.find('span').attributes('style')).toContain(
      'background-color: rgb(0, 0, 0); border-color: #000; box-shadow: -1px 0 0 0 #000; color: rgb(255, 255, 0);'
    )
  })
  it('change event', async () => {
    const wrapper = _mount(
      `<el-radio-group v-model="radio" @change="onChange">
    <el-radio-button :label="3">3</el-radio-button>
    <el-radio-button :label="6" ref="radio2">6</el-radio-button>
    <el-radio-button :label="9">9</el-radio-button>
  </el-radio-group>`,
      () => ({
        data: 0,
        radio: 3,
      }),
      {
        methods: {
          onChange(val) {
            this.data = val
          },
        },
      }
    )
    const radio2 = wrapper.findComponent({ ref: 'radio2' })
    await radio2.trigger('click')
    const vm = wrapper.vm as any
    expect(vm.radio).toEqual(6)
  })
  it('change event only triggers on user input', async () => {
    const wrapper = _mount(
      `<el-radio-group v-model="radio" @change="onChange">
    <el-radio-button :label="3">3</el-radio-button>
    <el-radio-button :label="6" ref="radio2">6</el-radio-button>
    <el-radio-button :label="9">9</el-radio-button>
  </el-radio-group>`,
      () => ({
        data: 0,
        radio: 3,
      }),
      {
        methods: {
          onChange(val) {
            this.data = val
          },
        },
      }
    )
    const vm = wrapper.vm as any
    vm.radio = 6
    await nextTick()
    expect(vm.data).toEqual(0)
  })

  it('size', () => {
    const wrapper = _mount(
      `<el-radio-group v-model="radio" size="large">
    <el-radio-button :label="3" ref="radio1">3</el-radio-button>
    <el-radio-button :label="6" ref="radio2">6</el-radio-button>
    <el-radio-button :label="9">9</el-radio-button>
  </el-radio-group>`,
      () => ({
        radio: 3,
      })
    )
    expect(wrapper.findAll('.el-radio-button--large').length).toBe(3)
  })
  it('keyboard event', async () => {
    const wrapper = _mount(
      ` <el-radio-group v-model="radio">
    <el-radio-button ref="radio1" :label="3">3</el-radio-button>
    <el-radio-button ref="radio2" :label="6">6</el-radio-button>
    <el-radio-button ref="radio3" :label="9">9</el-radio-button>
  </el-radio-group>`,
      () => ({
        radio: 6,
      })
    )
    const radio1 = wrapper.findComponent({ ref: 'radio1' })
    const radio2 = wrapper.findComponent({ ref: 'radio2' })
    const radio3 = wrapper.findComponent({ ref: 'radio3' })
    const vm = wrapper.vm as any
    expect(vm.radio).toEqual(6)
    radio2.trigger('keydown', {
      code: EVENT_CODE.left,
    })
    expect(vm.radio).toEqual(3)
    radio1.trigger('keydown', {
      code: EVENT_CODE.left,
    })
    expect(vm.radio).toEqual(9)
    await nextTick()
    radio3.trigger('keydown', {
      code: EVENT_CODE.right,
    })
    expect(vm.radio).toEqual(3)
    radio1.trigger('keydown', {
      code: EVENT_CODE.right,
    })
    expect(vm.radio).toEqual(6)
    await nextTick()
    radio1.trigger('keydown', {
      code: EVENT_CODE.enter,
    })
    expect(vm.radio).toEqual(6)
  })
})
