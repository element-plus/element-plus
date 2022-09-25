<script lang="ts" setup>
import { ref } from 'vue'
import { Brush } from '@element-plus/icons-vue'
import { useThemeStore } from '~/store/theme'

const drawer = ref(import.meta.env.DEV)
const direction = ref('rtl')

const tStore = useThemeStore()

const downloadTheme = () => {
  // eslint-disable-next-line no-alert
  alert('TODO')
}

const uploadTheme = () => {
  // eslint-disable-next-line no-alert
  alert('TODO')
}
</script>

<template>
  <div>
    <el-drawer v-model="drawer" :lock-scroll="false" :direction="direction">
      <template #header>
        <span class="flex-1" text="sm">Theme Editor</span>
      </template>
      <div class="-mt-4">
        <EpThemePrimaryColors />
        <EpThemePrimary />
        <EpThemeSecondaryColors />

        <el-button class="flex" w="full" @click="tStore.reset()">
          <i-ep-refresh />
          全部恢复默认配置
        </el-button>

        <div m="t-2" class="flex justify-between">
          <el-button class="inline-flex flex-1" @click="uploadTheme">
            <i-ep-upload />
            导入
          </el-button>
          <el-button class="inline-flex flex-1" @click="downloadTheme">
            <i-ep-download />
            导出
          </el-button>
        </div>
      </div>
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
