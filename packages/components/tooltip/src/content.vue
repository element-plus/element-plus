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
        v-bind="derivedProps"
        :style="contentStyle"
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
import { computed, defineComponent, inject, ref, unref } from 'vue'
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
  setup(props, { attrs }) {
    const intermediateOpen = ref(false)
    const entering = ref(false)
    const leaving = ref(false)
    const { controlled, id, open, trigger, onClose, onOpen, onShow, onHide } =
      inject(TOOLTIP_INJECTION_KEY, undefined)!

    const contentStyle = computed(() => (props.style ?? {}) as any)
    const shouldRenderTeleport = computed(() => {
      if (props.persistent) return true
      return unref(entering) ? unref(open) : unref(intermediateOpen)
    })

    const shouldRenderPopperContent = computed(() => {
      if (props.persistent) return true
      return unref(leaving) ? unref(open) : unref(intermediateOpen)
    })

    const shouldShowPopperContent = computed(() => {
      // This is for control persistent mode transition
      // When persistent this element will always be rendered, we simply use v-show to control the transition
      if (props.persistent) {
        return unref(leaving) ? unref(open) : unref(intermediateOpen)
      }
      return true
    })

    useEscapeKeydown(onClose)

    useDelayedRender({
      indicator: open,
      intermediateIndicator: intermediateOpen,
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
      derivedProps: computed(() => ({
        ...props,
        ...attrs,
      })),
    }
  },
})
</script>
