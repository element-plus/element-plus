<script setup lang="ts">
import { computed } from 'vue'
import sponsorsLocale from '../../i18n/component/sponsors.json'
import sponsorLocale from '../../i18n/component/sponsor.json'
import { useLang } from '../composables/lang'
import VPSponsor from './vp-sponsor.vue'
import VPSponsorLarge from './vp-sponsor-large.vue'

const lang = useLang()
const sponsors = computed(() => sponsorsLocale[lang.value])

const sponsor = computed(() => sponsorLocale[lang.value])
</script>

<template>
  <div class="sponsors">
    <p class="sponsors-title">{{ sponsor.sponsoredBy }}</p>
    <VPSponsorLarge />
    <div class="container">
      <VPSponsor v-for="(s, key) in sponsors" :key="key" :item="s" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.sponsors {
  padding: 0.35rem 1.5rem 0.35rem 1.25rem;
  .sponsors-title {
    color: var(--text-color-lighter);
    font-weight: 300;
    font-size: 14px;
  }

  .container {
    display: flex;
    align-items: center;
  }
}
</style>
