<script lang="ts" setup>
import { computed } from 'vue'
import { isDark } from '../../composables/dark'
import { useLang } from '../../composables/lang'
import { goldSponsors, platinumSponsors } from '../../../config/sponsors'
import sponsorLocale from '../../../i18n/component/sponsor.json'

import SponsorsButton from '../sponsors/sponsors-button.vue'

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
    return sponsor.slogan_cn || sponsor.slogan
  }
  return sponsor.slogan
}
</script>

<template>
  <div class="sponsors-container" m="t-9 auto">
    <h2 class="text-center mb-4 text-xl">{{ sponsorLang.platinumSponsor }}</h2>
    <div class="grid gap-1 sponsor-list platinum">
      <a
        v-for="(sponsor, i) in platinumSponsors"
        :key="i"
        :class="['sponsor flex px-4 rounded-md', sponsor.className]"
        :href="sponsor.url"
        target="_blank"
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
    <h2 class="text-center mb-4 text-xl">{{ sponsorLang.goldSponsor }}</h2>
    <div class="grid gap-1 sponsor-list gold mb-4">
      <a
        v-for="(sponsor, i) in goldSponsors"
        :key="i"
        :class="['sponsor flex px-4 rounded-md', sponsor.className]"
        :href="sponsor.url"
        target="_blank"
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
    <sponsors-button round />
  </div>
</template>

<style lang="scss">
.home-page {
  .sponsors-container {
    max-width: 900px;
    .join {
      text-align: center;
      margin: 0 0 50px 0;
    }
  }

  .sponsor-list {
    --min-width: 100%;
    grid-template-columns: repeat(auto-fit, minmax(var(--min-width), 1fr));

    &.platinum {
      --min-width: 220px;
    }
    &.gold {
      --min-width: 140px;

      @media (max-width: 720px) {
        --min-width: 160px;
      }
    }
  }

  .sponsor {
    margin: 0 20px 10px;
    height: calc(var(--min-width) / 2);
    align-items: center;
    // for dark mode
    // background-color: var(--bg-color-soft);

    .name {
      font-weight: bold;
      color: var(--text-color);
      font-size: 14px;
    }

    img {
      margin-right: 16px;
    }

    div {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    p {
      margin: 0;
      line-height: 1.8;
      color: var(--text-color-light);
      font-size: 12px;
    }
  }
}
</style>
