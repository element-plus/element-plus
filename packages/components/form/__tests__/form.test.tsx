// @ts-nocheck
import { computed, nextTick, reactive, ref } from 'vue'
import { mount } from '@vue/test-utils'
import {
  afterEach,
  beforeAll,
  beforeEach,
  describe,
  expect,
  it,
  vi,
} from 'vitest'
import { rAF } from '@element-plus/test-utils/tick'
import installStyle from '@element-plus/test-utils/style-plugin'
import {
  ElCheckbox as Checkbox,
  ElCheckboxGroup as CheckboxGroup,
} from '@element-plus/components/checkbox'
import Button from '@element-plus/components/button/src/button.vue'
import Input from '@element-plus/components/input'
import Form from '../src/form.vue'
import FormItem from '../src/form-item.vue'
import DynamicDomainForm, { formatDomainError } from './mock-data'

import type { VueWrapper } from '@vue/test-utils'
import type { FormRules } from '@element-plus/components/form'

type FormInstance = InstanceType<typeof Form>
type FormItemInstance = InstanceType<typeof FormItem>

const findStyle = (wrapper: VueWrapper<any>, selector: string) =>
  wrapper.find<HTMLElement>(selector).element.style

;(globalThis as any).ASYNC_VALIDATOR_NO_WARNING = 1

