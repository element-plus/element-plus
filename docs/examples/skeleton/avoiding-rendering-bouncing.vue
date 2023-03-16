<template>
  <el-space direction="vertical" alignment="flex-start">
    <el-row>
      <el-text tag="label" class="mr-16px">Switch Loading</el-text>
      <el-switch v-model="loading" />
    </el-row>
    <el-skeleton :loading="loading" animated :throttle="500" class="w-240px">
      <template #template>
        <el-skeleton-item variant="image" class="w-240px h-240px mb-14px" />
        <el-skeleton-item variant="h3" class="w-50% px-14px" />
        <el-skeleton-item variant="text" class="px-14px mb-3" />
      </template>
      <template #default>
        <el-card :body-style="{ padding: '0px' }">
          <el-image
            src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
            class="block w-240px h-240px mb-14px"
          />
          <el-text tag="h3" class="block px-14px">Delicious hamburger</el-text>
          <el-text tag="time" class="block px-14px mb-3">
            {{ currentDate }}
          </el-text>
        </el-card>
      </template>
    </el-skeleton>
  </el-space>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const loading = ref(false)
const currentDate = new Date().toDateString()
</script>
