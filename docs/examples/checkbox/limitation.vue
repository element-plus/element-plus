<template>
  <el-checkbox-group v-model="checkedCities" :min="1" :max="2">
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
      checkedCities: ['Shanghai', 'Beijing'],
      cities: cityOptions,
    })

    return toRefs(state)
  },
})
</script>
