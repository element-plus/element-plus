<template>
  <div
    :ref="itemRef"
    v-bind="dataset"
    :aria-disabled="disabled"
    :class="{
      'el-dropdown-menu__item': true,
      'is-disabled': disabled,
      'el-dropdown-menu__item--divided': divided,
    }"
    :tabindex="tabIndex"
    @click="(e) => $emit('click', e)"
    @focus="handleFocus"
    @keydown="handleKeydown"
    @mousedown="handleMousedown"
    @pointermove="(e) => $emit('pointermove', e)"
    @pointerleave="(e) => $emit('pointerleave', e)"
    role="menuitem"
  >
    <el-icon v-if="icon"><component :is="icon" /></el-icon>
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent, inject } from 'vue'
import {
  ROVING_FOCUS_GROUP_ITEM_INJECTION_KEY,
  ROVING_FOCUS_ITEM_COLLECTION_INJECTION_KEY,
} from '@element-plus/components/roving-focus-group'
import { COLLECTION_ITEM_SIGN } from '@element-plus/components/collection'
import { EVENT_CODE } from '@element-plus/utils/aria'
import { composeEventHandlers, composeRefs } from '@element-plus/utils/dom'
import {
  DROPDOWN_COLLECTION_ITEM_INJECTION_KEY,
  dropdownItemProps,
} from './dropdown'

export default defineComponent({
  name: 'DropdownItemImpl',
  props: dropdownItemProps,
  emits: ['pointermove', 'pointerleave', 'click'],
  setup(_, { emit }) {
    const { collectionItemRef: dropdownCollectionItemRef } = inject(
      DROPDOWN_COLLECTION_ITEM_INJECTION_KEY,
      undefined
    )!

    const { collectionItemRef: rovingFocusCollectionItemRef } = inject(
      ROVING_FOCUS_ITEM_COLLECTION_INJECTION_KEY,
      undefined
    )!

    const {
      rovingFocusGroupItemRef,
      tabIndex,
      handleFocus,
      handleKeydown: handleItemKeydown,
      handleMousedown,
    } = inject(ROVING_FOCUS_GROUP_ITEM_INJECTION_KEY, undefined)!

    const itemRef = composeRefs(
      dropdownCollectionItemRef,
      rovingFocusCollectionItemRef,
      rovingFocusGroupItemRef
    )

    const handleKeydown = composeEventHandlers((e: KeyboardEvent) => {
      const { code } = e
      if (code === EVENT_CODE.enter || code === EVENT_CODE.space) {
        e.preventDefault()
        e.stopImmediatePropagation()
        emit('click', e)
        return true
      }
    }, handleItemKeydown)

    return {
      itemRef,
      dataset: {
        [COLLECTION_ITEM_SIGN]: '',
      },
      tabIndex,
      handleFocus,
      handleKeydown,
      handleMousedown,
    }
  },
})
</script>
