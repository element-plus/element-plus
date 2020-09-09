import { mount, VueWrapper } from '@vue/test-utils'
import { ComponentPublicInstance } from 'vue'
import ElTable from '../src/table.vue'
import ElTableColumn from '../src/table-column/index'

const DELAY = 10
const testDataArr = []
const toArray = function (obj) {
  return [].slice.call(obj)
}
const triggerEvent = function (elm, name, ...opts) {
  let eventName

  if (/^mouse|click/.test(name)) {
    eventName = 'MouseEvents'
  } else if (/^key/.test(name)) {
    eventName = 'KeyboardEvent'
  } else {
    eventName = 'HTMLEvents'
  }
  const evt = document.createEvent(eventName)

  evt.initEvent(name, ...opts)
  elm.dispatchEvent
    ? elm.dispatchEvent(evt)
    : elm.fireEvent('on' + name, evt)

  return elm
}
/**
 * 等待 ms 毫秒，返回 Promise
 * @param {Number} ms
 */
const wait = function (ms = 50) {
  return new Promise(resolve => setTimeout(() => resolve(), ms))
}
/**
 * 等待一个 Tick，代替 Vue.nextTick，返回 Promise
 */
const waitImmediate = () => wait(0)
const getTestData = function () {
  return [
    { id: 1, name: 'Toy Story', release: '1995-11-22', director: 'John Lasseter', runtime: 80 },
    { id: 2, name: 'A Bug\'s Life', release: '1998-11-25', director: 'John Lasseter', runtime: 95 },
    { id: 3, name: 'Toy Story 2', release: '1999-11-24', director: 'John Lasseter', runtime: 92 },
    { id: 4, name: 'Monsters, Inc.', release: '2001-11-2', director: 'Peter Docter', runtime: 92 },
    { id: 5, name: 'Finding Nemo', release: '2003-5-30', director: 'Andrew Stanton', runtime: 100 },
  ]
}

