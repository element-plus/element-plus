<template>
  <teleport :to="target">
    <transition name="el-loading-fade" @after-leave="handleAfterLeave">
      <div
        v-show="visible"
        v-bind="$attrs"
        class="el-loading-mask"
        :style="{ backgroundColor: background || '' }"
        :class="[customClass, { 'is-fullscreen': fullscreen }]"
      >
        <div class="el-loading-spinner">
          <svg v-if="!spinner" class="circular" viewBox="25 25 50 50">
            <circle
              class="path"
              cx="50"
              cy="50"
              r="20"
              fill="none"
            />
          </svg>
          <i v-else :class="spinner"></i>
          <p v-if="text" class="el-loading-text">{{ text }}</p>
        </div>
      </div>
    </transition>
  </teleport>
</template>

<script lang="ts">
import { defineComponent  } from 'vue'

const AFTER_LEAVE_EVENT = 'afterLeave'

export default defineComponent({

  name: 'ElLoading',

  inheritAttrs: false,

  props: {
    target: HTMLElement,
    text: String,
    spinner: String,
    background: String,
    fullscreen: {
      type: Boolean,
      default: true,
    },
    customClass: String,
    visible: Boolean,
  },
  originalPosition: '',
  originalOverflow: '',
  emits: [AFTER_LEAVE_EVENT],

  setup(props, { emit }) {

    const handleAfterLeave = () => {
      emit(AFTER_LEAVE_EVENT)
    }

    return {
      handleAfterLeave,
    }
  },
})
</script>
