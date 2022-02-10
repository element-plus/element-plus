<template>
  <teleport :disabled="!teleported" :to="appendTo">
    <transition
      :name="transition"
      @after-leave="onTransitionLeave"
      @before-enter="onBeforeEnter"
      @after-enter="onAfterShow"
    >
      <el-popper-content
        v-if="shouldRender"
        v-show="shouldShow"
        ref="contentRef"
        v-bind="$attrs"
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
        :z-index="zIndex"
        @mouseenter="onContentEnter"
        @mouseleave="onContentLeave"
      >
        <slot />
        <el-visually-hidden :id="id" role="tooltip">
          {{ ariaLabel }}
        </el-visually-hidden>
      </el-popper-content>
    </transition>
  </teleport>
</template>

<script lang="ts">
import { computed, defineComponent, inject, ref, unref, watch } from 'vue'
import { onClickOutside } from '@vueuse/core'
import { ElPopperContent } from '@element-plus/components/popper'
import { ElVisuallyHidden } from '@element-plus/components/visual-hidden'
import { composeEventHandlers } from '@element-plus/utils-v2'
import { useEscapeKeydown } from '@element-plus/hooks'

import { useTooltipContentProps } from './tooltip'
import { TOOLTIP_INJECTION_KEY } from './tokens'

export default defineComponent({
  name: 'ElTooltipContent',
  components: {
    ElPopperContent,
    ElVisuallyHidden,
  },
  inheritAttrs: false,
  props: useTooltipContentProps,
  setup(props) {
    const contentRef = ref<InstanceType<typeof ElPopperContent> | null>(null)
    const intermediateOpen = ref(false)
    const entering = ref(false)
    const leaving = ref(false)
    const { controlled, id, open, trigger, onClose, onOpen, onShow, onHide } =
      inject(TOOLTIP_INJECTION_KEY, undefined)!
    const persistentRef = computed(() => {
      // For testing, we would always want the content to be rendered
      // to the DOM, so we need to return true here.
      if (process.env.NODE_ENV === 'test') {
        return true
      }
      return props.persistent
    })

    const shouldRender = computed(() => {
      return unref(persistentRef) ? true : unref(open)
    })

    const shouldShow = computed(() => {
      return props.disabled ? false : unref(open)
    })

    const contentStyle = computed(() => (props.style ?? {}) as any)

    const ariaHidden = computed(() => !unref(open))

    useEscapeKeydown(onClose)

    const onTransitionLeave = () => {
      onHide()
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
    }

    const onAfterShow = () => {
      onShow()
    }

    let stopHandle: ReturnType<typeof onClickOutside>

    watch(
      () => unref(open),
      (val) => {
        if (val) {
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
        } else {
          stopHandle?.()
        }
      },
      {
        flush: 'post',
      }
    )

    return {
      ariaHidden,
      entering,
      leaving,
      id,
      intermediateOpen,
      contentStyle,
      contentRef,
      shouldRender,
      shouldShow,
      open,
      onAfterShow,
      onBeforeEnter,
      onContentEnter,
      onContentLeave,
      onTransitionLeave,
    }
  },
})
</script>
