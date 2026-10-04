<script lang="ts" setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { ElMessage } from 'element-plus'
import { useThemeStore } from '~/store/theme'

const store = useThemeStore()
const { t } = useI18n()
const themeFile = ref<HTMLInputElement>()
const loading = ref(false)

async function uploadTheme(event: Event) {
  const input = event.target as HTMLInputElement
  const file = input.files?.[0]
  if (!file) return
  loading.value = true
  try {
    const ext = file.name.split('.').pop()?.toLowerCase()
    if (ext !== 'css' && ext !== 'json')
      throw new Error('Unsupported file type')
    store.parse(await file.text(), ext)
    ElMessage.success(t('editor.import-success'))
  } catch {
    ElMessage.error(t('editor.import-error'))
  } finally {
    loading.value = false
    input.value = ''
  }
}
</script>

<template>
  <el-button :loading="loading" @click="themeFile?.click()">
    <i-ep-upload class="mr-1" />
    {{ t('editor.import') }}
  </el-button>
  <input
    ref="themeFile"
    type="file"
    accept=".css,.json"
    hidden
    @change="uploadTheme"
  />
</template>
