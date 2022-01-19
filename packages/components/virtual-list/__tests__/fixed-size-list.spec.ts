import { nextTick } from 'vue'
import makeMount from '@element-plus/test-utils/make-mount'
import makeScroll from '@element-plus/test-utils/make-scroll'
import setupMock from '../setup-mock'
import {
  RTL,
  HORIZONTAL,
  CENTERED_ALIGNMENT,
  START_ALIGNMENT,
  END_ALIGNMENT,
  SMART_ALIGNMENT,
} from '../src/defaults'
import { FixedSizeList } from '..'

import type { ListExposes } from '../src/types'
type ListRef = ListExposes

const onItemRendered = jest.fn()
const WINDOW_KLS = 'window'
const WINDOW_SELECTOR = `.${WINDOW_KLS}`
const ITEM_KLS = 'item'
const ITEM_SELECTOR = `.${ITEM_KLS}`
const mount = makeMount(
  {
    template: `<fixed-size-list v-bind="$attrs" ref="listRef">
    <template #default="{index, style}">
      <div class="${ITEM_KLS}" :style="style">item {{ index }}</div>
    </template>
  </fixed-size-list>`,
    components: {
      FixedSizeList,
    },
  },
  {
    props: {
      cache: 3,
      className: WINDOW_KLS,
      height: 100,
      total: 100,
      itemSize: 25,
      width: 50,
      onItemRendered,
    },
  }
)

let cleanup: () => void

