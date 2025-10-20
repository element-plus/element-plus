<template>
  <el-dropdown-item
    :id="triggerId"
    :divided="divided"
    :disabled="disabled"
    :icon="icon"
    :class="ns.is('selected', openedMenus.includes(triggerId))"
    @keydown="handleKeydown"
    @pointerenter="handlePointerEnter"
    @pointerleave="handlePointerLeave"
    @click.capture.stop="handleClick"
  >
    <div :class="ns.be('sub-menu', 'item')">
      <slot name="title">
        {{ label }}
      </slot>
      <el-icon
        :class="ns.e('arrow-icon')"
        :style="{ transform: opened ? 'rotateZ(180deg)' : 'none' }"
      >
        <arrow-right />
      </el-icon>
    </div>
  </el-dropdown-item>
  <el-tooltip
    ref="popperRef"
    :visible="opened"
    :role="role"
    :effect="effect"
    :placement="placement"
    :fallback-placements="['right-start', 'left-start']"
    :trigger="trigger"
    :trigger-target-el="contentRef"
    :offset="popperOffset"
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
        tag="div"
        :wrap-style="wrapStyle"
        :view-class="ns.e('list')"
        @pointerenter="handlePointerEnterContent"
        @pointerleave="handlePointerLeaveContent"
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
  whenMouse,
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
  addPopperContent,
  removePopperContent,
} = inject(DROPDOWN_INSTANCE_INJECTION_KEY, undefined)!
const { contentRef: parentContentRef, handleClose: handleCloseParent } = inject(
  DROPDOWN_INJECTION_KEY,
  undefined
)!

const ns = useNamespace('dropdown')
const triggerId = useId()

const dropdownSubMenuRef = ref<HTMLElement>()

const trigger = computed(() => ensureArray(menuTrigger.value))

const wrapStyle = computed<CSSProperties>(() => ({
  maxHeight: addUnit(maxHeight.value),
}))

const {
  openedMenus,
  opened,
  path,
  toggleReason,
  handleOpen,
  handleClose,
  handleToggle,
} = useDropdownVisible({ triggerId })

const {
  popperRef,
  contentRef,
  currentTabId,
  isUsingKeyboard,
  onItemEnter,
  onItemLeave,
  handleShowTooltip,
  handleHideTooltip,
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
  handlePointerEnterContent,
  handlePointerLeaveContent,
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

useDropdownCollectionTooltipContent({
  popperRef,
  addPopperContent,
  removePopperContent,
})

const handlePointerEnter = composeEventHandlers((event: PointerEvent) => {
  emit('pointerenter', event)
  return event.defaultPrevented
}, whenMouse(handlePointerEnterTrigger))

const handlePointerLeave = composeEventHandlers((event: PointerEvent) => {
  emit('pointerleave', event)
  return event.defaultPrevented
}, whenMouse(handlePointerLeaveTrigger))

const handleClick = composeEventHandlers(
  (event: MouseEvent) => {
    if (props.disabled) return
    emit('click', event)
    return event.type !== 'keydown' && event.defaultPrevented
  },
  (event) => {
    if (props.disabled) {
      event.stopImmediatePropagation()
      return
    }
    if (trigger.value.includes('click')) {
      handleToggle(event)
    }
  }
)

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
  triggerId,
  isUsingKeyboard,
  path,
  onItemEnter,
  onItemLeave,
  handleClose,
})
</script>
