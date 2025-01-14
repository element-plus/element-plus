<script lang="ts" setup>
import { usePlaygroundPreview } from '../../composables/use-playground'
import VPLink from '../common/vp-link.vue'
import type { Link } from '../../types'

const props = defineProps<{
  item: Link
}>()

const targetLink = usePlaygroundPreview(props)
</script>

<template>
  <VPLink
    :class="{
      'is-menu-link': true,
    }"
    :href="targetLink"
    :no-icon="true"
  >
    {{ item.text }}
  </VPLink>
</template>

<style scoped lang="scss">
.is-menu-link {
  display: block;
  font-size: 13px;
  font-weight: 500;
  line-height: 24px;
  color: var(--text-color);
  transition: color var(--el-transition-duration);

  &.active {
    border-bottom: 2px solid var(--brand-color);
  }

  &:hover {
    color: var(--brand-color);
  }
}
</style>
