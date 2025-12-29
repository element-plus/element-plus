import { nextTick, reactive, ref } from 'vue'
import { mount } from '@vue/test-utils'
import {
  afterAll,
  afterEach,
  beforeAll,
  beforeEach,
  describe,
  expect,
  it,
  vi,
} from 'vitest'
import { rAF } from '@element-plus/test-utils/tick'
import Input from '@element-plus/components/input'
import Form from '../src/form.vue'
import FormItem from '../src/form-item.vue'
import DynamicFormItem from './mock-data'

import type { VueWrapper } from '@vue/test-utils'
import type { MockInstance } from 'vitest'
import type { InputInstance } from '@element-plus/components/input'

type FormItemInstance = InstanceType<typeof FormItem>

const AXIOM = 'Rem is the best girl'

describe('ElFormItem', () => {
  let wrapper: VueWrapper<InstanceType<typeof DynamicFormItem>>
  const formItemRef = ref<FormItemInstance>()
  const inputRef = ref<InputInstance>()
  const model = reactive({
    email: '',
  })

  const createComponent = () => {
    wrapper = mount(DynamicFormItem, {
      props: {
        model,
      },
      slots: {
        default: () => (
          <FormItem prop="email" required ref={formItemRef}>
            <Input
              class="input"
              ref={inputRef}
              v-model={model.email}
              validateEvent={false}
            />
          </FormItem>
        ),
      },
    })
  }
  const findForm = () => wrapper.findComponent(Form)

  beforeAll(() => {
    vi.spyOn(console, 'warn').mockImplementation(() => vi.fn)
  })
  afterAll(() => (console.warn as any as MockInstance).mockRestore())
  afterEach(() => {
    formItemRef.value = undefined
    inputRef.value = undefined
    model.email = ''
  })

  describe('when validation dispatches', () => {
    beforeEach(() => {
      createComponent()
    })

    afterEach(() => {
      wrapper.unmount()
    })

    describe('it successes', () => {
      it('should be able to validate successfully without callback', async () => {
        const emailInput = formItemRef.value!
        model.email = 'test'
        await nextTick()
        await rAF()

        expect(emailInput.validate('')).resolves.toBe(true)
      })

      it('should be able to validate successfully with callback', async () => {
        const emailInput = formItemRef.value!
        model.email = 'test'
        await nextTick()
        await rAF()
        const callback = vi.fn()

        expect(emailInput.validate('', callback)).resolves.toBe(true)
        await rAF()

        expect(callback).toHaveBeenCalledWith(true)
      })

      it('should emit validate event', async () => {
        const emailInput = formItemRef.value!
        model.email = 'test'
        await nextTick()
        await emailInput.validate('')
        await rAF()

        expect(findForm().emitted('validate')).toEqual([['email', true, '']])
      })
    })

    describe('it fails', () => {
      it('should be able to validate without callback', async () => {
        const emailInput = formItemRef.value!
        expect(emailInput.validate('')).rejects.toHaveProperty('email')
        expect(console.warn).toHaveBeenCalled()
      })

      it('should be able to validate with callback without throwing rejection', async () => {
        const emailInput = formItemRef.value!
        const callback = vi.fn()
        expect(emailInput.validate('', callback)).resolves.toBe(false)
        expect(console.warn).toHaveBeenCalled()
        await rAF()
        expect(callback).toHaveBeenCalled()
      })

      it('should emit validate event', async () => {
        const emailInput = formItemRef.value!
        const callback = vi.fn()
        expect(emailInput.validate('', callback)).resolves.toBe(false)
        expect(console.warn).toHaveBeenCalled()
        await rAF()
        expect(findForm().emitted('validate')).toEqual([
          ['email', false, 'email is required'],
        ])
      })
    })
  })

  it('form-item label for', async () => {
    const wrapper = mount({
      setup() {
        const form = reactive({
          name: '',
          email: '',
          address: '',
        })

        return () => (
          <div>
            <Form model={form}>
              <FormItem label="name">
                <Input v-model={form.name} />
              </FormItem>
              <FormItem label="email" for="">
                <Input v-model={form.email} />
              </FormItem>
              <FormItem label="address" for="address">
                <Input v-model={form.address} />
              </FormItem>
            </Form>
          </div>
        )
      },
    })

    await nextTick()
    const [name, email, address] = wrapper
      .findAll('.el-form-item__label')
      .map((el) => el.element.tagName.toLowerCase())

    expect(name).toBe('label')
    expect(email).toBe('div')
    expect(address).toBe('label')
  })

  it('form-item label position', () => {
    const wrapper = mount({
      setup() {
        const form = reactive({
          name: '',
          nickName: '',
          address: '',
        })
        return () => (
          <div>
            <Form model={form}>
              <FormItem labelPosition="right" ref="labelRight">
                <Input v-model={form.name} />
              </FormItem>
              <FormItem labelPosition="left" ref="labelLeft">
                <Input v-model={form.nickName} />
              </FormItem>
              <FormItem labelPosition="top" ref="labelTop">
                <Input v-model={form.address} />
              </FormItem>
            </Form>
          </div>
        )
      },
    })
    expect(wrapper.findComponent({ ref: 'labelTop' }).classes()).toContain(
      'el-form-item--label-top'
    )
    expect(wrapper.findComponent({ ref: 'labelLeft' }).classes()).toContain(
      'el-form-item--label-left'
    )
    expect(wrapper.findComponent({ ref: 'labelRight' }).classes()).toContain(
      'el-form-item--label-right'
    )
  })

  it('should successfully toggle the label slot dynamically', async () => {
    const showLabel = ref(false)
    const wrapper = mount({
      setup() {
        return () => (
          <Form>
            <FormItem
              v-slots={
                showLabel.value && {
                  label: () => AXIOM,
                }
              }
            />
          </Form>
        )
      },
    })
    expect(wrapper.find('.el-form-item__label').exists()).toBe(false)
    showLabel.value = true
    await nextTick()
    const labelSlot = wrapper.find('.el-form-item__label')
    expect(labelSlot.exists()).toBe(true)
    expect(labelSlot.text()).toBe(AXIOM)
  })

  describe('setInitialValue', () => {
    it('should allow setting custom initial value for reset', async () => {
      vi.useFakeTimers()
      const form = reactive({
        username: 'original',
      })
      const wrapper = mount({
        setup() {
          return { form }
        },
        render() {
          return (
            <Form model={form}>
              <FormItem ref="usernameItem" label="Username" prop="username">
                <Input v-model={form.username} />
              </FormItem>
            </Form>
          )
        },
      })

      await nextTick()

      const formItemRef = wrapper.findComponent({ ref: 'usernameItem' })
        .vm as FormItemInstance

      // 设置自定义初始值
      formItemRef.setInitialValue('customInitial')
      await nextTick()

      // 修改字段值
      form.username = 'modified'
      await nextTick()

      // 重置字段
      formItemRef.resetField()
      await nextTick()
      vi.runAllTimers()
      await nextTick()

      // 应该重置到自定义初始值
      expect(form.username).toBe('customInitial')

      vi.useRealTimers()
    })

    it('should support updating initial value multiple times', async () => {
      vi.useFakeTimers()
      const form = reactive({
        value: 'first',
      })
      const wrapper = mount({
        setup() {
          return { form }
        },
        render() {
          return (
            <Form model={form}>
              <FormItem ref="valueItem" label="Value" prop="value">
                <Input v-model={form.value} />
              </FormItem>
            </Form>
          )
        },
      })

      await nextTick()

      const formItemRef = wrapper.findComponent({ ref: 'valueItem' })
        .vm as FormItemInstance

      // 第一次设置初始值
      formItemRef.setInitialValue('second')
      form.value = 'changed'
      await nextTick()

      formItemRef.resetField()
      await nextTick()
      vi.runAllTimers()
      await nextTick()

      expect(form.value).toBe('second')

      // 第二次更新初始值
      formItemRef.setInitialValue('third')
      form.value = 'changed_again'
      await nextTick()

      formItemRef.resetField()
      await nextTick()
      vi.runAllTimers()
      await nextTick()

      expect(form.value).toBe('third')

      vi.useRealTimers()
    })

    it('should work with different value types', async () => {
      vi.useFakeTimers()
      const form = reactive({
        number: 0,
        bool: false,
        array: [],
        obj: {},
      })
      const wrapper = mount({
        setup() {
          return { form }
        },
        render() {
          return (
            <Form model={form}>
              <FormItem ref="numberItem" prop="number">
                <Input v-model={form.number} />
              </FormItem>
              <FormItem ref="boolItem" prop="bool">
                <Input v-model={form.bool} />
              </FormItem>
              <FormItem ref="arrayItem" prop="array">
                <Input v-model={form.array} />
              </FormItem>
              <FormItem ref="objItem" prop="obj">
                <Input v-model={form.obj} />
              </FormItem>
            </Form>
          )
        },
      })

      await nextTick()

      const numberItem = wrapper.findComponent({ ref: 'numberItem' })
        .vm as FormItemInstance
      const boolItem = wrapper.findComponent({ ref: 'boolItem' })
        .vm as FormItemInstance
      const arrayItem = wrapper.findComponent({ ref: 'arrayItem' })
        .vm as FormItemInstance
      const objItem = wrapper.findComponent({ ref: 'objItem' })
        .vm as FormItemInstance

      // 设置不同类型的初始值
      numberItem.setInitialValue(100)
      boolItem.setInitialValue(true)
      arrayItem.setInitialValue([1, 2, 3])
      objItem.setInitialValue({ key: 'value' })

      // 修改值
      form.number = 999
      form.bool = false
      form.array = []
      form.obj = {}
      await nextTick()

      // 重置
      numberItem.resetField()
      boolItem.resetField()
      arrayItem.resetField()
      objItem.resetField()
      await nextTick()
      vi.runAllTimers()
      await nextTick()

      // 验证重置结果
      expect(form.number).toBe(100)
      expect(form.bool).toBe(true)
      expect(form.array).toEqual([1, 2, 3])
      expect(form.obj).toEqual({ key: 'value' })

      vi.useRealTimers()
    })

    it('should handle undefined and null initial values', async () => {
      vi.useFakeTimers()
      const form = reactive({
        value: 'original',
      })
      const wrapper = mount({
        setup() {
          return { form }
        },
        render() {
          return (
            <Form model={form}>
              <FormItem ref="valueItem" label="Value" prop="value">
                <Input v-model={form.value} />
              </FormItem>
            </Form>
          )
        },
      })

      await nextTick()

      const formItemRef = wrapper.findComponent({ ref: 'valueItem' })
        .vm as FormItemInstance

      // Test undefined
      formItemRef.setInitialValue(undefined)
      form.value = 'changed'
      await nextTick()

      formItemRef.resetField()
      await nextTick()
      vi.runAllTimers()
      await nextTick()

      expect(form.value).toBe(undefined)

      vi.useRealTimers()
    })
  })
})
