<template>
  <span :class="ns.e('item')">
    <span
      :class="[ns.e('inner'), ns.is('link', !!to)]"
      role="link"
      @click="onClick"
    >
      <slot />
    </span>
    <g-icon v-if="breadcrumbContext?.separatorIcon" :class="ns.e('separator')">
      <component :is="breadcrumbContext.separatorIcon" />
    </g-icon>
    <span v-else :class="ns.e('separator')" role="presentation">
      {{ breadcrumbContext?.separator }}
    </span>
  </span>
</template>

<script lang="ts" setup>
import { getCurrentInstance, inject } from 'vue'
import GIcon from '@element-plus/components/icon'
import { useNamespace } from '@element-plus/hooks'
import { breadcrumbKey } from './constants'

import type { Router } from 'vue-router'
import type { BreadcrumbItemProps } from './breadcrumb-item'

defineOptions({
  name: 'GBreadcrumbItem',
})

const props = withDefaults(defineProps<BreadcrumbItemProps>(), {
  to: '',
})

const instance = getCurrentInstance()!
const breadcrumbContext = inject(breadcrumbKey, undefined)
const ns = useNamespace('breadcrumb')

const router = instance.appContext.config.globalProperties.$router as Router

const onClick = () => {
  if (!props.to || !router) return
  props.replace ? router.replace(props.to) : router.push(props.to)
}
</script>
