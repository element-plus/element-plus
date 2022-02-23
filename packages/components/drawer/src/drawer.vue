<template>
  <teleport to="body" :disabled="!appendToBody">
    <transition
      :name="ns.b('fade')"
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
        <el-focus-trap
          v-if="rendered"
          trapped
          loop
          @mount-on-focus="$emit('openAutoFocus')"
          @unmount-on-focus="$emit('closeAutoFocus')"
        >
          <el-drawer-content
            :custom-class="customClass"
            :close-icon="closeIcon"
            :direction="direction"
            :show-close="showClose"
            :size="size"
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
          </el-drawer-content>
        </el-focus-trap>
      </el-overlay>
    </transition>
  </teleport>
</template>

<script lang="ts" setup>
import { ref, provide } from 'vue'
import { ElOverlay } from '@element-plus/components/overlay'
import { ElFocusTrap } from '@element-plus/components/focus-trap'
import { useDialog } from '@element-plus/components/dialog'
import { useNamespace } from '@element-plus/hooks'
import { drawerProps, drawerEmits } from './drawer'
import { elDrawerInjectionKey } from './token'
import ElDrawerContent from './drawer-content.vue'

defineOptions({
  name: 'ElDrawer',
})

const props = defineProps(drawerProps)
defineEmits(drawerEmits)

const drawerRef = ref<HTMLElement>()
const ns = useNamespace('drawer')

const {
  afterEnter,
  afterLeave,
  beforeLeave,
  handleClose,
  onModalClick,
  rendered,
  visible,
  zIndex,
} = useDialog(props, drawerRef)

defineExpose({
  /**
   * @description manual method for close the drawer
   */
  handleClose,
})

provide(elDrawerInjectionKey, {
  drawerRef,
  rendered,
  ns,
  visible,
})
</script>
