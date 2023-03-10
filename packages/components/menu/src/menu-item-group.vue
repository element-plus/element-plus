<template>
  <li :class="ns.b()">
    <div :class="ns.e('title')">
      <template v-if="!$slots.title">{{ title }}</template>
      <slot v-else name="title" />
    </div>
    <ul>
      <slot />
    </ul>
  </li>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useNamespace } from '@element-plus/hooks'
import { menuItemGroupProps } from './menu-item-group'

const COMPONENT_NAME = 'ElMenuItemGroup'

export default defineComponent({
  name: COMPONENT_NAME,

  props: menuItemGroupProps,

  setup() {
    const ns = useNamespace('menu-item-group')

    return {
      ns,
    }
  },
})
</script>
