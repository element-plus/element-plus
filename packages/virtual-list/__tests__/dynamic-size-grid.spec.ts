
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
import { DynamicSizeGrid } from '..'


import type { GridExposes } from '../src/types'

type GridRef = GridExposes

const onItemRendered = jest.fn()
const WINDOW_KLS = 'window'
const ITEM_KLS = 'item'
const ITEM_SELECTOR = `.${ITEM_KLS}`
const columnWidths = Array.from({ length: 100 })
  .map((_, i) => 25 + i)

const rowHeights = Array.from({ length: 100 })
  .map((_, i) => 25 + i)
const mount = makeMount(
  {
    template: `<dynamic-size-grid v-bind="$attrs" ref="gridRef">
    <template #default="{columnIndex, style, rowIndex}">
      <div class="${ITEM_KLS}" :style="style">item {{ rowIndex }} {{ columnIndex }}</div>
    </template>
  </dynamic-size-grid>`,
    components: {
      DynamicSizeGrid,
    },
  },
  {
    props: {
      className: WINDOW_KLS,
      columnWidth: (idx: number) => columnWidths[idx],
      height: 100,
      rowHeight: (idx: number) => rowHeights[idx],
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

      // 16 visible grid. 4 x 4
      //               total rows  total columns
      //                   |           |
      // 20 cached grid  (4 + 2) x (4 + 2)
      expect(wrapper.findAll(ITEM_SELECTOR)).toHaveLength(36)
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

      // 6(4 + 2) x 6(4 + 2) grid
      expect(wrapper.findAll(ITEM_SELECTOR)).toHaveLength(36)
      const gridRef = wrapper.vm.$refs.gridRef as GridRef

      makeScroll(gridRef.windowRef, 'scrollTop', 100)
      await nextTick()
      // 8 x 5 grid
      expect(wrapper.findAll(ITEM_SELECTOR)).toHaveLength(40)

      makeScroll(gridRef.windowRef, 'scrollLeft', 100)
      await nextTick()
      expect(wrapper.findAll(ITEM_SELECTOR)).toHaveLength(64)
    })

    it ('should not scroll at all', async () => {
      const wrapper = mount()
      await nextTick()
      expect(wrapper.findAll(ITEM_SELECTOR)).toHaveLength(36)

      const gridRef = wrapper.vm.$refs.gridRef as GridRef
      makeScroll(gridRef.windowRef, 'scrollTop', 0)
      await nextTick()
      expect(wrapper.findAll(ITEM_SELECTOR)).toHaveLength(36)

      makeScroll(gridRef.windowRef, 'scrollLeft', 0)
      await nextTick()
      expect(wrapper.findAll(ITEM_SELECTOR)).toHaveLength(36)
    })

    it('should run scrollTo correctly', async () => {
      const wrapper = mount()
      await nextTick()
      expect(onItemRendered).toHaveBeenCalledTimes(1)

      const gridRef = wrapper.vm.$refs.gridRef as GridRef
      gridRef.scrollTo({
        scrollLeft: 100,
        scrollTop: 0,
      })
      await nextTick()
      // 6 x 9 grid
      expect(wrapper.findAll(ITEM_SELECTOR)).toHaveLength(54)

      gridRef.scrollTo({
        scrollLeft: 100,
        scrollTop: 100,
      })
      await nextTick()
      // 9 x 9 grid
      expect(wrapper.findAll(ITEM_SELECTOR)).toHaveLength(81)

      // should do nothing
      gridRef.scrollTo({
        scrollLeft: 100,
        scrollTop: 100,
      })
      await nextTick()
      expect(wrapper.findAll(ITEM_SELECTOR)).toHaveLength(81)
    })

    it('should scrollToItem with correct alignment', async () => {
      const wrapper = mount()
      await nextTick()
      expect(wrapper.findAll(ITEM_SELECTOR)).toHaveLength(36)

      const gridRef = wrapper.vm.$refs.gridRef as GridRef
      // do nothing scroll
      gridRef.scrollToItem()
      await nextTick()
      expect(wrapper.findAll(ITEM_SELECTOR)).toHaveLength(36)

      // auto alignment
      gridRef.scrollToItem(10)
      await nextTick()
      // 7 x 6 grid
      expect(wrapper.findAll(ITEM_SELECTOR)).toHaveLength(42)

      gridRef.scrollToItem(10, 10)
      await nextTick()
      // 7 x 8 grid
      expect(wrapper.findAll(ITEM_SELECTOR)).toHaveLength(56)

      gridRef.scrollToItem(5, 5, SMART_ALIGNMENT)
      await nextTick()
      // 8 x 8 grid
      expect(wrapper.findAll(ITEM_SELECTOR)).toHaveLength(64)

      gridRef.scrollToItem(6, 6, SMART_ALIGNMENT)
      await nextTick()
      // 8 x 8 grid
      expect(wrapper.findAll(ITEM_SELECTOR)).toHaveLength(64)

      gridRef.scrollToItem(6, 6, START_ALIGNMENT)
      await nextTick()
      // 8 x 8 grid
      expect(wrapper.findAll(ITEM_SELECTOR)).toHaveLength(64)

      gridRef.scrollToItem(5, 5, CENTERED_ALIGNMENT)
      await nextTick()
      // 9 x 9 grid
      expect(wrapper.findAll(ITEM_SELECTOR)).toHaveLength(81)

      gridRef.scrollToItem(6, 6, CENTERED_ALIGNMENT)
      await nextTick()
      // 9 x 9 grid
      expect(wrapper.findAll(ITEM_SELECTOR)).toHaveLength(81)

      gridRef.scrollToItem(4, 4, END_ALIGNMENT)
      await nextTick()
      // 7 x 8 grid
      expect(wrapper.findAll(ITEM_SELECTOR)).toHaveLength(56)

      gridRef.scrollToItem(110, 110)
      await nextTick()
      expect(wrapper.findAll(ITEM_SELECTOR)).toHaveLength(9)

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

    it ('should be able to render component type', async () => {
      const A = {
        name: 'A',
        template: `<div><slot></slot></div>`,
      }
      const B = {
        name: 'B',
        template: `
          <div><slot></slot></div>
        `,
      }

      const wrapper = mount({
        props: {
          containerElement: 'A',
          innerElement: 'B',
        },
        global: {
          components: {
            A,
            B,
          },
        },
      })

      await nextTick()
      expect(wrapper.findComponent(A).exists()).toBe(true)
      expect(wrapper.findComponent(B).exists()).toBe(true)
    })
  })

})
