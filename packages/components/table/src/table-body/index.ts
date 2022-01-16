import {
  defineComponent,
  getCurrentInstance,
  h,
  watch,
  onUnmounted,
  onUpdated,
} from 'vue'
import { isClient } from '@vueuse/core'
import { addClass, removeClass } from '@element-plus/utils/dom'
import { hColgroup } from '../h-helper'
import useLayoutObserver from '../layout-observer'
import { removePopper } from '../util'
import useRender from './render-helper'
import defaultProps from './defaults'
import { usePrefixClass } from '@element-plus/hooks'

import type { VNode } from 'vue'
import type { DefaultRow, Table } from '../table/defaults'

export default defineComponent({
  name: 'ElTableBody',
  props: defaultProps,
  setup(props) {
    const tablePrefixClass = usePrefixClass('table')
    const instance = getCurrentInstance()
    const parent = instance.parent as Table<DefaultRow>

    const { wrappedRowRender, tooltipContent, tooltipTrigger } =
      useRender(props)
    const { onColumnsChange, onScrollableChange } = useLayoutObserver(parent)

    watch(props.store.states.hoverRow, (newVal: any, oldVal: any) => {
      if (!props.store.states.isComplex.value || !isClient) return
      let raf = window.requestAnimationFrame
      if (!raf) {
        raf = (fn) => window.setTimeout(fn, 16)
      }
      raf(() => {
        const rows = instance.vnode.el.querySelectorAll(`.${tablePrefixClass.value}__row`)
        const oldRow = rows[oldVal]
        const newRow = rows[newVal]
        if (oldRow) {
          removeClass(oldRow, 'hover-row')
        }
        if (newRow) {
          addClass(newRow, 'hover-row')
        }
      })
    })

    onUnmounted(() => {
      removePopper?.()
    })
    onUpdated(() => {
      removePopper?.()
    })

    return {
      tablePrefixClass,
      onColumnsChange,
      onScrollableChange,
      wrappedRowRender,
      tooltipContent,
      tooltipTrigger,
    }
  },
  render(params) {
    const { tablePrefixClass } = params;
    const { wrappedRowRender, store } = this
    const data = store.states.data.value || []
    const columns = store.states.columns.value
    return h(
      'table',
      {
        class: `${tablePrefixClass}__body`,
        cellspacing: '0',
        cellpadding: '0',
        border: '0',
      },
      [
        hColgroup(columns),
        h('tbody', {}, [
          data.reduce((acc: VNode[], row) => {
            return acc.concat(wrappedRowRender(row, acc.length))
          }, []),
        ]),
      ]
    )
  },
})
