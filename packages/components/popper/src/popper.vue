<template>
  <div :class="wrapperKls" :style="style">
    <template v-if="!isVirtualTrigger">
      <trigger
        v-if="!isControlled"
        ref="triggerRef"
        v-click-outside="delayHide"
        @click="onTriggerClick"
        @contextmenu="onTriggerContextualMenu"
        @mouseenter="onTriggerMouseEnter"
        @mouseleave="onTriggerMouseLeave"
        @focus="onTriggerFocus"
        @blur="onTriggerBlur"
      >
        <slot name="trigger" />
      </trigger>
      <trigger
        v-else
        ref="triggerRef"
        @click="onTriggerClick"
        @contextmenu="onTriggerContextualMenu"
        @mouseenter="onTriggerMouseEnter"
        @mouseleave="onTriggerMouseLeave"
        @focus="onTriggerFocus"
        @blur="onTriggerBlur"
      >
        <slot name="trigger" />
      </trigger>
    </template>

    <el-teleport
      v-if="persistent || renderTeleport"
      :container="POPPER_CONTAINER_SELECTOR"
      :disabled="!appendToBody"
    >
      <transition :name="transition" v-bind="transitionFallthrough">
        <div
          v-if="persistent || isShow"
          v-show="isShow"
          :id="popperId"
          ref="popperRef"
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
import { computed, defineComponent, nextTick, ref, unref } from 'vue'
import { createPopper } from '@popperjs/core'
import ElTeleport from '@element-plus/components/teleport'
import { ClickOutside } from '@element-plus/directives'
import {
  useTransitionFallthrough,
  useTransitionFallthroughEmits,
  useModelToggle,
  useTimeout,
} from '@element-plus/hooks'
import PopupManager from '@element-plus/utils/popup-manager'
import {
  generateId,
  isHTMLElement,
  isString,
  isArray,
} from '@element-plus/utils/util'
import { stop } from '@element-plus/utils/dom'

import Trigger from './trigger'
import { usePopperProps } from './popper'
import { usePopperContainer, POPPER_CONTAINER_SELECTOR } from './container'
import { usePopperOptions } from './popper-options'
import { useTriggeringElement } from './triggering-element'

import type { ComponentPublicInstance, Ref, StyleValue } from 'vue'
import type { Instance } from '@popperjs/core'
import type { PopperTrigger } from './popper'

