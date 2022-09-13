import { nextTick, reactive } from 'vue'
import { mount } from '@vue/test-utils'
import { NOOP } from '@vue/shared'
import { beforeEach, describe, expect, it, test, vi } from 'vitest'
import { POPPER_CONTAINER_SELECTOR } from '@element-plus/hooks'
import { ElFormItem as FormItem } from '@element-plus/components/src/form'
import Autocomplete from '../src/autocomplete.vue'

vi.unmock('lodash')

vi.useFakeTimers()

const _mount = (
  payload = {},
  type: 'fn-cb' | 'fn-promise' | 'fn-arr' | 'fn-async' | 'arr' = 'fn-cb'
) =>
  mount({
    setup() {
      const state = reactive({
        value: '',
        list: [
          { value: 'Java', tag: 'java' },
          { value: 'Go', tag: 'go' },
          { value: 'JavaScript', tag: 'javascript' },
          { value: 'Python', tag: 'python' },
        ],
        payload,
      })

      function filterList(queryString: string) {
        return queryString
          ? state.list.filter(
              (i) => i.value.indexOf(queryString.toLowerCase()) === 0
            )
          : state.list
      }

      const querySearch = (() => {
        switch (type) {
          case 'fn-cb':
            return (
              queryString: string,
              cb: (arg: typeof state.list) => void
            ) => {
              cb(filterList(queryString))
            }
          case 'fn-promise':
            return (queryString: string) =>
              Promise.resolve(filterList(queryString))
          case 'fn-async':
            return async (queryString: string) => {
              await Promise.resolve()
              return filterList(queryString)
            }
          case 'fn-arr':
            return (queryString: string) => filterList(queryString)
          case 'arr':
            return state.list
        }
      })()

      return () => (
        <Autocomplete
          ref="autocomplete"
          v-model={state.value}
          fetch-suggestions={querySearch}
          {...state.payload}
        />
      )
    },
  })

