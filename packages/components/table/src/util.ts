// @ts-nocheck
import { createVNode, isVNode, render } from 'vue'
import { flatMap, get, isNull, merge } from 'lodash-unified'
import {
  getProp,
  hasOwn,
  isArray,
  isBoolean,
  isFunction,
  isNumber,
  isObject,
  isString,
  isUndefined,
  throwError,
} from '@element-plus/utils'
import ElTooltip, {
  type ElTooltipProps,
} from '@element-plus/components/tooltip'
import type { Table, TreeProps } from './table/defaults'
import type { TableColumnCtx } from './table-column/defaults'
import type { VNode } from 'vue'

export type TableOverflowTooltipOptions = Partial<
  Pick<
    ElTooltipProps,
    | 'appendTo'
    | 'effect'
    | 'enterable'
    | 'hideAfter'
    | 'offset'
    | 'placement'
    | 'popperClass'
    | 'popperOptions'
    | 'showAfter'
    | 'showArrow'
    | 'transition'
  >
>

export type TableOverflowTooltipFormatter<T = any> = (data: {
  row: T
  column: TableColumnCtx<T>
  cellValue
}) => VNode | string

type RemovePopperFn = (() => void) & {
  trigger?: HTMLElement
  vm?: VNode
}

export const getCell = function (event: Event) {
  return (event.target as HTMLElement)?.closest('td')
}

export const orderBy = function <T>(
  array: T[],
  sortKey: string,
  reverse: string | number,
  sortMethod,
  sortBy: string | (string | ((a: T, b: T, array?: T[]) => number))[]
) {
  if (
    !sortKey &&
    !sortMethod &&
    (!sortBy || (isArray(sortBy) && !sortBy.length))
  ) {
    return array
  }
  if (isString(reverse)) {
    reverse = reverse === 'descending' ? -1 : 1
  } else {
    reverse = reverse && reverse < 0 ? -1 : 1
  }
  const getKey = sortMethod
    ? null
    : function (value, index) {
        if (sortBy) {
          if (!isArray(sortBy)) {
            sortBy = [sortBy]
          }
          return sortBy.map((by) => {
            if (isString(by)) {
              return get(value, by)
            } else {
              return by(value, index, array)
            }
          })
        }
        if (sortKey !== '$key') {
          if (isObject(value) && '$value' in value) value = value.$value
        }
        return [isObject(value) ? get(value, sortKey) : value]
      }
  const compare = function (a, b) {
    if (sortMethod) {
      return sortMethod(a.value, b.value)
    }
    for (let i = 0, len = a.key.length; i < len; i++) {
      if (a.key[i] < b.key[i]) {
        return -1
      }
      if (a.key[i] > b.key[i]) {
        return 1
      }
    }
    return 0
  }
  return array
    .map((value, index) => {
      return {
        value,
        index,
        key: getKey ? getKey(value, index) : null,
      }
    })
    .sort((a, b) => {
      let order = compare(a, b)
      if (!order) {
        // make stable https://en.wikipedia.org/wiki/Sorting_algorithm#Stability
        order = a.index - b.index
      }
      return order * +reverse
    })
    .map((item) => item.value)
}

export const getColumnById = function <T>(
  table: {
    columns: TableColumnCtx<T>[]
  },
  columnId: string
): null | TableColumnCtx<T> {
  let column = null
  table.columns.forEach((item) => {
    if (item.id === columnId) {
      column = item
    }
  })
  return column
}

export const getColumnByKey = function <T>(
  table: {
    columns: TableColumnCtx<T>[]
  },
  columnKey: string
): TableColumnCtx<T> {
  let column = null
  for (let i = 0; i < table.columns.length; i++) {
    const item = table.columns[i]
    if (item.columnKey === columnKey) {
      column = item
      break
    }
  }
  if (!column)
    throwError('ElTable', `No column matching with column-key: ${columnKey}`)
  return column
}

export const getColumnByCell = function <T>(
  table: {
    columns: TableColumnCtx<T>[]
  },
  cell: HTMLElement,
  namespace: string
): null | TableColumnCtx<T> {
  const matches = (cell.className || '').match(
    new RegExp(`${namespace}-table_[^\\s]+`, 'gm')
  )
  if (matches) {
    return getColumnById(table, matches[0])
  }
  return null
}

export const getRowIdentity = <T>(
  row: T,
  rowKey: string | ((row: T) => any)
): string => {
  if (!row) throw new Error('Row is required when get row identity')
  if (isString(rowKey)) {
    if (!rowKey.includes('.')) {
      return `${row[rowKey]}`
    }
    const key = rowKey.split('.')
    let current = row
    for (const element of key) {
      current = current[element]
    }
    return `${current}`
  } else if (isFunction(rowKey)) {
    return rowKey.call(null, row)
  }
}

export const getKeysMap = function <T>(
  array: T[],
  rowKey: string
): Record<string, { row: T; index: number }> {
  const arrayMap = {}
  ;(array || []).forEach((row, index) => {
    arrayMap[getRowIdentity(row, rowKey)] = { row, index }
  })
  return arrayMap
}

