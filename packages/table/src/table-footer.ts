import useLayoutObserver from './layout-observer'
import { defineComponent, h, getCurrentInstance, computed } from 'vue'
import { TableFooter } from './types'


export default defineComponent({
  name: 'ElTableFooter',

  props: {
    fixed: String,
    store: {
      required: true,
      type: Object,
    },
    summaryMethod: Function,
    sumText: String,
    border: Boolean,
    defaultSort: {
      type: Object,
      default() {
        return {
          prop: '',
          order: '',
        }
      },
    },
  },
  setup(props: TableFooter) {
    const instance = getCurrentInstance()
    const table = instance.parent as any
    const store = table.store

    const hasGutter = computed(() => {
      return !props.fixed && table.layout.gutterWidth
    })
    const leftFixedLeafCount = computed(() => {
      return store.states.fixedLeafColumnsLength.value
    })
    const rightFixedLeafCount = computed(() => {
      return store.states.rightFixedColumns.value.length
    })
    const columnsCount = computed(() => {
      return store.states.columns.value.length
    })
    const leftFixedCount = computed(() => {
      return store.states.fixedColumns.value.length
    })
    const rightFixedCount = computed(() => {
      return store.states.rightFixedColumns.value.length
    })
    const isCellHidden = (index, columns, column) => {
      if (props.fixed || props.fixed === 'left') {
        return index >= leftFixedLeafCount.value
      } else if (props.fixed === 'right') {
        let before = 0
        for (let i = 0; i < index; i++) {
          before += columns[i].colSpan
        }
        return before < columnsCount.value - rightFixedLeafCount.value
      } else if (!props.fixed && column.fixed) { // hide cell when footer instance is not fixed and column is fixed
        return true
      } else {
        return (index < leftFixedCount.value) || (index >= columnsCount.value - rightFixedCount.value)
      }
    }

    const getRowClasses = (column, cellIndex) => {
      const classes = [column.id, column.align, column.labelClassName]
      if (column.className) {
        classes.push(column.className)
      }
      if (isCellHidden(cellIndex, store.states.columns.value, column)) {
        classes.push('is-hidden')
      }
      if (!column.children) {
        classes.push('is-leaf')
      }
      return classes
    }

    return {
      getRowClasses,
      hasGutter,
      columns: store.states.columns,
    }
  },
  render() {
    let sums = []
    if (this.summaryMethod) {
      sums = this.summaryMethod({ columns: this.columns, data: this.store.states.data.value })
    } else {
      this.columns.forEach((column, index) => {
        if (index === 0) {
          sums[index] = this.sumText
          return
        }
        const values = this.store.states.data.value.map(item => Number(item[column.property]))
        const precisions = []
        let notNumber = true
        values.forEach(value => {
          if (!isNaN(value)) {
            notNumber = false
            const decimal = ('' + value).split('.')[1]
            precisions.push(decimal ? decimal.length : 0)
          }
        })
        const precision = Math.max.apply(null, precisions)
        if (!notNumber) {
          sums[index] = values.reduce((prev, curr) => {
            const value = Number(curr)
            if (!isNaN(value)) {
              return parseFloat((prev + curr).toFixed(Math.min(precision, 20)))
            } else {
              return prev
            }
          }, 0)
        } else {
          sums[index] = ''
        }
      })
    }

    return h(
      'table',
      {
        class: 'el-table__footer',
        cellspacing: '0',
        cellpadding: '0',
        border: '0',
      },
      [
        h(
          'colgroup',
          {},
          [
            ...this.columns.map(column => h(
              'col',
              {
                name: column.id,
                key: column.id,
              },
            )),
            this.hasGutter && h(
              'col',
              {
                name: 'gutter',
              },
            ),
          ],
        ),
        h(
          'tbody',
          {
            class: [{ 'has-gutter': this.hasGutter }],
          },
          [
            h(
              'tr',
              {},
              [
                ...this.columns.map((column, cellIndex) => h(
                  'td',
                  {
                    key: cellIndex,
                    colspan: column.colSpan,
                    rowspan: column.rowSpan,
                    class: this.getRowClasses(column, cellIndex),
                  },
                  [
                    h(
                      'div',
                      {
                        class: ['cell', column.labelClassName],
                      },
                      [
                        sums[cellIndex],
                      ],
                    ),
                  ],
                )),
                this.hasGutter && h(
                  'col',
                  {
                    name: 'gutter',
                  },
                ),
              ],
            ),
          ],
        ),
      ],
    )
  },
})
