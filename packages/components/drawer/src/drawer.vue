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
        <div
          ref="drawerRef"
          v-trap-focus
          aria-modal="true"
          :aria-labelledby="ns.e('title')"
          :aria-label="title"
          :class="[ns.b(), direction, visible && 'open', customClass]"
          :style="
            isHorizontal ? 'width: ' + drawerSize : 'height: ' + drawerSize
          "
          role="dialog"
          @click.stop
        >
          <header v-if="withHeader" :id="ns.e('title')" :class="ns.e('header')">
            <slot name="title">
              <span role="heading" :title="title">
                {{ title }}
              </span>
            </slot>
            <button
              v-if="showClose"
              :aria-label="'close ' + (title || 'drawer')"
              :class="ns.e('close-btn')"
              type="button"
              @click="handleClose"
            >
              <el-icon :class="ns.e('close')"><close /></el-icon>
            </button>
          </header>
          <template v-if="rendered">
            <section :class="ns.e('body')">
              <slot></slot>
            </section>
          </template>
          <div v-if="$slots.footer" :class="ns.e('footer')">
            <slot name="footer"></slot>
          </div>
        </div>
      </el-overlay>
    </transition>
  </teleport>
</template>

<script lang="ts">
import { defineComponent, computed, ref } from 'vue'
import { Close } from '@element-plus/icons-vue'

import { ElOverlay } from '@element-plus/components/overlay'
import { useDialog } from '@element-plus/components/dialog'
import ElIcon from '@element-plus/components/icon'
import { TrapFocus } from '@element-plus/directives'
import { useNamespace } from '@element-plus/hooks'
import { drawerProps, drawerEmits } from './drawer'

export default defineComponent({
  name: 'ElDrawer',
  components: {
    ElOverlay,
    ElIcon,
    Close,
  },
  directives: {
    TrapFocus,
  },
  props: drawerProps,
  emits: drawerEmits,

  setup(props, ctx) {
    const drawerRef = ref<HTMLElement>()
    const ns = useNamespace('drawer')

    const isHorizontal = computed(
      () => props.direction === 'rtl' || props.direction === 'ltr'
    )
    const drawerSize = computed(() =>
      typeof props.size === 'number' ? `${props.size}px` : props.size
    )

    return {
      ...useDialog(props, ctx, drawerRef),
      drawerRef,
      isHorizontal,
      drawerSize,
      ns,
    }
  },
})
</script>
