<template>
  <el-teleport
    :to="appendTo"
    :disabled="appendTo !== 'body' ? false : !appendToBody"
  >
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
          loop
          :trapped="visible"
          :focus-trap-el="drawerRef"
          :focus-start-el="focusStartRef"
          @focus-after-trapped="onOpenAutoFocus"
          @focus-after-released="onCloseAutoFocus"
          @focusout-prevented="onFocusoutPrevented"
          @release-requested="onCloseRequested"
        >
          <div
            ref="drawerRef"
            aria-modal="true"
            :aria-label="title || undefined"
            :aria-labelledby="!title ? titleId : undefined"
            :aria-describedby="bodyId"
            v-bind="$attrs"
            :class="[ns.b(), direction, visible && 'open']"
            :style="
              isHorizontal ? 'width: ' + drawerSize : 'height: ' + drawerSize
            "
            role="dialog"
            @click.stop
          >
            <span ref="focusStartRef" :class="ns.e('sr-focus')" tabindex="-1" />
            <header v-if="withHeader" :class="[ns.e('header'), headerClass]">
              <slot
                v-if="!$slots.title"
                name="header"
                :close="handleClose"
                :title-id="titleId"
                :title-class="ns.e('title')"
              >
                <span
                  v-if="!$slots.title"
                  :id="titleId"
                  role="heading"
                  :aria-level="headerAriaLevel"
                  :class="ns.e('title')"
                >
                  {{ title }}
                </span>
              </slot>
              <slot v-else name="title">
                <!-- DEPRECATED SLOT -->
              </slot>
              <button
                v-if="showClose"
                :aria-label="t('el.drawer.close')"
                :class="ns.e('close-btn')"
                type="button"
                @click="handleClose"
              >
                <el-icon :class="ns.e('close')">
                  <close />
                </el-icon>
              </button>
            </header>
            <template v-if="rendered">
              <div :id="bodyId" :class="[ns.e('body'), bodyClass]">
                <slot />
              </div>
            </template>
            <div v-if="$slots.footer" :class="[ns.e('footer'), footerClass]">
              <slot name="footer" />
            </div>
          </div>
        </el-focus-trap>
      </el-overlay>
    </transition>
  </el-teleport>
</template>

<script lang="ts" setup>
import { computed, ref, useSlots } from 'vue'
import { Close } from '@element-plus/icons-vue'

import { ElOverlay } from '@element-plus/components/overlay'
import ElFocusTrap from '@element-plus/components/focus-trap'
import ElTeleport from '@element-plus/components/teleport'
import { useDialog } from '@element-plus/components/dialog'
import { addUnit } from '@element-plus/utils'
import ElIcon from '@element-plus/components/icon'
import { useDeprecated, useLocale, useNamespace } from '@element-plus/hooks'
import { drawerEmits, drawerProps } from './drawer'

defineOptions({
  name: 'ElDrawer',
  inheritAttrs: false,
})

const props = defineProps(drawerProps)
defineEmits(drawerEmits)
const slots = useSlots()

useDeprecated(
  {
    scope: 'el-drawer',
    from: 'the title slot',
    replacement: 'the header slot',
    version: '3.0.0',
    ref: 'https://element-plus.org/en-US/component/drawer.html#slots',
  },
  computed(() => !!slots.title)
)

const drawerRef = ref<HTMLElement>()
const focusStartRef = ref<HTMLElement>()
const ns = useNamespace('drawer')
const { t } = useLocale()
const {
  afterEnter,
  afterLeave,
  beforeLeave,
  visible,
  rendered,
  titleId,
  bodyId,
  zIndex,
  onModalClick,
  onOpenAutoFocus,
  onCloseAutoFocus,
  onFocusoutPrevented,
  onCloseRequested,
  handleClose,
} = useDialog(props, drawerRef)

const isHorizontal = computed(
  () => props.direction === 'rtl' || props.direction === 'ltr'
)
const drawerSize = computed(() => addUnit(props.size))

defineExpose({
  handleClose,
  afterEnter,
  afterLeave,
})
</script>
