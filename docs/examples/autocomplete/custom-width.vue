<template>
  <div class="flex flex-wrap gap-4">
    <div>
      <p>Content width</p>
      <el-autocomplete
        v-model="values.auto"
        :fetch-suggestions="querySearch"
        :fit-input-width="false"
        virtual-scroll
        placeholder="Automatic width"
        style="width: 200px"
      />
    </div>
    <div>
      <p>Input width</p>
      <el-autocomplete
        v-model="values.fit"
        :fetch-suggestions="querySearch"
        fit-input-width
        virtual-scroll
        placeholder="Fit input width"
        style="width: 200px"
      />
    </div>
    <div>
      <p>Fixed width with custom content</p>
      <el-autocomplete
        v-model="values.fixed"
        :fetch-suggestions="querySearch"
        :fit-input-width="400"
        virtual-scroll
        placeholder="Fixed width (400px)"
        style="width: 200px"
      >
        <template #default="{ item }">
          <span>{{ item.value }} (Custom content)</span>
        </template>
      </el-autocomplete>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'

const values = reactive({ auto: '', fit: '', fixed: '' })
const suggestions = Array.from({ length: 1000 }, (_, index) => ({
  value: `Long suggestion content for Item ${index + 1}`,
}))

const querySearch = (query: string) =>
  suggestions.filter((item) =>
    item.value.toLowerCase().includes(query.toLowerCase())
  )
</script>
