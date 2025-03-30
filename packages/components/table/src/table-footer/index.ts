// @ts-nocheck
import { defineComponent, h, inject } from 'vue'
import { useNamespace } from '@element-plus/hooks'
import useLayoutObserver from '../layout-observer'
import { TABLE_INJECTION_KEY } from '../tokens'
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
    const parent = inject(TABLE_INJECTION_KEY)
    const ns = useNamespace('table')
    const { getCellClasses, getCellStyles, columns } = useStyle(
      props as TableFooter<DefaultRow>
    )
    const { onScrollableChange, onColumnsChange } = useLayoutObserver(parent!)

    return {
      ns,
      onScrollableChange,
      onColumnsChange,
      getCellClasses,
      getCellStyles,
      columns,
    }
  },
  render() {
    const { columns, getCellStyles, getCellClasses, summaryMethod, sumText } =
      this
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
          if (!Number.isNaN(+value)) {
            notNumber = false
            const decimal = `${value}`.split('.')[1]
            precisions.push(decimal ? decimal.length : 0)
          }
        })
        const precision = Math.max.apply(null, precisions)
        if (!notNumber) {
          sums[index] = values.reduce((prev, curr) => {
            const value = Number(curr)
            if (!Number.isNaN(+value)) {
              return Number.parseFloat(
                (prev + curr).toFixed(Math.min(precision, 20))
              )
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
      h('tfoot', [
        h('tr', {}, [
          ...columns.map((column, cellIndex) =>
            h(
              'td',
              {
                key: cellIndex,
                colspan: column.colSpan,
                rowspan: column.rowSpan,
                class: getCellClasses(columns, cellIndex),
                style: getCellStyles(column, cellIndex),
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
        ]),
      ])
    )
  },
})
