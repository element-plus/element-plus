import { VueWrapper } from '@vue/test-utils'
import { ComponentPublicInstance, nextTick } from 'vue'
import ElTable from '../src/table.vue'
import ElTableColumn from '../src/table-column/index'
import ElCheckboxGroup from '@element-plus/checkbox-group'
import ElCheckbox from '@element-plus/checkbox'
import { triggerEvent } from '@element-plus/test-utils'
import { mount, getTestData } from './table-test-common'


async function sleep(time: number) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(undefined)
    }, time)
  })
}

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
      await nextTick()
      const ths = wrapper.findAll('thead th')
      expect(
        ths.map(node => node.text()).filter(o => o),
      ).toEqual(
        ['片名', '发行日期', '导演', '时长（分）'],
      )
    })

    it('row length', () => {
      expect(
        wrapper.findAll('.el-table__body-wrapper tbody tr').length,
      ).toEqual(getTestData().length)
    })
    it('row data', () => {
      const cells = wrapper.findAll('td .cell').map(node =>
        node.text(),
      )
      const testDataArr = getTestData().flatMap(cur => {
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
              <el-checkbox label="复选框 A"></el-checkbox>
              <el-checkbox label="复选框 B"></el-checkbox>
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
    await nextTick()
    const checkGroup = vm.$el.querySelectorAll(
      '.el-table__body-wrapper .el-checkbox-group',
    )
    expect(checkGroup.length).toBe(3)
    const checkbox = vm.$el.querySelectorAll(
      '.el-table__body-wrapper .el-checkbox',
    )
    expect(checkbox.length).toBe(6)
    const checkSelect = vm.$el.querySelectorAll(
      '.el-table__body-wrapper label.is-checked',
    )
    expect(checkSelect.length).toBe(3)
  })
  describe('attributes', () => {
    const createTable = function(props, opts?) {
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
          opts,
        ),
      )
    }

    it('height', async () => {
      const wrapper = createTable('height="134"')
      await nextTick()
      expect(wrapper.attributes('style')).toContain('height: 134px')
      wrapper.unmount()
    })

    it('height as string', async () => {
      const wrapper = createTable('height="100px"')
      await nextTick()
      expect(wrapper.attributes('style')).toContain('height: 100px')
      wrapper.unmount()
    })

    it('maxHeight', async () => {
      const wrapper = createTable('max-height="134"')
      await nextTick()
      expect(wrapper.attributes('style')).toContain('max-height: 134px')
      wrapper.unmount()
    })

    it('stripe', async () => {
      const wrapper = createTable('stripe')
      await nextTick()
      expect(wrapper.classes()).toContain('el-table--striped')
      wrapper.unmount()
    })

    it('border', async () => {
      const wrapper = createTable('border')
      await nextTick()
      expect(wrapper.classes()).toContain('el-table--border')
      wrapper.unmount()
    })

    it('fit', async () => {
      const wrapper = createTable(':fit="false"')
      await nextTick()
      expect(wrapper.classes()).not.toContain('el-table--fit')
      wrapper.unmount()
    })

    it('show-header', async () => {
      const wrapper = createTable(':show-header="false"')
      await nextTick()
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
      await nextTick()
      expect(wrapper.findAll('.info-row').length).toEqual(1)
      expect(wrapper.findAll('.positive-row').length).toEqual(1)
      wrapper.unmount()
    })

    it('tableRowStyle[Object]', async () => {
      const wrapper = createTable(':row-style="{ height: \'60px\' }"', {})
      await nextTick()
      expect(wrapper.find('.el-table__body tr').attributes('style')).toContain(
        'height: 60px',
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

      await nextTick()
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
      await nextTick()
      wrapper.vm.currentRowKey = 1
      const tr = wrapper.find('.el-table__body-wrapper tbody tr')
      await nextTick()
      expect(tr.classes()).toContain('current-row')
      wrapper.vm.currentRowKey = 2

      const rows = wrapper.findAll('.el-table__body-wrapper tbody tr')
      await nextTick()
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
      await nextTick()
    })

    afterEach(() => wrapper.unmount())

    it('render', () => {
      expect(
        wrapper.find('.el-table__column-filter-trigger'),
      ).not.toBeUndefined()
    })

    it('click dropdown', async () => {
      const btn = wrapper.find('.el-table__column-filter-trigger')
      btn.trigger('click')
      await nextTick()
      const filter = document.body.querySelector('.el-table-filter')
      expect(filter).not.toBeUndefined()
      filter.parentNode.removeChild(filter)
    })

    it('click filter', async () => {
      const btn = wrapper.find('.el-table__column-filter-trigger')

      btn.trigger('click')
      await nextTick()
      const filter = document.body.querySelector('.el-table-filter')

      triggerEvent(filter.querySelector('.el-checkbox'), 'click', true, false)
      // confrim button
      await nextTick()
      triggerEvent(
        filter.querySelector('.el-table-filter__bottom button'),
        'click',
        true,
        false,
      )
      await nextTick()
      expect(
        (wrapper.vm as ComponentPublicInstance & { filters: any; }).filters[
          'director'
        ],
      ).toEqual(['John Lasseter'])
      expect(
        wrapper.findAll('.el-table__body-wrapper tbody tr').length,
      ).toEqual(3)
      filter.parentNode.removeChild(filter)
    })

    it('click reset', async () => {
      const btn = wrapper.find('.el-table__column-filter-trigger')
      btn.trigger('click')
      await nextTick()
      const filter = document.body.querySelector('.el-table-filter')

      triggerEvent(filter.querySelector('.el-checkbox'), 'click', true, false)
      await nextTick()
      triggerEvent(
        filter.querySelectorAll('.el-table-filter__bottom button')[1],
        'click',
        true,
        false,
      )
      await nextTick()
      expect(
        (wrapper.vm as ComponentPublicInstance & { filters: any; }).filters[
          'director'
        ],
      ).toEqual([])
      expect(
        filter.querySelector('.el-table-filter__bottom button').classList,
      ).toContain('is-disabled')
      filter.parentNode.removeChild(filter)
      wrapper.unmount()
    })
  })

  describe('events', () => {
    const createTable = function(prop = '') {
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
      await nextTick()
      wrapper.findAll('.el-checkbox')[1].trigger('click')
      expect(wrapper.vm.result.length).toEqual(2)
      expect(wrapper.vm.result[1]).toHaveProperty('name')
      expect(wrapper.vm.result[1]['name']).toEqual(getTestData()[0].name)
      wrapper.unmount()
    })

    it('selection-change', async () => {
      const wrapper = createTable('selection-change')
      await nextTick()
      wrapper.findAll('.el-checkbox')[1].trigger('click')
      expect(wrapper.vm.result.length).toEqual(1)
      wrapper.unmount()
    })

    it('cell-mouse-enter', async () => {
      const wrapper = createTable('cell-mouse-enter')
      await nextTick()
      const cell = wrapper.findAll('.el-table__body .cell')[2] // first row
      triggerEvent(cell.element.parentElement, 'mouseenter')
      expect(wrapper.vm.result.length).toEqual(4) // row, column, cell, event
      expect(wrapper.vm.result[0]).toHaveProperty('name')
      expect(wrapper.vm.result[0]['name']).toEqual(getTestData()[0].name)
      wrapper.unmount()
    })

    it('cell-mouse-leave', async () => {
      const wrapper = createTable('cell-mouse-leave')
      await nextTick()
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
      await nextTick()
      const cell = wrapper.findAll('.el-table__body .cell')[2] // first row

      triggerEvent(cell.element.parentElement.parentElement, 'click')
      expect(wrapper.vm.result.length).toEqual(3) // row, event, column
      expect(wrapper.vm.result[0]).toHaveProperty('name')
      expect(wrapper.vm.result[0]['name']).toEqual(getTestData()[0].name)
      wrapper.unmount()
    })

    it('row-dblclick', async () => {
      const wrapper = createTable('row-dblclick')
      await nextTick()
      const cell = wrapper.findAll('.el-table__body .cell')[2] // first row

      triggerEvent(cell.element.parentElement.parentElement, 'dblclick')
      expect(wrapper.vm.result.length).toEqual(3) // row, event, column
      expect(wrapper.vm.result[0]).toHaveProperty('name')
      expect(wrapper.vm.result[0]['name']).toEqual(getTestData()[0].name)
      wrapper.unmount()
    })

    it('header-click', async () => {
      const wrapper = createTable('header-click')
      await nextTick()
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

      await nextTick()
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

      await nextTick()
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
            columns.forEach(column => {
              const prop = column.property
              if (prop === 'release') {
                const dates = data.map(item => item[prop])
                const releaseYears = dates.map(date => Number(date.slice(0, 4)))
                result.push(
                  releaseYears.reduce((prev, curr) => {
                    return prev + curr
                  }),
                )
              } else {
                result.push('')
              }
            })
            return result
          },
        },
      })

      await nextTick()
      const cells = wrapper.findAll('.el-table__footer .cell')
      expect(cells[1].text()).toEqual('9996')
      wrapper.unmount()
    })
  })
  describe('methods', () => {
    const createTable = function(prop = '') {
      return mount({
        components: {
          ElTableColumn,
          ElTable,
        },
        template: `
          <el-table ref="table" :data="testData" @${prop}="handleEvent">
            <el-table-column type="selection" />
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

      wrapper.unmount()
    })

    it('toggleAllSelection', async () => {
      const wrapper = createTable('selection-change')
      const vm = wrapper.vm
      vm.$refs.table.toggleAllSelection()
      await nextTick()
      expect(vm.selection.length).toEqual(5)

      vm.$refs.table.toggleAllSelection()
      await nextTick()
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
      await nextTick()
      const lastCells = wrapper.findAll(
        '.el-table__body-wrapper tbody tr td:last-child',
      )
      expect(
        lastCells.map(node => node.text()),
      ).toEqual(
        ['80', '95', '92', '92', '100'],
      )
      await nextTick()
      vm.testData = vm.testData.map(data =>
        Object.assign(data, { runtime: -data.runtime }),
      )
      vm.$refs.table.sort('runtime', 'ascending')
      await nextTick()
      expect(
        lastCells.map(node => node.text()),
      ).toEqual(
        ['-100', '-95', '-92', '-92', '-80'],
      )
      wrapper.unmount()
    })

    it('sort correct change icon', async () => {
      function assertSortIconCount($el, msg, count = 1) {
        const sortIconCount = $el.querySelectorAll(
          'th.ascending, th.descending',
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
      await nextTick()
      assertSortIconCount(
        wrapper.element,
        'sorting icon is not empty after mount',
        0,
      )
      // manual click first column header
      const elm = wrapper.find('.caret-wrapper')
      elm.trigger('click')
      await nextTick()
      assertSortIconCount(
        wrapper.element,
        'sorting icon is not one after click header',
      )
      vm.$refs.table.sort('director', 'descending')
      await nextTick()
      assertSortIconCount(
        wrapper.element,
        'sorting icon is not one after call sort',
      )
      vm.$refs.table.sort('director', 'ascending')
      await nextTick()
      assertSortIconCount(
        wrapper.element,
        'sorting icon is not one after sort same column',
      )
      wrapper.unmount()
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
      await nextTick()
      const secondRow = vm.$el.querySelectorAll('.el-table__row')[1]
      expect(secondRow.classList).toContain('current-row')

      vm.$el.querySelector('.clear').click()
      await nextTick()
      expect(secondRow.classList).not.toContain('current-row')

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
    await nextTick()
    const tr = wrapper.find('.el-table__body-wrapper tbody tr')
    tr.trigger('mouseenter')

    await sleep(50)
    expect(tr.classes()).toContain('hover-row')
    tr.trigger('mouseleave')

    await sleep(50)
    expect(tr.classes()).not.toContain('hover-row')
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
    await nextTick()
    const tr = vm.$el.querySelector('.el-table__body-wrapper tbody tr')
    triggerEvent(tr, 'click', true, false)
    await nextTick()
    expect(tr.classList).toContain('current-row')
    let rows = vm.$el.querySelectorAll('.el-table__body-wrapper tbody tr')

    triggerEvent(rows[1], 'click', true, false)
    await nextTick()
    expect(tr.classList).not.toContain('current-row')
    expect(rows[1].classList).toContain('current-row')

    const ths = vm.$el.querySelectorAll('.el-table__header-wrapper thead th')
    triggerEvent(ths[3], 'click', true, false)

    await nextTick()
    rows = vm.$el.querySelectorAll('.el-table__body-wrapper tbody tr')

    expect(rows[1].classList).not.toContain('current-row')
    expect(rows[3].classList).toContain('current-row')
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
    await nextTick()
    let rows = vm.$el.querySelectorAll('.el-table__body-wrapper tbody tr')
    triggerEvent(rows[2], 'click', true, false)
    await nextTick()
    expect(rows[2].classList).toContain('current-row')
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

    await nextTick()
    rows = vm.$el.querySelectorAll('.el-table__body-wrapper tbody tr')
    expect(rows[3].classList).toContain('current-row')
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
    await nextTick()
    const rows = vm.$el.querySelectorAll('.el-table__body-wrapper tbody tr')
    triggerEvent(rows[1], 'click', true, false)
    await nextTick()
    expect(rows[1].classList).toContain('current-row')
    triggerEvent(rows[3], 'click', true, false)
    await nextTick()
    expect(rows[3].classList).toContain('current-row')
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
    await nextTick()
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
      await nextTick()
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
      await nextTick()
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
        await nextTick()
        const cell = row.find('td')
        expect(cell.text()).toMatch(`${++index}`)
        triggerIcon.trigger('click')
        await nextTick()
      }
    })
  })

  describe('tree', () => {
    let wrapper: VueWrapper<ComponentPublicInstance>
    afterEach(() => wrapper?.unmount())
    it('render tree structual data', async () => {
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
            testData: testData,
          }
        },
      })
      await nextTick()
      const rows = wrapper.findAll('.el-table__row')
      expect(rows.length).toEqual(7)
      const childRows = wrapper.findAll('.el-table__row--level-1')
      expect(childRows.length).toEqual(2)
      childRows.forEach(item => {
        expect(item.attributes('style')).toContain('display: none')
      })
      wrapper.find('.el-table__expand-icon').trigger('click')

      await nextTick()
      childRows.forEach(item => {
        expect(item.attributes('style')).toEqual('')
      })
    })

    it('load substree row data', async () => {
      wrapper = mount({
        components: {
          ElTable,
          ElTableColumn,
        },
        template: `
          <el-table :data="testData" row-key="release" lazy :load="load">
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
            testData: testData,
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
        },
      })
      await nextTick()
      const expandIcon = wrapper.find('.el-table__expand-icon')
      expandIcon.trigger('click')

      await nextTick()
      expect(expandIcon.classes()).toContain('el-table__expand-icon--expanded')
      expect(wrapper.findAll('.el-table__row').length).toEqual(8)
    })

    it('tree-props & default-expand-all & expand-change', async () => {
      const spy = jest.fn()
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
            testData: testData,
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
      await nextTick()
      const childRows = wrapper.findAll('.el-table__row--level-1')
      childRows.forEach(item => {
        expect(item.attributes('style')).toBeUndefined()
      })
      const expandIcon = wrapper.find('.el-table__expand-icon')
      expandIcon.trigger('click')
      await nextTick()
      expect(
        expandIcon.classes().includes('el-table__expand-icon--expanded'),
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
            testData: testData,
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
      await nextTick()
      const childRows = wrapper.findAll('.el-table__row--level-1')
      childRows.forEach(item => {
        expect(item.attributes('style')).toBeUndefined()
      })
      const expandIcon = childRows[0].find('.el-table__expand-icon')
      expandIcon.trigger('click')
      await nextTick()
      expect(expandIcon.classes()).toContain('el-table__expand-icon--expanded')
      ;(wrapper.vm as any).closeExpandRow()
      await nextTick()
      expect(expandIcon.classes()).not.toContain(
        'el-table__expand-icon--expanded',
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
      await nextTick()
      const firstCellSpanBeforeHide = wrapper.find('.el-table__body tr td span')
      expect(firstCellSpanBeforeHide.classes().includes('name')).toBeTruthy()
      wrapper.find('button').trigger('click')
      await nextTick()
      const firstCellSpanAfterHide = wrapper.find('.el-table__body tr td span')
      expect(firstCellSpanAfterHide.classes().includes('release')).toBeTruthy()
    })
  })
})
