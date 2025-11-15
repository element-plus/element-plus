import { computed, inject, nextTick, ref } from 'vue'
import { DROPDOWN_INJECTION_KEY } from '../tokens'

import type { Ref } from 'vue'

interface UseDropdownVisibleOptions {
  isRoot?: boolean
  triggerId: Ref<string>
}

// Record opened menus by their triggerIds
const openedMenus = ref<string[]>([])

export function useDropdownVisible({
  isRoot,
  triggerId,
}: UseDropdownVisibleOptions) {
  const parent = isRoot ? undefined : inject(DROPDOWN_INJECTION_KEY, undefined)
  const toggleReason = ref<Event>()

  const opened = computed(() => {
    return openedMenus.value.includes(triggerId.value)
  })

  const path = computed(() => {
    const path = parent?.path.value ?? []
    return [...path, triggerId.value]
  })

  function handleOpen(event?: Event) {
    toggleReason.value = event
    openedMenus.value = path.value
  }

  function handleClose(event?: Event) {
    toggleReason.value = event
    const index = openedMenus.value.indexOf(triggerId.value)

    if (index !== -1) {
      closeMenuToIndex(index)
    }
  }

  function handleToggle(event: Event) {
    if (opened.value) {
      handleClose(event)
    } else {
      handleOpen(event)
    }
  }

  function handleCloseAll() {
    toggleReason.value = undefined
    closeMenuToIndex(0)
  }

  async function closeMenuToIndex(index: number) {
    let len = openedMenus.value.length

    while (index < len) {
      openedMenus.value = openedMenus.value.slice(0, len - 1)
      // Waiting for the focus to return to the previous element
      await nextTick()
      len--
    }
  }

  return {
    openedMenus,
    opened,
    toggleReason,
    path,
    handleOpen,
    handleClose,
    handleToggle,
    handleCloseAll,
  }
}

export type UseDropdownVisibleReturn = ReturnType<typeof useDropdownVisible>
