<script setup lang="ts">
import { computed } from 'vue'
import { useToc } from '../../composables/use-toc'

import sponsorLocale from '../../../i18n/component/sponsor.json'
import { useLang } from '../../composables/lang'
import SponsorsButton from '../sponsors/sponsors-button.vue'
import SponsorRightBigLogoList from '../sponsors/right-big-logo-list.vue'
import SponsorRightTextList from '../sponsors/right-richtext-list.vue'
import SponsorRightLogoSmallList from '../sponsors/right-logo-small-list.vue'
// import SponsorLarge from '../vp-sponsor-large.vue'

const headers = useToc()
const lang = useLang()
const sponsor = computed(() => sponsorLocale[lang.value])
const removeTag = (str: string) => str.replace(/<span.*<\/span>/g, '')
</script>

<template>
  <aside ref="container" class="toc-wrapper">
    <nav class="toc-content">
      <h3 class="toc-content__heading">Contents</h3>
      <el-anchor :offset="70" :bound="120">
        <el-anchor-link
          v-for="{ link, text, children } in headers"
          :key="link"
          :href="link"
          :title="text"
        >
          <div :title="removeTag(text)" v-html="text" />
          <template v-if="children" #sub-link>
            <el-anchor-link
              v-for="{ link: childLink, text: childText } in children"
              :key="childLink"
              :href="childLink"
              :title="text"
            >
              <div :title="removeTag(childText)" v-html="childText" />
            </el-anchor-link>
          </template>
        </el-anchor-link>
      </el-anchor>
      <!-- <SponsorLarge
        class="mt-8 toc-ads flex flex-col"
        item-style="width: 180px; height: 55px;"
      /> -->
      <p class="text-14px font-300 color-$text-color-secondary">
        {{ sponsor.sponsoredBy }}
      </p>
      <sponsors-button class="sponsors-button mt-4 w-100%" />
      <sponsor-right-big-logo-list />
      <sponsor-right-logo-small-list />
      <sponsor-right-text-list />
    </nav>
    <div class="toc-content-mask" />
  </aside>
</template>

<style scoped lang="scss">
.sponsors-button {
  :deep(button) {
    width: 100%;
  }
}
.el-anchor__item {
  .el-anchor__link > div {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
}
</style>
