<template>
  <ul
    :ref="dropdownListWrapperRef"
    :class="dropdownKls"
    :style="rovingFocusGroupRootStyle"
    :tabindex="-1"
    :role="role"
    :aria-labelledby="triggerId"
    @focusin="handleFocus"
    @focusout="onBlur"
    @keydown.self="handleKeydown"
    @mousedown.self="onMousedown"
  >
    <slot />
  </ul>
</template>

<script lang="ts">
import { computed, defineComponent, inject } from 'vue'
import {
  composeEventHandlers,
  composeRefs,
  getEventCode,
} from '@element-plus/utils'
import { EVENT_CODE } from '@element-plus/constants'
import {
  ROVING_FOCUS_COLLECTION_INJECTION_KEY,
  ROVING_FOCUS_GROUP_INJECTION_KEY,
} from '@element-plus/components/roving-focus-group'
import { useNamespace } from '@element-plus/hooks'
import { DROPDOWN_INJECTION_KEY } from './tokens'
import { dropdownMenuProps } from './dropdown'
import { useDropdown } from './useDropdown'

export default defineComponent({
  name: 'ElDropdownMenu',
  props: dropdownMenuProps,
  setup(props) {
    const ns = useNamespace('dropdown')
    const { _elDropdownSize } = useDropdown()
    const size = _elDropdownSize.value

    const { contentRef, role, triggerId, isUsingKeyboard, handleClose } =
      inject(DROPDOWN_INJECTION_KEY, undefined)!

    const {
      rovingFocusGroupRef,
      rovingFocusGroupRootStyle,
      onBlur,
      onFocus,
      onKeydown,
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
      rovingFocusGroupRef,
      rovingFocusGroupCollectionRef
    )

    const handleKeydown = composeEventHandlers(
      (e: KeyboardEvent) => {
        props.onKeydown?.(e)
      },
      (e) => {
        const { currentTarget, target } = e
        const code = getEventCode(e)

        const isKeydownContained = (currentTarget as Node).contains(
          target as Node
        )

        if (isKeydownContained) {
          // TODO: implement typeahead search
        }

        if (EVENT_CODE.tab === code) {
          return handleClose()
        }

        onKeydown(e)
      }
    )

    function handleFocus(e: FocusEvent) {
      isUsingKeyboard.value && onFocus(e)
    }

    return {
      size,
      rovingFocusGroupRootStyle,
      dropdownKls,
      role,
      triggerId,
      dropdownListWrapperRef,
      handleKeydown,
      onBlur,
      handleFocus,
      onMousedown,
    }
  },
})
</script>
