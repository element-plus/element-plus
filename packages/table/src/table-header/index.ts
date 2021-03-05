import {
  defineComponent,
  getCurrentInstance,
  computed,
  onMounted,
  nextTick,
  ref,
  h,
} from 'vue'
import ElCheckbox from '@element-plus/checkbox'
import FilterPanel from '../filter-panel.vue'
import useLayoutObserver from '../layout-observer'
import useEvent from './event-helper'
import useStyle from './style.helper'
import useUtils from './utils-helper'
import { hColgroup } from '../h-helper'
import { Table, TableHeader } from '../table.type'
import { TableHeaderProps } from './table-header'

export default defineComponent({
  name: 'ElTableHeader',
  components: {
    ElCheckbox,
  },
  props: {
    fixed: {
      type: String,
      default: '',
    },
    store: {
      required: true,
      type: Object,
    },
    border: Boolean,
    defaultSort: {
      type: Object,
      default() {
        return {
          prop: '',
          order: '',
        }
      },
    },
  },
  setup(props: TableHeaderProps, { emit }) {
    const instance = getCurrentInstance() as TableHeader
    const parent = instance.parent as Table
    const storeData = parent.store.states
    const filterPanels = ref({})
    const {
      tableLayout,
      onColumnsChange,
      onScrollableChange,
    } = useLayoutObserver(parent)
    const hasGutter = computed(() => {
      return !props.fixed && tableLayout.gutterWidth
    })
    onMounted(() => {
      nextTick(() => {
        const { prop, order } = props.defaultSort
        const init = true
        parent.store.commit('sort', { prop, order, init })
      })
    })
    const {
      handleHeaderClick,
      handleHeaderContextMenu,
      handleMouseDown,
      handleMouseMove,
      handleMouseOut,
      handleSortClick,
      handleFilterClick,
    } = useEvent(props, emit)
    const {
      getHeaderRowStyle,
      getHeaderRowClass,
      getHeaderCellStyle,
      getHeaderCellClass,
    } = useStyle(props)
    const { isGroup, toggleAllSelection, columnRows } = useUtils(props)

    instance.state = {
      onColumnsChange,
      onScrollableChange,
    }
    // eslint-disable-next-line
    instance.filterPanels = filterPanels

    return {
      columns: storeData.columns,
      filterPanels,
      hasGutter,
      onColumnsChange,
      onScrollableChange,
      columnRows,
      getHeaderRowClass,
      getHeaderRowStyle,
      getHeaderCellClass,
      getHeaderCellStyle,
      handleHeaderClick,
      handleHeaderContextMenu,
      handleMouseDown,
      handleMouseMove,
      handleMouseOut,
      handleSortClick,
      handleFilterClick,
      isGroup,
      toggleAllSelection,
    }
  },
  render() {
    return h(
      'table',
      {
        border: '0',
        cellpadding: '0',
        cellspacing: '0',
        class: 'el-table__header',
      },
      [
        hColgroup(this.columns, this.hasGutter),
        h(
          'thead',
          {
            class: { 'is-group': this.isGroup, 'has-gutter': this.hasGutter },
          },
          this.columnRows.map((subColumns, rowIndex) =>
            h(
              'tr',
              {
                class: this.getHeaderRowClass(rowIndex),
                key: rowIndex,
                style: this.getHeaderRowStyle(rowIndex),
              },
              subColumns.map((column, cellIndex) =>
                h(
                  'th',
                  {
                    class: this.getHeaderCellClass(
                      rowIndex,
                      cellIndex,
                      subColumns,
                      column,
                    ),
                    colspan: column.colSpan,
                    key: `${column.id}-thead`,
                    rowSpan: column.rowSpan,
                    style: this.getHeaderCellStyle(
                      rowIndex,
                      cellIndex,
                      subColumns,
                      column,
                    ),
                    onClick: $event => this.handleHeaderClick($event, column),
                    onContextmenu: $event =>
                      this.handleHeaderContextMenu($event, column),
                    onMousedown: $event => this.handleMouseDown($event, column),
                    onMousemove: $event => this.handleMouseMove($event, column),
                    onMouseout: this.handleMouseOut,
                  },
                  [
                    h(
                      'div',
                      {
                        class: [
                          'cell',
                          column.filteredValue &&
                          column.filteredValue.length > 0
                            ? 'highlight'
                            : '',
                          column.labelClassName,
                        ],
                      },
                      [
                        column.renderHeader
                          ? column.renderHeader({
                            column,
                            $index: cellIndex,
                            store: this.store,
                            _self: this.$parent,
                          })
                          : column.label,
                        column.sortable &&
                          h(
                            'span',
                            {
                              onClick: $event =>
                                this.handleSortClick($event, column),
                              class: 'caret-wrapper',
                            },
                            [
                              h('i', {
                                onClick: $event =>
                                  this.handleSortClick(
                                    $event,
                                    column,
                                    'ascending',
                                  ),
                                class: 'sort-caret ascending',
                              }),
                              h('i', {
                                onClick: $event =>
                                  this.handleSortClick(
                                    $event,
                                    column,
                                    'descending',
                                  ),
                                class: 'sort-caret descending',
                              }),
                            ],
                          ),
                        column.filterable &&
                          h(FilterPanel, {
                            store: this.$parent.store,
                            placement: column.filterPlacement || 'bottom-start',
                            column: column,
                            upDataColumn: (key, value) => {
                              column[key] = value
                            },
                          }),
                      ],
                    ),
                  ],
                ),
              ),
            ),
          ),
        ),
      ],
    )
  },
})
