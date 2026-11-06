<script lang="ts" setup>
import { useI18n } from 'vue-i18n'

const secondaryColors = ['success', 'warning', 'danger', 'info'] as const
const { t } = useI18n()
</script>

<template>
  <section
    class="theme-secondary-colors"
    :aria-label="t('editor.secondary-color')"
  >
    <h3 class="theme-editor-section-title">
      {{ t('editor.secondary-color') }}
    </h3>
    <ep-theme-secondary-color
      v-for="colorName in secondaryColors"
      :key="colorName"
      :name="colorName"
    />
  </section>
</template>

<style scoped>
.theme-secondary-colors {
  margin-top: 24px;
  padding-top: 20px;
  border-top: 1px solid var(--el-border-color-lighter);
}
</style>
