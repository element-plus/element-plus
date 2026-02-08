import { nextTick, ref } from 'vue'
import { mount } from '@vue/test-utils'
import { describe, expect, test, vi } from 'vitest'
import { EVENT_CODE } from '@element-plus/constants'
import InputOtp from '../src/input-otp.vue'

import type { InputOtpProps } from '../src/input-otp'

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

  test('variant', async () => {
    const variant = ref<InputOtpProps['variant']>('filled')
    const wrapper = mount(() => <InputOtp variant={variant.value} />)
    await nextTick()
    expect(wrapper.classes()).toContain('el-input-otp--filled')
    variant.value = 'outlined'
    await nextTick()
    expect(wrapper.classes()).toContain('el-input-otp--outlined')
    variant.value = 'underlined'
    await nextTick()
    expect(wrapper.classes()).toContain('el-input-otp--underlined')
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

  test('should support number input type', async () => {
    const model = ref('')
    const wrapper = mount(() => (
      <InputOtp v-model={model.value} type="number" />
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
    expect(model.value).toBe('12456')
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

  test('should support pasting content', async () => {
    const model = ref('')
    const wrapper = mount(() => <InputOtp v-model={model.value} />)

    const inputs = wrapper.findAll('input')
    // Simulate pasting '123456' into the first input
    await inputs[0].trigger('paste', {
      clipboardData: {
        getData: () => '123456',
      },
    })
    expect(model.value).toBe('123456')

    await nextTick()
    for (let i = 0; i < 6; i++) {
      expect(inputs[i].element.value).toBe(`${i + 1}`)
    }
  })

  test('should ignore non-digits when type is number on paste', async () => {
    const model = ref('')
    const wrapper = mount(() => (
      <InputOtp v-model={model.value} type="number" />
    ))

    const inputs = wrapper.findAll('input')
    await inputs[0].trigger('paste', {
      clipboardData: {
        getData: () => '1a2b3c',
      },
    })

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
    await inputs[3].trigger('paste', {
      clipboardData: {
        getData: () => '123',
      },
    })

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
    const wrapper = mount(() => <InputOtp v-model={model.value} length={6} />, {
      attachTo: document.body,
    })
    const inputs = wrapper.findAll('input')

    await nextTick()
    await inputs[1].trigger('paste', {
      clipboardData: {
        getData: () => '56',
      },
    })

    expect(model.value).toBe('1564')
    await nextTick()
    expect(inputs[0].element.value).toBe('1')
    expect(inputs[1].element.value).toBe('5')
    expect(inputs[2].element.value).toBe('6')
    expect(inputs[3].element.value).toBe('4')
    expect(document.activeElement).toBe(inputs[3].element)

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

  test('should emit change event', async () => {
    const onChange = vi.fn()
    const wrapper = mount(() => <InputOtp modelValue="" onChange={onChange} />)

    const inputs = wrapper.findAll('input')
    await inputs[0].setValue('1')

    expect(onChange).not.toHaveBeenCalled()

    for (let i = 1; i < 6; i++) {
      await inputs[i].setValue(i + 1)
    }

    expect(onChange).toHaveBeenCalled()
    expect(onChange).toHaveBeenCalledWith('123456')
  })

  test('should emit input event', async () => {
    const onInput = vi.fn()
    const wrapper = mount(() => <InputOtp modelValue="" onInput={onInput} />)

    const inputs = wrapper.findAll('input')
    await inputs[0].setValue('1')

    expect(onInput).toHaveBeenCalled()
    expect(onInput).toHaveBeenCalledWith(['1', '', '', '', '', ''])
  })
})
