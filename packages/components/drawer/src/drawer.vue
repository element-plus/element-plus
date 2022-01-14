<template>
  <teleport to="body" :disabled="!appendToBody">
    <transition
      :name="`${prefixClass}-fade`"
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
          :aria-labelledby="`${prefixClass}__title`"
          :aria-label="title"
          :class="[prefixClass, direction, visible && 'open', customClass]"
          :style="
            isHorizontal ? 'width: ' + drawerSize : 'height: ' + drawerSize
          "
          role="dialog"
          @click.stop
        >
          <header
            v-if="withHeader"
            :id="`${prefixClass}__title`"
            :class="`${prefixClass}__header`"
          >
            <slot name="title">
              <span role="heading" :title="title">
                {{ title }}
              </span>
            </slot>
            <button
              v-if="showClose"
              :aria-label="'close ' + (title || 'drawer')"
              :class="`${prefixClass}__close-btn`"
              type="button"
              @click="handleClose"
            >
              <el-icon :class="`${prefixClass}__close`"><close /></el-icon>
            </button>
          </header>
          <template v-if="rendered">
            <section :class="`${prefixClass}__body`">
              <slot></slot>
            </section>
          </template>
        </div>
      </el-overlay>
    </transition>
  </teleport>
</template>

<script lang="ts">
import { defineComponent, computed, ref } from 'vue'
import { Close } from '@element-plus/icons-vue'
import { usePrefixClass } from '@element-plus/hooks'
import { ElOverlay } from '@element-plus/components/overlay'
import { useDialog } from '@element-plus/components/dialog'
import ElIcon from '@element-plus/components/icon'
import { TrapFocus } from '@element-plus/directives'
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
    const prefixClass = usePrefixClass('drawer')
    const drawerRef = ref<HTMLElement>()

    const isHorizontal = computed(
      () => props.direction === 'rtl' || props.direction === 'ltr'
    )
    const drawerSize = computed(() =>
      typeof props.size === 'number' ? `${props.size}px` : props.size
    )

    return {
      ...useDialog(props, ctx, drawerRef),
      prefixClass,
      drawerRef,
      isHorizontal,
      drawerSize,
    }
  },
})
</script>
