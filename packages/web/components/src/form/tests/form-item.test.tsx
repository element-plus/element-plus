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
import { rAF } from '@element-plus/test-utils'
import Input from '@element-plus/components/src/input'
import Form from '../src/form.vue'
import FormItem from '../src/form-item.vue'
import DynamicFormItem from '../mocks/mock-data'

import type { VueWrapper } from '@vue/test-utils'
import type { SpyInstance } from 'vitest'
import type { InputInstance } from '@element-plus/components/src/input'

type FormItemInstance = InstanceType<typeof FormItem>

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
  afterAll(() => (console.warn as any as SpyInstance).mockRestore())
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
})
