import { nextTick, ref } from 'vue'
import { mount } from '@vue/test-utils'
import { afterEach, beforeEach, describe, expect, test, vi } from 'vitest'
import { CaretLeft, CaretRight } from '@element-plus/icons-vue'
import Pagination from '../src/pagination'
import selectDropdownVue from '../../select/src/select-dropdown.vue'
import type { VueWrapper } from '@vue/test-utils'

const assertElementsExistence = (
  wrapper: VueWrapper<any>,
  selectors: string[],
  existence: boolean
) => {
  selectors.forEach((selector) => {
    expect(wrapper.find(selector).exists()).toBe(existence)
  })
}

const assertCurrent = (wrapper: VueWrapper<any>, page: number) => {
  expect(wrapper.find('.el-pager li.is-active.number').text()).toBe(
    String(page)
  )
}
const assertPages = (wrapper: VueWrapper<any>, total: number) => {
  expect(wrapper.find('.el-pagination .el-pager li:last-child').text()).toBe(
    String(total)
  )
}

describe('Pagination', () => {
  describe('test invalid usages', () => {
    const cacheWarn = console.warn
    beforeEach(() => {
      console.warn = vi.fn()
    })
    afterEach(() => {
      console.warn = cacheWarn
    })
    test('both absence of total & pageCount is invalid', async () => {
      expect(console.warn).not.toHaveBeenCalled()
      const total = ref<number | undefined>(undefined)
      const wrapper = mount(() => <Pagination total={total.value}></Pagination>)

      expect(wrapper.find('.el-pagination').exists()).toBe(false)
      expect(console.warn).toHaveBeenCalled()
      total.value = 100
      await nextTick()
      expect(wrapper.find('.el-pagination').exists()).toBe(true)
    })
    test('current-page defined while absence of current-page listener is invalid', () => {
      expect(console.warn).not.toHaveBeenCalled()
      const wrapper = mount(() => (
        <Pagination total={100} currentPage={1}></Pagination>
      ))

      expect(wrapper.find('.el-pagination').exists()).toBe(false)
      expect(console.warn).toHaveBeenCalled()
    })
    test('layout with `sizes` restrictions(page-count)', () => {
      expect(console.warn).not.toHaveBeenCalled()
      const wrapper = mount(() => (
        <Pagination layout="sizes, pager" pageCount={10}></Pagination>
      ))
      expect(wrapper.find('.el-pagination').exists()).toBe(false)
      expect(console.warn).toHaveBeenCalled()
    })
    test('layout with `sizes` restrictions(page-size)', () => {
      expect(console.warn).not.toHaveBeenCalled()
      const wrapper = mount(() => (
        <Pagination layout="sizes, pager" pageSize={10}></Pagination>
      ))

      expect(wrapper.find('.el-pagination').exists()).toBe(false)
      expect(console.warn).toHaveBeenCalled()
    })
  })

  describe('test layout & layout reactive change', () => {
    const layoutRef = ref('')
    const wrapper = mount(() => (
      <Pagination total={100} layout={layoutRef.value}></Pagination>
    ))

    test('layout empty', async () => {
      await nextTick()
      expect(wrapper.find('.el-pagination').exists()).toBe(false)
    })
    const layoutSelectorPairs = [
      ['sizes', '.el-pagination__sizes'],
      ['prev', 'button.btn-prev'],
      ['pager', 'ul.el-pager'],
      ['next', 'button.btn-next'],
      ['jumper', '.el-pagination__jump'],
      ['total', '.el-pagination__total'],
    ]
    layoutSelectorPairs.forEach(([layout], idx) => {
      test(`layout with only '${layout}'`, async () => {
        layoutRef.value = layout
        await nextTick()
        for (const [i, layoutSelectorPair] of layoutSelectorPairs.entries()) {
          expect(wrapper.find(layoutSelectorPair[1]).exists()).toBe(i === idx)
        }
      })
    })

    test(`layout with '->, total'`, async () => {
      layoutRef.value = '->, total'
      await nextTick()
      assertElementsExistence(
        wrapper,
        ['.el-pagination__total', '.el-pagination__rightwrapper'],
        true
      )
    })

    test('layout with default layout prop', () => {
      const wrapper = mount(() => <Pagination total={100}></Pagination>)

      assertElementsExistence(
        wrapper,
        [
          '.el-pagination__rightwrapper',
          'button.btn-prev',
          'ul.el-pager',
          'button.btn-next',
          '.el-pagination__jump',
        ],
        true
      )
    })

    test('test layout with slot', () => {
      const wrapper = mount(() => (
        <Pagination layout="slot, prev, pager, next" pageSize={25} total={100}>
          <span class="slot-test">slot test</span>
        </Pagination>
      ))

      expect(wrapper.find('.slot-test').exists()).toBe(true)
    })

    test('test small layout', () => {
      const wrapper = mount(() => (
        <Pagination total={100} size="small"></Pagination>
      ))

      expect(wrapper.vm.$el.classList.contains('el-pagination--small')).toBe(
        true
      )
    })

    test('test with background', async () => {
      const withBackground = ref(true)
      const wrapper = mount(() => (
        <Pagination total={100} background={withBackground.value}></Pagination>
      ))

      expect(wrapper.find('.is-background').exists()).toBe(true)
      withBackground.value = false
      await nextTick()
      expect(wrapper.find('.is-background').exists()).toBe(false)
    })

    test('test hide-on-single-page prop', async () => {
      const hideOnSinglePage = ref(false)
      const wrapper = mount(() => (
        <Pagination
          total={10} // deivded by default page-size(10), there will be only one page
          hideOnSinglePage={hideOnSinglePage.value}
        />
      ))

      expect(wrapper.find('.el-pagination').exists()).toBe(true)
      hideOnSinglePage.value = true
      await nextTick()
      expect(wrapper.find('.el-pagination').exists()).toBe(false)
    })

    test('test custom icon', async () => {
      const wrapper = mount(() => (
        <Pagination
          layout="prev, pager, next"
          total={1000}
          prev-icon={CaretLeft}
          next-icon={CaretRight}
        />
      ))

      const btnPrev = wrapper.findComponent(CaretLeft).element
      const caretLeftIcon = mount(CaretLeft).find('svg').element
      expect(btnPrev.innerHTML).toBe(caretLeftIcon.innerHTML)

      const nextPrev = wrapper.findComponent(CaretRight).element
      const caretRightIcon = mount(CaretRight).find('svg').element
      expect(nextPrev.innerHTML).toBe(caretRightIcon.innerHTML)
    })
  })

  describe('test pageSize & currentPage reactive change', () => {
    test(`test pageSize change`, async () => {
      const pageSize = ref(10)
      const wrapper = mount(() => (
        <Pagination layout="pager" total={100} pageSize={pageSize.value} />
      ))

      // total pages = Math.ceil(total / pageSize)
      assertPages(wrapper, 10)
      pageSize.value = 20
      await nextTick()
      assertPages(wrapper, 5)
      pageSize.value = 55
      await nextTick()
      assertPages(wrapper, 2)
    })
    test('test currentPage change', async () => {
      const pageSize = ref(10)
      const defaultCurrentPage = ref(2)
      const wrapper = mount(() => (
        <Pagination
          layout="prev, pager, next"
          total={100}
          pageSize={pageSize.value}
          defaultCurrentPage={defaultCurrentPage.value}
        />
      ))

      assertCurrent(wrapper, 2)
      defaultCurrentPage.value = 1
      assertCurrent(wrapper, 2) // still 2
      await wrapper.find('.el-pager li:last-child').trigger('click')
      assertCurrent(wrapper, 10)
      await wrapper.find('button.btn-prev').trigger('click')
      assertCurrent(wrapper, 9)
      await wrapper.find('button.btn-next').trigger('click')
      assertCurrent(wrapper, 10)
      pageSize.value = 50
      await nextTick()
      assertCurrent(wrapper, 2)
    })

    test('test pageCount change and side effect', async () => {
      const pageCount = ref(10)
      const wrapper = mount(() => (
        <Pagination layout="prev, pager, next" pageCount={pageCount.value} />
      ))

      assertPages(wrapper, 10)
      pageCount.value = 20
      await nextTick()
      assertPages(wrapper, 20)
      await wrapper.find('.el-pager li:last-child').trigger('click')
      assertCurrent(wrapper, 20)
      pageCount.value = 5
      await nextTick()
      // side effect, if currentPage is greater than pageCount
      // currentPage should change accordingly
      assertPages(wrapper, 5)
      assertCurrent(wrapper, 5)
    })

    test('test listener work', async () => {
      const pageSizeWatcher = vi.fn()
      const currentPageWatcher = vi.fn()
      let count = 0
      const pageWatcher = () => {
        count += 1
      }
      const wrapper = mount(() => (
        <Pagination
          total={100}
          layout="prev, pager, next, sizes"
          onUpdate:current-page={currentPageWatcher}
          onUpdate:page-size={pageSizeWatcher}
          onChange={pageWatcher}
        />
      ))

      await wrapper.find('.el-pager li:last-child').trigger('click')
      assertCurrent(wrapper, 10 /* Math.ceil(100/10) */)
      expect(currentPageWatcher).toHaveBeenCalled()
      expect(count).toBe(1)
      await wrapper.find('.el-select').trigger('click')
      await wrapper
        .getComponent(selectDropdownVue)
        .find('li:nth-child(2)')
        .trigger('click')
      expect(count).toBe(2)
      expect(pageSizeWatcher).toHaveBeenCalled()
      assertCurrent(wrapper, 5 /* Math.ceil(100/20) */)
    })
  })

  describe('test a11y supports', () => {
    test('test a11y attributes', async () => {
      // 1 2 3 4 5 6 ... 10
      const wrapper = mount(() => <Pagination total={100} />)
      const prev = wrapper.find('.el-pagination .btn-prev')
      const next = wrapper.find('.el-pagination .btn-next')
      const pagers = wrapper.findAll('.el-pagination .el-pager .number')
      const first = pagers[0]
      const last = pagers[pagers.length - 1]

      expect(prev.attributes('aria-label')).toBe('Go to previous page')
      expect(next.attributes('aria-label')).toBe('Go to next page')
      expect(last.attributes('aria-label')).toBe('page 10')
      pagers.slice(0, 6).forEach((item, index) => {
        expect(item.attributes('aria-label')).toBe(`page ${index + 1}`)
      })
      expect(wrapper.find('.more').attributes('aria-label')).toBe(
        'Next 5 pages'
      )

      expect(prev.attributes('aria-disabled')).toBe('true')
      expect(next.attributes('aria-disabled')).toBe('false')
      expect(first.attributes('aria-current')).toBe('true')
      expect(last.attributes('aria-current')).toBe('false')

      await last.trigger('click')
      expect(prev.attributes('aria-disabled')).toBe('false')
      expect(next.attributes('aria-disabled')).toBe('true')
      expect(first.attributes('aria-current')).toBe('false')
      expect(last.attributes('aria-current')).toBe('true')
      expect(wrapper.find('.more').attributes('aria-label')).toBe(
        'Previous 5 pages'
      )
    })

    test('test tabindex interactive', async () => {
      const wrapper = mount(() => <Pagination total={100} />)
      await wrapper.find('.el-pager li:nth-child(2)').trigger('click')
      assertCurrent(wrapper, 2)
      await wrapper.find('.el-pager li:nth-child(3)').trigger('click', {
        key: 'Enter',
      })
      assertCurrent(wrapper, 3)
      // TODO getComputedStyle is not implemented in jsdom, so I duno how to assert style of psuedo-class
      /*
       * await wrapper.find('.el-pager li:nth-child(3)').trigger('keyup', {
       *   key: 'Tab',
       * })
       * const style = window.getComputedStyle(wrapper.find('.el-pager li:nth-child(4)').element, ':focus-visible')
       * expect(style.outline).toBeTruthy()
       */
    })

    test('test tabindex disabled', async () => {
      const disabled = ref(true)
      const wrapper = mount(() => (
        <Pagination total={100} disabled={disabled.value}></Pagination>
      ))

      expect(
        wrapper.find('.el-pager li:first-child').attributes('tabindex')
      ).toBe('-1')

      disabled.value = false

      await nextTick()
      expect(
        wrapper.find('.el-pager li:first-child').attributes('tabindex')
      ).toBe('0')
    })
  })
})
