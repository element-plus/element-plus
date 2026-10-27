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

const markCurrentItem = () => {
  const items = breadcrumb.value?.querySelectorAll(`.${ns.e('item')}`)
  if (!items?.length) return

  items.forEach((item) => item.removeAttribute('aria-current'))
  items[items.length - 1].setAttribute('aria-current', 'page')
}

onMounted(markCurrentItem)

// `aria-current` must follow the last item when the slot content changes,
// e.g. a route change appends or removes a breadcrumb item.
onUpdated(markCurrentItem)
</script>
