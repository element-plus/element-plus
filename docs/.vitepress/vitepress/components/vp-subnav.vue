<script setup lang="ts">
import { useSidebar } from '../composables/sidebar'
import { useBackTop } from '../composables/back-top'
import ToggleSidebarBtn from './subnav/toggle-sidebar-btn.vue'
defineEmits(['open-menu'])

const { hasSidebar } = useSidebar()
const { shouldShow, scrollToTop } = useBackTop()
</script>

<template>
  <div class="sub-nav py-3 flex items-center">
    <ToggleSidebarBtn v-if="hasSidebar" @click="$emit('open-menu')" />
    <Transition name="shifting">
      <ElButton
        type="text"
        class="height-5"
        size="small"
        :class="{ 'go-back-top': true, show: shouldShow }"
        @click.prevent.stop="scrollToTop"
        >{{ 'Back to top' }}</ElButton
      >
    </Transition>
  </div>
</template>
