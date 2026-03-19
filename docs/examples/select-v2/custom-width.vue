<template>
  <div class="flex flex-wrap gap-4 items-center">
    <el-select-v2
      v-model="value"
      :options="options"
      placeholder="Please select"
      style="width: 240px"
      :fit-input-width="false"
    />

    <el-select-v2
      v-model="value"
      :options="options"
      placeholder="Please select"
      style="width: 240px"
      fit-input-width
    />

    <el-select-v2
      v-model="value"
      :options="options"
      placeholder="Please select"
      style="width: 240px"
      :fit-input-width="440"
    >
      <template #default="{ item }">
        <span>{{ item.value + item.label }}</span>
      </template>
    </el-select-v2>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const initials = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']

const value = ref()
const options = Array.from({ length: 1000 }).map((_, idx) => ({
  value: `Option ${idx + 1}`,
  label: `${initials[idx % 10]}${idx}${'-'.repeat(Math.ceil(idx / 25))}`,
}))
</script>
