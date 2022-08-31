<template>
  <teleport :disabled="!teleported" :to="appendTo">
    <transition
      :name="transition"
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
        <!-- Workaround bug #6378 -->
        <template v-if="!destroyed">
          <slot />
        </template>
      </el-popper-content>
    </transition>
  </teleport>
</template>

<script lang="ts">
import {
  computed,
  defineComponent,
  inject,
  onBeforeUnmount,
  ref,
  unref,
  watch,
} from 'vue'
import { onClickOutside } from '@vueuse/core'
import { ElPopperContent } from '@element-plus/components/popper'
import { composeEventHandlers } from '@element-plus/utils'

import { useTooltipContentProps } from './tooltip'
import { TOOLTIP_INJECTION_KEY } from './tokens'

export default defineComponent({
  name: 'ElTooltipContent',
  components: {
    ElPopperContent,
  },
  inheritAttrs: false,
  props: useTooltipContentProps,
  setup(props) {
    const contentRef = ref<InstanceType<typeof ElPopperContent> | null>(null)
    const intermediateOpen = ref(false)
    const entering = ref(false)
    const leaving = ref(false)
    const destroyed = ref(false)
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
    const persistentRef = computed(() => {
      // For testing, we would always want the content to be rendered
      // to the DOM, so we need to return true here.
      if (process.env.NODE_ENV === 'test') {
        return true
      }
      return props.persistent
    })

    onBeforeUnmount(() => {
      destroyed.value = true
    })

    const shouldRender = computed(() => {
      return unref(persistentRef) ? true : unref(open)
    })

    const shouldShow = computed(() => {
      return props.disabled ? false : unref(open)
    })

    const contentStyle = computed(() => (props.style ?? {}) as any)

    const ariaHidden = computed(() => !unref(open))

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

    let stopHandle: ReturnType<typeof onClickOutside>

    watch(
      () => unref(open),
      (val) => {
        if (!val) {
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
      destroyed,
      shouldRender,
      shouldShow,
      onClose,
      open,
      onAfterShow,
      onBeforeEnter,
      onBeforeLeave,
      onContentEnter,
      onContentLeave,
      onTransitionLeave,
      onBlur,
    }
  },
})
</script>
