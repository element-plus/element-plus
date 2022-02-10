import { nextTick } from 'vue'
import { mount } from '@vue/test-utils'
import { EVENT_CODE } from '@element-plus/utils-v2'
import { triggerEvent } from '@element-plus/test-utils'
import { ArrowDown, Check, CircleClose } from '@element-plus/icons-vue'
import { POPPER_CONTAINER_SELECTOR } from '@element-plus/hooks'
import Cascader from '../src/index.vue'

jest.mock('lodash-unified', () => {
  return {
    ...(jest.requireActual('lodash-unified') as Record<string, any>),
    debounce: jest.fn((fn) => {
      fn.cancel = jest.fn()
      fn.flush = jest.fn()
      return fn
    }),
  }
})

const OPTIONS = [
  {
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [
      {
        value: 'hangzhou',
        label: 'Hangzhou',
      },
      {
        value: 'ningbo',
        label: 'Ningbo',
      },
    ],
  },
]

const AXIOM = 'Rem is the best girl'

const TRIGGER = '.el-cascader'
const NODE = '.el-cascader-node'
const TAG = '.el-tag'
const SUGGESTION_ITEM = '.el-cascader__suggestion-item'
const SUGGESTION_PANEL = '.el-cascader__suggestion-panel'
const DROPDOWN = '.el-cascader__dropdown'

const _mount: typeof mount = (options) =>
  mount(
    {
      components: {
        Cascader,
      },
      ...options,
    },
    {
      attachTo: 'body',
    }
  )

afterEach(() => {
  document.body.innerHTML = ''
})

