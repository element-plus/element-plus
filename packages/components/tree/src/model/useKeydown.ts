// @ts-nocheck
import { onMounted, onUpdated } from 'vue'
import { useEventListener } from '@vueuse/core'
import { EVENT_CODE } from '@element-plus/constants'
import { useNamespace } from '@element-plus/hooks'

import type TreeStore from './tree-store'
import type { Ref } from 'vue'
import type { Nullable } from '@element-plus/utils'

interface UseKeydownOption {
  el$: Ref<HTMLElement>
}
export function useKeydown({ el$ }: UseKeydownOption, store: Ref<TreeStore>) {
  const ns = useNamespace('tree')

  onMounted(() => {
    initTabIndex()
  })

  onUpdated(() => {
    const checkboxItems = Array.from(
      el$.value.querySelectorAll('input[type=checkbox]')
    )
    checkboxItems.forEach((checkbox) => {
      checkbox.setAttribute('tabindex', '-1')
    })
  })

  const handleKeydown = (ev: KeyboardEvent): void => {
    const currentItem = ev.target as HTMLElement
    if (!currentItem.className.includes(ns.b('node'))) return
    const code = ev.code
    const treeItems = Array.from(
      el$.value.querySelectorAll(`.${ns.is('focusable')}[role=treeitem]`)
    )
    const currentIndex = treeItems.indexOf(currentItem)
    let nextIndex
    if ([EVENT_CODE.up, EVENT_CODE.down].includes(code)) {
      ev.preventDefault()
      if (code === EVENT_CODE.up) {
        nextIndex =
          currentIndex === -1
            ? 0
            : currentIndex !== 0
            ? currentIndex - 1
            : treeItems.length - 1
        const startIndex = nextIndex
        while (true) {
          if (store.value.getNode(treeItems[nextIndex].dataset.key).canFocus)
            break
          nextIndex--
          if (nextIndex === startIndex) {
            nextIndex = -1
            break
          }
          if (nextIndex < 0) {
            nextIndex = treeItems.length - 1
          }
        }
      } else {
        nextIndex =
          currentIndex === -1
            ? 0
            : currentIndex < treeItems.length - 1
            ? currentIndex + 1
            : 0
        const startIndex = nextIndex
        while (true) {
          if (store.value.getNode(treeItems[nextIndex].dataset.key).canFocus)
            break
          nextIndex++
          if (nextIndex === startIndex) {
            nextIndex = -1
            break
          }
          if (nextIndex >= treeItems.length) {
            nextIndex = 0
          }
        }
      }
      nextIndex !== -1 && treeItems[nextIndex].focus()
    }
    if ([EVENT_CODE.left, EVENT_CODE.right].includes(code)) {
      ev.preventDefault()
      currentItem.click()
    }
    const hasInput = currentItem.querySelector(
      '[type="checkbox"]'
    ) as Nullable<HTMLInputElement>
    if (
      [EVENT_CODE.enter, EVENT_CODE.numpadEnter, EVENT_CODE.space].includes(
        code
      ) &&
      hasInput
    ) {
      ev.preventDefault()
      hasInput.click()
    }
  }

  useEventListener(el$, 'keydown', handleKeydown)

  const initTabIndex = (): void => {
    const treeItems = Array.from(
      el$.value.querySelectorAll(`.${ns.is('focusable')}[role=treeitem]`)
    )
    const checkboxItems = Array.from(
      el$.value.querySelectorAll('input[type=checkbox]')
    )
    checkboxItems.forEach((checkbox) => {
      checkbox.setAttribute('tabindex', '-1')
    })
    const checkedItem = el$.value.querySelectorAll(
      `.${ns.is('checked')}[role=treeitem]`
    )
    if (checkedItem.length) {
      checkedItem[0].setAttribute('tabindex', '0')
      return
    }
    treeItems[0]?.setAttribute('tabindex', '0')
  }
}
