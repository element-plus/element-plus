<template>
  <li
    :id="`${contentId}-${index}`"
    role="option"
    :aria-selected="selected"
    :aria-disabled="disabled || undefined"
    :style="style"
    :class="[
      ns.be('dropdown', 'item'),
      ns.is('selected', selected),
      ns.is('disabled', disabled),
      ns.is('created', created),
      ns.is('hovering', hovering),
    ]"
    @mousemove="hoverItem"
    @mousedown="handleMousedown"
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
import { optionV2Emits, optionV2Props } from './defaults'
import { selectV2InjectionKey } from './token'
import { isFocusable } from '@element-plus/utils'

export default defineComponent({
  props: optionV2Props,
  emits: optionV2Emits,
  setup(props, { emit }) {
    const select = inject(selectV2InjectionKey)!
    const ns = useNamespace('select')
    const { hoverItem, selectOptionClick } = useOption(props, { emit })
    const { getLabel } = useProps(select.props)
    const contentId = select.contentId

    const handleMousedown = (event: MouseEvent) => {
      let target = event.target as HTMLElement | null
      const currentTarget = event.currentTarget as HTMLElement

      while (target && target !== currentTarget) {
        if (isFocusable(target)) {
          return
        }
        target = target.parentElement
      }

      event.preventDefault()
    }

    return {
      ns,
      contentId,
      hoverItem,
      handleMousedown,
      selectOptionClick,
      getLabel,
    }
  },
})
</script>