export default defineComponent({
  components: {
    ElTeleport,
    Trigger,
  },
  directives: {
    ClickOutside,
  },
  props: usePopperProps,
  emits: [...useTransitionFallthroughEmits, 'update:visible'],
  setup(props, { slots }) {
    const popperId = `el-popper-${generateId()}`
    const triggerRef = ref<{ el: Ref<HTMLElement | ComponentPublicInstance> }>()
    const popperRef = ref<HTMLElement>()
    const arrowRef = ref<HTMLElement>()
    const isShow = ref(props.visible || false)
    const renderTeleport = ref(false)
    const contentZIndex = ref(PopupManager.nextZIndex())
    usePopperContainer()

    const { show, hide } = useModelToggle({
      indicator: isShow,
      onShow,
      modelKey: 'visible',
    })

    const popperOptions = usePopperOptions(arrowRef)

    const isControlled = computed(() => props.visible !== null)

    const wrapperKls = computed(() => props.class)

    const contentStyle = computed<StyleValue>(() => {
      return [{ zIndex: unref(contentZIndex) }, props.popperStyle || {}]
    })

    const contentKls = computed(() => {
      return [
        {
          'el-popper': true,
          'is-pure': props.pure,
          [`is-${props.effect}`]: !props.pure,
        },
        props.popperClass,
      ]
    })

    const isVirtualTrigger = computed(() => {
      return !slots.trigger
    })

    const triggeringElement = computed(() => {
      const isVirtualTriggering = unref(isVirtualTrigger)

      if (isVirtualTriggering && !props.triggeringElement) {
        return null
      }

      let triggerEl: HTMLElement

      if (!isVirtualTriggering) {
        triggerEl = unref(unref(triggerRef)?.el) as any
      } else {
        triggerEl = props.triggeringElement!
      }

      if (!isHTMLElement(triggerEl)) {
        triggerEl = (triggerEl as any as ComponentPublicInstance)?.$el
      }

      return triggerEl
    })

    useTriggeringElement(
      {
        isVirtualTriggering: isVirtualTrigger,
        triggeringElement,
      },
      {
        click: onTriggerClick,
        contextmenu: onTriggerContextualMenu,
        mouseenter: onTriggerMouseEnter,
        mouseleave: onTriggerMouseLeave,
        focus: onTriggerFocus,
        blur: onTriggerBlur,
      }
    )

    const includesTrigger = (trigger: PopperTrigger) => {
      return (
        props.trigger === trigger ||
        (isArray(props.trigger) ? props.trigger : []).includes(trigger)
      )
    }

    const isHoverTriggering = computed(() => includesTrigger('hover'))

    const isFocusTriggering = computed(() => includesTrigger('focus'))

    const mouseUpAndDown = (e: Event) => {
      if (props.stopPopperMouseEvent) {
        stop(e)
      }
    }

    const { registerTimeout, cancelTimeout } = useTimeout()
    let popperInstance: Instance
    let triggerFocused = false

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
        (isString(trigger) && trigger !== 'hover') ||
        (trigger.length === 1 && trigger[0] !== 'hover')

      if (!shouldPreventHide) {
        delayHide()
      }
    }

    function onTriggerClick() {
      if (includesTrigger('click')) {
        if (triggerFocused) {
          triggerFocused = false
          nextTick(detachPopper)
        } else {
          onToggle()
        }
      }
    }

    function onTriggerMouseEnter() {
      if (unref(isHoverTriggering)) {
        delayShow()
      }
    }
    function onTriggerMouseLeave() {
      if (unref(isHoverTriggering)) {
        delayHide()
      }
    }

    function onTriggerFocus() {
      if (unref(isFocusTriggering)) {
        delayShow()
      }
    }
    function onTriggerBlur() {
      if (unref(isFocusTriggering)) {
        delayHide()
      }
    }

    // note that fo contextual menu trigger, the default behavior will be prevented
    function onTriggerContextualMenu(e: Event) {
      if (includesTrigger('contextmenu')) {
        e.preventDefault()
        onToggle()
      }
    }

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

      const triggerEl = unref(triggeringElement)

      const contentEl = unref(popperRef)

      if (!triggerEl || !contentEl) return

      popperInstance = createPopper(
        triggerEl as HTMLElement,
        contentEl,
        unref(popperOptions)
      )

      popperInstance.update()
    }

    function detachPopper() {
      if (popperInstance) {
        popperInstance.destroy()
        ;(popperInstance as any) = undefined
      }
    }

    function doShow() {
      contentZIndex.value = PopupManager.nextZIndex()
      nextTick(initPopper)
    }

    function onShow() {
      if (unref(isControlled)) {
        renderTeleport.value = true
        registerTimeout(() => doShow(), props.showAfter)
      } else {
        doShow()
      }
    }

    function onToggle() {
      if (unref(isShow)) {
        delayHide()
      } else {
        delayShow()
      }
    }

    return {
      arrowRef,
      triggerRef,
      popperRef,
      popperId,
      wrapperKls,
      contentKls,
      contentStyle,
      renderTeleport,
      transitionFallthrough,
      isShow,
      isControlled,
      isVirtualTrigger,
      POPPER_CONTAINER_SELECTOR,
      delayHide,
      mouseUpAndDown,
      onTriggerContextualMenu,
      onTriggerClick,
      onTriggerMouseEnter,
      onTriggerMouseLeave,
      onTriggerFocus,
      onTriggerBlur,
      popperMouseEnter,
      popperMouseLeave,
    }
  },
})
</script>
