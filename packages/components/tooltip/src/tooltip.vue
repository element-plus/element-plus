<template>
  <el-popper
    ref="popperRef"
    v-bind="derivedProps"
    :show-after="compatShowAfter"
    :show-arrow="compatShowArrow"
    :hide-after="hideAfter"
  >
    <el-tooltip-trigger :trigger="trigger" :virtual-ref="virtualRef">
      <slot />
    </el-tooltip-trigger>
    <el-tooltip-content v-bind="derivedProps">
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

import type { UnwrapRef } from 'vue'
import type { ElPopperInjectionContext } from '@element-plus/components/popper'

const { useModelToggleProps, useModelToggle, useModelToggleEmits } =
  createModelToggleComposable('visible')

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
      indicator: readonly(open),
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
      updatePopper,
      derivedProps,
      onOpen,
      onClose,
    }
  },
})
</script>
