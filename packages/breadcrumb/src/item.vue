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
    ></i>
    <span v-else class="el-breadcrumb__separator" role="presentation">{{
      separator
    }}</span>
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
import type { IBreadcrumbProps } from './breadcrumb'
import type { PropType } from 'vue'

export default defineComponent({
  name: 'ElBreadcrumbItem',
  props: {
    to: {
      type: [String, Object] as PropType<string | Record<string, unknown>>,
      default: '',
    },
    replace: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const link = ref(null)
    const parent = inject<IBreadcrumbProps>('breadcrumb')
    const instance = getCurrentInstance()
    const router = instance.appContext.config.globalProperties.$router

    onMounted(() => {
      link.value.setAttribute('role', 'link')
      link.value.addEventListener('click', () => {
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
