import { mount } from '@vue/test-utils'
import useAttrs from '../use-attrs'
import type { ComponentOptions } from 'vue'

const CLASS = 'a'
const WIDTH = '50px'
const TEST_KEY = 'test'
const TEST_VALUE = 'fake'

const handleClick = jest.fn()

const genComp = (
  inheritAttrs = true,
  excludeListeners = false,
  excludesKeys: string[] = [],
) => {
  return {
    template: `
      <div>
        <span v-bind="attrs"></span>
      </div>
    `,
    inheritAttrs,
    props: {},
    setup() {
      const attrs = useAttrs(excludeListeners, excludesKeys)

      return {
        attrs,
      }
    },
  }
}

const _mount = (Comp: ComponentOptions) => {
  return mount({
    components: { Comp },
    template: `
      <comp
        class="${CLASS}"
        style="width: ${WIDTH}"
        ${TEST_KEY}="${TEST_VALUE}"
        @click="handleClick"
      />`,
    methods: {
      handleClick,
    },
  })
}

afterEach(() => {
  handleClick.mockClear()
})

describe('useAttrs', () => {
  test('class and style should not bind to child node', async () => {
    const wrapper = _mount(genComp(true))
    const container = wrapper.element as HTMLDivElement
    const span = wrapper.find('span')

    expect(wrapper.classes(CLASS)).toBe(true)
    expect(container.style.width).toBe(WIDTH)
    expect(span.classes(CLASS)).toBe(false)
    expect(span.element.style.width).toBe('')
    expect(span.attributes(TEST_KEY)).toBe(TEST_VALUE)

    await span.trigger('click')

    expect(handleClick).toBeCalledTimes(2)
  })

  test('excluded listeners should not bind to child node', async () => {
    const wrapper = _mount(genComp(true, true))
    const span = wrapper.find('span')

    await span.trigger('click')

    expect(handleClick).toBeCalledTimes(1)
  })

  test('excluded attributes should not bind to child node', async () => {
    const wrapper = _mount(genComp(true, false, [TEST_KEY]))
    const span = wrapper.find('span')

    expect(span.attributes(TEST_KEY)).toBeUndefined()
  })
})
