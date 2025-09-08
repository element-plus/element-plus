import { nextTick } from 'vue'
import { mount } from '@vue/test-utils'
import { afterEach, beforeEach, describe, expect, test, vi } from 'vitest'
import Form from '@element-plus/components/form'
import Mention from '../src/mention.vue'
import * as helper from '../src/helper'

describe('Mention.vue', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.useRealTimers()
    document.body.innerHTML = ''
  })

  const options = [
    {
      label: 'Fuphoenixes',
      value: 'Fuphoenixes',
    },
    {
      label: 'kooriookami',
      value: 'kooriookami',
    },
    {
      label: 'Jeremy',
      value: 'Jeremy',
    },
    {
      label: 'btea',
      value: 'btea',
    },
  ]

  test('should work with `options` prop', async () => {
    const wrapper = mount(Mention, {
      attachTo: document.body,
      props: { options },
    })

    wrapper.find('input').element.focus()
    wrapper.find('input').setValue('@')

    vi.advanceTimersByTime(150)
    await nextTick()
    expect(document.querySelector('.el-mention-dropdown')).not.toEqual(null)
    expect(document.querySelectorAll('.el-mention-dropdown__item').length).toBe(
      4
    )
  })

  test('should work with `type` prop', async () => {
    const wrapper = mount(Mention, {
      attachTo: document.body,
      props: { options },
    })

    expect(wrapper.find('input').exists()).toBe(true)

    await wrapper.setProps({ type: 'text' })
    expect(wrapper.find('input').exists()).toBe(true)

    await wrapper.setProps({ type: 'textarea' })
    expect(wrapper.find('textarea').exists()).toBe(true)
  })

  test('should work with `loading` prop', async () => {
    const wrapper = mount(Mention, {
      attachTo: document.body,
      props: { options, loading: true },
    })

    wrapper.find('input').element.focus()
    await wrapper.find('input').setValue('@')
    vi.advanceTimersByTime(150)
    await nextTick()
    expect(document.querySelector('.el-mention-dropdown__loading')).not.toEqual(
      null
    )
  })

  test('should work with `prefix` prop', async () => {
    const wrapper = mount(Mention, {
      attachTo: document.body,
      props: { options, prefix: '#' },
    })

    wrapper.find('input').element.focus()
    await wrapper.find('input').setValue('#')
    vi.advanceTimersByTime(150)
    await nextTick()
    expect(document.querySelector('.el-mention-dropdown')).not.toEqual(null)
    expect(document.querySelectorAll('.el-mention-dropdown__item').length).toBe(
      4
    )
  })

  test('It should generate accessible attributes', async () => {
    const wrapper = mount(Mention, {
      attachTo: document.body,
      props: { options },
    })

    const input = wrapper.find('input')
    expect(input.attributes('role')).toBe(undefined)
    expect(input.attributes('aria-autocomplete')).toBe(undefined)
    expect(input.attributes('aria-controls')).toBe(undefined)
    expect(input.attributes('aria-expanded')).toBe(undefined)
    expect(input.attributes('aria-haspopup')).toBe(undefined)
    expect(input.attributes('aria-activedescendant')).toBe(undefined)

    wrapper.find('input').trigger('focus')
    input.element.value = '@'
    wrapper.find('input').trigger('input')
    vi.advanceTimersByTime(150)
    await nextTick()
    const dropdown = wrapper.findComponent({ name: 'ElMentionDropdown' })
    const list = dropdown.find('.el-mention-dropdown__list')
    const option = dropdown.find('.el-mention-dropdown__item')

    expect(list.attributes('id')).toBeTruthy()
    expect(list.attributes('role')).toBe('listbox')
    expect(list.attributes('aria-orientation')).toBe('vertical')
    expect(option.attributes('id')).toBeTruthy()
    expect(option.attributes('role')).toBe('option')
    expect(option.attributes('aria-disabled')).toBe(undefined)
    expect(option.attributes('aria-selected')).toBe('true')
  })

  test('should use props of form', async () => {
    const wrapper = mount({
      setup: () => () =>
        (
          <Form disabled>
            <Mention options={options} />
          </Form>
        ),
    })

    const dropdown = wrapper.findComponent({ name: 'ElMentionDropdown' })
    const option = dropdown.find('.el-mention-dropdown__item')

    expect(wrapper.find('.el-input').classes()).toContain('is-disabled')
    expect(wrapper.find('input').attributes()).toHaveProperty('disabled')
    expect(option.attributes('aria-disabled')).toBe('true')
    expect(option.classes()).toContain('is-disabled')
  })

  test('should ensure the cursor position is correct', async () => {
    vi.spyOn(helper, 'getCursorPosition').mockReturnValue({
      top: 7,
      left: 14,
      height: 21,
    })

    const wrapper = mount(Mention, {
      attachTo: document.body,
      props: { options, style: { marginTop: '100px', marginLeft: '100px' } },
    })

    const elInputEl = wrapper.find('.el-input').element
    const inputEl = wrapper.find('input').element

    const mockBoundingClientRect = (
      el: Element,
      rect: Partial<DOMRect> = {}
    ) => {
      const defaultRect: DOMRect = {
        x: 0,
        y: 0,
        width: 100,
        height: 100,
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        toJSON: () => {},
      }

      return vi
        .spyOn(el, 'getBoundingClientRect')
        .mockReturnValue(Object.assign(defaultRect, rect))
    }

    // Actual information obtained on the browser
    mockBoundingClientRect(elInputEl, {
      width: 320,
      height: 32,
      left: 100,
      x: 100,
      top: 100,
      y: 100,
    })
    mockBoundingClientRect(inputEl, {
      width: 298,
      height: 30,
      left: 111,
      x: 111,
      top: 101,
      y: 101,
    })

    inputEl.focus()
    await wrapper.find('input').setValue('@')
    vi.advanceTimersByTime(150)
    await nextTick()

    const cursorStyles = wrapper
      .find('.el-tooltip__trigger')
      .attributes('style')

    expect(cursorStyles).toContain('left: 125px')
    expect(cursorStyles).toContain('top: 108px')

    vi.restoreAllMocks()
  })
})
