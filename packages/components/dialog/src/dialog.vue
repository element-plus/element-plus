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
          <el-dialog-content
            v-if="rendered"
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
        </div>
      </el-overlay>
    </transition>
  </teleport>
</template>

<script lang="ts" setup>
import { computed, ref, provide } from 'vue'
import { ElOverlay } from '@element-plus/components/overlay'
import { useNamespace, useDraggable, useSameTarget } from '@element-plus/hooks'
import ElDialogContent from './dialog-content.vue'
import { dialogProps, dialogEmits } from './dialog'
import { elDialogInjectionKey } from './token'
import { useDialog } from './use-dialog'

import type { SetupContext, Ref } from 'vue'
import type { DialogEmits } from './dialog'

defineOptions({
  name: 'ElDialog',
})

const props = defineProps(dialogProps)
const emit = defineEmits(dialogEmits)

const ns = useNamespace('dialog')
const dialogRef = ref<HTMLElement | null>(null)
const headerRef = ref<HTMLElement | null>(null)

const dialog = useDialog(
  props,
  { emit } as SetupContext<DialogEmits>,
  dialogRef as Ref<HTMLElement>
)
const {
  visible,
  afterEnter,
  afterLeave,
  beforeLeave,
  style,
  handleClose,
  rendered,
  zIndex,
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

useDraggable(
  dialogRef as Ref<HTMLElement>,
  headerRef as Ref<HTMLElement>,
  draggable
)
</script>
