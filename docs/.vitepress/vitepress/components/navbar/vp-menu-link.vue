<script lang="ts" setup>
import { useRoute } from 'vitepress'
import { useStorage } from '@vueuse/core'
import VPLink from '../common/vp-link.vue'
import { isActive } from '../../utils'
import { usePlaygroundPreview } from '../../composables/use-playground'
import type { Link } from '../../types'

const USER_VISITED_NEW_RESOURCE_PAGE = 'USER_VISITED_NEW_RESOURCE_PAGE'

const props = defineProps<{
  item: Link
}>()

const route = useRoute()

const isVisited = useStorage<boolean | string>(
  USER_VISITED_NEW_RESOURCE_PAGE,
  false
)

const targetLink = usePlaygroundPreview(props)

const isNewPage = (item: Link) => item.activeMatch === '/some_fake_path/'

const onNavClick = (item: Link) => {
  if (isNewPage(item) && !isVisited.value) {
    isVisited.value = Date.now().toString()
  }
}
</script>

<template>
  <VPLink
    :class="{
      'is-menu-link': true,
      active: isActive(
        route.data.relativePath,
        item.activeMatch || item.link,
        !!item.activeMatch
      ),
    }"
    :href="targetLink"
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
