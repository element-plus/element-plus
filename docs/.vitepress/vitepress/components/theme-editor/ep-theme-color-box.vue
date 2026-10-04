<script lang="ts" setup>
import { computed } from 'vue'
import { useClipboard } from '@vueuse/core'
import { useI18n } from 'vue-i18n'
import { ElMessage } from 'element-plus'
import { getColorValue } from '~/utils/colors/var'

const props = defineProps<{ name: string }>()
const cssVarName = computed(() => `--el-color-${props.name}`)
const { copy, isSupported } = useClipboard({ legacy: true })
const { t } = useI18n()

async function copyHex() {
  try {
    if (!isSupported.value) throw new Error('Clipboard unavailable')
    const color = getColorValue(props.name).trim()
    await copy(color)
    ElMessage.success({
      message: t('editor.copied', { color }),
      grouping: true,
    })
  } catch {
    ElMessage.error(t('editor.copy-error'))
  }
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
