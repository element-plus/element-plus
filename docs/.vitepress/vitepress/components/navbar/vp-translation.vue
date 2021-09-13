<script setup lang="ts">
import { onMounted } from 'vue'
import { useTranslation } from '../../composables/translation'
import { PREFERRED_LANG_KEY, defaultLang } from '../../constant'

import TranslationIcon from '../icons/translation-icon.vue'

const { switchLang, languageMap, langs, lang } = useTranslation()

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
  display: none;
  height: 20px;
  padding: 0 8px;

  @include respond-to('md') {
    display: block;
  }

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
