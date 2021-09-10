<script setup lang="ts">
import { toRefs, computed } from 'vue'

import ExternalIcon from './external-icon'
import { useNavLink } from 'vitepress/dist/client/theme-default/composables/navLink'

import type { DefaultTheme } from 'vitepress/types'
const skipped = ['https://www.npmjs.org/package/element-plus']

const props = defineProps<{
  item: DefaultTheme.NavItemWithLink
}>()

const propsRefs = toRefs(props)

const { props: linkProps, isExternal } = useNavLink(propsRefs.item)
const isSkipped = computed(() => skipped.includes(propsRefs.item.value.link))
</script>

<template>
  <a class="nav-link" v-bind="linkProps">
    {{ item.text }}
    <el-icon
      v-if="!isSkipped && isExternal"
      style="font-size: 14px; margin-left: 4px"
      color="inherit"
    >
      <ExternalIcon />
    </el-icon>
  </a>
</template>

<style scoped lang="scss">
.nav-link {
  color: var(--el-text-color-light);
  font-size: 13px;
  padding: 0 12px;
  position: relative;
  transition: color var(--el-transition-duration);

  &:hover {
    text-decoration: none;
    color: var(--brand-color);
  }
  &.active::after {
    content: '';
    display: inline-block;
    position: absolute;
    bottom: 0;
    left: calc(50% - 15px);
    width: 30px;
    height: 2px;
    background: var(--el-color-primary);
  }
}

.item {
  display: block;
  padding: 0 1.5rem;
  line-height: 36px;
  font-size: 1rem;
  font-weight: normal;
  white-space: nowrap;
  color: var(--text-color-light);
}

.item.external:hover {
  border-bottom-color: transparent;
  color: var(--text-color);
}

@media (min-width: 1044px) {
  .item {
    border-bottom: none;
    padding: 0 1.5rem;
    line-height: var(--header-item-height);
    font-size: 1rem;
    color: var(--text-color-light);
  }

  .item:hover {
    color: var(--brand-color);
  }
}
</style>
