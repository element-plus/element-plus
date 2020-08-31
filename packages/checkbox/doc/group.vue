<template>
  <div class="block">
    <el-checkbox v-model="checkAll" :indeterminate="isIndeterminate" @change="handleCheckAllChange">All Selected</el-checkbox>
    <div style="margin: 15px 0;"></div>
    <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
      <el-checkbox v-for="city in cities" :key="city" :label="city">{{ city }}</el-checkbox>
    </el-checkbox-group>
  </div>
  <div class="block">
    <el-checkbox-group
      v-model="checkedCities"
      :min="1"
      :max="2"
    >
      <el-checkbox v-for="city in cities" :key="city" :label="city">{{ city }}</el-checkbox>
    </el-checkbox-group>
  </div>
  <div class="block">
    <div>
      <el-checkbox-group v-model="checkboxGroup1">
        <el-checkbox-button v-for="city in cities" :key="city" :label="city">{{ city }}</el-checkbox-button>
      </el-checkbox-group>
    </div>
    <div style="margin-top: 20px">
      <el-checkbox-group v-model="checkboxGroup2" size="medium">
        <el-checkbox-button v-for="city in cities" :key="city" :label="city">{{ city }}</el-checkbox-button>
      </el-checkbox-group>
    </div>
    <div style="margin-top: 20px">
      <el-checkbox-group v-model="checkboxGroup3" size="small">
        <el-checkbox-button
          v-for="city in cities"
          :key="city"
          :label="city"
          :disabled="city === 'London'"
        >
          {{ city }}
        </el-checkbox-button>
      </el-checkbox-group>
    </div>
    <div style="margin-top: 20px">
      <el-checkbox-group v-model="checkboxGroup4" :size="size" disabled>
        <el-checkbox-button v-for="city in cities" :key="city" :label="city">{{ city }}</el-checkbox-button>
      </el-checkbox-group>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
const cityOptions = ['NYC', 'London', 'Tokyo', 'Singapore']

export default defineComponent({
  data() {
    return {
      checkAll: false,
      checkedCities: ['NYC', 'London'],
      cities: cityOptions,
      isIndeterminate: true,
      checkboxGroup1: ['NYC'],
      checkboxGroup2: ['NYC'],
      checkboxGroup3: ['NYC'],
      checkboxGroup4: ['NYC'],

      size: 'mini',
    }
  },
  mounted() {
    setTimeout(() => this.size = 'medium', 3000)
  },
  methods: {
    handleCheckAllChange(val) {
      this.checkedCities = val ? cityOptions : []
      this.isIndeterminate = false
    },
    handleCheckedCitiesChange(value) {
      let checkedCount = value.length
      this.checkAll = checkedCount === this.cities.length
      this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length
    },
  },
})
</script>
