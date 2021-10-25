<script lang="ts" setup>
import { computed } from 'vue'
import { useWindowSize } from '@vueuse/core'
import { useSidebar } from '../composables/sidebar'

import VPSidebarLink from './sidebar/vp-sidebar-link.vue'

defineProps<{ open: boolean }>()
defineEmits(['close'])

// const isHome = useIsHome()
const { sidebars, hasSidebar } = useSidebar()

const { width } = useWindowSize()
const appMaxWidth = 1376 // --app-max-width: 1376px;
const wrapStyle = computed(() =>
  width.value >= appMaxWidth
    ? `padding: 24px 32px 24px ${(width.value - appMaxWidth) / 2}px;`
    : ''
)
</script>

<template>
  <aside v-if="hasSidebar" :class="{ sidebar: true, open }">
    <el-scrollbar
      :key="open"
      :wrap-style="wrapStyle"
      :height="open ? '100vh' : 'calc(100vh - 55px)'"
    >
      <slot name="top" />
      <div class="sidebar-groups">
        <section
          v-for="(item, key) of sidebars"
          :key="key"
          class="sidebar-group"
        >
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
    </el-scrollbar>
  </aside>
</template>
