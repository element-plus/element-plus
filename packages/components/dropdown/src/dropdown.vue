<template>
  <div :class="[ns.b(), ns.is('disabled', disabled)]">
    <el-tooltip
      ref="popperRef"
      :visible="opened"
      :role="role"
      :effect="effect"
      :fallback-placements="['bottom', 'top']"
      :popper-options="popperOptions"
      :gpu-acceleration="false"
      :placement="placement"
      :popper-class="[ns.e('popper'), popperClass!]"
      :popper-style="popperStyle"
      :trigger="trigger"
      :trigger-keys="triggerKeys"
      :trigger-target-el="contentRef"
      :show-arrow="showArrow"
      :show-after="trigger === 'hover' ? showTimeout : 0"
      :hide-after="trigger === 'hover' ? hideTimeout : 0"
      :virtual-ref="virtualRef ?? triggeringElementRef"
      :virtual-triggering="virtualTriggering || splitButton"
      :disabled="disabled"
      :transition="`${ns.namespace.value}-zoom-in-top`"
      :teleported="teleported"
      pure
      focus-on-target
      :persistent="persistent"
      @before-show="handleBeforeShowTooltip"
      @show="handleShowTooltip"
      @before-hide="handleBeforeHideTooltip"
      @hide="handleHideTooltip"
    >
      <template #content>
        <el-scrollbar
          ref="scrollbar"
          :wrap-style="wrapStyle"
          :wrap-class="wrapClass"
          :view-class="ns.e('list')"
          tag="div"
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
            <slot name="dropdown" />
          </el-roving-focus-group>
          <svg
            v-if="menuTrigger === 'hover'"
            ref="hoverZoneRef"
            :class="ns.e('hover-zone')"
          ></svg>
        </el-scrollbar>
      </template>
      <template v-if="!splitButton" #default>
        <el-only-child
          :id="triggerId"
          ref="triggeringElementRef"
          role="button"
          :tabindex="tabindex"
        >
          <slot name="default" />
        </el-only-child>
      </template>
    </el-tooltip>
    <template v-if="splitButton">
      <el-button-group>
        <el-button
          ref="referenceElementRef"
          v-bind="buttonProps"
          :size="dropdownSize"
          :type="type"
          :disabled="disabled"
          :tabindex="tabindex"
          @click="handlerMainButtonClick"
        >
          <slot name="default" />
        </el-button>
        <el-button
          :id="triggerId"
          ref="triggeringElementRef"
          v-bind="buttonProps"
          role="button"
          :size="dropdownSize"
          :type="type"
          :class="ns.e('caret-button')"
          :disabled="disabled"
          :tabindex="tabindex"
          :aria-label="t('el.dropdown.toggleDropdown')"
        >
          <el-icon :class="ns.e('icon')"><arrow-down /></el-icon>
        </el-button>
      </el-button-group>
    </template>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, provide, ref, toRef, toRefs } from 'vue'
import { ElButton, ElButtonGroup } from '@element-plus/components/button'
import ElTooltip from '@element-plus/components/tooltip'
import ElScrollbar from '@element-plus/components/scrollbar'
import ElIcon from '@element-plus/components/icon'
import ElRovingFocusGroup from '@element-plus/components/roving-focus-group'
import { ElOnlyChild } from '@element-plus/components/slot'
import { useFormSize } from '@element-plus/components/form'
import { addUnit, ensureArray } from '@element-plus/utils'
import { ArrowDown } from '@element-plus/icons-vue'
import { useId, useLocale, useNamespace } from '@element-plus/hooks'
import { dropdownProps } from './dropdown'
import {
  DROPDOWN_INJECTION_KEY,
  DROPDOWN_INSTANCE_INJECTION_KEY,
} from './tokens'
import {
  useDropdownCollectionTooltipContent,
  useDropdownController,
  useDropdownHoverController,
  useDropdownHoverZone,
  useDropdownTooltip,
  useDropdownVisible,
} from './composables'

import type { CSSProperties } from 'vue'

