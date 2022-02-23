<template>
  <div
    ref="breadcrumb"
    :class="ns.b()"
    aria-label="Breadcrumb"
    role="navigation"
  >
    <slot></slot>
  </div>
</template>

<script lang="ts" setup>
import { provide, ref, onMounted } from 'vue'
import { elBreadcrumbKey } from '@element-plus/tokens'

import { useNamespace } from '@element-plus/hooks'
import { breadcrumbProps } from './breadcrumb'

defineOptions({
  name: 'ElBreadcrumb',
})

const props = defineProps(breadcrumbProps)

const ns = useNamespace('breadcrumb')
const breadcrumb = ref<HTMLDivElement>()

provide(elBreadcrumbKey, props)

onMounted(() => {
  const items = breadcrumb.value!.querySelectorAll(`.${ns.e('item')}`)
  if (items.length) {
    items[items.length - 1].setAttribute('aria-current', 'page')
  }
})
</script>
