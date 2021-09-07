import { onMounted, onUnmounted, onUpdated } from 'vue'
export function useActiveSidebarLinks() {
  let rootActiveLink = null
  let activeLink: HTMLAnchorElement | null = null
  const onScroll = throttleAndDebounce(setActiveLink, 300)
  function setActiveLink() {
    const sidebarLinks = getSidebarLinks()
    const anchors = getAnchors(sidebarLinks)
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
  function activateLink(hash: string) {
    deactiveLink(activeLink)
    deactiveLink(rootActiveLink)
    activeLink = document.querySelector(
      `.toc-item a[href="${hash}"]`
    ) as HTMLAnchorElement
    if (!activeLink) {
      return
    }
    activeLink.classList.add('active')
    // also add active class to parent h2 anchors
    const rootLi = activeLink.closest('.toc-items > ul > li')
    if (rootLi && rootLi !== activeLink.parentElement) {
      rootActiveLink = rootLi.querySelector('a')
      rootActiveLink && rootActiveLink.classList.add('active')
    } else {
      rootActiveLink = null
    }
  }
  function deactiveLink(link: HTMLElement) {
    link && link.classList.remove('active')
  }
  onMounted(() => {
    setActiveLink()
    window.addEventListener('scroll', onScroll)
  })
  onUpdated(() => {
    // sidebar update means a route change
    activateLink(decodeURIComponent(location.hash))
  })
  onUnmounted(() => {
    window.removeEventListener('scroll', onScroll)
  })
}
function getSidebarLinks() {
  return Array.from(
    document.querySelectorAll('.toc-content .toc-link')
  ) as HTMLAnchorElement[]
}
function getAnchors(sidebarLinks: HTMLAnchorElement[]) {
  return (
    Array.from(
      document.querySelectorAll('.header-anchor')
    ) as HTMLAnchorElement[]
  ).filter((anchor) =>
    sidebarLinks.some((sidebarLink) => sidebarLink.hash === anchor.hash)
  )
}
function getPageOffset() {
  return (document.querySelector('.nav-bar') as HTMLElement).offsetHeight
}
function getAnchorTop(anchor: HTMLAnchorElement) {
  const pageOffset = getPageOffset()
  return anchor.parentElement.offsetTop - pageOffset - 15
}
function isAnchorActive(
  index: number,
  anchor: HTMLAnchorElement,
  nextAnchor: HTMLAnchorElement
) {
  const scrollTop = window.scrollY
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
function throttleAndDebounce(fn: () => any, delay: number) {
  let timeout: ReturnType<typeof setTimeout>
  let called = false
  return () => {
    if (timeout) {
      clearTimeout(timeout)
    }
    if (!called) {
      fn()
      called = true
      setTimeout(() => {
        called = false
      }, delay)
    } else {
      timeout = setTimeout(fn, delay)
    }
  }
}
