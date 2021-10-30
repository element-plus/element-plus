<template>
  <el-select v-model="value" placeholder="Select">
    <el-option-group
      v-for="group in options"
      :key="group.label"
      :label="group.label"
    >
      <el-option
        v-for="item in group.options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      >
      </el-option>
    </el-option-group>
  </el-select>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue'

export default defineComponent({
  setup() {
    return {
      options: ref([
        {
          label: 'Popular cities',
          options: [
            {
              value: 'Shanghai',
              label: 'Shanghai',
            },
            {
              value: 'Beijing',
              label: 'Beijing',
            },
          ],
        },
        {
          label: 'City name',
          options: [
            {
              value: 'Chengdu',
              label: 'Chengdu',
            },
            {
              value: 'Shenzhen',
              label: 'Shenzhen',
            },
            {
              value: 'Guangzhou',
              label: 'Guangzhou',
            },
            {
              value: 'Dalian',
              label: 'Dalian',
            },
          ],
        },
      ]),
      value: ref(''),
    }
  },
})
</script>
