// @ts-nocheck
import { computed, defineComponent } from 'vue'
import { mount } from '@vue/test-utils'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { useAttrs } from '../use-attrs'

import type { ComputedRef } from 'vue'

const CLASS = 'a'
const WIDTH = '50px'
const TEST_KEY = 'test'
const TEST_VALUE = 'fake'
const ANOTHER_TEST_VALUE = 'fake1'

const handleClick = vi.fn()

const genComp = (
  inheritAttrs = true,
  excludeListeners = false,
  excludeKeys?: ComputedRef<string[]>
) => {
  return defineComponent({
    inheritAttrs,
    props: {},
    setup() {
      const attrs = useAttrs({ excludeListeners, excludeKeys })
      return () => (
        <div>
          <span {...attrs.value} />
        </div>
      )
    },
  })
}

const _mount = (Comp: ReturnType<typeof genComp>) => {
  return mount({
    setup() {
      return () => (
        <Comp
          class={CLASS}
          style={{ width: WIDTH }}
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-expect-error
          onClick={handleClick}
          {...{ [TEST_KEY]: TEST_VALUE }}
        />
      )
    },
  })
}

describe('useAttrs', () => {
  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('class and style should not bind to child node', async () => {
    const wrapper = _mount(genComp())
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

  it("child node's attributes should update when prop change", async () => {
    const wrapper = _mount(genComp())
    const span = wrapper.find('span')

    await wrapper.setProps({ [TEST_KEY]: ANOTHER_TEST_VALUE })
    expect(span.attributes(TEST_KEY)).toBe(ANOTHER_TEST_VALUE)
  })

  it('excluded listeners should not bind to child node', async () => {
    const wrapper = _mount(genComp(true, true))
    const span = wrapper.find('span')

    await span.trigger('click')

    expect(handleClick).toBeCalledTimes(1)
  })

  it('excluded attributes should not bind to child node', async () => {
    const wrapper = _mount(
      genComp(
        true,
        false,
        computed(() => [TEST_KEY])
      )
    )
    const span = wrapper.find('span')

    expect(span.attributes(TEST_KEY)).toBeUndefined()
  })
})
