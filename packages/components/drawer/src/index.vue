<template>
  <teleport to="body" :disabled="!appendToBody">
    <transition
      name="el-drawer-fade"
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
          aria-labelledby="el-drawer__title"
          :aria-label="title"
          :class="['el-drawer', direction, visible && 'open', customClass]"
          :style="
            isHorizontal ? 'width: ' + drawerSize : 'height: ' + drawerSize
          "
          role="dialog"
          @click.stop
        >
          <header
            v-if="withHeader"
            id="el-drawer__title"
            class="el-drawer__header"
          >
            <slot name="title">
              <span role="heading" :title="title">
                {{ title }}
              </span>
            </slot>
            <button
              v-if="showClose"
              :aria-label="'close ' + (title || 'drawer')"
              class="el-drawer__close-btn"
              type="button"
              @click="handleClose"
            >
              <i class="el-drawer__close el-icon el-icon-close"></i>
            </button>
          </header>
          <template v-if="rendered">
            <section class="el-drawer__body">
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
import { ElOverlay } from '@element-plus/components/overlay'
import {
  useDialog,
  dialogProps,
  dialogEmits,
} from '@element-plus/components/dialog'
import { TrapFocus } from '@element-plus/directives'

import type { PropType, SetupContext } from 'vue'

type DrawerDirection = 'ltr' | 'rtl' | 'ttb' | 'btt'

export default defineComponent({
  name: 'ElDrawer',
  components: {
    ElOverlay,
  },
  directives: {
    TrapFocus,
  },
  props: {
    ...dialogProps,
    direction: {
      type: String as PropType<DrawerDirection>,
      default: 'rtl',
      validator: (val: DrawerDirection) => {
        return ['ltr', 'rtl', 'ttb', 'btt'].indexOf(val) !== -1
      },
    },
    size: {
      type: [String, Number],
      default: '30%',
    },
    withHeader: {
      type: Boolean,
      default: true,
    },
    modalFade: {
      type: Boolean,
      default: true,
    },
  },

  emits: dialogEmits,

  setup(props, ctx) {
    const drawerRef = ref<HTMLElement>(null)
    return {
      ...useDialog(props, ctx as SetupContext, drawerRef),
      drawerRef,
      isHorizontal: computed(
        () => props.direction === 'rtl' || props.direction === 'ltr'
      ),
      drawerSize: computed(() =>
        typeof props.size === 'number' ? `${props.size}px` : props.size
      ),
    }
  },
})
</script>
