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
  <div class="nav-link">
    <a class="item" v-bind="linkProps">
      {{ item.text }}
      <el-icon
        v-if="!isSkipped && isExternal"
        style="font-size: 14px;margin-left: 4px"
        color="inherit"
      >
        <ExternalIcon />
      </el-icon>
    </a>
  </div>
</template>

<style scoped>
.item {
  display: block;
  padding: 0 1.5rem;
  line-height: 36px;
  font-size: 1rem;
  font-weight: 600;
  color: var(--c-text);
  white-space: nowrap;
}

.item:hover,
.item.active {
  text-decoration: none;
  color: var(--brand-color);
}

.item.external:hover {
  border-bottom-color: transparent;
  color: var(--text-color);
}

@media (min-width: 720px) {
  .item {
    border-bottom: 2px solid transparent;
    padding: 0;
    line-height: 24px;
    font-size: 0.9rem;
    font-weight: 500;
  }

  .item:hover,
  .item.active {
    border-bottom-color: var(--brand-color);
    color: var(--text-color);
  }
}
</style>
