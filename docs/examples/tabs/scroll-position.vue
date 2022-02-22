<template>
  <el-radio-group v-model="scrollPosition" style="margin-bottom: 30px">
    <el-radio-button label="auto">auto</el-radio-button>
    <el-radio-button label="start">start</el-radio-button>
    <el-radio-button label="end">end</el-radio-button>
    <el-radio-button label="center">center</el-radio-button>
  </el-radio-group>

  <el-tabs
    :scroll-position="scrollPosition"
    style="height: 200px"
    class="demo-tabs"
  >
    <el-tab-pane v-for="item in 30" :key="item" :label="`Tab ${item}`">
      {{ `Tab ${item}` }}
    </el-tab-pane>
  </el-tabs>
</template>
<script lang="ts" setup>
import { ref } from 'vue'

const scrollPosition = ref('auto')
</script>
