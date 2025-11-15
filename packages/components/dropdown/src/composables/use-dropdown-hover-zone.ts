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

  const handleDrawHoverZone = (e: MouseEvent) => {
    if (
      menuTrigger.value !== 'hover' ||
      !hoverElementRef.value ||
      !hoverZoneRef.value ||
      !scrollbarRef.value
    )
      return

    if (hoverElementRef.value.contains(e.target as HTMLElement)) {
      clearHoverTimer()

      const wrap = scrollbarRef.value.$el.querySelector(
        `.${wrapClass.value}`
      ) as HTMLElement
      const { left } = wrap.getBoundingClientRect()
      const { clientWidth, clientHeight, scrollTop } = wrap
      const startX = e.clientX - left
      const top = hoverElementRef.value.offsetTop
      const bottom = top + hoverElementRef.value.offsetHeight

      hoverZoneRef.value.innerHTML = `
        <path style="pointer-events: auto;" fill="transparent" d="M${startX} ${bottom - scrollTop} L${clientWidth} ${clientHeight} V${bottom - scrollTop} Z" />
      `
    } else if (!hoverTimer) {
      hoverTimer = window.setTimeout(handleClearHoverZone, showTimeout.value)
    }
  }

  const clearHoverTimer = () => {
    if (!hoverTimer) return
    clearTimeout(hoverTimer)
    hoverTimer = undefined
  }

  const handleClearHoverZone = () => {
    if (!hoverZoneRef.value) return
    hoverZoneRef.value.innerHTML = ''
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
