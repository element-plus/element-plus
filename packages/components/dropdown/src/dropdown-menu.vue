<template>
  <ul
    :ref="dropdownListWrapperRef"
    :class="['el-dropdown-menu', size && `el-dropdown-menu--${size}`]"
    :style="rovingFocusGroupRootStyle"
    :tabindex="-1"
    role="menu"
    @blur="onBlur"
    @focus="onFocus"
    @keydown="handleKeydown"
    @mousedown="onMousedown"
  >
    <slot></slot>
  </ul>
</template>
<script lang="ts">
import {
  defineComponent,
  getCurrentInstance,
  onMounted,
  onBeforeUnmount,
  inject,
  ref,
  unref,
  watch,
} from 'vue'
import { ClickOutside } from '@element-plus/directives'
import { EVENT_CODE } from '@element-plus/utils/aria'
import { FOCUS_TRAP_INJECTION_KEY } from '@element-plus/components/focus-trap'
import {
  ROVING_FOCUS_COLLECTION_INJECTION_KEY,
  ROVING_FOCUS_GROUP_INJECTION_KEY,
  focusFirst,
} from '@element-plus/components/roving-focus-group'
import { composeRefs, composeEventHandlers } from '@element-plus/utils/dom'
import { DROPDOWN_INJECTION_KEY } from './tokens'
import {
  DROPDOWN_COLLECTION_INJECTION_KEY,
  dropdownMenuProps,
  FIRST_LAST_KEYS,
  LAST_KEYS,
} from './dropdown'
import { useDropdown, initDropdownDomEvent } from './useDropdown'

import type { ComponentPublicInstance } from 'vue'

export default defineComponent({
  name: 'ElDropdownMenu',
  props: dropdownMenuProps,
  directives: {
    ClickOutside,
  },
  inheritAttrs: false,
  setup(props) {
    const { _elDropdownSize, elDropdown } = useDropdown()
    const size = _elDropdownSize.value

    const { focusTrapRef, onKeydown } = inject(
      FOCUS_TRAP_INJECTION_KEY,
      undefined
    )!

    const { contentRef } = inject(DROPDOWN_INJECTION_KEY, undefined)!

    const { collectionRef: dropdownCollectionRef, getItems } = inject(
      DROPDOWN_COLLECTION_INJECTION_KEY,
      undefined
    )!

    const {
      rovingFocusGroupRef,
      rovingFocusGroupRootStyle,
      tabIndex,
      onBlur,
      onFocus,
      onMousedown,
    } = inject(ROVING_FOCUS_GROUP_INJECTION_KEY, undefined)!

    const { collectionRef: rovingFocusGroupCollectionRef } = inject(
      ROVING_FOCUS_COLLECTION_INJECTION_KEY,
      undefined
    )!

    const dropdownListWrapperRef = composeRefs(
      contentRef,
      dropdownCollectionRef,
      focusTrapRef,
      rovingFocusGroupRef,
      rovingFocusGroupCollectionRef
    )

    const composedKeydown = composeEventHandlers(
      (e: KeyboardEvent) => {
        props.onKeydown?.(e)
      },
      (e) => {
        const { currentTarget, code, target } = e
        const isKeydownContained = (currentTarget as Node).contains(
          target as Node
        )

        if (isKeydownContained) {
          // TODO: implement typeahead search
        }

        if (EVENT_CODE.tab === code) {
          e.stopImmediatePropagation()
        }

        e.preventDefault()

        if (target !== unref(contentRef)) return
        if (!FIRST_LAST_KEYS.includes(code)) return
        const items = getItems<{ disabled: boolean }>().filter(
          (item) => !item.disabled
        )
        const targets = items.map((item) => item.ref!)
        if (LAST_KEYS.includes(code)) {
          targets.reverse()
        }
        focusFirst(targets)
      }
    )

    const handleKeydown = (e: KeyboardEvent) => {
      composedKeydown(e)
      onKeydown(e)
    }

    return {
      size,
      rovingFocusGroupRootStyle,
      tabIndex,
      dropdownListWrapperRef,
      handleKeydown,
      onBlur,
      onFocus,
      onMousedown,
    }
  },
})
</script>
