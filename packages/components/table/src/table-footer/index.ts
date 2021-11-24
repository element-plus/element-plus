import { defineComponent, h } from 'vue'
import { hColgroup } from '../h-helper'
import useStyle from './style-helper'
import type { Store } from '../store'

import type { PropType } from 'vue'
import type { DefaultRow, Sort, SummaryMethod } from '../table/defaults'
export interface TableFooter<T> {
  fixed: string
  store: Store<T>
  summaryMethod: SummaryMethod<T>
  sumText: string
  border: boolean
  defaultSort: Sort
}

export default defineComponent({
  name: 'ElTableFooter',

  props: {
    fixed: {
      type: String,
      default: '',
    },
    store: {
      required: true,
      type: Object as PropType<TableFooter<DefaultRow>['store']>,
    },
    summaryMethod: Function as PropType<
      TableFooter<DefaultRow>['summaryMethod']
    >,
    sumText: String,
    border: Boolean,
    defaultSort: {
      type: Object as PropType<TableFooter<DefaultRow>['defaultSort']>,
      default: () => {
        return {
          prop: '',
          order: '',
        }
      },
    },
  },
  setup(props) {
    const { hasGutter, getRowClasses, getRowStyles, columns, gutterWidth } =
      useStyle(props as TableFooter<DefaultRow>)
    return {
      getRowClasses,
      getRowStyles,
      hasGutter,
      gutterWidth,
      columns,
    }
  },
  render() {
    const { hasGutter, gutterWidth, columns } = this
    let sums = []
    if (this.summaryMethod) {
      sums = this.summaryMethod({
        columns,
        data: this.store.states.data.value,
      })
    } else {
      columns.forEach((column, index) => {
        if (index === 0) {
          sums[index] = this.sumText
          return
        }
        const values = this.store.states.data.value.map((item) =>
          Number(item[column.property])
        )
        const precisions = []
        let notNumber = true
        values.forEach((value) => {
          if (!isNaN(value)) {
            notNumber = false
            const decimal = `${value}`.split('.')[1]
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
        hColgroup(columns, hasGutter),
        h(
          'tbody',
          {
            class: [{ 'has-gutter': hasGutter }],
          },
          [
            h('tr', {}, [
              ...columns.map((column, cellIndex) =>
                h(
                  'td',
                  {
                    key: cellIndex,
                    colspan: column.colSpan,
                    rowspan: column.rowSpan,
                    class: [
                      ...this.getRowClasses(column, cellIndex),
                      'el-table__cell',
                      hasGutter && cellIndex === columns.length - 1
                        ? 'last'
                        : '',
                    ],
                    style: this.getRowStyles(
                      column,
                      cellIndex,
                      hasGutter,
                      gutterWidth
                    ),
                  },
                  [
                    h(
                      'div',
                      {
                        class: ['cell', column.labelClassName],
                      },
                      [sums[cellIndex]]
                    ),
                  ]
                )
              ),
              hasGutter &&
                h('td', {
                  class: 'el-table__fixed-right-patch el-table__cell',
                  style: {
                    width: `${gutterWidth}px`,
                  },
                }),
            ]),
          ]
        ),
      ]
    )
  },
})
