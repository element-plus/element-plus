<template>
  <div :class="wrapperKls" :style="style">
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
    <el-teleport v-if="persistent || renderTeleport" :disabled="!appendToBody">
      <transition :name="transition" v-bind="transitionFallthrough">
        <div
          v-if="persistent || isShow"
          v-show="isShow"
          :id="popperId"
          :class="contentKls"
          :style="contentStyle"
          role="tooltip"
          ref="popperRef"
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
import { computed, defineComponent, nextTick, ref, unref } from 'vue'
import { NOOP } from '@vue/shared'
import { createPopper } from '@popperjs/core'
import ElTeleport from '@element-plus/components/teleport'
import {
  useTransitionFallthrough,
  useTransitionFallthroughEmits,
  useModelToggle,
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
  props: usePopperProps,
  emits: [...useTransitionFallthroughEmits, 'update:visible'],
  setup(props) {
    const popperId = `el-popper-${generateId()}`
    const triggerRef = ref<{ el: Ref<HTMLElement | ComponentPublicInstance> }>()
    const popperRef = ref<HTMLElement>()
    const isShow = ref(props.visible || false)
    const renderTeleport = ref(false)
    const contentZIndex = ref(PopupManager.nextZIndex())

    const { show, hide } = useModelToggle({
      indicator: isShow,
      onShow,
      modelKey: 'visible',
    })

    const wrapperKls = computed(() => props.class)

    const contentStyle = computed(() => {
      return [{ zIndex: unref(contentZIndex) }, props.popperStyle]
    })

    const mouseUpAndDown = computed(() =>
      props.stopPopperMouseEvent ? stop : NOOP
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
      onAfterLeave: () => {
        if (!unref(isShow)) {
          renderTeleport.value = false
          onAfterLeave()
        }
      },
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
        nextTick(detachPopper)
      } else {
        onToggle()
      }
    }

    const onTriggerMouseEnter = () => delayShow()
    const onTriggerMouseLeave = () => delayHide()
    const onTriggerFocus = () => delayShow()
    const onTriggerBlur = () => delayHide()

    function delayShow() {
      if (props.disabled) return
      renderTeleport.value = true
      registerTimeout(() => show(), props.showAfter)
    }

    function delayHide() {
      if (props.disabled) return
      registerTimeout(() => hide(), props.hideAfter)
    }

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
      wrapperKls,
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
