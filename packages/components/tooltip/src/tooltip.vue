<template>
  <el-popper ref="popperRef">
    <el-tooltip-trigger
      :disabled="disabled"
      :trigger="trigger"
      :virtual-ref="virtualRef"
      :virtual-triggering="virtualTriggering"
    >
      <slot v-if="$slots.default" />
    </el-tooltip-trigger>
    <el-tooltip-content
      :aria-label="ariaLabel"
      :boundaries-padding="boundariesPadding"
      :content="content"
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
      :show-after="compatShowAfter"
      :strategy="strategy"
      :teleported="teleported"
      :transition="transition"
      :z-index="zIndex"
    >
      <slot name="content">
        <span v-if="rawContent" v-html="content"></span>
        <span v-else>{{ content }}</span>
      </slot>
      <el-popper-arrow v-if="compatShowArrow" :arrow-offset="arrowOffset" />
    </el-tooltip-content>
  </el-popper>
</template>

<script lang="ts">
import {
  defineComponent,
  computed,
  ref,
  provide,
  toRef,
  readonly,
  unref,
} from 'vue'
import {
  ElPopper,
  ElPopperArrow,
  usePopperArrowProps,
} from '@element-plus/components/popper'

import { debugWarn } from '@element-plus/utils/error'
import { isBool, isUndefined } from '@element-plus/utils/util'
import {
  usePopperContainer,
  useId,
  createModelToggleComposable,
  useDelayedToggle,
} from '@element-plus/hooks'
import ElTooltipContent from './content.vue'
import ElTooltipTrigger from './trigger.vue'
import {
  useTooltipContentProps,
  useTooltipTriggerProps,
  useTooltipProps,
} from './tooltip'
import { TOOLTIP_INJECTION_KEY } from './tokens'

const { useModelToggleProps, useModelToggle, useModelToggleEmits } =
  createModelToggleComposable('visible' as const)

export default defineComponent({
  name: 'ElTooltip',
  components: {
    ElPopper,
    ElPopperArrow,
    ElTooltipContent,
    ElTooltipTrigger,
  },
  props: {
    ...useModelToggleProps,
    ...useTooltipContentProps,
    ...useTooltipTriggerProps,
    ...usePopperArrowProps,
    ...useTooltipProps,
  },
  emits: [...useModelToggleEmits, 'show', 'hide'],
  setup(props, { attrs, emit }) {
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
      return isBool(props.visibleArrow) ? props.visibleArrow : props.showArrow
    })

    const id = useId()
    const popperRef = ref<InstanceType<typeof ElPopper> | null>(null)

    const updatePopper = () => {
      const popperComponent = unref(popperRef)
      if (popperComponent) {
        popperComponent.popperInstanceRef?.update()
      }
    }
    const open = ref(false)

    const { show, hide } = useModelToggle({
      indicator: open,
    })

    const { onOpen, onClose } = useDelayedToggle({
      showAfter: compatShowAfter,
      hideAfter: toRef(props, 'hideAfter'),
      open: show,
      close: hide,
    })

    const controlled = computed(() => isBool(props.visible))

    const derivedProps = computed(() => {
      return {
        ...props,
        ...attrs,
      }
    })

    provide(TOOLTIP_INJECTION_KEY, {
      controlled,
      id,
      open: readonly(open),
      trigger: toRef(props, 'trigger'),
      onOpen,
      onClose,
      onToggle: () => {
        if (unref(open)) {
          onClose()
        } else {
          onOpen()
        }
      },
      onShow: () => {
        emit('show')
      },
      onHide: () => {
        emit('hide')
      },
    })

    return {
      compatShowAfter,
      compatShowArrow,
      popperRef,
      open,
      updatePopper,
      derivedProps,
      onOpen,
      onClose,
    }
  },
})
</script>
