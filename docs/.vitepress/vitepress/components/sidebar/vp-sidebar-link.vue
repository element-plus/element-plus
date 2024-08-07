<script lang="ts" setup>
import { computed, ref, watch } from 'vue'
import { useRoute } from 'vitepress'
import { isActive } from '../../utils'

import type { Link } from '../../types'

const props = defineProps<{
  item: Link
}>()

defineEmits(['close'])

const sidebarItem = ref<HTMLElement>()

const route = useRoute()

const activeLink = computed<boolean>(() =>
  isActive(route.data.relativePath, props.item.link)
)

watch([activeLink, sidebarItem], ([active, el]) => {
  if (active && el) {
    el.scrollIntoView?.({ block: 'nearest' })
  }
})
</script>

<template>
  <a
    ref="sidebarItem"
    :class="{
      link: true,
      active: activeLink,
      'flex items-center': item.promotion,
    }"
    :href="item.link"
    @click="$emit('close')"
  >
    <p class="link-text">{{ item.text }}</p>
    <VersionTag v-if="item.promotion" class="ml-2" :version="item.promotion" />
  </a>
</template>

<style scoped lang="scss">
.link:not(.flex) {
  display: block;
}

.link {
  padding: 10px 16px;
  line-height: 1.5;
  font-size: 0.9rem;
  border-radius: 8px;

  .link-text {
    margin: 0;
  }
}

.link:hover .link-text {
  color: var(--brand-color);
  transition: color 0.25s;
}

.link.active {
  background-color: var(--link-active-bg-color);

  .link-text {
    font-weight: 600;
    color: var(--brand-color);
    transition: color 0.25s;
  }
}

.link-text {
  line-height: 20px;
  font-size: 13px;
  font-weight: 500;
  color: var(--text-color-light);
  transition: color 0.5s;
}
</style>
