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

<script lang="ts" setup>
import { useNamespace } from '@element-plus/hooks'
import { menuItemGroupProps } from './menu-item-group'

defineOptions({
  name: 'ElMenuItemGroup',
})
defineProps(menuItemGroupProps)
const ns = useNamespace('menu-item-group')
</script>
