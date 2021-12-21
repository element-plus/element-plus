<script lang="ts" setup>
import { ref } from 'vue'
import { useRoute } from 'vitepress'
import VPLink from '../common/vp-link.vue'
import { isActiveLink } from '../../utils'

import type { Link } from '../../types'
const USER_VISITED_NEW_RESOURCE_PAGE = 'USER_VISITED_NEW_RESOURCE_PAGE'
defineProps<{
  item: Link
}>()

const route = useRoute()
const isVisited = ref(
  !!window.localStorage.getItem(USER_VISITED_NEW_RESOURCE_PAGE)
)
const isNewPage = (item: Link) => item.activeMatch === '/resource/'
const onNavClick = (item: Link) => {
  if (isNewPage(item) && !isVisited.value) {
    window.localStorage.setItem(
      USER_VISITED_NEW_RESOURCE_PAGE,
      Date.now().toString()
    )
    isVisited.value = true
  }
}
</script>

<template>
  <VPLink
    :class="{
      'is-menu-link': true,
      active: isActiveLink(
        route,
        item.activeMatch || item.link,
        !!item.activeMatch
      ),
    }"
    :href="item.link"
    :no-icon="true"
    @click="onNavClick(item)"
  >
    <el-badge v-if="isNewPage(item) && !isVisited" is-dot class="badge">
      {{ item.text }}</el-badge
    >
    <template v-else> {{ item.text }}</template>
  </VPLink>
</template>

<style scoped lang="scss">
.is-menu-link {
  display: block;
  padding: 0 12px;
  line-height: calc(var(--nav-height) - 3px);
  font-size: 14px;
  font-weight: 500;
  color: var(--text-color);
  transition: color var(--el-transition-duration);
  border-bottom: 2px solid transparent;

  &.active {
    border-bottom-color: var(--brand-color);
  }

  &:hover {
    color: var(--brand-color);
  }

  .badge {
    display: inline;
    vertical-align: unset;
  }

  .badge:deep(.is-dot) {
    right: 0;
  }
}
</style>
