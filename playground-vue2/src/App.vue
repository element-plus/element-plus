<script setup lang="ts">
import Vue from 'vue'
import { ElTag } from 'element-plus/es/components/tag'
import 'element-plus/es/components/tag/style/index'

import { ElButton } from 'element-plus/es/components/button'
import 'element-plus/es/components/button/style/index'

import { ElCard } from 'element-plus/es/components/card'
import 'element-plus/es/components/card/style/index'

import { ElLink } from 'element-plus/es/components/link'
import 'element-plus/es/components/link/style/index'

// import { ElSwitch } from 'element-plus/es/components/switch'
// import 'element-plus/es/components/switch/style/index'

import { ElDivider } from 'element-plus/es/components/divider'
import 'element-plus/es/components/divider/style/index'

import { ElTabs } from 'element-plus/es/components/tabs'
import 'element-plus/es/components/tabs/style/index'
</script>

<template>
  <div>
    <el-card>
      <el-tag>Tag</el-tag>
      <el-button type="primary">Button</el-button>
      Vue {{ Vue.version }}
    </el-card>

    <div>
      <el-link :underline="false">Link</el-link>
      <!-- <el-switch :value="true" /> -->
      <el-divider />
      <el-tabs />
    </div>
  </div>
</template>
