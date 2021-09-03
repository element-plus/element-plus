<template>
  <aside
    v-if="nav.length > 0 || sidebars.length > 0"
    :class="{ sidebar: true, open }"
  >
    <div class="nav sponsors">
      <p class="sponsors-title">{{ sponsorsLocale.title }}</p>
      <ul class="sponsors-list">
        <li v-for="(sponsor, key) in sponsors" :key="key" class="sponsor-item">
          <a
            class="sponsor-link"
            :title="sponsor.name"
            :href="sponsor.url"
            target="_blank"
          >
            <img :src="sponsor.img" :alt="sponsor.name">
          </a>
        </li>
      </ul>
    </div>
    <nav class="nav-links nav">
      <nav-link v-for="(item, key) in nav" :key="key" :item="item" />
    </nav>
    <ul class="sidebar-links">
      <sidebar-link v-for="(item, key) of sidebars" :key="key" :item="item" />
    </ul>
  </aside>
</template>
<script lang="ts" setup>
import { computed, ref, watch } from 'vue'
import { useRoute, withBase, useData } from 'vitepress'
import { SidebarLink } from '../components/sidebar-link'
import { useSidebar } from '../composables/use-sidebar'
import { useNav } from '../composables/use-nav'
import { useLang, useIsHome } from '../utils/routes'

import sponsorsData from '../i18n/component/sponsor.json'
import bit from '../assets/images/bit.svg'
import renren from '../assets/images/renren.png'

type SideNavItem = {
  beta: boolean
  text: string
  link: string
  activeMatch: string
  children: Array<SideNavItem>
}

defineProps<{ open: boolean; }>()
const emit = defineEmits(['sidebar-change'])
const isHome = useIsHome()
const { theme } = useData()

const isSmallScreen = ref(false)
const isFade = ref(false)
const route = useRoute()

const lang = useLang()
const sponsorsLocale = computed(() => sponsorsData[lang.value])

const sidebars = useSidebar()
const nav = useNav()

// TODO: make this configuable.
const sponsors = [
  {
    name: 'bit',
    img: bit,
    url: 'https://bit.dev/?from=element-ui',
  },
  {
    url: 'https://www.renren.io/?from=element-ui',
    img: renren,
    name: sponsorsLocale.value.sponsorNameR,
  },
]

watch(sidebars, val => {
  emit('sidebar-change', val.length > 0)
})

const shouldShowSideNav = computed(() => sidebars.value.length > 0)
</script>
