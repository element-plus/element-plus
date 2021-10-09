import { computed, defineComponent, h, ref, unref, onMounted } from 'vue'
import { tableV2RowEmits, tableV2RowProps } from '../props/row'

import Cell from './cell'
import ExpandIcon from './expand-icon'
import type { VNode } from 'vue'

const defaultRenderers = {
  cell: (args) => h(Cell, args),
  row: () => '',
  expandIcon: (args) => h(ExpandIcon, args),
}

type HTMLElementLike = {
  getBoundingClientRect: () => DOMRect
}

export default defineComponent({
  name: 'ElTableV2Row',
  props: tableV2RowProps,
  emits: tableV2RowEmits,
  setup(props, { emit, slots }) {
    const rowRef = ref<HTMLElementLike>()
    const measured = ref(false)
    const cachedHeight = ref(0)

    const _expandIconRenderer = computed(
      () =>
        slots.expandIcon ||
        props.expandIconRenderer ||
        defaultRenderers.expandIcon
    )

    const handleExpandToggle = (toggle: boolean) => {
      const { data, rowKey, rowIndex } = props
      emit('row-toggle', {
        toggle,
        rowData: data,
        rowKey,
        rowIndex,
      })
    }

    function measureHeight(init = false) {
      const row = unref(rowRef)
      if (!row) return
      const { height } = row.getBoundingClientRect()
      const { rowKey, rowIndex, columns } = props
      measured.value = true

      if (init || unref(cachedHeight) !== height) {
        const fixedDir =
          columns[0] && !columns[0].isPlaceholder && columns[0].fixed
        emit('row-height-change', rowKey, rowIndex, fixedDir || false)
      }
    }

    onMounted(() => {
      measureHeight(true)
    })

    const expandIcon = () => {
      const { depth } = props
      return unref(_expandIconRenderer)({
        depth,
        onToggle: handleExpandToggle,
      })
    }

    const cells = () => {
      const { columns, expandColumnKey, isScrolling, data, rowIndex } = props
      return columns.map((column, columnIndex) =>
        slots.cell?.({
          column,
          columnIndex,
          columns,
          data,
          rowIndex,
          isScrolling,
          expandIcon: column.key === expandColumnKey && expandIcon(),
        })
      )
    }

    const row = () => {
      const { isScrolling, columns, data, rowIndex, depth } = props
      if (slots.row) {
        return slots.row({
          isScrolling,
          columns,
          data,
          rowIndex,
          depth,
        })
      }

      return cells()
    }

    return () => {
      const { variant, class: kls } = props
      h(
        variant as VNode,
        {
          ref: rowRef,
          class: kls,
        },
        [row()]
      )
    }
  },
})
