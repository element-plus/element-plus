<template>
  <div>
    <el-popper
      v-model:visible="modelValue"
      effect="light"
      :close-delay="closeDelay"
      :disabled="disabled"
      :offset="offset"
      :show-after="openDelay"
      :popper-options="popperOptions"
      :placement="placement"
      :popper-class="`${content ? 'el-popover--plain' : ''} el-popover ${popperClass}`"
      :popper-style="popperStyle"
      :transition="transition"
      :trigger="trigger"
      :show-arrow="visibleArrow"
      :manual-mode="trigger === 'manual'"
      pure
      @after-enter="$emit('after-enter')"
      @after-leave="$emit('after-leave')"
    >
      <template #trigger>
        <slot name="reference">
        </slot>
      </template>
      <template #default>
        <div v-if="title" class="el-popover__title" v-text="title"></div>
        <slot>
          {{ content }}
        </slot>
      </template>
    </el-popper>
  </div>
</template>
<script lang='ts'>
import { defineComponent } from 'vue'
import { Popper as ElPopper } from '@element-plus/popper'
import usePopover, { SHOW_EVENT, HIDE_EVENT } from './usePopover'

import { PropType } from 'vue'
import type { TriggerType, Placement } from '@element-plus/popper/src/popper'

export default defineComponent({
  name: 'ElPopover',
  components: {
    ElPopper,
  },
  props: {
    content: {
      type: String,
    },
    closeDelay: {
      type: Number,
      default: 200,
    },
    disabled: {
      type: Boolean,
    },
    offset: {
      type: Number,
      default: 12,
    },
    openDelay: {
      type: Number,
      default: 0,
    },
    popperOptions: {
      type: Object,
      default: null,
    },
    placement: {
      type: String as PropType<Placement>,
      default: 'bottom',
    },
    popperClass: {
      type: String,
    },
    tabindex: {
      type: Number,
      default: 0,
    },
    trigger: {
      type: String as PropType<TriggerType>,
      default: 'click',
    },
    title: {
      type: String,
    },
    transition: {
      type: String,
      default: 'fade-in-linear',
    },
    visible: {
      type: Boolean,
      default: undefined,
    },
    visibleArrow: {
      type: Boolean,
      default: true,
    },
    width: {
      type: [String, Number],
      default: 150,
    },
  },
  emits: ['update:visible', 'after-enter', 'after-leave', SHOW_EVENT, HIDE_EVENT ],
  setup(props, { emit }) {
    // init here
    return usePopover(props, emit)
  },
})
</script>
<style scoped>
</style>
