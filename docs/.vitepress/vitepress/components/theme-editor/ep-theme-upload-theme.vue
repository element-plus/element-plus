<script lang="ts" setup>
import { ref } from 'vue'
import { useThemeStore } from '~/store/theme'
const tStore = useThemeStore()
const themeFile = ref<HTMLInputElement>()

const uploadTheme = () => {
  themeFile.value?.click()
  themeFile.value?.addEventListener('change', (e) => {
    const file = (e.target as HTMLInputElement).files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        const result = e.target?.result
        if (typeof result === 'string' && result) {
          const themeText = result
          const inlineStyle = themeText.replace(':root', '').replace('}', '')
          document.documentElement.setAttribute('style', inlineStyle)

          const ext = file.name.split('.').pop()
          tStore.parse(themeText, ext === 'json' ? 'json' : 'css')
        }
      }
      reader.readAsText(file)
    }
  })
}
</script>

<template>
  <el-button class="inline-flex flex-1" @click="uploadTheme">
    <i-ep-upload />
    导入
  </el-button>
  <input ref="themeFile" type="file" style="display: none" />
</template>
