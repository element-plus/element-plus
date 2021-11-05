<template>
  <div :class="['el-popper']" :style="style">
    <trigger
      ref="triggerRef"
      @click="onTriggerClick"
      @mouseenter="onTriggerMouseEnter"
      @mouseleave="onTriggerMouseLeave"
      @focus="onTriggerFocus"
      @blur="onTriggerBlur"
    >
      <slot name="trigger" />
    </trigger>
    <el-teleport v-if="renderTeleport" :disabled="!appendToBody">
      <transition :name="transition" v-bind="transitionFallthrough">
        <div
          v-if="isShow"
          :id="popperId"
          :class="contentKls"
          :style="contentStyle"
          role="tooltip"
          @click.stop
          @mouseup="mouseUpAndDown"
          @mousedown="mouseUpAndDown"
          @mouseenter="popperMouseEnter"
          @mouseleave="popperMouseLeave"
        >
          <slot>
            {{ content }}
          </slot>
          <div
            v-if="showArrow"
            ref="arrowRef"
            class="el-popper__arrow"
            data-popper-arrow=""
          ></div>
        </div>
      </transition>
    </el-teleport>
  </div>
</template>

<script lang="ts">
import {
  computed,
  defineComponent,
  getCurrentInstance,
  nextTick,
  ref,
  unref,
} from 'vue'
import { isFunction, NOOP } from '@vue/shared'
import { createPopper } from '@popperjs/core'
import ElTeleport from '@element-plus/components/teleport'
import {
  useTransitionFallthrough,
  useTransitionFallthroughEmits,
  useModelToggle,
  useModelToggleEmits,
  useModelToggleProps,
  useTimeout,
} from '@element-plus/hooks'
import PopupManager from '@element-plus/utils/popup-manager'
import { generateId, isHTMLElement, isString } from '@element-plus/utils/util'
import { stop } from '@element-plus/utils/dom'

import Trigger from './trigger'
import { usePopperProps } from './popper'

import type { ComponentPublicInstance, Ref } from 'vue'
import type { Instance } from '@popperjs/core'

export default defineComponent({
  components: {
    ElTeleport,
    Trigger,
  },
  props: { ...usePopperProps, ...useModelToggleProps },
  emits: [...useTransitionFallthroughEmits, ...useModelToggleEmits],
  setup(props) {
    const popperId = `el-popper-${generateId()}`
    const { props: vmProps } = getCurrentInstance()!
    const triggerRef = ref<{ el: Ref<HTMLElement | ComponentPublicInstance> }>()
    const popperRef = ref<HTMLElement>()
    const isShow = ref(props.modelValue || false)
    const renderTeleport = ref(false)
    const { show, hide } = useModelToggle({
      indicator: isShow,
      onShow,
      onHide,
    })

    const hasUpdateFunctions = computed(() => {
      return isFunction(vmProps['onUpdate:visible'])
    })

    const contentZIndex = ref(PopupManager.nextZIndex())

    const contentStyle = computed(() => {
      return [{ zIndex: unref(contentZIndex) }, props.popperStyle]
    })

    const mouseUpAndDown = computed(() =>
      props.stopPopperMouseEvent ? stop : NOOP
    )

    const isManual = computed(
      () => props.manualMode || props.trigger === 'manual'
    )

    const { registerTimeout, cancelTimeout } = useTimeout()
    let popperInstance: Instance
    let triggerFocused = false

    const contentKls = computed(() => {
      return [
        {
          'el-popper': true,
          'is-pure': props.pure,
          [`is-${props.effect}`]: true,
        },
        props.popperClass,
      ]
    })

    const { onAfterEnter, onAfterLeave, onBeforeEnter, onBeforeLeave } =
      useTransitionFallthrough()

    const transitionFallthrough = {
      onAfterEnter,
      onAfterLeave,
      onBeforeEnter,
      onBeforeLeave,
    }

    const popperMouseEnter = () => {
      if (props.enterable && props.trigger !== 'click') {
        cancelTimeout()
      }
    }

    const popperMouseLeave = () => {
      const { trigger } = props

      const shouldPreventHide =
        (isString(trigger) && (trigger === 'click' || trigger === 'focus')) ||
        (trigger.length === 1 &&
          (trigger[0] === 'click' || trigger[0] === 'focus'))

      if (!shouldPreventHide) {
        delayHide()
      }
    }

    const onTriggerClick = () => {
      if (triggerFocused) {
        triggerFocused = false
      } else {
        onToggle()
      }
    }

    const onTriggerMouseEnter = delayShow
    const onTriggerMouseLeave = delayHide
    const onTriggerFocus = delayShow
    const onTriggerBlur = delayHide

    function initPopper() {
      if (!unref(isShow)) return

      let triggerEl = unref(unref(triggerRef)?.el)

      if (!isHTMLElement(triggerEl)) {
        triggerEl = (triggerEl as ComponentPublicInstance).$el
      }

      const contentEl = unref(popperRef)

      if (!triggerEl || !contentEl) return

      popperInstance = createPopper(triggerEl as HTMLElement, contentEl)

      popperInstance.update()
    }

    function delayShow() {
      if (unref(isManual) || props.disabled) return

      registerTimeout(() => show(), props.showAfter)
    }

    function delayHide() {
      if (unref(isManual) || props.disabled) return

      registerTimeout(() => hide(), props.hideAfter)
    }

    function detachPopper() {
      if (popperInstance) {
        popperInstance.destroy()
        ;(popperInstance as any) = undefined
      }
    }

    function onShow() {
      contentZIndex.value = PopupManager.nextZIndex()
      nextTick(initPopper)
    }

    function onHide() {
      nextTick(detachPopper)
    }

    function onToggle() {
      if (unref(isShow)) {
        delayShow()
      } else {
        delayHide()
      }
    }

    return {
      triggerRef,
      popperRef,
      popperId,
      contentKls,
      contentStyle,
      renderTeleport,
      transitionFallthrough,
      mouseUpAndDown,
      isShow,
      popperMouseEnter,
      popperMouseLeave,

      onTriggerClick,
      onTriggerMouseEnter,
      onTriggerMouseLeave,
      onTriggerFocus,
      onTriggerBlur,
    }
  },
})
</script>
