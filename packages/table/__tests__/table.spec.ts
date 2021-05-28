import { mount as _mount, VueWrapper } from '@vue/test-utils'
import { ComponentPublicInstance, nextTick } from 'vue'
import ElTable from '../src/table.vue'
import ElTableColumn from '../src/table-column/index'
import ElCheckboxGroup from '@element-plus/checkbox-group'
import ElCheckbox from '@element-plus/checkbox'
import sinon from 'sinon'

const testDataArr = []
const toArray = function(obj) {
  return [].slice.call(obj)
}

const mount = (opt: any) =>
  _mount<any>(opt, {
    attachTo: 'body',
  })

const triggerEvent = function(elm, name, ...opts) {
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
  elm.dispatchEvent ? elm.dispatchEvent(evt) : elm.fireEvent('on' + name, evt)

  return elm
}
const getTestData = function() {
  return [
    {
      id: 1,
      name: 'Toy Story',
      release: '1995-11-22',
      director: 'John Lasseter',
      runtime: 80,
    },
    {
      id: 2,
      name: "A Bug's Life",
      release: '1998-11-25',
      director: 'John Lasseter',
      runtime: 95,
    },
    {
      id: 3,
      name: 'Toy Story 2',
      release: '1999-11-24',
      director: 'John Lasseter',
      runtime: 92,
    },
    {
      id: 4,
      name: 'Monsters, Inc.',
      release: '2001-11-2',
      director: 'Peter Docter',
      runtime: 92,
    },
    {
      id: 5,
      name: 'Finding Nemo',
      release: '2003-5-30',
      director: 'Andrew Stanton',
      runtime: 100,
    },
  ]
}

getTestData().forEach(cur => {
  Object.keys(cur).forEach(prop => {
    testDataArr.push(cur[prop].toString())
  })
})

