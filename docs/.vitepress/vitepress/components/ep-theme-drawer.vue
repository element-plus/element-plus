<script lang="ts" setup>
import { ref } from 'vue'
import { Brush } from '@element-plus/icons-vue'

const drawer = ref(true)
const direction = ref('rtl')
</script>

<template>
  <div>
    <el-drawer
      v-model="drawer"
      title="I am the title"
      :lock-scroll="false"
      :direction="direction"
    >
      <span>Hi, there!</span>
    </el-drawer>

    <el-button
      v-if="!drawer"
      class="absolute right-10 bottom-10"
      :icon="Brush"
      circle
      @click="drawer = true"
    />
  </div>
</template>
