<template>
  <div class="flex flex-col gap-2">
    <el-input
      v-model="input"
      style="width: 240px"
      type="password"
      placeholder="Please input password"
      show-password
    />
    <el-input
      v-model="input"
      style="width: 240px"
      type="password"
      placeholder="Please input password"
      show-password
    >
      <template #password-icon="{ visible }">
        <el-icon :size="16">
          <Unlock v-if="visible" />
          <Lock v-else />
        </el-icon>
      </template>
    </el-input>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { Lock, Unlock } from '@element-plus/icons-vue'

const input = ref('')
</script>
