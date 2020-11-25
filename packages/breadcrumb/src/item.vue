<template>
  <span class="el-breadcrumb__item">
    <span
      ref="link"
      :class="['el-breadcrumb__inner', to ? 'is-link' : '']"
      role="link"
    >
      <slot></slot>
    </span>
    <i v-if="separatorClass" class="el-breadcrumb__separator" :class="separatorClass"></i>
    <span v-else class="el-breadcrumb__separator" role="presentation">{{ separator }}</span>
  </span>
</template>

<script lang="ts">
import { defineComponent, inject, ref, onMounted } from 'vue'

interface IBreadcrumbInject {
  separator: string
  separatorClass: string
}

interface IBreadcrumbItemProps {
  to: string | Record<string, unknown>
  replace: boolean
}

export default defineComponent({
  name: 'ElBreadcrumbItem',
  props: {
    to: {
      type: [String, Object],
      default: '',
    },
    replace: {
      type: Boolean,
      default: false,
    },
  },
  setup(props: IBreadcrumbItemProps, ctx) {
    const link = ref(null)
    const parent: IBreadcrumbInject = inject('breadcrumb')

    onMounted(() => {
      link.value.setAttribute('role', 'link')
      link.value.addEventListener('click', () => {
        const router = (ctx as any).$router
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
