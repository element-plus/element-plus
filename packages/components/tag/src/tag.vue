<template>
  <span
    v-if="disableTransitions"
    :class="containerKls"
    :style="{ backgroundColor: color }"
    @click="handleClick"
  >
    <span :class="ns.e('content')">
      <slot />
    </span>
    <el-icon v-if="closable" :class="ns.e('close')" @click.stop="handleClose">
      <Close />
    </el-icon>
  </span>
  <transition
    v-else
    :name="`${ns.namespace.value}-zoom-in-center`"
    appear
    @before-enter="onBeforeEnter"
    @after-enter="onAfterEnter"
    @before-leave="onBeforeLeave"
    @after-leave="onAfterLeave"
    @enter="onEnter"
    @leave="onLeave"
  >
    <span
      :class="containerKls"
      :style="{ backgroundColor: color }"
      @click="handleClick"
    >
      <span :class="ns.e('content')">
        <slot />
      </span>
      <el-icon v-if="closable" :class="ns.e('close')" @click.stop="handleClose">
        <Close />
      </el-icon>
    </span>
  </transition>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import ElIcon from '@element-plus/components/icon'
import { Close } from '@element-plus/icons-vue'
import { useNamespace } from '@element-plus/hooks'
import { useFormSize } from '@element-plus/components/form'
import { tagEmits, tagProps } from './tag'

import type { VNode } from 'vue'

defineOptions({
  name: 'ElTag',
})
const props = defineProps(tagProps)
const emit = defineEmits(tagEmits)

const tagSize = useFormSize()
const ns = useNamespace('tag')
const containerKls = computed(() => {
  const { type, hit, effect, closable, round } = props
  return [
    ns.b(),
    ns.is('closable', closable),
    ns.m(type || 'primary'),
    ns.m(tagSize.value),
    ns.m(effect),
    ns.is('hit', hit),
    ns.is('round', round),
  ]
})

// methods
const handleClose = (event: MouseEvent) => {
  emit('close', event)
}

const handleClick = (event: MouseEvent) => {
  emit('click', event)
}

const handleVNodeMounted = (vnode: VNode) => {
  // @ts-ignore
  if (vnode?.component?.subTree?.component?.bum) {
    // @ts-ignore
    vnode.component.subTree.component.bum = null
  }
}

function ensureParentRelative(parent: HTMLElement) {
  const computed = getComputedStyle(parent)
  if (computed.position === 'static') {
    parent.setAttribute('data-el-tag-original-position', 'static')
    parent.style.position = 'relative'
  } else {
    parent.setAttribute('data-el-tag-original-position', 'unchanged')
  }
}

function restoreParentPosition(parent: HTMLElement) {
  const mark = parent.getAttribute('data-el-tag-original-position')
  if (mark === 'static') {
    parent.style.position = ''
    parent.removeAttribute('data-el-tag-original-position')
  } else if (mark === 'unchanged') {
    parent.removeAttribute('data-el-tag-original-position')
  }
}

function setAbsoluteForTransition(el: HTMLElement) {
  const prev = {
    position: el.style.position || '',
    left: el.style.left || '',
    top: el.style.top || '',
    transform: el.style.transform || '',
    width: el.style.width || '',
    boxSizing: el.style.boxSizing || '',
    zIndex: el.style.zIndex || '',
  }
  el.__elTagPrevStyle = prev as any

  el.style.position = 'absolute'
  el.style.left = '0'
  el.style.top = '50%'
  el.style.transform = 'translateY(-50%)'
  el.style.width = '100%'
  el.style.boxSizing = 'border-box'
  el.style.zIndex = '1'
}

function restoreStyleAfterTransition(el: HTMLElement) {
  const prev = (el as any).__elTagPrevStyle
  if (prev) {
    el.style.position = prev.position
    el.style.left = prev.left
    el.style.top = prev.top
    el.style.transform = prev.transform
    el.style.width = prev.width
    el.style.boxSizing = prev.boxSizing
    el.style.zIndex = prev.zIndex
    delete (el as any).__elTagPrevStyle
  }
}

function findHostParent(el: HTMLElement): HTMLElement | null {
  return el.parentElement
}

function onBeforeEnter(el: Element) {
  const e = el as HTMLElement
  const host = findHostParent(e)
  if (!host) return
  ensureParentRelative(host)
  setAbsoluteForTransition(e)
}

function onEnter(el: Element) {
  // no-op
}

function onAfterEnter(el: Element) {
  const e = el as HTMLElement
  const host = findHostParent(e)
  if (host) {
    restoreStyleAfterTransition(e)
    restoreParentPosition(host)
  }
}

function onBeforeLeave(el: Element) {
  const e = el as HTMLElement
  const host = findHostParent(e)
  if (!host) return
  ensureParentRelative(host)
  setAbsoluteForTransition(e)
}

function onLeave(el: Element) {
  // no-op
}

function onAfterLeave(el: Element) {
  const e = el as HTMLElement
  const host = findHostParent(e)
  if (host) {
    restoreStyleAfterTransition(e)
    restoreParentPosition(host)
  }
}
</script>
