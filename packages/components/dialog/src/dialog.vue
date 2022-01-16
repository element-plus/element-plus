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
        custom-mask-event
        :mask="modal"
        :overlay-class="modalClass"
        :z-index="zIndex"
      >
        <div
          :class="overlayDialogPrefixClass"
          @click="overlayEvent.onClick"
          @mousedown="overlayEvent.onMousedown"
          @mouseup="overlayEvent.onMouseup"
        >
          <div
            ref="dialogRef"
            v-trap-focus
            :class="[
              prefixClass,
              {
                'is-fullscreen': fullscreen,
                [`${prefixClass}--center`]: center,
              },
              customClass,
            ]"
            aria-modal="true"
            role="dialog"
            :aria-label="title || 'dialog'"
            :style="style"
            @click.stop=""
          >
            <div :class="`${prefixClass}__header`">
              <slot name="title">
                <span :class="`${prefixClass}__title`">
                  {{ title }}
                </span>
              </slot>
              <button
                v-if="showClose"
                aria-label="close"
                :class="`${prefixClass}__headerbtn`"
                type="button"
                @click="handleClose"
              >
                <el-icon :class="`${prefixClass}__close`">
                  <component :is="closeIcon || 'close'" />
                </el-icon>
              </button>
            </div>
            <template v-if="rendered">
              <div :class="`${prefixClass}__body`">
                <slot></slot>
              </div>
            </template>
            <div v-if="$slots.footer" :class="`${prefixClass}__footer`">
              <slot name="footer"></slot>
            </div>
          </div>
        </div>
      </el-overlay>
    </transition>
  </teleport>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { TrapFocus } from '@element-plus/directives'
import { ElOverlay } from '@element-plus/components/overlay'
import { ElIcon } from '@element-plus/components/icon'
import { CloseComponents } from '@element-plus/utils/icon'
import { useSameTarget, usePrefixClass } from '@element-plus/hooks'
import { dialogProps, dialogEmits } from './dialog'
import { useDialog } from './use-dialog'

export default defineComponent({
  name: 'ElDialog',
  components: {
    ElOverlay,
    ElIcon,
    ...CloseComponents,
  },
  directives: {
    TrapFocus,
  },

  props: dialogProps,
  emits: dialogEmits,

  setup(props, ctx) {
    const prefixClass = usePrefixClass('dialog')
    const overlayDialogPrefixClass = usePrefixClass('overlay-dialog')

    const dialogRef = ref<HTMLElement>()
    const dialog = useDialog(props, ctx, dialogRef)
    const overlayEvent = useSameTarget(dialog.onModalClick)

    return {
      prefixClass,
      overlayDialogPrefixClass,
      dialogRef,
      overlayEvent,
      ...dialog,
    }
  },
})
</script>
