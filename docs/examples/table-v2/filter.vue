<template>
  <el-table-v2
    fixed
    :columns="fixedColumns"
    :data="data"
    :width="700"
    :height="400"
  />
</template>

<script lang="tsx" setup>
import { computed, ref } from 'vue'
import {
  ElButton,
  ElCheckbox,
  ElIcon,
  ElPopover,
  TableV2FixedDir,
  useLocale,
} from 'element-plus'
import { Filter } from '@element-plus/icons-vue'

import type { HeaderCellSlotProps } from 'element-plus'

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
const columns = generateColumns(10)
const data = ref(generateData(columns, 200))

const { t } = useLocale()
const shouldFilter = ref(false)
const popoverRef = ref()

const ariaLabel = computed(() => {
  return t('el.table.filterLabel', { column: columns[0].title })
})

const onFilter = () => {
  popoverRef.value.hide()
  if (shouldFilter.value) {
    data.value = generateData(columns, 100, 'filtered-')
  } else {
    data.value = generateData(columns, 200)
  }
}

const onReset = () => {
  shouldFilter.value = false
  onFilter()
}

const handleShowPopover = () => {
  const button = document.querySelector('.el-table-v2__demo-filter button')
  ;(button as HTMLElement)?.focus()
}

columns[0].headerCellRenderer = (props: HeaderCellSlotProps) => {
  return (
    <div class="flex items-center justify-center">
      <span class="mr-2 text-xs">{props.column.title}</span>
      <ElPopover
        ref={popoverRef}
        trigger="click"
        width={200}
        onAfter-enter={handleShowPopover}
      >
        {{
          default: () => (
            <div class="filter-wrapper">
              <div class="filter-group">
                <ElCheckbox v-model={shouldFilter.value}>
                  Filter Text
                </ElCheckbox>
              </div>
              <div class="el-table-v2__demo-filter">
                <ElButton text onClick={onFilter}>
                  Confirm
                </ElButton>
                <ElButton text onClick={onReset}>
                  Reset
                </ElButton>
              </div>
            </div>
          ),
          reference: () => (
            <button
              type="button"
              aria-label={ariaLabel.value}
              class="el-table-v2__demo-filter-btn"
            >
              <ElIcon size={14}>
                <Filter />
              </ElIcon>
            </button>
          ),
        }}
      </ElPopover>
    </div>
  )
}

const fixedColumns = columns.map((column, columnIndex) => {
  let fixed: TableV2FixedDir | undefined = undefined
  if (columnIndex < 2) fixed = TableV2FixedDir.LEFT
  if (columnIndex > 9) fixed = TableV2FixedDir.RIGHT
  return { ...column, fixed, width: 100 }
})
</script>

<style>
.el-table-v2__demo-filter {
  border-top: var(--el-border);
  margin: 12px -12px -12px;
  padding: 0 12px;
  display: flex;
  justify-content: space-between;
}
.el-table-v2__demo-filter-btn {
  display: flex;
  cursor: pointer;
  padding: 0;
  margin: 0;
  background-color: transparent;
  appearance: none;
  border: none;
}
</style>
