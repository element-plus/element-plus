<template>
  <div class="demo-date-picker">
    <div class="block">
      <span class="demonstration">date</span>
      <el-date-picker
        v-model="value1"
        type="date"
        placeholder="Pick a date"
        :default-value="new Date(2010, 9, 1)"
      >
      </el-date-picker>
    </div>
    <div class="block">
      <span class="demonstration">daterange</span>
      <el-date-picker
        v-model="value2"
        type="daterange"
        start-placeholder="Start Date"
        end-placeholder="End Date"
        :default-value="[new Date(2010, 9, 1), new Date(2010, 10, 1)]"
      >
      </el-date-picker>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const value1 = ref('')
    const value2 = ref('')

    return {
      value1,
      value2,
    }
  },
})
</script>
