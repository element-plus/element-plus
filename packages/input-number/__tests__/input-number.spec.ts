import InputNumber from '../src/index.vue'
import { mount } from '@vue/test-utils'
// import { nextTick, ref } from 'vue'

describe('input-number.vue', () => {
  test('create', () => {
    const wrapper = mount(InputNumber, {
      props: {
        modelValue: 1,
      },
    })
    expect(wrapper.find('.el-input-number').exists()).toBe(true)
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
