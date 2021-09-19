<template>
  <el-checkbox
    v-model="checkAll"
    :indeterminate="isIndeterminate"
    @change="handleCheckAllChange"
    >Check all</el-checkbox
  >
  <el-checkbox-group
    v-model="checkedCities"
    @change="handleCheckedCitiesChange"
  >
    <el-checkbox v-for="city in cities" :key="city" :label="city">{{
      city
    }}</el-checkbox>
  </el-checkbox-group>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'

const cityOptions = ['Shanghai', 'Beijing', 'Guangzhou', 'Shenzhen']

export default defineComponent({
  setup() {
    const state = reactive({
      checkAll: false,
      checkedCities: ['Shanghai', 'Beijing'],
      cities: cityOptions,
      isIndeterminate: true,
    })
    const handleCheckAllChange = (val) => {
      state.checkedCities = val ? cityOptions : []
      state.isIndeterminate = false
    }
    const handleCheckedCitiesChange = (value) => {
      const checkedCount = value.length
      state.checkAll = checkedCount === state.cities.length
      state.isIndeterminate =
        checkedCount > 0 && checkedCount < state.cities.length
    }
    return {
      ...toRefs(state),
      handleCheckAllChange,
      handleCheckedCitiesChange,
    }
  },
})
</script>