describe('Form', () => {
  beforeAll(() => {
    installStyle()
  })

  it('label width', async () => {
    const wrapper = mount({
      setup() {
        const form = reactive({
          name: '',
        })
        return () => (
          <Form ref="form" model={form} labelWidth="80px">
            <FormItem label="Activity Name">
              <Input v-model={form.name} />
            </FormItem>
          </Form>
        )
      },
    })
    expect(findStyle(wrapper, '.el-form-item__label').width).toBe('80px')
  })

  it('auto label width', async () => {
    const labelPosition = ref('right')
    const wrapper = mount({
      setup() {
        const form = reactive({
          name: '',
          intro: '',
        })
        return () => (
          <Form
            ref="form"
            model={form}
            labelWidth="auto"
            labelPosition={labelPosition.value}
          >
            <FormItem label="Name">
              <Input v-model={form.name} />
            </FormItem>
            <FormItem label="Intro">
              <Input v-model={form.intro} />
            </FormItem>
          </Form>
        )
      },
    })

    await nextTick()

    const formItems = wrapper.findAll<HTMLElement>('.el-form-item__content')
    const marginLeft = Number.parseInt(
      formItems[0].element.style.marginLeft,
      10
    )
    const marginLeft1 = Number.parseInt(
      formItems[1].element.style.marginLeft,
      10
    )
    expect(marginLeft).toEqual(marginLeft1)

    labelPosition.value = 'left'
    await nextTick()

    const formItems1 = wrapper.findAll<HTMLElement>('.el-form-item__content')
    const marginRight = Number.parseInt(
      formItems1[0].element.style.marginRight,
      10
    )
    const marginRight1 = Number.parseInt(
      formItems1[1].element.style.marginRight,
      10
    )
    expect(marginRight).toEqual(marginRight1)
  })

  it('form-item auto label width', async () => {
    const wrapper = mount({
      setup() {
        const form = reactive({
          name: '',
          region: '',
          type: '',
        })
        return () => (
          <Form
            ref="form"
            labelPosition="right"
            labelWidth="150px"
            model={form}
          >
            <FormItem label="名称">
              <Input v-model={form.name} />
            </FormItem>
            <FormItem label="活动区域" label-width="auto">
              <Input v-model={form.region} />
            </FormItem>
            <FormItem
              label="活动形式(我是一个很长很长很长很长的label)"
              label-width="auto"
            >
              <Input v-model={form.type} />
            </FormItem>
          </Form>
        )
      },
    })

    await nextTick()

    const formItemLabels = wrapper.findAll<HTMLElement>('.el-form-item__label')
    const formItemLabelWraps = wrapper.findAll<HTMLElement>(
      '.el-form-item__label-wrap'
    )

    const labelWrapMarginLeft1 = formItemLabelWraps[0].element.style.marginLeft
    const labelWrapMarginLeft2 = formItemLabelWraps[1].element.style.marginLeft
    expect(labelWrapMarginLeft1).toEqual(labelWrapMarginLeft2)
    expect(labelWrapMarginLeft2).toEqual('')

    const labelWidth0 = Number.parseInt(
      formItemLabels[0].element.style.width,
      10
    )
    expect(labelWidth0).toEqual(150)
    const labelWidth1 = formItemLabels[1].element.style.width
    const labelWidth2 = formItemLabels[2].element.style.width
    expect(labelWidth1).toEqual(labelWidth2)
    expect(labelWidth2).toEqual('auto')
  })

  it('inline form', () => {
    const wrapper = mount({
      setup() {
        const form = reactive({
          name: '',
          address: '',
        })
        return () => (
          <Form ref="form" model={form} inline>
            <FormItem>
              <Input v-model={form.name} />
            </FormItem>
            <FormItem>
              <Input v-model={form.address} />
            </FormItem>
          </Form>
        )
      },
    })
    expect(wrapper.classes()).toContain('el-form--inline')
  })

  it('label position', () => {
    const wrapper = mount({
      setup() {
        const form = reactive({
          name: '',
          address: '',
        })
        return () => (
          <div>
            <Form model={form} labelPosition="top" ref="labelTop">
              <FormItem>
                <Input v-model={form.name} />
              </FormItem>
              <FormItem>
                <Input v-model={form.address} />
              </FormItem>
            </Form>
            <Form model={form} labelPosition="left" ref="labelLeft">
              <FormItem>
                <Input v-model={form.name} />
              </FormItem>
              <FormItem>
                <Input v-model={form.address} />
              </FormItem>
            </Form>
            <Form model={form} ref="labelRight">
              <FormItem>
                <Input v-model={form.name} />
              </FormItem>
              <FormItem>
                <Input v-model={form.address} />
              </FormItem>
            </Form>
          </div>
        )
      },
    })
    expect(wrapper.findComponent({ ref: 'labelTop' }).classes()).toContain(
      'el-form--label-top'
    )
    expect(wrapper.findComponent({ ref: 'labelLeft' }).classes()).toContain(
      'el-form--label-left'
    )
    expect(wrapper.findComponent({ ref: 'labelRight' }).classes()).toContain(
      'el-form--label-right'
    )
  })

  it('label size', () => {
    const wrapper = mount({
      setup() {
        const form = reactive({
          name: '',
        })
        return () => (
          <div>
            <div>
              <Form model={form} size="small" ref="labelSmall">
                <FormItem>
                  <Input v-model={form.name} />
                </FormItem>
              </Form>
            </div>
          </div>
        )
      },
    })
    expect(wrapper.findComponent(FormItem).classes()).toContain(
      'el-form-item--small'
    )
  })

  it('show message', async () => {
    const wrapper = mount({
      setup() {
        const form = reactive({
          name: '',
        })
        return () => (
          <Form model={form} ref="form">
            <FormItem
              label="Name"
              prop="name"
              showMessage={false}
              rules={{
                required: true,
                message: 'Please input name',
                trigger: 'change',
                min: 3,
                max: 6,
              }}
            >
              <Input v-model={form.name} />
            </FormItem>
          </Form>
        )
      },
    })
    const form = wrapper.findComponent(Form).vm as FormInstance

    vi.useFakeTimers()
    const valid = await form
      .validate()
      .then(() => true)
      .catch(() => false)
    vi.runAllTimers()
    vi.useRealTimers()

    await nextTick()
    expect(valid).toBe(false)
    expect(wrapper.find('.el-form-item__error').exists()).toBe(false)
  })

  it('reset field', async () => {
    vi.useFakeTimers()
    const form = reactive({
      name: '',
      address: '',
      type: new Array<string>(),
    })

    const wrapper = mount({
      setup() {
        const rules: FormRules = {
          name: [
            { required: true, message: 'Please input name', trigger: 'blur' },
          ],
          address: [
            {
              required: true,
              message: 'Please input address',
              trigger: 'change',
            },
          ],
          type: [
            {
              type: 'array',
              required: true,
              message: 'Please input type',
              trigger: 'change',
            },
          ],
        }
        return () => (
          <Form ref="form" model={form} rules={rules}>
            <FormItem label="name" prop="name">
              <Input v-model={form.name} ref="fieldName" />
            </FormItem>
            <FormItem label="address" prop="address">
              <Input v-model={form.address} ref="fieldAddr" />
            </FormItem>
            <FormItem label="type" prop="type">
              <CheckboxGroup v-model={form.type}>
                <Checkbox label="type1" value="type1" name="type" />
                <Checkbox label="type2" value="type2" name="type" />
                <Checkbox label="type3" value="type3" name="type" />
                <Checkbox label="type4" value="type4" name="type" />
              </CheckboxGroup>
            </FormItem>
          </Form>
        )
      },
    })

    form.name = 'jack'
    form.address = 'aaaa'
    form.type.push('type1')

    const formRef = wrapper.findComponent({ ref: 'form' }).vm as FormInstance
    formRef.resetFields()
    // first await waits for the validation to be dispatched.
    await nextTick()
    // after validation dispatched, it will update `validateStateDebounced` with a 100ms delay.
    // That's why we put this `vi.runAllTimers` here.
    vi.runAllTimers()
    // after timer fired, we should wait for the UI to be updated.
    await nextTick()
    expect(form.name).toBe('')
    expect(form.address).toBe('')
    expect(form.type.length).toBe(0)
    expect(wrapper.findAll('.el-form-item__error')).toHaveLength(0)
    vi.useRealTimers()
  })

  it('clear validate', async () => {
    const wrapper = mount({
      setup() {
        const form = reactive({
          name: '',
          address: '',
          type: [],
        })

        const rules: FormRules = reactive({
          name: [
            { required: true, message: 'Please input name', trigger: 'blur' },
          ],
          address: [
            {
              required: true,
              message: 'Please input address',
              trigger: 'change',
            },
          ],
          type: [
            {
              type: 'array',
              required: true,
              message: 'Please input type',
              trigger: 'change',
            },
          ],
        })

        return () => (
          <Form ref="form" model={form} rules={rules}>
            <FormItem label="name" prop="name" ref="name">
              <Input v-model={form.name} />
            </FormItem>
            <FormItem label="address" prop="address" ref="address">
              <Input v-model={form.address} />
            </FormItem>
            <FormItem label="type" prop="type">
              <CheckboxGroup v-model={form.type}>
                <Checkbox label="type1" value="type1" name="type" />
                <Checkbox label="type2" value="type2" name="type" />
                <Checkbox label="type3" value="type3" name="type" />
                <Checkbox label="type4" value="type4" name="type" />
              </CheckboxGroup>
            </FormItem>
          </Form>
        )
      },
    })

    const form = wrapper.findComponent({ ref: 'form' }).vm as FormInstance
    const nameField = wrapper.findComponent({ ref: 'name' })
      .vm as FormItemInstance
    const addressField = wrapper.findComponent({ ref: 'address' })
      .vm as FormItemInstance
    await form.validate().catch(() => undefined)
    await nextTick()
    expect(nameField.validateMessage).toBe('Please input name')
    expect(addressField.validateMessage).toBe('Please input address')
    form.clearValidate(['name'])
    await nextTick()
    expect(nameField.validateMessage).toBe('')
    expect(addressField.validateMessage).toBe('Please input address')
    form.clearValidate()
    await nextTick()
    expect(addressField.validateMessage).toBe('')
  })

  it('scroll to field', () => {
    const wrapper = mount({
      setup() {
        return () => (
          <div>
            <Form ref="form">
              <FormItem prop="name" ref="formItem">
                <Input />
              </FormItem>
            </Form>
          </div>
        )
      },
    })

    const oldScrollIntoView = window.HTMLElement.prototype.scrollIntoView

    const scrollIntoViewMock = vi.fn()
    window.HTMLElement.prototype.scrollIntoView = function () {
      scrollIntoViewMock(this)
    }

    const form = wrapper.findComponent({ ref: 'form' }).vm as FormInstance
    form.scrollToField('name')
    expect(scrollIntoViewMock).toHaveBeenCalledWith(
      wrapper.findComponent({ ref: 'formItem' }).element
    )

    window.HTMLElement.prototype.scrollIntoView = oldScrollIntoView
  })

  it('get form all fields', async () => {
    const form = reactive({
      age: '20',
    })

    const wrapper = mount({
      setup() {
        const rules = ref({
          age: [
            { required: true, message: 'Please input age', trigger: 'change' },
          ],
        })
        return () => (
          <Form ref="formRef" model={form} rules={rules.value}>
            <FormItem ref="age" prop="age" label="age" required>
              <Input v-model={form.age} />
            </FormItem>
          </Form>
        )
      },
    })

    const formRef = wrapper.findComponent({ ref: 'formRef' }).vm as FormInstance
    expect(formRef).toHaveProperty('fields')
    expect(formRef.fields).toBeInstanceOf(Array)
    const field = formRef.fields[0]
    expect(field).toHaveProperty('fieldValue')
    expect(field.fieldValue).toBe('20')
    expect(field).toHaveProperty('required')
    expect(field.required).toBe(true)
    expect(field).toHaveProperty('validateState')
    expect(field.validateState).toBe('')
    await formRef.validate()
    const field2 = formRef.fields[0]
    expect(field2).toHaveProperty('validateState')
    expect(field2.validateState).toBe('success')
  })

  it('validate return parameters', async () => {
    const form = reactive({
      name: 'test',
      age: '',
    })

    const wrapper = mount({
      setup() {
        const rules = reactive({
          name: [
            { required: true, message: 'Please input name', trigger: 'blur' },
          ],
          age: [
            { required: true, message: 'Please input age', trigger: 'blur' },
          ],
        })
        return () => (
          <Form
            ref="formRef"
            model={form}
            rules={rules}
            // @ts-expect-error
            onSubmit="return false"
          >
            <FormItem prop="name" label="name">
              <Input v-model={form.name} />
            </FormItem>
            <FormItem prop="age" label="age">
              <Input v-model={form.age} />
            </FormItem>
          </Form>
        )
      },
    })
    const vm = wrapper.vm

    async function validate() {
      return (vm.$refs.formRef as FormInstance)
        .validate()
        .then(() => ({ valid: true, fields: undefined }))
        .catch((fields) => ({ valid: false, fields }))
    }

    let res = await validate()
    expect(res.valid).toBe(false)
    expect(Object.keys(res.fields).length).toBe(1)
    form.name = ''
    await nextTick()

    res = await validate()
    expect(res.valid).toBe(false)
    expect(Object.keys(res.fields).length).toBe(2)

    form.name = 'test'
    form.age = 'age'
    await nextTick()
    res = await validate()
    expect(res.valid).toBe(true)
    expect(res.fields).toBe(undefined)
  })

  it('scroll to the exact form option location', async () => {
    const form = reactive({
      name: '',
      age: '',
    })

    const wrapper = mount({
      setup() {
        const rules = reactive({
          name: [
            { required: true, message: 'Please input name', trigger: 'blur' },
          ],
          age: [
            { required: true, message: 'Please input age', trigger: 'blur' },
          ],
        })
        const showFirst = ref(false)

        return () => (
          <Form
            ref="formRef"
            model={form}
            rules={rules}
            scrollToError
            // @ts-expect-error
            onSubmit="return false"
          >
            <FormItem prop="name" label="name" v-if={showFirst.value}>
              <Input v-model={form.name} />
            </FormItem>
            <FormItem prop="age" label="age">
              <Input v-model={form.age} />
            </FormItem>
            <FormItem>
              <Button
                onClick={() => {
                  showFirst.value = true
                }}
              >
                show
              </Button>
            </FormItem>
          </Form>
        )
      },
    })
    const vm = wrapper.vm
    wrapper.findComponent(Button).trigger('click')
    await nextTick()

    function validate() {
      return (vm.$refs.formRef as FormInstance)
        .validate()
        .then(() => ({ valid: true, fields: undefined }))
        .catch((fields) => ({ valid: false, fields }))
    }

    const oldScrollIntoView = window.HTMLElement.prototype.scrollIntoView
    let callEl: HTMLElement
    window.HTMLElement.prototype.scrollIntoView = function () {
      // eslint-disable-next-line @typescript-eslint/no-this-alias
      callEl = this
    }
    const res = await validate()
    expect(res.valid).toBe(false)
    expect(callEl.textContent).contain('name')
    expect(callEl.className).toBe(
      'el-form-item is-error is-required asterisk-left el-form-item--label-right'
    )
    window.HTMLElement.prototype.scrollIntoView = oldScrollIntoView
  })

  it('validate status', async () => {
    const form = reactive({
      age: '20',
    })

    const wrapper = mount({
      setup() {
        const rules = ref({
          age: [
            { required: true, message: 'Please input age', trigger: 'change' },
          ],
        })
        return () => (
          <Form ref="formRef" model={form} rules={rules.value}>
            <FormItem ref="age" prop="age" label="age">
              <Input v-model={form.age} />
            </FormItem>
          </Form>
        )
      },
    })

    await (wrapper.vm.$refs.formRef as FormInstance)
      .validate()
      .catch(() => undefined)
    const ageField = wrapper.findComponent({ ref: 'age' })
    expect(ageField.classes('is-success')).toBe(true)
    expect(ageField.classes()).toContain('is-success')
  })

  it('validate promise callback', async () => {
    const form = reactive({
      age: '20',
    })

    const wrapper = mount({
      setup() {
        const rules = ref({
          age: [
            { required: true, message: 'Please input age', trigger: 'change' },
          ],
        })
        return () => (
          <Form ref="formRef" model={form} rules={rules.value}>
            <FormItem ref="age" prop="age" label="age">
              <Input v-model={form.age} />
            </FormItem>
          </Form>
        )
      },
    })

    const fn = vi.fn()

    await (wrapper.vm.$refs.formRef as FormInstance)
      .validate(() => {
        return new Promise((resolve) => {
          setTimeout(() => {
            fn('beforeResolve')
            resolve()
          }, 100)
        })
      })
      .finally(() => {
        fn('finally')
      })
      .catch(() => undefined)

    expect(fn.mock.calls.length).toBe(2)
    expect(fn.mock.calls[0][0]).toBe('beforeResolve')
    expect(fn.mock.calls[1][0]).toBe('finally')
  })

  it('validate on rule change', async () => {
    const form = reactive({
      email: '',
    })
    const value = ref(0)
    const rules = computed(() => ({
      age: [
        {
          required: true,
          message: `age is: ${value.value}`,
          trigger: 'blur',
        },
      ],
    }))

    const wrapper = mount({
      setup() {
        return () => (
          <Form ref="form" model={form} rules={rules}>
            <FormItem ref="age" prop="age" label="age">
              <Input v-model={form.age} />
              <Button onClick={() => value.value++}>increase</Button>
            </FormItem>
          </Form>
        )
      },
    })

    vi.useFakeTimers()
    await wrapper.findComponent(Button).trigger('click')
    vi.runAllTimers()
    vi.useRealTimers()

    await nextTick()
    expect(value.value).toBe(1)
    expect(rules.value.age[0].message).toBe('age is: 1')
    expect(wrapper.find('.el-form-item__error').text()).toBe('age is: 1')
  })

  it('should use form disabled input not trigger @blur', async () => {
    const focusHandler = vi.fn()
    const blurHandler = vi.fn()

    const wrapper = mount({
      setup() {
        const disabled = ref(true)
        const form = reactive({
          name: '',
        })
        return () => (
          <div>
            <Form ref="form" model={form} disabled={disabled.value}>
              <FormItem
                label="Name"
                prop="name"
                rules={{
                  required: true,
                  message: 'Please input name',
                  trigger: 'blur',
                }}
              >
                <Input
                  v-model={form.name}
                  onBlur={blurHandler}
                  onFocus={focusHandler}
                />
              </FormItem>
            </Form>
            <Button>Test</Button>
          </div>
        )
      },
    })
    const input = wrapper.find('input')
    const button = wrapper.findComponent(Button)

    await input.trigger('mouseenter')
    await input.trigger('focus')
    expect(focusHandler).toHaveBeenCalledTimes(0)

    await input.trigger('mouseleave')
    await button.trigger('click')
    await input.trigger('blur')
    expect(blurHandler).toHaveBeenCalledTimes(0)
    await nextTick()
    const inputWrapper = wrapper.find('.el-input__wrapper')
    expect(inputWrapper.attributes('tabindex')).toBeUndefined()
  })

  it('validate abnormal callback', async () => {
    const form = reactive({
      age: '20',
    })

    const wrapper = mount({
      setup() {
        const rules = ref({
          age: [
            {
              required: true,
              message: 'Please input age',
              trigger: 'change',
            },
          ],
        })
        return () => (
          <Form ref="formRef" model={form} rules={rules.value}>
            <FormItem ref="age" prop="age" label="age">
              <Input v-model={form.age} />
            </FormItem>
          </Form>
        )
      },
    })

    const fn = vi.fn()

    await (wrapper.vm.$refs.formRef as FormInstance).validate(() => {
      fn()
      throw {
        age: [
          {
            field: 'age',
            fieldValue: '',
            message: 'Please input age',
          },
        ],
      }
    })

    expect(fn).toHaveBeenCalledTimes(1)
  })

  it('prop is array', async () => {
    vi.useFakeTimers()
    const wrapper = mount({
      setup() {
        const form = reactive({
          obj: { name: '' },
        })
        const rules = {
          required: true,
          message: 'Please input name',
          trigger: 'blur',
        }
        return () => (
          <Form ref="formRef" model={form}>
            <FormItem
              label="Name"
              ref="name"
              prop={['obj', 'name']}
              rules={rules}
            >
              <Input v-model={form.obj.name} />
            </FormItem>
          </Form>
        )
      },
    })

    await nextTick()

    const formRef = wrapper.vm.$refs.formRef as FormInstance
    const valid = await formRef
      .validateField([['obj', 'name']])
      .then(() => true)
      .catch(() => false)
    expect(valid).toEqual(false)
    vi.runAllTimers()
    await nextTick()
    expect(wrapper.find('.is-error').exists()).toBe(true)
    expect(wrapper.find('.el-form-item__error').text()).toBe(
      'Please input name'
    )

    formRef.resetFields([['obj', 'name']])
    await nextTick()
    vi.runAllTimers()
    await nextTick()
    expect(wrapper.find('.is-error').exists()).toBe(false)

    const field = formRef.getField(['obj', 'name'])
    field.validateState = 'error'
    field.validateMessage = 'name is error'
    vi.runAllTimers()
    await nextTick()
    expect(wrapper.find('.is-error').exists()).toBe(true)
    expect(wrapper.find('.el-form-item__error').text()).toBe('name is error')
    vi.useRealTimers()
  })

  it('should preserve form input after submit', async () => {
    const form = reactive({
      email: '',
    })
    const manualErrors = ref<{ email?: string }>({})
    const wrapper = mount({
      setup() {
        const validate = async () => {
          formRef.validate()
          manualErrors.value = {}
          if (!form.email.includes('@')) {
            manualErrors.value.email = 'please enter a valid E-Mail'
          }
        }
        return () => (
          <Form ref="formRef" model={form}>
            <FormItem
              prop="email"
              label="E-Mail"
              error={manualErrors.value.email}
            >
              <Input
                modelValue={form.email}
                onUpdate:modelValue={(val) => (form.email = val)}
              />
            </FormItem>
            <button onClick={validate}>submit</button>
          </Form>
        )
      },
    })
    const formRef = wrapper.findComponent({ ref: 'formRef' }).vm as FormInstance
    const input = wrapper.find('input')
    const button = wrapper.find('button')
    await input.setValue('test')
    const field = formRef.getField(['email'])
    field.validateState = 'error'
    expect((input.element as HTMLInputElement).value).toBe('test')
    await button.trigger('click')
    await nextTick()
    expect((input.element as HTMLInputElement).value).toBe('test')
    expect(manualErrors.value.email).toBe('please enter a valid E-Mail')
    await button.trigger('click')
    await nextTick()
    expect(manualErrors.value.email).toBe('please enter a valid E-Mail')
    await input.setValue('test@')
    expect((input.element as HTMLInputElement).value).toBe('test@')
    await button.trigger('click')
    await nextTick()
    expect(manualErrors.value.email ?? '').toBe('')
  })
  describe('FormItem', () => {
    const onSuccess = vi.fn()
    const onError = vi.fn()
    let wrapper: VueWrapper<InstanceType<typeof DynamicDomainForm>>
    const createComponent = (onSubmit?: vi.MockedFunction<any>) => {
      wrapper = mount(DynamicDomainForm, {
        props: {
          onSuccess,
          onError,
          onSubmit,
        },
      })
    }

    const findSubmitButton = () => wrapper.find('.submit')
    const findAddDomainButton = () => wrapper.find('.add-domain')
    const findDeleteDomainButton = () => wrapper.findAll('.delete-domain')
    const findDomainItems = () => wrapper.findAll('.domain-item')

    beforeEach(() => {
      createComponent()
    })

    afterEach(() => {
      wrapper.unmount()
    })

    it('should register form item', async () => {
      expect(findDomainItems()).toHaveLength(1)
      await findSubmitButton().trigger('click')
      // wait for AsyncValidator to be resolved
      await rAF()
      expect(onError).toHaveBeenCalled()
    })

    it('should dynamically register form with items', async () => {
      await findAddDomainButton().trigger('click')
      expect(findDomainItems()).toHaveLength(2)

      await findSubmitButton().trigger('click')
      // wait for AsyncValidator to be resolved
      await rAF()
      expect(onError).toHaveBeenCalledWith(formatDomainError(2))
      const deleteBtns = findDeleteDomainButton()
      expect(deleteBtns).toHaveLength(2)
      await findDeleteDomainButton().at(1)!.trigger('click')
      expect(findDomainItems()).toHaveLength(1)
      await findSubmitButton().trigger('click')
      // wait for AsyncValidator to be resolved
      await rAF()
      expect(onError).toHaveBeenLastCalledWith(formatDomainError(1))
    })

    it('should not throw error when callback passed in', async () => {
      const onSubmit = vi.fn()
      createComponent(onSubmit)

      await findSubmitButton().trigger('click')
      await rAF()
      expect(onError).not.toHaveBeenCalled()
      expect(onSubmit).toHaveBeenCalled()
    })
  })

  describe('setInitialValues', () => {
    it('should update initial values for all fields', async () => {
      vi.useFakeTimers()
      const form = reactive({
        name: '',
        age: '',
        address: '',
      })
      const wrapper = mount({
        setup() {
          return { form }
        },
        render() {
          return (
            <Form ref="formRef" model={form}>
              <FormItem label="Name" prop="name">
                <Input v-model={form.name} />
              </FormItem>
              <FormItem label="Age" prop="age">
                <Input v-model={form.age} />
              </FormItem>
              <FormItem label="Address" prop="address">
                <Input v-model={form.address} />
              </FormItem>
            </Form>
          )
        },
      })

      await nextTick()

      const formRef = wrapper.findComponent({ ref: 'formRef' })
        .vm as FormInstance

      // 修改表单值
      form.name = 'John'
      form.age = '25'
      form.address = 'New York'
      await nextTick()

      // 设置新的初始值
      formRef.setInitialValues({
        name: 'InitName',
        age: '30',
        address: 'Los Angeles',
      })
      await nextTick()

      // 再次修改表单值
      form.name = 'Modified'
      form.age = '40'
      form.address = 'Chicago'
      await nextTick()

      // 重置表单，应该重置到 setInitialValues 设置的值
      formRef.resetFields()
      await nextTick()
      vi.runAllTimers()
      await nextTick()

      expect(form.name).toBe('InitName')
      expect(form.age).toBe('30')
      expect(form.address).toBe('Los Angeles')

      vi.useRealTimers()
    })

    it('should work with nested object properties', async () => {
      vi.useFakeTimers()
      const form = reactive({
        user: {
          name: '',
          info: {
            age: '',
          },
        },
      })
      const wrapper = mount({
        setup() {
          return { form }
        },
        render() {
          return (
            <Form ref="formRef" model={form}>
              <FormItem label="Name" prop={['user', 'name']}>
                <Input v-model={form.user.name} />
              </FormItem>
              <FormItem label="Age" prop={['user', 'info', 'age']}>
                <Input v-model={form.user.info.age} />
              </FormItem>
            </Form>
          )
        },
      })

      await nextTick()

      const formRef = wrapper.findComponent({ ref: 'formRef' })
        .vm as FormInstance

      // 修改表单值
      form.user.name = 'John'
      form.user.info.age = '25'
      await nextTick()

      // 设置新的初始值
      formRef.setInitialValues({
        user: {
          name: 'InitName',
          info: {
            age: '30',
          },
        },
      })
      await nextTick()

      // 再次修改表单值
      form.user.name = 'Modified'
      form.user.info.age = '40'
      await nextTick()

      // 重置表单
      formRef.resetFields()
      await nextTick()
      vi.runAllTimers()
      await nextTick()

      expect(form.user.name).toBe('InitName')
      expect(form.user.info.age).toBe('30')

      vi.useRealTimers()
    })

    it('should work with partial field updates', async () => {
      vi.useFakeTimers()
      const form = reactive({
        name: 'DefaultName',
        age: '20',
        address: 'DefaultAddress',
      })
      const wrapper = mount({
        setup() {
          return { form }
        },
        render() {
          return (
            <Form ref="formRef" model={form}>
              <FormItem label="Name" prop="name">
                <Input v-model={form.name} />
              </FormItem>
              <FormItem label="Age" prop="age">
                <Input v-model={form.age} />
              </FormItem>
              <FormItem label="Address" prop="address">
                <Input v-model={form.address} />
              </FormItem>
            </Form>
          )
        },
      })

      await nextTick()

      const formRef = wrapper.findComponent({ ref: 'formRef' })
        .vm as FormInstance

      // 只更新部分字段的初始值
      formRef.setInitialValues({
        name: 'NewInitName',
        age: '25',
      })
      await nextTick()

      // 修改所有字段
      form.name = 'Modified'
      form.age = '30'
      form.address = 'ModifiedAddress'
      await nextTick()

      // 重置表单
      formRef.resetFields()
      await nextTick()
      vi.runAllTimers()
      await nextTick()

      // name 和 age 应该重置到新的初始值
      expect(form.name).toBe('NewInitName')
      expect(form.age).toBe('25')
      // address 没有设置新初始值，应该保持原始挂载时的值
      expect(form.address).toBe('DefaultAddress')

      vi.useRealTimers()
    })
  })

  describe('setInitialValue (FormItem)', () => {
    it('should update initial value for single field', async () => {
      vi.useFakeTimers()
      const form = reactive({
        name: '',
        age: '',
      })
      const wrapper = mount({
        setup() {
          return { form }
        },
        render() {
          return (
            <Form ref="formRef" model={form}>
              <FormItem ref="nameItem" label="Name" prop="name">
                <Input v-model={form.name} />
              </FormItem>
              <FormItem label="Age" prop="age">
                <Input v-model={form.age} />
              </FormItem>
            </Form>
          )
        },
      })

      await nextTick()

      const formRef = wrapper.findComponent({ ref: 'formRef' })
        .vm as FormInstance
      const nameItem = wrapper.findComponent({ ref: 'nameItem' })
        .vm as FormItemInstance

      // 修改字段值
      form.name = 'John'
      form.age = '25'
      await nextTick()

      // 仅为 name 字段设置新的初始值
      nameItem.setInitialValue('CustomInitName')
      await nextTick()

      // 再次修改字段值
      form.name = 'Modified'
      form.age = '30'
      await nextTick()

      // 重置表单
      formRef.resetFields()
      await nextTick()
      vi.runAllTimers()
      await nextTick()

      // name 应该重置到自定义的初始值
      expect(form.name).toBe('CustomInitName')
      // age 应该重置到挂载时的原始值
      expect(form.age).toBe('')

      vi.useRealTimers()
    })

    it('should work with getField and setInitialValue', async () => {
      vi.useFakeTimers()
      const form = reactive({
        name: '',
        email: '',
      })
      const wrapper = mount({
        setup() {
          return { form }
        },
        render() {
          return (
            <Form ref="formRef" model={form}>
              <FormItem label="Name" prop="name">
                <Input v-model={form.name} />
              </FormItem>
              <FormItem label="Email" prop="email">
                <Input v-model={form.email} />
              </FormItem>
            </Form>
          )
        },
      })

      await nextTick()

      const formRef = wrapper.findComponent({ ref: 'formRef' })
        .vm as FormInstance

      // 通过 getField 获取字段并设置初始值
      const nameField = formRef.getField('name')
      nameField?.setInitialValue('FieldInitName')

      const emailField = formRef.getField('email')
      emailField?.setInitialValue('test@example.com')

      await nextTick()

      // 修改字段值
      form.name = 'Modified'
      form.email = 'modified@test.com'
      await nextTick()

      // 重置表单
      formRef.resetFields()
      await nextTick()
      vi.runAllTimers()
      await nextTick()

      expect(form.name).toBe('FieldInitName')
      expect(form.email).toBe('test@example.com')

      vi.useRealTimers()
    })

    it('should allow resetting single field with custom initial value', async () => {
      vi.useFakeTimers()
      const form = reactive({
        name: '',
        age: '',
      })
      const wrapper = mount({
        setup() {
          return { form }
        },
        render() {
          return (
            <Form ref="formRef" model={form}>
              <FormItem ref="nameItem" label="Name" prop="name">
                <Input v-model={form.name} />
              </FormItem>
              <FormItem label="Age" prop="age">
                <Input v-model={form.age} />
              </FormItem>
            </Form>
          )
        },
      })

      await nextTick()

      const nameItem = wrapper.findComponent({ ref: 'nameItem' })
        .vm as FormItemInstance

      // 设置自定义初始值
      nameItem.setInitialValue('CustomName')
      await nextTick()

      // 修改字段
      form.name = 'Modified'
      form.age = '30'
      await nextTick()

      // 仅重置 name 字段
      nameItem.resetField()
      await nextTick()
      vi.runAllTimers()
      await nextTick()

      // name 应该重置到自定义初始值
      expect(form.name).toBe('CustomName')
      // age 不应该被重置
      expect(form.age).toBe('30')

      vi.useRealTimers()
    })

    it('should support setInitialValue to update field reset value', async () => {
      vi.useFakeTimers()
      const form = reactive({
        username: 'initial',
        email: 'initial@test.com',
      })
      const wrapper = mount({
        setup() {
          return { form }
        },
        render() {
          return (
            <Form ref="formRef" model={form}>
              <FormItem ref="usernameItem" label="Username" prop="username">
                <Input v-model={form.username} />
              </FormItem>
              <FormItem label="Email" prop="email">
                <Input v-model={form.email} />
              </FormItem>
            </Form>
          )
        },
      })

      await nextTick()

      const usernameItem = wrapper.findComponent({ ref: 'usernameItem' })
        .vm as FormItemInstance

      // 修改字段值
      form.username = 'modified'
      form.email = 'modified@test.com'
      await nextTick()

      // 动态设置新的初始值
      usernameItem.setInitialValue('newInitial')
      await nextTick()

      // 重置该字段
      usernameItem.resetField()
      await nextTick()
      vi.runAllTimers()
      await nextTick()

      // 应该重置到新设置的初始值
      expect(form.username).toBe('newInitial')
      // email 不受影响
      expect(form.email).toBe('modified@test.com')

      vi.useRealTimers()
    })

    it('should support setInitialValues to update all fields reset values', async () => {
      vi.useFakeTimers()
      const form = reactive({
        name: 'oldName',
        age: '20',
        city: 'oldCity',
      })
      const wrapper = mount({
        setup() {
          return { form }
        },
        render() {
          return (
            <Form ref="formRef" model={form}>
              <FormItem label="Name" prop="name">
                <Input v-model={form.name} />
              </FormItem>
              <FormItem label="Age" prop="age">
                <Input v-model={form.age} />
              </FormItem>
              <FormItem label="City" prop="city">
                <Input v-model={form.city} />
              </FormItem>
            </Form>
          )
        },
      })

      await nextTick()

      const formRef = wrapper.findComponent({ ref: 'formRef' })
        .vm as FormInstance

      // 修改所有字段
      form.name = 'modified'
      form.age = '99'
      form.city = 'modifiedCity'
      await nextTick()

      // 设置新的初始值集合
      formRef.setInitialValues({
        name: 'newName',
        age: '25',
        city: 'newCity',
      })
      await nextTick()

      // 重置所有字段
      formRef.resetFields()
      await nextTick()
      vi.runAllTimers()
      await nextTick()

      // 所有字段应该重置到新的初始值
      expect(form.name).toBe('newName')
      expect(form.age).toBe('25')
      expect(form.city).toBe('newCity')

      vi.useRealTimers()
    })

    it('should support setInitialValues with partial fields', async () => {
      vi.useFakeTimers()
      const form = reactive({
        name: 'oldName',
        age: '20',
        email: 'old@test.com',
      })
      const wrapper = mount({
        setup() {
          return { form }
        },
        render() {
          return (
            <Form ref="formRef" model={form}>
              <FormItem label="Name" prop="name">
                <Input v-model={form.name} />
              </FormItem>
              <FormItem label="Age" prop="age">
                <Input v-model={form.age} />
              </FormItem>
              <FormItem label="Email" prop="email">
                <Input v-model={form.email} />
              </FormItem>
            </Form>
          )
        },
      })

      await nextTick()

      const formRef = wrapper.findComponent({ ref: 'formRef' })
        .vm as FormInstance

      // 仅更新部分字段的初始值
      formRef.setInitialValues({
        name: 'partialName',
        age: '30',
      })
      await nextTick()

      // 修改所有字段
      form.name = 'modified1'
      form.age = '99'
      form.email = 'modified@test.com'
      await nextTick()

      // 重置所有字段
      formRef.resetFields()
      await nextTick()
      vi.runAllTimers()
      await nextTick()

      // name 和 age 重置到新初始值
      expect(form.name).toBe('partialName')
      expect(form.age).toBe('30')
      // email 重置到挂载时的值
      expect(form.email).toBe('old@test.com')

      vi.useRealTimers()
    })

    it('should support setInitialValues for nested properties', async () => {
      vi.useFakeTimers()
      const form = reactive({
        user: {
          profile: {
            name: 'oldName',
            age: 20,
          },
        },
      })
      const wrapper = mount({
        setup() {
          return { form }
        },
        render() {
          return (
            <Form ref="formRef" model={form}>
              <FormItem label="Name" prop={['user', 'profile', 'name']}>
                <Input v-model={form.user.profile.name} />
              </FormItem>
              <FormItem label="Age" prop={['user', 'profile', 'age']}>
                <Input v-model={form.user.profile.age} />
              </FormItem>
            </Form>
          )
        },
      })

      await nextTick()

      const formRef = wrapper.findComponent({ ref: 'formRef' })
        .vm as FormInstance

      // 设置嵌套属性的初始值
      formRef.setInitialValues({
        user: {
          profile: {
            name: 'nestedName',
            age: 30,
          },
        },
      })
      await nextTick()

      // 修改字段
      form.user.profile.name = 'modified'
      form.user.profile.age = 99
      await nextTick()

      // 重置
      formRef.resetFields()
      await nextTick()
      vi.runAllTimers()
      await nextTick()

      // 应该重置到新初始值
      expect(form.user.profile.name).toBe('nestedName')
      expect(form.user.profile.age).toBe(30)

      vi.useRealTimers()
    })
  })
})
