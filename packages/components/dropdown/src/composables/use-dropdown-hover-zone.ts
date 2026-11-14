import { computed, ref } from 'vue'

import type { Ref } from 'vue'
import type { UseNamespaceReturn } from '@element-plus/hooks/use-namespace'
import type { ScrollbarInstance } from '@element-plus/components/scrollbar'

interface UseDropdownHoverZoneOptions {
  ns: UseNamespaceReturn
  menuTrigger: Ref<'hover' | 'click'>
  showTimeout: Ref<number>
}

/**
 * Accidental hover may occur when the mouse moves from the trigger element to the dropdown menu.
 * This issue can be avoided by drawing a hover zone SVG element.
 */
export function useDropdownHoverZone({
  ns,
  menuTrigger,
  showTimeout,
}: UseDropdownHoverZoneOptions) {
  const scrollbarRef = ref<ScrollbarInstance>()
  const hoverZoneRef = ref<SVGSVGElement>()
  const hoverElementRef = ref<HTMLElement>()
  let hoverTimer: number | undefined

  const wrapClass = computed(() => ns.e('wrap'))

  function handleDrawHoverZone(e: MouseEvent) {
    if (
      menuTrigger.value !== 'hover' ||
      !hoverElementRef.value ||
      !hoverZoneRef.value ||
      !scrollbarRef.value
    )
      return

    if (hoverElementRef.value.contains(e.target as HTMLElement)) {
      clearHoverTimer()
      const placement = getPlacement()
      if (!placement.startsWith('right') && !placement.startsWith('left'))
        return

      const wrap = scrollbarRef.value.$el.querySelector(
        `.${wrapClass.value}`
      ) as HTMLElement
      const { left } = wrap.getBoundingClientRect()
      const { clientWidth, clientHeight, scrollTop } = wrap
      const startX = e.clientX - left
      const top = hoverElementRef.value.offsetTop
      const bottom = top + hoverElementRef.value.offsetHeight
      const isLeft = placement.startsWith('left')
      const targetX = isLeft ? 0 : clientWidth
      let paths = ''

      if (placement.includes('-start')) {
        paths = `<path style="pointer-events: auto;" fill="transparent" d="M${startX} ${bottom - scrollTop} L${targetX} ${clientHeight} V${bottom - scrollTop} Z" />`
      } else if (placement.includes('-end')) {
        paths = `<path style="pointer-events: auto;" fill="transparent" d="M${startX} ${top - scrollTop} L${targetX} ${scrollTop} V${top - scrollTop} Z" />`
      } else {
        paths = `
          <path style="pointer-events: auto;" fill="transparent" d="M${startX} ${top - scrollTop} L${targetX} ${scrollTop} V${top - scrollTop} Z" />
          <path style="pointer-events: auto;" fill="transparent" d="M${startX} ${bottom - scrollTop} L${targetX} ${clientHeight} V${bottom - scrollTop} Z" />
        `
      }

      hoverZoneRef.value.innerHTML = paths
    } else if (!hoverTimer) {
      hoverTimer = window.setTimeout(handleClearHoverZone, showTimeout.value)
    }
  }

  function getPlacement() {
    if (!hoverElementRef.value) return ''
    let placement = ''
    const ariaControls = hoverElementRef.value.getAttribute('aria-controls')

    if (ariaControls) {
      const popperElement = document.querySelector(`#${ariaControls}`)

      if (popperElement) {
        const dropdownPopper = popperElement.closest(`.${ns.e('popper')}`)

        if (dropdownPopper) {
          placement =
            (dropdownPopper as HTMLElement).dataset.popperPlacement || ''
        }
      }
    }

    return placement
  }

  function clearHoverTimer() {
    if (!hoverTimer) return
    clearTimeout(hoverTimer)
    hoverTimer = undefined
  }

  function handleClearHoverZone() {
    if (!hoverZoneRef.value) return
    hoverZoneRef.value.innerHTML = ''
    hoverElementRef.value = undefined
    clearHoverTimer()
  }

  return {
    scrollbarRef,
    hoverZoneRef,
    hoverElementRef,
    wrapClass,
    handleDrawHoverZone,
    handleClearHoverZone,
  }
}
