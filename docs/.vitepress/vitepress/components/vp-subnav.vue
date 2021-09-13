<script setup lang="ts">
import ToggleSidebarBtn from './subnav/toggle-sidebar-btn.vue'
import { useSidebar } from '../composables/sidebar'
import { useBackTop } from '../composables/back-top'
defineEmits(['open-menu'])

const { hasSidebar } = useSidebar()
const { shouldShow, scrollToTop } = useBackTop()
</script>

<template>
  <div class="sub-nav">
    <ToggleSidebarBtn v-if="hasSidebar" @click="$emit('open-menu')" />
    <Transition name="shifting">
      <ElButton
        type="text"
        :class="{ 'go-back-top': true, show: shouldShow }"
        @click.prevent.stop="scrollToTop"
        >{{ 'Back to top' }}</ElButton
      >
    </Transition>
  </div>
</template>
