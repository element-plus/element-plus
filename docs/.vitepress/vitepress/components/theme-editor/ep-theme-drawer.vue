<script lang="ts" setup>
import { ref } from 'vue'
import { Brush } from '@element-plus/icons-vue'
import { useThemeStore } from '~/store/theme'
import { downloadTheme } from '~/utils/theme'

const drawer = ref(import.meta.env.DEV)
const direction = ref('rtl')

const tStore = useThemeStore()
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
          <EpThemeUploadTheme />
          <el-button
            class="inline-flex flex-1"
            m="l-2"
            @click="downloadTheme('el-custom-theme.css', tStore.theme)"
          >
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
