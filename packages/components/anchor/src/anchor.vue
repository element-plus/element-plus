<template>
  <div
    ref="anchor$"
    role="navigation"
    aria-label="Side navigation"
    :class="[ns.b()]"
  >
    <div :class="ns.e('slider')">
      <div :class="ns.e('slider-bar')" :style="sliderBarStyle" />
    </div>
    <slot />
  </div>
</template>

<script lang="ts" setup>
import {
  computed,
  onMounted,
  provide,
  ref,
  shallowReactive,
  shallowRef,
} from 'vue'
import { useEventListener } from '@vueuse/core'
import { debugWarn } from '@element-plus/utils/error'
import { anchorContextKey } from '@element-plus/tokens'
import { useNamespace } from '@element-plus/hooks'
import { getElementOffset, getScrollOffset } from '@element-plus/utils'
import { anchorEmits, anchorProps, getLinkTarget } from './anchor'

import type { CSSProperties } from 'vue'
import type { AnchorContext, AnchorLinkInstance } from '@element-plus/tokens'

const COMPONENT_NAME = 'ElAnchor'

defineOptions({
  name: 'ElAnchor',
})

const props = defineProps(anchorProps)
const emit = defineEmits(anchorEmits)

const ns = useNamespace('anchor')

const anchor$ = shallowRef<HTMLDivElement>()
const links = shallowReactive<Record<number /* uid */, AnchorLinkInstance>>({})
const container = shallowRef<HTMLElement | Window | null>(null)
const activeLink = ref<number>()

const sliderBarStyle = computed((): CSSProperties => {
  if (activeLink.value === undefined) {
    return {
      opacity: 0,
    }
  }

  const index = getLinkIndex(activeLink.value)
  if (index === undefined) return {}

  return {
    top: `calc(var(${ns.cssVarName('anchor-link-height')}) * ${index})`,
  }
})

const getLinkIndex = (uid: number) => {
  if (!anchor$.value) return undefined

  const els = Array.from(
    anchor$.value.querySelectorAll(`.${ns.namespace.value}-anchor__link`)
  )
  const el = links[uid].element
  if (!el.value) return undefined

  return els.indexOf(el.value)
}

const handleScrollTo = (link: string) => {
  if (!link || !container.value) return

  const { behavior, offsetTop, offsetLeft } = props

  const target = getLinkTarget(link)
  if (!target) return

  const scrollTop = getScrollOffset(container.value, 'top')
  const scrollLeft = getScrollOffset(container.value, 'left')

  const top =
    scrollTop + getElementOffset(target, container.value, 'top') - offsetTop
  const left =
    scrollLeft + getElementOffset(target, container.value, 'left') - offsetLeft

  container.value.scrollTo({
    left,
    top,
    behavior,
  })
}

const getCurrentAnchor = () => {
  if (!container.value) return

  const { offsetTop, boundary } = props

  const sections: Record<number /* uid */, number /* offset top */> = {}

  for (const link of Object.values(links)) {
    const target = getLinkTarget(link.props.href)
    if (!target) continue

    const top = getElementOffset(target, container.value!, 'top')
    if (top < offsetTop + boundary) {
      sections[link.uid] = top
    }
  }

  if (Object.values(sections).length === 0) return undefined

  const uid = +Object.entries(sections).sort(([, a], [, b]) => b - a)[0][0]
  return uid
}

const setActiveLink = (uid: number | undefined) => {
  if (activeLink.value === uid) return
  activeLink.value = uid
  if (uid) {
    emit('change', links[uid].props.href)
  }
}

const handleScroll = () => {
  const currentActiveLink = getCurrentAnchor()
  setActiveLink(currentActiveLink)
}

useEventListener(container, 'scroll', handleScroll)

{
  const registerLink: AnchorContext['registerLink'] = (instance) => {
    links[instance.uid] = instance
  }

  const unregisterLink: AnchorContext['unregisterLink'] = (uid) => {
    delete links[uid]
  }

  const onAnchorLinkClick: AnchorContext['onAnchorLinkClick'] = (link, evt) => {
    if (props.hash && link) {
      location.href = link
    }
    emit('select', link, evt)
  }

  provide(anchorContextKey, {
    activeLink,
    registerLink,
    unregisterLink,
    scrollTo: handleScrollTo,
    onAnchorLinkClick,
  })
}

const getContainer = () => {
  if (!props.container) {
    container.value = window
    return
  }

  container.value = document.querySelector<HTMLElement>(props.container)
  if (!container.value)
    debugWarn(COMPONENT_NAME, `Target is not existed: ${props.container}`)
}

onMounted(() => {
  getContainer()
  handleScroll()
})
</script>
