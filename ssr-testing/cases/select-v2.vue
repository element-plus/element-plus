<template>
  <div style="flex: auto">
    <div>
      <el-select-v2
        v-model="value1"
        :options="options"
        placeholder="Please select"
        style="width: 240px; margin-right: 16px; vertical-align: middle"
        allow-create
        filterable
        multiple
        clearable
      />
      <el-select-v2
        v-model="value2"
        :options="options"
        placeholder="Please select"
        style="width: 240px; vertical-align: middle"
        allow-create
        filterable
        clearable
      />
    </div>
    <div>
      <p style="margin-top: 20px; margin-bottom: 8px">
        set reserve-keyword false
      </p>
      <el-select-v2
        v-model="value3"
        :options="options"
        placeholder="Please select"
        style="width: 240px; margin-right: 16px; vertical-align: middle"
        allow-create
        filterable
        multiple
        clearable
        :reserve-keyword="false"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const initials = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']

const value1 = ref([])
const value2 = ref('')
const value3 = ref([])
const options = Array.from({ length: 1000 }).map((_, idx) => ({
  value: `Option ${idx + 1}`,
  label: `${initials[idx % 10]}${idx}`,
}))
</script>
