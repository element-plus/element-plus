<template>
  <el-checkbox
    v-model="state.checkAll"
    :indeterminate="state.isIndeterminate"
    @change="handleCheckAllChange"
    >Check all</el-checkbox
  >
  <el-checkbox-group
    v-model="state.checkedCities"
    @change="handleCheckedCitiesChange"
  >
    <el-checkbox v-for="city in cities" :key="city" :label="city">{{
      city
    }}</el-checkbox>
  </el-checkbox-group>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'

const state = reactive({
  checkAll: false,
  checkedCities: ['Shanghai', 'Beijing'],
  isIndeterminate: true,
})

const cities = ['Shanghai', 'Beijing', 'Guangzhou', 'Shenzhen']

const handleCheckAllChange = (val) => {
  state.checkedCities = val ? cities : []
  state.isIndeterminate = false
}
const handleCheckedCitiesChange = (value) => {
  const checkedCount = value.length
  state.checkAll = checkedCount === cities.length
  state.isIndeterminate = checkedCount > 0 && checkedCount < cities.length
}
</script>
