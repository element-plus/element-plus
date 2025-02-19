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
import { computed, inject } from 'vue'
import { ElIcon } from '@element-plus/components/icon'
import { FOCUS_TRAP_INJECTION_KEY } from '@element-plus/components/focus-trap'
import { useDraggable, useLocale } from '@element-plus/hooks'
import { CloseComponents, composeRefs } from '@element-plus/utils'
import { dialogInjectionKey } from './constants'
import { dialogContentEmits, dialogContentProps } from './dialog-content'

const { t } = useLocale()
const { Close } = CloseComponents

defineOptions({ name: 'ElDialogContent' })
const props = defineProps(dialogContentProps)
defineEmits(dialogContentEmits)

const { dialogRef, headerRef, bodyId, ns, style } = inject(dialogInjectionKey)!
const { focusTrapRef } = inject(FOCUS_TRAP_INJECTION_KEY)!

const dialogKls = computed(() => [
  ns.b(),
  ns.is('fullscreen', props.fullscreen),
  ns.is('draggable', props.draggable),
  ns.is('align-center', props.alignCenter),
  { [ns.m('center')]: props.center },
])

const composedDialogRef = composeRefs(focusTrapRef, dialogRef)

const draggable = computed(() => props.draggable)
const overflow = computed(() => props.overflow)
const { resetPosition } = useDraggable(
  dialogRef,
  headerRef,
  draggable,
  overflow
)

defineExpose({
  resetPosition,
})
</script>
