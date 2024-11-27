import { h, nextTick, ref } from 'vue'
import { mount } from '@vue/test-utils'
import { afterEach, describe, expect, test } from 'vitest'
import sleep from '@element-plus/test-utils/sleep'
import Form from '@element-plus/components/form'
import { EVENT_CODE } from '@element-plus/constants'
import Mention from '../src/mention.vue'
import MentionDropdown from '../src/mention-dropdown.vue'
import { MentionOption } from '../src/types'

describe('Mention.vue', () => {
  afterEach(() => {
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

    await sleep(150)
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
    await sleep(150)
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
    await sleep(150)
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
    await sleep(150)
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

  test('should work with some event', async () => {
    const atList: MentionOption[] = []
    const html = ref('')

    const wrapper = mount(
      {
        setup: () => {
          const mentionRef = ref()

          const handleRemove = (option: MentionOption) => {
            const index = atList.findIndex(
              (item: MentionOption) => item.value === option.value
            )
            if (index !== -1) {
              atList.splice(index, 1)
            }
          }

          const handleSelect = (option: MentionOption) => {
            const item = options.find(
              (item: MentionOption) => item.value === option.value
            )
            if (item) {
              atList.push(item)
            }
          }

          const handleKeyDown = (evt: KeyboardEvent) => {
            if (
              evt.key === 'Enter' &&
              !evt.shiftKey &&
              !mentionRef.value.dropdownVisible
            ) {
              // send
            }
          }

          return () =>
            h(
              Mention,
              {
                options,
                whole: true,
                ref: mentionRef,
                style: { width: '320px' },
                placeholder: 'Please input',
                onRemove: handleRemove,
                onSelect: handleSelect,
                onKeyDown: handleKeyDown,
                modelValue: html.value,
                'onUpdate:modelValue': (value) => {
                  html.value = value
                },
              },
              {}
            )
        },
      },
      {
        attachTo: document.body,
      }
    )

    const inputWrapper = wrapper.find('input')
    const input = inputWrapper.element as HTMLInputElement
    const dropdownWrapper = wrapper.findComponent(MentionDropdown)

    input.focus()
    inputWrapper.element.value = '@'
    inputWrapper.trigger('input')
    await sleep(150)

    dropdownWrapper.vm.$emit('select', options[0])
    expect(atList[0]).toBe(options[0])
    await nextTick()

    input.dispatchEvent(
      new KeyboardEvent('keydown', {
        code: EVENT_CODE.backspace,
        bubbles: true,
        cancelable: false,
      })
    )
    expect(atList.length).toBe(0)
  })
})
