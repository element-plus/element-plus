import { nextTick } from 'vue'
import makeMount from '@element-plus/test-utils/make-mount'
import setupMock from '../setup-mock'
import {
  HORIZONTAL,
  START_ALIGNMENT,
  END_ALIGNMENT,
  SMART_ALIGNMENT,
} from '../src/defaults'
import { DynamicSizeList } from '..'

import type { ListExposes } from '../src/types'
type ListRef = ListExposes

const onItemRendered = jest.fn()
const WINDOW_KLS = 'window'
const ITEM_KLS = 'item'
const ITEM_SELECTOR = `.${ITEM_KLS}`
const BASE_SIZE = 25 * 100 // base size * total

const widths = Array.from({ length: 100 })
  .map(() => 25 + Math.floor(Math.random() * 5) + 1) // greater than 26 less or equal to 30

const mount = makeMount(
  {
    template: `<dynamic-size-list v-bind="$attrs" ref="listRef">
    <template #default="{index, style}">
      <div class="${ITEM_KLS}" :style="style">{{ index }}</div>
    </template>
  </dynamic-size-list>`,
    components: {
      DynamicSizeList,
    },
  },
  {
    props: {
      cache: 3,
      className: WINDOW_KLS,
      estimatedItemSize: 25,
      height: 100,
      total: 100,
      itemSize: (idx: number) => widths[idx],
      width: 50,
      onItemRendered,
    },
  },
)

let cleanup: () => void

