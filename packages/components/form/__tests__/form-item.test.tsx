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

describe('GFormItem', () => {
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
      .findAll('.g-form-item__label')
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
      'g-form-item--label-top'
    )
    expect(wrapper.findComponent({ ref: 'labelLeft' }).classes()).toContain(
      'g-form-item--label-left'
    )
    expect(wrapper.findComponent({ ref: 'labelRight' }).classes()).toContain(
      'g-form-item--label-right'
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
    expect(wrapper.find('.g-form-item__label').exists()).toBe(false)
    showLabel.value = true
    await nextTick()
    const labelSlot = wrapper.find('.g-form-item__label')
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

      // Set custom initial value
      formItemRef.setInitialValue('customInitial')
      await nextTick()

      // Modify field value
      form.username = 'modified'
      await nextTick()

      // Reset field
      formItemRef.resetField()
      await nextTick()
      vi.runAllTimers()
      await nextTick()

      // Should reset to custom initial value
      expect(form.username).toBe('customInitial')

      vi.useRealTimers()
    })

    it('should handle undefined initial values', async () => {
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