describe('<fixed-size-list />', () => {
  beforeAll(() => {
    cleanup = setupMock()
  })

  afterAll(() => {
    cleanup()
  })

  beforeEach(() => {
    onItemRendered.mockClear()
  })

  it('should render correctly', async () => {
    const wrapper = mount()

    await nextTick()

    // due to the default layout is vertical, so we use height to calc
    // because the height is 100 item size is 25 so we have visible
    // item 4
    // then we added cache as 3 (because we are currently at the top
    // which means we do not have cache before the items)
    // so we have cache of 3
    // the total of items should be 4 + 3 = 7
    expect(wrapper.findAll(`.${ITEM_KLS}`)).toHaveLength(7)
    expect(
      wrapper
        .find(WINDOW_SELECTOR)
        .element.firstElementChild.getAttribute('style')
    ).toBe('height: 2500px; width: 100%;')
    expect(onItemRendered).toHaveBeenCalledTimes(1)
  })

  it('should render 0 item when total is 0', async () => {
    const wrapper = mount({
      props: {
        total: 0,
      },
    })
    await nextTick()
    expect(wrapper.findAll(ITEM_SELECTOR)).toHaveLength(0)
  })

  it('should early terminate scroll handler when the scrollTo equals to current offset', async () => {
    const wrapper = mount()

    await nextTick()

    expect(wrapper.find(ITEM_SELECTOR).text()).toContain(0)

    await makeScroll(
      (wrapper.vm.$refs.listRef as ListRef).windowRef,
      'scrollTop',
      0
    )
    expect(wrapper.find(ITEM_SELECTOR).text()).toContain(0)

    await wrapper.setProps({
      layout: HORIZONTAL,
    })

    await makeScroll(
      (wrapper.vm.$refs.listRef as ListRef).windowRef,
      'scrollLeft',
      0
    )

    expect(wrapper.find(ITEM_SELECTOR).text()).toContain(0)
  })

  it('should render correct items to the dom', async () => {
    const wrapper = mount()

    await nextTick()

    // window ref has onScroll handler so we trigger scroll on windowRef

    const { windowRef } = wrapper.vm.$refs.listRef as ListRef

    expect(wrapper.findAll(ITEM_SELECTOR)).toHaveLength(7)
    expect(onItemRendered).toHaveBeenCalledTimes(1)

    makeScroll(windowRef, 'scrollTop', 100)
    await nextTick()
    // from index 3(item 4) + 4 visible items + 3 cache items = index 10
    // the total items rendered is 3 + 4 + 1 (index 3) inclusive
    // so the total number is 10
    expect(wrapper.findAll(ITEM_SELECTOR)).toHaveLength(8)
  })

  it('should set initial offset', async () => {
    const wrapper = mount({
      props: {
        initScrollOffset: 100,
      },
    })

    await nextTick()

    // 10 items = 3 backward invisible items + 4 visible items + 3 forward invisible items
    expect(wrapper.findAll(ITEM_SELECTOR)).toHaveLength(10)
    expect(onItemRendered).toHaveBeenLastCalledWith(1, 10, 4, 7)
  })

  it('should render horizontal list', async () => {
    const wrapper = mount({
      props: {
        layout: HORIZONTAL,
      },
    })
    await nextTick()
    expect(wrapper.findAll(ITEM_SELECTOR)).toHaveLength(5)
    expect(
      wrapper
        .find(WINDOW_SELECTOR)
        .element.firstElementChild.getAttribute('style')
    ).toBe('height: 100%; width: 2500px;')
  })

  it('should handle horizontal scroll correctly', async () => {
    const wrapper = mount({
      props: {
        layout: HORIZONTAL,
      },
    })

    await nextTick()
    expect(wrapper.findAll(ITEM_SELECTOR)).toHaveLength(5)

    const { windowRef } = wrapper.vm.$refs.listRef as ListRef
    makeScroll(windowRef, 'scrollLeft', 100)
    await nextTick()
    expect(wrapper.findAll(ITEM_SELECTOR)).toHaveLength(6)
    expect(wrapper.find(ITEM_SELECTOR).text()).toContain(3)
  })

  it('should render rtl direction', async () => {
    const wrapper = mount({
      props: {
        direction: RTL,
      },
    })

    await nextTick()
    expect(
      wrapper
        .find(WINDOW_SELECTOR)
        .element.getAttribute('style')
        .includes(`direction: ${RTL}`)
    ).toBe(true)
    const style = wrapper.find(ITEM_SELECTOR).element.getAttribute('style')
    expect(style).toContain('right')
    expect(style).not.toContain('left')
  })

  it('should update rendered items when cache changes', async () => {
    const wrapper = mount()
    await nextTick()
    expect(wrapper.findAll(ITEM_SELECTOR)).toHaveLength(7)

    await wrapper.setProps({
      cache: 4,
    })

    expect(wrapper.findAll(ITEM_SELECTOR)).toHaveLength(8)
  })

  it('should update rendered items when item size changed', async () => {
    const wrapper = mount()
    await nextTick()
    expect(wrapper.findAll(ITEM_SELECTOR)).toHaveLength(7)

    await wrapper.setProps({
      itemSize: 50,
    })

    expect(wrapper.findAll(ITEM_SELECTOR)).toHaveLength(5)
  })

  describe('scrollTo', () => {
    it('should correctly scroll vertically', async () => {
      const wrapper = mount()

      await nextTick()

      const listRef = wrapper.vm.$refs.listRef as ListExposes

      expect(wrapper.findAll(ITEM_SELECTOR)).toHaveLength(7)

      listRef.scrollTo(100)
      await nextTick()

      expect(wrapper.findAll(ITEM_SELECTOR)).toHaveLength(10)

      listRef.scrollTo(200)

      expect(wrapper.findAll(ITEM_SELECTOR)).toHaveLength(10)
    })

    it('should correctly scroll horizontally', async () => {
      const wrapper = mount({
        props: {
          layout: HORIZONTAL,
        },
      })

      await nextTick()

      const listRef = wrapper.vm.$refs.listRef as ListExposes

      expect(wrapper.findAll(ITEM_SELECTOR)).toHaveLength(5)

      listRef.scrollTo(100)
      await nextTick()

      expect(wrapper.findAll(ITEM_SELECTOR)).toHaveLength(8)

      listRef.scrollTo(200)

      expect(wrapper.findAll(ITEM_SELECTOR)).toHaveLength(8)
    })

    it('should not scroll out of the boundary', async () => {
      const wrapper = mount({
        props: {
          total: 10,
        },
      })

      await nextTick()

      const listRef = wrapper.vm.$refs.listRef as ListExposes

      expect(wrapper.findAll(ITEM_SELECTOR)).toHaveLength(7)

      // item size is 25 total number is 10 so the boundary is offset 250
      listRef.scrollTo(275)
      await nextTick()

      // when it reaches the boundary, it should only render visible ones.
      expect(wrapper.findAll(ITEM_SELECTOR)).toHaveLength(4)
    })
  })

  describe('scrollToItem', () => {
    it('should scrollToItem correctly', async () => {
      // auto alignment
      const wrapper = mount()

      await nextTick()

      expect(wrapper.findAll(ITEM_SELECTOR)).toHaveLength(7)

      const listRef = wrapper.vm.$refs.listRef as ListExposes

      listRef.scrollToItem(10)

      await nextTick()

      expect(wrapper.find(ITEM_SELECTOR).text()).toContain(4)

      listRef.scrollToItem(20)
      await nextTick()
      expect(wrapper.find(ITEM_SELECTOR).text()).toContain(14)
      // out bounds
      listRef.scrollToItem(101)
      await nextTick()
      expect(wrapper.find(ITEM_SELECTOR).text()).toContain(93)

      // start alignment
      listRef.scrollToItem(10, START_ALIGNMENT)
      await nextTick()
      // 10 - 3 (cache)
      expect(wrapper.find(ITEM_SELECTOR).text()).toContain(7)

      // center alignment
      listRef.scrollToItem(10, CENTERED_ALIGNMENT)
      await nextTick()
      // 10th item should be positioned in the middle, at position 3
      // so there were 2 items left in the viewport
      // also we have 3 cache items.
      // so that we get the first item: 10 - 2 - 3 = 5th item
      expect(wrapper.find(ITEM_SELECTOR).text()).toContain(5)
      //  centered alignment nearing the left boundary
      listRef.scrollToItem(1, CENTERED_ALIGNMENT)
      await nextTick()
      //   centered alignment nearing the right boundary
      listRef.scrollToItem(101, CENTERED_ALIGNMENT)
      await nextTick()
      expect(wrapper.find(ITEM_SELECTOR).text()).toContain(93)

      // end alignment
      listRef.scrollToItem(10, END_ALIGNMENT)
      await nextTick()
      // 10th item should be positioned at the end of the viewport
      // the viewport is size of 4, so there were 3 items left
      // and we have cache of 3, so the first item should be
      // 10 - 3 - 3 = 4th item
      expect(wrapper.find(ITEM_SELECTOR).text()).toContain(4)

      // smart alignment
      listRef.scrollToItem(10, SMART_ALIGNMENT)
      await nextTick()
      expect(wrapper.find(ITEM_SELECTOR).text()).toContain(4)

      listRef.scrollToItem(100, SMART_ALIGNMENT)
      await nextTick()
      expect(wrapper.find(ITEM_SELECTOR).text()).toContain(93)
    })
  })

  describe('to throw', () => {
    it('should throw when layout is invalid', () => {
      try {
        const wrapper = mount({
          props: {
            width: '100',
            height: '100',
          },
        })
        ;(wrapper.vm.$refs.listRef as ListRef).scrollToItem(10)
      } catch (e) {
        expect(e).toBeInstanceOf(Error)
      }
    })
  })
})
