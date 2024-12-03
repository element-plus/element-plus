import { nextTick, ref } from 'vue'
import { mount } from '@vue/test-utils'
import { describe, expect, it, test, vi } from 'vitest'
import { ArrowDown, ArrowUp } from '@element-plus/icons-vue'
import { ElFormItem } from '@element-plus/components/form'
import { ElIcon } from '@element-plus/components/icon'
import InputNumber from '../src/input-number.vue'

const mouseup = new Event('mouseup')

describe('InputNumber.vue', () => {
  test('create', async () => {
    const num = ref(1)
    const wrapper = mount(() => (
      <InputNumber aria-label="描述文字" v-model={num.value} />
    ))
    expect(wrapper.find('input').exists()).toBe(true)
  })

  test('modelValue', () => {
    const inputText = ref(1)
    const wrapper = mount(() => <InputNumber modelValue={inputText.value} />)
    expect(wrapper.find('input').element.value).toEqual('1')
  })

  test('set modelValue undefined to form validate', async () => {
    const num = ref(undefined)
    const wrapper = mount(() => (
      <>
        <InputNumber modelValue={num.value} placeholder="input number" />
        <p>{num.value}</p>
      </>
    ))
    await nextTick()
    expect(wrapper.find('p').element.innerText).toBeUndefined()
  })

  test('set modelValue undefined to display placeholder', async () => {
    const inputText = ref<number | undefined>(1)
    const wrapper = mount(() => (
      <InputNumber modelValue={inputText.value} placeholder="input number" />
    ))
    expect(wrapper.find('input').element.value).toEqual('1')
    inputText.value = undefined
    await nextTick()
    expect(wrapper.find('input').element.value).toEqual('')
    expect(wrapper.find('input').element.getAttribute('aria-valuenow')).toEqual(
      ''
    )
  })

  // fix: #10328
  test('Make sure the input action can trigger the modelValue update', async () => {
    const num = ref<number>(0)
    const handleUpdate = (data: number | undefined) => {
      num.value = data!
    }
    const wrapper = mount(() => (
      <InputNumber modelValue={num.value} onUpdate:modelValue={handleUpdate} />
    ))
    const el = wrapper.find('input').element
    const simulateEvent = (text: string, event: string) => {
      el.value = text
      el.dispatchEvent(new Event(event))
    }
    simulateEvent('3', 'input')
    await nextTick()
    expect(num.value).toEqual(3)
  })

  // fix: #11963
  test('Make sure modelValue correct update when no initial value', async () => {
    const num = ref<number>()
    const wrapper = mount(() => <InputNumber v-model={num.value} />)
    const inputWrapper = wrapper.find('input')
    const nativeInput = inputWrapper.element
    nativeInput.value = '1'
    await inputWrapper.trigger('input')
    nativeInput.value = ''
    await inputWrapper.trigger('input')
    expect(num.value).toEqual(null)
  })

  // fix: #14438
  test('Make sure display value will match actual value', async () => {
    const num = ref<number>(111)
    const wrapper = mount(() => <InputNumber v-model={num.value} />)
    const inputWrapper = wrapper.find('input')
    const nativeInput = inputWrapper.element
    await inputWrapper.trigger('focus')
    nativeInput.value = ''
    await inputWrapper.trigger('input')
    nativeInput.value = '111'
    await inputWrapper.trigger('input')
    await inputWrapper.trigger('blur')
    num.value = 222
    await nextTick()
    expect(wrapper.find('input').element.value).toEqual('222')
  })

  test('min', async () => {
    const num = ref(1)
    const wrapper = mount(() => <InputNumber min={3} v-model={num.value} />)
    expect(wrapper.find('input').element.value).toEqual('3')
    wrapper.find('.el-input-number__decrease').trigger('mousedown')
    document.dispatchEvent(mouseup)
    await nextTick()
    expect(wrapper.find('input').element.value).toEqual('3')
  })

  test('max', async () => {
    const num = ref(5)
    const wrapper = mount(() => <InputNumber max={3} v-model={num.value} />)
    expect(wrapper.find('input').element.value).toEqual('3')
    wrapper.find('.el-input-number__increase').trigger('mousedown')
    document.dispatchEvent(mouseup)
    await nextTick()
    expect(wrapper.find('input').element.value).toEqual('3')
  })

  test('step, increase and decrease', async () => {
    const num = ref(0)
    const wrapper = mount(() => <InputNumber v-model={num.value} step={2} />)
    wrapper.find('.el-input-number__decrease').trigger('mousedown')
    document.dispatchEvent(mouseup)
    await nextTick()
    expect(wrapper.find('input').element.value).toEqual('-2')
    wrapper.find('.el-input-number__increase').trigger('mousedown')
    document.dispatchEvent(mouseup)
    await nextTick()
    expect(wrapper.find('input').element.value).toEqual('0')
    wrapper.find('.el-input-number__increase').trigger('mousedown')
    document.dispatchEvent(mouseup)
    await nextTick()
    expect(wrapper.find('input').element.value).toEqual('2')
  })

  test('step-strictly', async () => {
    const num = ref(0)
    const wrapper = mount(() => (
      <InputNumber step-strictly={true} step={2} v-model={num.value} />
    ))
    await wrapper.find('input').setValue(3)
    expect(wrapper.find('input').element.value).toEqual('4')
  })

  test('value decimals miss prop precision', async () => {
    const num = ref(0.2)
    const wrapper = mount(() => (
      <InputNumber step-strictly={true} step={0.1} v-model={num.value} />
    ))
    const elInputNumber = wrapper.findComponent({ name: 'ElInputNumber' }).vm
    elInputNumber.increase()
    await nextTick()
    expect(wrapper.find('input').element.value).toEqual('0.3')
    num.value = 0.4
    await nextTick()
    elInputNumber.decrease()
    await nextTick()
    expect(wrapper.find('input').element.value).toEqual('0.3')
  })
  //fix: #12690
  test('maximum is less than the minimum', async () => {
    const num = ref(6)
    const errorHandler = vi.fn()

    mount(() => <InputNumber v-model={num.value} min={10} max={8} />, {
      global: {
        config: {
          errorHandler,
        },
      },
    })
    expect(errorHandler).toHaveBeenCalled()
    const [error] = errorHandler.mock.calls[0]
    expect(error.message).toEqual(
      '[InputNumber] min should not be greater than max.'
    )
  })

  describe('precision accuracy 2', () => {
    const num = ref(0)
    const wrapper = mount(() => (
      <InputNumber precision={2} v-model={num.value} />
    ))
    it.each([
      [1.1111111111, '1.11'],
      [17.275, '17.28'],
      [17.2745, '17.27'],
      [1.09, '1.09'],
      [1.009, '1.01'],
      [10.999, '11.00'],
      [15, '15.00'],
      [15.5, '15.50'],
      [15.555, '15.56'],
    ])(
      'each precision accuracy test: $input $output',
      async (input, output) => {
        await wrapper.find('input').setValue(input)
        expect(wrapper.find('input').element.value).toEqual(`${output}`)
      }
    )
  })

  describe('precision accuracy 3', () => {
    const num = ref(0)
    const wrapper = mount(() => (
      <InputNumber precision={3} v-model={num.value} />
    ))
    it.each([
      [1.1111111111, '1.111'],
      [17.275, '17.275'],
      [17.2745, '17.275'],
      [1.09, '1.090'],
      [10.999, '10.999'],
      [10.9999, '11.000'],
      [15.555, '15.555'],
      [1.3335, '1.334'],
    ])(
      'each precision accuracy test: $input $output',
      async (input, output) => {
        await wrapper.find('input').setValue(input)
        expect(wrapper.find('input').element.value).toEqual(`${output}`)
      }
    )
  })

  test('readonly', async () => {
    const num = ref(0)
    const handleFocus = vi.fn()
    const wrapper = mount(() => (
      <InputNumber readonly v-model={num.value} onFocus={handleFocus} />
    ))

    wrapper.find('.el-input__inner').trigger('focus')
    await nextTick()
    expect(handleFocus).toHaveBeenCalledTimes(1)

    wrapper.find('.el-input-number__decrease').trigger('mousedown')
    document.dispatchEvent(mouseup)
    await nextTick()
    expect(wrapper.find('input').element.value).toEqual('0')

    wrapper.find('.el-input-number__increase').trigger('mousedown')
    document.dispatchEvent(mouseup)
    await nextTick()
    expect(wrapper.find('input').element.value).toEqual('0')
  })

  test('disabled', async () => {
    const num = ref(0)
    const wrapper = mount(() => (
      <InputNumber disabled={true} v-model={num.value} />
    ))
    wrapper.find('.el-input-number__decrease').trigger('mousedown')
    document.dispatchEvent(mouseup)
    await nextTick()
    expect(wrapper.find('input').element.value).toEqual('0')
    wrapper.find('.el-input-number__increase').trigger('mousedown')
    document.dispatchEvent(mouseup)
    await nextTick()
    expect(wrapper.find('input').element.value).toEqual('0')
  })

  test('controls', async () => {
    const num = ref(0)
    const wrapper = mount(() => (
      <InputNumber controls={false} v-model={num.value} />
    ))
    expect(wrapper.find('.el-input-number__increase').exists()).toBe(false)
    expect(wrapper.find('.el-input-number__decrease').exists()).toBe(false)
  })

  test('controls-position', async () => {
    const num = ref(0)
    const wrapper = mount(() => (
      <InputNumber controls-position="right" v-model={num.value} />
    ))
    expect(wrapper.findComponent(ArrowDown).exists()).toBe(true)
    expect(wrapper.findComponent(ArrowUp).exists()).toBe(true)
  })

  test('input-event', async () => {
    const handleInput = vi.fn()
    const num = ref(0)
    const wrapper = mount(() => (
      <InputNumber v-model={num.value} onInput={handleInput} />
    ))
    const inputWrapper = wrapper.find('input')
    const nativeInput = inputWrapper.element
    nativeInput.value = '0'
    await inputWrapper.trigger('input')
    expect(handleInput).toBeCalledTimes(0)
    nativeInput.value = '1'
    await inputWrapper.trigger('input')
    expect(handleInput).toBeCalledTimes(1)
    expect(handleInput).toHaveBeenCalledWith(1)
    nativeInput.value = '2'
    await inputWrapper.trigger('input')
    expect(handleInput).toBeCalledTimes(2)
    expect(handleInput).toHaveBeenCalledWith(2)
    nativeInput.value = ''
    await inputWrapper.trigger('input')
    expect(handleInput).toBeCalledTimes(3)
    expect(handleInput).toHaveBeenCalledWith(null)
  })

  test('change-event', async () => {
    const num = ref(0)
    const wrapper = mount(() => <InputNumber v-model={num.value} />)
    wrapper.find('.el-input-number__increase').trigger('mousedown')
    document.dispatchEvent(mouseup)
    await nextTick()
    expect(wrapper.getComponent(InputNumber).emitted('change')).toHaveLength(1)
    expect(wrapper.getComponent(InputNumber).emitted().change[0]).toEqual([
      1, 0,
    ])
    expect(
      wrapper.getComponent(InputNumber).emitted('update:modelValue')
    ).toHaveLength(1)
    wrapper.find('.el-input-number__increase').trigger('mousedown')
    document.dispatchEvent(mouseup)
    await nextTick()
    expect(wrapper.getComponent(InputNumber).emitted('change')).toHaveLength(2)
    expect(wrapper.getComponent(InputNumber).emitted().change[1]).toEqual([
      2, 1,
    ])
    expect(
      wrapper.getComponent(InputNumber).emitted('update:modelValue')
    ).toHaveLength(2)
    await wrapper.find('input').setValue(0)
    expect(wrapper.getComponent(InputNumber).emitted('change')).toHaveLength(3)
    expect(wrapper.getComponent(InputNumber).emitted().change[2]).toEqual([
      0, 2,
    ])
    expect(
      wrapper.getComponent(InputNumber).emitted('update:modelValue')
    ).toHaveLength(4)
    await wrapper.find('input').setValue('')
    expect(wrapper.getComponent(InputNumber).emitted('change')).toHaveLength(4)
    expect(num.value).toBe(null)
  })

  test('blur-event', async () => {
    const num = ref(0)
    const wrapper = mount(() => <InputNumber v-model={num.value} />)
    await wrapper.find('input').trigger('blur')
    expect(wrapper.getComponent(InputNumber).emitted('blur')).toHaveLength(1)
  })

  test('focus-event', async () => {
    const num = ref(0)
    const wrapper = mount(() => <InputNumber v-model={num.value} />)
    await wrapper.find('input').trigger('focus')
    expect(wrapper.getComponent(InputNumber).emitted('focus')).toHaveLength(1)
  })

  test('clear with :value-on-clear="null"', async () => {
    const num = ref(2)
    const wrapper = mount(() => (
      <InputNumber v-model={num.value} min={1} max={10} />
    ))
    const elInput = wrapper.findComponent({ name: 'ElInputNumber' }).vm
    elInput.handleInputChange('')
    await nextTick()
    expect(num.value).toBe(null)
    elInput.increase()
    await nextTick()
    expect(num.value).toBe(1)
    elInput.increase()
    await nextTick()
    expect(num.value).toBe(2)
    elInput.handleInputChange('')
    await nextTick()
    expect(num.value).toBe(null)
    elInput.decrease()
    await nextTick()
    expect(num.value).toBe(1)
    elInput.decrease()
    await nextTick()
    expect(num.value).toBe(1)
  })

  test('clear with value-on-clear="min"', async () => {
    const num = ref(2)
    const wrapper = mount(() => (
      <InputNumber value-on-clear="min" v-model={num.value} min={1} max={10} />
    ))
    const elInput = wrapper.findComponent({ name: 'ElInputNumber' }).vm
    elInput.handleInputChange('')
    await nextTick()
    expect(num.value).toBe(1)
    elInput.increase()
    await nextTick()
    expect(num.value).toBe(2)
    elInput.handleInputChange('')
    await nextTick()
    expect(num.value).toBe(1)
    elInput.decrease()
    await nextTick()
    expect(num.value).toBe(1)
  })

  test('clear with value-on-clear="max"', async () => {
    const num = ref(2)
    const wrapper = mount(() => (
      <InputNumber value-on-clear="max" v-model={num.value} min={1} max={10} />
    ))
    const elInput = wrapper.findComponent({ name: 'ElInputNumber' }).vm
    elInput.handleInputChange('')
    await nextTick()
    expect(num.value).toBe(10)
    elInput.increase()
    await nextTick()
    expect(num.value).toBe(10)
    elInput.handleInputChange('')
    await nextTick()
    expect(num.value).toBe(10)
    elInput.decrease()
    await nextTick()
    expect(num.value).toBe(9)
  })

  test('clear with :value-on-clear="5"', async () => {
    const num = ref(2)
    const wrapper = mount(() => (
      <InputNumber value-on-clear={5} v-model={num.value} min={1} max={10} />
    ))
    const elInput = wrapper.findComponent({ name: 'ElInputNumber' }).vm
    elInput.handleInputChange('')
    await nextTick()
    expect(num.value).toBe(5)
    elInput.increase()
    await nextTick()
    expect(num.value).toBe(6)
    elInput.handleInputChange('')
    await nextTick()
    expect(num.value).toBe(5)
    await wrapper.find('input').setValue('')
    expect(num.value).toBe(5)
    elInput.decrease()
    await nextTick()
    expect(num.value).toBe(4)
  })

  test('check increase and decrease button when modelValue not in [min, max]', async () => {
    const num1 = ref(-5)
    const num2 = ref(15)
    const wrapper = mount({
      setup() {
        return () => (
          <>
            <InputNumber
              ref="inputNumber1"
              v-model={num1.value}
              min={1}
              max={10}
            />
            <InputNumber
              ref="inputNumber2"
              v-model={num2.value}
              min={1}
              max={10}
            />
          </>
        )
      },
    })

    const inputNumber1 = wrapper.findComponent({ ref: 'inputNumber1' }).vm
    const inputNumber2 = wrapper.findComponent({ ref: 'inputNumber2' }).vm

    expect(num1.value).toBe(1)
    expect(num2.value).toBe(10)

    inputNumber1.decrease()
    await nextTick()
    expect(num1.value).toBe(1)
    inputNumber1.increase()
    await nextTick()
    expect(num1.value).toBe(2)
    inputNumber1.increase()
    await nextTick()
    expect(num1.value).toBe(3)

    inputNumber2.increase()
    await nextTick()
    expect(num2.value).toBe(10)
    inputNumber2.decrease()
    await nextTick()
    expect(num2.value).toBe(9)
    inputNumber2.decrease()
    await nextTick()
    expect(num2.value).toBe(8)
  })

  describe('form item accessibility integration', () => {
    test('automatic id attachment', async () => {
      const wrapper = mount(() => (
        <ElFormItem label="Foobar" data-test-ref="item">
          <InputNumber />
        </ElFormItem>
      ))

      await nextTick()
      const formItem = wrapper.find('[data-test-ref="item"]')
      const formItemLabel = formItem.find('.el-form-item__label')
      const innerInput = wrapper.find('.el-input__inner')
      expect(formItem.attributes().role).toBeFalsy()
      expect(formItemLabel.attributes().for).toBe(innerInput.attributes().id)
    })

    test('specified id attachment', async () => {
      const wrapper = mount(() => (
        <ElFormItem label="Foobar" data-test-ref="item">
          <InputNumber id="foobar" />
        </ElFormItem>
      ))

      await nextTick()
      const formItem = wrapper.find('[data-test-ref="item"]')
      const formItemLabel = formItem.find('.el-form-item__label')
      const innerInput = wrapper.find('.el-input__inner')
      expect(formItem.attributes().role).toBeFalsy()
      expect(innerInput.attributes().id).toBe('foobar')
      expect(formItemLabel.attributes().for).toBe(innerInput.attributes().id)
    })

    test('form item role is group when multiple inputs', async () => {
      const wrapper = mount(() => (
        <ElFormItem label="Foobar" data-test-ref="item">
          <InputNumber />
          <InputNumber />
        </ElFormItem>
      ))

      await nextTick()
      const formItem = wrapper.find('[data-test-ref="item"]')
      expect(formItem.attributes().role).toBe('group')
    })
  })

  test('use model-value', () => {
    const num = ref(2)
    const wrapper = mount(() => (
      <InputNumber modelValue={num.value} min={1} max={10} />
    ))
    const elInput = wrapper.findComponent({ name: 'ElInputNumber' }).vm
    elInput.handleInputChange('')
    expect(wrapper.getComponent(InputNumber).emitted('change')).toHaveLength(1)
    expect(elInput.modelValue).toBe(2)
    expect(wrapper.getComponent(InputNumber).emitted().change[0]).toEqual([
      null,
      2,
    ])

    elInput.increase()
    expect(wrapper.getComponent(InputNumber).emitted('change')).toHaveLength(2)
    expect(elInput.modelValue).toBe(2)
    expect(wrapper.getComponent(InputNumber).emitted().change[1]).toEqual([
      3, 2,
    ])

    elInput.handleInputChange('12')
    expect(wrapper.getComponent(InputNumber).emitted('change')).toHaveLength(3)
    expect(elInput.modelValue).toBe(2)
    expect(wrapper.getComponent(InputNumber).emitted().change[2]).toEqual([
      10, 2,
    ])

    elInput.decrease()
    expect(wrapper.getComponent(InputNumber).emitted('change')).toHaveLength(4)
    expect(elInput.modelValue).toBe(2)
    expect(wrapper.getComponent(InputNumber).emitted().change[3]).toEqual([
      1, 2,
    ])
  })

  test('use slot custom icon', async () => {
    const wrapper = mount(() => (
      <InputNumber
        v-slots={{
          decreaseIcon: () => (
            <ElIcon>
              <ArrowDown />
            </ElIcon>
          ),
          increaseIcon: () => (
            <ElIcon>
              <ArrowUp />
            </ElIcon>
          ),
        }}
      />
    ))
    const increase = wrapper.find('.el-input-number__increase i')
    const decrease = wrapper.find('.el-input-number__decrease i')
    expect(increase.exists()).toBe(true)
    expect(decrease.exists()).toBe(true)
    expect(increase.classes()).toContain('el-icon')
    expect(decrease.classes()).toContain('el-icon')
  })

  // fix: #18275
  test('step-strictly is true and should keep the initial value and step matching', () => {
    const num = ref(2.6)
    const wrapper = mount(() => (
      <InputNumber v-model={num.value} stepStrictly step={0.5} />
    ))
    expect(wrapper.find('input').element.value).toBe(num.value.toString())
    wrapper.unmount()
  })
})
