<template>
  <li class="el-menu-item-group">
    <div
      class="el-menu-item-group__title"
      :style="{ paddingLeft: `${levelPadding}px` }"
    >
      <template v-if="!$slots.title">{{ title }}</template>
      <slot v-else name="title" />
    </div>
    <ul>
      <slot />
    </ul>
  </li>
</template>

<script lang="ts">
import { defineComponent, computed, getCurrentInstance, inject } from 'vue'
import { throwError } from '@element-plus/utils/error'
import { menuItemGroupProps } from './menu-item-group'

import type { MenuProvider } from './types'

const COMPONENT_NAME = 'ElMenuItemGroup'

export default defineComponent({
  name: COMPONENT_NAME,

  props: menuItemGroupProps,

  setup() {
    const instance = getCurrentInstance()!
    const menu = inject<MenuProvider>('rootMenu')
    if (!menu) throwError(COMPONENT_NAME, 'can not inject root menu')

    const levelPadding = computed(() => {
      if (menu.props.collapse) return 20
      let padding = 20
      let parent = instance.parent
      while (parent && parent.type.name !== 'ElMenu') {
        if (parent.type.name === 'ElSubMenu') {
          padding += 20
        }
        parent = parent.parent
      }
      return padding
    })

    return {
      levelPadding,
    }
  },
})
</script>
