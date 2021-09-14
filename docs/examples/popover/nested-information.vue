<template>
  <el-popover placement="right" :width="400" trigger="click">
    <template #reference>
      <el-button>Click to activate</el-button>
    </template>
    <el-table :data="gridData">
      <el-table-column
        width="150"
        property="date"
        label="date"
      ></el-table-column>
      <el-table-column
        width="100"
        property="name"
        label="name"
      ></el-table-column>
      <el-table-column
        width="300"
        property="address"
        label="address"
      ></el-table-column>
    </el-table>
  </el-popover>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'

export default defineComponent({
  setup() {
    const state = reactive({
      gridData: [
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
      ],
    })

    return toRefs(state)
  },
})
</script>
