<template>
  <div :class="['el-popper']" :style="style">
    <trigger ref="triggerRef">
      <slot name="trigger" />
    </trigger>
    <el-teleport :disabled="!appendToBody">
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
          @mouseenter="handleMouseEnter"
          @mouseleave="handleMouseLeave"
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
import { computed, defineComponent, getCurrentInstance, ref, unref } from 'vue'
import { isFunction, NOOP } from '@vue/shared'
import { createPopper } from '@popperjs/core'
import ElTeleport from '@element-plus/components/teleport'
import {
  useTransitionFallthrough,
  useTransitionFallthroughEmits,
  useModelToggle,
  useModelToggleEmits,
  useModelToggleProps,
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
    const isShow = ref(props.visible || false)
    const { show, hide } = useModelToggle({
      indicator: isShow,
      show: onShow,
      hide: onHide,
    })
    const hasUpdateFunctions = computed(() => {
      return isFunction(vmProps['onUpdate:visible'])
    })

    const contentStyle = computed(() => {
      return [{ zIndex: PopupManager.nextZIndex() }, props.popperStyle]
    })

    const mouseUpAndDown = computed(() =>
      props.stopPopperMouseEvent ? stop : NOOP
    )

    const isManual = computed(
      () => props.manualMode || props.trigger === 'manual'
    )

    let showTimer: ReturnType<typeof setTimeout>
    let hideTimer: ReturnType<typeof setTimeout>
    let popperInstance: Instance

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

    const handleMouseEnter = () => {
      if (props.enterable && props.trigger !== 'click') {
        clearTimeout(hideTimer)
      }
    }

    const handleMouseLeave = () => {
      const { trigger } = props

      const canHide =
        (isString(trigger) && (trigger === 'click' || trigger === 'focus')) ||
        (trigger.length === 1 &&
          (trigger[0] === 'click' || trigger[0] === 'focus'))

      if (canHide) {
        hide()
      }
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

    function onShow() {
      //
    }

    function onHide() {
      //
    }

    return {
      triggerRef,
      popperRef,
      popperId,
      contentKls,
      contentStyle,
      transitionFallthrough,
      mouseUpAndDown,
      isShow,
      handleMouseEnter,
      handleMouseLeave,
    }
  },
})
</script>
