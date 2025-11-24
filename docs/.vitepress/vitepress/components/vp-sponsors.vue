<script setup lang="ts">
import { computed } from 'vue'
import sponsorLocale from '../../i18n/component/sponsor.json'
import { useLang } from '../composables/lang'
import { useDynamicClass } from '../composables/useDynamicClass'
import VPSponsorSmall from './vp-sponsor-small.vue'
import VPSponsorLarge from './vp-sponsor-large.vue'

const lang = useLang()
const sponsor = computed(() => sponsorLocale[lang.value])

const { dynamicClass } = useDynamicClass(
  (className) => `
  .${className} {
    padding-bottom: 10px;
    padding-top: 0;
  }
  .${className} .title {
    color: var(--text-color-secondary);
    font-weight: 300;
    font-size: 14px;
  }
`,
  {
    prefix: 'vp-s-',
  }
)
</script>

<template>
  <div :class="dynamicClass">
    <p class="title">{{ sponsor.sponsoredBy }}</p>
    <VPSponsorLarge />
    <VPSponsorSmall />
  </div>
</template>
