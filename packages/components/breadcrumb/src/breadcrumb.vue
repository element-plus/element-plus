<template>
  <div
    ref="breadcrumb"
    class="el-breadcrumb"
    aria-label="Breadcrumb"
    role="navigation"
  >
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent, provide, ref, onMounted } from 'vue'
import { elBreadcrumbKey } from '@element-plus/tokens'

import { breadcrumbProps } from './breadcrumb'

export default defineComponent({
  name: 'ElBreadcrumb',
  props: breadcrumbProps,

  setup(props) {
    const breadcrumb = ref<HTMLDivElement>()

    provide(elBreadcrumbKey, props)

    onMounted(() => {
      const items = breadcrumb.value!.querySelectorAll('.el-breadcrumb__item')
      if (items.length) {
        items[items.length - 1].setAttribute('aria-current', 'page')
      }
    })

    return {
      breadcrumb,
    }
  },
})
</script>
