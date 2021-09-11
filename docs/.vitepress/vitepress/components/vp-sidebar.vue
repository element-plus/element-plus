<script lang="ts" setup>
import { computed, ref, markRaw, watch } from 'vue'
import { useRoute, withBase, useData } from 'vitepress'
import VPSidebarLink from './sidebar/vp-sidebar-link.vue'
import { useSidebar } from '../composables/sidebar'
import { useLang } from '../composables/lang'

import sponsorsData from '../../i18n/component/sponsor.json'

type SideNavItem = {
  beta: boolean
  text: string
  link: string
  activeMatch: string
  children: Array<SideNavItem>
}

defineProps<{ open: boolean }>()
defineEmits(['close'])

// const isHome = useIsHome()
const { theme } = useData()
const route = useRoute()
const lang = useLang()
const { sidebars, hasSidebar } = useSidebar()
</script>

<template>
  <aside v-if="hasSidebar" :class="{ sidebar: true, open }">
    <slot name="top" />
    <div class="sidebar-groups">
      <section v-for="(item, key) of sidebars" class="sidebar-group">
        <p class="sidebar-group__title">
          {{ item.text }}
        </p>
        <VPSidebarLink
          v-for="item in item.children"
          :item="item"
          @close="$emit('close')"
        />
      </section>
    </div>
    <slot name="bottom" />
  </aside>
</template>
