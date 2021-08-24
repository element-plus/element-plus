<template>
  <teleport to="body" :disabled="!appendToBody">
    <transition
      name="dialog-fade"
      @after-enter="afterEnter"
      @after-leave="afterLeave"
      @before-leave="beforeLeave"
    >
      <el-overlay
        v-show="visible"
        :mask="modal"
        :overlay-class="modalClass"
        :z-index="zIndex"
        @click="onModalClick"
      >
        <div
          ref="dialogRef"
          v-trap-focus
          :class="[
            'el-dialog',
            {
              'is-fullscreen': fullscreen,
              'el-dialog--center': center,
            },
            customClass,
          ]"
          aria-modal="true"
          role="dialog"
          :aria-label="title || 'dialog'"
          :style="style"
          @click.stop=""
        >
          <div class="el-dialog__header">
            <slot name="title">
              <span class="el-dialog__title">
                {{ title }}
              </span>
            </slot>
            <button
              v-if="showClose"
              aria-label="close"
              class="el-dialog__headerbtn"
              type="button"
              @click="handleClose"
            >
              <i class="el-dialog__close el-icon el-icon-close"></i>
            </button>
          </div>
          <template v-if="rendered">
            <div class="el-dialog__body">
              <slot></slot>
            </div>
          </template>
          <div v-if="$slots.footer" class="el-dialog__footer">
            <slot name="footer"></slot>
          </div>
        </div>
      </el-overlay>
    </transition>
  </teleport>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { TrapFocus } from '@element-plus/directives'
import { Overlay } from '@element-plus/components/overlay'

import {
  default as useDialog,
  useDialogProps,
  useDialogEmits,
} from './useDialog'

import type { SetupContext } from 'vue'

export default defineComponent({
  name: 'ElDialog',
  components: {
    'el-overlay': Overlay,
  },
  directives: {
    TrapFocus,
  },
  props: useDialogProps,
  emits: useDialogEmits,
  setup(props, ctx) {
    const dialogRef = ref<HTMLElement>(null)
    return {
      ...useDialog(props, ctx as SetupContext, dialogRef),
      dialogRef,
    }
  },
})
</script>
