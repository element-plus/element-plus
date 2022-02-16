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
          :class="`${ns.namespace.value}-overlay-dialog`"
          @click="overlayEvent.onClick"
          @mousedown="overlayEvent.onMousedown"
          @mouseup="overlayEvent.onMouseup"
        >
          <div
            ref="dialogRef"
            v-trap-focus
            :class="[
              ns.b(),
              ns.is('fullscreen', fullscreen),
              ns.is('draggable', draggable),
              { [ns.m('center')]: center },
              customClass,
            ]"
            aria-modal="true"
            role="dialog"
            :aria-label="title || 'dialog'"
            :style="style"
            @click.stop=""
          >
            <div ref="headerRef" :class="ns.e('header')">
              <slot name="title">
                <span :class="ns.e('title')">
                  {{ title }}
                </span>
              </slot>
              <button
                v-if="showClose"
                aria-label="close"
                :class="ns.e('headerbtn')"
                type="button"
                @click="handleClose"
              >
                <el-icon :class="ns.e('close')">
                  <component :is="closeIcon || 'close'" />
                </el-icon>
              </button>
            </div>
            <template v-if="rendered">
              <div :class="ns.e('body')">
                <slot></slot>
              </div>
            </template>
            <div v-if="$slots.footer" :class="ns.e('footer')">
              <slot name="footer"></slot>
            </div>
          </div>
        </div>
      </el-overlay>
    </transition>
  </teleport>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue'
import { TrapFocus } from '@element-plus/directives'
import { ElOverlay } from '@element-plus/components/overlay'
import { ElIcon } from '@element-plus/components/icon'
import { CloseComponents } from '@element-plus/utils'
import { useNamespace, useDraggable, useSameTarget } from '@element-plus/hooks'
import { dialogProps, dialogEmits } from './dialog'
import { useDialog } from './use-dialog'

import type { SetupContext } from 'vue'
import type { DialogEmits } from './dialog'

const { Close } = CloseComponents

defineOptions({
  name: 'ElDialog',
})

const props = defineProps(dialogProps)

const emit = defineEmits(dialogEmits)

const ns = useNamespace('dialog')
const dialogRef = ref<HTMLElement>()
const headerRef = ref<HTMLElement>()
const dialog = useDialog(
  props,
  { emit } as SetupContext<DialogEmits>,
  dialogRef
)

const overlayEvent = useSameTarget(dialog.onModalClick)
const draggable = computed(() => props.draggable && !props.fullscreen)

const {
  visible,
  afterEnter,
  afterLeave,
  beforeLeave,
  style,
  handleClose,
  rendered,
} = dialog

useDraggable(dialogRef, headerRef, draggable)
</script>
