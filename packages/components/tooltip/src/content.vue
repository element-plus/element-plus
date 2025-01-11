<template>
  <el-teleport :disabled="!teleported" :to="appendTo">
    <transition
      :name="transitionClass"
      @after-leave="onTransitionLeave"
      @before-enter="onBeforeEnter"
      @after-enter="onAfterShow"
      @before-leave="onBeforeLeave"
    >
      <el-popper-content
        v-if="shouldRender"
        v-show="shouldShow"
        :id="id"
        ref="contentRef"
        v-bind="$attrs"
        :aria-label="ariaLabel"
        :aria-hidden="ariaHidden"
        :boundaries-padding="boundariesPadding"
        :fallback-placements="fallbackPlacements"
        :gpu-acceleration="gpuAcceleration"
        :offset="offset"
        :placement="placement"
        :popper-options="popperOptions"
        :strategy="strategy"
        :effect="effect"
        :enterable="enterable"
        :pure="pure"
        :popper-class="popperClass"
        :popper-style="[popperStyle, contentStyle]"
        :reference-el="referenceEl"
        :trigger-target-el="triggerTargetEl"
        :visible="shouldShow"
        :z-index="zIndex"
        @mouseenter="onContentEnter"
        @mouseleave="onContentLeave"
        @blur="onBlur"
        @close="onClose"
      >
        <slot />
      </el-popper-content>
    </transition>
  </el-teleport>
</template>

<script lang="ts" setup>
import { computed, inject, onBeforeUnmount, ref, unref, watch } from 'vue'
import { onClickOutside } from '@vueuse/core'
import { useNamespace, usePopperContainerId } from '@element-plus/hooks'
import { composeEventHandlers } from '@element-plus/utils'
import { ElPopperContent } from '@element-plus/components/popper'
import ElTeleport from '@element-plus/components/teleport'
import { tryFocus } from '@element-plus/components/focus-trap'
import { TOOLTIP_INJECTION_KEY } from './constants'
import { useTooltipContentProps } from './content'
import type { PopperContentInstance } from '@element-plus/components/popper'

defineOptions({
  name: 'ElTooltipContent',
  inheritAttrs: false,
})

const props = defineProps(useTooltipContentProps)

const { selector } = usePopperContainerId()
const ns = useNamespace('tooltip')

const contentRef = ref<PopperContentInstance>()
let stopHandle: ReturnType<typeof onClickOutside>
const {
  controlled,
  id,
  open,
  trigger,
  onClose,
  onOpen,
  onShow,
  onHide,
  onBeforeShow,
  onBeforeHide,
} = inject(TOOLTIP_INJECTION_KEY, undefined)!
const transitionClass = computed(() => {
  return props.transition || `${ns.namespace.value}-fade-in-linear`
})
const persistentRef = computed(() => {
  // For testing, we would always want the content to be rendered
  // to the DOM, so we need to return true here.
  if (process.env.NODE_ENV === 'test') {
    return true
  }
  return props.persistent
})

onBeforeUnmount(() => {
  stopHandle?.()
})

const shouldRender = computed(() => {
  return unref(persistentRef) ? true : unref(open)
})

const shouldShow = computed(() => {
  return props.disabled ? false : unref(open)
})

const appendTo = computed(() => {
  return props.appendTo || selector.value
})

const contentStyle = computed(() => (props.style ?? {}) as any)

const ariaHidden = ref(true)

const onTransitionLeave = () => {
  onHide()
  isFocusInsideContent() && tryFocus(document.body)
  ariaHidden.value = true
}

const stopWhenControlled = () => {
  if (unref(controlled)) return true
}

const onContentEnter = composeEventHandlers(stopWhenControlled, () => {
  if (props.enterable && unref(trigger) === 'hover') {
    onOpen()
  }
})

const onContentLeave = composeEventHandlers(stopWhenControlled, () => {
  if (unref(trigger) === 'hover') {
    onClose()
  }
})

const onBeforeEnter = () => {
  contentRef.value?.updatePopper?.()
  onBeforeShow?.()
}

const onBeforeLeave = () => {
  onBeforeHide?.()
}

const onAfterShow = () => {
  onShow()
  stopHandle = onClickOutside(
    computed(() => {
      return contentRef.value?.popperContentRef
    }),
    () => {
      if (unref(controlled)) return
      const $trigger = unref(trigger)
      if ($trigger !== 'hover') {
        onClose()
      }
    }
  )
}

const onBlur = () => {
  if (!props.virtualTriggering) {
    onClose()
  }
}

const isFocusInsideContent = (event?: FocusEvent) => {
  const popperContent: HTMLElement | undefined =
    contentRef.value?.popperContentRef
  const activeElement = (event?.relatedTarget as Node) || document.activeElement

  return popperContent?.contains(activeElement)
}

watch(
  () => unref(open),
  (val) => {
    if (!val) {
      stopHandle?.()
    } else {
      ariaHidden.value = false
    }
  },
  {
    flush: 'post',
  }
)

watch(
  () => props.content,
  () => {
    contentRef.value?.updatePopper?.()
  }
)

defineExpose({
  /**
   * @description el-popper-content component instance
   */
  contentRef,
  /**
   * @description validate current focus event is trigger inside el-popper-content
   */
  isFocusInsideContent,
})
</script>
