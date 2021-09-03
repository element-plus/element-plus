<template>
  <li class="el-menu-item-group">
    <div
      class="el-menu-item-group__title"
      :style="{ paddingLeft: levelPadding + 'px' }"
    >
      <template v-if="!slots.title">{{ title }}</template>
      <slot v-else name="title"></slot>
    </div>
    <ul>
      <slot></slot>
    </ul>
  </li>
</template>

<script lang="ts">
import {
  defineComponent,
  computed,
  getCurrentInstance,
  inject,
  reactive,
} from 'vue'

import type { IMenuGroupProps, RootMenuProvider } from './menu.type'

export default defineComponent({
  name: 'ElMenuItemGroup',
  componentName: 'ElMenuItemGroup',

  props: {
    title: {
      type: String,
    },
  },
  setup(props: IMenuGroupProps, { slots }) {
    // data
    const data = reactive({
      paddingLeft: 20,
    })
    const instance = getCurrentInstance()
    // computed
    const levelPadding = computed(() => {
      let padding = 20
      let parent = instance.parent
      if (rootProps.collapse) return 20
      while (parent && parent.type.name !== 'ElMenu') {
        if (parent.type.name === 'ElSubMenu') {
          padding += 20
        }
        parent = parent.parent
      }
      return padding
    })

    // inject
    const { props: rootProps } = inject<RootMenuProvider>('rootMenu')

    return {
      data,
      levelPadding,
      props,
      slots,
    }
  },
})
</script>
