import { nextTick } from 'vue'
import { triggerEvent } from '@element-plus/test-utils'
import ElTable from '../src/table.vue'
import ElTableColumn from '../src/table-column/index'
import { mount, getTestData } from './table-test-common'

describe('table column', () => {
  describe('column attributes', () => {
    const createTable = function (
      props1?,
      props2?,
      props3?,
      props4?,
      opts?,
      tableProps?
    ) {
      return mount(
        Object.assign(
          {
            components: {
              ElTable,
              ElTableColumn,
            },
            template: `
          <el-table :data="testData" ${tableProps || ''}>
            <el-table-column prop="name" ${props1 || ''} />
            <el-table-column prop="release" ${props2 || ''} />
            <el-table-column prop="director" ${props3 || ''} />
            <el-table-column prop="runtime" ${props4 || ''} />
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

    it('label', async () => {
      const wrapper = createTable('label="啊哈哈哈"', 'label="啊啦啦啦"')
      await nextTick()
      const ths = wrapper
        .findAll('thead th')
        .map((node) => node.text())
        .filter((o) => o)

      expect(ths).toEqual(['啊哈哈哈', '啊啦啦啦'])
      wrapper.unmount()
    })

    it('width', async () => {
      const wrapper = createTable('width="123px"', ':width="102"', 'width="39"')
      await nextTick()
      const ths = wrapper
        .findAll('.el-table__header-wrapper col')
        .map((node) => node.attributes('width'))
        .filter((o) => o)
      expect(ths).toContain('123')
      expect(ths).toContain('102')
      expect(ths).toContain('39')
      wrapper.unmount()
    })

    it('fixed', async () => {
      const wrapper = createTable(
        'fixed label="test1"',
        'fixed="right" label="test2"',
        'fixed="left" label="test3"'
      )
      await nextTick()
      expect(
        wrapper
          .findAll('.el-table__fixed th:not(.is-hidden)')
          .map((node) => node.text())
      ).toEqual(['test1', 'test3'])

      expect(
        wrapper
          .findAll('.el-table__fixed-right th:not(.is-hidden)')
          .map((node) => node.text())
      ).toEqual(['test2'])
      expect(
        wrapper.find('.el-table__body-wrapper').attributes('style')
      ).toBeFalsy()
      wrapper.unmount()
    })

    it('resizable', async () => {
      const wrapper = createTable(
        'resizable',
        ':resizable="false"',
        '',
        '',
        {},
        'border'
      )
      await nextTick()
      const firstCol = wrapper.find('thead th')
      triggerEvent(firstCol.element, 'mousemove')
      triggerEvent(firstCol.element, 'mousedown')
      wrapper.unmount()
    })

    it('formatter', async () => {
      const wrapper = createTable(':formatter="renderCell"', '', '', '', {
        methods: {
          renderCell(row) {
            return `[${row.name}]`
          },
        },
      })

      await nextTick()
      const cells = wrapper.findAll(
        '.el-table__body-wrapper tbody tr td:first-child'
      )
      expect(cells.map((n) => n.text())).toEqual(
        getTestData().map((o) => `[${o.name}]`)
      )
      wrapper.unmount()
    })

    it('show-overflow-tooltip', async () => {
      const wrapper = createTable('show-overflow-tooltip')
      await nextTick()
      expect(wrapper.findAll('.el-tooltip').length).toEqual(5)
      wrapper.unmount()
    })

    it('show-tooltip-when-overflow', async () => {
      // old version prop name
      const wrapper = createTable('show-tooltip-when-overflow')
      await nextTick()
      expect(wrapper.findAll('.el-tooltip').length).toEqual(5)
      wrapper.unmount()
    })

    it('align', async () => {
      const wrapper = createTable(
        'align="left"',
        'align="right"',
        'align="center"'
      )
      await nextTick()
      const len = getTestData().length + 1
      expect(wrapper.findAll('.is-left').length).toEqual(len)
      expect(wrapper.findAll('.is-right').length).toEqual(len)
      expect(wrapper.findAll('.is-center').length).toEqual(len)
      wrapper.unmount()
    })

    it('class-name', async () => {
      const wrapper = createTable(
        'class-name="column-1"',
        'class-name="column-2 column-class-a"',
        'class-name="column-class-a"'
      )
      await nextTick()
      const len = getTestData().length + 1
      expect(wrapper.findAll('.column-1').length).toEqual(len)
      expect(wrapper.findAll('.column-2').length).toEqual(len)
      expect(wrapper.findAll('.column-class-a').length).toEqual(len * 2)
      wrapper.unmount()
    })

    it('selectable === false & check selectAll status', async () => {
      const wrapper = mount({
        components: {
          ElTable,
          ElTableColumn,
        },
        template: `
          <el-table :data="testData" @selection-change="change">
            <el-table-column type="selection" :selectable="filterSelect" />
            <el-table-column prop="name" label="name" />
            <el-table-column prop="release" label="release" />
            <el-table-column prop="director" label="director" />
            <el-table-column prop="runtime" label="runtime" />
          </el-table>
        `,

        data() {
          return { selected: [], testData: getTestData() }
        },

        methods: {
          change(rows) {
            this.selected = rows
          },

          filterSelect() {
            return false
          },
        },
      })

      await nextTick()
      expect(wrapper.find('.el-checkbox').attributes('checked')).toBeFalsy()
      await nextTick()
      expect(wrapper.vm.selected.length).toEqual(0)
      wrapper.unmount()
    })

    describe('type', () => {
      const createTable = function (type) {
        return mount({
          components: {
            ElTable,
            ElTableColumn,
          },
          template: `
            <el-table :data="testData" @selection-change="change">
              <el-table-column type="${type}" />
              <el-table-column prop="name" label="name" />
              <el-table-column prop="release" label="release" />
              <el-table-column prop="director" label="director" />
              <el-table-column prop="runtime" label="runtime" />
            </el-table>
          `,

          created() {
            this.testData = getTestData()
          },

          data() {
            return { selected: [] }
          },

          methods: {
            change(rows) {
              this.selected = rows
            },
          },
        })
      }

      describe('= selection', () => {
        const wrapper = createTable('selection')

        it('render', async () => {
          await nextTick()
          expect(wrapper.findAll('.el-checkbox').length).toEqual(
            getTestData().length + 1
          )
        })

        it('select all', async () => {
          wrapper.find('.el-checkbox').trigger('click')
          await nextTick()
          expect(wrapper.vm.selected.length).toEqual(5)
          wrapper.unmount()
        })

        it('select one', async () => {
          const wrapper2 = createTable('selection')

          await nextTick()
          wrapper2.findAll('.el-checkbox')[1].trigger('click')

          await nextTick()
          expect(wrapper2.vm.selected.length).toEqual(1)
          expect(wrapper2.vm.selected[0].name).toEqual(getTestData()[0].name)
          wrapper2.unmount()
        })
      })

      describe('= index', () => {
        const wrapper = createTable('index')

        it('render', async () => {
          await nextTick()
          expect(
            wrapper
              .findAll('.el-table__body-wrapper tbody tr td:first-child')
              .map((node) => node.text())
          ).toEqual(['1', '2', '3', '4', '5'])
          wrapper.unmount()
        })
      })

      describe('= expand', () => {
        const createInstance = function (extra?) {
          extra = extra || ''
          return mount({
            components: {
              ElTableColumn,
              ElTable,
            },
            template: `
            <el-table row-key="id" :data="testData" @expand-change="handleExpand" ${extra}>
              <el-table-column type="expand">
                <template #default="props">
                  <div>{{props.row.name}}</div>
                </template>
              </el-table-column>
              <el-table-column prop="release" label="release" />
              <el-table-column prop="director" label="director" />
              <el-table-column prop="runtime" label="runtime" />
            </el-table>
          `,

            data() {
              return {
                expandCount: 0,
                expandRowKeys: [],
                testData: getTestData(),
              }
            },

            methods: {
              handleExpand() {
                this.expandCount++
              },
              refreshData() {
                this.testData = getTestData()
              },
            },
          })
        }

        it('works', async () => {
          const wrapper = createInstance()
          await nextTick()
          expect(wrapper.findAll('td.el-table__expand-column').length).toEqual(
            5
          )
          wrapper.unmount()
        })
      })
    })

    describe('sortable', () => {
      it('render', async () => {
        const wrapper = createTable('', '', '', 'sortable')
        await nextTick()
        expect(wrapper.findAll('.caret-wrapper').length).toEqual(1)
        wrapper.unmount()
      })

      it('sortable orders', async () => {
        const wrapper = createTable(
          '',
          '',
          '',
          "sortable :sort-orders=\"['descending', 'ascending']\"",
          {}
        )

        await nextTick()
        const elm = wrapper.find('.caret-wrapper')
        elm.trigger('click')

        await nextTick()
        const lastCells = wrapper.findAll(
          '.el-table__body-wrapper tbody tr td:last-child'
        )
        expect(lastCells.map((node) => node.text())).toEqual([
          '100',
          '95',
          '92',
          '92',
          '80',
        ])
        wrapper.unmount()
      })

      it('sortable method', async () => {
        const wrapper = createTable(
          'sortable :sort-method="sortMethod"',
          '',
          '',
          '',
          {
            methods: {
              sortMethod(a, b) {
                // sort method should return number
                if (a.runtime < b.runtime) {
                  return 1
                }
                if (a.runtime > b.runtime) {
                  return -1
                }
                return 0
              },
            },
          }
        )

        await nextTick()
        const elm = wrapper.find('.caret-wrapper')
        elm.trigger('click')

        await nextTick()
        const lastCells = wrapper.findAll(
          '.el-table__body-wrapper tbody tr td:last-child'
        )
        expect(lastCells.map((node) => node.text())).toEqual([
          '100',
          '95',
          '92',
          '92',
          '80',
        ])
        wrapper.unmount()
      })

      it('sortable by method', async () => {
        const wrapper = createTable('sortable :sort-by="sortBy"', '', '', '', {
          methods: {
            sortBy(a) {
              return -a.runtime
            },
          },
        })

        await nextTick()
        const elm = wrapper.find('.caret-wrapper')
        elm.trigger('click')

        await nextTick()
        const lastCells = wrapper.findAll(
          '.el-table__body-wrapper tbody tr td:last-child'
        )
        expect(lastCells.map((node) => node.text())).toEqual([
          '100',
          '95',
          '92',
          '92',
          '80',
        ])
        wrapper.unmount()
      })

      it('sortable by property', async () => {
        const wrapper = createTable(
          'sortable sort-by="runtime"',
          '',
          '',
          '',
          {}
        )

        await nextTick()
        const elm = wrapper.find('.caret-wrapper')
        elm.trigger('click')

        await nextTick()
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
        wrapper.unmount()
      })
    })

    describe('click sortable column', () => {
      const wrapper = createTable('', '', '', 'sortable')

      it('ascending', async () => {
        const elm = wrapper.find('.caret-wrapper')

        elm.trigger('click')
        await nextTick()
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
      })

      it('descending', async () => {
        const elm = wrapper.find('.caret-wrapper')

        elm.trigger('click')
        await nextTick()
        const lastCells = wrapper.findAll(
          '.el-table__body-wrapper tbody tr td:last-child'
        )
        expect(lastCells.map((node) => node.text())).toEqual([
          '100',
          '95',
          '92',
          '92',
          '80',
        ])
        wrapper.unmount()
      })
    })

    it('change column configuration', async () => {
      const wrapper = mount({
        components: {
          ElTable,
          ElTableColumn,
        },
        template: `
          <template>
            <button
              id="addBut"
              @click="
                () => {
                  cols.push('b')
                }
              "
              >+</button>
            <button
              id="delBut"
              @click="
                () => {
                  cols.pop()
                }
              "
              >-</button>
            <el-table :data="data">
              <el-table-column
                v-for="item of cols"
                :prop="item"
                :label="item"
                :key="item"
              ></el-table-column>
            </el-table>
          </template>
        `,

        data() {
          return { cols: ['a', 'v', 'b'], data: [{ a: 1, v: 2, b: 3 }] }
        },
      })

      await nextTick()
      expect(wrapper.findAll('.el-table__header-wrapper th').length).toEqual(3)
      const addBut = wrapper.find('#addBut')
      const delBut = wrapper.find('#delBut')
      addBut.trigger('click')
      await nextTick()
      expect(wrapper.findAll('.el-table__header-wrapper th').length).toEqual(4)
      addBut.trigger('click')
      await nextTick()
      expect(wrapper.findAll('.el-table__header-wrapper th').length).toEqual(5)
      delBut.trigger('click')
      await nextTick()
      expect(wrapper.findAll('.el-table__header-wrapper th').length).toEqual(4)
      delBut.trigger('click')
      await nextTick()
      expect(wrapper.findAll('.el-table__header-wrapper th').length).toEqual(3)
    })
  })

  describe('multi level column', () => {
    it('should works', async () => {
      const wrapper = mount({
        components: {
          ElTable,
          ElTableColumn,
        },
        template: `
          <el-table :data="testData">
            <el-table-column prop="name" />
            <el-table-column label="group">
              <el-table-column prop="release"/>
              <el-table-column prop="director"/>
            </el-table-column>
            <el-table-column prop="runtime"/>
          </el-table>
        `,

        created() {
          this.testData = null
        },
      })

      await nextTick()
      const trs = wrapper.findAll('.el-table__header tr')
      expect(trs.length).toEqual(2)
      const firstRowHeader = trs[0].findAll('th .cell').length
      const secondRowHeader = trs[1].findAll('th .cell').length
      expect(firstRowHeader).toEqual(3)
      expect(secondRowHeader).toEqual(2)

      expect(trs[0].find('th:first-child').attributes('rowspan')).toEqual('2')
      expect(trs[0].find('th:nth-child(2)').attributes('colspan')).toEqual('2')
      wrapper.unmount()
    })

    it('should works', async () => {
      const wrapper = mount({
        components: {
          ElTable,
          ElTableColumn,
        },
        template: `
          <el-table :data="testData">
            <el-table-column prop="name" />
            <el-table-column label="group">
              <el-table-column label="group's group">
                <el-table-column prop="release" />
                <el-table-column prop="runtime"/>
              </el-table-column>
              <el-table-column prop="director" />
            </el-table-column>
            <el-table-column prop="runtime"/>
          </el-table>
        `,

        created() {
          this.testData = null
        },
      })

      await nextTick()
      const trs = wrapper.findAll('.el-table__header tr')
      expect(trs.length).toEqual(3)
      const firstRowHeader = trs[0].findAll('th .cell').length
      const secondRowHeader = trs[1].findAll('th .cell').length
      const thirdRowHeader = trs[2].findAll('th .cell').length
      expect(firstRowHeader).toEqual(3)
      expect(secondRowHeader).toEqual(2)
      expect(thirdRowHeader).toEqual(2)

      expect(trs[0].find('th:first-child').attributes('rowspan')).toEqual('3')
      expect(trs[0].find('th:nth-child(2)').attributes('colspan')).toEqual('3')
      expect(trs[1].find('th:first-child').attributes('colspan')).toEqual('2')
      expect(trs[1].find('th:nth-child(2)').attributes('rowspan')).toEqual('2')

      wrapper.unmount()
    })

    it('should work in one column', async () => {
      const wrapper = mount({
        components: {
          ElTable,
          ElTableColumn,
        },
        template: `
          <el-table :data="testData">
            <el-table-column label="group">
              <el-table-column prop="release"/>
            </el-table-column>
          </el-table>
        `,

        created() {
          this.testData = null
        },
      })

      await nextTick()
      const trs = wrapper.findAll('.el-table__header tr')
      expect(trs.length).toEqual(2)
      const firstRowLength = trs[0].findAll('th .cell').length
      const secondRowLength = trs[1].findAll('th .cell').length
      expect(firstRowLength).toEqual(1)
      expect(secondRowLength).toEqual(1)

      expect(trs[0].find('th:first-child').attributes('rowspan')).toEqual('1')
      expect(trs[0].find('th:first-child').attributes('colspan')).toEqual('1')
      wrapper.unmount()
    })

    it('el-table-column should callback itself', async () => {
      const TableColumn = {
        name: 'TableColumn',
        components: {
          ElTableColumn,
        },
        props: {
          item: Object,
        },
        template: `
          <el-table-column :prop="item.prop" :label="item.label">
            <template v-if="item.children" #default>
              <table-column v-for="c in item.children" :key="c.prop" :item="c"/>
            </template>
          </el-table-column>
        `,
      }
      const App = {
        template: `
          <el-table :data="data">
            <table-column v-for="item in column" :key="item.prop" :item="item"/>
          </el-table>
        `,
        components: {
          ElTable,
          ElTableColumn,
          TableColumn,
        },
        setup() {
          const column = [
            { label: '日期', prop: 'date' },
            {
              label: '用户',
              prop: 'user',
              children: [
                { label: '姓名', prop: 'name' },
                { label: '地址', prop: 'address' },
              ],
            },
          ]
          const data = [
            {
              date: '2016-05-03',
              name: 'Tom',
              address: 'No. 189, Grove St, Los Angeles',
            },
            {
              date: '2016-05-02',
              name: 'Tom',
              address: 'No. 189, Grove St, Los Angeles',
            },
            {
              date: '2016-05-04',
              name: 'Tom',
              address: 'No. 189, Grove St, Los Angeles',
            },
            {
              date: '2016-05-01',
              name: 'Tom',
              address: 'No. 189, Grove St, Los Angeles',
            },
          ]
          return {
            column,
            data,
          }
        },
      }
      const wrapper = mount(App)
      await nextTick()
      expect(wrapper.find('.el-table__header-wrapper').text()).toMatch('姓名')
      expect(wrapper.find('.el-table__header-wrapper').text()).toMatch('地址')
    })

    it('should not rendered other components in hidden-columns', async () => {
      const Comp = {
        template: `
          <div class="other-component"></div>
        `,
      }
      const wrapper = mount({
        components: {
          ElTableColumn,
          ElTable,
          Comp,
        },
        template: `
          <el-table :data="testData">
            <el-table-column prop="name">
              <comp></comp>
            </el-table-column>
          </el-table>
        `,
        data() {
          return {
            testData: getTestData(),
          }
        },
      })
      await nextTick()
      expect(
        wrapper.find('.hidden-columns').find('.other-component').exists()
      ).toBeFalsy()
    })
  })

  describe('dynamic column attribtes', () => {
    it('label', async () => {
      const wrapper = mount({
        components: {
          ElTable,
          ElTableColumn,
        },
        template: `
          <el-table :data="testData">
            <el-table-column prop="name" :label="label"/>
            <el-table-column prop="release" />
            <el-table-column prop="director" />
            <el-table-column prop="runtime" />
          </el-table>
        `,
        data() {
          return {
            label: 'name',
          }
        },

        created() {
          this.testData = getTestData()
        },
      })

      await nextTick()
      expect(wrapper.find('.el-table__header th .cell').text()).toEqual('name')
      wrapper.vm.label = 'NAME'
      wrapper.vm.$nextTick(() => {
        expect(wrapper.find('.el-table__header th .cell').text()).toEqual(
          'NAME'
        )
        wrapper.unmount()
      })
    })

    it('align', async () => {
      const wrapper = mount({
        components: {
          ElTable,
          ElTableColumn,
        },
        template: `
          <el-table :data="testData">
            <el-table-column prop="name" :align="align"/>
          </el-table>
        `,

        data() {
          return {
            align: 'left',
          }
        },

        created() {
          this.testData = getTestData()
        },
      })

      await nextTick()
      expect(wrapper.findAll('.el-table__body td.is-right').length).toEqual(0)
      wrapper.vm.align = 'right'
      wrapper.vm.$nextTick(() => {
        expect(
          wrapper.findAll('.el-table__body td.is-right').length > 0
        ).toBeTruthy()
        wrapper.unmount()
      })
    })
    it('header-align', async () => {
      const wrapper = mount({
        components: {
          ElTable,
          ElTableColumn,
        },
        template: `
          <el-table :data="testData">
            <el-table-column prop="name" :align="align" :header-align="headerAlign"/>
          </el-table>
        `,

        data() {
          return {
            align: 'left',
            headerAlign: null,
          }
        },

        created() {
          this.testData = getTestData()
        },
      })
      await nextTick()
      expect(
        wrapper.findAll('.el-table__header th.is-left').length
      ).toBeGreaterThanOrEqual(0)
      expect(wrapper.findAll('.el-table__header th.is-center').length).toEqual(
        0
      )
      expect(wrapper.findAll('.el-table__header th.is-right').length).toEqual(0)
      wrapper.vm.align = 'right'
      await nextTick()
      expect(wrapper.findAll('.el-table__header th.is-left').length).toEqual(0)
      expect(wrapper.findAll('.el-table__header th.is-center').length).toEqual(
        0
      )
      expect(
        wrapper.findAll('.el-table__header th.is-right').length
      ).toBeGreaterThanOrEqual(0)
      wrapper.vm.headerAlign = 'center'
      await nextTick()
      expect(wrapper.findAll('.el-table__header th.is-left').length).toEqual(0)
      expect(
        wrapper.findAll('.el-table__header th.is-center').length
      ).toBeGreaterThanOrEqual(0)
      expect(wrapper.findAll('.el-table__header th.is-right').length).toEqual(0)
      wrapper.vm.headerAlign = null
      await nextTick()
      expect(wrapper.findAll('.el-table__header th.is-left').length).toEqual(0)
      expect(wrapper.findAll('.el-table__header th.is-center').length).toEqual(
        0
      )
      expect(
        wrapper.findAll('.el-table__header th.is-right').length
      ).toBeGreaterThanOrEqual(0)
      wrapper.unmount()
    })

    it('width', async () => {
      const wrapper = mount({
        components: {
          ElTable,
          ElTableColumn,
        },
        template: `
          <el-table :data="testData" :fit="false">
            <el-table-column prop="name" :width="width"/>
          </el-table>
        `,

        data() {
          return {
            width: 100,
          }
        },

        created() {
          this.testData = getTestData()
        },
      })

      await nextTick()
      expect(wrapper.find('.el-table__body col').attributes('width')).toEqual(
        '100'
      )

      wrapper.vm.width = 200
      await nextTick()
      expect(wrapper.find('.el-table__body col').attributes('width')).toEqual(
        '200'
      )

      wrapper.vm.width = '300px'
      await nextTick()
      expect(wrapper.find('.el-table__body col').attributes('width')).toEqual(
        '300'
      )
      wrapper.unmount()
    })

    it('min-width', async () => {
      const wrapper = mount({
        components: {
          ElTable,
          ElTableColumn,
        },
        template: `
          <el-table :data="testData" :fit="false">
            <el-table-column prop="name" :min-width="width"/>
          </el-table>
        `,

        data() {
          return {
            width: 100,
          }
        },

        created() {
          this.testData = getTestData()
        },
      })

      await nextTick()
      expect(wrapper.find('.el-table__body col').attributes('width')).toEqual(
        '100'
      )

      wrapper.vm.width = 200
      await nextTick()
      expect(wrapper.find('.el-table__body col').attributes('width')).toEqual(
        '200'
      )

      wrapper.vm.width = '300px'
      await nextTick()
      expect(wrapper.find('.el-table__body col').attributes('width')).toEqual(
        '300'
      )
      wrapper.unmount()
    })

    it('fixed', async () => {
      const wrapper = mount({
        components: {
          ElTable,
          ElTableColumn,
        },
        template: `
          <el-table :data="testData">
            <el-table-column :fixed="fixed" />
            <el-table-column prop="release" />
            <el-table-column prop="director" />
            <el-table-column prop="runtime" />
          </el-table>
        `,

        data() {
          return {
            fixed: false,
          }
        },

        created() {
          this.testData = getTestData()
        },
      })

      await nextTick()
      expect(Object.keys(wrapper.find('.el-table__fixed')).length).toEqual(0)
      wrapper.vm.fixed = true
      await nextTick()
      expect(
        Object.keys(wrapper.find('.el-table__fixed')).length
      ).toBeGreaterThan(0)
      wrapper.unmount()
    })

    it('prop', async () => {
      const wrapper = mount({
        components: {
          ElTable,
          ElTableColumn,
        },
        template: `
          <el-table :data="testData">
            <el-table-column :prop="prop" />
            <el-table-column prop="release" />
            <el-table-column prop="director" />
            <el-table-column prop="runtime" />
          </el-table>
        `,

        data() {
          return {
            prop: 'name',
          }
        },

        created() {
          this.testData = getTestData()
        },
      })

      await nextTick()
      let firstColumnContent = wrapper.find('.el-table__body td .cell').text()
      let secondColumnContent = wrapper
        .find('.el-table__body td:nth-child(2) .cell')
        .text()
      expect(firstColumnContent).not.toEqual(secondColumnContent)
      wrapper.vm.prop = 'release'
      await nextTick()
      firstColumnContent = wrapper.find('.el-table__body td .cell').text()
      secondColumnContent = wrapper
        .find('.el-table__body td:nth-child(2) .cell')
        .text()
      expect(firstColumnContent).toEqual(secondColumnContent)
      wrapper.unmount()
    })
  })

  describe('tree table', () => {
    const getTableData = () => {
      return [
        {
          id: 1,
          date: '2016-05-02',
          name: 'Wangxiaohu',
          address: '1518 Jinshajiang Road, Putuo District, Shanghai',
          index: 1,
        },
        {
          id: 2,
          date: '2016-05-04',
          name: 'Wangxiaohu',
          address: '1518 Jinshajiang Road, Putuo District, Shanghai',
          index: 2,
        },
        {
          id: 3,
          date: '2016-05-01',
          name: 'Wangxiaohu',
          address: '1518 Jinshajiang Road, Putuo District, Shanghai',
          index: 3,
          children: [
            {
              id: 31,
              date: '2016-05-01',
              name: 'Wangxiaohu',
              address: '1518 Jinshajiang Road, Putuo District, Shanghai',
              index: 4,
              children: [
                {
                  id: 311,
                  date: '2016-05-01',
                  name: 'Wangxiaohu',
                  address: '1518 Jinshajiang Road, Putuo District, Shanghai',
                  index: 5,
                },
                {
                  id: 312,
                  date: '2016-05-01',
                  name: 'Wangxiaohu',
                  address: '1518 Jinshajiang Road, Putuo District, Shanghai',
                  index: 6,
                },
                {
                  id: 313,
                  date: '2016-05-01',
                  name: 'Wangxiaohu',
                  address: '1518 Jinshajiang Road, Putuo District, Shanghai',
                  index: 7,
                  disabled: true,
                },
              ],
            },
            {
              id: 32,
              date: '2016-05-01',
              name: 'Wangxiaohu',
              address: '1518 Jinshajiang Road, Putuo District, Shanghai',
              index: 8,
            },
          ],
        },
        {
          id: 4,
          date: '2016-05-03',
          name: 'Wangxiaohu',
          address: '1518 Jinshajiang Road, Putuo District, Shanghai',
          index: 9,
        },
      ]
    }

    const createTable = function (methods) {
      return mount(
        Object.assign({
          components: {
            ElTable,
            ElTableColumn,
          },
          template: `
              <el-table
                ref="table"
                :data="testData"
                row-key="id"
                border
                default-expand-all
                :tree-props="{children: 'children', hasChildren: 'hasChildren'}"
              >
                <el-table-column type="index"></el-table-column>
                <el-table-column type="selection" :selectable="selectable"></el-table-column>
                <el-table-column prop="id" label="id"></el-table-column>
                <el-table-column
                  prop="date"
                  label="Date"
                  sortable
                  width="180">
                </el-table-column>
                <el-table-column
                  prop="name"
                  label="Name"
                  sortable
                  width="180">
                </el-table-column>
                <el-table-column
                  prop="address"
                  label="Address">
                </el-table-column>
              </el-table>
          `,
          methods: {
            selectable(row) {
              return !row.disabled
            },
            ...methods,
          },
          data() {
            return {
              testData: getTableData(),
            }
          },
        })
      )
    }

    it('selectable index parameter should be correct', async () => {
      const result = []
      const wrapper = createTable({
        selectable(row, index) {
          result.push(row.index - 1 === index)
          return !row.disabled
        },
      })
      await nextTick()
      wrapper.vm.$refs.table.toggleAllSelection()
      expect(result.every((item) => item)).toBeTruthy()
      wrapper.unmount()
    })
  })
})