getTestData().forEach(cur => {
  Object.keys(cur).forEach(prop => {
    testDataArr.push(cur[prop].toString())
  })
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
    it('head', done => {
      setTimeout(() => {
        const ths = toArray(wrapper.findAll('thead th'))
        expect(ths.map(node => node.text()).filter(o => o))
          .toEqual(['片名', '发行日期', '导演', '时长（分）'])
        done()
      }, DELAY)
    })

    it('row length', () => {
      expect(wrapper.findAll('.el-table__body-wrapper tbody tr').length).toEqual(getTestData().length)
    })

    it('row data', () => {
      const cells = toArray(wrapper.findAll('td .cell'))
        .map(node => node.text())

      expect(cells).toEqual(testDataArr)
      wrapper.unmount()
    })
  })
  describe('attributes', () => {
    const createTable = function (props, opts?) {
      return mount(Object.assign({
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
      }, opts))
    }

    it('height', done => {
      const wrapper = createTable('height="134"')
      setTimeout(() => {
        expect(wrapper.attributes('style')).toContain('height: 134px')
        wrapper.unmount()
        done()
      }, DELAY)
    })

    it('height as string', done => {
      const wrapper = createTable('height="100px"')
      setTimeout(() => {
        expect(wrapper.attributes('style')).toContain('height: 100px')
        wrapper.unmount()
        done()
      }, DELAY)
    })

    it('maxHeight', done => {
      const wrapper = createTable('max-height="134"')
      setTimeout(() => {
        expect(wrapper.attributes('style')).toContain('max-height: 134px')
        wrapper.unmount()
        done()
      }, DELAY)
    })

    it('stripe', done => {
      const wrapper = createTable('stripe')
      setTimeout(() => {
        expect(wrapper.classes().includes('el-table--striped')).toBeTruthy
        wrapper.unmount()
        done()
      }, DELAY)
    })

    it('border', done => {
      const wrapper = createTable('border')
      setTimeout(() => {
        expect(wrapper.classes().includes('el-table--border')).toBeTruthy
        wrapper.unmount()
        done()
      }, DELAY)
    })

    it('fit', done => {
      const wrapper = createTable(':fit="false"')
      setTimeout(() => {
        expect(wrapper.classes().includes('el-table--fit')).toBeFalsy
        wrapper.unmount()
        done()
      }, DELAY)
    })

    it('show-header', done => {
      const wrapper = createTable(':show-header="false"')
      setTimeout(() => {
        expect(wrapper.findAll('.el-table__header-wrapper').length).toEqual(0)
        wrapper.unmount()
        done()
      }, DELAY)
    })

    it('tableRowClassName', done => {
      const wrapper = createTable(':row-class-name="tableRowClassName"', {
        methods: {
          tableRowClassName({ row, rowIndex }) {
            if (rowIndex === 1) {
              return 'info-row'
            } else if (rowIndex === 3) {
              return 'positive-row'
            }

            return ''
          },
        },
      })

      setTimeout(() => {
        expect(wrapper.findAll('.info-row').length).toEqual(1)
        expect(wrapper.findAll('.positive-row').length).toEqual(1)
        wrapper.unmount()
        done()
      }, DELAY)
    })

    it('tableRowStyle[Object]', done => {
      const wrapper = createTable(':row-style="{ height: \'60px\' }"', {})

      setTimeout(() => {
        expect(wrapper.find('.el-table__body tr').attributes('style')).toContain('height: 60px')
        wrapper.unmount()
        done()
      }, DELAY)
    })

    it('tableRowStyle[Function]', done => {
      const wrapper = createTable(':row-style="tableRowStyle"', {
        methods: {
          tableRowStyle({ row, rowIndex }) {
            if (rowIndex === 1) {
              return { height: '60px', display: 'none' }
            }

            return null
          },
        },
      })

      setTimeout(() => {
        const child1 = wrapper.find('.el-table__body tr:nth-child(1)')
        const child2 = wrapper.find('.el-table__body tr:nth-child(2)')
        expect(child1.attributes('style')).toBeUndefined
        expect(child2.attributes('style')).toContain('height: 60px')
        expect(child2.attributes('style')).toContain('display: none')
        wrapper.unmount()
        done()
      }, DELAY)
    })

    it('current-row-key', done => {
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
      setTimeout(() => {
        wrapper.vm.currentRowKey = 1
        const tr = wrapper.find('.el-table__body-wrapper tbody tr')
        setTimeout(() => {
          expect(tr.classes().includes('current-row')).toBeTruthy
          wrapper.vm.currentRowKey = 2

          const rows = wrapper.findAll('.el-table__body-wrapper tbody tr')
          setTimeout(() => {
            expect(tr.classes().includes('current-row')).toBeFalsy
            expect(rows[1].classes().includes('current-row')).toBeTruthy
            wrapper.unmount()
            done()
          }, DELAY)
        }, DELAY)
      }, DELAY)
    })
  })
  describe('filter', () => {
    let wrapper: VueWrapper<ComponentPublicInstance>

    beforeEach(done => {
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

      setTimeout(done, DELAY)
    })

    afterEach(() => wrapper.unmount())

    it('render', () => {
      expect(wrapper.find('.el-table__column-filter-trigger')).not.toBeUndefined
    })

    it('click dropdown', done => {
      const btn = wrapper.find('.el-table__column-filter-trigger')
      btn.trigger('click')
      setTimeout(() => {
        const filter = document.body.querySelector('.el-table-filter')
        expect(filter).not.toBeUndefined
        filter.parentNode.removeChild(filter)
        done()
      }, 100)
    })

    it('click filter', done => {
      const btn = wrapper.find('.el-table__column-filter-trigger')

      btn.trigger('click')
      setTimeout(() => {
        const filter = document.body.querySelector('.el-table-filter')

        triggerEvent(filter.querySelector('.el-checkbox'), 'click', true, false)
        // confrim button
        setTimeout(() => {
          triggerEvent(filter.querySelector('.el-table-filter__bottom button'), 'click', true, false)
          setTimeout(() => {
            expect((wrapper.vm as ComponentPublicInstance & { filters: any; }).filters['director']).toEqual(['John Lasseter'])
            expect(wrapper.findAll('.el-table__body-wrapper tbody tr').length).toEqual(3)
            filter.parentNode.removeChild(filter)
            done()
          }, DELAY)
        }, 100)
      }, 100)
    })

    it('click reset', done => {
      const btn = wrapper.find('.el-table__column-filter-trigger')
      btn.trigger('click')
      setTimeout(() => {
        const filter = document.body.querySelector('.el-table-filter')

        triggerEvent(filter.querySelector('.el-checkbox'), 'click', true, false)
        setTimeout(() => {
          triggerEvent(filter.querySelectorAll('.el-table-filter__bottom button')[1], 'click', true, false)
          setTimeout(() => {
            expect((wrapper.vm as ComponentPublicInstance & { filters: any; }).filters['director']).toEqual([])
            expect(filter.querySelector('.el-table-filter__bottom button').classList.contains('is-disabled')).toBeTruthy
            filter.parentNode.removeChild(filter)
            wrapper.unmount()
            done()
          }, DELAY)
        }, 100)
      }, 100)
    })
  })
  describe('events', () => {
    const createTable = function (prop = '', opts?) {
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

    it('select', done => {
      const wrapper = createTable('select')

      setTimeout(() => {
        wrapper.findAll('.el-checkbox')[1].trigger('click')
        expect(wrapper.vm.result.length).toEqual(2)
        expect(wrapper.vm.result[1]).toHaveProperty('name')
        expect(wrapper.vm.result[1]['name']).toEqual(getTestData()[0].name)
        wrapper.unmount()
        done()
      }, DELAY)
    })

    it('selection-change', done => {
      const wrapper = createTable('selection-change')
      setTimeout(() => {
        wrapper.findAll('.el-checkbox')[1].trigger('click')
        expect(wrapper.vm.result.length).toEqual(1)
        wrapper.unmount()
        done()
      }, DELAY)
    })

    it('cell-mouse-enter', done => {
      const wrapper = createTable('cell-mouse-enter')

      setTimeout(() => {
        const cell = wrapper.findAll('.el-table__body .cell')[2] // first row
        triggerEvent(cell.element.parentNode, 'mouseenter')
        expect(wrapper.vm.result.length).toEqual(4) // row, column, cell, event
        expect(wrapper.vm.result[0]).toHaveProperty('name')
        expect(wrapper.vm.result[0]['name']).toEqual(getTestData()[0].name)
        wrapper.unmount()
        done()
      }, DELAY)
    })

    it('cell-mouse-leave', done => {
      const wrapper = createTable('cell-mouse-leave')

      setTimeout(() => {
        const cell = wrapper.findAll('.el-table__body .cell')[7] // second row
        const cell2 = wrapper.findAll('.el-table__body .cell')[2] // first row

        triggerEvent(cell2.element.parentNode, 'mouseenter')
        triggerEvent(cell.element.parentNode, 'mouseleave')
        expect(wrapper.vm.result.length).toEqual(4) // row, column, cell, event
        expect(wrapper.vm.result[0]).toHaveProperty('name')
        expect(wrapper.vm.result[0]['name']).toEqual(getTestData()[0].name)
        wrapper.unmount()
        done()
      }, DELAY)
    })

    it('row-click', done => {
      const wrapper = createTable('row-click')

      setTimeout(() => {
        const cell = wrapper.findAll('.el-table__body .cell')[2] // first row

        triggerEvent(cell.element.parentNode.parentNode, 'click')
        expect(wrapper.vm.result.length).toEqual(3) // row, event, column
        expect(wrapper.vm.result[0]).toHaveProperty('name')
        expect(wrapper.vm.result[0]['name']).toEqual(getTestData()[0].name)
        wrapper.unmount()
        done()
      }, DELAY)
    })

    it('row-dblclick', done => {
      const wrapper = createTable('row-dblclick')

      setTimeout(() => {
        const cell = wrapper.findAll('.el-table__body .cell')[2] // first row

        triggerEvent(cell.element.parentNode.parentNode, 'dblclick')
        expect(wrapper.vm.result.length).toEqual(3) // row, event, column
        expect(wrapper.vm.result[0]).toHaveProperty('name')
        expect(wrapper.vm.result[0]['name']).toEqual(getTestData()[0].name)
        wrapper.unmount()
        done()
      }, DELAY)
    })

    it('header-click', done => {
      const wrapper = createTable('header-click')

      setTimeout(() => {
        const cell = wrapper.findAll('.el-table__header th')[1] // header[prop='name']
        cell.trigger('click')
        expect(wrapper.vm.result.length).toEqual(2) // column, event
        expect(wrapper.vm.result[0]['name']).toBeUndefined
        wrapper.unmount()
        done()
      }, DELAY)
    })
  })
  describe('column attributes', () => {
    const createTable = function (props1?, props2?, props3?, props4?, opts?, tableProps?) {
      return mount(Object.assign({
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
      }, opts))
    }

    it('label', done => {
      const wrapper = createTable('label="啊哈哈哈"', 'label="啊啦啦啦"')
      setTimeout(() => {
        const ths = toArray(wrapper.findAll('thead th'))
          .map(node => node.text()).filter(o => o)

        expect(ths).toEqual(['啊哈哈哈', '啊啦啦啦'])
        wrapper.unmount()
        done()
      }, DELAY)
    })

    it('width', done => {
      const wrapper = createTable('width="123px"', ':width="102"', 'width="39"')
      setTimeout(() => {
        const ths = toArray(wrapper.findAll('.el-table__header-wrapper col'))
          .map(node => node.width).filter(o => o)
        expect(ths.includes('123')).toBeTruthy
        expect(ths.includes('102')).toBeTruthy
        expect(ths.includes('39')).toBeTruthy
        wrapper.unmount()
        done()
      }, DELAY)
    })

    it('fixed', done => {
      const wrapper = createTable(
        'fixed label="test1"',
        'fixed="right" label="test2"',
        'fixed="left" label="test3"')
      setTimeout(() => {
        expect(toArray(wrapper.findAll('.el-table__fixed th:not(.is-hidden)'))
          .map(node => node.text()))
          .toEqual(['test1', 'test3'])

        expect(toArray(wrapper.findAll('.el-table__fixed-right th:not(.is-hidden)'))
          .map(node => node.text()))
          .toEqual(['test2'])
        expect(wrapper.find('.el-table__body-wrapper').attributes('style')).toBeFalsy
        wrapper.unmount()
        done()
      }, DELAY)
    })

    it('resizable', done => {
      const wrapper = createTable(
        'resizable',
        ':resizable="false"',
        '',
        '',
        {},
        'border')

      setTimeout(() => {
        const firstCol = wrapper.find('thead th')
        triggerEvent(firstCol.element, 'mousemove')
        triggerEvent(firstCol.element, 'mousedown')
        wrapper.unmount()
        done()
      }, DELAY)
    })

    it('formatter', done => {
      const wrapper = createTable(
        ':formatter="renderCell"', '', '', '', {
          methods: {
            renderCell(row, column) {
              return `[${row.name}]`
            },
          },
        })

      setTimeout(() => {
        const cells = toArray(wrapper.findAll('.el-table__body-wrapper tbody tr td:first-child'))
        expect(cells.map(n => n.text())).toEqual(getTestData().map(o => `[${o.name}]`))
        wrapper.unmount()
        done()
      }, DELAY)
    })

    it('show-overflow-tooltip', done => {
      const wrapper = createTable('show-overflow-tooltip')
      setTimeout(() => {
        expect(wrapper.findAll('.el-tooltip').length).toEqual(5)
        wrapper.unmount()
        done()
      }, DELAY)
    })

    it('show-tooltip-when-overflow', done => { // old version prop name
      const wrapper = createTable('show-tooltip-when-overflow')
      setTimeout(() => {
        expect(wrapper.findAll('.el-tooltip').length).toEqual(5)
        wrapper.unmount()
        done()
      }, DELAY)
    })

    it('align', done => {
      const wrapper = createTable('align="left"', 'align="right"', 'align="center"')
      setTimeout(() => {
        const len = getTestData().length + 1
        expect(wrapper.findAll('.is-left').length).toEqual(len)
        expect(wrapper.findAll('.is-right').length).toEqual(len)
        expect(wrapper.findAll('.is-center').length).toEqual(len)
        wrapper.unmount()
        done()
      }, DELAY)
    })

    it('class-name', done => {
      const wrapper = createTable('class-name="column-1"', 'class-name="column-2 column-class-a"', 'class-name="column-class-a"')
      setTimeout(() => {
        const len = getTestData().length + 1
        expect(wrapper.findAll('.column-1').length).toEqual(len)
        expect(wrapper.findAll('.column-2').length).toEqual(len)
        expect(wrapper.findAll('.column-class-a').length).toEqual(len * 2)
        wrapper.unmount()
        done()
      }, DELAY)
    })

    it('selectable === false & check selectAll status', done => {
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

          filterSelect(row, index) {
            return false
          },
        },
      })

      setTimeout(() => {
        expect(wrapper.find('.el-checkbox').attributes('checked')).toBeFalsy
        setTimeout(() => {
          expect(wrapper.vm.selected.length).toEqual(0)
          wrapper.unmount()
          done()
        }, DELAY)
      }, DELAY)
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

        it('render', done => {
          setTimeout(() => {
            expect(wrapper.findAll('.el-checkbox').length).toEqual(getTestData().length + 1)
            done()
          }, DELAY)
        })

        it('cancel all', done => {
          wrapper.find('.el-checkbox').trigger('click')

          setTimeout(() => {
            expect(wrapper.vm.selected.length).toEqual(0)
            wrapper.unmount()
            done()
          }, DELAY)
        })

        it('select one', done => {
          const wrapper2 = createTable('selection')

          setTimeout(() => {
            wrapper2.findAll('.el-checkbox')[1].trigger('click')

            setTimeout(() => {
              expect(wrapper2.vm.selected.length).toEqual(1)
              expect(wrapper2.vm.selected[0].name).toEqual(getTestData()[0].name)
              wrapper2.unmount()
              done()
            }, DELAY)
          }, DELAY)
        })
      })

      describe('= index', () => {
        const wrapper = createTable('index')

        it('render', done => {
          setTimeout(() => {
            expect(toArray(wrapper.findAll('.el-table__body-wrapper tbody tr td:first-child'))
              .map(node => node.text())).toEqual(['1', '2', '3', '4', '5'])
            wrapper.unmount()
            done()
          }, DELAY)
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
                <template slot-scope="props">
                  <div>{{props.row.name}}</div>
                </template>
              </el-table-column>
              <el-table-column prop="release" label="release" />
              <el-table-column prop="director" label="director" />
              <el-table-column prop="runtime" label="runtime" />
            </el-table>
          `,

            data() {
              return { expandCount: 0, expandRowKeys: [], testData: getTestData() }
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

        it('works', done => {
          const wrapper = createInstance()
          setTimeout(() => {
            expect(wrapper.findAll('td.el-table__expand-column').length).toEqual(5)
            wrapper.unmount()
            done()
          }, DELAY)
        })
      })
    })

    describe('sortable', () => {

      it('render', done => {
        const wrapper = createTable('', '', '', 'sortable')
        setTimeout(() => {
          expect(wrapper.findAll('.caret-wrapper').length).toEqual(1)
          wrapper.unmount()
          done()
        }, DELAY)
      })

      it('sortable orders', done => {
        const wrapper = createTable('', '', '', 'sortable :sort-orders="[\'descending\', \'ascending\']"', {})

        setTimeout(() => {
          const elm = wrapper.find('.caret-wrapper')
          elm.trigger('click')

          setTimeout(() => {
            const lastCells = wrapper.findAll('.el-table__body-wrapper tbody tr td:last-child')
            expect(toArray(lastCells).map(node => node.text())).toEqual(['100', '95', '92', '92', '80'])
            wrapper.unmount()
            done()
          }, DELAY)
        }, DELAY)
      })

      it('sortable method', done => {
        const wrapper = createTable(
          'sortable :sort-method="sortMethod"', '', '', '', {
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
          })

        setTimeout(() => {
          const elm = wrapper.find('.caret-wrapper')
          elm.trigger('click')

          setTimeout(() => {
            const lastCells = wrapper.findAll('.el-table__body-wrapper tbody tr td:last-child')
            expect(toArray(lastCells).map(node => node.text())).toEqual(['100', '95', '92', '92', '80'])
            wrapper.unmount()
            done()
          }, DELAY)
        }, DELAY)
      })

      it('sortable by method', done => {
        const wrapper = createTable(
          'sortable :sort-by="sortBy"', '', '', '', {
            methods: {
              sortBy(a) {
                return -a.runtime
              },
            },
          })

        setTimeout(() => {
          const elm = wrapper.find('.caret-wrapper')
          elm.trigger('click')

          setTimeout(() => {
            const lastCells = wrapper.findAll('.el-table__body-wrapper tbody tr td:last-child')
            expect(toArray(lastCells).map(node => node.text())).toEqual(['100', '95', '92', '92', '80'])
            wrapper.unmount()
            done()
          }, DELAY)
        }, DELAY)
      })

      it('sortable by property', done => {
        const wrapper = createTable(
          'sortable sort-by="runtime"', '', '', '', {})

        setTimeout(() => {
          const elm = wrapper.find('.caret-wrapper')
          elm.trigger('click')

          setTimeout(() => {
            const lastCells = wrapper.findAll('.el-table__body-wrapper tbody tr td:last-child')
            expect(toArray(lastCells).map(node => node.text())).toEqual(['80', '92', '92', '95', '100'])
            wrapper.unmount()
            done()
          }, DELAY)
        }, DELAY)
      })
    })

    describe('click sortable column', () => {
      const wrapper = createTable('', '', '', 'sortable')

      it('ascending', done => {
        const elm = wrapper.find('.caret-wrapper')

        elm.trigger('click')
        setTimeout(() => {
          const lastCells = wrapper.findAll('.el-table__body-wrapper tbody tr td:last-child')
          expect(toArray(lastCells).map(node => node.text()))
            .toEqual(['80', '92', '92', '95', '100'])
          done()
        }, DELAY)
      })

      it('descending', done => {
        const elm = wrapper.find('.caret-wrapper')

        elm.trigger('click')
        setTimeout(() => {
          const lastCells = wrapper.findAll('.el-table__body-wrapper tbody tr td:last-child')
          expect(toArray(lastCells).map(node => node.text()))
            .toEqual(['100', '95', '92', '92', '80'])
          wrapper.unmount()
          done()
        }, DELAY)
      })
    })
  })
  describe('summary row', () => {
    it('should render', done => {
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

      setTimeout(() => {
        const footer = wrapper.find('.el-table__footer')
        expect(footer).not.toBeUndefined
        const cells = toArray(footer.findAll('.cell'))
        expect(cells[cells.length - 1].text()).toEqual('459')
        wrapper.unmount()
        done()
      }, DELAY)
    })

    it('custom sum text', done => {
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

      setTimeout(() => {
        const cells = toArray(wrapper.findAll('.el-table__footer .cell'))
        expect(cells[0].text()).toEqual('Time')
        wrapper.unmount()
        done()
      }, DELAY)
    })

    it('custom summary method', done => {
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
                result.push(releaseYears.reduce((prev, curr) => {
                  return prev + curr
                }))
              } else {
                result.push('')
              }
            })
            return result
          },
        },
      })

      setTimeout(() => {
        const cells = toArray(wrapper.findAll('.el-table__footer .cell'))
        expect(cells[1].text()).toEqual('9996')
        wrapper.unmount()
        done()
      }, DELAY)
    })
  })
  describe('dynamic column attribtes', () => {
    const DELAY = 50

    it('label', done => {
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

      setTimeout(() => {
        expect(wrapper.find('.el-table__header th .cell').text()).toEqual('name')
        wrapper.vm.label = 'NAME'
        wrapper.vm.$nextTick(() => {
          expect(wrapper.find('.el-table__header th .cell').text()).toEqual('NAME')
          wrapper.unmount()
          done()
        })
      }, DELAY)
    })

    it('align', done => {
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

      setTimeout(() => {
        expect(wrapper.findAll('.el-table__body td.is-right').length === 0).toBeTruthy
        wrapper.vm.align = 'right'
        wrapper.vm.$nextTick(() => {
          expect(wrapper.findAll('.el-table__body td.is-right').length > 0).toBeTruthy
          wrapper.unmount()
          done()
        })
      }, DELAY)
    })
    // TODO
    // it('header-align', done => {
    //   const wrapper = mount({
    //     components: {
    //       ElTable,
    //       ElTableColumn,
    //     },
    //     template: `
    //        <el-table :data="testData">
    //         <el-table-column prop="name" :align="align" :header-align="headerAlign"/>
    //       </el-table>
    //     `,

    //     data() {
    //       return {
    //         align: 'left',
    //         headerAlign: null,
    //       }
    //     },

    //     created() {
    //       this.testData = getTestData()
    //     },
    //   })

    //   wrapper.vm.$nextTick(() => {
    //     expect(wrapper.findAll('.el-table__header th.is-left').length).toBeGreaterThanOrEqual(0)
    //     expect(wrapper.findAll('.el-table__header th.is-center').length).toEqual(0)
    //     expect(wrapper.findAll('.el-table__header th.is-right').length).toEqual(0)
    //     wrapper.vm.align = 'right'
    //     wrapper.vm.$nextTick(() => {
    //       expect(wrapper.findAll('.el-table__header th.is-left').length).toEqual(0)
    //       expect(wrapper.findAll('.el-table__header th.is-center').length).toEqual(0)
    //       expect(wrapper.findAll('.el-table__header th.is-right').length).toBeGreaterThanOrEqual(0)
    //       wrapper.vm.headerAlign = 'center'
    //       wrapper.vm.$nextTick(() => {
    //         expect(wrapper.findAll('.el-table__header th.is-left').length).toEqual(0)
    //         expect(wrapper.findAll('.el-table__header th.is-center').length).toBeGreaterThanOrEqual(0)
    //         expect(wrapper.findAll('.el-table__header th.is-right').length).toEqual(0)
    //         wrapper.vm.headerAlign = null
    //         wrapper.vm.$nextTick(() => {
    //           expect(wrapper.findAll('.el-table__header th.is-left').length).toEqual(0)
    //           expect(wrapper.findAll('.el-table__header th.is-center').length).toEqual(0)
    //           expect(wrapper.findAll('.el-table__header th.is-right').length).toBeGreaterThanOrEqual(0)
    //           wrapper.unmount()
    //           done()
    //         })
    //       })
    //     })
    //   })
    // })

    it('width', done => {
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

      setTimeout(() => {
        expect(wrapper.find('.el-table__body col').attributes('width')).toEqual('100')
        wrapper.vm.width = 200
        setTimeout(() => {
          expect(wrapper.find('.el-table__body col').attributes('width')).toEqual('200')
          wrapper.unmount()
          done()
        }, 100)
      }, DELAY)
    })

    it('min-width', done => {
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

      setTimeout(() => {
        expect(wrapper.find('.el-table__body col').attributes('width')).toEqual('100')
        wrapper.vm.width = 200
        setTimeout(() => {
          expect(wrapper.find('.el-table__body col').attributes('width')).toEqual('200')
          wrapper.unmount()
          done()
        }, 100)
      }, DELAY)
    })

    it('fixed', done => {
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

      setTimeout(() => {
        expect(!wrapper.find('.el-table__fixed')).toBeTruthy
        wrapper.vm.fixed = true
        setTimeout(() => {
          expect(!!wrapper.find('.el-table__fixed')).toBeTruthy
          wrapper.unmount()
          done()
        }, 100)
      }, DELAY)
    })

    it('prop', done => {
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

      setTimeout(() => {
        let firstColumnContent = wrapper.find('.el-table__body td .cell').text()
        let secondColumnContent = wrapper.find('.el-table__body td:nth-child(2) .cell').text()
        expect(firstColumnContent !== secondColumnContent).toBeTruthy
        wrapper.vm.prop = 'release'
        setTimeout(() => {
          firstColumnContent = wrapper.find('.el-table__body td .cell').text()
          secondColumnContent = wrapper.find('.el-table__body td:nth-child(2) .cell').text()
          expect(firstColumnContent === secondColumnContent).toBeTruthy
          wrapper.unmount()
          done()
        }, 100)
      }, DELAY)
    })
  })
  describe('methods', () => {
    const createTable = function (prop = '', opts?) {
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

    it('toggleAllSelection', done => {
      const wrapper = createTable('selection-change')
      const vm = wrapper.vm
      vm.$refs.table.toggleAllSelection()
      setTimeout(() => {
        expect(vm.selection.length).toEqual(5)

        vm.$refs.table.toggleAllSelection()
        setTimeout(() => {
          expect(vm.selection.length).toEqual(0)
          wrapper.unmount()
          done()
        }, 50)
      }, 50)
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

    it('sort', done => {
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

      setTimeout(() => {
        const vm = wrapper.vm
        const lastCells = wrapper.findAll('.el-table__body-wrapper tbody tr td:last-child')
        expect(toArray(lastCells).map(node => node.text()))
          .toEqual(['80', '92', '92', '95', '100'])

        vm.$nextTick(() => {
          vm.testData = vm.testData.map(data => Object.assign(data, { runtime: -data.runtime }))
          vm.$refs.table.sort('runtime', 'ascending')
          vm.$nextTick(() => {
            expect(toArray(lastCells).map(node => node.text()))
              .toEqual(['-100', '-95', '-92', '-92', '-80'])
            wrapper.unmount()
            done()
          })
        })
      }, DELAY)
    })

    it('sort correct change icon', async () => {
      function assertSortIconCount($el, msg, count = 1) {
        const sortIconCount = $el.querySelectorAll('th.ascending, th.descending').length
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
      await waitImmediate()
      assertSortIconCount(wrapper.element, 'sorting icon is not empty after mount', 0)
      // manual click first column header
      const elm = wrapper.find('.caret-wrapper')
      elm.trigger('click')
      await waitImmediate()
      assertSortIconCount(wrapper.element, 'sorting icon is not one after click header')
      vm.$refs.table.sort('director', 'descending')
      await waitImmediate()
      assertSortIconCount(wrapper.element, 'sorting icon is not one after call sort')
      vm.$refs.table.sort('director', 'ascending')
      await waitImmediate()
      assertSortIconCount(wrapper.element, 'sorting icon is not one after sort same column')
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
      await waitImmediate()
      const secondRow = vm.$el.querySelectorAll('.el-table__row')[1]
      expect(secondRow.classList.contains('current-row')).toBeTruthy

      vm.$el.querySelector('.clear').click()
      await waitImmediate()
      expect(secondRow.classList.contains('current-row')).toBeFalsy

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
    const vm = wrapper.vm
    await waitImmediate()
    const tr = vm.$el.querySelector('.el-table__body-wrapper tbody tr')
    triggerEvent(tr, 'mouseenter', true, false)

    await wait(50)
    expect(tr.classList.contains('hover-row')).toBeTruthy
    triggerEvent(tr, 'mouseleave', true, false)

    await wait(50)
    expect(tr.classList.contains('hover-row')).toBeFalsy
    wrapper.unmount()
  })

  it('highlight-current-row', done => {
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
    setTimeout(_ => {
      const tr = vm.$el.querySelector('.el-table__body-wrapper tbody tr')
      triggerEvent(tr, 'click', true, false)
      setTimeout(_ => {
        expect(tr.classList.contains('current-row')).toBeTruthy
        const rows = vm.$el.querySelectorAll('.el-table__body-wrapper tbody tr')

        triggerEvent(rows[1], 'click', true, false)
        setTimeout(_ => {
          expect(tr.classList.contains('current-row')).toBeFalsy
          expect(rows[1].classList.contains('current-row')).toBeTruthy

          const ths = vm.$el.querySelectorAll('.el-table__header-wrapper thead th')
          triggerEvent(ths[3], 'click', true, false)

          setTimeout(_ => {
            const rows = vm.$el.querySelectorAll('.el-table__body-wrapper tbody tr')

            expect(rows[1].classList.contains('current-row')).toBeFalsy
            expect(rows[3].classList.contains('current-row')).toBeTruthy
            wrapper.unmount()
            done()
          }, DELAY)
        }, DELAY)
      }, DELAY)
    }, DELAY)
  })

  it('keep highlight row when data change', done => {
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
    setTimeout(() => {
      let rows = vm.$el.querySelectorAll('.el-table__body-wrapper tbody tr')
      triggerEvent(rows[2], 'click', true, false)
      setTimeout(() => {
        expect(rows[2].classList.contains('current-row')).toBeTruthy
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

        setTimeout(() => {
          rows = vm.$el.querySelectorAll('.el-table__body-wrapper tbody tr')
          expect(rows[3].classList.contains('current-row')).toBeTruthy
          wrapper.unmount()
          done()
        }, DELAY)
      }, DELAY)
    }, DELAY)
  })

  it('keep highlight row after sort', done => {
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
    setTimeout(() => {
      let rows = vm.$el.querySelectorAll('.el-table__body-wrapper tbody tr')
      triggerEvent(rows[1], 'click', true, false)
      setTimeout(() => {
        expect(rows[1].classList.contains('current-row')).toBeTruthy
        const cells = vm.$el.querySelectorAll('.el-table__header-wrapper thead th > .cell')
        triggerEvent(cells[3], 'click', true, false)

        setTimeout(() => {
          rows = vm.$el.querySelectorAll('.el-table__body-wrapper tbody tr')
          expect(rows[3].classList.contains('current-row')).toBeTruthy
          wrapper.unmount()
          done()
        }, DELAY)
      }, DELAY)
    }, DELAY)
  })

  // it('table append is visible in viewport if height is 100%', async () => {
  //   const wrapper = mount({
  //     components: {
  //       ElTable,
  //       ElTableColumn,
  //     },
  //     template: `
  //     <el-table :data="[]" height="100%">
  //       <el-table-column prop="name" label="片名" />
  //       <el-table-column prop="release" label="发行日期" />
  //       <el-table-column prop="director" label="导演" />
  //       <el-table-column prop="runtime" label="时长（分）" />
  //       <template slot="append">
  //         <div class="append-content" style="height: 48px;">
  //           append 区域始终出现在视图内
  //         </div>
  //       </template>
  //     </el-table>
  //     `,
  //   })
  //   const vm = wrapper.vm
  //   await waitImmediate()
  //   const emptyBlockEl = vm.$el.querySelector('.el-table__empty-block')
  //   expect(emptyBlockEl.style.height).toEqual('calc(100% - 48px)')
  //   wrapper.unmount()
  // })
})
