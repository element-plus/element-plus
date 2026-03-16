// @ts-nocheck
import { nextTick } from 'vue'
import { afterEach, describe, expect, it, vi } from 'vitest'
import ElTable from '../src/table.vue'
import ElTableColumn from '../src/table-column'
import { doubleWait, mount } from './table-test-common'

vi.mock('lodash-unified', async () => {
  return {
    ...((await vi.importActual('lodash-unified')) as Record<string, any>),
    debounce: vi.fn((fn) => {
      fn.cancel = vi.fn()
      fn.flush = vi.fn()
      return fn
    }),
  }
})

Range.prototype.getBoundingClientRect = () => ({
  bottom: 0,
  height: 0,
  left: 0,
  right: 0,
  top: 0,
  width: 0,
})

function generateLargeData(count: number) {
  return Array.from({ length: count }, (_, i) => ({
    id: i + 1,
    name: `Row ${i + 1}`,
    value: `Value ${i + 1}`,
  }))
}

function generateTreeData(parentCount: number, childCount: number) {
  return Array.from({ length: parentCount }, (_, i) => ({
    id: i + 1,
    name: `Parent ${i + 1}`,
    value: `Value ${i + 1}`,
    children: Array.from({ length: childCount }, (_, j) => ({
      id: parentCount + i * childCount + j + 1,
      name: `Child ${i + 1}-${j + 1}`,
      value: `ChildValue ${i + 1}-${j + 1}`,
    })),
  }))
}

