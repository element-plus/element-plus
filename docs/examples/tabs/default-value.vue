<template>
  <el-tabs
    v-model="activeName"
    class="demo-tabs"
    default-value="third"
    @tab-click="handleClick"
  >
    <el-tab-pane
      v-for="tab in tabs"
      :key="tab.name"
      :label="tab.label"
      :name="tab.name"
    >
      default-value: third
      <br />
      active: {{ activeName }}
    </el-tab-pane>
  </el-tabs>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

import type { TabsPaneContext } from 'element-plus'

const tabs = ref([
  { label: 'User', name: 'first' },
  { label: 'Config', name: 'second' },
  { label: 'Role', name: 'third' },
  { label: 'Task', name: 'fourth' },
])

const activeName = ref()

const handleClick = (tab: TabsPaneContext, event: Event) => {
  console.log(tab, event)
}
</script>

<style>
.demo-tabs > .el-tabs__content {
  padding: 32px;
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
}
</style>