export default defineComponent({
  name: 'ElDropdown',
  components: {
    ElButton,
    ElButtonGroup,
    ElScrollbar,
    ElTooltip,
    ElRovingFocusGroup,
    ElOnlyChild,
    ElIcon,
    ArrowDown,
  },
  props: dropdownProps,
  emits: ['visible-change', 'click', 'command'],
  setup(props, { emit }) {
    const ns = useNamespace('dropdown')
    const { t } = useLocale()
    const dropdownSize = useFormSize()

    const referenceElementRef = ref()

    const wrapStyle = computed<CSSProperties>(() => ({
      maxHeight: addUnit(props.maxHeight),
    }))
    const dropdownTriggerKls = computed(() => [ns.m(dropdownSize.value)])
    const trigger = computed(() => ensureArray(props.trigger))
    const triggerId = computed<string>(() => props.id || useId().value)

    const {
      opened,
      path,
      toggleReason,
      handleOpen,
      handleClose,
      handleToggle,
      handleCloseAll,
    } = useDropdownVisible({ triggerId, isRoot: true })

    const { triggeringElementRef, addPopperContent, removePopperContent } =
      useDropdownController({
        props,
        trigger,
        opened,
        handleOpen,
        handleToggle,
        handleCloseAll,
        handlePointerEnterTrigger: (e) => handlePointerEnterTrigger(e),
        handlePointerLeaveTrigger: (e) => handlePointerLeaveTrigger(e),
      })

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
      handleClose,
      addPopperContent,
      removePopperContent,
    })

    const {
      handlePointerEnterTrigger,
      handlePointerLeaveTrigger,
      handlePointerEnterContent,
      handlePointerLeaveContent: _handlePointerLeaveContent,
    } = useDropdownHoverController({
      trigger,
      contentRef,
      disabled: toRef(props, 'disabled'),
      showTimeout: toRef(props, 'showTimeout'),
      hideTimeout: toRef(props, 'hideTimeout'),
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
      menuTrigger: toRef(props, 'menuTrigger'),
      showTimeout: toRef(props, 'showTimeout'),
    })

    useDropdownCollectionTooltipContent({
      popperRef,
      addPopperContent,
      removePopperContent,
    })

    function handleClick() {
      handleCloseAll()
    }

    function handlePointerLeaveContent(event: PointerEvent) {
      _handlePointerLeaveContent(event)
      handleClearHoverZone()
    }

    function commandHandler(...args: any[]) {
      emit('command', ...args)
    }

    function handleBeforeShowTooltip() {
      emit('visible-change', true)
    }

    function handleBeforeHideTooltip() {
      emit('visible-change', false)
    }

    provide(DROPDOWN_INJECTION_KEY, {
      contentRef,
      hoverElementRef,
      role: computed(() => props.role),
      triggerId,
      isUsingKeyboard,
      path,
      onItemEnter,
      onItemLeave,
      handleClose,
    })

    provide(DROPDOWN_INSTANCE_INJECTION_KEY, {
      ...toRefs(props),
      dropdownSize,
      handleClick,
      commandHandler,
      addPopperContent,
      removePopperContent,
    })

    const handlerMainButtonClick = (event: MouseEvent) => {
      emit('click', event)
    }

    return {
      t,
      ns,
      scrollbar: scrollbarRef,
      wrapStyle,
      dropdownTriggerKls,
      dropdownSize,
      triggerId,
      currentTabId,
      opened,
      hoverZoneRef,
      wrapClass,
      handleCloseAll,
      handleCurrentTabIdChange,
      handlerMainButtonClick,
      handleClose,
      handleOpen,
      handleBeforeShowTooltip,
      handleShowTooltip,
      handleBeforeHideTooltip,
      handleHideTooltip,
      handlePointerEnterContent,
      handlePointerLeaveContent,
      handleDrawHoverZone,
      popperRef,
      contentRef,
      triggeringElementRef,
      referenceElementRef,
    }
  },
})
</script>
