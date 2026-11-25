import { nextTick, reactive, ref } from 'vue'
import { mount } from '@vue/test-utils'
import { beforeAll, describe, expect, it, vi } from 'vitest'
import { rAF } from '@element-plus/test-utils/tick'
import Input from '@element-plus/components/input'
import Form from '../src/form.vue'
import FormItem from '../src/form-item.vue'
import FormSection from '../src/form-section.vue'

type FormInstance = InstanceType<typeof Form>
type FormItemInstance = InstanceType<typeof FormItem>
type FormSectionInstance = InstanceType<typeof FormSection>
;(globalThis as any).ASYNC_VALIDATOR_NO_WARNING = 1

describe('FormSection', () => {
  beforeAll(() => {
    vi.spyOn(console, 'warn').mockImplementation(() => vi.fn)
  })

  describe('basic functionality', () => {
    it('should warn when used outside of Form', () => {
      mount({
        setup() {
          return () => (
            <FormSection>
              <FormItem prop="name">
                <Input />
              </FormItem>
            </FormSection>
          )
        },
      })

      expect(console.warn).toHaveBeenCalled()
    })
  })

  describe('validate', () => {
    it('should only validate fields within section', async () => {
      const form = reactive({
        insideName: '',
        outsideName: '',
      })

      const rules = {
        insideName: [
          {
            required: true,
            message: 'Inside name is required',
            trigger: 'blur',
          },
        ],
        outsideName: [
          {
            required: true,
            message: 'Outside name is required',
            trigger: 'blur',
          },
        ],
      }

      const wrapper = mount({
        setup() {
          return () => (
            <Form model={form} rules={rules}>
              <FormSection ref="section">
                <FormItem prop="insideName" ref="insideItem">
                  <Input v-model={form.insideName} />
                </FormItem>
              </FormSection>
              <FormItem prop="outsideName" ref="outsideItem">
                <Input v-model={form.outsideName} />
              </FormItem>
            </Form>
          )
        },
      })

      await nextTick()

      const section = wrapper.findComponent({ ref: 'section' })
        .vm as FormSectionInstance
      const insideItem = wrapper.findComponent({ ref: 'insideItem' })
        .vm as FormItemInstance
      const outsideItem = wrapper.findComponent({ ref: 'outsideItem' })
        .vm as FormItemInstance

      // Validate section only
      await section.validate().catch(() => undefined)
      await nextTick()

      // Inside field should have error
      expect(insideItem.validateMessage).toBe('Inside name is required')
      // Outside field should not be validated
      expect(outsideItem.validateMessage).toBe('')
    })

    it('should return true when validation succeeds', async () => {
      const form = reactive({
        name: 'test',
      })

      const rules = {
        name: [
          { required: true, message: 'Name is required', trigger: 'blur' },
        ],
      }

      const wrapper = mount({
        setup() {
          return () => (
            <Form model={form} rules={rules}>
              <FormSection ref="section">
                <FormItem prop="name">
                  <Input v-model={form.name} />
                </FormItem>
              </FormSection>
            </Form>
          )
        },
      })

      await nextTick()

      const section = wrapper.findComponent({ ref: 'section' })
        .vm as FormSectionInstance
      const result = await section.validate()

      expect(result).toBe(true)
    })

    it('should reject when validation fails', async () => {
      const form = reactive({
        name: '',
      })

      const rules = {
        name: [
          { required: true, message: 'Name is required', trigger: 'blur' },
        ],
      }

      const wrapper = mount({
        setup() {
          return () => (
            <Form model={form} rules={rules}>
              <FormSection ref="section">
                <FormItem prop="name">
                  <Input v-model={form.name} />
                </FormItem>
              </FormSection>
            </Form>
          )
        },
      })

      await nextTick()

      const section = wrapper.findComponent({ ref: 'section' })
        .vm as FormSectionInstance

      await expect(section.validate()).rejects.toHaveProperty('name')
    })

    it('should support callback form of validation', async () => {
      const form = reactive({
        name: 'test',
      })

      const rules = {
        name: [
          { required: true, message: 'Name is required', trigger: 'blur' },
        ],
      }

      const wrapper = mount({
        setup() {
          return () => (
            <Form model={form} rules={rules}>
              <FormSection ref="section">
                <FormItem prop="name">
                  <Input v-model={form.name} />
                </FormItem>
              </FormSection>
            </Form>
          )
        },
      })

      await nextTick()

      const section = wrapper.findComponent({ ref: 'section' })
        .vm as FormSectionInstance
      const callback = vi.fn()

      await section.validate(callback)
      await rAF()

      expect(callback).toHaveBeenCalledWith(true)
    })
  })

  describe('resetFields', () => {
    it('should only reset fields within section', async () => {
      vi.useFakeTimers()
      const form = reactive({
        insideName: '',
        outsideName: '',
      })

      const wrapper = mount({
        setup() {
          return () => (
            <Form model={form}>
              <FormSection ref="section">
                <FormItem prop="insideName">
                  <Input v-model={form.insideName} />
                </FormItem>
              </FormSection>
              <FormItem prop="outsideName">
                <Input v-model={form.outsideName} />
              </FormItem>
            </Form>
          )
        },
      })

      await nextTick()

      // Modify both fields
      form.insideName = 'inside value'
      form.outsideName = 'outside value'
      await nextTick()

      const section = wrapper.findComponent({ ref: 'section' })
        .vm as FormSectionInstance

      // Reset section only
      section.resetFields()
      await nextTick()
      vi.runAllTimers()
      await nextTick()

      // Inside field should be reset
      expect(form.insideName).toBe('')
      // Outside field should keep its value
      expect(form.outsideName).toBe('outside value')

      vi.useRealTimers()
    })
  })

  describe('clearValidate', () => {
    it('should only clear validation for fields within section', async () => {
      const form = reactive({
        insideName: '',
        outsideName: '',
      })

      const rules = {
        insideName: [
          {
            required: true,
            message: 'Inside name is required',
            trigger: 'blur',
          },
        ],
        outsideName: [
          {
            required: true,
            message: 'Outside name is required',
            trigger: 'blur',
          },
        ],
      }

      const wrapper = mount({
        setup() {
          return () => (
            <Form model={form} rules={rules}>
              <FormSection ref="section">
                <FormItem prop="insideName" ref="insideItem">
                  <Input v-model={form.insideName} />
                </FormItem>
              </FormSection>
              <FormItem prop="outsideName" ref="outsideItem">
                <Input v-model={form.outsideName} />
              </FormItem>
            </Form>
          )
        },
      })

      await nextTick()

      const formRef = wrapper.findComponent(Form).vm as FormInstance
      const section = wrapper.findComponent({ ref: 'section' })
        .vm as FormSectionInstance
      const insideItem = wrapper.findComponent({ ref: 'insideItem' })
        .vm as FormItemInstance
      const outsideItem = wrapper.findComponent({ ref: 'outsideItem' })
        .vm as FormItemInstance

      // Validate entire form to trigger errors
      await formRef.validate().catch(() => undefined)
      await nextTick()

      expect(insideItem.validateMessage).toBe('Inside name is required')
      expect(outsideItem.validateMessage).toBe('Outside name is required')

      // Clear validation for section only
      section.clearValidate()
      await nextTick()

      // Inside field should be cleared
      expect(insideItem.validateMessage).toBe('')
      // Outside field should still have error
      expect(outsideItem.validateMessage).toBe('Outside name is required')
    })
  })

  describe('event bubbling', () => {
    it('should emit validate event on both section and form', async () => {
      const form = reactive({
        name: 'test',
      })

      const rules = {
        name: [
          { required: true, message: 'Name is required', trigger: 'blur' },
        ],
      }

      const formValidateHandler = vi.fn()
      const sectionValidateHandler = vi.fn()

      const wrapper = mount({
        setup() {
          return () => (
            <Form model={form} rules={rules} onValidate={formValidateHandler}>
              <FormSection ref="section" onValidate={sectionValidateHandler}>
                <FormItem prop="name">
                  <Input v-model={form.name} />
                </FormItem>
              </FormSection>
            </Form>
          )
        },
      })

      await nextTick()

      const section = wrapper.findComponent({ ref: 'section' })
        .vm as FormSectionInstance
      await section.validate()
      await rAF()

      // Both handlers should be called
      expect(sectionValidateHandler).toHaveBeenCalledWith('name', true, '')
      expect(formValidateHandler).toHaveBeenCalledWith('name', true, '')
    })
  })

  describe('multiple sections', () => {
    it('should handle multiple sections independently', async () => {
      const form = reactive({
        section1Name: '',
        section2Name: '',
      })

      const rules = {
        section1Name: [
          {
            required: true,
            message: 'Section1 name is required',
            trigger: 'blur',
          },
        ],
        section2Name: [
          {
            required: true,
            message: 'Section2 name is required',
            trigger: 'blur',
          },
        ],
      }

      const wrapper = mount({
        setup() {
          return () => (
            <Form model={form} rules={rules}>
              <FormSection ref="section1">
                <FormItem prop="section1Name" ref="section1Item">
                  <Input v-model={form.section1Name} />
                </FormItem>
              </FormSection>
              <FormSection ref="section2">
                <FormItem prop="section2Name" ref="section2Item">
                  <Input v-model={form.section2Name} />
                </FormItem>
              </FormSection>
            </Form>
          )
        },
      })

      await nextTick()

      const section1 = wrapper.findComponent({ ref: 'section1' })
        .vm as FormSectionInstance
      const section2 = wrapper.findComponent({ ref: 'section2' })
        .vm as FormSectionInstance
      const section1Item = wrapper.findComponent({ ref: 'section1Item' })
        .vm as FormItemInstance
      const section2Item = wrapper.findComponent({ ref: 'section2Item' })
        .vm as FormItemInstance

      // Validate section1 only
      await section1.validate().catch(() => undefined)
      await nextTick()

      expect(section1Item.validateMessage).toBe('Section1 name is required')
      expect(section2Item.validateMessage).toBe('')

      // Clear section1 and validate section2
      section1.clearValidate()
      await section2.validate().catch(() => undefined)
      await nextTick()

      expect(section1Item.validateMessage).toBe('')
      expect(section2Item.validateMessage).toBe('Section2 name is required')
    })
  })

  describe('dynamic fields', () => {
    it('should handle dynamically added fields', async () => {
      const form = reactive({
        name: '',
        email: '',
      })

      const rules = {
        name: [
          { required: true, message: 'Name is required', trigger: 'blur' },
        ],
        email: [
          { required: true, message: 'Email is required', trigger: 'blur' },
        ],
      }

      const showEmail = ref(false)

      const wrapper = mount({
        setup() {
          return () => (
            <Form model={form} rules={rules}>
              <FormSection ref="section">
                <FormItem prop="name" ref="nameItem">
                  <Input v-model={form.name} />
                </FormItem>
                {showEmail.value && (
                  <FormItem prop="email" ref="emailItem">
                    <Input v-model={form.email} />
                  </FormItem>
                )}
              </FormSection>
            </Form>
          )
        },
      })

      await nextTick()

      const section = wrapper.findComponent({ ref: 'section' })
        .vm as FormSectionInstance

      // Validate with only name field
      await section.validate().catch(() => undefined)
      await nextTick()

      const nameItem = wrapper.findComponent({ ref: 'nameItem' })
        .vm as FormItemInstance
      expect(nameItem.validateMessage).toBe('Name is required')

      // Add email field
      showEmail.value = true
      await nextTick()

      // Clear and validate again
      section.clearValidate()
      await section.validate().catch(() => undefined)
      await nextTick()

      const emailItem = wrapper.findComponent({ ref: 'emailItem' })
        .vm as FormItemInstance
      expect(nameItem.validateMessage).toBe('Name is required')
      expect(emailItem.validateMessage).toBe('Email is required')
    })
  })
})
