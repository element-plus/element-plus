import InputNumber from '../src/index.vue'
import { mount } from '@vue/test-utils'
import { ref } from 'vue'

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
