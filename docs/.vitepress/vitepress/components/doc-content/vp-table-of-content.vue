<script setup lang="ts">
import { computed, ref } from 'vue'
import { useToc } from '../../composables/use-toc'
import { useActiveSidebarLinks } from '../../composables/active-bar'

import sponsorLocale from '../../../i18n/component/sponsor.json'
import { useLang } from '../../composables/lang'
import SponsorsButton from '../sponsors/sponsors-button.vue'
import SponsorRightTextList from '../sponsors/right-richtext-list.vue'
import SponsorRightLogoSmallList from '../sponsors/right-logo-small-list.vue'
// import SponsorLarge from '../vp-sponsor-large.vue'

const headers = useToc()
const marker = ref()
const container = ref()
useActiveSidebarLinks(container, marker)
const lang = useLang()
const sponsor = computed(() => sponsorLocale[lang.value])

const tagRegExp = /\^\(([^)]*)\)/
type Header = {
  link: string
  text: string
  tag?: string
  children?: Header[]
  className?: string
}
const convertHeader = (item: Header) => {
  const tag = item.text.match(tagRegExp)
  if (tag) {
    const text = item.text.replace(tagRegExp, '')
    item.text = text
    item.tag = tag[1]
    item.className = 'vp-tag'
    if (['beta', 'deprecated', 'a11y'].includes(tag[1])) {
      item.className += ` ${tag[1]}`
    }
    if (item.children) {
      item.children = item.children.map(convertHeader)
    }
  }
  return item
}
const convertHeaders = computed(() => {
  return headers.value.map(convertHeader)
})
</script>

<template>
  <aside ref="container" class="toc-wrapper">
    <nav class="toc-content">
      <h3 class="toc-content__heading">Contents</h3>
      <ul class="toc-items">
        <li
          v-for="{ link, text, children, tag, className } in convertHeaders"
          :key="link"
          class="toc-item"
        >
          <a class="toc-link" :href="link" :title="text">
            {{ text }}
            <span v-if="tag" :class="className">{{ tag }}</span>
          </a>
          <ul v-if="children">
            <li
              v-for="{
                link: childLink,
                text: childText,
                tag: childTag,
                className: childClassName,
              } in children"
              :key="childLink"
              class="toc-item"
            >
              <a class="toc-link subitem" :href="childLink" :title="text">
                {{ childText }}
                <span v-if="childTag" :class="childClassName">{{
                  childTag
                }}</span>
              </a>
            </li>
          </ul>
        </li>
      </ul>
      <div ref="marker" class="toc-marker" />
      <!-- <SponsorLarge
        class="mt-8 toc-ads flex flex-col"
        item-style="width: 180px; height: 55px;"
      /> -->
      <p class="text-14px font-300 color-$text-color-secondary">
        {{ sponsor.sponsoredBy }}
      </p>
      <sponsors-button class="sponsors-button mt-4 w-100%" />
      <sponsor-right-logo-small-list />
      <sponsor-right-text-list />
    </nav>
  </aside>
</template>
<style scoped lang="scss">
.sponsors-button:deep {
  button {
    width: 100%;
  }
}
</style>
