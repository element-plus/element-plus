<template>
  <el-checkbox-group v-model="checkList">
    <el-checkbox label="Option A" value="Value A" />
    <el-checkbox label="Option B" value="Value B" />
    <el-checkbox label="Option C" value="Value C" />
    <el-checkbox label="disabled" value="Value disabled" disabled />
    <el-checkbox
      label="selected and disabled"
      value="Value selected and disabled"
      disabled
    />
  </el-checkbox-group>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const checkList = ref(['Value selected and disabled', 'Value A'])
</script>
