<template>
  <table-v2 :columns="columns" :data="data" :width="700" :height="400" fixed />
</template>

<script lang="ts" setup>
import TableV2 from '@element-plus/components/table-v2/src/table-v2'
import { generateColumns, generateData } from './utils'

const columns = generateColumns(10)
const data = generateData(columns, 1000)
</script>
