<template>
  <li class="el-timeline-item" :class="{ 'el-timeline-item__center': center }">
    <div class="el-timeline-item__tail"></div>

    <div
      v-if="!$slots.dot"
      class="el-timeline-item__node"
      :class="[
        `el-timeline-item__node--${size || ''}`,
        `el-timeline-item__node--${type || ''}`,
        hollow ? 'is-hollow' : '',
      ]"
      :style="{
        backgroundColor: color,
      }"
    >
      <i v-if="icon" class="el-timeline-item__icon" :class="icon"></i>
    </div>
    <div v-if="$slots.dot" class="el-timeline-item__dot">
      <slot name="dot"></slot>
    </div>

    <div class="el-timeline-item__wrapper">
      <div
        v-if="!hideTimestamp && placement === 'top'"
        class="el-timeline-item__timestamp is-top"
      >
        {{ timestamp }}
      </div>

      <div class="el-timeline-item__content">
        <slot></slot>
      </div>

      <div
        v-if="!hideTimestamp && placement === 'bottom'"
        class="el-timeline-item__timestamp is-bottom"
      >
        {{ timestamp }}
      </div>
    </div>
  </li>
</template>

<script lang="ts">
import { inject, defineComponent } from 'vue'

export default defineComponent({
  name: 'ElTimelineItem',
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
      type: String,
      default: '',
    },
    hollow: {
      type: Boolean,
      default: false,
    },
  },
  setup() {
    inject('timeline')
  },
})
</script>
