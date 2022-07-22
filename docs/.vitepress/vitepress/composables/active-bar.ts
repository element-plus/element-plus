import { nextTick, onMounted, onUpdated } from 'vue'
import { isClient } from '@vueuse/core'
import { throttleAndDebounce } from '../utils'

import type { Ref } from 'vue'

type ManualLinkFn = (hash: string) => void

export function useActiveSidebarLinks(
  container: Ref<HTMLElement>,
  marker: Ref<HTMLElement>
): { manualLink: ManualLinkFn } | undefined {
  if (!isClient) return

  let scrollDom: HTMLElement

  const onScroll = throttleAndDebounce(setActiveLink, 150)
  function setActiveLink() {
    const sidebarLinks = getSidebarLinks()
    const anchors = getAnchors(sidebarLinks)
    // Cancel the processing of the anchor point being forced to be the last one in the storefront
    // if (
    //   anchors.length &&
    //   scrollDom &&
    //   scrollDom.scrollTop + scrollDom.clientHeight === scrollDom.scrollHeight
    // ) {
    //   activateLink(anchors[anchors.length - 1].hash)
    //   return
    // }
    for (let i = 0; i < anchors.length; i++) {
      const anchor = anchors[i]
      const nextAnchor = anchors[i + 1]
      const [isActive, hash] = isAnchorActive(i, anchor, nextAnchor)
      if (isActive) {
        history.replaceState(
          null,
          document.title,
          hash ? (hash as string) : ' '
        )
        activateLink(hash as string)
        return
      }
    }
  }

  let prevActiveLink: HTMLAnchorElement | null = null

  function activateLink(hash: string) {
    deactiveLink(prevActiveLink)

    const activeLink = (prevActiveLink =
      hash == null
        ? null
        : (container.value.querySelector(
            `.toc-item a[href="${decodeURIComponent(hash)}"]`
          ) as HTMLAnchorElement))

    if (activeLink) {
      activeLink.classList.add('active')
      marker.value.style.opacity = '1'
      marker.value.style.top = `${activeLink.offsetTop}px`
    } else {
      marker.value.style.opacity = '0'
      marker.value.style.top = '33px'
    }
  }

  function deactiveLink(link: HTMLElement | null) {
    link && link.classList.remove('active')
  }

  onMounted(() => {
    window.requestAnimationFrame(setActiveLink)
    scrollDom = document.querySelector('.App .el-scrollbar__wrap')!
    scrollDom.onscroll = onScroll
    location.hash &&
      nextTick(() => {
        manualLink(location.hash)
      })
  })

  onUpdated(() => {
    activateLink(location.hash)
  })

  function manualLink(hash: string) {
    const anchor: HTMLElement | null = document.querySelector(hash)
    if (!anchor) {
      return
    }
    const top = anchor.offsetTop + anchor.offsetHeight
    scrollDom?.scrollTo(0, top)
    activateLink(location.hash)
  }

  return {
    manualLink,
  }
}
function getSidebarLinks() {
  return Array.from(
    document.querySelectorAll('.toc-content .toc-link')
  ) as HTMLAnchorElement[]
}
function getAnchors(sidebarLinks: HTMLAnchorElement[]) {
  return (
    Array.from(
      document.querySelectorAll('.doc-content .header-anchor')
    ) as HTMLAnchorElement[]
  ).filter((anchor) =>
    sidebarLinks.some((sidebarLink) => sidebarLink.hash === anchor.hash)
  )
}
function getPageOffset() {
  return (document.querySelector('.navbar') as HTMLElement).offsetHeight
}
function getAnchorTop(anchor: HTMLAnchorElement) {
  const pageOffset = getPageOffset()
  try {
    return anchor.parentElement!.offsetTop - pageOffset - 15
  } catch {
    return 0
  }
}
function isAnchorActive(
  index: number,
  anchor: HTMLAnchorElement,
  nextAnchor: HTMLAnchorElement
) {
  const scrollTop = document.querySelector(
    '.App .el-scrollbar__wrap'
  )!.scrollTop
  if (index === 0 && scrollTop === 0) {
    return [true, null]
  }
  if (scrollTop < getAnchorTop(anchor)) {
    return [false, null]
  }
  if (!nextAnchor || scrollTop < getAnchorTop(nextAnchor)) {
    return [true, decodeURIComponent(anchor.hash)]
  }
  return [false, null]
}
