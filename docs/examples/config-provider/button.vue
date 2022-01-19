<template>
  <div>
    <el-config-provider :button="config">
      <el-button>中文</el-button>
    </el-config-provider>
    <div>
      <el-checkbox v-model="config.autoInsertSpace"
        >autoInsertSpace</el-checkbox
      >
    </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'

const config = reactive({
  autoInsertSpace: true,
})
</script>
