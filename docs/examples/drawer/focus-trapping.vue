<template>
  <div class="mb-3">
    <el-button type="primary" @click="drawer = true"> open </el-button>
  </div>
  <div>
    <el-input ref="outerInputRef" placeholder="Auto focus after closed" />
  </div>

  <el-drawer
    v-model="drawer"
    :with-header="false"
    destroy-on-close
    title="I am the title"
    size="70%"
    @close-auto-focus="outerInputRef.focus?.()"
  >
    <el-input v-model="val" placeholder="Initially Focused" />
  </el-drawer>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const drawer = ref(false)
const val = ref('')
const outerInputRef = ref()
</script>
