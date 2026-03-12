<template>
  <g-teleport
    :to="appendTo"
    :disabled="appendTo !== 'body' ? false : !appendToBody"
  >
    <transition v-bind="transitionConfig">
      <g-overlay
        v-show="visible"
        custom-mask-event
        :mask="modal"
        :overlay-class="[
          modalClass ?? '',
          `${ns.namespace.value}-modal-dialog`,
          ns.is('penetrable', penetrable),
        ]"
        :z-index="zIndex"
      >
        <div
          role="dialog"
          aria-modal="true"
          :aria-label="title || undefined"
          :aria-labelledby="!title ? titleId : undefined"
          :aria-describedby="bodyId"
          :class="[
            `${ns.namespace.value}-overlay-dialog`,
            ns.is('closing', closing),
          ]"
          :style="overlayDialogStyle"
          @click="overlayEvent.onClick"
          @mousedown="overlayEvent.onMousedown"
          @mouseup="overlayEvent.onMouseup"
        >
          <g-focus-trap
            loop
            :trapped="visible"
            focus-start-el="container"
            @focus-after-trapped="onOpenAutoFocus"
            @focus-after-released="onCloseAutoFocus"
            @focusout-prevented="onFocusoutPrevented"
            @release-requested="onCloseRequested"
          >
            <g-dialog-content
              v-if="rendered"
              ref="dialogContentRef"
              v-bind="$attrs"
              :center="center"
              :align-center="_alignCenter"
              :close-icon="closeIcon"
              :draggable="_draggable"
              :overflow="_overflow"
              :fullscreen="fullscreen"
              :header-class="headerClass"
              :body-class="bodyClass"
              :footer-class="footerClass"
              :show-close="showClose"
              :title="title"
              :aria-level="headerAriaLevel"
              @close="handleClose"
            >
              <template #header>
                <slot
                  v-if="!$slots.title"
                  name="header"
                  :close="handleClose"
                  :title-id="titleId"
                  :title-class="ns.e('title')"
                />
                <slot v-else name="title" />
              </template>
              <slot />
              <template v-if="$slots.footer" #footer>
                <slot name="footer" />
              </template>
            </g-dialog-content>
          </g-focus-trap>
        </div>
      </g-overlay>
    </transition>
  </g-teleport>
</template>

<script lang="ts" setup>
import { computed, provide, ref, useSlots } from 'vue'
import { GOverlay } from '@element-plus/components/overlay'
import { useDeprecated, useNamespace, useSameTarget } from '@element-plus/hooks'
import GFocusTrap from '@element-plus/components/focus-trap'
import GTeleport from '@element-plus/components/teleport'
import GDialogContent from './dialog-content.vue'
import { dialogInjectionKey } from './constants'
import { dialogEmits, dialogPropsDefaults } from './dialog'
import { useDialog } from './use-dialog'

import type { DialogProps } from './dialog'

defineOptions({
  name: 'GDialog',
  inheritAttrs: false,
})

const props = withDefaults(defineProps<DialogProps>(), dialogPropsDefaults)
defineEmits(dialogEmits)
const slots = useSlots()

useDeprecated(
  {
    scope: 'g-dialog',
    from: 'the title slot',
    replacement: 'the header slot',
    version: '3.0.0',
    ref: 'https://element-plus.org/en-US/component/dialog.html#slots',
  },
  computed(() => !!slots.title)
)

const ns = useNamespace('dialog')
const dialogRef = ref<HTMLElement>()
const headerRef = ref<HTMLElement>()
const dialogContentRef = ref()

const {
  visible,
  titleId,
  bodyId,
  style,
  overlayDialogStyle,
  rendered,
  transitionConfig,
  zIndex,
  _draggable,
  _alignCenter,
  _overflow,
  handleClose,
  onModalClick,
  onOpenAutoFocus,
  onCloseAutoFocus,
  onCloseRequested,
  onFocusoutPrevented,
  closing,
} = useDialog(props, dialogRef)

provide(dialogInjectionKey, {
  dialogRef,
  headerRef,
  bodyId,
  ns,
  rendered,
  style,
})

const overlayEvent = useSameTarget(onModalClick)

const penetrable = computed(
  () => props.modalPenetrable && !props.modal && !props.fullscreen
)

const resetPosition = () => {
  dialogContentRef.value?.resetPosition()
}

defineExpose({
  /** @description whether the dialog is visible */
  visible,
  dialogContentRef,
  resetPosition,
  handleClose,
})
</script>
