import { ref } from 'vue'
import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import TableV2 from '../src/table-v2'

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
          cell: () => <span>{customText}</span>,
        }}
      />
    ))
    expect(wrapper.find('.el-table-v2').exists()).toBe(true)
    const cell = wrapper.find('.el-table-v2__row-cell')
    expect(cell.exists()).toBe(true)
    expect(cell.find('span').text()).toBe(customText)
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
          'header-cell': () => <span>{customText}</span>,
        }}
      />
    ))
    expect(wrapper.find('.el-table-v2').exists()).toBe(true)
    const cell = wrapper.find('.el-table-v2__header-cell')
    expect(cell.exists()).toBe(true)
    expect(cell.find('span').text()).toBe(customText)
  })
})