function equalArray(list: unknown[], arr: unknown[]) {
  arr.forEach(item => {
    expect(list).toContain(item)
  })
}

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
    it('head', async done => {
      await nextTick()
      const ths = toArray(wrapper.findAll('thead th'))
      equalArray(
        ths.map(node => node.text()).filter(o => o),
        ['片名', '发行日期', '导演', '时长（分）'],
      )
      done()
    })

    it('row length', () => {
      expect(
        wrapper.findAll('.el-table__body-wrapper tbody tr').length,
      ).toEqual(getTestData().length)
    })
    it('row data', () => {
      const cells = toArray(wrapper.findAll('td .cell')).map(node =>
        node.text(),
      )
      equalArray(cells, testDataArr)
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

    it('height', async done => {
      const wrapper = createTable('height="134"')
      await nextTick()
      expect(wrapper.attributes('style')).toContain('height: 134px')
      wrapper.unmount()
      done()
    })

    it('height as string', async done => {
      const wrapper = createTable('height="100px"')
      await nextTick()
      expect(wrapper.attributes('style')).toContain('height: 100px')
      wrapper.unmount()
      done()
    })

    it('maxHeight', async done => {
      const wrapper = createTable('max-height="134"')
      await nextTick()
      expect(wrapper.attributes('style')).toContain('max-height: 134px')
      wrapper.unmount()
      done()
    })

    it('stripe', async done => {
      const wrapper = createTable('stripe')
      await nextTick()
      expect(wrapper.classes()).toContain('el-table--striped')
      wrapper.unmount()
      done()
    })

    it('border', async done => {
      const wrapper = createTable('border')
      await nextTick()
      expect(wrapper.classes()).toContain('el-table--border')
      wrapper.unmount()
      done()
    })

    it('fit', async done => {
      const wrapper = createTable(':fit="false"')
      await nextTick()
      expect(wrapper.classes()).not.toContain('el-table--fit')
      wrapper.unmount()
      done()
    })

    it('show-header', async done => {
      const wrapper = createTable(':show-header="false"')
      await nextTick()
      expect(wrapper.findAll('.el-table__header-wrapper').length).toEqual(0)
      wrapper.unmount()
      done()
    })

    it('tableRowClassName', async done => {
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
      done()
    })

    it('tableRowStyle[Object]', async done => {
      const wrapper = createTable(':row-style="{ height: \'60px\' }"', {})
      await nextTick()
      expect(wrapper.find('.el-table__body tr').attributes('style')).toContain(
        'height: 60px',
      )
      wrapper.unmount()
      done()
    })

    it('tableRowStyle[Function]', async done => {
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
      done()
    })

    it('current-row-key', async done => {
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
      done()
    })
  })
  describe('filter', () => {
    let wrapper: VueWrapper<ComponentPublicInstance>

    beforeEach(async done => {
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
      done()
    })

    afterEach(() => wrapper.unmount())

    it('render', () => {
      expect(
        wrapper.find('.el-table__column-filter-trigger'),
      ).not.toBeUndefined()
    })

    it('click dropdown', async done => {
      const btn = wrapper.find('.el-table__column-filter-trigger')
      btn.trigger('click')
      await nextTick()
      const filter = document.body.querySelector('.el-table-filter')
      expect(filter).not.toBeUndefined()
      filter.parentNode.removeChild(filter)
      done()
    })

    it('click filter', async done => {
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
      done()
    })

    it('click reset', async done => {
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
      done()
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

    it('select', async done => {
      const wrapper = createTable('select')
      await nextTick()
      wrapper.findAll('.el-checkbox')[1].trigger('click')
      expect(wrapper.vm.result.length).toEqual(2)
      expect(wrapper.vm.result[1]).toHaveProperty('name')
      expect(wrapper.vm.result[1]['name']).toEqual(getTestData()[0].name)
      wrapper.unmount()
      done()
    })

    it('selection-change', async done => {
      const wrapper = createTable('selection-change')
      await nextTick()
      wrapper.findAll('.el-checkbox')[1].trigger('click')
      expect(wrapper.vm.result.length).toEqual(1)
      wrapper.unmount()
      done()
    })

    it('cell-mouse-enter', async done => {
      const wrapper = createTable('cell-mouse-enter')
      await nextTick()
      const cell = wrapper.findAll('.el-table__body .cell')[2] // first row
      triggerEvent(cell.element.parentNode, 'mouseenter')
      expect(wrapper.vm.result.length).toEqual(4) // row, column, cell, event
      expect(wrapper.vm.result[0]).toHaveProperty('name')
      expect(wrapper.vm.result[0]['name']).toEqual(getTestData()[0].name)
      wrapper.unmount()
      done()
    })

    it('cell-mouse-leave', async done => {
      const wrapper = createTable('cell-mouse-leave')
      await nextTick()
      const cell = wrapper.findAll('.el-table__body .cell')[7] // second row
      const cell2 = wrapper.findAll('.el-table__body .cell')[2] // first row

      triggerEvent(cell2.element.parentNode, 'mouseenter')
      triggerEvent(cell.element.parentNode, 'mouseleave')
      expect(wrapper.vm.result.length).toEqual(4) // row, column, cell, event
      expect(wrapper.vm.result[0]).toHaveProperty('name')
      expect(wrapper.vm.result[0]['name']).toEqual(getTestData()[0].name)
      wrapper.unmount()
      done()
    })

    it('row-click', async done => {
      const wrapper = createTable('row-click')
      await nextTick()
      const cell = wrapper.findAll('.el-table__body .cell')[2] // first row

      triggerEvent(cell.element.parentNode.parentNode, 'click')
      expect(wrapper.vm.result.length).toEqual(3) // row, event, column
      expect(wrapper.vm.result[0]).toHaveProperty('name')
      expect(wrapper.vm.result[0]['name']).toEqual(getTestData()[0].name)
      wrapper.unmount()
      done()
    })

    it('row-dblclick', async done => {
      const wrapper = createTable('row-dblclick')
      await nextTick()
      const cell = wrapper.findAll('.el-table__body .cell')[2] // first row

      triggerEvent(cell.element.parentNode.parentNode, 'dblclick')
      expect(wrapper.vm.result.length).toEqual(3) // row, event, column
      expect(wrapper.vm.result[0]).toHaveProperty('name')
      expect(wrapper.vm.result[0]['name']).toEqual(getTestData()[0].name)
      wrapper.unmount()
      done()
    })

    it('header-click', async done => {
      const wrapper = createTable('header-click')
      await nextTick()
      const cell = wrapper.findAll('.el-table__header th')[1] // header[prop='name']
      cell.trigger('click')
      expect(wrapper.vm.result.length).toEqual(2) // column, event
      expect(wrapper.vm.result[0]['name']).toBeUndefined()
      wrapper.unmount()
      done()
    })
  })
  describe('column attributes', () => {
    const createTable = function(
      props1?,
      props2?,
      props3?,
      props4?,
      opts?,
      tableProps?,
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
          opts,
        ),
      )
    }

    it('label', async done => {
      const wrapper = createTable('label="啊哈哈哈"', 'label="啊啦啦啦"')
      await nextTick()
      const ths = toArray(wrapper.findAll('thead th'))
        .map(node => node.text())
        .filter(o => o)

      expect(ths).toEqual(['啊哈哈哈', '啊啦啦啦'])
      wrapper.unmount()
      done()
    })

    it('width', async done => {
      const wrapper = createTable('width="123px"', ':width="102"', 'width="39"')
      await nextTick()
      const ths = toArray(wrapper.findAll('.el-table__header-wrapper col'))
        .map(node => node.attributes('width'))
        .filter(o => o)
      expect(ths).toContain('123')
      expect(ths).toContain('102')
      expect(ths).toContain('39')
      wrapper.unmount()
      done()
    })

    it('fixed', async done => {
      const wrapper = createTable(
        'fixed label="test1"',
        'fixed="right" label="test2"',
        'fixed="left" label="test3"',
      )
      await nextTick()
      expect(
        toArray(
          wrapper.findAll('.el-table__fixed th:not(.is-hidden)'),
        ).map(node => node.text()),
      ).toEqual(['test1', 'test3'])

      expect(
        toArray(
          wrapper.findAll('.el-table__fixed-right th:not(.is-hidden)'),
        ).map(node => node.text()),
      ).toEqual(['test2'])
      expect(
        wrapper.find('.el-table__body-wrapper').attributes('style'),
      ).toBeFalsy()
      wrapper.unmount()
      done()
    })

    it('resizable', async done => {
      const wrapper = createTable(
        'resizable',
        ':resizable="false"',
        '',
        '',
        {},
        'border',
      )
      await nextTick()
      const firstCol = wrapper.find('thead th')
      triggerEvent(firstCol.element, 'mousemove')
      triggerEvent(firstCol.element, 'mousedown')
      wrapper.unmount()
      done()
    })

    it('formatter', async done => {
      const wrapper = createTable(':formatter="renderCell"', '', '', '', {
        methods: {
          renderCell(row) {
            return `[${row.name}]`
          },
        },
      })

      await nextTick()
      const cells = toArray(
        wrapper.findAll('.el-table__body-wrapper tbody tr td:first-child'),
      )
      expect(cells.map(n => n.text())).toEqual(
        getTestData().map(o => `[${o.name}]`),
      )
      wrapper.unmount()
      done()
    })

    it('show-overflow-tooltip', async done => {
      const wrapper = createTable('show-overflow-tooltip')
      await nextTick()
      expect(wrapper.findAll('.el-tooltip').length).toEqual(5)
      wrapper.unmount()
      done()
    })

    // it('show-tooltip-when-overflow', async (done) => {
    //   // old version prop name
    //   const wrapper = createTable('show-tooltip-when-overflow')
    //   await nextTick()
    //   expect(wrapper.findAll('.el-tooltip').length).toEqual(5)
    //   wrapper.unmount()
    //   done()
    // })

    it('align', async done => {
      const wrapper = createTable(
        'align="left"',
        'align="right"',
        'align="center"',
      )
      await nextTick()
      const len = getTestData().length + 1
      expect(wrapper.findAll('.is-left').length).toEqual(len)
      expect(wrapper.findAll('.is-right').length).toEqual(len)
      expect(wrapper.findAll('.is-center').length).toEqual(len)
      wrapper.unmount()
      done()
    })

    it('class-name', async done => {
      const wrapper = createTable(
        'class-name="column-1"',
        'class-name="column-2 column-class-a"',
        'class-name="column-class-a"',
      )
      await nextTick()
      const len = getTestData().length + 1
      expect(wrapper.findAll('.column-1').length).toEqual(len)
      expect(wrapper.findAll('.column-2').length).toEqual(len)
      expect(wrapper.findAll('.column-class-a').length).toEqual(len * 2)
      wrapper.unmount()
      done()
    })

    it('selectable === false & check selectAll status', async done => {
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
      done()
    })

    describe('type', () => {
      const createTable = function(type) {
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

        it('render', async done => {
          await nextTick()
          expect(wrapper.findAll('.el-checkbox').length).toEqual(
            getTestData().length + 1,
          )
          done()
        })

        it('select all', async done => {
          wrapper.find('.el-checkbox').trigger('click')
          await nextTick()
          expect(wrapper.vm.selected.length).toEqual(5)
          wrapper.unmount()
          done()
        })

        it('select one', async done => {
          const wrapper2 = createTable('selection')

          await nextTick()
          wrapper2.findAll('.el-checkbox')[1].trigger('click')

          await nextTick()
          expect(wrapper2.vm.selected.length).toEqual(1)
          expect(wrapper2.vm.selected[0].name).toEqual(getTestData()[0].name)
          wrapper2.unmount()
          done()
        })
      })

      describe('= index', () => {
        const wrapper = createTable('index')

        it('render', async done => {
          await nextTick()
          expect(
            toArray(
              wrapper.findAll(
                '.el-table__body-wrapper tbody tr td:first-child',
              ),
            ).map(node => node.text()),
          ).toEqual(['1', '2', '3', '4', '5'])
          wrapper.unmount()
          done()
        })
      })

      describe('= expand', () => {
        const createInstance = function(extra?) {
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

        it('works', async done => {
          const wrapper = createInstance()
          await nextTick()
          expect(wrapper.findAll('td.el-table__expand-column').length).toEqual(
            5,
          )
          wrapper.unmount()
          done()
        })
      })
    })

    describe('sortable', () => {
      it('render', async done => {
        const wrapper = createTable('', '', '', 'sortable')
        await nextTick()
        expect(wrapper.findAll('.caret-wrapper').length).toEqual(1)
        wrapper.unmount()
        done()
      })

      it('sortable orders', async done => {
        const wrapper = createTable(
          '',
          '',
          '',
          "sortable :sort-orders=\"['descending', 'ascending']\"",
          {},
        )

        await nextTick()
        const elm = wrapper.find('.caret-wrapper')
        elm.trigger('click')

        await nextTick()
        const lastCells = wrapper.findAll(
          '.el-table__body-wrapper tbody tr td:last-child',
        )
        expect(toArray(lastCells).map(node => node.text())).toEqual([
          '100',
          '95',
          '92',
          '92',
          '80',
        ])
        wrapper.unmount()
        done()
      })

      it('sortable method', async done => {
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
          },
        )

        await nextTick()
        const elm = wrapper.find('.caret-wrapper')
        elm.trigger('click')

        await nextTick()
        const lastCells = wrapper.findAll(
          '.el-table__body-wrapper tbody tr td:last-child',
        )
        expect(toArray(lastCells).map(node => node.text())).toEqual([
          '100',
          '95',
          '92',
          '92',
          '80',
        ])
        wrapper.unmount()
        done()
      })

      it('sortable by method', async done => {
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
          '.el-table__body-wrapper tbody tr td:last-child',
        )
        expect(toArray(lastCells).map(node => node.text())).toEqual([
          '100',
          '95',
          '92',
          '92',
          '80',
        ])
        wrapper.unmount()
        done()
      })

      it('sortable by property', async done => {
        const wrapper = createTable(
          'sortable sort-by="runtime"',
          '',
          '',
          '',
          {},
        )

        await nextTick()
        const elm = wrapper.find('.caret-wrapper')
        elm.trigger('click')

        await nextTick()
        const lastCells = wrapper.findAll(
          '.el-table__body-wrapper tbody tr td:last-child',
        )
        expect(toArray(lastCells).map(node => node.text())).toEqual([
          '80',
          '92',
          '92',
          '95',
          '100',
        ])
        wrapper.unmount()
        done()
      })
    })

    describe('click sortable column', () => {
      const wrapper = createTable('', '', '', 'sortable')

      it('ascending', async done => {
        const elm = wrapper.find('.caret-wrapper')

        elm.trigger('click')
        await nextTick()
        const lastCells = wrapper.findAll(
          '.el-table__body-wrapper tbody tr td:last-child',
        )
        expect(toArray(lastCells).map(node => node.text())).toEqual([
          '80',
          '92',
          '92',
          '95',
          '100',
        ])
        done()
      })

      it('descending', async done => {
        const elm = wrapper.find('.caret-wrapper')

        elm.trigger('click')
        await nextTick()
        const lastCells = wrapper.findAll(
          '.el-table__body-wrapper tbody tr td:last-child',
        )
        expect(toArray(lastCells).map(node => node.text())).toEqual([
          '100',
          '95',
          '92',
          '92',
          '80',
        ])
        wrapper.unmount()
        done()
      })
    })

    it('change column configuration', async done => {
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
      done()
    })
  })
  describe('summary row', () => {
    it('should render', async done => {
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
      const cells = toArray(footer.findAll('.cell'))
      expect(cells[cells.length - 1].text()).toEqual('459')
      wrapper.unmount()
      done()
    })

    it('custom sum text', async done => {
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
      const cells = toArray(wrapper.findAll('.el-table__footer .cell'))
      expect(cells[0].text()).toEqual('Time')
      wrapper.unmount()
      done()
    })

    it('custom summary method', async done => {
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
      const cells = toArray(wrapper.findAll('.el-table__footer .cell'))
      expect(cells[1].text()).toEqual('9996')
      wrapper.unmount()
      done()
    })
  })
  describe('multi level column', () => {
    it('should works', async done => {
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
      done()
    })
    // TODO
    // it('should works', async done => {
    //   const wrapper = mount({
    //     components: {
    //       ElTable,
    //       ElTableColumn,
    //     },
    //     template: `
    //       <el-table :data="testData">
    //         <el-table-column prop="name" />
    //         <el-table-column label="group">
    //           <el-table-column label="group's group">
    //             <el-table-column prop="release" />
    //             <el-table-column prop="runtime"/>
    //           </el-table-column>
    //           <el-table-column prop="director" />
    //         </el-table-column>
    //         <el-table-column prop="runtime"/>
    //       </el-table>
    //     `,

    //     created() {
    //       this.testData = null
    //     },
    //   })

    //   await nextTick()
    //   const trs = wrapper.findAll('.el-table__header tr')
    //   expect(trs.length).toEqual(3)
    //   const firstRowHeader = trs[0].findAll('th .cell').length
    //   const secondRowHeader = trs[1].findAll('th .cell').length
    //   const thirdRowHeader = trs[2].findAll('th .cell').length
    //   expect(firstRowHeader).toEqual(3)
    //   expect(secondRowHeader).toEqual(2)
    //   expect(thirdRowHeader).toEqual(2)

    //   expect(trs[0].find('th:first-child').attributes('rowspan')).toEqual('3')
    //   expect(trs[0].find('th:nth-child(2)').attributes('colspan')).toEqual('3')
    //   expect(trs[1].find('th:first-child').attributes('colspan')).toEqual('2')
    //   expect(trs[1].find('th:nth-child(2)').attributes('rowspan')).toEqual('2')

    //   wrapper.unmount()
    //   done()
    // })

    it('should work in one column', async done => {
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
      done()
    })
  })
  describe('dynamic column attribtes', () => {
    it('label', async done => {
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
          'NAME',
        )
        wrapper.unmount()
        done()
      })
    })

    it('align', async done => {
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
          wrapper.findAll('.el-table__body td.is-right').length > 0,
        ).toBeTruthy()
        wrapper.unmount()
        done()
      })
    })
    it('header-align', async done => {
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
        wrapper.findAll('.el-table__header th.is-left').length,
      ).toBeGreaterThanOrEqual(0)
      expect(wrapper.findAll('.el-table__header th.is-center').length).toEqual(
        0,
      )
      expect(wrapper.findAll('.el-table__header th.is-right').length).toEqual(0)
      wrapper.vm.align = 'right'
      await nextTick()
      expect(wrapper.findAll('.el-table__header th.is-left').length).toEqual(0)
      expect(wrapper.findAll('.el-table__header th.is-center').length).toEqual(
        0,
      )
      expect(
        wrapper.findAll('.el-table__header th.is-right').length,
      ).toBeGreaterThanOrEqual(0)
      wrapper.vm.headerAlign = 'center'
      await nextTick()
      expect(wrapper.findAll('.el-table__header th.is-left').length).toEqual(0)
      expect(
        wrapper.findAll('.el-table__header th.is-center').length,
      ).toBeGreaterThanOrEqual(0)
      expect(wrapper.findAll('.el-table__header th.is-right').length).toEqual(0)
      wrapper.vm.headerAlign = null
      await nextTick()
      expect(wrapper.findAll('.el-table__header th.is-left').length).toEqual(0)
      expect(wrapper.findAll('.el-table__header th.is-center').length).toEqual(
        0,
      )
      expect(
        wrapper.findAll('.el-table__header th.is-right').length,
      ).toBeGreaterThanOrEqual(0)
      wrapper.unmount()
      done()
    })

    it('width', async done => {
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
        '100',
      )
      wrapper.vm.width = 200
      await nextTick()
      expect(wrapper.find('.el-table__body col').attributes('width')).toEqual(
        '200',
      )
      wrapper.unmount()
      done()
    })

    it('min-width', async done => {
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
        '100',
      )
      wrapper.vm.width = 200
      await nextTick()
      expect(wrapper.find('.el-table__body col').attributes('width')).toEqual(
        '200',
      )
      wrapper.unmount()
      done()
    })

    it('fixed', async done => {
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
        Object.keys(wrapper.find('.el-table__fixed')).length,
      ).toBeGreaterThan(0)
      wrapper.unmount()
      done()
    })

    it('prop', async done => {
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
      done()
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

    it('toggleAllSelection', async done => {
      const wrapper = createTable('selection-change')
      const vm = wrapper.vm
      vm.$refs.table.toggleAllSelection()
      await nextTick()
      expect(vm.selection.length).toEqual(5)

      vm.$refs.table.toggleAllSelection()
      await nextTick()
      expect(vm.selection.length).toEqual(0)
      wrapper.unmount()
      done()
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
    // TODO
    it('sort', async done => {
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
      equalArray(
        toArray(lastCells).map(node => node.text()),
        ['80', '95', '92', '92', '100'],
      )
      await nextTick()
      vm.testData = vm.testData.map(data =>
        Object.assign(data, { runtime: -data.runtime }),
      )
      vm.$refs.table.sort('runtime', 'ascending')
      await nextTick()
      equalArray(
        toArray(lastCells).map(node => node.text()),
        ['-100', '-95', '-92', '-92', '-80'],
      )
      wrapper.unmount()
      done()
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

  it('highlight-current-row', async done => {
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
    done()
  })

  it('keep highlight row when data change', async done => {
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
    done()
  })

  it('keep highlight row after sort', async done => {
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
    done()
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
      const spy = sinon.spy()
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
      expect(spy.args[0][0]).toBeInstanceOf(Object)
      expect(spy.args[0][1]).toBeTruthy()
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

    it('v-if on el-table-column should patch correctly', async done => {
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
      done()
    })
  })
})
