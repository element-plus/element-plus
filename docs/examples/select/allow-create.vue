<template>
  <el-select
    v-model="value"
    multiple
    filterable
    allow-create
    default-first-option
    placeholder="Choose tags for your article"
  >
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value"
    >
    </el-option>
  </el-select>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue'

export default defineComponent({
  setup() {
    return {
      options: ref([
        {
          value: 'HTML',
          label: 'HTML',
        },
        {
          value: 'CSS',
          label: 'CSS',
        },
        {
          value: 'JavaScript',
          label: 'JavaScript',
        },
      ]),
      value: ref([]),
    }
  },
})
</script>
