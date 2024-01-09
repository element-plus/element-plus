<template>
  <div class="flex flex-wrap">
    <div class="m-4">
      <p>default</p>
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
          />
        </el-option-group>
      </el-select>
    </div>
    <div class="m-4">
      <p>use slot to customize the option group title</p>
      <el-select v-model="value" placeholder="Select">
        <el-option-group
          v-for="group in options"
          :key="group.label"
          :label="group.label"
        >
          <template #title="{ label, disabled }">
            <div class="flex justify-between">
              <span>{{ label }}</span>
              <span class="mr-4">disabled={{ disabled }}</span>
            </div>
          </template>
          <el-option
            v-for="item in group.options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-option-group>
      </el-select>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const value = ref('')
const options = [
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
]
</script>
