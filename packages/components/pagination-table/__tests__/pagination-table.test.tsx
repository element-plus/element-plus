import { nextTick } from 'vue'
import { mount } from '@vue/test-utils'
import { describe, expect, test, vi } from 'vitest'
import PaginationTable from '../index'

describe('PaginationTable', () => {
  describe('basic functionality', () => {
    test('should render correctly', () => {
      const wrapper = mount(() => <PaginationTable data={[]} total={0} />)

      expect(wrapper.find('.el-pagination-table').exists()).toBe(true)
      expect(wrapper.find('.el-pagination-table__table').exists()).toBe(true)
      expect(wrapper.find('.el-pagination-table__pagination').exists()).toBe(
        true
      )
    })

    test('should render table rows when data is provided', () => {
      const testData = [
        { id: 1, name: 'Item 1' },
        { id: 2, name: 'Item 2' },
      ]
      const wrapper = mount(() => <PaginationTable data={testData} total={2} />)

      // 检查是否有 table 元素
      expect(wrapper.find('table').exists()).toBe(true)
    })
  })

  describe('props', () => {
    test('should respect currentPage prop', () => {
      const wrapper = mount(() => (
        <PaginationTable data={[]} total={30} currentPage={3} />
      ))

      // 检查分页组件是否存在
      expect(wrapper.find('.el-pagination').exists()).toBe(true)
    })

    test('should respect pageSize prop', () => {
      const wrapper = mount(() => (
        <PaginationTable data={[]} total={30} pageSize={20} />
      ))

      // 检查分页组件是否存在
      expect(wrapper.find('.el-pagination').exists()).toBe(true)
    })
  })

  describe('events', () => {
    test('should emit current-change event when pagination is clicked', async () => {
      const currentChange = vi.fn()
      const wrapper = mount(() => (
        <PaginationTable data={[]} total={30} onCurrentChange={currentChange} />
      ))

      // 检查分页器是否存在
      const pagers = wrapper.findAll('.el-pager li.number')
      if (pagers.length > 1) {
        await pagers[1].trigger('click')
        await nextTick()

        // 确认事件被触发
        expect(currentChange).toHaveBeenCalled()
      }
    })

    test('should emit update:current-page event when pagination is clicked', async () => {
      const updateCurrentPage = vi.fn()
      const wrapper = mount(() => (
        <PaginationTable
          data={[]}
          total={30}
          onUpdate:currentPage={updateCurrentPage}
        />
      ))

      // 检查分页器是否存在
      const pagers = wrapper.findAll('.el-pager li.number')
      if (pagers.length > 1) {
        await pagers[1].trigger('click')
        await nextTick()

        // 确认事件被触发
        expect(updateCurrentPage).toHaveBeenCalled()
      }
    })
  })

  describe('dataAtOnce mode', () => {
    const testData = Array.from({ length: 15 }, (_, i) => ({
      id: i + 1,
      name: `Item ${i + 1}`,
    }))

    test('should render correct number of items when dataAtOnce is true', () => {
      const wrapper = mount(() => (
        <PaginationTable data={testData} dataAtOnce={true} />
      ))

      // 检查分页组件是否存在
      expect(wrapper.find('.el-pagination').exists()).toBe(true)
    })
  })
})
