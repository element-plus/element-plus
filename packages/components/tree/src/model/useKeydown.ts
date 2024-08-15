// @ts-nocheck
import { onMounted, onUpdated, shallowRef, watch } from 'vue'
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

  const treeItems = shallowRef<Nullable<HTMLElement>[]>([])
  const checkboxItems = shallowRef<Nullable<HTMLElement>[]>([])

  onMounted(() => {
    initTabIndex()
  })

  onUpdated(() => {
    treeItems.value = Array.from(el$.value.querySelectorAll('[role=treeitem]'))
    checkboxItems.value = Array.from(
      el$.value.querySelectorAll('input[type=checkbox]')
    )
  })

  watch(checkboxItems, (val) => {
    val.forEach((checkbox) => {
      checkbox.setAttribute('tabindex', '-1')
    })
  })

  const handleKeydown = (ev: KeyboardEvent): void => {
    const currentItem = ev.target as HTMLElement
    if (!currentItem.className.includes(ns.b('node'))) return
    const code = ev.code
    treeItems.value = Array.from(
      el$.value.querySelectorAll(`.${ns.is('focusable')}[role=treeitem]`)
    )
    const currentIndex = treeItems.value.indexOf(currentItem)
    let nextIndex
    if ([EVENT_CODE.up, EVENT_CODE.down].includes(code)) {
      ev.preventDefault()
      if (code === EVENT_CODE.up) {
        nextIndex =
          currentIndex === -1
            ? 0
            : currentIndex !== 0
            ? currentIndex - 1
            : treeItems.value.length - 1
        const startIndex = nextIndex
        while (true) {
          if (
            store.value.getNode(treeItems.value[nextIndex].dataset.key).canFocus
          )
            break
          nextIndex--
          if (nextIndex === startIndex) {
            nextIndex = -1
            break
          }
          if (nextIndex < 0) {
            nextIndex = treeItems.value.length - 1
          }
        }
      } else {
        nextIndex =
          currentIndex === -1
            ? 0
            : currentIndex < treeItems.value.length - 1
            ? currentIndex + 1
            : 0
        const startIndex = nextIndex
        while (true) {
          if (
            store.value.getNode(treeItems.value[nextIndex].dataset.key).canFocus
          )
            break
          nextIndex++
          if (nextIndex === startIndex) {
            nextIndex = -1
            break
          }
          if (nextIndex >= treeItems.value.length) {
            nextIndex = 0
          }
        }
      }
      nextIndex !== -1 && treeItems.value[nextIndex].focus()
    }
    if ([EVENT_CODE.left, EVENT_CODE.right].includes(code)) {
      ev.preventDefault()
      currentItem.click()
    }
    const hasInput = currentItem.querySelector(
      '[type="checkbox"]'
    ) as Nullable<HTMLInputElement>
    if ([EVENT_CODE.enter, EVENT_CODE.space].includes(code) && hasInput) {
      ev.preventDefault()
      hasInput.click()
    }
  }

  useEventListener(el$, 'keydown', handleKeydown)

  const initTabIndex = (): void => {
    treeItems.value = Array.from(
      el$.value.querySelectorAll(`.${ns.is('focusable')}[role=treeitem]`)
    )
    checkboxItems.value = Array.from(
      el$.value.querySelectorAll('input[type=checkbox]')
    )
    const checkedItem = el$.value.querySelectorAll(
      `.${ns.is('checked')}[role=treeitem]`
    )
    if (checkedItem.length) {
      checkedItem[0].setAttribute('tabindex', '0')
      return
    }
    treeItems.value[0]?.setAttribute('tabindex', '0')
  }
}
