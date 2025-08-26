<template>
  <div>
    <el-checkbox v-model="checked1" label="Option 1" size="large" />
    <el-checkbox v-model="checked2" label="Option 2" size="large" />
  </div>
  <div>
    <el-checkbox v-model="checked3" label="Option 1" />
    <el-checkbox v-model="checked4" label="Option 2" />
  </div>
  <div>
    <el-checkbox v-model="checked5" label="Option 1" size="small" />
    <el-checkbox v-model="checked6" label="Option 2" size="small" />
  </div>
  <div>
    <el-checkbox v-model="checked5" label="Option 1" size="small" disabled />
    <el-checkbox v-model="checked6" label="Option 2" size="small" disabled />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const checked1 = ref(true)
const checked2 = ref(false)
const checked3 = ref(false)
const checked4 = ref(false)
const checked5 = ref(false)
const checked6 = ref(false)
</script>
