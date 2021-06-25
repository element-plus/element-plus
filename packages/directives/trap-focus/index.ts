import { nextTick } from 'vue'
import { on, off } from '@element-plus/utils/dom'
import { obtainAllFocusableElements, EVENT_CODE } from '@element-plus/utils/aria'

import type { ObjectDirective } from 'vue'

export const FOCUSABLE_CHILDREN = '_trap-focus-children'
export const TRAP_FOCUS_HANDLER = '_trap-focus-handler'

export interface ITrapFocusElement extends HTMLElement {
  [FOCUSABLE_CHILDREN]: HTMLElement[]
  [TRAP_FOCUS_HANDLER]: (e: KeyboardEvent) => void
}

const FOCUS_STACK = []

const FOCUS_HANDLER = (e: KeyboardEvent) => {
  // Getting the top layer.
  if (FOCUS_STACK.length === 0) return
  const focusableElement = FOCUS_STACK[FOCUS_STACK.length - 1][FOCUSABLE_CHILDREN]
  if (focusableElement.length > 0 && e.code === EVENT_CODE.tab) {
    if (focusableElement.length === 1) {
      e.preventDefault()
      if (document.activeElement !== focusableElement[0]) {
        focusableElement[0].focus()
      }
      return
    }
    const goingBackward = e.shiftKey
    const isFirst = e.target === focusableElement[0]
    const isLast = e.target === focusableElement[focusableElement.length - 1]
    if (isFirst && goingBackward) {
      e.preventDefault()
      focusableElement[focusableElement.length - 1].focus()
    }
    if (isLast && !goingBackward) {
      e.preventDefault()
      focusableElement[0].focus()
    }

    // the is critical since jsdom did not implement user actions, you can only mock it
    // DELETE ME: when testing env switches to puppeteer
    if (process.env.NODE_ENV === 'test') {

      const index = focusableElement.findIndex((element: Element) => element === e.target)
      if (index !== -1) {
        focusableElement[goingBackward ? index - 1 : index + 1]?.focus()
      }
    }
  }
}

const TrapFocus: ObjectDirective = {
  beforeMount(el: ITrapFocusElement) {
    el[FOCUSABLE_CHILDREN] = obtainAllFocusableElements(el)
    FOCUS_STACK.push(el)
    if (FOCUS_STACK.length <= 1) {
      on(document, 'keydown', FOCUS_HANDLER)
    }
  },
  updated(el: ITrapFocusElement) {
    nextTick(() => {
      el[FOCUSABLE_CHILDREN] = obtainAllFocusableElements(el)
    })
  },
  unmounted() {
    FOCUS_STACK.shift()
    if (FOCUS_STACK.length === 0) {
      off(document, 'keydown', FOCUS_HANDLER)
    }
  },
}

export default TrapFocus
