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

<script lang="ts" setup>
import { ElPopperContent } from '@element-plus/components/popper'
import { useContent } from './use-content'

import { useTooltipContentProps } from './tooltip'

const props = defineProps(useTooltipContentProps)

defineOptions({
  name: 'ElTooltipContent',
})

const {
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
} = useContent(props)

defineExpose({
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
})
</script>
