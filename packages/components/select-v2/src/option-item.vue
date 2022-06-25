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
      <span>{{ item.label }}</span>
    </slot>
  </li>
</template>

<script lang="ts" setup>
import { useNamespace } from '@element-plus/hooks'
import { useOption } from './useOption'
import { OptionEmits, OptionProps } from './option-item'

const props = defineProps(OptionProps)

const emit = defineEmits(OptionEmits)

defineOptions({
  name: 'OptionItem',
})

const ns = useNamespace('select')
const { hoverItem, selectOptionClick } = useOption(props, emit)
</script>
