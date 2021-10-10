<script setup lang="ts">
import VPLink from '../common/vp-link.vue'
import { useTranslation } from '../../composables/translation'

import TranslationIcon from '../icons/translation-icon.vue'

const { switchLang, languageMap, langs, lang, helpTranslate } = useTranslation()
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
          :class="{ language: true, selected: l === lang }"
          @click="switchLang(l)"
        >
          {{ languageMap[l] }}
        </div>
        <div class="language">
          <VPLink href="https://crowdin.com/project/element-plus">
            {{ helpTranslate }}
          </VPLink>
        </div>
      </ElPopover>
    </ClientOnly>
  </div>
</template>

<style lang="scss" scoped>
@use '../../styles/mixins' as *;
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
      padding: 0 16px;
      line-height: 28px;
      &.selected {
        color: var(--brand-color);
      }

      .link-item {
        font-weight: 500;
      }
    }
  }
}
</style>
