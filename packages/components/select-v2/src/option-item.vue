<template>
  <li
    :aria-selected="selected"
    :style="style"
    :class="[
      ns.be('dropdown', 'option-item'),
      ns.is('selected', selected),
      ns.is('disabled', disabled),
      ns.is('created', created),
      { hover: hovering },
    ]"
    @mouseenter="hoverItem"
    @click.stop="selectOptionClick"
  >
    <slot :item="item" :index="index" :disabled="disabled">
      <span>{{ getLabel(item) }}</span>
    </slot>
  </li>
</template>

<script lang="ts">
import { defineComponent, inject } from 'vue'
import { useNamespace } from '@element-plus/hooks'
import { useOption } from './useOption'
import { useProps } from './useProps'
import { OptionProps } from './defaults'
import { selectV2InjectionKey } from './token'

export default defineComponent({
  props: OptionProps,
  emits: ['select', 'hover'],
  setup(props, { emit }) {
    const select = inject(selectV2InjectionKey)!
    const ns = useNamespace('select')
    const { hoverItem, selectOptionClick } = useOption(props, { emit })
    const { getLabel } = useProps(select.props)

    return {
      ns,
      hoverItem,
      selectOptionClick,
      getLabel,
    }
  },
})
</script>
