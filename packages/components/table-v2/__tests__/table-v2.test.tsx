import { h, nextTick, ref } from 'vue'
import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import TableV2 from '../src/table-v2'
import type {
  TableV2HeaderRowCellRendererParams,
  TableV2RowCellRenderParam,
} from '../src/components'

const generateColumns = (length = 10, prefix = 'column-', props?: any) =>
  Array.from({ length }).map((_, columnIndex) => ({
    ...props,
    key: `${prefix}${columnIndex}`,
    dataKey: `${prefix}${columnIndex}`,
    title: `Column ${columnIndex}`,
    width: 150,
  }))

const generateData = (
  columns: ReturnType<typeof generateColumns>,
  length = 200,
  prefix = 'row-'
) =>
  Array.from({ length }).map((_, rowIndex) => {
    return columns.reduce(
      (rowData, column, columnIndex) => {
        rowData[column.dataKey] = `Row ${rowIndex} - Col ${columnIndex}`
        return rowData
      },
      {
        id: `${prefix}${rowIndex}`,
        parentId: null,
      }
    )
  })

describe('TableV2.vue', () => {
  test('slots cell', async () => {
    const columns = ref(generateColumns(10))
    const data = ref(generateData(columns.value, 20))
    const customText = 'custom cell'
    const wrapper = mount(() => (
      <TableV2
        columns={columns.value}
        data={data.value}
        width={700}
        height={400}
        v-slots={{
          cell: ({ columnIndex, rowIndex }: TableV2RowCellRenderParam) =>
            columnIndex === 0 && rowIndex === 0 ? (
              <span>{customText}</span>
            ) : null,
        }}
      />
    ))
    expect(wrapper.find('.el-table-v2').exists()).toBe(true)
    const cell = wrapper.findAll('.el-table-v2__row-cell')

    expect(cell[0].find('.el-table-v2__cell-text').exists()).toBe(false)
    expect(cell[0].find('span').exists()).toBe(true)
    expect(cell[0].find('span').text()).toBe(customText)

    expect(cell[1].find('span').exists()).toBe(false)
    expect(cell[1].find('.el-table-v2__cell-text').exists()).toBe(true)
    expect(cell[1].find('.el-table-v2__cell-text').text()).toBe('Row 0 - Col 1')
  })

  test('slots header-cell', async () => {
    const columns = ref(generateColumns(10))
    const data = ref(generateData(columns.value, 20))
    const customText = 'header'
    const wrapper = mount(() => (
      <TableV2
        columns={columns.value}
        data={data.value}
        width={700}
        height={400}
        v-slots={{
          'header-cell': ({
            columnIndex,
          }: TableV2HeaderRowCellRendererParams) =>
            columnIndex === 0 ? <span>{customText}</span> : null,
        }}
      />
    ))
    expect(wrapper.find('.el-table-v2').exists()).toBe(true)
    const cell = wrapper.findAll('.el-table-v2__header-cell')
    expect(cell[0].find('.el-table-v2__header-cell-text').exists()).toBe(false)
    expect(cell[0].find('span').exists()).toBe(true)
    expect(cell[0].find('span').text()).toBe(customText)

    expect(cell[1].find('span').exists()).toBe(false)
    expect(cell[1].find('.el-table-v2__header-cell-text').exists()).toBe(true)
    expect(cell[1].find('.el-table-v2__header-cell-text').text()).toBe(
      'Column 1'
    )
  })

  test('slots empty', async () => {
    const columns = ref(generateColumns(3))
    const data = ref(generateData(columns.value, 0))
    const isCustomEmpty = ref(true)
    const wrapper = mount(() => (
      <TableV2
        columns={columns.value}
        data={data.value}
        width={700}
        height={400}
        v-slots={{
          empty: () =>
            isCustomEmpty.value ? (
              <span class="custom-empty">custom-empty</span>
            ) : null,
        }}
      />
    ))
    expect(wrapper.find('.el-table-v2').exists()).toBe(true)
    let customEmpty = wrapper.find('span.custom-empty')
    expect(customEmpty.exists()).toBe(true)
    let defaultEmpty = wrapper.find('.el-empty')
    expect(defaultEmpty.exists()).toBe(false)

    isCustomEmpty.value = false
    await nextTick()

    customEmpty = wrapper.find('span.custom-empty')
    expect(customEmpty.exists()).toBe(false)
    defaultEmpty = wrapper.find('.el-empty')
    expect(defaultEmpty.exists()).toBe(true)
  })

  test('slots cell scope', async () => {
    const columns = ref(generateColumns(10))
    const data = ref(generateData(columns.value, 20))
    const customText = 'custom cell'
    const wrapper = mount(() => (
      <TableV2
        columns={columns.value}
        data={data.value}
        width={700}
        height={400}
        v-slots={{
          cell: (scope: TableV2RowCellRenderParam) => (
            <span>
              {scope.rowData[scope.column.dataKey!]}
              {customText}
            </span>
          ),
        }}
      />
    ))
    expect(wrapper.find('.el-table-v2').exists()).toBe(true)
    const cell = wrapper.find('.el-table-v2__row-cell')
    expect(cell.exists()).toBe(true)
    expect(cell.find('span').text()).toBe(
      `${data.value[0][columns.value[0].dataKey]}${customText}`
    )
  })

  test('slots header-cell scope', async () => {
    const columns = ref(generateColumns(10))
    const data = ref(generateData(columns.value, 20))
    const customText = 'header'
    const wrapper = mount(() => (
      <TableV2
        columns={columns.value}
        data={data.value}
        width={700}
        height={400}
        v-slots={{
          'header-cell': (scope: TableV2HeaderRowCellRendererParams) => (
            <span>
              {scope.column.title}
              {customText}
            </span>
          ),
        }}
      />
    ))
    expect(wrapper.find('.el-table-v2').exists()).toBe(true)
    const cell = wrapper.find('.el-table-v2__header-cell')
    expect(cell.exists()).toBe(true)
    expect(cell.find('span').text()).toBe(
      `${columns.value[0].title}${customText}`
    )
  })

  test('expandable mode wrongly enabled, by column not key', async () => {
    const columns = ref([
      {
        width: 50,
        title: 'd',
        cellRenderer: ({ rowIndex }: { rowIndex: number }) => {
          return h('span', null, rowIndex)
        },
      },
      {
        width: 50,
        title: 'd',
        key: 'expandColumnKey',
        cellRenderer: ({ rowIndex }: { rowIndex: number }) => {
          return h('span', null, rowIndex)
        },
      },
    ])
    const data = ref(generateData(columns.value, 20))
    const wrapper = mount(() => (
      <TableV2
        columns={columns.value}
        data={data.value}
        width={700}
        height={400}
      />
    ))
    expect(wrapper.find('.el-table-v2').exists()).toBe(true)
    const cell = wrapper.find('.el-table-v2__row-cell')
    expect(cell.exists()).toBe(true)
    expect(cell.find('div [style^=margin-inline-star]').exists()).toBe(false)
  })
})
