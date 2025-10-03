import { nextTick, onBeforeUnmount, onMounted, ref, watch } from 'vue'

import type { Table } from '../table/defaults'

export const useTableScrollbarFix = (
  table: Table<any>,
  nativeScrollbar: boolean,
  setScrollLeft: (left: number) => void,
  setScrollTop: (top: number) => void,
  layout: any,
  doLayout: () => void,
  emit: (event: string, ...args: any[]) => void
) => {
  const placeholderWidth = ref(17)
  let placeholderCell: HTMLElement | null = null
  let resizeHandler: () => void
  const addHeaderPlaceholder = () => {
    if (!nativeScrollbar) return
    nextTick(() => {
      if (placeholderCell) {
        placeholderCell.remove()
      }
      const tableRootEl = table?.vnode?.el as HTMLElement | null
      const headerRow = tableRootEl?.querySelector('.el-table__header tr')
      if (!headerRow) return
      const lastHeaderCell = headerRow.querySelector('th:nth-last-child(1)')
      if (lastHeaderCell) {
        ;(lastHeaderCell as HTMLElement).style.borderRight = 'none'
      }
      placeholderCell = document.createElement('th')
      placeholderCell.className = 'el-table__cell is-leaf'
      placeholderCell.style.width = `${placeholderWidth.value}px`
      placeholderCell.style.minWidth = `${placeholderWidth.value}px`
      placeholderCell.style.backgroundColor = '#ffffff'
      placeholderCell.style.padding = '0'
      placeholderCell.style.borderLeft = 'none'
      headerRow.appendChild(placeholderCell)
    })
  }

  const handleScroll = (scrollInfo: {
    scrollLeft: number
    scrollTop: number
  }) => {
    emit('scroll', scrollInfo)
    if (nativeScrollbar) {
      setScrollLeft(scrollInfo.scrollLeft)
      setScrollTop(scrollInfo.scrollTop)
      nextTick(() => {
        layout.updateScrollY()
        doLayout()
        addHeaderPlaceholder()
      })
    }
  }
  onMounted(() => {
    if (nativeScrollbar) {
      nextTick(() => {
        addHeaderPlaceholder()
        resizeHandler = () => {
          addHeaderPlaceholder()
        }
        window.addEventListener('resize', resizeHandler)
        watch(
          () => table.store.states.data.value,
          () => nextTick(addHeaderPlaceholder)
        )
      })
    }
  })

  onBeforeUnmount(() => {
    if (nativeScrollbar) {
      window.removeEventListener('resize', resizeHandler)
      if (placeholderCell) {
        placeholderCell.remove()
      }
    }
  })

  return {
    addHeaderPlaceholder,
    handleScroll,
  }
}
