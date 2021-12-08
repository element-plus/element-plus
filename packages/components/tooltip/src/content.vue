<template>
  <el-teleport
    v-if="persistent ? true : entering ? open : intermediateOpen"
    :disabled="!teleported"
    :container="POPPER_CONTAINER_SELECTOR"
  >
    <transition :name="transition" @after-leave="onTransitionLeave">
      <el-popper-content
        v-if="persistent ? true : leaving ? open : intermediateOpen"
        v-show="persistent ? (leaving ? open : intermediateOpen) : true"
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

    const contentStyle = computed(() => attrs.style as any)

    useEscapeKeydown(onClose)

    useDelayedRender({
      indicator: open,
      intermediateIndicator: intermediateOpen,
      beforeShow: () => {
        entering.value = true
      },
      beforeHide: () => {
        leaving.value = true
      },
      afterShow: () => {
        entering.value = false
        onShow()
      },
      afterHide: () => {
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
