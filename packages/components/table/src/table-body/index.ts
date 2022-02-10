import {
  defineComponent,
  getCurrentInstance,
  h,
  watch,
  onUnmounted,
  onUpdated,
  inject,
} from 'vue'
import { isClient } from '@vueuse/core'
import { addClass, removeClass } from '@element-plus/utils-v2'
import { useNamespace } from '@element-plus/hooks'
import useLayoutObserver from '../layout-observer'
import { removePopper } from '../util'
import { TABLE_INJECTION_KEY } from '../tokens'
import useRender from './render-helper'
import defaultProps from './defaults'

import type { VNode } from 'vue'

export default defineComponent({
  name: 'ElTableBody',
  props: defaultProps,
  setup(props) {
    const instance = getCurrentInstance()
    const parent = inject(TABLE_INJECTION_KEY)
    const ns = useNamespace('table')
    const { wrappedRowRender, tooltipContent, tooltipTrigger } =
      useRender(props)
    const { onColumnsChange, onScrollableChange } = useLayoutObserver(parent!)

    watch(props.store.states.hoverRow, (newVal: any, oldVal: any) => {
      if (!props.store.states.isComplex.value || !isClient) return
      let raf = window.requestAnimationFrame
      if (!raf) {
        raf = (fn) => window.setTimeout(fn, 16)
      }
      raf(() => {
        const rows = instance?.vnode.el?.querySelectorAll(`.${ns.e('row')}`)
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
      ns,
      onColumnsChange,
      onScrollableChange,
      wrappedRowRender,
      tooltipContent,
      tooltipTrigger,
    }
  },
  render() {
    const { wrappedRowRender, store } = this
    const data = store.states.data.value || []
    return h('tbody', {}, [
      data.reduce((acc: VNode[], row) => {
        return acc.concat(wrappedRowRender(row, acc.length))
      }, []),
    ])
  },
})
