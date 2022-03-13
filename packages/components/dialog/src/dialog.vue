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
            <template v-if="$slots.footer" #footer>
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
import { dialogInjectionKey } from '@element-plus/tokens'
import ElDialogContent from './dialog-content.vue'
import { dialogProps, dialogEmits } from './dialog'
import { useDialog } from './use-dialog'

defineOptions({
  name: 'ElDialog',
})

const props = defineProps(dialogProps)
defineEmits(dialogEmits)

const ns = useNamespace('dialog')
const dialogRef = ref<HTMLElement>()
const headerRef = ref<HTMLElement>()

const {
  visible,
  style,
  rendered,
  zIndex,
  afterEnter,
  afterLeave,
  beforeLeave,
  handleClose,
  onModalClick,
} = useDialog(props, dialogRef)

provide(dialogInjectionKey, {
  dialogRef,
  headerRef,
  ns,
  rendered,
  style,
})

const overlayEvent = useSameTarget(onModalClick)

const draggable = computed(() => props.draggable && !props.fullscreen)

useDraggable(dialogRef, headerRef, draggable)

defineExpose({
  /** @description whether the dialog is visible */
  visible,
})
</script>
