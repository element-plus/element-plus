<template>
  <ul
    :ref="dropdownListWrapperRef"
    :class="dropdownKls"
    :style="rovingFocusGroupRootStyle"
    :tabindex="-1"
    :role="role"
    :aria-labelledby="triggerId"
    @blur="onBlur"
    @focus="onFocus"
    @keydown.self="handleKeydown"
    @mousedown.self="onMousedown"
  >
    <slot />
  </ul>
</template>
<script lang="ts">
import { computed, defineComponent, inject, unref } from 'vue'
import { composeEventHandlers, composeRefs } from '@element-plus/utils'
import { EVENT_CODE } from '@element-plus/constants'
import { FOCUS_TRAP_INJECTION_KEY } from '@element-plus/components/focus-trap'
import {
  ROVING_FOCUS_COLLECTION_INJECTION_KEY,
  ROVING_FOCUS_GROUP_INJECTION_KEY,
  focusFirst,
} from '@element-plus/components/roving-focus-group'
import { useNamespace } from '@element-plus/hooks'
import { DROPDOWN_INJECTION_KEY } from './tokens'
import {
  DROPDOWN_COLLECTION_INJECTION_KEY,
  FIRST_LAST_KEYS,
  LAST_KEYS,
  dropdownMenuProps,
} from './dropdown'
import { useDropdown } from './useDropdown'

export default defineComponent({
  name: 'ElDropdownMenu',
  props: dropdownMenuProps,
  setup(props) {
    const ns = useNamespace('dropdown')
    const { _elDropdownSize } = useDropdown()
    const size = _elDropdownSize.value

    const { focusTrapRef, onKeydown } = inject(
      FOCUS_TRAP_INJECTION_KEY,
      undefined
    )!

    const { contentRef, role, triggerId } = inject(
      DROPDOWN_INJECTION_KEY,
      undefined
    )!

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

    const dropdownKls = computed(() => {
      return [ns.b('menu'), ns.bm('menu', size?.value)]
    })

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

        if (target !== unref(contentRef) || !FIRST_LAST_KEYS.includes(code))
          return
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
      dropdownKls,
      role,
      triggerId,
      dropdownListWrapperRef,
      handleKeydown,
      onBlur,
      onFocus,
      onMousedown,
    }
  },
})
</script>
