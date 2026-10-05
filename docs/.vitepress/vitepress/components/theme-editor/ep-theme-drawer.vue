<script lang="ts" setup>
import { computed, nextTick, ref } from 'vue'
import { mostReadable } from '@ctrl/tinycolor'
import { useI18n } from 'vue-i18n'
import { Brush, DocumentCopy } from '@element-plus/icons-vue'
import { isDark } from '../../composables/dark'
import { useThemeStore } from '../../store/theme'
import { downloadTheme, generateCssFromTheme } from '../../utils/theme/helper'
import { copyThemeText } from '../../utils/theme/copy'
import { generateColorsFromBase } from '../../utils/colors/hsv'
import CommonThemeToggler from '../common/vp-theme-toggler.vue'

import type { ButtonInstance } from 'element-plus'

const drawerOpen = ref(false)
const trigger = ref<ButtonInstance>()
const store = useThemeStore()
const { t } = useI18n()

const copyButtonStyle = computed(() => {
  const colors = generateColorsFromBase(
    store.fullTheme.colors.primary,
    isDark.value
  )
  const foreground = (level: string) =>
    mostReadable(colors[level], ['#000', '#fff'])!.toHexString()
  return {
    '--el-button-text-color': foreground('base'),
    '--el-button-hover-text-color': foreground('light-3'),
    '--el-button-active-text-color': foreground('dark-2'),
  }
})

function copyCss() {
  return copyThemeText(generateCssFromTheme(store.fullTheme), {
    success: t('editor.copy-css-success'),
    error: t('editor.copy-css-error'),
  })
}

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
    <p class="theme-editor-help">
      {{ t('editor.help') }}
    </p>
    <EpThemePrimaryColors />
    <EpThemePrimary />
    <EpThemeSecondaryColors />
    <template #footer>
      <div class="theme-editor-actions">
        <el-button text class="theme-editor-reset" @click="store.reset()">
          <i-ep-refresh class="mr-1" />
          {{ t('editor.reset') }}
        </el-button>
        <EpThemeUploadTheme />
        <el-button
          class="theme-editor-export"
          @click="downloadTheme('el-custom-theme.css', store.fullTheme)"
        >
          <i-ep-download class="mr-1" />
          {{ t('editor.export') }}
        </el-button>
        <el-button
          type="primary"
          class="theme-editor-copy"
          :icon="DocumentCopy"
          :style="copyButtonStyle"
          @click="copyCss"
        >
          {{ t('editor.copy-css') }}
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
  --theme-editor-width: min(100vw, 420px);
  font-family: var(--el-font-family);
  font-size: var(--el-font-size-base);
  line-height: 1.5;
  height: 100dvh;
  left: calc(100vw - var(--theme-editor-width));
  right: auto;
}

:global(.theme-editor-drawer .el-drawer__header) {
  margin-bottom: 0;
  padding-bottom: 16px;
  align-items: center;
  border-bottom: 1px solid var(--el-border-color-lighter);
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
  color: var(--el-text-color-primary);
  font-size: var(--el-font-size-large);
  font-weight: 500;
  line-height: 24px;
}

.theme-editor-help {
  margin: 0 0 24px;
  color: var(--el-text-color-regular);
  font-size: var(--el-font-size-base);
}

:global(.theme-editor-drawer .theme-editor-section-title) {
  margin: 0 0 12px;
  color: var(--el-text-color-primary);
  font-size: var(--el-font-size-medium);
  font-weight: 500;
  line-height: 24px;
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
  height: auto;
  min-height: 40px;
  margin: 0;
  padding: 8px 12px;
  white-space: normal;
  line-height: 20px;
}

.theme-editor-actions :deep(.el-button > span) {
  min-width: 0;
  overflow-wrap: anywhere;
}

.theme-editor-actions .theme-editor-reset {
  justify-self: start;
  width: auto;
  max-width: 100%;
  height: auto;
  min-height: 40px;
  white-space: normal;
  text-align: left;
  line-height: 20px;
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
    min-height: 44px;
  }

  .theme-editor-trigger {
    --theme-editor-trigger-size: 44px;
  }
}
</style>
