<template>
  <span :class="ns.e('item')">
    <span
      ref="link"
      :class="[ns.e('inner'), ns.is('link', !!to)]"
      role="link"
      @click="onClick"
    >
      <slot />
    </span>
    <el-icon v-if="breadcrumbContext?.separatorIcon" :class="ns.e('separator')">
      <component :is="breadcrumbContext.separatorIcon" />
    </el-icon>
    <span v-else :class="ns.e('separator')" role="presentation">
      {{ breadcrumbContext?.separator }}
    </span>
  </span>
</template>

<script lang="ts" setup>
import { getCurrentInstance, inject, ref } from 'vue'
import ElIcon from '@element-plus/components/icon'
import { useNamespace } from '@element-plus/hooks'
import { breadcrumbKey } from './constants'
import { breadcrumbItemProps } from './breadcrumb-item'

import type { Router } from 'vue-router'

defineOptions({
  name: 'ElBreadcrumbItem',
})

const props = defineProps(breadcrumbItemProps)

const instance = getCurrentInstance()!
const breadcrumbContext = inject(breadcrumbKey, undefined)
const ns = useNamespace('breadcrumb')

const router = instance.appContext.config.globalProperties.$router as Router

const link = ref<HTMLSpanElement>()

const onClick = () => {
  if (!props.to || !router) return
  props.replace ? router.replace(props.to) : router.push(props.to)
}
</script>
