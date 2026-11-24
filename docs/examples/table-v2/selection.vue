<template>
  <div style="height: 400px">
    <el-auto-resizer>
      <template #default="{ height, width }">
        <el-table-v2
          :columns="columns"
          :data="data"
          :width="width"
          :height="height"
          fixed
        />
      </template>
    </el-auto-resizer>
  </div>
</template>

<script lang="tsx" setup>
import { ref, unref } from 'vue'
import { ElCheckbox, useLocale } from 'element-plus'

import type { FunctionalComponent } from 'vue'
import type { CheckboxValueType, Column } from 'element-plus'

type SelectionCellProps = {
  value: boolean
  intermediate?: boolean
  ariaLabel?: string
  onChange: (value: CheckboxValueType) => void
}

const { t } = useLocale()

const SelectionCell: FunctionalComponent<SelectionCellProps> = ({
  value,
  intermediate = false,
  ariaLabel,
  onChange,
}) => {
  return (
    <ElCheckbox
      onChange={onChange}
      modelValue={value}
      ariaLabel={ariaLabel}
      indeterminate={intermediate}
    />
  )
}

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
        checked: false,
        parentId: null,
      }
    )
  })

const columns: Column<any>[] = generateColumns(10)
columns.unshift({
  key: 'selection',
  width: 50,
  cellRenderer: ({ rowData }) => {
    const onChange = (value: CheckboxValueType) => (rowData.checked = value)
    return (
      <SelectionCell
        value={rowData.checked}
        ariaLabel={t('el.table.selectRowLabel')}
        onChange={onChange}
      />
    )
  },

  headerCellRenderer: () => {
    const _data = unref(data)
    const onChange = (value: CheckboxValueType) =>
      (data.value = _data.map((row) => {
        row.checked = value
        return row
      }))
    const allSelected = _data.every((row) => row.checked)
    const containsChecked = _data.some((row) => row.checked)

    return (
      <SelectionCell
        value={allSelected}
        intermediate={containsChecked && !allSelected}
        ariaLabel={t('el.table.selectAllLabel')}
        onChange={onChange}
      />
    )
  },
})

const data = ref(generateData(columns, 200))
</script>
