<script lang="ts" setup>
import { useSidebar } from '../composables/sidebar'

import VPSidebarLink from './sidebar/vp-sidebar-link.vue'

defineProps<{ open: boolean }>()
defineEmits(['close'])

// const isHome = useIsHome()
const { sidebars, hasSidebar } = useSidebar()
</script>

<template>
  <aside v-if="hasSidebar" :class="{ sidebar: true, open }">
    <slot name="top" />
    <div class="sidebar-groups">
      <section v-for="(item, key) of sidebars" :key="key" class="sidebar-group">
        <p class="sidebar-group__title">
          {{ item.text }}
        </p>
        <VPSidebarLink
          v-for="(child, childKey) in item.children"
          :key="childKey"
          :item="child"
          @close="$emit('close')"
        />
      </section>
    </div>
    <slot name="bottom" />
  </aside>
</template>
