<template>
  <el-switch
    v-model="isCollapsible"
    active-text="enable"
    inactive-text="disable"
    inline-prompt
    class="mb-2"
  />
  <div
    style="height: 250px; box-shadow: var(--el-border-color-light) 0px 0px 10px"
  >
    <el-splitter>
      <el-splitter-panel :collapsible="isCollapsible" min="50">
        <div class="demo-panel">1</div>
      </el-splitter-panel>
      <el-splitter-panel :collapsible="isCollapsible">
        <div class="demo-panel">2</div>
      </el-splitter-panel>
      <el-splitter-panel>
        <div class="demo-panel">3</div>
      </el-splitter-panel>
      <el-splitter-panel :collapsible="isCollapsible">
        <el-splitter layout="vertical">
          <el-splitter-panel :collapsible="isCollapsible">
            <div class="demo-panel">4</div>
          </el-splitter-panel>
          <el-splitter-panel :collapsible="isCollapsible">
            <div class="demo-panel">5</div>
          </el-splitter-panel>
        </el-splitter>
      </el-splitter-panel>
    </el-splitter>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const isCollapsible = ref(true)
</script>

<style scoped>
.demo-panel {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}
</style>
