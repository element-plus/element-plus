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
import {
  computed,
  onBeforeUnmount,
  onMounted,
  provide,
  ref,
  watch,
  watchEffect,
} from 'vue'
import { useNamespace } from '@element-plus/hooks'
import {
  getOffsetTopDistance,
  isFunction,
  isUndefined,
} from '@element-plus/utils'
import { anchorEmits, anchorProps } from './anchor'
import {
  anchorKey,
  animateScrollTo,
  getElement,
  getScrollElement,
  getScrollTop,
  isWindow,
  throttleByRaf,
} from './helper'

import type { AnchorLinkState } from './helper'
import type { CSSProperties } from 'vue'

defineOptions({
  name: 'ElAnchor',
})

const props = defineProps(anchorProps)
const emit = defineEmits(anchorEmits)

const current = ref('')
const anchorRef = ref<HTMLElement | null>(null)
const markerRef = ref<HTMLElement | null>(null)
const containerEle = ref<HTMLElement | Window>()
const markerStyle = ref<CSSProperties>({})

const links: Record<string, HTMLElement> = {}
let isScrolling = false
let preScrollTop = 0

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

const setCurrent = (href: string) => {
  const oldHref = current.value
  if (oldHref !== href) {
    current.value = href
    emit('change', href)
  }
}

const handleClick = (e: MouseEvent, href?: string) => {
  emit('click', e, href)
  if (href) {
    setCurrent(href)
    scrollTo(href)
  }
}

const scrollTo = (href: string) => {
  if (!containerEle.value) return
  isScrolling = true
  const target = getElement(href) as HTMLElement
  if (!target) return
  const scrollEle = getScrollElement(target, containerEle.value)
  const distance = getOffsetTopDistance(target, scrollEle)
  const max = scrollEle.scrollHeight - scrollEle.clientHeight
  const to = Math.min(distance - props.offset, max)
  animateScrollTo(containerEle.value, preScrollTop, to, props.duration, () => {
    setTimeout(() => {
      isScrolling = false
    }, 20)
  })
}

const handleScroll = throttleByRaf(() => {
  if (containerEle.value) {
    preScrollTop = getScrollTop(containerEle.value)
  }
  if (isScrolling) return
  const currentHref = getCurrentHref()
  if (!isUndefined(currentHref)) {
    setCurrent(currentHref)
  }
})

const getCurrentHref = () => {
  if (!containerEle.value) return
  const scrollTop = getScrollTop(containerEle.value)
  const anchorTopList: { top: number; href: string }[] = []

  for (const href of Object.keys(links)) {
    const target = getElement(href) as HTMLElement
    if (!target) continue
    const scrollEle = getScrollElement(target, containerEle.value)
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
      return ''
    }
    if (item.top <= scrollTop && (!next || next.top > scrollTop)) {
      return item.href
    }
  }
}

const getContainer = () => {
  const el = getElement(props.container)
  if (!el || isWindow(el)) {
    containerEle.value = window
  } else {
    containerEle.value = el
  }
}

const bindScrollEvent = () => {
  if (containerEle.value) {
    containerEle.value.addEventListener('scroll', handleScroll)
  }
}

const unbindScrollEvent = () => {
  if (containerEle.value) {
    containerEle.value.removeEventListener('scroll', handleScroll)
  }
}

const currentAnchor = computed(() => {
  return isFunction(props.getCurrentAnchor)
    ? props.getCurrentAnchor(current.value)
    : current.value
})

const updateMarkerStyle = () => {
  if (!anchorRef.value || !markerRef.value) return

  if (!currentAnchor.value) {
    markerStyle.value = {}
    return
  }
  const currentLinkEl = links[currentAnchor.value]
  if (currentLinkEl) {
    const anchorRect = anchorRef.value.getBoundingClientRect()
    const markerRect = markerRef.value.getBoundingClientRect()
    const linkRect = currentLinkEl.getBoundingClientRect()

    if (props.direction === 'vertical') {
      const top =
        linkRect.top -
        anchorRect.top +
        (linkRect.height - markerRect.height) / 2

      markerStyle.value = {
        top: `${top}px`,
        opacity: 1,
      }
    } else if (props.direction === 'horizontal') {
      const left = linkRect.left - anchorRect.left

      markerStyle.value = {
        left: `${left}px`,
        width: `${linkRect.width}px`,
        opacity: 1,
      }
    }
  }
}

onMounted(() => {
  getContainer()
  bindScrollEvent()
  const hash = decodeURIComponent(window.location.hash)
  const target = getElement(hash)
  if (target) {
    setCurrent(hash)
    scrollTo(hash)
  } else {
    handleScroll()
  }
})

onBeforeUnmount(() => {
  unbindScrollEvent()
})

watch(
  () => props.container,
  (val, oldVal) => {
    if (val === oldVal) return
    unbindScrollEvent()
    getContainer()
    bindScrollEvent()
  }
)

watchEffect(updateMarkerStyle)

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
