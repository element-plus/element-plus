<script setup lang="ts">
import {
  computed,
  onDeactivated,
  provide,
  readonly,
  ref,
  toRef,
  unref,
  watch,
} from 'vue'
import {
  ElPopper,
  ElPopperArrow,
  usePopperArrowProps,
  usePopperProps,
} from '@element-plus/components/popper'

import { debugWarn, isBoolean, isUndefined } from '@element-plus/utils'
import {
  useDelayedToggle,
  useId,
  usePopperContainer,
} from '@element-plus/hooks'
import {
  createModelToggleComposableResult,
  useTooltipContentProps,
  useTooltipProps,
  useTooltipTriggerProps,
} from './tooltip'
import ElTooltipTrigger from './trigger.vue'
import { TOOLTIP_INJECTION_KEY } from './tokens'
import ElTooltipContent from './content.vue'

defineOptions({
  name: 'ElTooltip',
})

const props = defineProps({
  ...usePopperProps,
  ...createModelToggleComposableResult.useModelToggleProps,
  ...useTooltipContentProps,
  ...useTooltipTriggerProps,
  ...usePopperArrowProps,
  ...useTooltipProps,
})
const emit = defineEmits([
  ...createModelToggleComposableResult.useModelToggleEmits,
  'before-show',
  'before-hide',
  'show',
  'hide',
  'open',
  'close',
])

const { useModelToggle } = createModelToggleComposableResult

usePopperContainer()
const compatShowAfter = computed(() => {
  if (!isUndefined(props.openDelay)) {
    debugWarn(
      'ElTooltip',
      'open-delay is about to be deprecated in the next major version, please use `show-after` instead'
    )
  }
  return props.openDelay || (props.showAfter as number)
})
const compatShowArrow = computed(() => {
  if (!isUndefined(props.visibleArrow)) {
    debugWarn(
      'ElTooltip',
      '`visible-arrow` is about to be deprecated in the next major version, please use `show-arrow` instead'
    )
  }
  return isBoolean(props.visibleArrow) ? props.visibleArrow : props.showArrow
})

const id = useId()
// TODO any is temporary, replace with `InstanceType<typeof ElPopper> | null` later
const popperRef = ref<any>(null)
// TODO any is temporary, replace with `InstanceType<typeof ElTooltipContent> | null` later
const contentRef = ref<any>(null)

const updatePopper = () => {
  const popperComponent = unref(popperRef)
  if (popperComponent) {
    popperComponent.popperInstanceRef?.update()
  }
}
const open = ref(false)
const toggleReason = ref<Event | undefined>(undefined)

const { show, hide, hasUpdateHandler } = useModelToggle({
  indicator: open,
  toggleReason,
})

const { onOpen, onClose } = useDelayedToggle({
  showAfter: compatShowAfter,
  hideAfter: toRef(props, 'hideAfter'),
  open: show,
  close: hide,
})

const controlled = computed(
  () => isBoolean(props.visible) && !hasUpdateHandler.value
)

provide(TOOLTIP_INJECTION_KEY, {
  controlled,
  id,
  open: readonly(open),
  trigger: toRef(props, 'trigger'),
  onOpen: (event?: Event) => {
    onOpen(event)
  },
  onClose: (event?: Event) => {
    onClose(event)
  },
  onToggle: (event?: Event) => {
    if (unref(open)) {
      onClose(event)
    } else {
      onOpen(event)
    }
  },
  onShow: () => {
    emit('show', toggleReason.value)
  },
  onHide: () => {
    emit('hide', toggleReason.value)
  },
  onBeforeShow: () => {
    emit('before-show', toggleReason.value)
  },
  onBeforeHide: () => {
    emit('before-hide', toggleReason.value)
  },
  updatePopper,
})

watch(
  () => props.disabled,
  (disabled) => {
    if (disabled && open.value) {
      open.value = false
    }
  }
)

onDeactivated(() => open.value && hide())

const isFocusInsideContent = () => {
  const popperContent: HTMLElement | undefined =
    contentRef.value?.contentRef?.popperContentRef
  return popperContent && popperContent.contains(document.activeElement)
}

defineExpose({
  compatShowAfter,
  compatShowArrow,
  popperRef,
  contentRef,
  open,
  hide,
  isFocusInsideContent,
  updatePopper,
  onOpen,
  onClose,
  disabled: props.disabled,
})
</script>

<template>
  <el-popper ref="popperRef" :role="role">
    <el-tooltip-trigger
      :disabled="disabled"
      :trigger="trigger"
      :trigger-keys="triggerKeys"
      :virtual-ref="virtualRef"
      :virtual-triggering="virtualTriggering"
    >
      <slot v-if="$slots.default" />
    </el-tooltip-trigger>
    <el-tooltip-content
      ref="contentRef"
      :aria-label="ariaLabel"
      :boundaries-padding="boundariesPadding"
      :content="content"
      :disabled="disabled"
      :effect="effect"
      :enterable="enterable"
      :fallback-placements="fallbackPlacements"
      :hide-after="hideAfter"
      :gpu-acceleration="gpuAcceleration"
      :offset="offset"
      :persistent="persistent"
      :popper-class="popperClass"
      :popper-style="popperStyle"
      :placement="placement"
      :popper-options="popperOptions"
      :pure="pure"
      :raw-content="rawContent"
      :reference-el="referenceEl"
      :trigger-target-el="triggerTargetEl"
      :show-after="compatShowAfter"
      :strategy="strategy"
      :teleported="teleported"
      :transition="transition"
      :virtual-triggering="virtualTriggering"
      :z-index="zIndex"
      :append-to="appendTo"
    >
      <slot name="content">
        <span v-if="rawContent" v-html="content" />
        <span v-else>{{ content }}</span>
      </slot>
      <el-popper-arrow v-if="compatShowArrow" :arrow-offset="arrowOffset" />
    </el-tooltip-content>
  </el-popper>
</template>