describe('Cascader.vue', () => {
  test('toggle popper visible', async () => {
    const handleVisibleChange = jest.fn()
    const wrapper = _mount({
      template: `
        <cascader @visible-change="handleVisibleChange" />
      `,
      methods: {
        handleVisibleChange,
      },
    })
    const trigger = wrapper.find(TRIGGER)
    const dropdown = wrapper.findComponent(ArrowDown).element as HTMLDivElement

    await trigger.trigger('click')
    expect(dropdown.style.display).not.toBe('none')
    expect(handleVisibleChange).toBeCalledWith(true)
    await trigger.trigger('click')
    expect(handleVisibleChange).toBeCalledWith(false)
    await trigger.trigger('click')
    document.body.click()
    expect(handleVisibleChange).toBeCalledWith(false)
  })

  test('expand and check', async () => {
    const handleChange = jest.fn()
    const handleExpandChange = jest.fn()
    const wrapper = _mount({
      template: `
        <cascader
          v-model="value"
          :options="options"
          @change="handleChange"
          @expand-change="handleExpandChange"
        />
      `,
      data() {
        return {
          value: [],
          options: OPTIONS,
        }
      },
      methods: {
        handleChange,
        handleExpandChange,
      },
    })
    const trigger = wrapper.find(TRIGGER)
    const vm = wrapper.vm as any

    await trigger.trigger('click')
    ;(document.querySelector(NODE) as HTMLElement).click()
    await nextTick()
    expect(handleExpandChange).toBeCalledWith(['zhejiang'])
    ;(document.querySelectorAll(NODE)[1] as HTMLElement).click()
    await nextTick()
    expect(handleChange).toBeCalledWith(['zhejiang', 'hangzhou'])
    expect(vm.value).toEqual(['zhejiang', 'hangzhou'])
    expect(wrapper.find('input').element.value).toBe('Zhejiang / Hangzhou')
  })

  test('with default value', async () => {
    const wrapper = mount(Cascader, {
      props: {
        options: OPTIONS,
        modelValue: ['zhejiang', 'hangzhou'],
      },
    })
    await nextTick()
    expect(wrapper.find('input').element.value).toBe('Zhejiang / Hangzhou')
    await wrapper.setProps({ modelValue: ['zhejiang', 'ningbo'] })
    expect(wrapper.find('input').element.value).toBe('Zhejiang / Ningbo')
  })

  test('options change', async () => {
    const wrapper = mount(Cascader, {
      props: {
        options: OPTIONS,
        modelValue: ['zhejiang', 'hangzhou'],
      },
    })
    await wrapper.setProps({ options: [] })
    expect(wrapper.find('input').element.value).toBe('')
  })

  test('disabled', async () => {
    const handleVisibleChange = jest.fn()
    const wrapper = _mount({
      template: `
        <cascader disabled @visible-change="handleVisibleChange" />
      `,
      methods: {
        handleVisibleChange,
      },
    })
    await wrapper.find(TRIGGER).trigger('click')
    expect(handleVisibleChange).not.toBeCalled()
    expect(wrapper.find('input[disabled]').exists()).toBe(true)
  })

  test('custom placeholder', async () => {
    const wrapper = mount(Cascader, {
      props: {
        placeholder: AXIOM,
      },
    })
    expect(wrapper.find('input').attributes().placeholder).toBe(AXIOM)
  })

  test('clearable', async () => {
    const wrapper = mount(Cascader, {
      props: {
        options: OPTIONS,
        clearable: true,
        modelValue: ['zhejiang', 'hangzhou'],
      },
    })
    const trigger = wrapper.find(TRIGGER)
    expect(wrapper.findComponent(ArrowDown).exists()).toBe(true)
    await trigger.trigger('mouseenter')
    expect(wrapper.findComponent(ArrowDown).exists()).toBe(false)
    await wrapper.findComponent(CircleClose).trigger('click')
    expect(wrapper.find('input').element.value).toBe('')
    expect((wrapper.vm as any).getCheckedNodes().length).toBe(0)
    await trigger.trigger('mouseleave')
    await trigger.trigger('mouseenter')
    await expect(wrapper.findComponent(CircleClose).exists()).toBe(false)
  })

  test('show last level label', async () => {
    const wrapper = mount(Cascader, {
      props: {
        options: OPTIONS,
        showAllLevels: false,
        modelValue: ['zhejiang', 'hangzhou'],
      },
    })
    await nextTick()
    expect(wrapper.find('input').element.value).toBe('Hangzhou')
  })

  test('multiple mode', async () => {
    const wrapper = _mount({
      template: `
        <cascader
          v-model="value"
          :options="options"
          :props="props"
        />
      `,
      data() {
        return {
          options: OPTIONS,
          props: { multiple: true },
          value: [
            ['zhejiang', 'hangzhou'],
            ['zhejiang', 'ningbo'],
          ],
        }
      },
    })
    await nextTick()
    const tags = wrapper.findAll(TAG)
    const [firstTag, secondTag] = tags
    expect(tags.length).toBe(2)
    expect(firstTag.text()).toBe('Zhejiang / Hangzhou')
    expect(secondTag.text()).toBe('Zhejiang / Ningbo')
    await firstTag.find('.el-tag__close').trigger('click')
    expect(wrapper.findAll(TAG).length).toBe(1)
    expect(wrapper.vm.value).toEqual([['zhejiang', 'ningbo']])
  })

  test('collapse tags', async () => {
    const wrapper = mount(Cascader, {
      props: {
        options: OPTIONS,
        props: { multiple: true },
        collapseTags: true,
        modelValue: [
          ['zhejiang', 'hangzhou'],
          ['zhejiang', 'ningbo'],
        ],
      },
    })
    await nextTick()
    const [firstTag, secondTag] = wrapper.findAll(TAG)
    expect(firstTag.text()).toBe('Zhejiang / Hangzhou')
    expect(secondTag.text()).toBe('+ 1')
  })

  test('filterable', async () => {
    const wrapper = _mount({
      template: `
        <cascader
          v-model="value"
          :options="options"
          filterable
        />
      `,
      data() {
        return {
          options: OPTIONS,
          value: [],
        }
      },
    })

    const input = wrapper.find('input')
    input.element.value = 'Ni'
    await input.trigger('compositionstart')
    await input.trigger('input')
    input.element.value = 'Ha'
    await input.trigger('compositionupdate')
    await input.trigger('input')
    await input.trigger('compositionend')
    const suggestions = document.querySelectorAll(
      SUGGESTION_ITEM
    ) as NodeListOf<HTMLElement>
    const hzSuggestion = suggestions[0]
    expect(suggestions.length).toBe(1)
    expect(hzSuggestion.textContent).toBe('Zhejiang / Hangzhou')
    hzSuggestion.click()
    await nextTick()
    expect(wrapper.findComponent(Check).exists()).toBeTruthy()
    expect(wrapper.vm.value).toEqual(['zhejiang', 'hangzhou'])
    hzSuggestion.click()
    await nextTick()
    expect(wrapper.vm.value).toEqual(['zhejiang', 'hangzhou'])
  })

  test('filterable in multiple mode', async () => {
    const wrapper = _mount({
      template: `
        <cascader
          v-model="value"
          :options="options"
          :props="props"
          filterable
        />
      `,
      data() {
        return {
          options: OPTIONS,
          props: { multiple: true },
          value: [],
        }
      },
    })

    const input = wrapper.find('.el-cascader__search-input')
    ;(input.element as HTMLInputElement).value = 'Ha'
    await input.trigger('input')
    await nextTick()
    const hzSuggestion = document.querySelector(SUGGESTION_ITEM) as HTMLElement
    hzSuggestion.click()
    await nextTick()
    expect(wrapper.vm.value).toEqual([['zhejiang', 'hangzhou']])
    hzSuggestion.click()
    await nextTick()
    expect(wrapper.vm.value).toEqual([])
  })

  test('filter method', async () => {
    const filterMethod = jest.fn((node, keyword) => {
      const { text, value } = node
      return text.includes(keyword) || value.includes(keyword)
    })
    const wrapper = mount(Cascader, {
      props: {
        options: OPTIONS,
        filterable: true,
        filterMethod,
      },
    })

    const input = wrapper.find('input')
    input.element.value = 'ha'
    await input.trigger('input')
    const hzSuggestion = document.querySelector(SUGGESTION_ITEM) as HTMLElement
    expect(filterMethod).toBeCalled()
    expect(hzSuggestion.textContent).toBe('Zhejiang / Hangzhou')
  })

  test('filterable keyboard selection', async () => {
    const wrapper = _mount({
      template: `
        <cascader
          v-model="value"
          :options="options"
          filterable
        />
      `,
      data() {
        return {
          options: OPTIONS,
          value: [],
        }
      },
    })

    const input = wrapper.find('input')
    const dropdown = document.querySelector(DROPDOWN)
    input.element.value = 'h'
    await input.trigger('input')
    const suggestionsPanel = document.querySelector(
      SUGGESTION_PANEL
    ) as HTMLDivElement
    const suggestions = dropdown.querySelectorAll(
      SUGGESTION_ITEM
    ) as NodeListOf<HTMLElement>
    const hzSuggestion = suggestions[0]
    triggerEvent(suggestionsPanel, 'keydown', EVENT_CODE.down)
    expect(document.activeElement.textContent).toBe('Zhejiang / Hangzhou')
    triggerEvent(hzSuggestion, 'keydown', EVENT_CODE.down)
    expect(document.activeElement.textContent).toBe('Zhejiang / Ningbo')
    triggerEvent(hzSuggestion, 'keydown', EVENT_CODE.enter)
    await nextTick()
    expect(wrapper.vm.value).toEqual(['zhejiang', 'hangzhou'])
  })

  describe('teleported API', () => {
    it('should mount on popper container', async () => {
      expect(document.body.innerHTML).toBe('')
      _mount({
        template: `
          <cascader
            v-model="value"
            :options="options"
            filterable
          />
        `,
        data() {
          return {
            options: OPTIONS,
            value: [],
          }
        },
      })

      await nextTick()
      expect(
        document.body.querySelector(POPPER_CONTAINER_SELECTOR).innerHTML
      ).not.toBe('')
    })

    it('should not mount on the popper container', async () => {
      expect(document.body.innerHTML).toBe('')
      _mount({
        template: `
          <cascader
            v-model="value"
            :options="options"
            :teleported="false"
            filterable
          />
        `,
        data() {
          return {
            options: OPTIONS,
            value: [],
          }
        },
      })

      await nextTick()
      expect(
        document.body.querySelector(POPPER_CONTAINER_SELECTOR).innerHTML
      ).toBe('')
    })
  })
})