export function mergeOptions<T, K>(defaults: T, config: K): T & K {
  const options = {} as T & K
  let key
  for (key in defaults) {
    options[key] = defaults[key]
  }
  for (key in config) {
    if (hasOwn(config as unknown as Record<string, any>, key)) {
      const value = config[key]
      if (!isUndefined(value)) {
        options[key] = value
      }
    }
  }
  return options
}

export function parseWidth(width: number | string): number | string {
  if (width === '') return width
  if (!isUndefined(width)) {
    width = Number.parseInt(width as string, 10)
    if (Number.isNaN(width)) {
      width = ''
    }
  }
  return width
}

export function parseMinWidth(minWidth: number | string): number | string {
  if (minWidth === '') return minWidth
  if (!isUndefined(minWidth)) {
    minWidth = parseWidth(minWidth)
    if (Number.isNaN(minWidth)) {
      minWidth = 80
    }
  }
  return minWidth
}

export function parseHeight(height: number | string) {
  if (isNumber(height)) {
    return height
  }
  if (isString(height)) {
    if (/^\d+(?:px)?$/.test(height)) {
      return Number.parseInt(height, 10)
    } else {
      return height
    }
  }
  return null
}

// https://github.com/reduxjs/redux/blob/master/src/compose.js
export function compose(...funcs) {
  if (funcs.length === 0) {
    return (arg) => arg
  }
  if (funcs.length === 1) {
    return funcs[0]
  }
  return funcs.reduce(
    (a, b) =>
      (...args) =>
        a(b(...args))
  )
}

export function toggleRowStatus<T>(
  statusArr: T[],
  row: T,
  newVal?: boolean,
  tableTreeProps?: TreeProps,
  selectable?: (row: T, index?: number) => boolean,
  rowIndex?: number
): boolean {
  let _rowIndex = rowIndex ?? 0
  let changed = false
  const index = statusArr.indexOf(row)
  const included = index !== -1
  const isRowSelectable = selectable?.call(null, row, _rowIndex)

  const toggleStatus = (type: 'add' | 'remove') => {
    if (type === 'add') {
      statusArr.push(row)
    } else {
      statusArr.splice(index, 1)
    }
    changed = true
  }
  const getChildrenCount = (row: T) => {
    let count = 0
    const children = tableTreeProps?.children && row[tableTreeProps.children]
    if (children && isArray(children)) {
      count += children.length
      children.forEach((item) => {
        count += getChildrenCount(item)
      })
    }
    return count
  }

  if (!selectable || isRowSelectable) {
    if (isBoolean(newVal)) {
      if (newVal && !included) {
        toggleStatus('add')
      } else if (!newVal && included) {
        toggleStatus('remove')
      }
    } else {
      included ? toggleStatus('remove') : toggleStatus('add')
    }
  }

  if (
    !tableTreeProps?.checkStrictly &&
    tableTreeProps?.children &&
    isArray(row[tableTreeProps.children])
  ) {
    row[tableTreeProps.children].forEach((item) => {
      const childChanged = toggleRowStatus(
        statusArr,
        item,
        newVal ?? !included,
        tableTreeProps,
        selectable,
        _rowIndex + 1
      )
      _rowIndex += getChildrenCount(item) + 1
      if (childChanged) {
        changed = childChanged
      }
    })
  }
  return changed
}

export function walkTreeNode(
  root,
  cb,
  childrenKey = 'children',
  lazyKey = 'hasChildren'
) {
  const isNil = (array) => !(isArray(array) && array.length)

  function _walker(parent, children, level) {
    cb(parent, children, level)
    children.forEach((item) => {
      if (item[lazyKey]) {
        cb(item, null, level + 1)
        return
      }
      const children = item[childrenKey]
      if (!isNil(children)) {
        _walker(item, children, level + 1)
      }
    })
  }

  root.forEach((item) => {
    if (item[lazyKey]) {
      cb(item, null, 0)
      return
    }
    const children = item[childrenKey]
    if (!isNil(children)) {
      _walker(item, children, 0)
    }
  })
}

const getTableOverflowTooltipProps = (
  props: TableOverflowTooltipOptions,
  innerText: string,
  row: T,
  column: TableColumnCtx<T>
) => {
  // merge popperOptions
  const popperOptions = {
    strategy: 'fixed',
    ...props.popperOptions,
  }

  const tooltipFormatterContent = isFunction(column.tooltipFormatter)
    ? column.tooltipFormatter({
        row,
        column,
        cellValue: getProp(row, column.property).value,
      })
    : undefined

  if (isVNode(tooltipFormatterContent)) {
    return {
      slotContent: tooltipFormatterContent,
      content: null,
      ...props,
      popperOptions,
    }
  }

  return {
    slotContent: null,
    content: tooltipFormatterContent ?? innerText,
    ...props,
    popperOptions,
  }
}

export let removePopper: RemovePopperFn | null = null

