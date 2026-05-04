<template>
  <div>
    <div>
      <el-checkbox v-model="config.showOverflowTooltip">
        showOverflowTooltip
      </el-checkbox>
      <el-select
        v-model="config.tooltipEffect"
        class="ml-5"
        style="max-width: 150px"
      >
        <el-option value="dark" label="dark" />
        <el-option value="light" label="light" />
      </el-select>
    </div>
    <el-divider />
    <el-config-provider :table="config">
      <el-table :data="tableData" style="width: 100%">
        <el-table-column type="selection" width="55" />
        <el-table-column label="Date" width="120">
          <template #default="scope">{{ scope.row.date }}</template>
        </el-table-column>
        <el-table-column property="name" label="Name" width="120" />
        <el-table-column
          property="address"
          label="Address (inherited from config-provider)"
          width="300"
        />
        <el-table-column
          property="address"
          label="Address (explicit false)"
          :show-overflow-tooltip="false"
        />
      </el-table>
    </el-config-provider>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'

import type { TableConfigContext } from 'element-plus'

const config = reactive<TableConfigContext>({
  showOverflowTooltip: true,
  tooltipEffect: 'dark',
})

interface User {
  date: string
  name: string
  address: string
}

const tableData: User[] = [
  {
    date: '2016-05-04',
    name: 'Aleyna Kutzner',
    address: 'Lohrbergstr. 86c, Süd Lilli, Saarland',
  },
  {
    date: '2016-05-03',
    name: 'Helen Jacobi',
    address: '760 A Street, South Frankfield, Illinois',
  },
  {
    date: '2016-05-02',
    name: 'Brandon Deckert',
    address: 'Arnold-Ohletz-Str. 41a, Alt Malinascheid, Thüringen',
  },
  {
    date: '2016-05-01',
    name: 'Margie Smith',
    address: '23618 Windsor Drive, West Ricardoview, Idaho',
  },
]
</script>
