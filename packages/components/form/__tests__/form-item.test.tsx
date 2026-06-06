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
import type { FormItemRule } from '../src/types'

type FormItemInstance = InstanceType<typeof FormItem>
type RuleValidator = NonNullable<FormItemRule['validator']>

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

  describe('relations', () => {
    const createPassValidator = (spy: () => void): RuleValidator => {
      const validator: RuleValidator = (_rule, _value, callback) => {
        spy()
        callback()
      }
      return validator
    }

    it('should revalidate related fields by full prop', async () => {
      const form = reactive({
        password: 'same',
        confirm: 'same',
      })
      const passwordItem = ref<FormItemInstance>()
      const confirmItem = ref<FormItemInstance>()
      const confirmValidator: RuleValidator = (_rule, value, callback) => {
        if (value !== form.password) {
          callback(new Error('passwords do not match'))
        } else {
          callback()
        }
      }
      const wrapper = mount({
        setup() {
          return () => (
            <Form model={form}>
              <FormItem
                ref={passwordItem}
                prop="password"
                relations={['confirm']}
                rules={{ required: true, trigger: 'change' }}
              >
                <Input v-model={form.password} />
              </FormItem>
              <FormItem
                ref={confirmItem}
                prop="confirm"
                rules={{ validator: confirmValidator, trigger: 'change' }}
              >
                <Input v-model={form.confirm} />
              </FormItem>
            </Form>
          )
        },
      })

      form.password = 'changed'
      await nextTick()
      await passwordItem.value!.validate('change')
      await nextTick()

      expect(confirmItem.value!.validateState).toBe('error')
      expect(confirmItem.value!.validateMessage).toBe('passwords do not match')
      wrapper.unmount()
    })

    it('should not match similar prop names', async () => {
      const form = reactive({
        trigger: 'trigger',
        name: 'name',
        username: 'username',
      })
      const triggerItem = ref<FormItemInstance>()
      const nameValidate = vi.fn()
      const usernameValidate = vi.fn()
      const wrapper = mount({
        setup() {
          return () => (
            <Form model={form}>
              <FormItem
                ref={triggerItem}
                prop="trigger"
                relations={['name']}
                rules={{ required: true, trigger: 'change' }}
              />
              <FormItem
                prop="name"
                rules={{
                  validator: createPassValidator(nameValidate),
                  trigger: 'change',
                }}
              />
              <FormItem
                prop="username"
                rules={{
                  validator: createPassValidator(usernameValidate),
                  trigger: 'change',
                }}
              />
            </Form>
          )
        },
      })

      await triggerItem.value!.validate('change')
      await nextTick()

      expect(nameValidate).toHaveBeenCalledTimes(1)
      expect(usernameValidate).not.toHaveBeenCalled()
      wrapper.unmount()
    })

    it('should match dot relation paths with array prop paths', async () => {
      const form = reactive({
        trigger: 'trigger',
        user: {
          name: 'name',
        },
      })
      const triggerItem = ref<FormItemInstance>()
      const userNameValidate = vi.fn()
      const wrapper = mount({
        setup() {
          return () => (
            <Form model={form}>
              <FormItem
                ref={triggerItem}
                prop="trigger"
                relations={['user.name']}
                rules={{ required: true, trigger: 'change' }}
              />
              <FormItem
                prop={['user', 'name']}
                rules={{
                  validator: createPassValidator(userNameValidate),
                  trigger: 'change',
                }}
              />
            </Form>
          )
        },
      })

      await triggerItem.value!.validate('change')
      await nextTick()

      expect(userNameValidate).toHaveBeenCalledTimes(1)
      wrapper.unmount()
    })

    it('should not recursively validate circular relations', async () => {
      const form = reactive({
        first: 'first',
        second: 'second',
      })
      const firstItem = ref<FormItemInstance>()
      const firstValidate = vi.fn()
      const secondValidate = vi.fn()
      const wrapper = mount({
        setup() {
          return () => (
            <Form model={form}>
              <FormItem
                ref={firstItem}
                prop="first"
                relations={['second']}
                rules={{
                  validator: createPassValidator(firstValidate),
                  trigger: 'change',
                }}
              />
              <FormItem
                prop="second"
                relations={['first']}
                rules={{
                  validator: createPassValidator(secondValidate),
                  trigger: 'change',
                }}
              />
            </Form>
          )
        },
      })

      await firstItem.value!.validate('change')
      await nextTick()

      expect(firstValidate).toHaveBeenCalledTimes(1)
      expect(secondValidate).toHaveBeenCalledTimes(1)
      wrapper.unmount()
    })

    it('should ignore self and missing relation props', async () => {
      const form = reactive({
        trigger: 'trigger',
      })
      const triggerItem = ref<FormItemInstance>()
      const triggerValidate = vi.fn()
      const wrapper = mount({
        setup() {
          return () => (
            <Form model={form}>
              <FormItem
                ref={triggerItem}
                prop="trigger"
                relations={['trigger', 'missing']}
                rules={{
                  validator: createPassValidator(triggerValidate),
                  trigger: 'change',
                }}
              />
            </Form>
          )
        },
      })

      await triggerItem.value!.validate('change')
      await nextTick()

      expect(triggerValidate).toHaveBeenCalledTimes(1)
      wrapper.unmount()
    })

    it('should skip null and undefined relations but validate empty strings', async () => {
      const form = reactive<{
        trigger: string
        empty: string
        nullable: string | null
        missing?: string
      }>({
        trigger: 'trigger',
        empty: '',
        nullable: null,
        missing: undefined,
      })
      const triggerItem = ref<FormItemInstance>()
      const emptyItem = ref<FormItemInstance>()
      const nullableItem = ref<FormItemInstance>()
      const missingItem = ref<FormItemInstance>()
      const wrapper = mount({
        setup() {
          return () => (
            <Form model={form}>
              <FormItem
                ref={triggerItem}
                prop="trigger"
                relations={['empty', 'nullable', 'missing']}
                rules={{ required: true, trigger: 'change' }}
              />
              <FormItem
                ref={emptyItem}
                prop="empty"
                rules={{ required: true, message: 'empty is required' }}
              />
              <FormItem
                ref={nullableItem}
                prop="nullable"
                rules={{ required: true, message: 'nullable is required' }}
              />
              <FormItem
                ref={missingItem}
                prop="missing"
                rules={{ required: true, message: 'missing is required' }}
              />
            </Form>
          )
        },
      })

      await triggerItem.value!.validate('change')
      await nextTick()

      expect(emptyItem.value!.validateState).toBe('error')
      expect(emptyItem.value!.validateMessage).toBe('empty is required')
      expect(nullableItem.value!.validateState).toBe('')
      expect(missingItem.value!.validateState).toBe('')
      wrapper.unmount()
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
