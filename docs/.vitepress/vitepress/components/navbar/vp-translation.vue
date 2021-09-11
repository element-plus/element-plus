<script setup lang="ts">
import { ref, markRaw, onMounted } from 'vue'
import { useRouter, useRoute } from 'vitepress'
import { PREFERRED_LANG_KEY, defaultLang } from '../../constant'

import { useLang } from '../../composables/lang'
import TranslationIcon from '../icons/translation-icon.vue'

import langs from '../../../i18n/lang.json'

const languageMap = markRaw({
  'en-US': 'English',
  'zh-CN': '中文',
})

const route = useRoute()
const router = useRouter()
const lang = useLang()

const switchLang = (targetLang: string) => {
  if (lang.value === targetLang) return
  localStorage.setItem(PREFERRED_LANG_KEY, targetLang)
  const firstSlash = route.path.indexOf('/', 1)

  const goTo = `/${targetLang}/${route.path.slice(firstSlash + 1)}`

  router.go(goTo)
}

onMounted(() => {
  const preferredLang = localStorage.getItem(PREFERRED_LANG_KEY) || defaultLang
  if (lang.value !== preferredLang) {
    switchLang(preferredLang)
  }
})
</script>

<template>
  <div class="translation-container">
    <ClientOnly>
      <ElPopover
        :show-arrow="false"
        trigger="hover"
        popper-class="translation-popup"
      >
        <template #reference>
          <ElIcon :size="20">
            <TranslationIcon />
          </ElIcon>
        </template>
        <div
          v-for="l in langs"
          :key="l"
          @click="switchLang(l)"
          :class="{ language: true, selected: l === lang }"
        >
          {{ languageMap[l] }}
        </div>
      </ElPopover>
    </ClientOnly>
  </div>
</template>

<style lang="scss" scoped>
@import '../../styles/mixins';
.translation-container {
  height: 20px;
  padding: 0 4px;

  @at-root .translation-popup.el-popper {
    box-shadow: var(--el-box-shadow-base);

    .language {
      cursor: pointer;
      &.selected {
        color: var(--brand-color);
      }
    }
  }
}
</style>
