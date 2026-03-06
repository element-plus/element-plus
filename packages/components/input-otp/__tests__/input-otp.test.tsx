import { nextTick, ref } from 'vue'
import { mount } from '@vue/test-utils'
import { describe, expect, test, vi } from 'vitest'
import { EVENT_CODE } from '@element-plus/constants'
import InputOtp from '../src/input-otp.vue'

import type { InputOtpProps } from '../src/input-otp'
import type { InputOtpInstance } from '../src/instance'

describe('InputOtp.vue', () => {
  test('render with default props', () => {
    const wrapper = mount(() => <InputOtp />)
    expect(wrapper.findAll('input').length).toBe(6)
    expect(wrapper.classes()).toContain('el-input-otp')
    expect(wrapper.classes()).toContain('el-input-otp--default')
    expect(wrapper.classes()).toContain('el-input-otp--outlined')
  })

  test('render with custom length', () => {
    const wrapper = mount(() => <InputOtp length={4} />)
    expect(wrapper.findAll('input').length).toBe(4)
  })

  test('should clamp length between 4 and 8', async () => {
    const wrapper = mount(() => <InputOtp length={2} />)
    expect(wrapper.findAll('input').length).toBe(4)

    const wrapper2 = mount(() => <InputOtp length={10} />)
    expect(wrapper2.findAll('input').length).toBe(8)
  })

  test('should update when length changes', async () => {
    const length = ref(6)
    const modelValue = ref('123456')
    const wrapper = mount(() => (
      <InputOtp v-model={modelValue.value} length={length.value} />
    ))
    expect(wrapper.findAll('input').length).toBe(6)

    length.value = 4
    await nextTick()
    expect(wrapper.findAll('input').length).toBe(4)
    expect(modelValue.value).toBe('1234')

    length.value = 8
    await nextTick()
    expect(wrapper.findAll('input').length).toBe(8)
    expect(modelValue.value).toBe('1234')
  })

  test('type', async () => {
    const type = ref<InputOtpProps['type']>('filled')
    const wrapper = mount(() => <InputOtp type={type.value} />)
    await nextTick()
    expect(wrapper.classes()).toContain('el-input-otp--filled')
    type.value = 'outlined'
    await nextTick()
    expect(wrapper.classes()).toContain('el-input-otp--outlined')
    type.value = 'underlined'
    await nextTick()
    expect(wrapper.classes()).toContain('el-input-otp--underlined')
  })

  test('mask', async () => {
    const wrapper = mount(() => <InputOtp mask />)
    const input = wrapper.find('.el-input-otp__input')
    expect((input.element as HTMLInputElement).type).toBe('password')
  })

  test('render with custom size', async () => {
    const size = ref<InputOtpProps['size']>('default')
    const wrapper = mount(() => <InputOtp size={size.value} />)
    await nextTick()
    expect(wrapper.classes()).toContain('el-input-otp--default')
    size.value = 'large'
    await nextTick()
    expect(wrapper.classes()).toContain('el-input-otp--large')
    size.value = 'small'
    await nextTick()
    expect(wrapper.classes()).toContain('el-input-otp--small')
  })

  test('should work with disabled prop', () => {
    const wrapper = mount(() => <InputOtp disabled />)
    expect(wrapper.classes()).toContain('is-disabled')
    wrapper.findAll('input').forEach((input) => {
      expect(input.element.disabled).toBe(true)
    })
  })

  test('should work with readonly prop', () => {
    const wrapper = mount(() => <InputOtp readonly />)
    wrapper.findAll('input').forEach((input) => {
      expect(input.element.readOnly).toBe(true)
    })
  })

  test('v-model initial value', async () => {
    const wrapper = mount(() => <InputOtp modelValue="123" />)
    await nextTick()
    const inputs = wrapper.findAll('input')
    for (let i = 0; i < 6; i++) {
      expect(inputs[i].element.value).toBe(i < 3 ? `${i + 1}` : '')
    }
  })

  test('v-model update', async () => {
    const model = ref('')
    const wrapper = mount(() => <InputOtp v-model={model.value} />)

    const inputs = wrapper.findAll('input')
    await inputs[0].setValue('1')
    expect(model.value).toBe('1')

    await inputs[1].setValue('2')
    expect(model.value).toBe('12')
  })

  test('validator', async () => {
    const model = ref('')
    const validator = (char: string) => /^\d$/.test(char)
    const wrapper = mount(() => (
      <InputOtp v-model={model.value} validator={validator} />
    ))

    const inputs = wrapper.findAll('input')
    await inputs[0].setValue('a')
    expect(model.value).toBe('')

    await inputs[0].setValue('1')
    expect(model.value).toBe('1')
  })

  test('navigation with arrow keys', async () => {
    const wrapper = mount(() => <InputOtp />, {
      attachTo: document.body,
    })
    const inputs = wrapper.findAll('input')

    await inputs[2].trigger('focus')
    await inputs[2].trigger('keydown', { code: EVENT_CODE.down })
    expect(document.activeElement).toBe(inputs[3].element)
    await inputs[3].trigger('keydown', { code: EVENT_CODE.left })
    expect(document.activeElement).toBe(inputs[2].element)
    await inputs[2].trigger('keydown', { code: EVENT_CODE.up })
    expect(document.activeElement).toBe(inputs[1].element)
    await inputs[1].trigger('keydown', { code: EVENT_CODE.right })
    expect(document.activeElement).toBe(inputs[2].element)

    wrapper.unmount()
  })

  test('handle backspace', async () => {
    const model = ref('12')
    const wrapper = mount(() => <InputOtp v-model={model.value} />, {
      attachTo: document.body,
    })

    await nextTick()
    const inputs = wrapper.findAll('input')
    await inputs[1].trigger('focus')
    await inputs[1].trigger('keydown', { code: EVENT_CODE.backspace })
    expect(model.value).toBe('1')
    expect(document.activeElement).toBe(inputs[0].element)

    wrapper.unmount()
  })

  test('handle delete', async () => {
    const model = ref('123456')
    const wrapper = mount(() => <InputOtp v-model={model.value} />, {
      attachTo: document.body,
    })

    await nextTick()
    const inputs = wrapper.findAll('input')
    await inputs[1].trigger('focus')
    await inputs[1].trigger('keydown', { code: EVENT_CODE.delete })
    expect(model.value).toBe('13456')
    expect(document.activeElement).toBe(inputs[1].element)

    wrapper.unmount()
  })

  test('should auto focus next input', async () => {
    const wrapper = mount(() => <InputOtp />, {
      attachTo: document.body,
    })
    const inputs = wrapper.findAll('input')

    for (let i = 0; i < 6; i++) {
      await inputs[i].trigger('focus')
      await inputs[i].setValue(i)
      expect(document.activeElement).toBe(inputs[Math.min(i + 1, 5)].element)
    }

    await inputs[5].trigger('focus')
    await inputs[5].setValue(7)
    expect(document.activeElement).toBe(inputs[5].element)

    wrapper.unmount()
  })

  test('should fill from the first empty index', async () => {
    const model = ref('')
    const wrapper = mount(() => <InputOtp v-model={model.value} />)
    const inputs = wrapper.findAll('input')

    // Focus the 3rd input but type into it
    await inputs[2].setValue('1')

    expect(model.value).toBe('1')
    await nextTick()
    expect(inputs[0].element.value).toBe('1')
    expect(inputs[2].element.value).toBe('')
  })

  test('should ensure contiguous filling', async () => {
    const model = ref('12')
    const wrapper = mount(() => <InputOtp v-model={model.value} />)
    const inputs = wrapper.findAll('input')

    // Skip index 2, type in index 3
    await inputs[3].setValue('3')

    expect(model.value).toBe('123')
    await nextTick()
    expect(inputs[2].element.value).toBe('3')
    expect(inputs[3].element.value).toBe('')
  })

  describe('event', () => {
    test('should emit change event', async () => {
      const model = ref()
      const onChange = vi.fn()
      const wrapper = mount(() => (
        <InputOtp v-model={model.value} onChange={onChange} />
      ))
      const inputs = wrapper.findAll('input')

      await inputs[0].trigger('focus')
      for (let i = 0; i < 6; i++) {
        await inputs[i].setValue(i + 1)
      }

      expect(onChange).not.toHaveBeenCalled()
      await inputs[0].trigger('blur')
      expect(onChange).toHaveBeenCalled()
      expect(onChange).toHaveBeenCalledWith('123456')
    })

    test('should emit focus and blur event', async () => {
      const onFocus = vi.fn()
      const onBlur = vi.fn()
      const wrapper = mount(() => (
        <InputOtp onFocus={onFocus} onBlur={onBlur} />
      ))
      const inputs = wrapper.findAll('input')

      for (let i = 0; i < 6; i++) {
        await inputs[i].trigger('focus', {
          relatedTarget: inputs[i - 1]?.element ?? null,
        })
      }
      await inputs[5].trigger('blur')

      expect(onFocus).toHaveBeenCalledTimes(1)
      expect(onBlur).toHaveBeenCalledTimes(1)
    })

    test('should emit finish event', async () => {
      const onFinish = vi.fn()
      const wrapper = mount(() => <InputOtp onFinish={onFinish} />)
      const inputs = wrapper.findAll('input')

      for (let i = 0; i < 5; i++) {
        await inputs[i].setValue(i + 1)
      }
      expect(onFinish).not.toHaveBeenCalled()
      await inputs[5].setValue(6)

      expect(onFinish).toHaveBeenNthCalledWith(1, '123456')
    })
  })

  describe('paste', () => {
    test('should support pasting content', async () => {
      const model = ref('')
      const wrapper = mount(() => <InputOtp v-model={model.value} />)

      const inputs = wrapper.findAll('input')
      // Simulate pasting '123456' into the first input
      inputs[0].element.value = '123456'
      await inputs[0].trigger('input')
      expect(model.value).toBe('123456')

      await nextTick()
      for (let i = 0; i < 6; i++) {
        expect(inputs[i].element.value).toBe(`${i + 1}`)
      }
    })

    test('should ignore non-digits when type is number on paste', async () => {
      const model = ref('')
      const validator = (char: string) => /^\d$/.test(char)
      const wrapper = mount(() => (
        <InputOtp v-model={model.value} validator={validator} />
      ))

      const inputs = wrapper.findAll('input')
      inputs[0].element.value = '1a2b3c'
      await inputs[0].trigger('input')

      expect(model.value).toBe('123')
      await nextTick()
      expect(inputs[0].element.value).toBe('1')
      expect(inputs[1].element.value).toBe('2')
      expect(inputs[2].element.value).toBe('3')
      expect(inputs[3].element.value).toBe('')
    })

    test('should fill from the first empty index and focus next empty index on paste', async () => {
      const model = ref('')
      const wrapper = mount(() => <InputOtp v-model={model.value} />, {
        attachTo: document.body,
      })

      const inputs = wrapper.findAll('input')
      inputs[3].element.value = '123'
      await inputs[3].trigger('input')

      expect(model.value).toBe('123')

      await nextTick()
      expect(inputs[0].element.value).toBe('1')
      expect(inputs[1].element.value).toBe('2')
      expect(inputs[2].element.value).toBe('3')
      expect(inputs[3].element.value).toBe('')

      expect(document.activeElement).toBe(inputs[3].element)

      wrapper.unmount()
    })

    test('should overwrite from current index if current input has value', async () => {
      const model = ref('1234')
      const wrapper = mount(
        () => <InputOtp v-model={model.value} length={6} />,
        {
          attachTo: document.body,
        }
      )
      const inputs = wrapper.findAll('input')

      await nextTick()
      inputs[1].element.value = '56'
      await inputs[1].trigger('input')

      expect(model.value).toBe('1564')
      await nextTick()
      expect(inputs[0].element.value).toBe('1')
      expect(inputs[1].element.value).toBe('5')
      expect(inputs[2].element.value).toBe('6')
      expect(inputs[3].element.value).toBe('4')
      expect(document.activeElement).toBe(inputs[3].element)

      wrapper.unmount()
    })

    test('should apply validator when distributing multi-character input', async () => {
      const model = ref('')
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const validator = vi.fn((char: string, _index: number) =>
        /^\d$/.test(char)
      )
      const wrapper = mount(
        () => <InputOtp v-model={model.value} validator={validator} />,
        {
          attachTo: document.body,
        }
      )
      const inputs = wrapper.findAll('input')

      ;(inputs[0].element as HTMLInputElement).value = '1a2b3c'
      await inputs[0].trigger('input')

      expect(model.value).toBe('123')
      await nextTick()
      expect(inputs[0].element.value).toBe('1')
      expect(inputs[1].element.value).toBe('2')
      expect(inputs[2].element.value).toBe('3')
      expect(inputs[3].element.value).toBe('')
      expect(document.activeElement).toBe(inputs[3].element)
      expect(validator).toHaveBeenCalledTimes(6)
      expect(validator.mock.calls).toEqual([
        ['1', 0],
        ['a', 1],
        ['2', 1],
        ['b', 2],
        ['3', 2],
        ['c', 3],
      ])

      wrapper.unmount()
    })

    test('should avoid innerValue mismatch with the input value after pasting when the character does not change', async () => {
      const model = ref('123456')
      const wrapper = mount(() => <InputOtp v-model={model.value} />, {
        attachTo: document.body,
      })
      const inputs = wrapper.findAll('input')

      ;(inputs[5].element as HTMLInputElement).value = '777'
      await inputs[5].trigger('input')
      expect(model.value).toBe('123457')
      ;(inputs[5].element as HTMLInputElement).value = '777'
      await inputs[5].trigger('input')
      expect(inputs[5].element.value).toBe('7')
      wrapper.unmount()
    })
  })

  describe('separator', () => {
    test('render with separator prop', () => {
      const wrapper = mount(() => <InputOtp separator="-" />)
      const inputFields = wrapper.findAll('.el-input-otp__input-field')
      let num = 0

      inputFields.pop()
      inputFields.forEach((node) => {
        let next = node.element.nextSibling
        while (
          next &&
          next.nodeType === Node.TEXT_NODE &&
          !next.nodeValue?.trim()
        ) {
          next = next.nextSibling
        }
        num += 1
        expect(next?.nodeValue).toBe('-')
      })
      expect(num).toBe(5)
    })

    test('render with separator function', () => {
      const separator = (index: number) => (
        <span data-testid="separator">{index & 1 ? '-' : '/'}</span>
      )
      const wrapper = mount(() => <InputOtp separator={separator} />)
      const separators = wrapper.findAll('[data-testid="separator"]')

      expect(separators.length).toBe(5)
      separators.forEach((node, index) =>
        expect(node.text()).toBe(index & 1 ? '-' : '/')
      )
    })

    test('render with separator slot', () => {
      const wrapper = mount(() => (
        <InputOtp
          v-slots={{
            separator: ({ index }: { index: number }) => (
              <span data-testid="separator">{index & 1 ? '-' : '/'}</span>
            ),
          }}
        />
      ))
      const separators = wrapper.findAll('[data-testid="separator"]')
      expect(separators.length).toBe(5)
      separators.forEach((node, index) =>
        expect(node.text()).toBe(index & 1 ? '-' : '/')
      )
    })
  })

  describe('exposed methods', () => {
    test('focus', async () => {
      const onFocus = vi.fn()
      const wrapper = mount(<InputOtp onFocus={onFocus} />, {
        attachTo: document.body,
      })

      const { focus } = wrapper.vm as unknown as InputOtpInstance
      const inputs = wrapper.findAll('input')

      focus()
      await nextTick()
      expect(document.activeElement).toBe(inputs[0].element)

      focus(2)
      await nextTick()
      expect(document.activeElement).toBe(inputs[2].element)
      expect(onFocus).toHaveBeenCalledTimes(1)

      wrapper.unmount()
    })

    test('blur', async () => {
      const onBlur = vi.fn()
      const wrapper = mount(<InputOtp onBlur={onBlur} />, {
        attachTo: document.body,
      })
      const { focus, blur } = wrapper.vm as unknown as InputOtpInstance
      const inputs = wrapper.findAll('input')

      focus()
      await nextTick()
      expect(document.activeElement).toBe(inputs[0].element)

      blur()
      await nextTick()
      expect(document.activeElement).not.toBe(inputs[0].element)
      expect(onBlur).toHaveBeenCalledTimes(1)

      wrapper.unmount()
    })
  })
})
