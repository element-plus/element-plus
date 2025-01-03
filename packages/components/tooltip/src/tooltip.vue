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
      :show-after="showAfter"
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
      <el-popper-arrow v-if="showArrow" :arrow-offset="arrowOffset" />
    </el-tooltip-content>
  </el-popper>
</template>

<script lang="ts" setup>
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
import { ElPopper, ElPopperArrow } from '@element-plus/components/popper'

import { isBoolean } from '@element-plus/utils'
import {
  useDelayedToggle,
  useId,
  usePopperContainer,
} from '@element-plus/hooks'
import { TOOLTIP_INJECTION_KEY } from './constants'
import { tooltipEmits, useTooltipModelToggle, useTooltipProps } from './tooltip'
import ElTooltipTrigger from './trigger.vue'
import ElTooltipContent from './content.vue'
import type { TooltipContentInstance } from './content'
import type { PopperInstance } from '@element-plus/components/popper'
import type { Ref } from 'vue'

defineOptions({
  name: 'ElTooltip',
})

const props = defineProps(useTooltipProps)
const emit = defineEmits(tooltipEmits)

usePopperContainer()

const id = useId()
const popperRef = ref<PopperInstance>()
const contentRef = ref<TooltipContentInstance>()

const updatePopper = () => {
  const popperComponent = unref(popperRef)
  if (popperComponent) {
    popperComponent.popperInstanceRef?.update()
  }
}
const open = ref(false)
const toggleReason = ref<Event>()

const { show, hide, hasUpdateHandler } = useTooltipModelToggle({
  indicator: open,
  toggleReason,
})

const { onOpen, onClose } = useDelayedToggle({
  showAfter: toRef(props, 'showAfter'),
  hideAfter: toRef(props, 'hideAfter'),
  autoClose: toRef(props, 'autoClose'),
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

const isFocusInsideContent = (event?: FocusEvent) => {
  return contentRef.value?.isFocusInsideContent(event)
}

onDeactivated(() => open.value && hide())

defineExpose<{
  popperRef: Ref<PopperInstance | undefined>
  contentRef: Ref<TooltipContentInstance | undefined>
  isFocusInsideContent: (event?: FocusEvent) => boolean | undefined
  updatePopper: () => void
  onOpen: (event?: Event) => void
  onClose: (event?: Event) => void
  hide: () => void
}>({
  /**
   * @description el-popper component instance
   */
  popperRef,
  /**
   * @description el-tooltip-content component instance
   */
  contentRef,
  /**
   * @description validate current focus event is trigger inside el-tooltip-content
   */
  isFocusInsideContent,
  /**
   * @description update el-popper component instance
   */
  updatePopper,
  /**
   * @description expose onOpen function to mange el-tooltip open state
   */
  onOpen,
  /**
   * @description expose onOpen function to mange el-tooltip open state
   */
  onClose,
  /**
   * @description expose hide function
   */
  hide,
})
</script>
