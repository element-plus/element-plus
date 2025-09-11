<template>
  <div>
    <div class="flex gap-4">
      <div class="flex flex-col basis-150px gap-1">
        <span>Type:</span>
        <el-select v-model="config.type">
          <el-option v-for="type in linkTypes" :key="type" :value="type" />
        </el-select>
      </div>
      <div class="flex flex-col basis-150px gap-1">
        <span>Underline:</span>
        <el-select v-model="config.underline">
          <el-option
            v-for="type in underlineOptions"
            :key="type"
            :value="type"
          />
        </el-select>
      </div>
    </div>
    <el-divider />
    <el-config-provider :link="config">
      <el-link>Link desu!</el-link>
    </el-config-provider>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'

const linkTypes = ['primary', 'success', 'warning', 'info', 'danger', 'default']
const underlineOptions = ['always', 'never', 'hover']

const config = reactive({
  type: 'success',
  underline: 'always',
})
</script>
