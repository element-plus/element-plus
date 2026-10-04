<script lang="ts" setup>
import { nextTick, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { Brush } from '@element-plus/icons-vue'
import CommonThemeToggler from '../common/vp-theme-toggler.vue'

import type { ButtonInstance } from 'element-plus'

import { useThemeStore } from '~/store/theme'
import { downloadTheme } from '~/utils/theme'

const drawerOpen = ref(false)
const trigger = ref<ButtonInstance>()
const store = useThemeStore()
const { t } = useI18n()

async function restoreFocus() {
  // Drawer emits the model update after `closed`.
  await nextTick()
  if (!drawerOpen.value) trigger.value?.ref?.focus({ preventScroll: true })
}
</script>

<template>
  <el-drawer
    v-model="drawerOpen"
    class="theme-editor-drawer"
    size="var(--theme-editor-width)"
    :title="t('editor.desc')"
    direction="rtl"
    @closed="restoreFocus"
  >
    <template #header="{ titleId, titleClass }">
      <div class="theme-editor-heading">
        <h2 :id="titleId" :class="titleClass">{{ t('editor.desc') }}</h2>
        <CommonThemeToggler
          class="theme-editor-appearance"
          :aria-label="t('editor.dark-mode')"
        />
      </div>
    </template>
    <p class="text-sm mb-5 text-$el-text-color-regular">
      {{ t('editor.help') }}
    </p>
    <EpThemePrimaryColors />
    <EpThemePrimary />
    <EpThemeSecondaryColors />
    <template #footer>
      <div class="theme-editor-actions">
        <el-button class="theme-editor-reset" @click="store.reset()">
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
  <el-tooltip
    :content="t('editor.desc')"
    :disabled="drawerOpen"
    :trigger-keys="[]"
  >
    <el-button
      ref="trigger"
      class="theme-editor-trigger"
      :aria-label="t('editor.desc')"
      :icon="Brush"
      circle
      @click="drawerOpen = true"
    />
  </el-tooltip>
</template>

<style scoped>
/* The drawer is teleported, so target its own class instead of an ancestor. */
:global(.theme-editor-drawer.el-drawer) {
  --theme-editor-width: min(100vw, 380px);
  height: 100dvh;
  left: calc(100vw - var(--theme-editor-width));
  right: auto;
}

:global(.theme-editor-drawer .el-drawer__header) {
  margin-bottom: 0;
  flex-shrink: 0;
}

:global(.theme-editor-drawer .el-drawer__body) {
  min-height: 0;
}

:global(.theme-editor-drawer .el-drawer__footer) {
  flex-shrink: 0;
  padding-bottom: max(20px, env(safe-area-inset-bottom));
  border-top: 1px solid var(--el-border-color-lighter);
}

.theme-editor-heading {
  display: flex;
  flex: 1;
  align-items: center;
  gap: 12px;
  min-width: 0;
}

.theme-editor-heading h2 {
  margin: 0;
  flex: 1;
}

:global(.theme-editor-drawer .theme-editor-appearance) {
  flex-shrink: 0;
}

.theme-editor-actions {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 8px;
}

.theme-editor-actions :deep(.el-button) {
  width: 100%;
  min-width: 0;
  height: 40px;
  margin: 0;
}

.theme-editor-reset {
  grid-column: 1 / -1;
}

@media (max-width: 767px) {
  :global(.theme-editor-drawer.el-drawer) {
    --theme-editor-width: 100vw;
  }
}

.theme-editor-trigger {
  position: fixed;
  --theme-editor-trigger-size: 40px;
  width: var(--theme-editor-trigger-size);
  height: var(--theme-editor-trigger-size);
  left: calc(
    100vw - max(24px, env(safe-area-inset-right)) -
      var(--theme-editor-trigger-size)
  );
  top: calc(
    100dvh - max(24px, env(safe-area-inset-bottom)) -
      var(--theme-editor-trigger-size)
  );
  z-index: 30;
}
@media (pointer: coarse) {
  :global(.theme-editor-drawer .theme-editor-appearance) {
    min-height: 44px;
  }

  .theme-editor-actions :deep(.el-button) {
    height: 44px;
  }

  .theme-editor-trigger {
    --theme-editor-trigger-size: 44px;
  }
}
</style>
