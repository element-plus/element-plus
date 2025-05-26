<template>
  <el-table-v2
    :columns="columns"
    :data="data"
    :sort-by="sort"
    :estimated-row-height="40"
    :width="700"
    :height="400"
    fixed
    @column-sort="onColumnSort"
  />
</template>

<script lang="tsx" setup>
import { ref } from 'vue'
import {
  ElButton,
  ElTag,
  TableV2FixedDir,
  TableV2SortOrder,
} from 'element-plus'
import type { Column, SortBy } from '@element-plus/components/table-v2'

const longText =
  'Quaerat ipsam necessitatibus eum quibusdam est id voluptatem cumque mollitia.'
const midText = 'Corrupti doloremque a quos vero delectus consequatur.'
const shortText = 'Eius optio fugiat.'

const textList = [shortText, midText, longText]

// generate random number in range 0 to 2

let id = 0

const dataGenerator = () => ({
  id: `random-${++id}`,
  name: 'Tom',
  date: '2016-05-03',
  description: textList[Math.floor(Math.random() * 3)],
})

const columns: Column<any>[] = [
  {
    key: 'id',
    title: 'Id',
    dataKey: 'id',
    width: 150,
    sortable: true,
    fixed: TableV2FixedDir.LEFT,
  },
  {
    key: 'name',
    title: 'Name',
    dataKey: 'name',
    width: 150,
    align: 'center',
    cellRenderer: ({ cellData: name }) => <ElTag>{name}</ElTag>,
  },
  {
    key: 'description',
    title: 'Description',
    dataKey: 'description',
    width: 150,
    cellRenderer: ({ cellData: description }) => (
      <div style="padding: 10px 0;">{description}</div>
    ),
  },
  {
    key: 'operations',
    title: 'Operations',
    cellRenderer: () => (
      <>
        <ElButton size="small">Edit</ElButton>
        <ElButton size="small" type="danger">
          Delete
        </ElButton>
      </>
    ),
    width: 150,
    align: 'center',
  },
]
const data = ref(
  Array.from({ length: 200 })
    .map(dataGenerator)
    .sort((a, b) => (a.name > b.name ? 1 : -1))
)

const sort = ref<SortBy>({ key: 'name', order: TableV2SortOrder.ASC })

const onColumnSort = (sortBy: SortBy) => {
  const order = sortBy.order === 'asc' ? 1 : -1
  const dataClone = [...data.value]
  dataClone.sort((a, b) => (a[sortBy.key] > b[sortBy.key] ? order : -order))
  sort.value = sortBy
  data.value = dataClone
}
</script>
