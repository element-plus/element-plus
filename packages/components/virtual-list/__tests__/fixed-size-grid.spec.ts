import { nextTick } from 'vue'
import makeMount from '@element-plus/test-utils/make-mount'
import makeScroll from '@element-plus/test-utils/make-scroll'
import setupMock from '../setup-mock'
import {
  CENTERED_ALIGNMENT,
  START_ALIGNMENT,
  END_ALIGNMENT,
  SMART_ALIGNMENT,
} from '../src/defaults'
import { FixedSizeGrid } from '..'


import type { GridExposes } from '../src/types'

type GridRef = GridExposes

const onItemRendered = jest.fn()
const WINDOW_KLS = 'window'
const ITEM_KLS = 'item'
const ITEM_SELECTOR = `.${ITEM_KLS}`
const mount = makeMount(
  {
    template: `<fixed-size-grid v-bind="$attrs" ref="gridRef">
    <template #default="{columnIndex, style, rowIndex}">
      <div class="${ITEM_KLS}" :style="style">item {{ rowIndex }} {{ columnIndex }}</div>
    </template>
  </fixed-size-grid>`,
    components: {
      FixedSizeGrid,
    },
  },
  {
    props: {
      className: WINDOW_KLS,
      columnWidth: 50,
      height: 100,
      rowHeight: 25,
      totalColumn: 100,
      totalRow: 100,
      width: 100,
      onItemRendered,
    },
  },
)

let cleanup: () => void


describe('<fixed-size-grid />', () => {
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
    it('should render correctly', async () => {
      const wrapper = mount()

      await nextTick()

      // 8 visible grid. 2 x 4
      //               total rows  total columns
      //                   |           |
      // 16 cached grid  (2 + 2) x (4 + 2) - (2 x 4)
      expect(wrapper.findAll(ITEM_SELECTOR)).toHaveLength(24)

      const gridRef = wrapper.vm.$refs.gridRef as GridRef
      expect(gridRef.innerRef.style.height).toBe('2500px')
      expect(gridRef.innerRef.style.width).toBe('5000px')
    })

    it('should render zero row zero column', async () => {
      const wrapper = mount({
        props: {
          totalColumn: 0,
          totalRow: 0,
        },
      })

      await nextTick()
      expect(wrapper.findAll(ITEM_SELECTOR)).toHaveLength(0)

    })
  })

  describe('scroll testing', () => {
    it('should scroll correctly', async () => {
      const wrapper = mount()
      await nextTick()
      expect(wrapper.findAll(ITEM_SELECTOR)).toHaveLength(24)

      const gridRef = wrapper.vm.$refs.gridRef as GridRef

      makeScroll(gridRef.windowRef, 'scrollTop', 100)
      await nextTick()
      expect(wrapper.findAll(ITEM_SELECTOR)).toHaveLength(21)

      makeScroll(gridRef.windowRef, 'scrollLeft', 100)
      await nextTick()
      // 5 (backward cache 1 + visible 2 + forward cache 2)
      // * 7 (backward cache 1 + visible 4 + forward cache 2)
      // 35
      expect(wrapper.findAll(ITEM_SELECTOR)).toHaveLength(35)
    })

    it ('should not scroll at all', async () => {
      const wrapper = mount()
      await nextTick()
      expect(wrapper.findAll(ITEM_SELECTOR)).toHaveLength(24)

      const gridRef = wrapper.vm.$refs.gridRef as GridRef
      makeScroll(gridRef.windowRef, 'scrollTop', 0)
      await nextTick()
      expect(wrapper.findAll(ITEM_SELECTOR)).toHaveLength(24)

      makeScroll(gridRef.windowRef, 'scrollLeft', 0)
      await nextTick()
      expect(wrapper.findAll(ITEM_SELECTOR)).toHaveLength(24)
    })

    it('should run scrollTo correctly', async () => {
      const wrapper = mount()
      await nextTick()
      expect(wrapper.findAll(ITEM_SELECTOR)).toHaveLength(24)

      const gridRef = wrapper.vm.$refs.gridRef as GridRef
      gridRef.scrollTo({
        scrollLeft: 100,
        scrollTop: 0,
      })
      await nextTick()
      // 4 (0 + 2 + 2) * 8 (2 + 4 + 2) grid
      expect(wrapper.findAll(ITEM_SELECTOR)).toHaveLength(36)

      gridRef.scrollTo({
        scrollLeft: 100,
        scrollTop: 100,
      })
      await nextTick()
      // 6 (2 + 2 + 2) * 8 (2 + 4 + 2) grid
      expect(wrapper.findAll(ITEM_SELECTOR)).toHaveLength(48)
      const prevFirstItem = wrapper.find(ITEM_SELECTOR)
      // should do nothing
      gridRef.scrollTo({
        scrollLeft: 100,
        scrollTop: 100,
      })

      await nextTick()
      expect(wrapper.findAll(ITEM_SELECTOR)).toHaveLength(48)
      expect(wrapper.find(ITEM_SELECTOR)).toEqual(prevFirstItem)
    })

    it('should scrollToItem with correct alignment', async () => {
      const wrapper = mount()
      await nextTick()
      expect(wrapper.findAll(ITEM_SELECTOR)).toHaveLength(24)

      const gridRef = wrapper.vm.$refs.gridRef as GridRef
      // do nothing scroll
      gridRef.scrollToItem()
      await nextTick()
      expect(wrapper.findAll(ITEM_SELECTOR)).toHaveLength(24)

      // auto alignment
      gridRef.scrollToItem(10)
      await nextTick()
      // 8 x 4 grid
      expect(wrapper.findAll(ITEM_SELECTOR)).toHaveLength(32)

      gridRef.scrollToItem(10, 10)
      await nextTick()
      // 8 x 6 grid
      expect(wrapper.findAll(ITEM_SELECTOR)).toHaveLength(48)

      gridRef.scrollToItem(5, 5, SMART_ALIGNMENT)
      await nextTick()
      // 8 x 7 grid
      expect(wrapper.findAll(ITEM_SELECTOR)).toHaveLength(56)

      gridRef.scrollToItem(6, 6, SMART_ALIGNMENT)
      await nextTick()
      // 8 x 6 grid
      expect(wrapper.findAll(ITEM_SELECTOR)).toHaveLength(48)

      gridRef.scrollToItem(6, 6, START_ALIGNMENT)
      await nextTick()
      // 8 x 6 grid
      expect(wrapper.findAll(ITEM_SELECTOR)).toHaveLength(48)

      gridRef.scrollToItem(5, 5, CENTERED_ALIGNMENT)
      await nextTick()
      // 9 x 7 grid
      expect(wrapper.findAll(ITEM_SELECTOR)).toHaveLength(63)

      gridRef.scrollToItem(6, 6, CENTERED_ALIGNMENT)
      await nextTick()
      // 9 x 7 grid
      expect(wrapper.findAll(ITEM_SELECTOR)).toHaveLength(63)

      gridRef.scrollToItem(4, 4, END_ALIGNMENT)
      await nextTick()
      // 7 x 6 grid
      expect(wrapper.findAll(ITEM_SELECTOR)).toHaveLength(42)
    })
  })

  describe('error handling', () => {
    it('should throw when column-width is not number', () => {
      const errorHandler = jest.fn()

      mount({
        props: {
          columnWidth: '1',
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

      expect(errorHandler).toHaveBeenCalled()
    })

    it('should throw when row-height is not number', () => {
      const errorHandler = jest.fn()
      mount({
        props: {
          rowHeight: '1',
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

      expect(errorHandler).toHaveBeenCalled()

    })
  })

})
