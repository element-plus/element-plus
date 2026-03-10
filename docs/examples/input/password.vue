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
          <svg
            v-if="visible"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M16 20H8v-2h8zm-8-2H4v-2h4zm12 0h-4v-2h4zM4 16H2v-2h2zm10-6h-2v2h2zh2v4h-2v2h-4v-2H8v-4h2V8h4zm8 6h-2v-2h2zM2 14H0v-4h2zm22 0h-2v-4h2zM4 10H2V8h2zm18 0h-2V8h2zM8 8H4V6h4zm12 0h-4V6h4zm-4-2H8V4h8z"
            />
          </svg>
          <svg v-else xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <g fill="currentColor">
              <path
                d="M0 10h2v4H0zm24 0h-2v4h2zm-8 0h-2v2h2zm-6 0H8v4h2zM2 8h2v2H2zm0 8h2v-2H2zm20-8h-2v2h2zm0 8h-2v-2h2zM4 6h4v2H4zm0 12h4v-2H4zM20 6h-4v2h4zM10 4h6v2h-6zM8 20h8v-2H8zm4-12h2v2h-2zm-2 6h4v2h-4zM8 8h2v2H8zm2 2h2v4h-2zm2 2h2v2h-2z"
              />
              <path
                d="M6 6h2v2H6zM4 4h2v2H4zM2 2h2v2H2zm12 12h2v2h-2zm2 2h2v2h-2zm2 2h2v2h-2zm2 2h2v2h-2z"
              />
            </g>
          </svg>
        </el-icon>
      </template>
    </el-input>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const input = ref('')
</script>
