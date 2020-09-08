import { mount } from '@vue/test-utils'
import Table from '../src/table.vue'
import TableColumn from '../src/table-column/index'

const DELAY = 10
const testDataArr = []
const toArray = function (obj) {
  return [].slice.call(obj)
}
const getTestData = function () {
  return [
    { id: 1, name: 'Toy Story', release: '1995-11-22', director: 'John Lasseter', runtime: 80 },
    { id: 2, name: 'A Bug\'s Life', release: '1998-11-25', director: 'John Lasseter', runtime: 95 },
    { id: 3, name: 'Toy Story 2', release: '1999-11-24', director: 'John Lasseter', runtime: 92 },
    { id: 4, name: 'Monsters, Inc.', release: '2001-11-2', director: 'Peter Docter', runtime: 92 },
    { id: 5, name: 'Finding Nemo', release: '2003-5-30', director: 'Andrew Stanton', runtime: 100 },
  ]
}

describe('Table.vue', () => {
  describe('rendering data is correct', () => {
    const wrapper = mount({
      components: {
        Table,
        TableColumn,
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
    const vm = wrapper.vm
    it('head', done => {
      setTimeout(_ => {
        const ths = toArray(vm.$el.querySelectorAll('thead th'))

        expect(ths.map(node => node.textContent).filter(o => o))
          .toEqual(['片名', '发行日期', '导演', '时长（分）'])
        done()
      }, DELAY)
    })

    it('row length', () => {
      expect(vm.$el.querySelectorAll('.el-table__body-wrapper tbody tr')).toEqual(getTestData().length)
    })

    it('row data', () => {
      const cells = toArray(vm.$el.querySelectorAll('td .cell'))
        .map(node => node.textContent)

      expect(cells).toEqual(testDataArr)
    })
  })
})