describe('Autocomplete.vue', () => {
  beforeEach(() => {
    document.body.innerHTML = ''
  })

  test('placeholder', async () => {
    const wrapper = _mount()
    await nextTick()

    await wrapper.setProps({ placeholder: 'autocomplete' })
    expect(wrapper.find('input').attributes('placeholder')).toBe('autocomplete')

    await wrapper.setProps({ placeholder: 'placeholder' })
    expect(wrapper.find('input').attributes('placeholder')).toBe('placeholder')
  })

  test('triggerOnFocus', async () => {
    const fetchSuggestions = vi.fn()
    const wrapper = _mount({
      debounce: 10,
      fetchSuggestions,
    })
    await nextTick()

    await wrapper.setProps({ triggerOnFocus: false })
    await wrapper.find('input').trigger('focus')
    vi.runAllTimers()
    await nextTick()
    expect(fetchSuggestions).toHaveBeenCalledTimes(0)

    await wrapper.find('input').trigger('blur')

    await wrapper.setProps({ triggerOnFocus: true })
    await wrapper.find('input').trigger('focus')
    vi.runAllTimers()
    await nextTick()
    expect(fetchSuggestions).toHaveBeenCalledTimes(1)
  })

  test('popperClass', async () => {
    const wrapper = _mount()
    await nextTick()

    await wrapper.setProps({ popperClass: 'error' })
    expect(
      document.body.querySelector('.el-popper')?.classList.contains('error')
    ).toBe(true)

    await wrapper.setProps({ popperClass: 'success' })
    expect(
      document.body.querySelector('.el-popper')?.classList.contains('error')
    ).toBe(false)
    expect(
      document.body.querySelector('.el-popper')?.classList.contains('success')
    ).toBe(true)
  })

  test('teleported', async () => {
    _mount({ teleported: false })
    expect(document.body.querySelector('.el-popper__mask')).toBeNull()
  })

  test('debounce / fetchSuggestions', async () => {
    const fetchSuggestions = vi.fn()
    const wrapper = _mount({
      debounce: 10,
      fetchSuggestions,
    })
    await nextTick()

    await wrapper.find('input').trigger('focus')
    await wrapper.find('input').trigger('blur')
    await wrapper.find('input').trigger('focus')
    await wrapper.find('input').trigger('blur')
    await wrapper.find('input').trigger('focus')
    await wrapper.find('input').trigger('blur')
    expect(fetchSuggestions).toHaveBeenCalledTimes(0)
    vi.runAllTimers()
    await nextTick()

    expect(fetchSuggestions).toHaveBeenCalledTimes(1)
    await wrapper.find('input').trigger('focus')
    vi.runAllTimers()
    await nextTick()

    expect(fetchSuggestions).toHaveBeenCalledTimes(2)
  })

  test('fetchSuggestions with fn-promise', async () => {
    const wrapper = _mount({ debounce: 10 }, 'fn-promise')
    await nextTick()
    await wrapper.find('input').trigger('focus')
    vi.runAllTimers()
    await nextTick()

    const target = wrapper.getComponent(Autocomplete).vm as InstanceType<
      typeof Autocomplete
    >

    expect(target.suggestions.length).toBe(4)
  })

  test('fetchSuggestions with fn-async', async () => {
    const wrapper = _mount({ debounce: 10 }, 'fn-async')
    await nextTick()
    await wrapper.find('input').trigger('focus')
    vi.runAllTimers()
    await nextTick()
    await nextTick()

    const target = wrapper.getComponent(Autocomplete).vm as InstanceType<
      typeof Autocomplete
    >

    expect(target.suggestions.length).toBe(4)
  })

  test('fetchSuggestions with fn-arr', async () => {
    const wrapper = _mount({ debounce: 10 }, 'fn-arr')
    await nextTick()
    await wrapper.find('input').trigger('focus')
    vi.runAllTimers()
    await nextTick()

    const target = wrapper.getComponent(Autocomplete).vm as InstanceType<
      typeof Autocomplete
    >

    expect(target.suggestions.length).toBe(4)
  })

  test('fetchSuggestions with arr', async () => {
    const wrapper = _mount({ debounce: 10 }, 'arr')
    await nextTick()
    await wrapper.find('input').trigger('focus')
    vi.runAllTimers()
    await nextTick()

    const target = wrapper.getComponent(Autocomplete).vm as InstanceType<
      typeof Autocomplete
    >

    expect(target.suggestions.length).toBe(4)
  })

  test('valueKey / modelValue', async () => {
    const wrapper = _mount()
    await nextTick()

    const target = wrapper.getComponent(Autocomplete).vm as InstanceType<
      typeof Autocomplete
    >

    await target.handleSelect({ value: 'Go', tag: 'go' })

    expect(target.modelValue).toBe('Go')

    await wrapper.setProps({ valueKey: 'tag' })

    await target.handleSelect({ value: 'Go', tag: 'go' })
    expect(target.modelValue).toBe('go')
  })

  test('hideLoading', async () => {
    const wrapper = _mount({
      hideLoading: false,
      fetchSuggestions: NOOP,
      debounce: 10,
    })
    await nextTick()
    await wrapper.find('input').trigger('focus')
    vi.runAllTimers()
    await nextTick()

    expect(document.body.querySelector('.el-icon-loading')).toBeDefined()
    await wrapper.setProps({ hideLoading: true })
    expect(document.body.querySelector('.el-icon-loading')).toBeNull()
  })

  test('selectWhenUnmatched', async () => {
    const wrapper = _mount({
      selectWhenUnmatched: true,
      debounce: 10,
    })
    await nextTick()
    const target = wrapper.getComponent(Autocomplete).vm as InstanceType<
      typeof Autocomplete
    >

    target.highlightedIndex = 0
    target.handleKeyEnter()
    vi.runAllTimers()
    await nextTick()

    expect(target.highlightedIndex).toBe(-1)
  })

  test('highlightFirstItem', async () => {
    const wrapper = _mount({
      highlightFirstItem: false,
      debounce: 10,
    })
    await nextTick()

    await wrapper.find('input').trigger('focus')
    vi.runAllTimers()
    await nextTick()

    expect(document.body.querySelector('.highlighted')).toBeNull()

    await wrapper.setProps({ highlightFirstItem: true })

    await wrapper.find('input').trigger('focus')
    vi.runAllTimers()
    await nextTick()

    expect(document.body.querySelector('.highlighted')).toBeDefined()
  })

  test('fitInputWidth', async () => {
    const wrapper = _mount({
      fitInputWidth: true,
    })
    await nextTick()

    const inputDom = wrapper.find('.el-input').element
    const mockInputWidth = vi
      .spyOn(inputDom as HTMLElement, 'offsetWidth', 'get')
      .mockReturnValue(200)
    await wrapper.find('input').trigger('focus')
    vi.runAllTimers()
    await nextTick()
    await nextTick()
    await nextTick()

    expect(
      (
        document.body.querySelector(
          '.el-autocomplete-suggestion'
        ) as HTMLElement
      ).style.width
    ).toBe('200px')
    mockInputWidth.mockRestore()
  })

  describe('teleported API', () => {
    it('should mount on popper container', async () => {
      expect(document.body.innerHTML).toBe('')
      _mount()

      await nextTick()
      expect(
        document.body.querySelector(POPPER_CONTAINER_SELECTOR)?.innerHTML
      ).not.toBe('')
    })

    it('should not mount on the popper container', async () => {
      expect(document.body.innerHTML).toBe('')
      _mount({
        teleported: false,
      })

      await nextTick()
      expect(
        document.body.querySelector(POPPER_CONTAINER_SELECTOR)?.innerHTML
      ).toBe('')
    })
  })

  describe('form item accessibility integration', () => {
    test('automatic id attachment', async () => {
      const wrapper = mount(() => (
        <FormItem label="Foobar" data-test-ref="item">
          <Autocomplete data-test-ref="input" />
        </FormItem>
      ))

      await nextTick()
      const formItem = wrapper.find('[data-test-ref="item"]')
      const input = await wrapper.find('[data-test-ref="input"]')
      const formItemLabel = formItem.find('.el-form-item__label')
      expect(formItem.attributes().role).toBeFalsy()
      expect(formItemLabel.attributes().for).toBe(input.attributes().id)
    })

    test('specified id attachment', async () => {
      const wrapper = mount(() => (
        <FormItem label="Foobar" data-test-ref="item">
          <Autocomplete id="foobar" data-test-ref="input" />
        </FormItem>
      ))

      await nextTick()
      const formItem = wrapper.find('[data-test-ref="item"]')
      const input = await wrapper.find('[data-test-ref="input"]')
      const formItemLabel = formItem.find('.el-form-item__label')
      expect(formItem.attributes().role).toBeFalsy()
      expect(input.attributes().id).toBe('foobar')
      expect(formItemLabel.attributes().for).toBe(input.attributes().id)
    })

    test('form item role is group when multiple autocompletes', async () => {
      const wrapper = mount(() => (
        <FormItem label="Foobar" data-test-ref="item">
          <Autocomplete data-test-ref="input1" />
          <Autocomplete data-test-ref="input2" />
        </FormItem>
      ))

      await nextTick()
      const formItem = wrapper.find('[data-test-ref="item"]')
      expect(formItem.attributes().role).toBe('group')
    })
  })
})
