<script setup lang="ts">
import { computed } from 'vue'
import sponsorLocale from '../../i18n/component/sponsor.json'
import { useLang } from '../composables/lang'
import VPSponsorSmall from './vp-sponsor-small.vue'
import VPSponsorLarge from './vp-sponsor-large.vue'

const lang = useLang()
const sponsor = computed(() => sponsorLocale[lang.value])
</script>

<template>
  <div class="doc-sidebar-content">
    <p class="title">{{ sponsor.sponsoredBy }}</p>
    <VPSponsorLarge />
    <VPSponsorSmall />
  </div>
</template>

<style lang="scss" scoped>
.doc-sidebar-content {
  padding-bottom: 10px;
  padding-top: 0;
  .title {
    color: var(--text-color-secondary);
    font-weight: 300;
    font-size: 14px;
  }
}
</style>
