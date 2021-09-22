import { defineComponent, h } from 'vue'
import { hGutter, hColgroup } from '../h-helper'
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
    const { hasGutter, getRowClasses, columns } = useStyle(
      props as TableFooter<DefaultRow>
    )
    return {
      getRowClasses,
      hasGutter,
      columns,
    }
  },
  render() {
    let sums = []
    if (this.summaryMethod) {
      sums = this.summaryMethod({
        columns: this.columns,
        data: this.store.states.data.value,
      })
    } else {
      this.columns.forEach((column, index) => {
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
        hColgroup(this.columns, this.hasGutter),
        h(
          'tbody',
          {
            class: [{ 'has-gutter': this.hasGutter }],
          },
          [
            h('tr', {}, [
              ...this.columns.map((column, cellIndex) =>
                h(
                  'td',
                  {
                    key: cellIndex,
                    colspan: column.colSpan,
                    rowspan: column.rowSpan,
                    class: [
                      ...this.getRowClasses(column, cellIndex),
                      'el-table__cell',
                    ],
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
              this.hasGutter && hGutter(),
            ]),
          ]
        ),
      ]
    )
  },
})
