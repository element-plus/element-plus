import { computed, ref } from 'vue'

import type { Ref } from 'vue'
import type { UseNamespaceReturn } from '@element-plus/hooks/use-namespace'
import type { ScrollbarInstance } from '@element-plus/components/scrollbar'

interface UseDropdownHoverZoneOptions {
  ns: UseNamespaceReturn
  menuTrigger: Ref<'hover' | 'click'>
  showTimeout: Ref<number>
  contentRef: Ref<HTMLElement | undefined>
}

/**
 * Accidental hover may occur when the mouse moves from the trigger element to the dropdown menu.
 * This issue can be avoided by drawing a hover zone SVG element.
 */
export function useDropdownHoverZone({
  ns,
  menuTrigger,
  showTimeout,
  contentRef,
}: UseDropdownHoverZoneOptions) {
  const scrollbarRef = ref<ScrollbarInstance>()
  const hoverZoneRef = ref<SVGSVGElement>()
  const hoverElementRef = ref<HTMLElement>()
  let hoverTimer: number | undefined

  const wrapClass = computed(() => ns.e('wrap'))

  /**
   * Get the placement direction from the popper element's data attribute
   * @returns 'top' | 'bottom' | 'left' | 'right' | 'auto'
   */
  const getPlacementDirection = (): string => {
    const popperElement = contentRef.value?.closest('.el-dropdown__popper') as HTMLElement
    const placement = popperElement?.getAttribute('data-popper-placement') || 'bottom'
    // Extract the base direction from placements like 'bottom-start', 'right-end', etc.
    return placement.split('-')[0]
  }

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
      const { left, top: wrapTop } = wrap.getBoundingClientRect()
      const { clientWidth, clientHeight, scrollTop } = wrap
      const startX = e.clientX - left
      const startY = e.clientY - wrapTop
      const top = hoverElementRef.value.offsetTop
      const bottom = top + hoverElementRef.value.offsetHeight

      const direction = getPlacementDirection()

      // Calculate the hover zone path based on the placement direction
      // The hover zone creates a safe passage from the current mouse position to the menu item
      let path = ''
      switch (direction) {
        case 'top':
          // Menu is above: create a triangle from mouse position upward to the menu's horizontal span
          // Ensure the mouse Y is above the menu top to create a valid triangle
          path = `M${startX} ${Math.max(startY, top - scrollTop + 1)} L0 ${top - scrollTop} L${clientWidth} ${top - scrollTop} Z`
          break
        case 'bottom':
          // Menu is below: create a triangle from mouse position downward to the menu
          path = `M${startX} ${bottom - scrollTop} L${clientWidth} ${clientHeight} V${bottom - scrollTop} Z`
          break
        case 'left':
          // Menu is to the left: create a quadrilateral from mouse position to the left menu edge
          // Use horizontal line at startY to ensure a wide enough hover zone
          path = `M${startX} ${startY} L0 ${startY} L0 ${bottom - scrollTop} L${startX} ${bottom - scrollTop} Z`
          break
        case 'right':
          // Menu is to the right: create a quadrilateral from mouse position to the right menu edge
          // Use horizontal line at startY to ensure a wide enough hover zone
          path = `M${startX} ${startY} L${clientWidth} ${startY} L${clientWidth} ${bottom - scrollTop} L${startX} ${bottom - scrollTop} Z`
          break
        case 'auto':
          // Auto placement: use bottom as default
          path = `M${startX} ${bottom - scrollTop} L${clientWidth} ${clientHeight} V${bottom - scrollTop} Z`
          break
        default:
          // Default to bottom placement behavior
          path = `M${startX} ${bottom - scrollTop} L${clientWidth} ${clientHeight} V${bottom - scrollTop} Z`
      }

      hoverZoneRef.value.innerHTML = `
        <path style="pointer-events: auto;" fill="transparent" d="${path}" />
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
