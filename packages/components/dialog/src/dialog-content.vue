<template>
  <div :ref="composedDialogRef" :class="dialogKls" :style="style" tabindex="-1">
    <header
      ref="headerRef"
      :class="[ns.e('header'), headerClass, { 'show-close': showClose }]"
    >
      <slot name="header">
        <span role="heading" :aria-level="ariaLevel" :class="ns.e('title')">
          {{ title }}
        </span>
      </slot>
      <button
        v-if="showClose"
        :aria-label="t('el.dialog.close')"
        :class="ns.e('headerbtn')"
        type="button"
        @click="$emit('close')"
      >
        <el-icon :class="ns.e('close')">
          <component :is="closeIcon || Close" />
        </el-icon>
      </button>
    </header>
    <div :id="bodyId" :class="[ns.e('body'), bodyClass]">
      <slot />
    </div>
    <footer v-if="$slots.footer" :class="[ns.e('footer'), footerClass]">
      <slot name="footer" />
    </footer>
  </div>
</template>

<script lang="ts" setup>
import { computed, inject, onBeforeUnmount, watch } from 'vue'
import { ElIcon } from '@element-plus/components/icon'
import { FOCUS_TRAP_INJECTION_KEY } from '@element-plus/components/focus-trap'
import { useDraggable, useLocale, useNamespace } from '@element-plus/hooks'
import {
  CloseComponents,
  addClass,
  composeRefs,
  isClient,
  removeClass,
} from '@element-plus/utils'
import { dialogInjectionKey } from './constants'
import {
  dialogContentEmits,
  dialogContentPropsDefaults,
} from './dialog-content'

import type { DialogContentProps } from './dialog-content'

const { t } = useLocale()
const { Close } = CloseComponents

defineOptions({ name: 'ElDialogContent' })
const props = withDefaults(
  defineProps<DialogContentProps>(),
  dialogContentPropsDefaults
)
defineEmits(dialogContentEmits)

const { dialogRef, headerRef, bodyId, ns, style } = inject(dialogInjectionKey)!
const { focusTrapRef } = inject(FOCUS_TRAP_INJECTION_KEY)!

const composedDialogRef = composeRefs(focusTrapRef, dialogRef)
const popupNs = useNamespace('popup', ns.namespace)
const draggingClass = computed(() => popupNs.bm('parent', 'dragging'))

const draggable = computed(() => !!props.draggable)
const overflow = computed(() => !!props.overflow)
const { resetPosition, updatePosition, isDragging } = useDraggable(
  dialogRef,
  headerRef,
  draggable,
  overflow
)

const dialogKls = computed(() => [
  ns.b(),
  ns.is('fullscreen', props.fullscreen),
  ns.is('draggable', draggable.value),
  ns.is('dragging', isDragging.value),
  ns.is('align-center', !!props.alignCenter),
  { [ns.m('center')]: props.center },
])

// TODO: When we support the :has selector, this can be removed here.
watch(
  [isDragging, draggingClass],
  ([dragging, className], [, oldClassName]) => {
    if (!isClient) {
      return
    }

    if (oldClassName !== className) {
      removeClass(document.body, oldClassName)
    }

    const toggleClass = dragging ? addClass : removeClass
    toggleClass(document.body, className)
  }
)

onBeforeUnmount(() => {
  if (isClient && isDragging.value) {
    removeClass(document.body, draggingClass.value)
  }
})

defineExpose({
  resetPosition,
  updatePosition,
})
</script>
