<template>
  <el-checkbox
    v-model="checkAll"
    :indeterminate="isIndeterminate"
    @change="handleCheckAllChange"
  >
    Check all
  </el-checkbox>
  <el-checkbox-group
    v-model="checkedCities"
    @change="handleCheckedCitiesChange"
  >
    <el-checkbox v-for="city in cities" :key="city" :label="city" :value="city">
      {{ city }}
    </el-checkbox>
  </el-checkbox-group>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import type { CheckboxValueType } from 'element-plus'

const checkAll = ref(false)
const isIndeterminate = ref(true)
const checkedCities = ref(['Shanghai', 'Beijing'])
const cities = ['Shanghai', 'Beijing', 'Guangzhou', 'Shenzhen']

const handleCheckAllChange = (val: CheckboxValueType) => {
  checkedCities.value = val ? cities : []
  isIndeterminate.value = false
}
const handleCheckedCitiesChange = (value: CheckboxValueType[]) => {
  const checkedCount = value.length
  checkAll.value = checkedCount === cities.length
  isIndeterminate.value = checkedCount > 0 && checkedCount < cities.length
}
</script>
