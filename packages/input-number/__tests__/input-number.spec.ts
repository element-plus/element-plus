import InputNumber from '../src/index.vue'
import { mount } from '@vue/test-utils'
import { nextTick, ref } from 'vue'

const _mount = options => mount({
  components: {
    'el-input-number': InputNumber,
  },
  ...options,
})

describe('input-number.vue', () => {
  test('create', () => {
    const wrapper = _mount({
      template: '<el-input-number />',
    })
    expect(wrapper.find('input').element.value).toEqual('0')
    expect(wrapper.find('.el-input-number').exists()).toBe(true)
  })
  test('modelValue', () => {
    const wrapper = _mount({
      template: '<el-input-number :model-value="inputText" />',
      setup() {
        const inputText = ref(1)

        return {
          inputText,
        }
      },
    })
    expect(wrapper.find('input').element.value).toEqual('1')
  })
  test('min', () => {
    const wrapper = _mount({
      template: '<el-input-number :min="3" model-value="1" />',
    })
    expect(wrapper.find('input').element.value).toEqual('3')
  })
  test('max', () => {
    const wrapper = _mount({
      template: '<el-input-number :max="3" model-value="5" />',
    })
    expect(wrapper.find('input').element.value).toEqual('3')
  })
  test('step increase and decrease', async () => {
    const wrapper = _mount({
      template: '<el-input-number :step="3" v-model="num" />',
      setup() {
        const num = ref(2)
        return {
          num,
        }
      },
    })
    await wrapper.find('.el-input-number__increase').trigger('keydown.enter')
    expect(wrapper.find('input').element.value).toEqual('5')
    await wrapper.find('.el-input-number__decrease').trigger('keydown.enter')
    expect(wrapper.find('input').element.value).toEqual('2')
  })
  test('step-strictly', async () => {
    const wrapper = _mount({
      template: '<el-input-number :step-strictly="true" :step="2" v-model="num" />',
      setup() {
        const num = ref(0)
        return {
          num,
        }
      },
    })
    await wrapper.find('input').setValue(3)
    expect(wrapper.find('input').element.value).toEqual('4')
  })
  test('precision', async () => {
    const wrapper = _mount({
      template: '<el-input-number :precision="2" v-model="num" />',
      setup() {
        const num = ref(0)
        return {
          num,
        }
      },
    })
    await wrapper.find('input').setValue(1.1111111111)
    await wrapper.find('.el-input-number__increase').trigger('keydown.enter')
    expect(wrapper.find('input').element.value).toEqual('2.11')
  })
  test('disabled', async () => {
    const wrapper = _mount({
      template: '<el-input-number :disabled="true" v-model="num" />',
      setup() {
        const num = ref(0)
        return {
          num,
        }
      },
    })
    await wrapper.find('.el-input-number__increase').trigger('keydown.enter')
    expect(wrapper.find('input').element.value).toEqual('0')
    await wrapper.find('.el-input-number__decrease').trigger('keydown.enter')
    expect(wrapper.find('input').element.value).toEqual('0')
  })
  test('controls', async () => {
    const wrapper = _mount({
      template: '<el-input-number :controls="false" v-model="num" />',
      setup() {
        const num = ref(0)
        return {
          num,
        }
      },
    })
    const increase = wrapper.find('.el-input-number__increase')
    expect(increase.exists()).toBe(false)
    const decrease = wrapper.find('.el-input-number__decrease')
    expect(decrease.exists()).toBe(false)
  })
  test('controls-position', async () => {
    const wrapper = _mount({
      template: '<el-input-number controls-position="right" v-model="num" />',
      setup() {
        const num = ref(0)
        return {
          num,
        }
      },
    })
    const increase = wrapper.find('.el-icon-arrow-down')
    expect(increase.exists()).toBe(true)
    const decrease = wrapper.find('.el-icon-arrow-up')
    expect(decrease.exists()).toBe(true)
  })
  test('change-event', async () => {
    const wrapper = _mount({
      template: '<el-input-number v-model="num" />',
      setup() {
        const num = ref(0)
        return {
          num,
        }
      },
    })
    await wrapper.find('.el-input-number__increase').trigger('keydown.enter')
    await wrapper.find('.el-input-number__increase').trigger('keydown.enter')
    expect(wrapper.getComponent(InputNumber).emitted('change')).toHaveLength(2)
    expect(wrapper.getComponent(InputNumber).emitted('update:modelValue')).toHaveLength(2)
  })
  test('blur-event', async () => {
    const wrapper = _mount({
      template: '<el-input-number v-model="num" />',
      setup() {
        const num = ref(0)
        return {
          num,
        }
      },
    })
    await wrapper.find('input').trigger('blur')
    expect(wrapper.getComponent(InputNumber).emitted('blur')).toHaveLength(1)
  })
  test('focus-event', async () => {
    const wrapper = _mount({
      template: '<el-input-number v-model="num" />',
      setup() {
        const num = ref(0)
        return {
          num,
        }
      },
    })
    await wrapper.find('input').trigger('focus')
    expect(wrapper.getComponent(InputNumber).emitted('focus')).toHaveLength(1)
  })
})