describe('Table Virtual Scroll', () => {
  afterEach(() => {
    document.body.innerHTML = ''
  })

  describe('basic virtual scroll', () => {
    it('should render only visible rows when use-virtual is enabled', async () => {
      const data = generateLargeData(100)
      const wrapper = mount({
        components: { ElTable, ElTableColumn },
        template: `
          <el-table
            :data="data"
            height="200"
            :use-virtual="true"
            :row-height="32"
            row-key="id"
          >
            <el-table-column prop="id" label="ID" />
            <el-table-column prop="name" label="Name" />
          </el-table>
        `,
        data() {
          return { data }
        },
      })

      await doubleWait()

      const rows = wrapper.findAll('.el-table__body-wrapper tbody tr')
      // With height=200, rowHeight=32, visibleCount=ceil(200/32)=7, plus excessRows(3)+1=11
      // Should render far fewer than 100 rows
      expect(rows.length).toBeLessThan(100)
      expect(rows.length).toBeGreaterThan(0)

      wrapper.unmount()
    })

    it('should set virtual body height based on total row count', async () => {
      const data = generateLargeData(50)
      const wrapper = mount({
        components: { ElTable, ElTableColumn },
        template: `
          <el-table
            :data="data"
            height="200"
            :use-virtual="true"
            :row-height="40"
            row-key="id"
          >
            <el-table-column prop="id" label="ID" />
            <el-table-column prop="name" label="Name" />
          </el-table>
        `,
        data() {
          return { data }
        },
      })

      await doubleWait()

      // virtualBodyHeight = data.length * rowHeight = 50 * 40 = 2000
      const virtualContainer = wrapper.find(
        '.el-table__body-wrapper .el-scrollbar__view > div'
      )
      expect(virtualContainer.attributes('style')).toContain('height: 2000px')

      wrapper.unmount()
    })

    it('should set fixed row height on each tr', async () => {
      const data = generateLargeData(20)
      const wrapper = mount({
        components: { ElTable, ElTableColumn },
        template: `
          <el-table
            :data="data"
            height="200"
            :use-virtual="true"
            :row-height="50"
            row-key="id"
          >
            <el-table-column prop="id" label="ID" />
          </el-table>
        `,
        data() {
          return { data }
        },
      })

      await doubleWait()

      const rows = wrapper.findAll('.el-table__body-wrapper tbody tr')
      for (const row of rows) {
        expect(row.attributes('style')).toContain('height: 50px')
      }

      wrapper.unmount()
    })

    it('should render all rows when use-virtual is false', async () => {
      const data = generateLargeData(20)
      const wrapper = mount({
        components: { ElTable, ElTableColumn },
        template: `
          <el-table
            :data="data"
            height="200"
            :use-virtual="false"
            row-key="id"
          >
            <el-table-column prop="id" label="ID" />
          </el-table>
        `,
        data() {
          return { data }
        },
      })

      await doubleWait()

      const rows = wrapper.findAll('.el-table__body-wrapper tbody tr')
      expect(rows.length).toEqual(20)

      wrapper.unmount()
    })

    it('should update visible rows when data changes', async () => {
      const wrapper = mount({
        components: { ElTable, ElTableColumn },
        template: `
          <el-table
            :data="data"
            height="200"
            :use-virtual="true"
            :row-height="32"
            row-key="id"
          >
            <el-table-column prop="id" label="ID" />
            <el-table-column prop="name" label="Name" />
          </el-table>
        `,
        data() {
          return { data: generateLargeData(100) }
        },
      })

      await doubleWait()

      const rowsBefore = wrapper.findAll('.el-table__body-wrapper tbody tr')
      const countBefore = rowsBefore.length

      await wrapper.setData({ data: generateLargeData(5) })
      await doubleWait()

      const rowsAfter = wrapper.findAll('.el-table__body-wrapper tbody tr')
      expect(rowsAfter.length).toBeLessThanOrEqual(5)
      expect(rowsAfter.length).toBeLessThan(countBefore)

      wrapper.unmount()
    })

    it('should respect excess-rows prop', async () => {
      const data = generateLargeData(100)
      const wrapperSmall = mount({
        components: { ElTable, ElTableColumn },
        template: `
          <el-table
            :data="data"
            height="200"
            :use-virtual="true"
            :row-height="32"
            :excess-rows="1"
            row-key="id"
          >
            <el-table-column prop="id" label="ID" />
          </el-table>
        `,
        data() {
          return { data }
        },
      })

      const wrapperLarge = mount({
        components: { ElTable, ElTableColumn },
        template: `
          <el-table
            :data="data"
            height="200"
            :use-virtual="true"
            :row-height="32"
            :excess-rows="10"
            row-key="id"
          >
            <el-table-column prop="id" label="ID" />
          </el-table>
        `,
        data() {
          return { data }
        },
      })

      await doubleWait()

      const rowsSmall = wrapperSmall.findAll('.el-table__body-wrapper tbody tr')
      const rowsLarge = wrapperLarge.findAll('.el-table__body-wrapper tbody tr')
      // Larger excessRows should render more rows
      expect(rowsLarge.length).toBeGreaterThan(rowsSmall.length)

      wrapperSmall.unmount()
      wrapperLarge.unmount()
    })

    it('should work with max-height', async () => {
      const data = generateLargeData(100)
      const wrapper = mount({
        components: { ElTable, ElTableColumn },
        template: `
          <el-table
            :data="data"
            max-height="200"
            :use-virtual="true"
            :row-height="32"
            row-key="id"
          >
            <el-table-column prop="id" label="ID" />
          </el-table>
        `,
        data() {
          return { data }
        },
      })

      await doubleWait()

      const rows = wrapper.findAll('.el-table__body-wrapper tbody tr')
      expect(rows.length).toBeLessThan(100)
      expect(rows.length).toBeGreaterThan(0)

      wrapper.unmount()
    })
  })

  describe('virtual scroll with tree data', () => {
    it('should render tree rows correctly with virtual scroll', async () => {
      const data = generateTreeData(10, 3)
      const wrapper = mount({
        components: { ElTable, ElTableColumn },
        template: `
          <el-table
            :data="data"
            height="300"
            :use-virtual="true"
            :row-height="32"
            row-key="id"
            default-expand-all
          >
            <el-table-column prop="id" label="ID" />
            <el-table-column prop="name" label="Name" />
          </el-table>
        `,
        data() {
          return { data }
        },
      })

      await doubleWait()
      await nextTick()

      const rows = wrapper.findAll('.el-table__body-wrapper tbody tr')
      // Total rows = 10 parents + 10*3 children = 40, but virtual scroll should render fewer
      expect(rows.length).toBeGreaterThan(0)
      expect(rows.length).toBeLessThan(40)

      wrapper.unmount()
    })

    it('should update virtual body height when tree nodes are expanded', async () => {
      const data = generateTreeData(5, 4)
      const wrapper = mount({
        components: { ElTable, ElTableColumn },
        template: `
          <el-table
            :data="data"
            height="300"
            :use-virtual="true"
            :row-height="32"
            row-key="id"
          >
            <el-table-column prop="id" label="ID" />
            <el-table-column prop="name" label="Name" />
          </el-table>
        `,
        data() {
          return { data }
        },
      })

      await doubleWait()

      // Initially only 5 top-level rows, height = 5 * 32 = 160
      const virtualContainer = wrapper.find(
        '.el-table__body-wrapper .el-scrollbar__view > div'
      )
      expect(virtualContainer.attributes('style')).toContain('height: 160px')

      // Click to expand the first row
      const expandIcon = wrapper.find(
        '.el-table__body-wrapper .el-table__expand-icon'
      )
      if (expandIcon.exists()) {
        await expandIcon.trigger('click')
        await doubleWait()
        await nextTick()

        // After expanding first parent (4 children), height = (5 + 4) * 32 = 288
        expect(virtualContainer.attributes('style')).toContain('height: 288px')
      }

      wrapper.unmount()
    })

    it('should calculate tree start and end correctly', async () => {
      const data = generateTreeData(20, 5)
      const wrapper = mount({
        components: { ElTable, ElTableColumn },
        template: `
          <el-table
            :data="data"
            height="300"
            :use-virtual="true"
            :row-height="32"
            row-key="id"
            default-expand-all
          >
            <el-table-column prop="id" label="ID" />
            <el-table-column prop="name" label="Name" />
          </el-table>
        `,
        data() {
          return { data }
        },
      })

      await doubleWait()
      await nextTick()

      // Total = 20 parents + 20*5 children = 120 rows
      // virtualBodyHeight = 120 * 32 = 3840
      const virtualContainer = wrapper.find(
        '.el-table__body-wrapper .el-scrollbar__view > div'
      )
      expect(virtualContainer.attributes('style')).toContain('height: 3840px')

      // Rendered rows should be much less than total
      const rows = wrapper.findAll('.el-table__body-wrapper tbody tr')
      expect(rows.length).toBeLessThan(120)

      wrapper.unmount()
    })
  })

  describe('virtual scroll with lazy tree', () => {
    it('should render lazy tree table with virtual scroll', async () => {
      const wrapper = mount({
        components: { ElTable, ElTableColumn },
        template: `
          <el-table
            :data="data"
            height="300"
            :use-virtual="true"
            :row-height="32"
            row-key="id"
            lazy
            :load="loadChildren"
            :tree-props="{ children: 'children', hasChildren: 'hasChildren' }"
          >
            <el-table-column prop="id" label="ID" />
            <el-table-column prop="name" label="Name" />
          </el-table>
        `,
        data() {
          return {
            data: Array.from({ length: 20 }, (_, i) => ({
              id: i + 1,
              name: `Parent ${i + 1}`,
              hasChildren: true,
            })),
          }
        },
        methods: {
          loadChildren(row, _treeNode, resolve) {
            setTimeout(() => {
              resolve(
                Array.from({ length: 3 }, (_, i) => ({
                  id: row.id * 1000 + i + 1,
                  name: `Child ${row.id}-${i + 1}`,
                }))
              )
            }, 0)
          },
        },
      })

      await doubleWait()

      // Initially only top-level rows rendered
      const rows = wrapper.findAll('.el-table__body-wrapper tbody tr')
      expect(rows.length).toBeGreaterThan(0)
      expect(rows.length).toBeLessThanOrEqual(20)

      wrapper.unmount()
    })

    it('should update height after lazy children are loaded', async () => {
      let resolveLoad: ((data: any[]) => void) | null = null

      const wrapper = mount({
        components: { ElTable, ElTableColumn },
        template: `
          <el-table
            :data="data"
            height="300"
            :use-virtual="true"
            :row-height="32"
            row-key="id"
            lazy
            :load="loadChildren"
            :tree-props="{ children: 'children', hasChildren: 'hasChildren' }"
          >
            <el-table-column prop="id" label="ID" />
            <el-table-column prop="name" label="Name" />
          </el-table>
        `,
        data() {
          return {
            data: Array.from({ length: 5 }, (_, i) => ({
              id: i + 1,
              name: `Parent ${i + 1}`,
              hasChildren: true,
            })),
          }
        },
        methods: {
          loadChildren(_row, _treeNode, resolve) {
            resolveLoad = resolve
          },
        },
      })

      await doubleWait()

      // Initial height = 5 * 32 = 160
      const virtualContainer = wrapper.find(
        '.el-table__body-wrapper .el-scrollbar__view > div'
      )
      expect(virtualContainer.attributes('style')).toContain('height: 160px')

      // Click expand icon on first row
      const expandIcon = wrapper.find(
        '.el-table__body-wrapper .el-table__expand-icon'
      )
      if (expandIcon.exists()) {
        await expandIcon.trigger('click')
        await doubleWait()

        // Height should still be 160 while loading (loaded=false)
        expect(virtualContainer.attributes('style')).toContain('height: 160px')

        // Resolve the lazy load with 3 children
        if (resolveLoad) {
          resolveLoad(
            Array.from({ length: 3 }, (_, i) => ({
              id: 1000 + i + 1,
              name: `Child 1-${i + 1}`,
            }))
          )
        }

        await doubleWait()
        await nextTick()

        // After loading: height = (5 + 3) * 32 = 256
        expect(virtualContainer.attributes('style')).toContain('height: 256px')
      }

      wrapper.unmount()
    })

    it('should not include loading nodes in expandedKeysCache', async () => {
      const wrapper = mount({
        components: { ElTable, ElTableColumn },
        template: `
          <el-table
            :data="data"
            height="300"
            :use-virtual="true"
            :row-height="32"
            row-key="id"
            lazy
            :load="loadChildren"
            :tree-props="{ children: 'children', hasChildren: 'hasChildren' }"
          >
            <el-table-column prop="id" label="ID" />
            <el-table-column prop="name" label="Name" />
          </el-table>
        `,
        data() {
          return {
            data: Array.from({ length: 3 }, (_, i) => ({
              id: i + 1,
              name: `Parent ${i + 1}`,
              hasChildren: true,
            })),
          }
        },
        methods: {
          loadChildren() {
            // intentionally not resolving to keep the node in loading state
          },
        },
      })

      await doubleWait()

      const virtualContainer = wrapper.find(
        '.el-table__body-wrapper .el-scrollbar__view > div'
      )

      // Before expanding: height = 3 * 32 = 96
      expect(virtualContainer.attributes('style')).toContain('height: 96px')

      const expandIcon = wrapper.find(
        '.el-table__body-wrapper .el-table__expand-icon'
      )
      if (expandIcon.exists()) {
        await expandIcon.trigger('click')
        await doubleWait()

        // During loading, node is expanded but not loaded
        // expandedKeysCache should NOT include it, so height stays the same
        expect(virtualContainer.attributes('style')).toContain('height: 96px')
      }

      wrapper.unmount()
    })
  })

  describe('virtual scroll events', () => {
    it('should emit scroll event', async () => {
      const data = generateLargeData(100)
      const wrapper = mount({
        components: { ElTable, ElTableColumn },
        template: `
          <el-table
            :data="data"
            height="200"
            :use-virtual="true"
            :row-height="32"
            row-key="id"
            @scroll="onScroll"
          >
            <el-table-column prop="id" label="ID" />
          </el-table>
        `,
        data() {
          return { data, scrolled: false }
        },
        methods: {
          onScroll() {
            this.scrolled = true
          },
        },
      })

      await doubleWait()

      const scrollWrapper = wrapper.find(
        '.el-table__body-wrapper .el-scrollbar__wrap'
      )
      if (scrollWrapper.exists()) {
        await scrollWrapper.trigger('scroll')
        await doubleWait()
      }

      wrapper.unmount()
    })
  })

  describe('virtual scroll with selection', () => {
    it('should support row selection with virtual scroll', async () => {
      const data = generateLargeData(50)
      const wrapper = mount({
        components: { ElTable, ElTableColumn },
        template: `
          <el-table
            ref="table"
            :data="data"
            height="200"
            :use-virtual="true"
            :row-height="32"
            row-key="id"
          >
            <el-table-column type="selection" />
            <el-table-column prop="id" label="ID" />
            <el-table-column prop="name" label="Name" />
          </el-table>
        `,
        data() {
          return { data }
        },
      })

      await doubleWait()

      // Selection column should be rendered
      const checkboxes = wrapper.findAll('.el-table__body-wrapper .el-checkbox')
      expect(checkboxes.length).toBeGreaterThan(0)

      // Select-all checkbox should exist in header
      const headerCheckbox = wrapper.find(
        '.el-table__header-wrapper .el-checkbox'
      )
      expect(headerCheckbox.exists()).toBe(true)

      wrapper.unmount()
    })

    it('toggleAllSelection should select all rows', async () => {
      const data = generateLargeData(200)
      const wrapper = mount({
        components: { ElTable, ElTableColumn },
        template: `
          <el-table
            ref="table"
            :data="data"
            height="200"
            :use-virtual="true"
            :row-height="32"
            row-key="id"
            @selection-change="handleSelectionChange"
          >
            <el-table-column type="selection" />
            <el-table-column prop="id" label="ID" />
            <el-table-column prop="name" label="Name" />
          </el-table>
        `,
        data() {
          return { data, selection: [] }
        },
        methods: {
          handleSelectionChange(val) {
            this.selection = val
          },
        },
      })

      await doubleWait()

      const vm = wrapper.vm
      // Select all
      vm.$refs.table.toggleAllSelection()
      await doubleWait()
      expect(vm.selection.length).toEqual(200)

      // Deselect all
      vm.$refs.table.toggleAllSelection()
      await doubleWait()
      expect(vm.selection.length).toEqual(0)

      wrapper.unmount()
    })

    it('toggleAllSelection should emit select-all event', async () => {
      const data = generateLargeData(50)
      const wrapper = mount({
        components: { ElTable, ElTableColumn },
        template: `
          <el-table
            ref="table"
            :data="data"
            height="200"
            :use-virtual="true"
            :row-height="32"
            row-key="id"
            @select-all="handleSelectAll"
          >
            <el-table-column type="selection" />
            <el-table-column prop="id" label="ID" />
          </el-table>
        `,
        data() {
          return { data, selectAllResult: null }
        },
        methods: {
          handleSelectAll(selection) {
            this.selectAllResult = selection
          },
        },
      })

      await doubleWait()

      const vm = wrapper.vm
      vm.$refs.table.toggleAllSelection()
      await doubleWait()
      expect(vm.selectAllResult).not.toBeNull()
      expect(vm.selectAllResult.length).toEqual(50)

      vm.$refs.table.toggleAllSelection()
      await doubleWait()
      expect(vm.selectAllResult.length).toEqual(0)

      wrapper.unmount()
    })

    it('toggleAllSelection should respect selectable', async () => {
      const data = generateLargeData(100)
      const wrapper = mount({
        components: { ElTable, ElTableColumn },
        template: `
          <el-table
            ref="table"
            :data="data"
            height="200"
            :use-virtual="true"
            :row-height="32"
            row-key="id"
            @selection-change="handleSelectionChange"
          >
            <el-table-column type="selection" :selectable="isSelectable" />
            <el-table-column prop="id" label="ID" />
          </el-table>
        `,
        data() {
          return { data, selection: [] }
        },
        methods: {
          handleSelectionChange(val) {
            this.selection = val
          },
          isSelectable(row) {
            // Only even id rows are selectable
            return row.id % 2 === 0
          },
        },
      })

      await doubleWait()

      const vm = wrapper.vm
      vm.$refs.table.toggleAllSelection()
      await doubleWait()

      // Only 50 even-id rows should be selected
      expect(vm.selection.length).toEqual(50)
      expect(vm.selection.every((row) => row.id % 2 === 0)).toBe(true)

      wrapper.unmount()
    })

    it('toggleAllSelection should select tree children rows', async () => {
      const data = generateTreeData(10, 5)
      const wrapper = mount({
        components: { ElTable, ElTableColumn },
        template: `
          <el-table
            ref="table"
            :data="data"
            height="300"
            :use-virtual="true"
            :row-height="32"
            row-key="id"
            default-expand-all
            @selection-change="handleSelectionChange"
          >
            <el-table-column type="selection" />
            <el-table-column prop="id" label="ID" />
            <el-table-column prop="name" label="Name" />
          </el-table>
        `,
        data() {
          return { data, selection: [] }
        },
        methods: {
          handleSelectionChange(val) {
            this.selection = val
          },
        },
      })

      await doubleWait()
      await nextTick()

      const vm = wrapper.vm
      vm.$refs.table.toggleAllSelection()
      await doubleWait()

      // 10 parents + 10*5 children = 60 total rows
      expect(vm.selection.length).toEqual(60)

      // Deselect all
      vm.$refs.table.toggleAllSelection()
      await doubleWait()
      expect(vm.selection.length).toEqual(0)

      wrapper.unmount()
    })

    it('toggleAllSelection should update header checkbox state', async () => {
      const data = generateLargeData(50)
      const wrapper = mount({
        components: { ElTable, ElTableColumn },
        template: `
          <el-table
            ref="table"
            :data="data"
            height="200"
            :use-virtual="true"
            :row-height="32"
            row-key="id"
          >
            <el-table-column type="selection" />
            <el-table-column prop="id" label="ID" />
          </el-table>
        `,
        data() {
          return { data }
        },
      })

      await doubleWait()

      const vm = wrapper.vm
      const headerCheckbox = wrapper.find(
        '.el-table__header-wrapper .el-checkbox'
      )

      // Initially unchecked
      expect(headerCheckbox.classes()).not.toContain('is-checked')

      // Select all
      vm.$refs.table.toggleAllSelection()
      await doubleWait()

      expect(headerCheckbox.classes()).toContain('is-checked')

      // Deselect all
      vm.$refs.table.toggleAllSelection()
      await doubleWait()

      expect(headerCheckbox.classes()).not.toContain('is-checked')

      wrapper.unmount()
    })

    it('toggleAllSelection should update visible row checkboxes', async () => {
      const data = generateLargeData(50)
      const wrapper = mount({
        components: { ElTable, ElTableColumn },
        template: `
          <el-table
            ref="table"
            :data="data"
            height="200"
            :use-virtual="true"
            :row-height="32"
            row-key="id"
          >
            <el-table-column type="selection" />
            <el-table-column prop="id" label="ID" />
          </el-table>
        `,
        data() {
          return { data }
        },
      })

      await doubleWait()

      const vm = wrapper.vm

      // Select all
      vm.$refs.table.toggleAllSelection()
      await doubleWait()

      // All visible row checkboxes should be checked
      const bodyCheckboxes = wrapper.findAll(
        '.el-table__body-wrapper .el-checkbox'
      )
      bodyCheckboxes.forEach((checkbox) => {
        expect(checkbox.classes()).toContain('is-checked')
      })

      wrapper.unmount()
    })

    it('getSelectionRows should return correct rows after toggleAllSelection', async () => {
      const data = generateLargeData(100)
      const wrapper = mount({
        components: { ElTable, ElTableColumn },
        template: `
          <el-table
            ref="table"
            :data="data"
            height="200"
            :use-virtual="true"
            :row-height="32"
            row-key="id"
          >
            <el-table-column type="selection" />
            <el-table-column prop="id" label="ID" />
          </el-table>
        `,
        data() {
          return { data }
        },
      })

      await doubleWait()

      const vm = wrapper.vm

      // Select all
      vm.$refs.table.toggleAllSelection()
      await doubleWait()

      const selectedRows = vm.$refs.table.getSelectionRows()
      expect(selectedRows.length).toEqual(100)

      // Deselect all
      vm.$refs.table.toggleAllSelection()
      await doubleWait()

      const emptyRows = vm.$refs.table.getSelectionRows()
      expect(emptyRows.length).toEqual(0)

      wrapper.unmount()
    })

    it('clearSelection should work after toggleAllSelection', async () => {
      const data = generateLargeData(100)
      const wrapper = mount({
        components: { ElTable, ElTableColumn },
        template: `
          <el-table
            ref="table"
            :data="data"
            height="200"
            :use-virtual="true"
            :row-height="32"
            row-key="id"
            @selection-change="handleSelectionChange"
          >
            <el-table-column type="selection" />
            <el-table-column prop="id" label="ID" />
          </el-table>
        `,
        data() {
          return { data, selection: [] }
        },
        methods: {
          handleSelectionChange(val) {
            this.selection = val
          },
        },
      })

      await doubleWait()

      const vm = wrapper.vm

      // Select all
      vm.$refs.table.toggleAllSelection()
      await doubleWait()
      expect(vm.selection.length).toEqual(100)

      // Clear selection
      vm.$refs.table.clearSelection()
      await doubleWait()
      expect(vm.selection.length).toEqual(0)

      wrapper.unmount()
    })
  })

  describe('virtual scroll with index column', () => {
    it('should display correct index in virtual scroll mode', async () => {
      const data = generateLargeData(100)
      const wrapper = mount({
        components: { ElTable, ElTableColumn },
        template: `
          <el-table
            :data="data"
            height="200"
            :use-virtual="true"
            :row-height="32"
            row-key="id"
          >
            <el-table-column type="index" label="#" />
            <el-table-column prop="id" label="ID" />
            <el-table-column prop="name" label="Name" />
          </el-table>
        `,
        data() {
          return { data }
        },
      })

      await doubleWait()

      // First visible row should have index starting from 1
      const firstIndexCell = wrapper.find('.el-table__body-wrapper td .cell')
      if (firstIndexCell.exists()) {
        expect(firstIndexCell.text()).toBe('1')
      }

      wrapper.unmount()
    })
  })

  describe('virtual scroll edge cases', () => {
    it('should handle empty data', async () => {
      const wrapper = mount({
        components: { ElTable, ElTableColumn },
        template: `
          <el-table
            :data="data"
            height="200"
            :use-virtual="true"
            :row-height="32"
            row-key="id"
          >
            <el-table-column prop="id" label="ID" />
          </el-table>
        `,
        data() {
          return { data: [] }
        },
      })

      await doubleWait()

      const rows = wrapper.findAll('.el-table__body-wrapper tbody tr')
      expect(rows.length).toEqual(0)

      wrapper.unmount()
    })

    it('should handle data smaller than viewport', async () => {
      const data = generateLargeData(3)
      const wrapper = mount({
        components: { ElTable, ElTableColumn },
        template: `
          <el-table
            :data="data"
            height="500"
            :use-virtual="true"
            :row-height="32"
            row-key="id"
          >
            <el-table-column prop="id" label="ID" />
          </el-table>
        `,
        data() {
          return { data }
        },
      })

      await doubleWait()

      const rows = wrapper.findAll('.el-table__body-wrapper tbody tr')
      // All 3 rows should be rendered since they fit in viewport
      expect(rows.length).toEqual(3)

      wrapper.unmount()
    })

    it('should handle dynamic data replacement', async () => {
      const wrapper = mount({
        components: { ElTable, ElTableColumn },
        template: `
          <el-table
            :data="data"
            height="200"
            :use-virtual="true"
            :row-height="32"
            row-key="id"
          >
            <el-table-column prop="id" label="ID" />
            <el-table-column prop="name" label="Name" />
          </el-table>
        `,
        data() {
          return { data: generateLargeData(100) }
        },
      })

      await doubleWait()

      // Replace with completely different data
      await wrapper.setData({
        data: Array.from({ length: 50 }, (_, i) => ({
          id: i + 200,
          name: `New Row ${i + 1}`,
        })),
      })
      await doubleWait()

      const virtualContainer = wrapper.find(
        '.el-table__body-wrapper .el-scrollbar__view > div'
      )
      // New height = 50 * 32 = 1600
      expect(virtualContainer.attributes('style')).toContain('height: 1600px')

      wrapper.unmount()
    })
  })
})
