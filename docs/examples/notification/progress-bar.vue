<template>
  <div class="flex flex-wrap gap-2">
    <el-button @click="addNotification('')"> No type </el-button>
    <el-button
      v-for="type of notificationTypes"
      :key="type"
      class="!ml-0"
      @click="addNotification(type)"
    >
      {{ toUpperCase(type) }}
    </el-button>
  </div>
</template>
<script lang="ts" setup>
import { ElNotification, notificationTypes } from 'element-plus'
import type { NotificationOptions } from 'element-plus'

const toUpperCase = (string: string) =>
  string.charAt(0).toUpperCase() + string.slice(1)

const addNotification = (type: NotificationOptions['type']) => {
  ElNotification({
    title: 'Progress Bar',
    showProgressBar: true,
    type,
  })
}
</script>
