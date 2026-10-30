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
import { onBeforeUnmount, onMounted, onUpdated, provide, ref } from 'vue'
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
let observer: MutationObserver | undefined

const markCurrentItem = () => {
  const items = breadcrumb.value?.querySelectorAll(`.${ns.e('item')}`)
  const lastItem = items?.[items.length - 1]
  if (lastItem === currentItem) return

  currentItem?.removeAttribute('aria-current')
  lastItem?.setAttribute('aria-current', 'page')
  currentItem = lastItem
}

onMounted(() => {
  markCurrentItem()
  // A TransitionGroup removes the leaving item from the DOM after its leave
  // transition, outside of Vue's update cycle. Watch the direct children so
  // the remaining last item is re-marked once the leaving item is gone.
  if (breadcrumb.value && typeof MutationObserver !== 'undefined') {
    observer = new MutationObserver(markCurrentItem)
    observer.observe(breadcrumb.value, { childList: true })
  }
})

// `aria-current` must follow the last item when the slot content changes,
// e.g. a route change appends or removes a breadcrumb item.
onUpdated(markCurrentItem)

onBeforeUnmount(() => {
  observer?.disconnect()
  observer = undefined
})
</script>
