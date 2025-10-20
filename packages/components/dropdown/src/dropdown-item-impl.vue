<template>
  <li
    v-if="divided"
    role="separator"
    :class="ns.bem('menu', 'item', 'divided')"
  />
  <li
    :ref="itemRef"
    v-bind="{ ...dataset, ...$attrs }"
    :aria-disabled="disabled"
    :class="[ns.be('menu', 'item'), ns.is('disabled', disabled)]"
    :tabindex="tabIndex"
    :role="role"
    @click="(e) => $emit('clickimpl', e)"
    @focus="handleFocus"
    @keydown.self="handleKeydown"
    @mousedown="handleMousedown"
    @pointerenter="(e) => $emit('pointerenter', e)"
    @pointermove="(e) => $emit('pointermove', e)"
    @pointerleave="(e) => $emit('pointerleave', e)"
  >
    <el-icon v-if="icon">
      <component :is="icon" />
    </el-icon>
    <slot />
  </li>
</template>

<script lang="ts">
import { computed, defineComponent, inject } from 'vue'
import {
  ROVING_FOCUS_GROUP_ITEM_INJECTION_KEY,
  ROVING_FOCUS_ITEM_COLLECTION_INJECTION_KEY,
} from '@element-plus/components/roving-focus-group'
import { COLLECTION_ITEM_SIGN } from '@element-plus/components/collection'
import { ElIcon } from '@element-plus/components/icon'
import { useNamespace } from '@element-plus/hooks'
import {
  composeEventHandlers,
  composeRefs,
  getEventCode,
} from '@element-plus/utils'
import { EVENT_CODE } from '@element-plus/constants'
import { dropdownItemProps } from './dropdown'
import {
  DROPDOWN_INJECTION_KEY,
  DROPDOWN_INSTANCE_INJECTION_KEY,
} from './tokens'

export default defineComponent({
  name: 'DropdownItemImpl',
  components: {
    ElIcon,
  },
  props: dropdownItemProps,
  emits: ['pointerenter', 'pointermove', 'pointerleave', 'click', 'clickimpl'],
  setup(_, { emit }) {
    const ns = useNamespace('dropdown')

    const { role: menuRole } = inject(
      DROPDOWN_INSTANCE_INJECTION_KEY,
      undefined
    )!

    const { dropdownSubMenuRef, handleClose } = inject(
      DROPDOWN_INJECTION_KEY,
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
      rovingFocusCollectionItemRef,
      rovingFocusGroupItemRef,
      ...(dropdownSubMenuRef ? [dropdownSubMenuRef] : [])
    )

    const role = computed<string>(() => {
      if (menuRole.value === 'menu') {
        return 'menuitem'
      } else if (menuRole.value === 'navigation') {
        return 'link'
      }
      return 'button'
    })

    const handleKeydown = composeEventHandlers((e: KeyboardEvent) => {
      const code = getEventCode(e)

      if (code === EVENT_CODE.left) {
        e.preventDefault()
        handleClose(e)
      }

      if (
        [EVENT_CODE.enter, EVENT_CODE.numpadEnter, EVENT_CODE.space].includes(
          code
        )
      ) {
        e.preventDefault()
        e.stopImmediatePropagation()
        emit('clickimpl', e)
        return true
      }
    }, handleItemKeydown)

    return {
      ns,
      itemRef,
      dataset: {
        [COLLECTION_ITEM_SIGN]: '',
      },
      role,
      tabIndex,
      handleFocus,
      handleKeydown,
      handleMousedown,
    }
  },
})
</script>
