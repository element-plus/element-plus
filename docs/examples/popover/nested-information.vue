<template>
  <el-popover placement="right" :width="400" trigger="click">
    <template #reference>
      <el-button class="mr-2">Click to activate</el-button>
    </template>
    <el-table :data="gridData">
      <el-table-column width="150" property="date" label="date" />
      <el-table-column width="100" property="name" label="name" />
      <el-table-column width="300" property="address" label="address" />
    </el-table>
  </el-popover>
  <el-popover
    :width="300"
    popper-style="box-shadow: rgb(14 18 22 / 35%) 0px 10px 38px -10px, rgb(14 18 22 / 20%) 0px 10px 20px -15px; padding: 20px;"
  >
    <template #reference>
      <el-avatar
        src="https://avatars.githubusercontent.com/u/72015883?v=4"
        class="align-middle"
      />
    </template>
    <template #default>
      <el-space direction="vertical">
        <el-avatar
          :size="60"
          src="https://avatars.githubusercontent.com/u/72015883?v=4"
          class="mb-3"
        />
        <el-text tag="b"> Element Plus </el-text>
        <el-text type="info"> @element-plus </el-text>
        <el-text tag="p">
          Element Plus, a Vue 3 based component library for developers,
          designers and product managers
        </el-text>
      </el-space>
    </template>
  </el-popover>
</template>

<script lang="ts" setup>
const gridData = [
  {
    date: '2016-05-02',
    name: 'Jack',
    address: 'New York City',
  },
  {
    date: '2016-05-04',
    name: 'Jack',
    address: 'New York City',
  },
  {
    date: '2016-05-01',
    name: 'Jack',
    address: 'New York City',
  },
  {
    date: '2016-05-03',
    name: 'Jack',
    address: 'New York City',
  },
]
</script>
