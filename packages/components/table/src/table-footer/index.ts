import { defineComponent, h } from 'vue'
import { hColgroup } from '../h-helper'
import useStyle from './style-helper'
import type { Store } from '../store'
import { usePrefixClass } from '@element-plus/hooks'

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
    const tablePrefixClass = usePrefixClass('table')
    const { hasGutter, getCellClasses, getCellStyles, columns, gutterWidth } =
      useStyle(props as TableFooter<DefaultRow>)
    return {
      tablePrefixClass,
      getCellClasses,
      getCellStyles,
      hasGutter,
      gutterWidth,
      columns,
    }
  },
  render(params) {
    const { tablePrefixClass } = params;
    const {
      hasGutter,
      gutterWidth,
      columns,
      getCellStyles,
      getCellClasses,
      summaryMethod,
      sumText,
    } = this
    const data = this.store.states.data.value
    let sums = []
    if (summaryMethod) {
      sums = summaryMethod({
        columns,
        data,
      })
    } else {
      columns.forEach((column, index) => {
        if (index === 0) {
          sums[index] = sumText
          return
        }
        const values = data.map((item) => Number(item[column.property]))
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
        class: `${tablePrefixClass}__footer`,
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
                    class: getCellClasses(columns, cellIndex, hasGutter),
                    style: getCellStyles(column, cellIndex, hasGutter),
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
                  class: `${tablePrefixClass}__fixed-right-patch ${tablePrefixClass}__cell`,
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
