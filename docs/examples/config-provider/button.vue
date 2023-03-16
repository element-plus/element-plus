<template>
  <el-checkbox v-model="config.autoInsertSpace" class="block">
    autoInsertSpace
  </el-checkbox>
  <el-config-provider :button="config">
    <el-button>中文</el-button>
  </el-config-provider>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'

const config = reactive({
  autoInsertSpace: true,
})
</script>
