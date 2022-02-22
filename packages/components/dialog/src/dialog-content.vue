<template>
  <div
    :ref="composedDialogRef"
    :class="[
      ns.b(),
      ns.is('fullscreen', fullscreen),
      ns.is('draggable', draggable),
      { [ns.m('center')]: center },
      customClass,
    ]"
    aria-modal="true"
    role="dialog"
    :aria-label="title || 'dialog'"
    :style="style"
    @click.stop=""
    @keydown="onKeydown"
  >
    <div ref="headerRef" :class="ns.e('header')">
      <slot name="title">
        <span :class="ns.e('title')">
          {{ title }}
        </span>
      </slot>
    </div>
    <div :class="ns.e('body')">
      <slot></slot>
    </div>
    <div v-if="$slots.footer" :class="ns.e('footer')">
      <slot name="footer"></slot>
    </div>
    <button
      v-if="showClose"
      aria-label="close"
      :class="ns.e('headerbtn')"
      type="button"
      @click="$emit('close')"
    >
      <el-icon :class="ns.e('close')">
        <component :is="closeIcon || Close" />
      </el-icon>
    </button>
  </div>
</template>

<script lang="ts" setup>
import { inject } from 'vue'
import { ElIcon } from '@element-plus/components/icon'
import { FOCUS_TRAP_INJECTION_KEY } from '@element-plus/components/focus-trap'
import { CloseComponents, composeRefs } from '@element-plus/utils'
import { dialogContentProps } from './dialog-content'

import { elDialogInjectionKey } from './token'

const { Close } = CloseComponents

defineProps(dialogContentProps)

const { dialogRef, headerRef, ns, style } = inject(
  elDialogInjectionKey,
  undefined
)!

const { focusTrapRef, onKeydown } = inject(FOCUS_TRAP_INJECTION_KEY, undefined)!
const composedDialogRef = composeRefs(focusTrapRef, dialogRef)
</script>
