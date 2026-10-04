<script lang="ts" setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { Brush } from '@element-plus/icons-vue'
import { useThemeStore } from '~/store/theme'
import { downloadTheme } from '~/utils/theme'

const drawerOpen = ref(false)
const store = useThemeStore()
const { t } = useI18n()
</script>

<template>
  <el-drawer
    v-model="drawerOpen"
    size="min(100vw, 380px)"
    :title="t('editor.desc')"
    direction="rtl"
  >
    <p class="text-sm mb-5 text-$el-text-color-secondary">
      {{ t('editor.help') }}
    </p>
    <EpThemePrimaryColors />
    <EpThemePrimary />
    <EpThemeSecondaryColors />
    <template #footer>
      <div class="flex flex-wrap gap-2">
        <el-button class="w-full mb-1" @click="store.reset()">
          <i-ep-refresh class="mr-1" />
          {{ t('editor.reset') }}
        </el-button>
        <EpThemeUploadTheme />
        <el-button
          @click="downloadTheme('el-custom-theme.css', store.fullTheme)"
        >
          <i-ep-download class="mr-1" />
          {{ t('editor.export') }}
        </el-button>
      </div>
    </template>
  </el-drawer>
  <el-tooltip v-if="!drawerOpen" :content="t('editor.desc')">
    <el-button
      class="theme-editor-trigger"
      :aria-label="t('editor.desc')"
      :icon="Brush"
      circle
      @click="drawerOpen = true"
    />
  </el-tooltip>
</template>

<style scoped>
.theme-editor-trigger {
  position: fixed;
  right: 24px;
  bottom: 24px;
  z-index: 30;
}
</style>
