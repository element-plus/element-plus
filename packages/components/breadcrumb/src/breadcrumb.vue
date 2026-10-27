<template>
  <div
    ref="breadcrumb"
    :class="ns.b()"
    :aria-label="t('el.breadcrumb.label')"
    role="navigation"
  >
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { onMounted, onUpdated, provide, ref } from 'vue'
import { useLocale, useNamespace } from '@element-plus/hooks'
import { breadcrumbKey } from './constants'

import type { BreadcrumbProps } from './breadcrumb'

defineOptions({
  name: 'ElBreadcrumb',
})

const { t } = useLocale()
const props = withDefaults(defineProps<BreadcrumbProps>(), {
  separator: '/',
})

const ns = useNamespace('breadcrumb')
const breadcrumb = ref<HTMLDivElement>()

provide(breadcrumbKey, props)

let currentItem: Element | undefined

const markCurrentItem = () => {
  const items = breadcrumb.value?.querySelectorAll(`.${ns.e('item')}`)
  const lastItem = items?.[items.length - 1]
  if (lastItem === currentItem) return

  currentItem?.removeAttribute('aria-current')
  lastItem?.setAttribute('aria-current', 'page')
  currentItem = lastItem
}

onMounted(markCurrentItem)

// `aria-current` must follow the last item when the slot content changes,
// e.g. a route change appends or removes a breadcrumb item.
onUpdated(markCurrentItem)
</script>
