<script lang="ts" setup>
import { computed } from 'vue'
import { isDark } from '../../composables/dark'
import { useLang } from '../../composables/lang'
import sponsorLocale from '../../../i18n/component/sponsor.json'
import { sendEvent } from '../../../config/analytics'
const onItemClick = (item: any) => {
  sendEvent('sp_click', item.name, 'index')
}
defineProps({
  sponsors: Array,
  sponsorType: String,
})

const lang = useLang()
const sponsorLang = computed(() => sponsorLocale[lang.value])

const langZhCN = 'zh-CN'

const getSponsorName = (sponsor) => {
  if (lang.value === langZhCN) {
    return sponsor.name_cn || sponsor.name
  }
  return sponsor.name
}
const getSponsorSlogan = (sponsor) => {
  if (lang.value === langZhCN) {
    if (sponsor.slogan_index) {
      return sponsor.slogan_index
    }
    return sponsor.slogan_cn || sponsor.slogan
  }
  return sponsor.slogan
}
</script>

<template>
  <h2 class="text-center mb-4 text-xl">{{ sponsorLang[sponsorType] }}</h2>
  <div class="grid gap-1 sponsor-list platinum">
    <a
      v-for="(sponsor, i) in sponsors"
      :key="i"
      :class="['sponsor flex px-4 rounded-md', sponsor.className]"
      :href="sponsor.url"
      target="_blank"
      @click="onItemClick(sponsor)"
    >
      <img
        :class="sponsor.isDark && isDark ? 'filter invert' : ''"
        width="45"
        :src="sponsor.img"
        :alt="sponsor.name"
      />
      <div>
        <p>
          <span class="name">{{ getSponsorName(sponsor) }}</span>
        </p>
        <p>{{ getSponsorSlogan(sponsor) }}</p>
      </div>
    </a>
  </div>
</template>
