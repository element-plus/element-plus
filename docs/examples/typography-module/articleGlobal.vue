<template>
  <div>
    <el-typography
      :copyable="{
        tooltip: true,
        text: () => '111',
        triggerText: 'redefine',
      }"
    >
      <el-base> I accepted global copy instructions 1 </el-base>
      <el-paragraph color="red">
        <el-base> I accepted global copy instructions 2 </el-base>
      </el-paragraph>
    </el-typography>
    <el-typography
      :editable="{
        tooltipContent: 'happy',
        triggerType: 'text',
        triggerText: 'redefine',
        icon: Search,
      }"
    >
      <el-base> I accepted global copy instructions 1 </el-base>
      <el-paragraph color="red">
        <el-base> I accepted global copy instructions 2 </el-base>
      </el-paragraph>
    </el-typography>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Delete, Edit, Search, Share } from '@element-plus/icons-vue'
import { ElBase, ElParagraph, ElTypography } from '@element-plus/components'
import '@element-plus/theme-chalk/src/index.scss'
</script>

<style lang="scss"></style>
