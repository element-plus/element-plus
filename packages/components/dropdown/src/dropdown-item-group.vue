<template>
  <li :class="ns.be('menu', 'item-group')">
    <div :class="ns.bem('menu', 'item-group', 'title')">
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
import { dropdownItemGroupProps } from './dropdown'

const COMPONENT_NAME = 'ElDropdownItemGroup'

export default defineComponent({
  name: COMPONENT_NAME,

  props: dropdownItemGroupProps,

  setup() {
    const ns = useNamespace('dropdown')

    return {
      ns,
    }
  },
})
</script>