describe('<dynamic-size-list />', () => {

  beforeAll(() => {
    cleanup = setupMock()
  })

  afterAll(() => {
    cleanup()
  })

  beforeEach(() => {
    onItemRendered.mockClear()
  })

  describe('render testing', () => {
    it('should render vertical list correctly', async () => {
      const wrapper = mount()
      // since the width is variable width, so that we can only conclude
      // a relative number based on the minimal width 26
      // (item's width is greater or equal to 26)
      expect(wrapper.findAll(ITEM_SELECTOR).length).toBeLessThanOrEqual(7)
    })

    it('should render horizontal list correctly', async () => {
      const wrapper = mount({
        props: {
          layout: HORIZONTAL,
        },
      })
      await nextTick()
      // same like the vertical one, since the window size is 50, item size is >= 26
      // with cache items the total size cannot be greater than 5
      expect(wrapper.findAll(ITEM_SELECTOR).length).toBeLessThanOrEqual(5)
    })
  })

  describe('scroll functionality', () => {
    it('should update inner container\'s height after scroll dispatched', async () => {
      const wrapper = mount()
      const listRef = wrapper.vm.$refs.listRef as ListRef
      await nextTick()
      const estimatedTotalSize = Number.parseInt(listRef.innerRef.style.height)
      // when the size is all 26, then there should be 7 items 4 visible + 3 cache
      // so the size must be greater or equal to BASE_SIZE + 1 * 7, so it must be greater
      // than BASE_SIZE + 1 * 6
      expect(estimatedTotalSize).toBeGreaterThan(BASE_SIZE + 1 * 6)
      // when the size is all 30, then there should be 6 items at most 3 visible 3 cache.
      // because the window size is 100, 100 / 30 = 3.333 less than 3.5, so that we can only
      // place 3 items into the visible list.
      // so it must be less than 5(30 - 25) * 7 (6 + 1 items)
      expect(estimatedTotalSize).toBeLessThan(BASE_SIZE + 5 * 7)

      // scroll 200px is approximately ~7(size 30px) - ~8(size 26px) items away.
      listRef.scrollTo(200)
      await nextTick()
      expect(
        Number.parseInt(listRef.innerRef.style.height),
      ).toBeGreaterThan(estimatedTotalSize)

      // when using scrollTo method, the list consists of
      // 3 cached items + (3 ~ 4) visible items + 3 cached items
      // as we scroll 7 ~ 8 items far, then the first item in the DOM should be
      // (7 | 8) - 3 = (4 | 5) cached items
      // continue with (7 | 8) visible items
      // end with (10 | 11) cached items
      // so the base case is that our window's height has been updated for at least 10 times
      // the height should be only be updated at most 5(the biggest size) * 11
      expect(
        Number.parseInt(listRef.innerRef.style.height),
      ).toBeGreaterThan(BASE_SIZE + 1 * 10)

      expect(
        Number.parseInt(listRef.innerRef.style.height),
      ).toBeLessThan(BASE_SIZE + 5 * 12)

      expect(wrapper.findAll(ITEM_SELECTOR).length).toBeGreaterThan(8)
      expect(wrapper.findAll(ITEM_SELECTOR).length).toBeLessThanOrEqual(11)
    })

    it('should scroll correctly in horizontal mode', async () => {
      const wrapper = mount({
        props: {
          layout: HORIZONTAL,
        },
      })

      const listRef = wrapper.vm.$refs.listRef as ListRef
      await nextTick()
      const estimatedTotalSize = Number.parseInt(listRef.innerRef.style.width)
      // when the size is all 26, then there should be 7 items 2 visible + 3 cache
      // so the size must be greater or equal to BASE_SIZE + 1 * 5, so it must be greater
      // than BASE_SIZE + 1 * 4
      expect(estimatedTotalSize).toBeGreaterThan(BASE_SIZE + 1 * 4)
      // when the size is all 30, then there should be 5 items at most 2 visible 3 cache.
      // because the window size is 100, 50 / 30 = 1.66 greater than 1.5, so that we can only
      // place 2 items into the visible list.
      // so it must be less than 5(30 - 25) * 6 (5 + 1 items)
      expect(estimatedTotalSize).toBeLessThan(BASE_SIZE + 5 * 6)

      // scroll 200px is approximately ~7(size 30px) - ~8(size 26px) items away.
      listRef.scrollTo(200)
      await nextTick()
      expect(
        Number.parseInt(listRef.innerRef.style.width),
      ).toBeGreaterThan(estimatedTotalSize)

      // when using scrollTo method, the list consists of
      // 3 cached items + 2 visible items + 3 cached items
      // as we scroll 7 ~ 8 items far, then the first item in the DOM should be
      // (7 | 8) - 3 = (4 | 5) cached items
      // continue with (6 | 7) visible items
      // end with (9 | 10) cached items
      // so the base case is that our window's width has been updated for at least 10 times
      // the width should be only be updated at most 5(the biggest size) * 11
      expect(
        Number.parseInt(listRef.innerRef.style.width),
      ).toBeGreaterThan(BASE_SIZE + 1 * 9)

      expect(
        Number.parseInt(listRef.innerRef.style.width),
      ).toBeLessThan(BASE_SIZE + 5 * 11)
      expect(wrapper.findAll(ITEM_SELECTOR).length).toBeLessThanOrEqual(9)
    })

    // make sure to scroll with in [0, 30), thus we won't get offset issue since
    // item index bigger than 30 could create unwanted offset issue in testing.
    it('should scrollToItem correctly', async () => {
      const wrapper = mount()

      const listRef = wrapper.vm.$refs.listRef as ListRef
      // auto alignment
      listRef.scrollToItem(10)
      await nextTick()
      // when scroll to item 10 the estimated offset should be 250
      // the original grid position is 0, so it should return 200 (offset 250 - size 50)
      // to scrollTo method to handle, which at this time the scrollTo item should be placed
      // at the bottom of the list since the maximum visible items to display is 4.
      // minus the cache size 3 the first item should be item 4.
      expect(Number.parseInt(wrapper.find(ITEM_SELECTOR).text())).toBeLessThanOrEqual(4)
      // smart alignment
      listRef.scrollToItem(20, SMART_ALIGNMENT)
      await nextTick()
      expect(Number.parseInt(wrapper.find(ITEM_SELECTOR).text())).toBeLessThanOrEqual(15)

      listRef.scrollToItem(21, SMART_ALIGNMENT)
      await nextTick()
      expect(Number.parseInt(wrapper.find(ITEM_SELECTOR).text())).toBeLessThanOrEqual(15)

      listRef.scrollToItem(10, START_ALIGNMENT)
      await nextTick()
      expect(Number.parseInt(wrapper.find(ITEM_SELECTOR).text())).toBeLessThanOrEqual(7)

      listRef.scrollToItem(20, END_ALIGNMENT)
      await nextTick()
      expect(Number.parseInt(wrapper.find(ITEM_SELECTOR).text())).toBeLessThanOrEqual(14)


      listRef.scrollTo(200)
      await nextTick()
      listRef.scrollToItem(5)
      expect(Number.parseInt(wrapper.find(ITEM_SELECTOR).text())).toBeLessThanOrEqual(4)
    })
  })

  describe('to throw', () => {
    it('should throw when item-size is not function', () => {

      const errorHandler = jest.fn()
      try {
        mount({
          props: {
            itemSize: 1,
          },
          global: {
            config: {
              errorHandler,
              warnHandler() {
                // suppress warning
              },
            },
          },
        })
      } catch(e) {
        expect(errorHandler).toHaveBeenCalled()
        expect(e).toBeInstanceOf(Error)
        expect(e.message).toContain('itemSize is required as function')
      }
    })
  })
})
