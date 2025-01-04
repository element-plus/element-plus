<template>
  <div ref="anchorRef" :class="cls">
    <div
      v-if="marker"
      ref="markerRef"
      :class="ns.e('marker')"
      :style="markerStyle"
    />
    <div :class="ns.e('list')">
      <slot />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, onMounted, provide, ref, watch } from 'vue'
import { useEventListener } from '@vueuse/core'
import { useNamespace } from '@element-plus/hooks'
import {
  animateScrollTo,
  getElement,
  getOffsetTopDistance,
  getScrollElement,
  getScrollTop,
  isUndefined,
  isWindow,
  throttleByRaf,
} from '@element-plus/utils'
import { anchorEmits, anchorProps } from './anchor'
import { anchorKey } from './constants'

import type { AnchorLinkState } from './constants'

defineOptions({
  name: 'ElAnchor',
})

const props = defineProps(anchorProps)
const emit = defineEmits(anchorEmits)

const currentAnchor = ref('')
const anchorRef = ref<HTMLElement | null>(null)
const markerRef = ref<HTMLElement | null>(null)
const containerEl = ref<HTMLElement | Window>()

const links: Record<string, HTMLElement> = {}
let isScrolling = false
let currentScrollTop = 0

const ns = useNamespace('anchor')

const cls = computed(() => [
  ns.b(),
  props.type === 'underline' ? ns.m('underline') : '',
  ns.m(props.direction),
])

const addLink = (state: AnchorLinkState) => {
  links[state.href] = state.el
}

const removeLink = (href: string) => {
  delete links[href]
}

const setCurrentAnchor = (href: string) => {
  const activeHref = currentAnchor.value
  if (activeHref !== href) {
    currentAnchor.value = href
    emit('change', href)
  }
}

let clearAnimate: (() => void) | null = null

const scrollToAnchor = (href: string) => {
  if (!containerEl.value) return
  const target = getElement(href)
  if (!target) return
  if (clearAnimate) clearAnimate()
  isScrolling = true
  const scrollEle = getScrollElement(target, containerEl.value)
  const distance = getOffsetTopDistance(target, scrollEle)
  const max = scrollEle.scrollHeight - scrollEle.clientHeight
  const to = Math.min(distance - props.offset, max)
  clearAnimate = animateScrollTo(
    containerEl.value,
    currentScrollTop,
    to,
    props.duration,
    () => {
      // make sure it is executed after throttleByRaf's handleScroll
      setTimeout(() => {
        isScrolling = false
      }, 20)
    }
  )
}

const scrollTo = (href?: string) => {
  if (href) {
    setCurrentAnchor(href)
    scrollToAnchor(href)
  }
}

const handleClick = (e: MouseEvent, href?: string) => {
  emit('click', e, href)
  scrollTo(href)
}

const handleScroll = throttleByRaf(() => {
  if (containerEl.value) {
    currentScrollTop = getScrollTop(containerEl.value)
  }
  const currentHref = getCurrentHref()
  if (isScrolling || isUndefined(currentHref)) return
  setCurrentAnchor(currentHref)
})

const getCurrentHref = () => {
  if (!containerEl.value) return
  const scrollTop = getScrollTop(containerEl.value)
  const anchorTopList: { top: number; href: string }[] = []

  for (const href of Object.keys(links)) {
    const target = getElement(href)
    if (!target) continue
    const scrollEle = getScrollElement(target, containerEl.value)
    const distance = getOffsetTopDistance(target, scrollEle)
    anchorTopList.push({
      top: distance - props.offset - props.bound,
      href,
    })
  }
  anchorTopList.sort((prev, next) => prev.top - next.top)
  for (let i = 0; i < anchorTopList.length; i++) {
    const item = anchorTopList[i]
    const next = anchorTopList[i + 1]

    if (i === 0 && scrollTop === 0) {
      return props.selectScrollTop ? item.href : ''
    }
    if (item.top <= scrollTop && (!next || next.top > scrollTop)) {
      return item.href
    }
  }
}

const getContainer = () => {
  const el = getElement(props.container)
  if (!el || isWindow(el)) {
    containerEl.value = window
  } else {
    containerEl.value = el
  }
}

useEventListener(containerEl, 'scroll', handleScroll)

const markerStyle = computed(() => {
  if (!anchorRef.value || !markerRef.value || !currentAnchor.value) return {}
  const currentLinkEl = links[currentAnchor.value]
  if (!currentLinkEl) return {}
  const anchorRect = anchorRef.value.getBoundingClientRect()
  const markerRect = markerRef.value.getBoundingClientRect()
  const linkRect = currentLinkEl.getBoundingClientRect()

  if (props.direction === 'horizontal') {
    const left = linkRect.left - anchorRect.left
    return {
      left: `${left}px`,
      width: `${linkRect.width}px`,
      opacity: 1,
    }
  } else {
    const top =
      linkRect.top - anchorRect.top + (linkRect.height - markerRect.height) / 2
    return {
      top: `${top}px`,
      opacity: 1,
    }
  }
})

onMounted(() => {
  getContainer()
  const hash = decodeURIComponent(window.location.hash)
  const target = getElement(hash)
  if (target) {
    scrollTo(hash)
  } else {
    handleScroll()
  }
})

watch(
  () => props.container,
  () => {
    getContainer()
  }
)

provide(anchorKey, {
  ns,
  direction: props.direction,
  currentAnchor,
  addLink,
  removeLink,
  handleClick,
})

defineExpose({
  scrollTo,
})
</script>
