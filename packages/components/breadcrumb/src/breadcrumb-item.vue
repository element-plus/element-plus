<template>
  <span class="el-breadcrumb__item">
    <span
      ref="link"
      :class="['el-breadcrumb__inner', to ? 'is-link' : '']"
      role="link"
    >
      <slot></slot>
    </span>
    <i
      v-if="separatorClass"
      class="el-breadcrumb__separator"
      :class="separatorClass"
    />
    <span v-else class="el-breadcrumb__separator" role="presentation">
      {{ separator }}
    </span>
  </span>
</template>

<script lang="ts">
import {
  defineComponent,
  inject,
  ref,
  onMounted,
  getCurrentInstance,
} from 'vue'
import { elBreadcrumbKey } from '@element-plus/tokens'
import { breadcrumbItemProps } from './breadcrumb-item'

import type { Router } from 'vue-router'

const COMPONENT_NAME = 'ElBreadcrumbItem'

export default defineComponent({
  name: COMPONENT_NAME,

  props: breadcrumbItemProps,

  setup(props) {
    const instance = getCurrentInstance()!
    const router = instance.appContext.config.globalProperties.$router as Router
    const parent = inject(elBreadcrumbKey, undefined)

    const link = ref<HTMLSpanElement>()

    onMounted(() => {
      link.value!.setAttribute('role', 'link')
      link.value!.addEventListener('click', () => {
        if (!props.to || !router) return
        props.replace ? router.replace(props.to) : router.push(props.to)
      })
    })

    return {
      link,
      separator: parent?.separator,
      separatorClass: parent?.separatorClass,
    }
  },
})
</script>
