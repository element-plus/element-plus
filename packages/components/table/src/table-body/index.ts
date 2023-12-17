// @ts-nocheck
import {
  defineComponent,
  getCurrentInstance,
  h,
  inject,
  onUnmounted,
  watch,
} from 'vue'
import { addClass, isClient, rAF, removeClass } from '@element-plus/utils'
import { useNamespace } from '@element-plus/hooks'
import useLayoutObserver from '../layout-observer'
import { TABLE_INJECTION_KEY } from '../tokens'
import { removePopper } from './create-popper-helper'
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

      rAF(() => {
        // just get first level children; fix #9723
        const el = instance?.vnode.el as HTMLElement
        const rows = Array.from(el?.children || []).filter((e) =>
          e?.classList.contains(`${ns.e('row')}`)
        )
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
    // Why do we need tabIndex: -1 ?
    // If you set the tabindex attribute on an element ,
    // then its child content cannot be scrolled with the arrow keys,
    // unless you set tabindex on the content too
    // See https://github.com/facebook/react/issues/25462#issuecomment-1274775248 or https://developer.mozilla.org/zh-CN/docs/Web/HTML/Global_attributes/tabindex
    return h('tbody', { tabIndex: -1 }, [
      data.reduce((acc: VNode[], row) => {
        return acc.concat(wrappedRowRender(row, acc.length))
      }, []),
    ])
  },
})
