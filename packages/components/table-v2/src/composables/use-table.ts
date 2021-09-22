import { computed, getCurrentInstance, h, ref, shallowRef } from 'vue'
import { klsPrefix } from '../constants'

import type { CSSProperties } from 'vue'
import type { TableProps } from '../props/table'

export const useTable = () => {
  // fake renderer
  const vm = getCurrentInstance()!

  const props = vm.proxy!.$props as TableProps

  const render = (text: string) => h('div', text)
  const container = shallowRef<HTMLDivElement>()
  const hasFixedColumns = computed(() => {
    return false
  })

  const tableHeight = computed(() => {
    // TODO: update the logic here.
    return props.height
  })

  const containerKls = computed(() => {
    return {
      [`${klsPrefix}--fixed`]: props.fixed,
      [`${klsPrefix}--expandable`]: !!props.expandColumnKey,
      [`${klsPrefix}--empty`]: props.data?.length === 0,
      [`${klsPrefix}--has-fixed-row`]: props.fixedData,
      [`${klsPrefix}--has-fixed-column`]: hasFixedColumns.value,
      [`${klsPrefix}--disabled`]: props.disabled,
      [`${klsPrefix}--dynamic`]: !!props.estimatedRowHeight,
    }
  })

  const containerStyle = computed(() => {
    return {
      width: props.width,
      height: tableHeight.value, // plus footer height
      position: 'relative',
    } as CSSProperties
  })

  return {
    // renderers
    renderFooter: () => render('footer'),
    renderLeft: () => render('left'),
    renderRight: () => render('right'),
    renderMain: () => render('main'),
    renderLayer: () => render('layer'),
    renderResizer: () => render('resizer'),
    renderOverlay: () => render('overlay'),

    // values
    container,
    containerKls,
    containerStyle,
  }
}
