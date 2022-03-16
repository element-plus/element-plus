import { ref, reactive, nextTick } from 'vue'
import { mount } from '@vue/test-utils'
import { rAF } from '@element-plus/test-utils/tick'
import Input from '@element-plus/components/input'
import FormItem from '../src/form-item.vue'
import DynamicFormItem from '../mocks/mock-data'

import type { VueWrapper } from '@vue/test-utils'
import type { InputInstance } from '@element-plus/components/input'

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
            <Input class="input" ref={inputRef} v-model={model.email} />
          </FormItem>
        ),
      },
    })
  }

  beforeAll(() => jest.spyOn(console, 'warn').mockImplementation())
  afterAll(() => (console.warn as any as jest.SpyInstance).mockRestore())
  afterEach(() => {
    formItemRef.value = undefined
    inputRef.value = undefined
    model.email = ''
  })

  describe('When initialized', () => {
    it('should throw when no form on top', () => {
      const warnHandler = jest.fn()
      try {
        mount(FormItem, {
          global: {
            config: {
              warnHandler,
            },
          },
        })
      } catch (e) {
        expect(e).toBeInstanceOf(Error)
      }
      expect(warnHandler).toHaveBeenCalled()
    })
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
        const callback = jest.fn()
        expect(emailInput.validate('', callback)).resolves.toBe(true)
        await rAF()
        expect(callback).toHaveBeenCalledWith(true)
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
        const callback = jest.fn()
        expect(console.warn).toHaveBeenCalled()
        expect(emailInput.validate('', callback)).resolves.toBe(false)
        await rAF()
        expect(callback).toHaveBeenCalled()
      })
    })
  })
})
