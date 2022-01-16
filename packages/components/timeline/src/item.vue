<template>
  <li :class="{ [`${prefixClass}__center`]: center, [`${prefixClass}`]: true }">
    <div :class="`${prefixClass}__tail`"></div>

    <div
      v-if="!$slots.dot"
      :class="[
        `${prefixClass}__node--${size || ''}`,
        `${prefixClass}__node--${type || ''}`,
        hollow ? 'is-hollow' : '',
        `${prefixClass}__node`,
      ]"
      :style="{
        backgroundColor: color,
      }"
    >
      <el-icon v-if="icon" :class="`${prefixClass}__icon`">
        <component :is="icon" />
      </el-icon>
    </div>
    <div v-if="$slots.dot" :class="`${prefixClass}__dot`">
      <slot name="dot"></slot>
    </div>

    <div :class="`${prefixClass}__wrapper`">
      <div
        v-if="!hideTimestamp && placement === 'top'"
        :class="`${prefixClass}__timestamp is-top`"
      >
        {{ timestamp }}
      </div>

      <div :class="`${prefixClass}__content`">
        <slot></slot>
      </div>

      <div
        v-if="!hideTimestamp && placement === 'bottom'"
        :class="`${prefixClass}__timestamp is-bottom`"
      >
        {{ timestamp }}
      </div>
    </div>
  </li>
</template>

<script lang="ts">
import { inject, defineComponent } from 'vue'
import { ElIcon } from '@element-plus/components/icon'

import { usePrefixClass } from '@element-plus/hooks'
import type { PropType, Component } from 'vue'

export default defineComponent({
  name: 'ElTimelineItem',
  components: {
    ElIcon,
  },
  props: {
    timestamp: {
      type: String,
      default: '',
    },
    hideTimestamp: {
      type: Boolean,
      default: false,
    },
    center: {
      type: Boolean,
      default: false,
    },
    placement: {
      type: String,
      default: 'bottom',
    },
    type: {
      type: String,
      default: '',
    },
    color: {
      type: String,
      default: '',
    },
    size: {
      type: String,
      default: 'normal',
    },
    icon: {
      type: [String, Object] as PropType<string | Component>,
      default: '',
    },
    hollow: {
      type: Boolean,
      default: false,
    },
  },
  setup() {
    const prefixClass = usePrefixClass('timeline-item')
    inject('timeline')
    return {
      prefixClass,
    }
  },
})
</script>
