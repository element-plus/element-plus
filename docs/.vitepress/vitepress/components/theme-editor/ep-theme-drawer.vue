<script lang="ts" setup>
import { ref } from 'vue'
import { Brush } from '@element-plus/icons-vue'

const drawer = ref(import.meta.env.DEV)
const direction = ref('rtl')
</script>

<template>
  <div>
    <el-drawer
      v-model="drawer"
      title="Theme Editor"
      :lock-scroll="false"
      :direction="direction"
    >
      <EpThemePrimary />
    </el-drawer>

    <el-button
      v-if="!drawer"
      class="fixed right-10 bottom-10"
      :icon="Brush"
      circle
      @click="drawer = true"
    />
  </div>
</template>
