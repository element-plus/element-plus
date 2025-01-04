import { nextTick, ref } from 'vue'
import { mount } from '@vue/test-utils'
import { describe, expect, test, vi } from 'vitest'
import { ComponentSize, EVENT_CODE } from '@element-plus/constants'
import { InputTagInstance } from '@element-plus/element-plus'
import FormItem from '@element-plus/components/form/src/form-item.vue'
import InputTag from '../src/input-tag.vue'

const AXIOM = 'Rem is the best girl'

describe('InputTag.vue', () => {
  test('create', () => {
    const wrapper = mount(() => <InputTag />)

    expect(wrapper.find('input').exists()).toBe(true)
  })

  test('modelValue', async () => {
    const wrapper = mount(() => <InputTag modelValue={[AXIOM]} />)

    const tags = wrapper.findAll('.el-tag')

    expect(tags.length).toBe(1)
    expect(tags[0].text()).toBe(AXIOM)
    expect(wrapper.find('.el-tag__close').exists()).toBe(true)
  })

  test('v-model', async () => {
    const inputValue = ref<string[]>()
    const wrapper = mount(() => <InputTag v-model={inputValue.value} />)

    await wrapper.find('input').setValue(AXIOM)
    await wrapper.find('input').trigger('keydown', { code: EVENT_CODE.enter })
    expect(wrapper.findAll('.el-tag').length).toBe(1)
    expect(wrapper.find('.el-tag').text()).toBe(AXIOM)
    expect(inputValue.value).toEqual([AXIOM])

    await wrapper.find('input').setValue('--')
    await wrapper.find('input').trigger('keydown', { code: EVENT_CODE.enter })
    expect(wrapper.findAll('.el-tag').length).toBe(2)
    expect(wrapper.findAll('.el-tag')[1].text()).toBe('--')
    expect(inputValue.value).toEqual([AXIOM, '--'])

    await wrapper
      .find('input')
      .trigger('keydown', { code: EVENT_CODE.backspace })
    expect(wrapper.findAll('.el-tag').length).toBe(1)
    expect(wrapper.find('.el-tag').text()).toBe(AXIOM)
    expect(inputValue.value).toEqual([AXIOM])

    await wrapper.find('.el-tag__close').trigger('click')
    expect(wrapper.findAll('.el-tag').length).toBe(0)
  })

  test('trigger', async () => {
    const inputValue = ref<string[]>()
    const wrapper = mount(() => (
      <InputTag v-model={inputValue.value} trigger="Space" />
    ))

    await wrapper.find('input').setValue(AXIOM)
    await wrapper.find('input').trigger('keydown', { code: EVENT_CODE.enter })
    expect(wrapper.findAll('.el-tag').length).toBe(0)

    await wrapper.find('input').trigger('keydown', { code: EVENT_CODE.space })
    expect(wrapper.findAll('.el-tag').length).toBe(1)
    expect(wrapper.find('.el-tag').text()).toBe(AXIOM)
  })

  test('max', async () => {
    const inputValue = ref<string[]>(['Rem'])
    const wrapper = mount(() => <InputTag v-model={inputValue.value} max={1} />)

    expect(wrapper.findAll('.el-tag').length).toBe(1)

    await wrapper.find('input').setValue(AXIOM)
    await wrapper.find('input').trigger('keydown', { code: EVENT_CODE.enter })
    expect(wrapper.findAll('.el-tag').length).toBe(1)
  })

  test('id', async () => {
    const wrapper = await mount(() => <InputTag id="input-tag" />)

    expect(wrapper.find('input').attributes('id')).toBe('input-tag')
  })

  test('size', async () => {
    const size = ref<ComponentSize>('default')
    const wrapper = mount(() => (
      <InputTag modelValue={[AXIOM]} size={size.value} />
    ))

    expect(wrapper.find('.el-input-tag').classes()).toContain(
      'el-input-tag--default'
    )
    expect(wrapper.find('.el-tag').classes()).toContain('el-tag--default')

    size.value = 'large'
    await nextTick()
    expect(wrapper.find('.el-input-tag').classes()).toContain(
      'el-input-tag--large'
    )
    expect(wrapper.find('.el-tag').classes()).toContain('el-tag--default')

    size.value = 'small'
    await nextTick()
    expect(wrapper.find('.el-input-tag').classes()).toContain(
      'el-input-tag--small'
    )
    expect(wrapper.find('.el-tag').classes()).toContain('el-tag--small')
  })

  test('disabled', async () => {
    const disabled = ref(true)
    const wrapper = mount(() => (
      <InputTag modelValue={[AXIOM]} disabled={disabled.value} />
    ))

    expect(wrapper.find('input').attributes('disabled')).toBe('')
    expect(wrapper.find('.el-tag__close').exists()).toBe(false)

    disabled.value = false
    await nextTick()
    expect(wrapper.find('input').attributes('disabled')).toBe(undefined)
    expect(wrapper.find('.el-tag__close').exists()).toBe(true)
  })

  test('placeholder', async () => {
    const inputValue = ref<string[]>()
    const wrapper = mount(() => (
      <InputTag v-model={inputValue.value} placeholder={AXIOM} />
    ))

    expect(wrapper.find('input').element.placeholder).toMatchInlineSnapshot(
      `"${AXIOM}"`
    )

    await wrapper.find('input').setValue('Rem')
    await wrapper.find('input').trigger('keydown', { code: EVENT_CODE.enter })
    expect(wrapper.find('input').element.placeholder).toMatchInlineSnapshot(
      `""`
    )
  })

  test('readonly', async () => {
    const readonly = ref(true)
    const wrapper = mount(() => (
      <InputTag modelValue={[AXIOM]} readonly={readonly.value} />
    ))

    expect(wrapper.find('input').attributes('readonly')).toBe('')
    expect(wrapper.find('.el-tag__close').exists()).toBe(false)

    readonly.value = false
    await nextTick()
    expect(wrapper.find('input').attributes('readonly')).toBe(undefined)
    expect(wrapper.find('.el-tag__close').exists()).toBe(true)
  })

  test('clearable', async () => {
    const inputValue = ref<string[]>([AXIOM])
    const wrapper = mount(() => (
      <InputTag v-model={inputValue.value} clearable />
    ))

    await wrapper.find('input').trigger('focus')
    await wrapper.find('input').setValue(AXIOM)
    expect(wrapper.find('.el-input-tag__clear').exists()).toBe(true)
    expect(wrapper.find('input').element).toHaveProperty('value', AXIOM)

    await wrapper.find('.el-input-tag__clear').trigger('click')
    expect(wrapper.findAll('.el-tag').length).toBe(0)
    expect(inputValue.value).toBe(undefined)
    expect(wrapper.find('input').element).toHaveProperty('value', '')
  })

  test('tabindex', async () => {
    const wrapper = mount(() => <InputTag tabindex={1} />)

    expect(wrapper.find('input').attributes('tabindex')).toBe('1')
  })

  test('autofocus', async () => {
    const wrapper = mount(() => <InputTag autofocus />)

    expect(wrapper.find('input').attributes('autofocus')).toBe('')
  })

  test('tagType', async () => {
    const type = ref<'primary' | 'success' | 'info' | 'warning' | 'danger'>()
    const wrapper = mount(() => (
      <InputTag modelValue={[AXIOM]} tagType={type.value} />
    ))

    expect(wrapper.find('.el-tag').classes()).toContain('el-tag--info')

    type.value = 'primary'
    await nextTick()
    expect(wrapper.find('.el-tag').classes()).toContain(`el-tag--primary`)

    type.value = 'success'
    await nextTick()
    expect(wrapper.find('.el-tag').classes()).toContain(`el-tag--success`)

    type.value = 'warning'
    await nextTick()
    expect(wrapper.find('.el-tag').classes()).toContain(`el-tag--warning`)

    type.value = 'danger'
    await nextTick()
    expect(wrapper.find('.el-tag').classes()).toContain(`el-tag--danger`)
  })

  test('tagEffect', async () => {
    const effect = ref<'dark' | 'light'>()
    const wrapper = mount(() => (
      <InputTag modelValue={[AXIOM]} tagEffect={effect.value} />
    ))

    expect(wrapper.find('.el-tag').classes()).toContain('el-tag--light')

    effect.value = 'dark'
    await nextTick()
    expect(wrapper.find('.el-tag').classes()).toContain(`el-tag--dark`)
  })

  test('$attrs', async () => {
    const wrapper = mount(() => <InputTag data-test="input-tag" />)

    expect(wrapper.find('input').attributes('data-test')).toBe('input-tag')
  })

  describe('events', () => {
    test('focus', async () => {
      const handleFocus = vi.fn()
      const wrapper = mount(() => <InputTag onFocus={handleFocus} />)

      await wrapper.find('input').trigger('focus')
      expect(handleFocus).toHaveBeenCalledOnce()
    })

    test('blur', async () => {
      const handleBlur = vi.fn()
      const wrapper = mount(() => <InputTag onBlur={handleBlur} />)

      await wrapper.find('input').trigger('blur')
      expect(handleBlur).toHaveBeenCalledOnce()
    })

    test('update:modelValue', async () => {
      const handleModelValue = vi.fn()
      const inputValue = ref<string[]>()
      const wrapper = mount(() => (
        <InputTag
          v-model={inputValue.value}
          onUpdate:modelValue={handleModelValue}
        />
      ))

      await wrapper.find('input').setValue(AXIOM)
      await wrapper.find('input').trigger('keydown', { code: EVENT_CODE.enter })
      expect(handleModelValue).toHaveBeenCalledOnce()
      expect(handleModelValue).toHaveBeenCalledWith([AXIOM])

      await wrapper
        .find('input')
        .trigger('keydown', { code: EVENT_CODE.backspace })
      expect(handleModelValue).toHaveBeenCalledTimes(2)
      expect(handleModelValue).toHaveBeenCalledWith([])
    })

    test('change', async () => {
      const handleChange = vi.fn()
      const inputValue = ref<string[]>()
      const wrapper = mount(() => (
        <InputTag v-model={inputValue.value} onChange={handleChange} />
      ))

      await wrapper.find('input').setValue(AXIOM)
      await wrapper.find('input').trigger('keydown', { code: EVENT_CODE.enter })
      expect(handleChange).toHaveBeenCalledOnce()
      expect(handleChange).toHaveBeenCalledWith([AXIOM])

      await wrapper
        .find('input')
        .trigger('keydown', { code: EVENT_CODE.backspace })
      expect(handleChange).toHaveBeenCalledTimes(2)
      expect(handleChange).toHaveBeenCalledWith([])
    })

    test('input', async () => {
      const handleInput = vi.fn()
      const wrapper = mount(() => <InputTag onInput={handleInput} />)

      await wrapper.find('input').setValue(AXIOM)
      expect(handleInput).toHaveBeenCalledOnce()
      expect(handleInput).toHaveBeenCalledWith(AXIOM)
    })

    test('add-tag', async () => {
      const handleTagAdd = vi.fn()
      const inputValue = ref<string[]>()
      const wrapper = mount(() => (
        <InputTag v-model={inputValue.value} onAdd-tag={handleTagAdd} />
      ))

      await wrapper.find('input').setValue(AXIOM)
      await wrapper.find('input').trigger('keydown', { code: EVENT_CODE.enter })
      expect(handleTagAdd).toHaveBeenCalledOnce()
      expect(handleTagAdd).toHaveBeenCalledWith(AXIOM)
    })

    test('remove-tag', async () => {
      const handleTagRemove = vi.fn()
      const inputValue = ref<string[]>([AXIOM, AXIOM])
      const wrapper = mount(() => (
        <InputTag v-model={inputValue.value} onRemove-tag={handleTagRemove} />
      ))

      await wrapper.find('.el-tag__close').trigger('click')
      expect(handleTagRemove).toHaveBeenCalledOnce()
      expect(handleTagRemove).toHaveBeenCalledWith(AXIOM)
      expect(inputValue.value).toEqual([AXIOM])

      await wrapper
        .find('input')
        .trigger('keydown', { code: EVENT_CODE.backspace })
      expect(handleTagRemove).toHaveBeenCalledTimes(2)
      expect(handleTagRemove).toHaveBeenCalledWith(AXIOM)
      expect(inputValue.value).toEqual([])

      await wrapper
        .find('input')
        .trigger('keydown', { code: EVENT_CODE.backspace })
      expect(handleTagRemove).toHaveBeenCalledTimes(2)
    })

    test('clear', async () => {
      const handleClear = vi.fn()
      const inputValue = ref<string[]>([AXIOM])
      const wrapper = mount(() => (
        <InputTag v-model={inputValue.value} clearable onClear={handleClear} />
      ))

      await wrapper.find('input').trigger('focus')
      await wrapper.find('.el-input-tag__clear').trigger('click')
      expect(handleClear).toHaveBeenCalledOnce()
      expect(inputValue.value).toBe(undefined)
    })
  })

  describe('slots', () => {
    test('prefix', async () => {
      const wrapper = mount(() => (
        <InputTag v-slots={{ prefix: () => AXIOM }} />
      ))

      expect(wrapper.find('.el-input-tag__prefix').text()).toBe(AXIOM)
    })

    test('suffix', async () => {
      const wrapper = mount(() => (
        <InputTag v-slots={{ suffix: () => AXIOM }} />
      ))

      expect(wrapper.find('.el-input-tag__suffix').text()).toBe(AXIOM)
    })

    test('tag', async () => {
      const wrapper = mount(() => (
        <InputTag
          modelValue={[AXIOM]}
          v-slots={{ tag: ({ value }: { value: string }) => `-${value}-` }}
        />
      ))

      expect(wrapper.find('.el-tag').text()).toBe(`-${AXIOM}-`)
    })
  })

  describe('methods', () => {
    test('focus & blur', async () => {
      const inputTagRef = ref<InputTagInstance>()
      mount(() => <InputTag ref={inputTagRef} />)

      expect(inputTagRef.value?.focus).toBeDefined()
      expect(inputTagRef.value?.blur).toBeDefined()
    })
  })

  describe('use with form', () => {
    test('automatic id attachment', async () => {
      const wrapper = mount(() => (
        <FormItem label="label" data-test-ref="item">
          <InputTag data-test-ref="input" />
        </FormItem>
      ))

      await nextTick()
      const formItem = wrapper.find('[data-test-ref="item"]')
      const input = wrapper.find('[data-test-ref="input"]')
      const formItemLabel = formItem.find('.el-form-item__label')
      expect(formItem.attributes().role).toBeFalsy()
      expect(formItemLabel.attributes().for).toBe(input.attributes().id)
    })

    test('specified id attachment', async () => {
      const wrapper = mount(() => (
        <FormItem label="label" data-test-ref="item">
          <InputTag id="input-tag" data-test-ref="input" />
        </FormItem>
      ))

      await nextTick()
      const formItem = wrapper.find('[data-test-ref="item"]')
      const input = wrapper.find('[data-test-ref="input"]')
      const formItemLabel = formItem.find('.el-form-item__label')
      expect(formItem.attributes().role).toBeFalsy()
      expect(input.attributes().id).toBe('input-tag')
      expect(formItemLabel.attributes().for).toBe(input.attributes().id)
    })
  })
})
