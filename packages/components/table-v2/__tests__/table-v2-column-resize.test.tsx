import { nextTick, ref } from 'vue'
import { mount } from '@vue/test-utils'
import { afterEach, describe, expect, test, vi } from 'vitest'
import TableV2 from '../src/table-v2'

const generateColumns = (length = 3, prefix = 'column-', props?: any) =>
  Array.from({ length }).map((_, columnIndex) => ({
    ...props,
    key: `${prefix}${columnIndex}`,
    dataKey: `${prefix}${columnIndex}`,
    title: `Column ${columnIndex}`,
    width: 150,
  }))

const generateData = (
  columns: ReturnType<typeof generateColumns>,
  length = 5,
  prefix = 'row-'
) =>
  Array.from({ length }).map((_, rowIndex) =>
    columns.reduce(
      (rowData, column) => {
        rowData[column.dataKey] = `Row ${rowIndex} - ${column.dataKey}`
        return rowData
      },
      { id: `${prefix}${rowIndex}` }
    )
  )

const mockRect = (left: number, width: number) =>
  vi
    .spyOn(HTMLElement.prototype, 'getBoundingClientRect')
    .mockImplementation(function (this: HTMLElement) {
      if (this.classList.contains('el-table-v2__root')) {
        return { left: 0, right: 0, width: 0 } as DOMRect
      }
      return { left, right: left + width, width } as DOMRect
    })

const mountTable = (options: Record<string, any> = {}) => {
  const columns = ref(generateColumns(3, 'column-', options.columnProps ?? {}))
  const data = ref(generateData(columns.value, 5))
  const onColumnResize = vi.fn()
  const wrapper = mount(() => (
    <TableV2
      columns={columns.value}
      data={data.value}
      width={700}
      height={400}
      border
      onColumnResize={onColumnResize}
      {...(options.attrs ?? {})}
    />
  ))
  return { wrapper, onColumnResize }
}

const headerCells = (wrapper: ReturnType<typeof mountTable>['wrapper']) =>
  wrapper.find('.el-table-v2__main').findAll('.el-table-v2__header-cell')

describe('TableV2 column resize', () => {
  afterEach(() => {
    vi.restoreAllMocks()
  })

  test('shows col-resize cursor when hovering the right border', async () => {
    const restore = mockRect(0, 150)
    const { wrapper } = mountTable()
    const cell = headerCells(wrapper)[0]
    await cell.trigger('mousemove', { clientX: 148 })
    expect(cell.classes()).toContain('is-resizable')
    restore.mockRestore()
  })

  test('does not activate for non-resizable column', async () => {
    mockRect(0, 150)
    const { wrapper } = mountTable({ columnProps: { resizable: false } })
    const cell = headerCells(wrapper)[0]
    await cell.trigger('mousemove', { clientX: 148 })
    expect(cell.classes()).not.toContain('is-resizable')
  })

  test('does not activate for the last column when disallowed', async () => {
    mockRect(0, 150)
    const { wrapper } = mountTable({ attrs: { allowDragLastColumn: false } })
    const cells = headerCells(wrapper)
    const last = cells[cells.length - 1]
    await last.trigger('mousemove', { clientX: 148 })
    expect(last.classes()).not.toContain('is-resizable')
  })

  test('resizes column width by dragging and emits column-resize', async () => {
    mockRect(0, 150)
    const { wrapper, onColumnResize } = mountTable()
    const cell = headerCells(wrapper)[0]

    await cell.trigger('mousemove', { clientX: 148 })
    await cell.trigger('mousedown', { clientX: 148, button: 0 })
    expect(wrapper.find('.el-table-v2__column-resize-proxy').isVisible()).toBe(
      true
    )

    document.dispatchEvent(new MouseEvent('mousemove', { clientX: 200 }))
    document.dispatchEvent(new MouseEvent('mouseup'))
    await nextTick()

    // startLeft(150) + (200 - 148) = 202, startColumnLeft = 0 => width 202
    expect(onColumnResize).toHaveBeenCalledWith(
      expect.objectContaining({ key: 'column-0' }),
      202,
      150
    )
    expect((headerCells(wrapper)[0].element as HTMLElement).style.width).toBe(
      '202px'
    )
    expect(headerCells(wrapper)[0].classes()).not.toContain('is-resizable')
  })

  test('clamps the new width to maxWidth', async () => {
    mockRect(0, 150)
    const { wrapper, onColumnResize } = mountTable({
      columnProps: { minWidth: 100, maxWidth: 300 },
    })
    const cell = headerCells(wrapper)[0]

    await cell.trigger('mousemove', { clientX: 148 })
    await cell.trigger('mousedown', { clientX: 148, button: 0 })
    document.dispatchEvent(new MouseEvent('mousemove', { clientX: 800 }))
    document.dispatchEvent(new MouseEvent('mouseup'))
    await nextTick()

    expect(onColumnResize).toHaveBeenCalledWith(
      expect.objectContaining({ key: 'column-0' }),
      300,
      150
    )
    expect((headerCells(wrapper)[0].element as HTMLElement).style.width).toBe(
      '300px'
    )
  })
})
