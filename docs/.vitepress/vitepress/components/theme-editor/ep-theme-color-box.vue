<script lang="ts" setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { copyThemeText } from '../../utils/theme/copy'
import { getColorValue } from '~/utils/colors/var'

const props = defineProps<{ name: string }>()
const cssVarName = computed(() => `--el-color-${props.name}`)
const { t } = useI18n()

function copyHex() {
  const color = getColorValue(props.name).trim()
  return copyThemeText(color, {
    success: t('editor.copied', { color }),
    error: t('editor.copy-error'),
  })
}
</script>

<template>
  <button
    type="button"
    class="color-box cursor-pointer h-8 flex-1"
    :style="{ backgroundColor: `var(${cssVarName})` }"
    :aria-label="t('editor.copy-color', { name: cssVarName })"
    :title="cssVarName"
    @click="copyHex"
  />
</template>

<style scoped>
.color-box {
  border: 0;
  padding: 0;
}
.color-box:focus-visible {
  outline: 2px solid var(--el-text-color-primary);
  outline-offset: -2px;
}
@media (pointer: coarse) {
  .color-box {
    min-height: 44px;
  }
}
</style>