/*
describe('InputNumber.vue', () => {
  it('create ', async () => {
    const modelValue = ref(1)
    const wrapper = mount(InputNumber, {
      props: {
        modelValue,
        'onUpdate:modelValue'(v) {
          modelValue.value = v
        }
      }
    })
    const input = wrapper.find('input')
    expect(wrapper.props('modelValue')).toEqual(1)
    expect(input.element.value).toEqual('1')
  })

  it('decrease and increase', async () => {
    const modelValue = ref(5)
    const wrapper = mount(InputNumber, {
      props: {
        modelValue,
        'onUpdate:modelValue'(v) {
          modelValue.value = v
        }
      }
    })

    const input = wrapper.find('input')
    const btnDecrease = wrapper.find('.el-input-number__decrease')
    await btnDecrease.trigger('keydown.enter')
    // await document.trigger('mouseup')
    await nextTick()
    expect(modelValue.value).toEqual(4)
    expect(input.element.value).toEqual('4')

    const btnIncrease = wrapper.find('.el-input-number__increase')
    await btnIncrease.trigger('keydown.enter')
    await nextTick()
    expect(modelValue.value).toEqual(5)
    expect(input.element.value).toEqual('5')
  })

  it('disabled', async () => {
    const modelValue = ref(5)
    const wrapper = mount(InputNumber, {
      props: {
        disabled: true,
        modelValue,
        'onUpdate:modelValue'(v) {
          modelValue.value = v
        }
      }
    })
    const btnDecrease = wrapper.find('.el-input-number__decrease')
    const btnIncrease = wrapper.find('.el-input-number__increase')
    const input = wrapper.find('input')

    await btnDecrease.trigger('keydown.enter')
    await nextTick()

    expect(modelValue.value).toEqual(5)
    expect(input.element.value).toEqual('5')

    await btnIncrease.trigger('keydown.enter')
    await nextTick()

    expect(modelValue.value).toEqual(5)
    expect(input.element.value).toEqual('5')
  })

  it('step', async () => {
    const modelValue = ref(5)
    const wrapper = mount(InputNumber, {
      props: {
        step: 3.2,
        modelValue,
        'onUpdate:modelValue'(v) {
          modelValue.value = v
        }
      }
    })

    const btnDecrease = wrapper.find('.el-input-number__decrease')
    const btnIncrease = wrapper.find('.el-input-number__increase')
    const input = wrapper.find('input')

    await btnIncrease.trigger('keydown.enter')
    await nextTick()

    expect(modelValue.value).toEqual(8.2)
    expect(input.element.value).toEqual('8.2')

    await btnDecrease.trigger('keydown.enter')
    await nextTick()

    expect(modelValue.value).toEqual(5)
    expect(input.element.value).toEqual('5')
  })

  it('step strictly', async () => {
    const modelValue = ref(5)
    const wrapper = mount(InputNumber, {
      props: {
        step: 2,
        stepStrictly: true,
        modelValue,
        'onUpdate:modelValue'(v) {
          modelValue.value = v
        }
      }
    })

    const input = wrapper.find('input')
    await nextTick()
    expect(modelValue.value).toEqual(6)
    expect(input.element.value).toEqual('6')

    const btnDecrease = wrapper.find('.el-input-number__decrease')
    await btnDecrease.trigger('keydown.enter')
    await nextTick()
    expect(modelValue.value).toEqual(4)
    expect(input.element.value).toEqual('4')
  })

  it('min', async () => {
    const modelValue = ref(5)
    const wrapper = mount(InputNumber, {
      props: {
        min: 6,
        modelValue,
        'onUpdate:modelValue'(v) {
          modelValue.value = v
        }
      }
    })

    const input = wrapper.find('input')
    const btnDecrease = wrapper.find('.el-input-number__decrease')
    await nextTick()
    expect(modelValue.value).toEqual(6)
    expect(input.element.value).toEqual('6')

    await btnDecrease.trigger('keydown.enter')
    await nextTick()
    expect(modelValue.value).toEqual(6)
    expect(input.element.value).toEqual('6')
  })

  it('max', async () => {
    const modelValue = ref(100)
    const wrapper = mount(InputNumber, {
      props: {
        max: 6,
        modelValue,
        'onUpdate:modelValue'(v) {
          modelValue.value = v
        }
      }
    })

    const input = wrapper.find('input')
    const btnIncrease = wrapper.find('.el-input-number__increase')
    await nextTick()
    expect(modelValue.value).toEqual(6)
    expect(input.element.value).toEqual('6')

    await btnIncrease.trigger('keydown.enter')
    await nextTick()
    expect(modelValue.value).toEqual(6)
    expect(input.element.value).toEqual('6')
  })

  describe('precision', () => {
    it('precision is 2', async () => {
      const modelValue = ref(6.999)
      const wrapper = mount(InputNumber, {
        props: {
          precision: 2,
          modelValue,
          'onUpdate:modelValue'(v) {
            modelValue.value = v
          }
        }
      })

      const input = wrapper.find('input')
      await nextTick()
      expect(modelValue.value).toEqual(7)
      expect(input.element.value).toEqual('7.00')
    })

    it('precision greater than the precision of step', async () => {
      const modelValue = ref(6.999)
      const wrapper = mount(InputNumber, {
        props: {
          precision: 2,
          step: 0.1,
          modelValue,
          'onUpdate:modelValue'(v) {
            modelValue.value = v
          }
        }
      })

      const input = wrapper.find('input')
      await nextTick()
      expect(modelValue.value).toEqual(7)
      expect(input.element.value).toEqual('7.00')

      const btnIncrease = wrapper.find('.el-input-number__increase')
      await btnIncrease.trigger('keydown.enter')
      await nextTick()
      expect(modelValue.value).toEqual(7.1)
      expect(input.element.value).toEqual('7.10')
    })
  })

  it('controls', async () => {
    const modelValue = ref(5)
    const wrapper = mount(InputNumber, {
      props: {
        max: 6,
        controls: false,
        modelValue,
        'onUpdate:modelValue'(v) {
          modelValue.value = v
        }
      }
    })

    const btnDecrease = wrapper.find('.el-input-number__decrease')
    const btnIncrease = wrapper.find('.el-input-number__increase')

    expect(btnDecrease.exists()).toBe(false)
    expect(btnIncrease.exists()).toBe(false)
  })

  it('invalid value reset', async () => {
    const modelValue = ref(100)
    const wrapper = mount(InputNumber, {
      props: {
        max: 10,
        min: 5,
        modelValue,
        'onUpdate:modelValue'(v) {
          modelValue.value = v
        }
      }
    })

    const input = wrapper.find('input')

    await nextTick()
    expect(modelValue.value).toEqual(10)
    expect(input.element.value).toEqual('10')

    modelValue.value = 4

    await nextTick()
    expect(modelValue.value).toEqual(5)
    expect(input.element.value).toEqual('5')
  })
})
*/
