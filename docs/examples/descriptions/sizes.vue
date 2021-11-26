<template>
  <el-radio-group v-model="size">
    <el-radio label="">Default</el-radio>
    <el-radio label="medium">Medium</el-radio>
    <el-radio label="small">Small</el-radio>
    <el-radio label="mini">Mini</el-radio>
  </el-radio-group>

  <el-descriptions
    class="margin-top"
    title="With border"
    :column="3"
    :size="size"
    border
  >
    <template #extra>
      <el-button type="primary" size="small">Operation</el-button>
    </template>
    <el-descriptions-item>
      <template #label>
        <el-icon><user /></el-icon>
        Username
      </template>
      kooriookami
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <el-icon><iphone /></el-icon>
        Telephone
      </template>
      18100000000
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <el-icon><location /></el-icon>
        Place
      </template>
      Suzhou
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <el-icon><tickets /></el-icon>
        Remarks
      </template>
      <el-tag size="small">School</el-tag>
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <el-icon><office-building /></el-icon>
        Address
      </template>
      No.1188, Wuzhong Avenue, Wuzhong District, Suzhou, Jiangsu Province
    </el-descriptions-item>
  </el-descriptions>

  <el-descriptions
    class="margin-top"
    title="Without border"
    :column="3"
    :size="size"
  >
    <template #extra>
      <el-button type="primary" size="small">Operation</el-button>
    </template>
    <el-descriptions-item label="Username">kooriookami</el-descriptions-item>
    <el-descriptions-item label="Telephone">18100000000</el-descriptions-item>
    <el-descriptions-item label="Place">Suzhou</el-descriptions-item>
    <el-descriptions-item label="Remarks">
      <el-tag size="small">School</el-tag>
    </el-descriptions-item>
    <el-descriptions-item label="Address"
      >No.1188, Wuzhong Avenue, Wuzhong District, Suzhou, Jiangsu
      Province</el-descriptions-item
    >
  </el-descriptions>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import {
  User,
  Iphone,
  Location,
  Tickets,
  OfficeBuilding,
} from '@element-plus/icons'

const size = ref('')
</script>
