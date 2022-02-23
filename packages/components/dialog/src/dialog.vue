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
          <el-focus-trap
            v-if="rendered"
            loop
            trapped
            @mount-on-focus="$emit('openAutoFocus')"
            @unmount-on-focus="$emit('closeAutoFocus')"
          >
            <el-dialog-content
              :custom-class="customClass"
              :center="center"
              :close-icon="closeIcon"
              :draggable="draggable"
              :fullscreen="fullscreen"
              :show-close="showClose"
              :style="style"
              :title="title"
              @close="handleClose"
            >
              <template #title>
                <slot name="title" />
              </template>
              <slot />
              <template #footer>
                <slot name="footer" />
              </template>
            </el-dialog-content>
          </el-focus-trap>
        </div>
      </el-overlay>
    </transition>
  </teleport>
</template>

<script lang="ts" setup>
import { computed, ref, provide } from 'vue'
import { ElOverlay } from '@element-plus/components/overlay'
import { ElFocusTrap } from '@element-plus/components/focus-trap'
import { useNamespace, useDraggable, useSameTarget } from '@element-plus/hooks'
import ElDialogContent from './dialog-content.vue'
import { dialogProps, dialogEmits } from './dialog'
import { elDialogInjectionKey } from './token'
import { useDialog } from './use-dialog'

import type { Ref } from 'vue'

defineOptions({
  name: 'ElDialog',
})

defineEmits(dialogEmits)
const props = defineProps(dialogProps)

const ns = useNamespace('dialog')
const dialogRef = ref<HTMLElement>()
const headerRef = ref<HTMLElement>()

const dialog = useDialog(props, dialogRef)
const {
  visible,
  afterEnter,
  afterLeave,
  beforeLeave,
  style,
  handleClose,
  rendered,
} = dialog

provide(elDialogInjectionKey, {
  dialogRef,
  headerRef,
  ns,
  rendered,
  style,
})

const overlayEvent = useSameTarget(dialog.onModalClick)

const draggable = computed(() => props.draggable && !props.fullscreen)

useDraggable(dialogRef, headerRef, draggable)
</script>
