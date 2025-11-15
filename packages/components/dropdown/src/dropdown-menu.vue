<template>
  <ul
    :ref="dropdownListWrapperRef"
    :class="dropdownKls"
    :style="rovingFocusGroupRootStyle"
    :tabindex="-1"
    :role="role"
    :orientation="orientation"
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
import { computed, defineComponent, inject, provide } from 'vue'
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
import {
  DROPDOWN_INJECTION_KEY,
  DROPDOWN_INSTANCE_INJECTION_KEY,
} from './tokens'
import { dropdownMenuProps } from './dropdown'

export default defineComponent({
  name: 'ElDropdownMenu',
  props: dropdownMenuProps,
  setup(props) {
    const ns = useNamespace('dropdown')

    const { dropdownSize, role } = inject(
      DROPDOWN_INSTANCE_INJECTION_KEY,
      undefined
    )!

    const { contentRef, triggerId, isUsingKeyboard, handleClose } = inject(
      DROPDOWN_INJECTION_KEY,
      undefined
    )!

    const {
      rovingFocusGroupRef,
      rovingFocusGroupRootStyle,
      orientation,
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
      return [ns.b('menu'), ns.bm('menu', dropdownSize.value)]
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
          return handleClose(e)
        }

        onKeydown(e)
      }
    )

    function handleFocus(e: FocusEvent) {
      isUsingKeyboard.value && onFocus(e)
    }

    provide(DROPDOWN_INJECTION_KEY, {
      ...inject(DROPDOWN_INJECTION_KEY, undefined)!,
      dropdownSubMenuRef: undefined,
    })

    return {
      rovingFocusGroupRootStyle,
      dropdownKls,
      role,
      orientation,
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
