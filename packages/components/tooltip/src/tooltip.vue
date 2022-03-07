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
      :show-after="compatShowAfter"
      :strategy="strategy"
      :teleported="teleported"
      :transition="transition"
      :z-index="zIndex"
      :append-to="appendTo"
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
  watch,
} from 'vue'
import {
  ElPopper,
  ElPopperArrow,
  usePopperArrowProps,
} from '@element-plus/components/popper'

import { debugWarn, isBoolean, isUndefined } from '@element-plus/utils'
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
  emits: [...useModelToggleEmits, 'before-show', 'before-hide', 'show', 'hide'],
  setup(props, { emit }) {
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
      return isBoolean(props.visibleArrow)
        ? props.visibleArrow
        : props.showArrow
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

    const controlled = computed(() => isBoolean(props.visible))

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
      onBeforeShow: () => {
        emit('before-show')
      },
      onBeforeHide: () => {
        emit('before-hide')
      },
      updatePopper,
    })

    watch(
      () => props.disabled,
      () => {
        if (props.disabled && open.value) {
          open.value = false
        }
      }
    )

    return {
      compatShowAfter,
      compatShowArrow,
      popperRef,
      open,
      hide,
      updatePopper,
      onOpen,
      onClose,
    }
  },
})
</script>