export function createTablePopper(
  props: TableOverflowTooltipOptions,
  popperContent: string,
  row: T,
  column: TableColumnCtx<T>,
  trigger: HTMLElement,
  table: Table<[]>
) {
  const tableOverflowTooltipProps = getTableOverflowTooltipProps(
    props,
    popperContent,
    row,
    column
  )
  const mergedProps = {
    ...tableOverflowTooltipProps,
    slotContent: undefined,
  }
  if (removePopper?.trigger === trigger) {
    const comp = removePopper!.vm.component
    merge(comp.props, mergedProps)
    if (tableOverflowTooltipProps.slotContent) {
      comp.slots.content = () => [tableOverflowTooltipProps.slotContent]
    }
    return
  }
  removePopper?.()
  const parentNode = table?.refs.tableWrapper
  const ns = parentNode?.dataset.prefix
  const vm = createVNode(
    ElTooltip,
    {
      virtualTriggering: true,
      virtualRef: trigger,
      appendTo: parentNode,
      placement: 'top',
      transition: 'none', // Default does not require transition
      offset: 0,
      hideAfter: 0,
      ...mergedProps,
    },
    tableOverflowTooltipProps.slotContent
      ? {
          content: () => tableOverflowTooltipProps.slotContent,
        }
      : undefined
  )
  vm.appContext = { ...table.appContext, ...table }
  const container = document.createElement('div')
  render(vm, container)
  vm.component!.exposed!.onOpen()
  const scrollContainer = parentNode?.querySelector(`.${ns}-scrollbar__wrap`)
  removePopper = () => {
    render(null, container)
    scrollContainer?.removeEventListener('scroll', removePopper!)
    removePopper = null
  }
  removePopper.trigger = trigger
  removePopper.vm = vm
  scrollContainer?.addEventListener('scroll', removePopper)
}

function getCurrentColumns<T>(column: TableColumnCtx<T>): TableColumnCtx<T>[] {
  if (column.children) {
    return flatMap(column.children, getCurrentColumns)
  } else {
    return [column]
  }
}

function getColSpan<T>(colSpan: number, column: TableColumnCtx<T>) {
  return colSpan + column.colSpan
}

export const isFixedColumn = <T>(
  index: number,
  fixed: string | boolean,
  store: any,
  realColumns?: TableColumnCtx<T>[]
) => {
  let start = 0
  let after = index
  const columns = store.states.columns.value
  if (realColumns) {
    // fixed column supported in grouped header
    const curColumns = getCurrentColumns(realColumns[index])
    const preColumns = columns.slice(0, columns.indexOf(curColumns[0]))

    start = preColumns.reduce(getColSpan, 0)
    after = start + curColumns.reduce(getColSpan, 0) - 1
  } else {
    start = index
  }
  let fixedLayout
  switch (fixed) {
    case 'left':
      if (after < store.states.fixedLeafColumnsLength.value) {
        fixedLayout = 'left'
      }
      break
    case 'right':
      if (
        start >=
        columns.length - store.states.rightFixedLeafColumnsLength.value
      ) {
        fixedLayout = 'right'
      }
      break
    default:
      if (after < store.states.fixedLeafColumnsLength.value) {
        fixedLayout = 'left'
      } else if (
        start >=
        columns.length - store.states.rightFixedLeafColumnsLength.value
      ) {
        fixedLayout = 'right'
      }
  }
  return fixedLayout
    ? {
        direction: fixedLayout,
        start,
        after,
      }
    : {}
}

export const getFixedColumnsClass = <T>(
  namespace: string,
  index: number,
  fixed: string | boolean,
  store: any,
  realColumns?: TableColumnCtx<T>[],
  offset = 0
) => {
  const classes: string[] = []
  const { direction, start, after } = isFixedColumn(
    index,
    fixed,
    store,
    realColumns
  )
  if (direction) {
    const isLeft = direction === 'left'
    classes.push(`${namespace}-fixed-column--${direction}`)
    if (
      isLeft &&
      after + offset === store.states.fixedLeafColumnsLength.value - 1
    ) {
      classes.push('is-last-column')
    } else if (
      !isLeft &&
      start - offset ===
        store.states.columns.value.length -
          store.states.rightFixedLeafColumnsLength.value
    ) {
      classes.push('is-first-column')
    }
  }
  return classes
}

function getOffset<T>(offset: number, column: TableColumnCtx<T>) {
  return (
    offset +
    (isNull(column.realWidth) || Number.isNaN(column.realWidth)
      ? Number(column.width)
      : column.realWidth)
  )
}

export const getFixedColumnOffset = <T>(
  index: number,
  fixed: string | boolean,
  store: any,
  realColumns?: TableColumnCtx<T>[]
) => {
  const {
    direction,
    start = 0,
    after = 0,
  } = isFixedColumn(index, fixed, store, realColumns)
  if (!direction) {
    return
  }
  const styles: any = {}
  const isLeft = direction === 'left'
  const columns = store.states.columns.value
  if (isLeft) {
    styles.left = columns.slice(0, start).reduce(getOffset, 0)
  } else {
    styles.right = columns
      .slice(after + 1)
      .reverse()
      .reduce(getOffset, 0)
  }
  return styles
}

export const ensurePosition = (style, key: string) => {
  if (!style) return
  if (!Number.isNaN(style[key])) {
    style[key] = `${style[key]}px`
  }
}
