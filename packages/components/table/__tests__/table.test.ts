// @ts-nocheck
import { h, nextTick } from 'vue'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import ElCheckbox from '@element-plus/components/checkbox'
import triggerEvent from '@element-plus/test-utils/trigger-event'
import { rAF } from '@element-plus/test-utils/tick'
import { CaretBottom, CaretTop } from '@element-plus/icons-vue'
import ElTable from '../src/table.vue'
import ElTableColumn from '../src/table-column'
import {
  doubleWait,
  getMutliRowTestData,
  getTestData,
  mount,
} from './table-test-common'
import type { VueWrapper } from '@vue/test-utils'
import type { ComponentPublicInstance } from 'vue'

const { CheckboxGroup: ElCheckboxGroup } = ElCheckbox

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

// https://github.com/jsdom/jsdom/issues/3002
Range.prototype.getBoundingClientRect = () => ({
  bottom: 0,
  height: 0,
  left: 0,
  right: 0,
  top: 0,
  width: 0,
})

describe('Table.vue', () => {
  describe('rendering data is correct', () => {
    const wrapper = mount({
      components: {
        ElTable,
        ElTableColumn,
      },
      template: `
      <el-table :data="testData">
        <el-table-column prop="id" />
        <el-table-column prop="name" label="片名" />
        <el-table-column prop="release" label="发行日期" />
        <el-table-column prop="director" label="导演" />
        <el-table-column prop="runtime" label="时长（分）" />
      </el-table>
      `,
      created() {
        this.testData = getTestData()
      },
    })
    it('head', async () => {
      await doubleWait()
      const ths = wrapper.findAll('thead th')
      expect(ths.map((node) => node.text()).filter((o) => o)).toEqual([
        '片名',
        '发行日期',
        '导演',
        '时长（分）',
      ])
    })

    it('row length', () => {
      expect(
        wrapper.findAll('.el-table__body-wrapper tbody tr').length
      ).toEqual(getTestData().length)
    })
    it('row data', () => {
      const cells = wrapper.findAll('td .cell').map((node) => node.text())
      const testDataArr = getTestData().flatMap((cur) => {
        return Object.values(cur).map(String)
      })
      expect(cells).toEqual(testDataArr)
      wrapper.unmount()
    })
  })

  it('custom template', async () => {
    const wrapper = mount({
      components: {
        ElTable,
        ElTableColumn,
        ElCheckboxGroup,
        ElCheckbox,
      },
      template: `
      <el-table :data="tableData">
        <el-table-column label="someLabel">
          <template #default="{ row }">
            <el-checkbox-group v-model="row.checkList">
              <el-checkbox label="复选框 A" value="复选框 A"></el-checkbox>
              <el-checkbox label="复选框 B" value="复选框 B"></el-checkbox>
            </el-checkbox-group>
          </template>
        </el-table-column>
      </el-table>
      `,
      data() {
        return {
          tableData: [
            {
              checkList: [],
            },
            {
              checkList: ['复选框 A'],
            },
            {
              checkList: ['复选框 A', '复选框 B'],
            },
          ],
        }
      },
    })
    const vm = wrapper.vm
    await doubleWait()
    const checkGroup = vm.$el.querySelectorAll(
      '.el-table__body-wrapper .el-checkbox-group'
    )
    expect(checkGroup.length).toBe(3)
    const checkbox = vm.$el.querySelectorAll(
      '.el-table__body-wrapper .el-checkbox'
    )
    expect(checkbox.length).toBe(6)
    const checkSelect = vm.$el.querySelectorAll(
      '.el-table__body-wrapper label.is-checked'
    )
    expect(checkSelect.length).toBe(3)
  })
  describe('attributes', () => {
    const createTable = function (props, opts?) {
      return mount(
        Object.assign(
          {
            components: {
              ElTable,
              ElTableColumn,
            },
            template: `
          <el-table :data="testData" ${props}>
            <el-table-column prop="name" label="片名" />
            <el-table-column prop="release" label="发行日期" />
            <el-table-column prop="director" label="导演" />
            <el-table-column prop="runtime" label="时长（分）" />
          </el-table>
        `,
            created() {
              this.testData = getTestData()
            },
          },
          opts
        )
      )
    }

    it('height', async () => {
      const wrapper = createTable('height="134"')
      await doubleWait()
      expect(wrapper.attributes('style')).toContain('height: 134px')
      wrapper.unmount()
    })

    it('height as string', async () => {
      const wrapper = createTable('height="100px"')
      await doubleWait()
      expect(wrapper.attributes('style')).toContain('height: 100px')
      wrapper.unmount()
    })

    it('maxHeight', async () => {
      const wrapper = createTable('max-height="134"')
      await doubleWait()
      expect(wrapper.attributes('style')).toContain('max-height: 134px')
      wrapper.unmount()
    })

    it('maxHeight uses special units', async () => {
      const wrapper = createTable('max-height="60vh"')
      await doubleWait()
      expect(wrapper.find('.el-scrollbar__wrap').attributes('style')).toContain(
        'max-height: calc(60vh - 0px);'
      )
      wrapper.unmount()
    })

    it('stripe', async () => {
      const wrapper = createTable('stripe')
      await doubleWait()
      expect(wrapper.classes()).toContain('el-table--striped')
      wrapper.unmount()
    })

    it('border', async () => {
      const wrapper = createTable('border')
      await doubleWait()
      expect(wrapper.classes()).toContain('el-table--border')
      wrapper.unmount()
    })

    it('fit', async () => {
      const wrapper = createTable(':fit="false"')
      await doubleWait()
      expect(wrapper.classes()).not.toContain('el-table--fit')
      wrapper.unmount()
    })

    it('show-header', async () => {
      const wrapper = createTable(':show-header="false"')
      await doubleWait()
      expect(wrapper.findAll('.el-table__header-wrapper').length).toEqual(0)
      wrapper.unmount()
    })

    it('tableRowClassName', async () => {
      const wrapper = createTable(':row-class-name="tableRowClassName"', {
        methods: {
          tableRowClassName({ rowIndex }) {
            if (rowIndex === 1) {
              return 'info-row'
            } else if (rowIndex === 3) {
              return 'positive-row'
            }

            return ''
          },
        },
      })
      await doubleWait()
      expect(wrapper.findAll('.info-row').length).toEqual(1)
      expect(wrapper.findAll('.positive-row').length).toEqual(1)
      wrapper.unmount()
    })

    it('tableRowStyle[Object]', async () => {
      const wrapper = createTable(':row-style="{ height: \'60px\' }"', {})
      await doubleWait()
      expect(wrapper.find('.el-table__body tr').attributes('style')).toContain(
        'height: 60px'
      )
      wrapper.unmount()
    })

    it('tableRowStyle[Function]', async () => {
      const wrapper = createTable(':row-style="tableRowStyle"', {
        methods: {
          tableRowStyle({ rowIndex }) {
            if (rowIndex === 1) {
              return { height: '60px', display: 'none' }
            }

            return null
          },
        },
      })

      await doubleWait()
      const child1 = wrapper.find('.el-table__body tr:nth-child(1)')
      const child2 = wrapper.find('.el-table__body tr:nth-child(2)')
      expect(child1.attributes('style')).toBeUndefined()
      expect(child2.attributes('style')).toContain('height: 60px')
      expect(child2.attributes('style')).toContain('display: none')
      wrapper.unmount()
    })

    it('current-row-key', async () => {
      const wrapper = mount({
        components: {
          ElTable,
          ElTableColumn,
        },
        template: `
        <el-table :data="testData" row-key="id" highlight-current-row :current-row-key="currentRowKey">
          <el-table-column prop="name" label="片名" />
          <el-table-column prop="release" label="发行日期" />
          <el-table-column prop="director" label="导演" />
          <el-table-column prop="runtime" label="时长（分）" />
        </el-table>
      `,
        created() {
          this.testData = getTestData()
        },
        data() {
          return { currentRowKey: null }
        },
      })
      await doubleWait()
      wrapper.vm.currentRowKey = 1
      const tr = wrapper.find('.el-table__body-wrapper tbody tr')
      await doubleWait()
      expect(tr.classes()).toContain('current-row')
      wrapper.vm.currentRowKey = 2

      const rows = wrapper.findAll('.el-table__body-wrapper tbody tr')
      await doubleWait()
      expect(tr.classes()).not.toContain('current-row')
      expect(rows[1].classes()).toContain('current-row')
      wrapper.unmount()
    })
  })
  describe('filter', () => {
    let wrapper: VueWrapper<ComponentPublicInstance>

    beforeEach(async () => {
      wrapper = mount({
        components: {
          ElTable,
          ElTableColumn,
        },
        template: `
          <el-table ref="table" :data="testData" @filter-change="handleFilterChange">
            <el-table-column prop="name" label="片名" />
            <el-table-column prop="release" label="发行日期" />
            <el-table-column
              prop="director"
              column-key="director"
              :filters="[
                { text: 'John Lasseter', value: 'John Lasseter' },
                { text: 'Peter Docter', value: 'Peter Docter' },
                { text: 'Andrew Stanton', value: 'Andrew Stanton' }
              ]"
              :filter-method="filterMethod"
              label="导演" />
            <el-table-column prop="runtime" label="时长（分）" />
          </el-table>
        `,

        created() {
          this.testData = getTestData()
        },

        methods: {
          filterMethod(value, row) {
            return value === row.director
          },
          handleFilterChange(filters) {
            this.filters = filters
          },
        },
      })
      await doubleWait()
    })

    afterEach(() => wrapper.unmount())

    it('render', () => {
      expect(
        wrapper.find('.el-table__column-filter-trigger')
      ).not.toBeUndefined()
    })

    it('click dropdown', async () => {
      const btn = wrapper.find('.el-table__column-filter-trigger')
      btn.trigger('click')
      await doubleWait()
      const filter = document.body.querySelector('.el-table-filter')
      expect(filter).not.toBeUndefined()
      filter.parentNode.removeChild(filter)
    })

    it('click filter', async () => {
      const btn = wrapper.find('.el-table__column-filter-trigger')

      btn.trigger('click')
      await doubleWait()
      const filter = document.body.querySelector('.el-table-filter')

      triggerEvent(filter.querySelector('.el-checkbox'), 'click', true, false)
      // confirm button
      await doubleWait()
      triggerEvent(
        filter.querySelector('.el-table-filter__bottom button'),
        'click',
        true,
        false
      )
      await doubleWait()
      expect(
        (wrapper.vm as ComponentPublicInstance & { filters: any }).filters[
          'director'
        ]
      ).toEqual(['John Lasseter'])
      expect(
        wrapper.findAll('.el-table__body-wrapper tbody tr').length
      ).toEqual(3)
      filter.parentNode.removeChild(filter)
    })

    it('clear filter', async () => {
      const btn = wrapper.find('.el-table__column-filter-trigger')

      btn.trigger('click')
      await doubleWait()
      const filter = document.body.querySelector('.el-table-filter')

      triggerEvent(filter.querySelector('.el-checkbox'), 'click', true, false)
      // confirm button
      await doubleWait()
      triggerEvent(
        filter.querySelector('.el-table-filter__bottom button'),
        'click',
        true,
        false
      )
      await nextTick()
      expect(
        wrapper.findAll('.el-table__body-wrapper tbody tr').length
      ).toEqual(3)
      wrapper.vm.$refs.table.clearFilter()
      await nextTick()
      expect(
        wrapper.findAll('.el-table__body-wrapper tbody tr').length
      ).toEqual(5)
      filter.parentNode.removeChild(filter)
    })

    it('click reset', async () => {
      const btn = wrapper.find('.el-table__column-filter-trigger')
      btn.trigger('click')
      await doubleWait()
      const filter = document.body.querySelector('.el-table-filter')

      triggerEvent(filter.querySelector('.el-checkbox'), 'click', true, false)
      await doubleWait()
      triggerEvent(
        filter.querySelectorAll('.el-table-filter__bottom button')[1],
        'click',
        true,
        false
      )
      await doubleWait()
      expect(
        (wrapper.vm as ComponentPublicInstance & { filters: any }).filters[
          'director'
        ]
      ).toEqual([])
      expect([
        ...filter.querySelector('.el-table-filter__bottom button').classList,
      ]).toContain('is-disabled')
      filter.parentNode.removeChild(filter)
      wrapper.unmount()
    })
  })

  describe('filter filter-icon slot', () => {
    let wrapper: VueWrapper<ComponentPublicInstance>

    beforeEach(async () => {
      wrapper = mount({
        components: {
          ElTable,
          ElTableColumn,
          CaretBottom,
          CaretTop,
        },
        template: `
          <el-table ref="table" :data="testData" @filter-change="handleFilterChange">
            <el-table-column prop="name" label="片名" />
            <el-table-column prop="release" label="发行日期" />
            <el-table-column
              prop="director"
              column-key="director"
              :filters="[
                { text: 'John Lasseter', value: 'John Lasseter' },
                { text: 'Peter Docter', value: 'Peter Docter' },
                { text: 'Andrew Stanton', value: 'Andrew Stanton' }
              ]"
              :filter-method="filterMethod"
              label="导演">
              <template #filter-icon="{ filterOpened }">
                <CaretTop v-if="filterOpened" class="top" />
                <CaretBottom v-else class="bottom" />
              </template>
            </el-table-column>
            <el-table-column prop="runtime" label="时长（分）" />
          </el-table>
        `,

        created() {
          this.testData = getTestData()
        },

        methods: {
          filterMethod(value, row) {
            return value === row.director
          },
          handleFilterChange(filters) {
            this.filters = filters
          },
        },
      })
      await doubleWait()
    })

    afterEach(() => wrapper.unmount())

    it('render', () => {
      expect(
        wrapper.find('.el-table__column-filter-trigger')
      ).not.toBeUndefined()
      expect(
        wrapper.find('.el-table__column-filter-trigger .bottom')
      ).not.toBeUndefined()
    })

    it('click filter-trigger', async () => {
      const btn = wrapper.find('.el-table__column-filter-trigger')

      btn.trigger('click')
      await doubleWait()
      expect(
        wrapper.find('.el-table__column-filter-trigger .top')
      ).not.toBeUndefined()

      btn.trigger('click')
      await doubleWait()
      expect(
        wrapper.find('.el-table__column-filter-trigger .bottom')
      ).not.toBeUndefined()
    })
  })

  describe('events', () => {
    const createTable = function (prop = '') {
      return mount({
        components: {
          ElTable,
          ElTableColumn,
        },
        template: `
          <el-table :data="testData" @${prop}="handleEvent">
            <el-table-column type="selection" />
            <el-table-column prop="name" />
            <el-table-column prop="release" />
            <el-table-column prop="director" />
            <el-table-column prop="runtime"/>
          </el-table>
        `,

        methods: {
          handleEvent(...args) {
            this.result = args
          },
        },

        data() {
          return { result: '', testData: getTestData() }
        },
      })
    }

    it('select', async () => {
      const wrapper = createTable('select')
      await doubleWait()
      wrapper.findAll('.el-checkbox')[1].trigger('click')
      expect(wrapper.vm.result.length).toEqual(2)
      expect(wrapper.vm.result[1]).toHaveProperty('name')
      expect(wrapper.vm.result[1]['name']).toEqual(getTestData()[0].name)
      wrapper.unmount()
    })

    it('selection-change', async () => {
      const wrapper = createTable('selection-change')
      await doubleWait()
      wrapper.findAll('.el-checkbox')[1].trigger('click')
      expect(wrapper.vm.result.length).toEqual(1)
      wrapper.unmount()
    })

    it('cell-mouse-enter', async () => {
      const wrapper = createTable('cell-mouse-enter')
      await doubleWait()
      const cell = wrapper.findAll('.el-table__body .cell')[2] // first row
      triggerEvent(cell.element.parentElement, 'mouseenter')
      expect(wrapper.vm.result.length).toEqual(4) // row, column, cell, event
      expect(wrapper.vm.result[0]).toHaveProperty('name')
      expect(wrapper.vm.result[0]['name']).toEqual(getTestData()[0].name)
      wrapper.unmount()
    })

    it('cell mouse enter on cell of which rowSpan > 2', async () => {
      const wrapper = mount({
        components: {
          ElTable,
          ElTableColumn,
        },
        template: `
         <el-table
          :data="testData"
          :span-method="objectSpanMethod"
          border
          style="width: 100%; margin-top: 20px"
        >
          <el-table-column prop="id" label="ID" width="180" />
          <el-table-column prop="name" label="片名" />
          <el-table-column prop="release" label="发行日期" />
          <el-table-column prop="director" label="导演" />
          <el-table-column prop="runtime" label="时长（分）" />
        </el-table>
      `,
        data() {
          return {
            testData: getTestData(),
          }
        },
        methods: {
          objectSpanMethod({ rowIndex, columnIndex }) {
            if (columnIndex === 0) {
              if (rowIndex % 2 === 0) {
                return {
                  rowspan: 2,
                  colspan: 1,
                }
              } else {
                return {
                  rowspan: 0,
                  colspan: 0,
                }
              }
            }
          },
        },
      })
      const vm = wrapper.vm
      await doubleWait()
      const cell = vm.$el
        .querySelectorAll('.el-table__body-wrapper tbody tr')[0]
        .querySelector('.el-table__cell')
      triggerEvent(cell, 'mouseenter', true, false)
      await doubleWait()
      await rAF()
      await doubleWait()
      const row = vm.$el.querySelectorAll('.el-table__body-wrapper tbody tr')[1]
      expect([...row.classList]).toContain('hover-row')
      await doubleWait()
      triggerEvent(cell, 'mouseleave', true, false)
      await rAF()
      await doubleWait()
      expect([...row.classList]).not.toContain('hover-row')
      wrapper.unmount()
    })

    it('cell-mouse-leave', async () => {
      const wrapper = createTable('cell-mouse-leave')
      await doubleWait()
      const cell = wrapper.findAll('.el-table__body .cell')[7] // second row
      const cell2 = wrapper.findAll('.el-table__body .cell')[2] // first row

      triggerEvent(cell2.element.parentElement, 'mouseenter')
      triggerEvent(cell.element.parentElement, 'mouseleave')
      expect(wrapper.vm.result.length).toEqual(4) // row, column, cell, event
      expect(wrapper.vm.result[0]).toHaveProperty('name')
      expect(wrapper.vm.result[0]['name']).toEqual(getTestData()[0].name)
      wrapper.unmount()
    })

    it('row-click', async () => {
      const wrapper = createTable('row-click')
      await doubleWait()
      const cell = wrapper.findAll('.el-table__body .cell')[2] // first row

      triggerEvent(cell.element.parentElement.parentElement, 'click')
      expect(wrapper.vm.result.length).toEqual(3) // row, event, column
      expect(wrapper.vm.result[0]).toHaveProperty('name')
      expect(wrapper.vm.result[0]['name']).toEqual(getTestData()[0].name)
      wrapper.unmount()
    })

    it('row-dblclick', async () => {
      const wrapper = createTable('row-dblclick')
      await doubleWait()
      const cell = wrapper.findAll('.el-table__body .cell')[2] // first row

      triggerEvent(cell.element.parentElement.parentElement, 'dblclick')
      expect(wrapper.vm.result.length).toEqual(3) // row, event, column
      expect(wrapper.vm.result[0]).toHaveProperty('name')
      expect(wrapper.vm.result[0]['name']).toEqual(getTestData()[0].name)
      wrapper.unmount()
    })

    it('header-click', async () => {
      const wrapper = createTable('header-click')
      await doubleWait()
      const cell = wrapper.findAll('.el-table__header th')[1] // header[prop='name']
      cell.trigger('click')
      expect(wrapper.vm.result.length).toEqual(2) // column, event
      expect(wrapper.vm.result[0]['name']).toBeUndefined()
      wrapper.unmount()
    })
  })
  describe('summary row', () => {
    it('should render', async () => {
      const wrapper = mount({
        components: {
          ElTable,
          ElTableColumn,
        },
        template: `
          <el-table :data="testData" show-summary>
            <el-table-column prop="name" />
            <el-table-column prop="release"/>
            <el-table-column prop="director"/>
            <el-table-column prop="runtime"/>
          </el-table>
        `,

        created() {
          this.testData = getTestData()
        },
      })

      await doubleWait()
      const footer = wrapper.find('.el-table__footer')
      expect(footer).not.toBeUndefined()
      const cells = footer.findAll('.cell')
      expect(cells[cells.length - 1].text()).toEqual('459')
      wrapper.unmount()
    })

    it('custom sum text', async () => {
      const wrapper = mount({
        components: {
          ElTable,
          ElTableColumn,
        },
        template: `
          <el-table :data="testData" show-summary sum-text="Time">
            <el-table-column prop="name" />
            <el-table-column prop="release"/>
            <el-table-column prop="director"/>
            <el-table-column prop="runtime"/>
          </el-table>
        `,

        created() {
          this.testData = getTestData()
        },
      })

      await doubleWait()
      const cells = wrapper.findAll('.el-table__footer .cell')
      expect(cells[0].text()).toEqual('Time')
      wrapper.unmount()
    })

    it('custom summary method', async () => {
      const wrapper = mount({
        components: {
          ElTable,
          ElTableColumn,
        },
        template: `
          <el-table :data="testData" show-summary :summary-method="getSummary">
            <el-table-column prop="name" />
            <el-table-column prop="release"/>
            <el-table-column prop="director"/>
            <el-table-column prop="runtime"/>
          </el-table>
        `,

        created() {
          this.testData = getTestData()
        },

        methods: {
          getSummary(param) {
            const { columns, data } = param
            const result = []
            columns.forEach((column) => {
              const prop = column.property
              if (prop === 'release') {
                const dates = data.map((item) => item[prop])
                const releaseYears = dates.map((date) =>
                  Number(date.slice(0, 4))
                )
                result.push(
                  releaseYears.reduce((prev, curr) => {
                    return prev + curr
                  })
                )
              } else {
                result.push('')
              }
            })
            return result
          },
        },
      })

      await doubleWait()
      const cells = wrapper.findAll('.el-table__footer .cell')
      expect(cells[1].text()).toEqual('9996')
      wrapper.unmount()
    })
  })
  describe('methods', () => {
    const createTable = function (prop = '') {
      return mount({
        components: {
          ElTableColumn,
          ElTable,
        },
        template: `
          <el-table ref="table" :data="testData" @${prop}="handleEvent">
            <el-table-column type="selection" :selectable="selectable" />
            <el-table-column prop="name" />
            <el-table-column prop="release" />
            <el-table-column prop="director" />
            <el-table-column prop="runtime"/>
          </el-table>
        `,

        methods: {
          handleEvent(selection) {
            this.fireCount++
            this.selection = selection
          },
          selectable(row) {
            return row.id !== 1
          },
        },

        data() {
          return { selection: null, testData: getTestData(), fireCount: 0 }
        },
      })
    }

    it('toggleRowSelection', () => {
      const wrapper = createTable('selection-change')
      const vm = wrapper.vm
      vm.$refs.table.toggleRowSelection(vm.testData[0])
      expect(vm.selection.length).toEqual(1)
      expect(vm.fireCount).toEqual(1)

      // test use second parameter
      vm.$refs.table.toggleRowSelection(vm.testData[0])
      expect(vm.fireCount).toEqual(2)

      vm.$refs.table.toggleRowSelection(vm.testData[0], false)
      expect(vm.fireCount).toEqual(2)
      expect(vm.selection.length).toEqual(0)

      vm.$refs.table.toggleRowSelection(vm.testData[0], undefined, false)
      expect(vm.selection.length).toEqual(0)
      expect(vm.fireCount).toEqual(2)

      // test use second parameter
      vm.$refs.table.toggleRowSelection(vm.testData[1], undefined, false)
      expect(vm.selection.length).toEqual(1)
      expect(vm.fireCount).toEqual(3)

      vm.$refs.table.toggleRowSelection(vm.testData[1], false, false)
      expect(vm.selection.length).toEqual(0)
      expect(vm.fireCount).toEqual(4)

      wrapper.unmount()
    })

    it('toggleAllSelection', async () => {
      const wrapper = createTable('selection-change')
      const vm = wrapper.vm
      vm.$refs.table.toggleAllSelection()
      await doubleWait()
      expect(vm.selection.length).toEqual(4)

      vm.$refs.table.toggleAllSelection()
      await doubleWait()
      expect(vm.selection.length).toEqual(0)
      wrapper.unmount()
    })

    it('clearSelection', () => {
      const wrapper = createTable('selection-change')
      const vm = wrapper.vm
      vm.$refs.table.toggleRowSelection(vm.testData[0])
      expect(vm.selection.length).toEqual(1)
      expect(vm.fireCount).toEqual(1)

      // clear selection
      vm.$refs.table.clearSelection()
      expect(vm.fireCount).toEqual(2)
      expect(vm.selection.length).toEqual(0)

      vm.$refs.table.clearSelection()
      expect(vm.fireCount).toEqual(2)

      wrapper.unmount()
    })

    it('selection reference', async () => {
      const wrapper = mount({
        components: {
          ElTableColumn,
          ElTable,
        },
        template: `
          <el-table ref="table" :data="testData" @select-all="handleSelectAll">
            <el-table-column prop="name" />
            <el-table-column prop="release" />
            <el-table-column prop="director" />
            <el-table-column prop="runtime"/>
          </el-table>
        `,
        data() {
          return {
            testData: getTestData(),
            selection: null,
          }
        },
        methods: {
          handleSelectAll(selection) {
            this.selection = selection
          },
        },
      })

      const vm = wrapper.vm
      vm.$refs.table.toggleAllSelection()
      await doubleWait()
      const oldSelection = vm.selection
      vm.$refs.table.toggleAllSelection()
      await doubleWait()
      const newSelection = vm.selection
      vm.$refs.table.clearSelection()
      expect(oldSelection !== newSelection).toBe(true)
      wrapper.unmount()
    })

    it('sort', async () => {
      const wrapper = mount({
        components: {
          ElTableColumn,
          ElTable,
        },
        template: `
          <el-table ref="table" :data="testData" :default-sort = "{prop: 'runtime', order: 'ascending'}">
            <el-table-column prop="name" />
            <el-table-column prop="release" />
            <el-table-column prop="director" />
            <el-table-column prop="runtime"/>
          </el-table>
        `,
        data() {
          return { testData: getTestData() }
        },
      })

      const vm = wrapper.vm
      await doubleWait()
      const lastCells = wrapper.findAll(
        '.el-table__body-wrapper tbody tr td:last-child'
      )
      expect(lastCells.map((node) => node.text())).toEqual([
        '80',
        '92',
        '92',
        '95',
        '100',
      ])
      await doubleWait()
      vm.testData = vm.testData.map((data) =>
        Object.assign(data, { runtime: -data.runtime })
      )
      vm.$refs.table.sort('runtime', 'ascending')
      await doubleWait()
      expect(lastCells.map((node) => node.text())).toEqual([
        '-100',
        '-95',
        '-92',
        '-92',
        '-80',
      ])
      wrapper.unmount()
    })

    it('sort correct change icon', async () => {
      function assertSortIconCount($el, msg, count = 1) {
        const sortIconCount = $el.querySelectorAll(
          'th.ascending, th.descending'
        ).length
        expect(sortIconCount).toEqual(count)
      }

      const wrapper = mount({
        components: {
          ElTable,
          ElTableColumn,
        },
        template: `
          <el-table ref="table" :data="testData" >
            <el-table-column prop="name" sortable />
            <el-table-column prop="release" sortable />
            <el-table-column prop="director" sortable />
            <el-table-column prop="runtime" sortable />
          </el-table>
        `,
        data() {
          return { testData: getTestData() }
        },
      })
      const vm = wrapper.vm
      await doubleWait()
      assertSortIconCount(
        wrapper.element,
        'sorting icon is not empty after mount',
        0
      )
      // manual click first column header
      const elm = wrapper.find('.caret-wrapper')
      elm.trigger('click')
      await doubleWait()
      assertSortIconCount(
        wrapper.element,
        'sorting icon is not one after click header'
      )
      vm.$refs.table.sort('director', 'descending')
      await doubleWait()
      assertSortIconCount(
        wrapper.element,
        'sorting icon is not one after call sort'
      )
      vm.$refs.table.sort('director', 'ascending')
      await doubleWait()
      assertSortIconCount(
        wrapper.element,
        'sorting icon is not one after sort same column'
      )
      wrapper.unmount()
    })

    // https://github.com/element-plus/element-plus/issues/4589
    it('sort-change event', async () => {
      const handleSortChange = vi.fn()
      const wrapper = mount({
        components: {
          ElTable,
          ElTableColumn,
        },
        template: `
          <el-table :data="testData" @sort-change="handleSortChange">
          <el-table-column prop="name" />
          <el-table-column prop="release" />
          <el-table-column prop="director" />
          <el-table-column prop="runtime" sortable ref="runtime" />
          </el-table>
        `,
        data() {
          return { testData: getTestData() }
        },
        methods: {
          handleSortChange,
        },
      })
      await doubleWait()
      const elm = wrapper.find('.caret-wrapper')

      elm.trigger('click')
      expect(handleSortChange).toHaveBeenLastCalledWith({
        column: expect.any(Object),
        prop: 'runtime',
        order: 'ascending',
      })

      elm.trigger('click')
      expect(handleSortChange).toHaveBeenLastCalledWith({
        column: expect.any(Object),
        prop: 'runtime',
        order: 'descending',
      })

      elm.trigger('click')
      expect(handleSortChange).toHaveBeenLastCalledWith({
        column: expect.any(Object),
        prop: 'runtime',
        order: null,
      })
    })

    it('setCurrentRow', async () => {
      const wrapper = mount({
        components: {
          ElTable,
          ElTableColumn,
        },
        template: `
        <div>
          <el-table ref="table" :data="testData" highlight-current-row>
            <el-table-column prop="name" sortable />
            <el-table-column prop="release" sortable />
            <el-table-column prop="director" sortable />
            <el-table-column prop="runtime" sortable />
          </el-table>
          <button class="clear" @click="clear">clear</button>
        </div>
        `,
        data() {
          return { testData: getTestData() }
        },
        methods: {
          clear() {
            this.$refs.table.setCurrentRow()
          },
        },
      })
      const vm = wrapper.vm

      vm.$refs.table.setCurrentRow(vm.testData[1])
      await doubleWait()
      const secondRow = vm.$el.querySelectorAll('.el-table__row')[1]
      expect([...secondRow.classList]).toContain('current-row')

      vm.$el.querySelector('.clear').click()
      await doubleWait()
      expect([...secondRow.classList]).not.toContain('current-row')

      wrapper.unmount()
    })

    it('get table columns', async () => {
      const wrapper = mount({
        components: {
          ElTable,
          ElTableColumn,
        },
        template: `
        <div>
          <el-table ref="table" :data="testData" highlight-current-row>
            <el-table-column prop="name" sortable />
            <el-table-column prop="release" sortable />
          </el-table>
        </div>
        `,
        data() {
          return { testData: getTestData() }
        },
      })
      const vm = wrapper.vm
      await doubleWait()
      expect(vm.$refs.table.columns.length).toBe(2)
      wrapper.unmount()
    })
  })

  it('hover', async () => {
    const wrapper = mount({
      components: {
        ElTable,
        ElTableColumn,
      },
      template: `
        <el-table :data="testData">
          <el-table-column prop="name" label="片名" fixed />
          <el-table-column prop="release" label="发行日期" />
          <el-table-column prop="director" label="导演" />
          <el-table-column prop="runtime" label="时长（分）" />
        </el-table>
      `,
      data() {
        return {
          testData: getTestData(),
        }
      },
    })
    await doubleWait()
    const tr = wrapper.find('.el-table__body-wrapper tbody tr')
    await tr.trigger('mouseenter')
    await doubleWait()
    await rAF()
    await doubleWait()
    expect(tr.classes()).toContain('hover-row')
    await tr.trigger('mouseleave')
    await doubleWait()

    await rAF()
    await doubleWait()
    expect(tr.classes()).not.toContain('hover-row')
    wrapper.unmount()
  })

  it('hover on which rowSpan > 1', async () => {
    const wrapper = mount({
      components: {
        ElTable,
        ElTableColumn,
      },
      template: `
         <el-table
          :data="testData"
          :span-method="objectSpanMethod"
          border
          style="width: 100%; margin-top: 20px"
        >
          <el-table-column prop="id" label="ID" width="180" />
          <el-table-column prop="name" label="片名" />
          <el-table-column prop="release" label="发行日期" />
          <el-table-column prop="director" label="导演" />
          <el-table-column prop="runtime" label="时长（分）" />
        </el-table>
      `,
      data() {
        return {
          testData: getTestData(),
        }
      },
      methods: {
        objectSpanMethod({ rowIndex, columnIndex }) {
          if (columnIndex === 0) {
            if (rowIndex % 2 === 0) {
              return {
                rowspan: 2,
                colspan: 1,
              }
            } else {
              return {
                rowspan: 0,
                colspan: 0,
              }
            }
          }
        },
      },
    })
    const vm = wrapper.vm
    await doubleWait()
    const rows = vm.$el.querySelectorAll('.el-table__body-wrapper tbody tr')
    triggerEvent(rows[1], 'mouseenter', true, false)
    await doubleWait()
    await rAF()
    await doubleWait()
    const cell = vm.$el
      .querySelectorAll('.el-table__body-wrapper tbody tr')[0]
      .querySelector('.el-table__cell')

    expect([...cell.classList]).toContain('hover-cell')
    await doubleWait()
    triggerEvent(rows[1], 'mouseleave', true, false)
    await rAF()
    await doubleWait()
    expect([...cell.classList]).not.toContain('hover-cell')
    wrapper.unmount()
  })

  it('hover on which contains nested rowSpan > 1', async () => {
    const wrapper = mount({
      components: {
        ElTable,
        ElTableColumn,
      },
      template: `
        <el-table
          :data="testData"
          :span-method="objectSpanMethod"
          border
          style="width: 100%; margin-top: 20px"
        >
          <el-table-column prop="id" label="ID" width="180" />
          <el-table-column prop="name" label="片名" />
          <el-table-column prop="amount1" label="发行日期" />
          <el-table-column prop="amount2" label="导演" />
          <el-table-column prop="amount3" label="时长（分）" />
        </el-table>
      `,
      data() {
        return {
          testData: getMutliRowTestData(),
        }
      },
      methods: {
        objectSpanMethod: ({ row, columnIndex }) => {
          if (row.span[columnIndex]) {
            return row.span[columnIndex]
          }
          return [1, 1]
        },
      },
    })
    const vm = wrapper.vm
    await doubleWait()
    const rows = vm.$el.querySelectorAll('.el-table__body-wrapper tbody tr')
    triggerEvent(rows[3], 'mouseenter', true, false)
    await doubleWait()
    await rAF()
    await doubleWait()
    const nodeLists = vm.$el.querySelectorAll(
      '.el-table__body-wrapper tbody tr'
    )
    const cellNotContain = nodeLists[0].querySelectorAll('.el-table__cell')[1]
    expect([...cellNotContain.classList]).not.toContain('hover-cell')
    const cellShouldContain =
      nodeLists[2].querySelectorAll('.el-table__cell')[0]
    expect([...cellShouldContain.classList]).toContain('hover-cell')

    await doubleWait()
    triggerEvent(rows[3], 'mouseleave', true, false)
    await rAF()
    await doubleWait()
    expect([...cellShouldContain.classList]).not.toContain('hover-cell')
    wrapper.unmount()
  })

  it('highlight-current-row', async () => {
    const wrapper = mount({
      components: {
        ElTable,
        ElTableColumn,
      },
      template: `
        <el-table :data="testData" highlight-current-row>
          <el-table-column prop="name" label="片名" />
          <el-table-column prop="release" label="发行日期" />
          <el-table-column prop="director" label="导演" />
          <el-table-column prop="runtime" label="时长（分）" sortable />
        </el-table>
      `,

      created() {
        this.testData = getTestData()
      },
    })
    const vm = wrapper.vm
    await doubleWait()
    const tr = vm.$el.querySelector('.el-table__body-wrapper tbody tr')
    triggerEvent(tr, 'click', true, false)
    await doubleWait()
    expect([...tr.classList]).toContain('current-row')
    let rows = vm.$el.querySelectorAll('.el-table__body-wrapper tbody tr')

    triggerEvent(rows[1], 'click', true, false)
    await doubleWait()
    expect([...tr.classList]).not.toContain('current-row')
    expect([...rows[1].classList]).toContain('current-row')

    const ths = vm.$el.querySelectorAll('.el-table__header-wrapper thead th')
    triggerEvent(ths[3], 'click', true, false)

    await doubleWait()
    rows = vm.$el.querySelectorAll('.el-table__body-wrapper tbody tr')

    expect([...rows[1].classList]).not.toContain('current-row')
    expect([...rows[3].classList]).toContain('current-row')
    wrapper.unmount()
  })

  it('keep highlight row when data change', async () => {
    const wrapper = mount({
      components: {
        ElTable,
        ElTableColumn,
      },
      template: `
        <el-table :data="testData" highlight-current-row row-key="release">
          <el-table-column prop="name" label="片名" />
          <el-table-column prop="release" label="发行日期" />
          <el-table-column prop="director" label="导演" />
          <el-table-column prop="runtime" label="时长（分）" sortable />
        </el-table>
      `,
      data() {
        return {
          testData: getTestData(),
        }
      },
    })
    const vm = wrapper.vm
    await doubleWait()
    let rows = vm.$el.querySelectorAll('.el-table__body-wrapper tbody tr')
    triggerEvent(rows[2], 'click', true, false)
    await doubleWait()
    expect([...rows[2].classList]).toContain('current-row')
    const data = getTestData()
    data.splice(0, 0, {
      id: 8,
      name: 'Monsters, Inc.',
      release: '2018-02-01',
      director: 'Peter Docter',
      runtime: 92,
    })
    data[2].name = 'Modified Name'
    vm.testData = data

    await doubleWait()
    rows = vm.$el.querySelectorAll('.el-table__body-wrapper tbody tr')
    expect([...rows[3].classList]).toContain('current-row')
    wrapper.unmount()
  })

  it('keep highlight row after sort', async () => {
    const wrapper = mount({
      components: {
        ElTable,
        ElTableColumn,
      },
      template: `
        <el-table :data="testData" row-key="release" highlight-current-row >
          <el-table-column prop="name" label="片名" />
          <el-table-column prop="release" label="发行日期" />
          <el-table-column prop="director" label="导演" />
          <el-table-column prop="runtime" label="时长（分）" sortable />
        </el-table>
      `,
      data() {
        return {
          testData: getTestData(),
        }
      },
    })
    const vm = wrapper.vm
    await doubleWait()
    const rows = vm.$el.querySelectorAll('.el-table__body-wrapper tbody tr')
    triggerEvent(rows[1], 'click', true, false)
    await doubleWait()
    expect([...rows[1].classList]).toContain('current-row')
    triggerEvent(rows[3], 'click', true, false)
    await doubleWait()
    expect([...rows[3].classList]).toContain('current-row')
    wrapper.unmount()
  })

  it('table append is visible in viewport if height is 100%', async () => {
    const wrapper = mount({
      components: {
        ElTable,
        ElTableColumn,
      },
      template: `
      <el-table :data="[]" height="100%">
        <el-table-column prop="name" label="片名" />
        <el-table-column prop="release" label="发行日期" />
        <el-table-column prop="director" label="导演" />
        <el-table-column prop="runtime" label="时长（分）" />
        <template #append>
          <div class="append-content" style="height: 48px;">
            append 区域始终出现在视图内
          </div>
        </template>
      </el-table>
      `,
    })
    await doubleWait()
    const emptyBlockEl = wrapper.find('.el-table__empty-block')
    expect(emptyBlockEl.attributes('style')).toContain('height: 100%')
    wrapper.unmount()
  })

  describe('rowKey & index', () => {
    it('key type is string', async () => {
      const wrapper = mount({
        components: {
          ElTable,
          ElTableColumn,
        },
        template: `
          <el-table :data="testData" row-key="release" highlight-current-row >
            <el-table-column type="index" />
            <el-table-column prop="name" label="片名" />
            <el-table-column prop="release" label="发行日期" />
            <el-table-column prop="director" label="导演" />
            <el-table-column prop="runtime" label="时长（分）" sortable />
          </el-table>
        `,
        data() {
          return {
            testData: getTestData(),
          }
        },
      })
      await doubleWait()
      const rows = wrapper.findAll('.el-table__row')
      rows.forEach((row, index) => {
        const cell = row.find('td')
        expect(cell.text()).toMatch(`${index + 1}`)
      })
    })
    it('with expand row', async () => {
      const wrapper = mount({
        components: {
          ElTable,
          ElTableColumn,
        },
        template: `
          <el-table :data="testData" row-key="release" highlight-current-row >
            <el-table-column type="index" />
            <el-table-column type="expand">
              <template #default="props">
                <span class="index">{{ props.$index }}</span>
                <span class="director">{{ props.row.director }}</span>
              </template>
            </el-table-column>
            <el-table-column prop="name" label="片名" />
            <el-table-column prop="release" label="发行日期" />
            <el-table-column prop="director" label="导演" />
            <el-table-column prop="runtime" label="时长（分）" sortable />
          </el-table>
        `,
        data() {
          return {
            testData: getTestData(),
          }
        },
      })
      await doubleWait()
      const rows = wrapper.findAll('.el-table__row')
      rows.forEach((row, index) => {
        const cell = row.find('td')
        expect(cell.text()).toMatch(`${index + 1}`)
      })
      let index = 0
      for (const row of rows) {
        const expandCell = row.findAll('td')[1]
        const triggerIcon = expandCell.find('.el-table__expand-icon')
        triggerIcon.trigger('click')
        await doubleWait()
        const cell = row.find('td')
        expect(cell.text()).toMatch(`${++index}`)
        triggerIcon.trigger('click')
        await doubleWait()
      }
    })
  })

  describe('tree', () => {
    let wrapper: VueWrapper<ComponentPublicInstance>
    afterEach(() => wrapper?.unmount())
    it('render tree structural data', async () => {
      wrapper = mount({
        components: {
          ElTableColumn,
          ElTable,
        },
        template: `
          <el-table :data="testData" row-key="release">
            <el-table-column prop="name" label="片名" />
            <el-table-column prop="release" label="发行日期" />
            <el-table-column prop="director" label="导演" />
            <el-table-column prop="runtime" label="时长（分）" />
          </el-table>
        `,
        data() {
          const testData = getTestData() as any
          testData[1].children = [
            {
              name: "A Bug's Life copy 1",
              release: '1998-11-25-1',
              director: 'John Lasseter',
              runtime: 95,
            },
            {
              name: "A Bug's Life copy 2",
              release: '1998-11-25-2',
              director: 'John Lasseter',
              runtime: 95,
            },
          ]
          return {
            testData,
          }
        },
      })
      await doubleWait()
      const rows = wrapper.findAll('.el-table__row')
      expect(rows.length).toEqual(7)
      // validate placeholder
      expect(wrapper.findAll('.el-table__placeholder').length).toBe(6)
      const childRows = wrapper.findAll('.el-table__row--level-1')
      expect(childRows.length).toEqual(2)
      childRows.forEach((item) => {
        expect(item.attributes('style')).toContain('display: none')
      })
      wrapper.find('.el-table__expand-icon').trigger('click')

      await doubleWait()
      childRows.forEach((item) => {
        expect(item.attributes('style')).toEqual('')
      })
    })

    it('load substree row data & updateKeyChildren', async () => {
      wrapper = mount({
        components: {
          ElTable,
          ElTableColumn,
        },
        template: `
          <el-table :data="testData" row-key="release" lazy :load="load" ref="table">
            <el-table-column prop="name" label="片名" />
            <el-table-column prop="release" label="发行日期" />
            <el-table-column prop="director" label="导演" />
            <el-table-column prop="runtime" label="时长（分）" />
          </el-table>
        `,
        data() {
          const testData = getTestData() as any
          testData[testData.length - 1].children = [
            {
              name: "A Bug's Life copy 1",
              release: '2008-1-25-1',
              director: 'John Lasseter',
              runtime: 95,
            },
          ]
          testData[1].hasChildren = true
          return {
            testData,
          }
        },
        methods: {
          load(row, treeNode, resolve) {
            resolve([
              {
                name: "A Bug's Life copy 1",
                release: '1998-11-25-1',
                director: 'John Lasseter',
                runtime: 95,
              },
              {
                name: "A Bug's Life copy 2",
                release: '1998-11-25-2',
                director: 'John Lasseter',
                runtime: 95,
              },
            ])
          },
          updateKeyChildren() {
            this.$refs.table.updateKeyChildren(this.testData[1].release, [
              {
                name: 'Update children data',
                release: '2024-7-30-10',
                director: 'John Lasseter',
                runtime: 95,
              },
            ])
          },
        },
      })
      await doubleWait()
      const expandIcon = wrapper.find('.el-table__expand-icon')
      expandIcon.trigger('click')

      await doubleWait()
      expect(expandIcon.classes()).toContain('el-table__expand-icon--expanded')
      expect(wrapper.findAll('.el-table__row').length).toEqual(8)

      wrapper.vm.updateKeyChildren()
      await doubleWait()
      expect(wrapper.findAll('.el-table__row').length).toEqual(7)
    })

    it('tree-props & default-expand-all & expand-change', async () => {
      const spy = vi.fn()
      wrapper = mount({
        components: {
          ElTable,
          ElTableColumn,
        },
        template: `
          <el-table
            :data="testData" lazy default-expand-all row-key="release" :tree-props="{children: 'childrenTest', hasChildren: 'hasChildrenTest'}"
            :load="load" @expand-change="change">
            <el-table-column prop="name" label="片名" />
            <el-table-column prop="release" label="发行日期" />
            <el-table-column prop="director" label="导演" />
            <el-table-column prop="runtime" label="时长（分）" />
          </el-table>
        `,
        data() {
          const testData = getTestData() as any
          testData[testData.length - 1].childrenTest = [
            {
              name: "A Bug's Life copy 1",
              release: '2008-1-25-1',
              director: 'John Lasseter',
              runtime: 95,
            },
          ]
          testData[1].hasChildrenTest = true
          return {
            testData,
          }
        },
        methods: {
          load(row, treeNode, resolve) {
            resolve([
              {
                name: "A Bug's Life copy 1",
                release: '1998-11-25-1',
                director: 'John Lasseter',
                runtime: 95,
              },
              {
                name: "A Bug's Life copy 2",
                release: '1998-11-25-2',
                director: 'John Lasseter',
                runtime: 95,
              },
            ])
          },
          change: spy,
        },
      })
      await doubleWait()
      const childRows = wrapper.findAll('.el-table__row--level-1')
      childRows.forEach((item) => {
        expect(item.attributes('style')).toBeUndefined()
      })
      const expandIcon = wrapper.find('.el-table__expand-icon')
      expandIcon.trigger('click')
      await doubleWait()
      expect(
        expandIcon.classes().includes('el-table__expand-icon--expanded')
      ).toBeTruthy()
      expect(wrapper.findAll('.el-table__row').length).toEqual(8)
      expect(spy.mock.calls[0][0]).toBeInstanceOf(Object)
      expect(spy.mock.calls[0][1]).toBeTruthy()
    })

    it('expand-row-keys & toggleRowExpansion', async () => {
      wrapper = mount({
        components: {
          ElTable,
          ElTableColumn,
        },
        template: `
          <el-table :data="testData" row-key="release" lazy :load="load" :expand-row-keys="['2003-5-30']" ref="table">
            <el-table-column prop="name" label="片名" />
            <el-table-column prop="release" label="发行日期" />
            <el-table-column prop="director" label="导演" />
            <el-table-column prop="runtime" label="时长（分）" />
          </el-table>
        `,
        data() {
          const testData = getTestData() as any
          testData[testData.length - 1].children = [
            {
              name: "A Bug's Life copy 1",
              release: '2003-5-30-1',
              director: 'John Lasseter',
              runtime: 95,
              hasChildren: true,
            },
          ]
          return {
            testData,
          }
        },
        methods: {
          load(row, treeNode, resolve) {
            resolve([
              {
                name: "A Bug's Life copy 1",
                release: '2003-5-30-2',
                director: 'John Lasseter',
                runtime: 95,
              },
            ])
          },
          closeExpandRow() {
            const testData = this.testData
            const row = testData[testData.length - 1].children[0]
            this.$refs.table.toggleRowExpansion(row)
          },
        },
      })
      await doubleWait()
      const childRows = wrapper.findAll('.el-table__row--level-1')
      childRows.forEach((item) => {
        expect(item.attributes('style')).toBeUndefined()
      })
      const expandIcon = childRows[0].find('.el-table__expand-icon')
      expandIcon.trigger('click')
      await doubleWait()
      expect(expandIcon.classes()).toContain('el-table__expand-icon--expanded')
      ;(wrapper.vm as any).closeExpandRow()
      await doubleWait()
      expect(expandIcon.classes()).not.toContain(
        'el-table__expand-icon--expanded'
      )
    })

    it('v-if on el-table-column should patch correctly', async () => {
      wrapper = mount({
        components: {
          ElTable,
          ElTableColumn,
        },
        template: `
          <div>
            <button @click="hideName">hide name column</button>
            <el-table :data="testData">
              <el-table-column key="name" label="片名" v-if="showName">
                <template #default="{ row }"><span class="name">{{ row.name }}</span></template>
              </el-table-column>
              <el-table-column key="release" label="发行日期" >
                <template #default="{ row }"><span class="release">{{ row.release }}</span></template>
              </el-table-column>
            </el-table>
          </div>
        `,
        data() {
          return {
            testData: getTestData() as any,
            showName: true,
          }
        },
        methods: {
          hideName() {
            this.showName = false
          },
        },
      })
      await doubleWait()
      const firstCellSpanBeforeHide = wrapper.find('.el-table__body tr td span')
      expect(firstCellSpanBeforeHide.classes().includes('name')).toBeTruthy()
      wrapper.find('button').trigger('click')
      await doubleWait()
      const firstCellSpanAfterHide = wrapper.find('.el-table__body tr td span')
      expect(firstCellSpanAfterHide.classes().includes('release')).toBeTruthy()
    })

    it('selectable tree', async () => {
      const wrapper = mount({
        components: {
          ElTable,
          ElTableColumn,
        },
        template: `
              <el-table :data="testData" :tree-props="treeProps" row-key="id" @selection-change="change">
                <el-table-column type="selection" />
                <el-table-column prop="name" label="name" />
                <el-table-column prop="release" label="release" />
                <el-table-column prop="director" label="director" />
                <el-table-column prop="runtime" label="runtime" />
              </el-table>
            `,
        data() {
          const treeProps = {
            children: 'childrenTest',
            checkStrictly: false,
          }
          const testData = getTestData() as any
          testData[1].childrenTest = [
            {
              id: 21,
              name: "A Bug's Life copy 1",
              release: '1998-11-25-1',
              director: 'John Lasseter',
              runtime: 95,
            },
            {
              id: 22,
              name: "A Bug's Life copy 2",
              release: '1998-11-25-2',
              director: 'John Lasseter',
              runtime: 95,
            },
          ]
          return {
            treeProps,
            testData,
            selected: [],
          }
        },

        methods: {
          change(rows) {
            this.selected = rows
          },
        },
      })
      await doubleWait()
      wrapper.findAll('.el-checkbox')[2].trigger('click')
      await doubleWait()
      expect(wrapper.vm.selected.length).toEqual(3)
      wrapper.findAll('.el-checkbox')[2].trigger('click')
      await doubleWait()
      expect(wrapper.vm.selected.length).toEqual(0)

      await (wrapper.vm.treeProps.checkStrictly = true)
      await doubleWait()
      wrapper.findAll('.el-checkbox')[2].trigger('click')
      await doubleWait()
      expect(wrapper.vm.selected.length).toEqual(1)
      expect(wrapper.findAll('.el-checkbox')[2].classes()).include('is-checked')

      wrapper.findAll('.el-checkbox')[3].trigger('click')
      await doubleWait()
      expect(wrapper.vm.selected.length).toEqual(2)
      expect(wrapper.findAll('.el-checkbox')[3].classes()).include('is-checked')

      await (wrapper.vm.treeProps.checkStrictly = false)
      wrapper.findAll('.el-checkbox')[0].trigger('click')
      wrapper.findAll('.el-checkbox')[0].trigger('click')
      await doubleWait()
      expect(wrapper.vm.selected.length).toEqual(0)
      wrapper.findAll('.el-checkbox')[0].trigger('click')
      await doubleWait()
      wrapper.findAll('.el-checkbox')[3].trigger('click')
      await doubleWait()
      wrapper.findAll('.el-checkbox')[0].trigger('click')
      await doubleWait()
      expect(wrapper.vm.selected.length).toEqual(getTestData().length + 2)
    })
  })

  it('when tableLayout is auto', async () => {
    const wrapper = mount({
      components: {
        ElTable,
        ElTableColumn,
      },
      template: `
      <el-table :data="testData" table-layout="auto">
        <el-table-column prop="id" />
        <el-table-column prop="name" label="片名" />
        <el-table-column prop="release" label="发行日期" />
        <el-table-column prop="director" label="导演" />
        <el-table-column prop="runtime" label="时长（分）" />
      </el-table>
      `,
      created() {
        this.testData = getTestData()
      },
    })
    await doubleWait()
    expect(wrapper.find('.el-table__body thead').exists()).toBeTruthy()
    expect(wrapper.find('.el-table__body colgroup col').exists()).toBeFalsy()
    expect(wrapper.find('.el-table__body tbody').exists()).toBeTruthy()
  })

  it('automatic minimum size of flex-items', async () => {
    const wrapper = mount({
      components: {
        ElTable,
        ElTableColumn,
      },
      template: `
        <div class="right">
          <el-table flexible :data="testData" table-layout="auto">
            <el-table-column prop="id" />
            <el-table-column prop="name" label="片名" />
            <el-table-column prop="release" label="发行日期" />
            <el-table-column prop="director" label="导演" />
            <el-table-column prop="runtime" label="时长（分）" />
          </el-table>
        </div>
      `,
      created() {
        this.testData = getTestData()
      },
    })
    await nextTick()
    expect(wrapper.find('.right').element.getAttribute('style')).toContain(
      'min-width: 0'
    )
  })

  it('change columns order when use v-for & key to render table', async () => {
    const wrapper = mount({
      components: {
        ElTable,
        ElTableColumn,
      },
      template: `
            <button class="change-column" @click="changeColumnData"></button>
            <el-table :data="testData">
              <el-table-column
                v-for="item in columnsData"
                :prop="item.prop"
                :label="item.label"
                :key="item.prop" />
            </el-table>
          `,
      data() {
        const testData = getTestData() as any

        return {
          testData,
          columnsData: [
            { label: 'name', prop: 'name' },
            { label: 'release', prop: 'release' },
            { label: 'director', prop: 'director' },
            { label: 'runtime', prop: 'runtime' },
          ],
        }
      },

      methods: {
        changeColumnData() {
          ;[this.columnsData[0], this.columnsData[1]] = [
            this.columnsData[1],
            this.columnsData[0],
          ]
        },
      },
    })
    await doubleWait()
    wrapper.find('.change-column').trigger('click')
    await doubleWait()
    expect(wrapper.find('.el-table__header').findAll('.cell')[0].text()).toBe(
      'release'
    )
    expect(wrapper.find('.el-table__header').findAll('.cell')[1].text()).toBe(
      'name'
    )
  })

  it('show-overflow-tooltip', async () => {
    const wrapper = mount({
      components: {
        ElTable,
        ElTableColumn,
      },

      template: `
      <el-table :data="testData" show-overflow-tooltip>
        <el-table-column prop="name" label="name" />
        <el-table-column prop="release" label="release" />
      </el-table>
    `,

      data() {
        const testData = getTestData() as any
        return {
          testData,
        }
      },
    })

    await doubleWait()
    const findTooltipEl = wrapper.findAll('.el-tooltip').length
    await doubleWait()
    // 5 rows and 2 columns should be 10
    expect(findTooltipEl).toEqual(10)
  })

  it('add show-overflow-tooltip to table and table-column', async () => {
    const wrapper = mount({
      components: {
        ElTable,
        ElTableColumn,
      },

      template: `
      <el-table :data="testData" show-overflow-tooltip>
        <el-table-column prop="name" label="name" :show-overflow-tooltip="false" />
        <el-table-column prop="release" label="release" />
      </el-table>
    `,

      data() {
        const testData = getTestData() as any
        return {
          testData,
        }
      },
    })

    await doubleWait()
    const findTooltipEl = wrapper.findAll('.el-tooltip').length
    expect(findTooltipEl).toEqual(5)
  })

  it('test show-overflow-tooltip trigger', async () => {
    const testData = getTestData() as any
    const mockRangeRect = vi
      .spyOn(Range.prototype, 'getBoundingClientRect')
      .mockReturnValue({
        width: 150,
        height: 30,
      } as DOMRect)
    const wrapper = mount({
      components: {
        ElTable,
        ElTableColumn,
      },

      template: `
    <el-table :data="testData" show-overflow-tooltip>
      <el-table-column class-name="overflow_tooltip" prop="name" label="name"/>
    </el-table>
  `,

      data() {
        const testData = getTestData() as any
        return {
          testData,
        }
      },
    })

    await doubleWait()
    const tr = wrapper.findAll('.overflow_tooltip')
    // Enter the cell
    const mockCellRect = vi
      .spyOn(tr[1].find('.cell').element, 'getBoundingClientRect')
      .mockReturnValue({
        width: 100,
        height: 30,
      } as DOMRect)
    await tr[1].trigger('mouseenter')
    await rAF()
    expect(document.querySelector('.el-popper span')?.innerHTML).toContain(
      testData[0].name
    )
    expect(
      document.querySelector('.el-popper')?.getAttribute('aria-hidden')
    ).toEqual('false')

    // Leave the cell
    vi.useFakeTimers()
    await tr[1].trigger('mouseleave')
    vi.runAllTimers()
    vi.useRealTimers()
    await rAF()
    expect(
      document.querySelector('.el-popper')?.getAttribute('aria-hidden')
    ).toEqual('true')

    // Enter the cell again
    await tr[1].trigger('mouseenter')
    await rAF()
    expect(
      document.querySelector('.el-popper')?.getAttribute('aria-hidden')
    ).toEqual('false')

    // When the width of the cell content decreases, enter
    mockRangeRect.mockReturnValue({
      width: 80,
      height: 30,
    } as DOMRect)
    await tr[1].trigger('mouseenter')
    await rAF()
    expect(document.querySelector('.el-popper')).toEqual(null)

    // From cell1 to cell2
    mockRangeRect.mockReturnValue({
      width: 150,
      height: 30,
    } as DOMRect)
    const mockCellRect2 = vi
      .spyOn(tr[2].find('.cell').element, 'getBoundingClientRect')
      .mockReturnValue({
        width: 100,
        height: 30,
      } as DOMRect)
    await tr[1].trigger('mouseenter')
    await rAF()
    expect(document.querySelector('.el-popper span')?.innerHTML).toContain(
      testData[0].name
    )
    await tr[2].trigger('mouseenter')
    await rAF()
    expect(document.querySelector('.el-popper span')?.innerHTML).toContain(
      testData[1].name
    )

    mockRangeRect.mockRestore()
    mockCellRect.mockRestore()
    mockCellRect2.mockRestore()
  })

  it('use-tooltip-formatter', async () => {
    const testData = getTestData() as any
    const mockRangeRect = vi
      .spyOn(Range.prototype, 'getBoundingClientRect')
      .mockReturnValue({
        width: 150,
        height: 30,
      } as DOMRect)
    const wrapper = mount({
      components: {
        ElTable,
        ElTableColumn,
      },

      template: `
    <el-table :data="testData" show-overflow-tooltip :tooltip-formatter="tooltipFormatter">
      <el-table-column class-name="overflow-tooltip-formatter" prop="name" label="name"/>
      <el-table-column class-name="overflow-tooltip-formatter-cell" prop="director" label="director" :tooltip-formatter="cellTooltipFormatter" />
      <el-table-column class-name="vnode-formatter-cell" prop="runtime" label="runtime" :tooltip-formatter="vnodeFormmatter" />
    </el-table>
  `,

      data() {
        const testData = getTestData() as any
        return {
          testData,
        }
      },
      methods: {
        tooltipFormatter({ row }) {
          return `${row.name}:formattered`
        },
        cellTooltipFormatter({ cellValue }) {
          return `${cellValue}:hello world`
        },
        vnodeFormmatter({ cellValue }) {
          return h(
            'a',
            { type: 'primary', href: `http://www.baidu.com?q=${cellValue}` },
            () => h('span', null, cellValue)
          )
        },
      },
    })

    await doubleWait()
    const baseFormatterTds = wrapper.findAll('.overflow-tooltip-formatter')
    const childFormatterTds = wrapper.findAll(
      '.overflow-tooltip-formatter-cell'
    )
    const vnodeFormatterTds = wrapper.findAll('.vnode-formatter-cell')
    // Enter the cell
    await baseFormatterTds[1].trigger('mouseenter')
    await rAF()

    expect(document.querySelector('.el-popper span')?.innerHTML).equals(
      `${testData[0].name}:formattered`
    )

    // From cell1 to cell2
    await childFormatterTds[1].trigger('mouseenter')
    await rAF()
    expect(document.querySelector('.el-popper span')?.innerHTML).equals(
      `${testData[0].director}:hello world`
    )
    await baseFormatterTds[2].trigger('mouseenter')
    await rAF()
    expect(document.querySelector('.el-popper span')?.innerHTML).equals(
      `${testData[1].name}:formattered`
    )

    // vnode
    await vnodeFormatterTds[1].trigger('mouseenter')
    await rAF()
    expect(document.querySelector('.el-popper a')?.getAttribute('href')).equals(
      `http://www.baidu.com?q=${testData[0].runtime}`
    )

    // leave and enter again
    vi.useFakeTimers()
    await vnodeFormatterTds[1].trigger('mouseleave')
    vi.runAllTimers()
    vi.useRealTimers()
    await rAF()
    expect(
      document.querySelector('.el-popper')?.getAttribute('aria-hidden')
    ).toEqual('true')

    // Enter the cell again
    await vnodeFormatterTds[1].trigger('mouseenter')
    await rAF()
    expect(document.querySelector('.el-popper a')?.getAttribute('href')).equals(
      `http://www.baidu.com?q=${testData[0].runtime}`
    )

    mockRangeRect.mockRestore()
  })
})
