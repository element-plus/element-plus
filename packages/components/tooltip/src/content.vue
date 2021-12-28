<template>
  <el-teleport
    v-if="shouldRenderTeleport"
    :disabled="!teleported"
    :container="POPPER_CONTAINER_SELECTOR"
  >
    <transition :name="transition" @after-leave="onTransitionLeave">
      <el-popper-content
        v-if="shouldRenderPopperContent"
        v-show="shouldShowPopperContent"
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
  </el-teleport>
</template>

<script lang="ts">
import {
  computed,
  defineComponent,
  inject,
  nextTick,
  ref,
  unref,
  watch,
} from 'vue'
import { ElPopperContent } from '@element-plus/components/popper'
import { ElVisuallyHidden } from '@element-plus/components/visual-hidden'
import { ElTeleport } from '@element-plus/components/teleport'
import { composeEventHandlers } from '@element-plus/utils/dom'
import {
  useEscapeKeydown,
  POPPER_CONTAINER_SELECTOR,
  useDelayedRender,
} from '@element-plus/hooks'

import { useTooltipContentProps } from './tooltip'
import { TOOLTIP_INJECTION_KEY } from './tokens'

export default defineComponent({
  name: 'ElTooltipContent',
  components: {
    ElTeleport,
    ElPopperContent,
    ElVisuallyHidden,
  },
  inheritAttrs: false,
  props: useTooltipContentProps,
  setup(props) {
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

    const contentStyle = computed(() => (props.style ?? {}) as any)
    const shouldRenderTeleport = computed(() => {
      if (unref(persistentRef)) return true
      return unref(unref(entering) ? open : intermediateOpen)
    })

    const shouldRenderPopperContent = computed(() => {
      if (unref(persistentRef)) return true
      return unref(unref(leaving) ? open : intermediateOpen)
    })

    const shouldShowPopperContent = computed(() => {
      // This is for control persistent mode transition
      // When persistent this element will always be rendered, we simply use v-show to control the transition
      if (unref(persistentRef)) {
        return unref(unref(leaving) ? open : intermediateOpen)
      }
      return true
    })

    const ariaHidden = computed(
      () =>
        !(unref(shouldRenderPopperContent) && unref(shouldShowPopperContent))
    )

    useEscapeKeydown(onClose)

    useDelayedRender({
      indicator: open,
      intermediateIndicator: intermediateOpen,
      shouldSetIntermediate: (step) => {
        // we don't want to set the intermediateOpen because we want the transition to finish.
        // After transition finishes, with the hook after-leave we can call intermediate.value = false
        return step === 'hide' ? false : true
      },
      beforeShow: () => {
        // indicates interruption of hide transition
        if (unref(leaving)) {
          leaving.value = false
          intermediateOpen.value = false
        }
        entering.value = true
      },
      beforeHide: () => {
        // indicates interruption of show transition
        if (unref(entering)) {
          entering.value = false
          return
        }
        leaving.value = true
      },
      afterShow: () => {
        if (!unref(open)) return
        entering.value = false
        onShow()
      },
      afterHide: () => {
        if (unref(open)) return
        // prevent the content from hiding if it's still open
        onHide()
      },
    })

    const onTransitionLeave = () => {
      if (unref(open)) return
      leaving.value = false
      intermediateOpen.value = false
    }

    const stopWhenControlled = () => {
      if (unref(controlled)) return true
    }

    const onContentEnter = composeEventHandlers(stopWhenControlled, () => {
      if (props.enterable) {
        onOpen()
      }
    })

    const onContentLeave = composeEventHandlers(stopWhenControlled, () => {
      if (unref(trigger) === 'hover') {
        onClose()
      }
    })

    return {
      ariaHidden,
      entering,
      leaving,
      id,
      intermediateOpen,
      contentStyle,
      shouldRenderTeleport,
      shouldRenderPopperContent,
      shouldShowPopperContent,
      open,
      POPPER_CONTAINER_SELECTOR,
      onContentEnter,
      onContentLeave,
      onTransitionLeave,
    }
  },
})
</script>
