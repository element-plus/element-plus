<script lang="ts" setup>
import { useI18n } from 'vue-i18n'

const secondaryColors = ['success', 'warning', 'danger', 'info']
const { t } = useI18n()
</script>

<template>
  <div m="t-6">
    <h3 class="text-lg">{{ t('editor.secondary-color') }}</h3>
    <ep-theme-secondary-color
      v-for="colorName in secondaryColors"
      :key="colorName"
      :name="colorName"
    />
  </div>
</template>
