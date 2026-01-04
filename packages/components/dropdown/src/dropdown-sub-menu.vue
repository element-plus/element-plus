<template>
  <el-dropdown-item
    v-bind="$attrs"
    :id="triggerId"
    :divided="divided"
    :disabled="disabled"
    :icon="icon"
    :class="ns.is('selected', openedMenus.includes(triggerId))"
    :aria-controls="contentId"
    :aria-expanded="opened"
    :aria-haspopup="role"
    @keydown="handleKeydown"
    @pointerenter="handlePointerEnter"
    @pointerleave="handlePointerLeave"
    @pointerdown="handlePointerDown"
    @click="handleClick"
  >
    <div :class="ns.be('sub-menu', 'item')">
      <slot name="label">
        {{ label }}
      </slot>
      <slot name="icon" :opened="opened">
        <el-icon
          :class="ns.e('arrow-icon')"
          :style="{ transform: opened ? 'rotateZ(180deg)' : 'none' }"
        >
          <arrow-right />
        </el-icon>
      </slot>
    </div>
  </el-dropdown-item>
  <el-tooltip
    ref="popperRef"
    :visible="opened"
    :role="role"
    :effect="effect"
    :placement="placement"
    :fallback-placements="fallbackPlacements"
    :trigger="trigger"
    :trigger-target-el="contentRef"
    :offset="offset"
    :show-arrow="showArrow"
    :show-after="menuTrigger === 'hover' ? showTimeout : 0"
    :hide-after="menuTrigger === 'hover' ? hideTimeout : 0"
    :popper-class="[ns.e('popper'), popperClass!]"
    :popper-style="popperStyle"
    :disabled="disabled"
    :transition="`${ns.namespace.value}-zoom-in-left`"
    :gpu-acceleration="false"
    :stop-popper-mouse-event="false"
    :teleported="teleported"
    :append-to="appendTo"
    :persistent="persistent"
    :virtual-ref="dropdownSubMenuRef"
    virtual-triggering
    pure
    focus-on-target
    @show="handleShowTooltip"
    @hide="handleHideTooltip"
  >
    <template #content>
      <el-scrollbar
        ref="scrollbarRef"
        tag="div"
        :wrap-style="wrapStyle"
        :wrap-class="wrapClass"
        :view-class="ns.e('list')"
        @pointerenter="handlePointerEnterContent"
        @pointerleave="handlePointerLeaveContent"
        @pointermove="handleDrawHoverZone"
      >
        <el-roving-focus-group
          :loop="loop"
          :current-tab-id="currentTabId"
          orientation="vertical"
          @current-tab-id-change="handleCurrentTabIdChange"
        >
          <el-dropdown-menu>
            <slot />
          </el-dropdown-menu>
        </el-roving-focus-group>
        <!-- eslint-disable vue/html-self-closing -->
        <svg
          v-if="menuTrigger === 'hover'"
          ref="hoverZoneRef"
          :class="ns.e('hover-zone')"
        ></svg>
        <!-- eslint-enable vue/html-self-closing -->
      </el-scrollbar>
    </template>
  </el-tooltip>
</template>

<script lang="ts" setup>
import { computed, inject, provide, ref, toRef } from 'vue'
import { ArrowRight } from '@element-plus/icons-vue'
import { ElTooltip } from '@element-plus/components/tooltip'
import { ElScrollbar } from '@element-plus/components/scrollbar'
import { ElIcon } from '@element-plus/components/icon'
import { ElRovingFocusGroup } from '@element-plus/components/roving-focus-group'
import { useId, useNamespace } from '@element-plus/hooks'
import {
  addUnit,
  composeEventHandlers,
  ensureArray,
  getEventCode,
} from '@element-plus/utils'
import { EVENT_CODE } from '@element-plus/constants'
import ElDropdownItem from './dropdown-item.vue'
import ElDropdownMenu from './dropdown-menu.vue'
import { dropdownSubMenuEmits, dropdownSubMenuProps } from './dropdown'
import {
  DROPDOWN_INJECTION_KEY,
  DROPDOWN_INSTANCE_INJECTION_KEY,
} from './tokens'
import {
  useDropdownCollectionTooltipContent,
  useDropdownHoverController,
  useDropdownHoverZone,
  useDropdownTooltip,
  useDropdownVisible,
} from './composables'

import type { CSSProperties } from 'vue'

