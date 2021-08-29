<template>
  <aside v-if="nav.length > 0 || sidebars.length > 0" :class="{ sidebar: true, open }">
    <nav class="nav-links nav">
      <nav-link v-for="(item, key) in nav" :key="key" :item="item" />
    </nav>
    <div v-if="sidebars.length > 0" class="side-nav">
      <ul>
        <li class="nav-item sponsors">
          <a>{{ sponsorsLocale.title }}</a>
          <ul class="pure-menu-list sub-nav">
            <li class="nav-item">
              <a
                class="sponsor"
                href="https://bit.dev/?from=element-ui"
                target="_blank"
                title="bit"
              >
                <img :src="withBase('/assets/images/bit.svg')">
              </a>
            </li>
            <li class="nav-item">
              <a
                class="sponsor"
                href="https://www.renren.io/?from=element-ui"
                target="_blank"
                :title="sponsorsLocale.sponsorIntroR"
              >
                <img :src="withBase('/assets/images/renren.png')">
              </a>
            </li>
          </ul>
        </li>
        <ul class="sidebar-links">
          <sidebar-link
            v-for="(item, key) of sidebars"
            :key="key"
            :item="item"
          />
        </ul>
      </ul>
      <!--<div id="code-sponsor-widget"></div>-->
    </div>
  </aside>
</template>
<script lang="ts" setup>
import { computed, ref, watch } from 'vue'
import { useRoute, withBase, useData } from 'vitepress'
import { SidebarLink } from '../components/sidebar-link'
import { useSidebar } from '../composables/use-sidebar'
import { useNav } from '../composables/use-nav'

import sponsorsData from '../assets/components/sponsors.json'
import { useLang } from '../utils/routes'

type SideNavItem = {
  beta: boolean
  text: string
  link: string
  activeMatch: string
  children: Array<SideNavItem>
}

defineProps<{ open: boolean; }>()
const emit = defineEmits(['sidebar-change'])
const { theme } = useData()

console.log(theme.value)

const isSmallScreen = ref(false)
const isFade = ref(false)
const route = useRoute()

console.log(route.data)

const lang = useLang()
const sponsorsLocale = computed(() => sponsorsData[lang.value])

const sidebars = useSidebar()
const nav = useNav()

watch(sidebars, val => {
  emit('sidebar-change', val.length > 0)
})

const shouldShowSideNav = computed(() => sidebars.value.length > 0)
</script>
