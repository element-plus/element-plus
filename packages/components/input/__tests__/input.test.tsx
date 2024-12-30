import { nextTick, ref } from 'vue'
import { mount } from '@vue/test-utils'
import { afterEach, describe, expect, test, vi } from 'vitest'
import defineGetter from '@element-plus/test-utils/define-getter'
import { ElFormItem as FormItem } from '@element-plus/components/form'
import Input from '../src/input.vue'
import type { CSSProperties } from 'vue'
import type { InputAutoSize, InputProps } from '../src/input'
import type { InputInstance } from '../src/instance'

describe('Input.vue', () => {
  afterEach(() => {
    vi.restoreAllMocks()
  })

  test('create', async () => {
    const input = ref('input')
    const handleFocus = vi.fn()
    const wrapper = mount(() => (
      <Input
        minlength={3}
        maxlength={5}
        placeholder="请输入内容"
        onFocus={handleFocus}
        modelValue={input.value}
      />
    ))

    const inputElm = wrapper.find('input')
    const nativeInput = inputElm.element

    await inputElm.trigger('focus')

    expect(inputElm.exists()).toBe(true)
    expect(handleFocus).toHaveBeenCalled()
    expect(nativeInput.placeholder).toMatchInlineSnapshot(`"请输入内容"`)
    expect(nativeInput.value).toMatchInlineSnapshot(`"input"`)
    expect(nativeInput.minLength).toMatchInlineSnapshot(`3`)

    input.value = 'text'
    await nextTick()
    expect(inputElm.element.value).toMatchInlineSnapshot(`"text"`)
  })

  test('default to empty', () => {
    const wrapper = mount(() => <Input />)
    const inputElm = wrapper.find('input')
    expect(inputElm.element.value).toBe('')
  })

  test('disabled', async () => {
    const wrapper = mount(() => <Input disabled />)
    const inputElm = wrapper.find('input')
    expect(inputElm.element.disabled).not.toBeNull()

    // trigger click should not focus #18012
    inputElm.trigger('click')
    await nextTick()
    expect(inputElm.element.className.includes('is-focus')).toBe(false)
  })

  describe('test emoji', () => {
    test('el-input should minimize value between emoji length and maxLength', async () => {
      const inputVal = ref('12🌚')
      const wrapper = mount(() => (
        <Input
          class="test-exceed"
          maxlength="4"
          showWordLimit
          v-model={inputVal.value}
        />
      ))
      const vm = wrapper.vm
      const inputElm = wrapper.find('input')
      const nativeInput = inputElm.element
      expect(nativeInput.value).toMatchInlineSnapshot(`"12🌚"`)

      const elCount = wrapper.find('.el-input__count-inner')
      expect(elCount.exists()).toBe(true)
      expect(elCount.text()).toMatchInlineSnapshot(`"4 / 4"`)

      inputVal.value = '1👌3😄'
      await nextTick()
      expect(nativeInput.value).toMatchInlineSnapshot(`"1👌3😄"`)
      expect(elCount.text()).toMatchInlineSnapshot(`"6 / 4"`)

      inputVal.value = '哈哈1👌3😄'
      await nextTick()
      expect(nativeInput.value).toMatchInlineSnapshot(`"哈哈1👌3😄"`)
      expect(elCount.text()).toMatchInlineSnapshot(`"8 / 4"`)
      expect(Array.from(vm.$el.classList)).toMatchInlineSnapshot(`
        [
          "el-input",
          "is-exceed",
          "test-exceed",
        ]
      `)
    })

    test('textarea should minimize value between emoji length and maxLength', async () => {
      const inputVal = ref('啊好😄')
      const wrapper = mount(() => (
        <Input
          type="textarea"
          maxlength="4"
          showWordLimit
          v-model={inputVal.value}
        />
      ))
      const vm = wrapper.vm
      const inputElm = wrapper.find('textarea')
      const nativeInput = inputElm.element
      expect(nativeInput.value).toMatchInlineSnapshot(`"啊好😄"`)

      const elCount = wrapper.find('.el-input__count')
      expect(elCount.exists()).toBe(true)
      expect(elCount.text()).toMatchInlineSnapshot(`"4 / 4"`)

      inputVal.value = '哈哈1👌3😄'
      await nextTick()
      expect(nativeInput.value).toMatchInlineSnapshot(`"哈哈1👌3😄"`)
      expect(elCount.text()).toMatchInlineSnapshot(`"8 / 4"`)
      expect(Array.from(vm.$el.classList)).toMatchInlineSnapshot(`
        [
          "el-textarea",
          "is-exceed",
        ]
      `)
    })
  })

  test('suffixIcon', () => {
    const wrapper = mount(() => <Input suffix-icon="time" />)
    const icon = wrapper.find('.el-input__icon')
    expect(icon.exists()).toBe(true)
  })

  test('prefixIcon', () => {
    const wrapper = mount(() => <Input prefix-icon="time" />)
    const icon = wrapper.find('.el-input__icon')
    expect(icon.exists()).toBe(true)
  })

  test('size', () => {
    const wrapper = mount(() => <Input size="large" />)
    expect(wrapper.classes('el-input--large')).toBe(true)
  })

  test('type', () => {
    const wrapper = mount(() => <Input type="textarea" />)
    expect(wrapper.classes('el-textarea')).toBe(true)
  })

  test('rows', () => {
    const wrapper = mount(() => {
      return <Input type="textarea" rows={3} />
    })
    expect(wrapper.find('textarea').element.rows).toEqual(3)
  })

  test('resize', async () => {
    const resize = ref<InputProps['resize']>('none')
    const wrapper = mount(() => <Input type="textarea" resize={resize.value} />)
    const textarea = wrapper.find('textarea').element
    await nextTick()
    expect(textarea.style.resize).toEqual(resize.value)
    resize.value = 'horizontal'
    await nextTick()
    expect(textarea.style.resize).toEqual(resize.value)
  })

  test('sets value on textarea / input type change', async () => {
    const type = ref('text')
    const val = ref('123')

    const wrapper = mount(() => <Input type={type.value} v-model={val.value} />)
    const vm = wrapper.vm
    expect(vm.$el.querySelector('input').value).toMatchInlineSnapshot(`"123"`)
    type.value = 'textarea'
    await nextTick()
    await nextTick()

    expect(vm.$el.querySelector('textarea').value).toMatchInlineSnapshot(
      `"123"`
    )
    type.value = 'password'
    await nextTick()
    await nextTick()

    expect(vm.$el.querySelector('input').value).toMatchInlineSnapshot(`"123"`)
  })

  test('limit input and show word count', async () => {
    const input1 = ref('')
    const input2 = ref('')
    const input3 = ref('')
    const input4 = ref('exceed')
    const show = ref(false)

    const wrapper = mount(() => (
      <div>
        <Input
          class="test-text"
          type="text"
          v-model={input1.value}
          maxlength="10"
          showWordLimit={show.value}
        />
        <Input
          class="test-textarea"
          type="textarea"
          v-model={input2.value}
          maxlength="10"
          showWordLimit
        />
        <Input
          class="test-password"
          type="password"
          v-model={input3.value}
          maxlength="10"
          showWordLimit
        />
        <Input
          class="test-initial-exceed"
          type="text"
          v-model={input4.value}
          maxlength="2"
          showWordLimit
        />
      </div>
    ))

    const inputElm1 = wrapper.vm.$el.querySelector('.test-text')
    const inputElm2 = wrapper.vm.$el.querySelector('.test-textarea')
    const inputElm3 = wrapper.vm.$el.querySelector('.test-password')
    const inputElm4 = wrapper.vm.$el.querySelector('.test-initial-exceed')

    expect(inputElm1.querySelectorAll('.el-input__count').length).toEqual(0)
    expect(inputElm2.querySelectorAll('.el-input__count').length).toEqual(1)
    expect(inputElm3.querySelectorAll('.el-input__count').length).toEqual(0)
    expect(Array.from(inputElm4.classList)).toMatchInlineSnapshot(`
      [
        "el-input",
        "is-exceed",
        "test-initial-exceed",
      ]
    `)

    show.value = true
    await nextTick()
    expect(inputElm1.querySelectorAll('.el-input__count').length).toEqual(1)

    input4.value = '1'
    await nextTick()
    expect(Array.from(inputElm4.classList)).toMatchInlineSnapshot(`
      [
        "el-input",
        "test-initial-exceed",
      ]
    `)
  })

  test('use formatter and parser', () => {
    const val = ref('10000')
    const formatter = (val: string) => {
      return val.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    }
    const parser = (val: string) => {
      return val.replace(/\$\s?|(,*)/g, '')
    }

    const wrapper = mount(() => (
      <Input v-model={val.value} formatter={formatter} parser={parser} />
    ))

    const vm = wrapper.vm
    const event = new Event('input', { bubbles: true })
    expect(vm.$el.querySelector('input').value).toEqual('10,000')
    expect(vm.$el.querySelector('input').value).not.toEqual('1000')
    vm.$el.querySelector('input').value = '1,000,000'
    vm.$el.querySelector('input').dispatchEvent(event)
    expect(val.value).toEqual('1000000')
  })

  describe('Input Methods', () => {
    test('method:select', async () => {
      const testContent = ref('test')
      const wrapper = mount(() => <Input v-model={testContent.value} />)

      const input = wrapper.find('input').element
      // mock selectionRange behaviour, due to jsdom's reason this case cannot run well, may be fixed later using headlesschrome or puppeteer
      let selected = false
      defineGetter(input, 'selectionStart', function (this: HTMLInputElement) {
        return selected ? 0 : this.value.length
      })
      defineGetter(input, 'selectionEnd', function (this: HTMLInputElement) {
        return this.value.length
      })

      expect(input.selectionStart).toEqual(testContent.value.length)
      expect(input.selectionEnd).toEqual(testContent.value.length)

      input.select()
      selected = true
      await nextTick()
      expect(input.selectionStart).toEqual(0)
      expect(input.selectionEnd).toEqual(testContent.value.length)
    })

    test('method:resizeTextarea', async () => {
      const text = ref('TEXT:resizeTextarea')
      const wrapper = mount({
        setup: () => () =>
          (
            <Input
              ref="textarea"
              autosize={{ minRows: 1, maxRows: 1 }}
              type="textarea"
              v-model={text.value}
            />
          ),
      })
      const refTextarea = wrapper.vm.$refs.textarea as InputInstance

      const originMinHeight = (refTextarea.textareaStyle as CSSProperties)
        .minHeight
      ;(refTextarea.autosize as Exclude<InputAutoSize, boolean>).minRows = 5

      refTextarea.resizeTextarea()
      // After this textarea min-height (style)  will change
      const nowMinHeight = (refTextarea.textareaStyle as any)[1].minHeight
      expect(originMinHeight).not.toEqual(nowMinHeight)
    })
  })

  describe('Input Events', () => {
    const handleFocus = vi.fn()
    const handleBlur = vi.fn()

    test('event:focus', async () => {
      const content = ref('')
      const wrapper = mount(() => (
        <Input
          placeholder="请输入内容"
          modelValue={content.value}
          onFocus={handleFocus}
        />
      ))

      const input = wrapper.find('input')

      await input.trigger('focus')
      expect(handleFocus).toHaveBeenCalledOnce()
    })

    test('event:blur', async () => {
      const content = ref('')
      const wrapper = mount(() => (
        <Input
          placeholder="请输入内容"
          modelValue={content.value}
          onBlur={handleBlur}
        />
      ))

      const input = wrapper.find('input')

      await input.trigger('blur')
      expect(handleBlur).toHaveBeenCalledOnce()
    })

    test('textarea & event:focus', async () => {
      const content = ref('')
      const wrapper = mount(() => (
        <Input
          type="textarea"
          placeholder="请输入内容"
          modelValue={content.value}
          onFocus={handleFocus}
        />
      ))

      const input = wrapper.find('textarea')

      await input.trigger('focus')
      expect(handleFocus).toHaveBeenCalledOnce()
    })

    test('textarea & event:blur', async () => {
      const content = ref('')
      const wrapper = mount(() => (
        <Input
          type="textarea"
          placeholder="请输入内容"
          modelValue={content.value}
          onBlur={handleBlur}
        />
      ))

      const input = wrapper.find('textarea')

      await input.trigger('blur')
      expect(handleBlur).toBeCalled()
    })

    test('event:change', async () => {
      const content = ref('a')
      const value = ref('')

      const handleChange = (val: string) => {
        value.value = val
      }

      // NOTE: should be same as native's change behavior
      const wrapper = mount(() => (
        <Input
          placeholder="请输入内容"
          modelValue={content.value}
          onChange={handleChange}
        />
      ))

      const el = wrapper.find('input').element
      wrapper.vm
      const simulateEvent = (text: string, event: string) => {
        el.value = text
        el.dispatchEvent(new Event(event))
      }

      // simplified test, component should emit change when native does
      simulateEvent('2', 'change')
      await nextTick()
      expect(value.value).toBe('2')
      simulateEvent('1', 'input')
      await nextTick()
      expect(value.value).toBe('2')
    })

    test('event:clear', async () => {
      const handleClear = vi.fn()
      const handleInput = vi.fn()
      const content = ref('a')

      const wrapper = mount(() => (
        <Input
          placeholder="请输入内容"
          clearable
          v-model={content.value}
          onClear={handleClear}
          onInput={handleInput}
        />
      ))

      const input = wrapper.find('input')
      const vm = wrapper.vm
      // focus to show clear button
      await input.trigger('focus')
      await nextTick()
      vm.$el.querySelector('.el-input__clear').click()
      await nextTick()
      expect(content.value).toEqual('')
      expect(handleClear).toBeCalled()
      expect(handleInput).toBeCalled()
    })

    test('event:input', async () => {
      const handleInput = vi.fn()
      const content = ref('a')
      const wrapper = mount(() => (
        <Input
          placeholder="请输入内容"
          clearable
          modelValue={content.value}
          onInput={handleInput}
        />
      ))
      const inputWrapper = wrapper.find('input')
      const nativeInput = inputWrapper.element
      nativeInput.value = '1'
      await inputWrapper.trigger('compositionstart')
      await inputWrapper.trigger('input')
      nativeInput.value = '2'
      await inputWrapper.trigger('compositionupdate')
      await inputWrapper.trigger('input')
      await inputWrapper.trigger('compositionend')
      expect(handleInput).toBeCalledTimes(1)
      // native input value is controlled
      expect(content.value).toEqual('a')
      expect(nativeInput.value).toEqual('a')
    })
  })

  test('non-emit event such as keyup should work', async () => {
    const handleKeyup = vi.fn()
    const wrapper = mount(Input, {
      attrs: {
        onKeyup: handleKeyup,
      },
    })

    await wrapper.find('input').trigger('keyup')
    expect(handleKeyup).toBeCalledTimes(1)
  })

  test('input-style', async () => {
    const wrapper = mount(() => (
      <>
        <Input placeholder="请输入内容" input-style={{ color: 'red' }} />
        <Input
          placeholder="请输入内容"
          input-style={{ color: 'red' }}
          type="textarea"
        />
      </>
    ))

    const input = wrapper.find('input')
    const textarea = wrapper.find('textarea')
    await nextTick()
    expect(input.element.style.color === 'red').toBeTruthy()
    expect(textarea.element.style.color === 'red').toBeTruthy()
  })

  describe('Textarea Events', () => {
    test('event:keydown', async () => {
      const handleKeydown = vi.fn()
      const content = ref('')
      const wrapper = mount(() => (
        <Input
          type="textarea"
          modelValue={content.value}
          onKeydown={handleKeydown}
        />
      ))

      await wrapper.find('textarea').trigger('keydown')
      expect(handleKeydown).toBeCalledTimes(1)
    })
  })

  test('show-password icon', async () => {
    const password = ref('123456')
    const wrapper = mount(() => (
      <Input type="password" modelValue={password.value} show-password />
    ))

    const icon = wrapper.find('.el-input__icon.el-input__password')
    const d = icon.find('path').element.getAttribute('d')
    await icon.trigger('click')
    const d0 = icon.find('path').element.getAttribute('d')
    expect(d !== d0).toBeTruthy()
  })

  test('show / hide password', async () => {
    const password = ref('123456')
    const wrapper = mount(() => (
      <Input type="password" modelValue={password.value} show-password />
    ))

    const icon = wrapper.find('.el-input__icon.el-input__password')
    const input = wrapper.find('input')

    expect(input.element.value).toBe('123456')
    expect(input.element.selectionStart).toBe(6)
    expect(input.element.selectionEnd).toBe(6)

    await icon.trigger('click')
    expect(input.element.value).toBe('123456')
    expect(input.element.selectionStart).toBe(6)
    expect(input.element.selectionEnd).toBe(6)

    await input.element.setSelectionRange(1, 4)
    await icon.trigger('click')
    expect(input.element.selectionStart).toBe(1)
    expect(input.element.selectionEnd).toBe(4)
  })

  describe('form item accessibility integration', () => {
    test('automatic id attachment', async () => {
      const wrapper = mount(() => (
        <FormItem label="Foobar" data-test-ref="item">
          <Input data-test-ref="input" />
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
        <FormItem label="Foobar" data-test-ref="item">
          <Input id="foobar" data-test-ref="input" />
        </FormItem>
      ))

      await nextTick()
      const formItem = wrapper.find('[data-test-ref="item"]')
      const input = wrapper.find('[data-test-ref="input"]')
      const formItemLabel = formItem.find('.el-form-item__label')
      expect(formItem.attributes().role).toBeFalsy()
      expect(input.attributes().id).toBe('foobar')
      expect(formItemLabel.attributes().for).toBe(input.attributes().id)
    })

    test('form item role is group when multiple inputs', async () => {
      const wrapper = mount(() => (
        <FormItem label="Foobar" data-test-ref="item">
          <Input data-test-ref="input1" />
          <Input data-test-ref="input2" />
        </FormItem>
      ))

      await nextTick()
      const formItem = wrapper.find('[data-test-ref="item"]')
      expect(formItem.attributes().role).toBe('group')
    })
  })

  // TODO: validateEvent & input containes select cases should be added after the rest components finished
  // ...
})