defineOptions({ name: 'ElDropdownSubMenu' })

const props = defineProps(dropdownSubMenuProps)
const emit = defineEmits(dropdownSubMenuEmits)

const {
  loop,
  menuTrigger,
  effect,
  showTimeout,
  hideTimeout,
  maxHeight,
  role,
  persistent,
  menuPopperOffset,
  menuPlacement,
  openedMenus,
  addPopperContent,
  removePopperContent,
} = inject(DROPDOWN_INSTANCE_INJECTION_KEY, undefined)!
const {
  contentRef: parentContentRef,
  hoverElementRef: parenthoverElementRef,
  handleClose: handleCloseParent,
} = inject(DROPDOWN_INJECTION_KEY, undefined)!

const ns = useNamespace('dropdown')
const triggerId = useId()

const dropdownSubMenuRef = ref<HTMLElement>()

const trigger = computed(() => ensureArray(menuTrigger.value))
const offset = computed(() => props.popperOffset ?? menuPopperOffset.value)
const placement = computed(() => props.placement ?? menuPlacement.value)

const wrapStyle = computed<CSSProperties>(() => ({
  maxHeight: addUnit(maxHeight.value),
}))

const { opened, path, toggleReason, handleOpen, handleClose, handleToggle } =
  useDropdownVisible({ triggerId, openedMenus })

const {
  popperRef,
  contentRef,
  currentTabId,
  isUsingKeyboard,
  onItemEnter,
  onItemLeave,
  handleShowTooltip,
  handleHideTooltip,
  isFocusInsideContent,
  handleCurrentTabIdChange,
} = useDropdownTooltip({
  trigger,
  toggleReason,
  addPopperContent,
  removePopperContent,
  handleClose,
})

const {
  handlePointerEnterTrigger,
  handlePointerLeaveTrigger,
  handlePointerDownTrigger,
  handlePointerEnterContent,
  handlePointerLeaveContent: _handlePointerLeaveContent,
} = useDropdownHoverController({
  trigger,
  parentContentRef,
  contentRef,
  disabled: toRef(props, 'disabled'),
  showTimeout,
  hideTimeout,
  handleOpen,
  handleClose,
})

const {
  scrollbarRef,
  hoverZoneRef,
  hoverElementRef,
  wrapClass,
  handleDrawHoverZone,
  handleClearHoverZone,
} = useDropdownHoverZone({
  ns,
  menuTrigger,
  showTimeout,
})

useDropdownCollectionTooltipContent({
  popperRef,
  addPopperContent,
  removePopperContent,
})

const contentId = computed(() => popperRef.value?.contentRef?.id)

const handlePointerEnter = composeEventHandlers((event: PointerEvent) => {
  emit('pointerenter', event)
  parenthoverElementRef.value = event.currentTarget as HTMLElement
  return event.defaultPrevented
}, handlePointerEnterTrigger)

const handlePointerLeave = composeEventHandlers((event: PointerEvent) => {
  emit('pointerleave', event)
  return event.defaultPrevented
}, handlePointerLeaveTrigger)

const handlePointerDown = composeEventHandlers((event: PointerEvent) => {
  emit('pointerdown', event)
  return event.defaultPrevented
}, handlePointerDownTrigger)

const handleClick = composeEventHandlers(
  (event: MouseEvent) => {
    if (props.disabled) return
    emit('click', event)
    return event.type !== 'keydown' && event.defaultPrevented
  },
  (event) => {
    event.preventDefault()
    if (props.disabled) {
      event.stopImmediatePropagation()
      return
    }
    if (trigger.value.includes('click')) {
      handleToggle(event)
    }
  }
)

function handlePointerLeaveContent(event: PointerEvent) {
  _handlePointerLeaveContent(event)
  handleClearHoverZone()
}

function handleKeydown(event: KeyboardEvent) {
  const code = getEventCode(event)

  switch (code) {
    case EVENT_CODE.right:
      event.preventDefault()
      handleOpen(event)
      break
    case EVENT_CODE.left:
      event.preventDefault()
      handleCloseParent(event)
      break
  }
}

provide(DROPDOWN_INJECTION_KEY, {
  contentRef,
  dropdownSubMenuRef,
  hoverElementRef,
  triggerId,
  isUsingKeyboard,
  path,
  onItemEnter,
  onItemLeave,
  handleClose,
  isFocusInsideContent,
})
</script>
