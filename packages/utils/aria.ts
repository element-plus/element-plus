export const EVENT_CODE = {
  tab: 'Tab',
  enter: 'Enter',
  space: 'Space',
  left: 'ArrowLeft', // 37
  up: 'ArrowUp', // 38
  right: 'ArrowRight', // 39
  down: 'ArrowDown', // 40
  esc: 'Escape',
  delete: 'Delete',
  backspace: 'Backspace',
}

const FOCUSABLE_ELEMENT_SELECTORS =`a[href],button:not([disabled]),button:not([hidden]),:not([tabindex="-1"]),input:not([disabled]),input:not([type="hidden"]),select:not([disabled]),textarea:not([disabled])`

/**
 * Determine if the testing element is visible on screen no matter if its on the viewport or not
 */
export const isVisible = (element: HTMLElement) => {
  if (process.env.NODE_ENV === 'test') return true
  const computed = getComputedStyle(element)
  // element.offsetParent won't work on fix positioned
  // WARNING: potential issue here, going to need some expert advices on this issue
  return computed.position === 'fixed' ? false : element.offsetParent !== null
}

export const obtainAllFocusableElements = (element: HTMLElement): HTMLElement[] => {
  return Array.from(element.querySelectorAll(FOCUSABLE_ELEMENT_SELECTORS)).filter(isFocusable)
    .filter(isVisible) as HTMLElement[]
}

/**
 * @desc Determine if target element is focusable
 * @param element {HTMLElement}
 * @returns {Boolean} true if it is focusable
 */
export const isFocusable = (element: HTMLElement): boolean => {
  if (
    element.tabIndex > 0 ||
    (element.tabIndex === 0 && element.getAttribute('tabIndex') !== null)
  ) {
    return true
  }
  // HTMLButtonElement has disabled
  if ((element as HTMLButtonElement).disabled) {
    return false
  }

  switch (element.nodeName) {
    case 'A': {
      // casting current element to Specific HTMLElement in order to be more type precise
      return !!(element as HTMLAnchorElement).href && (element as HTMLAnchorElement).rel !== 'ignore'
    }
    case 'INPUT':{
      return !((element as HTMLInputElement).type === 'hidden' || (element as HTMLInputElement).type === 'file')
    }
    case 'BUTTON':
    case 'SELECT':
    case 'TEXTAREA': {
      return true
    }
    default: {
      return false
    }
  }
}

/**
 * @desc Set Attempt to set focus on the current node.
 * @param element
 *          The node to attempt to focus on.
 * @returns
 *  true if element is focused.
 */
export const attemptFocus = (element: HTMLElement): boolean => {
  if (!isFocusable(element)) {
    return false
  }
  Utils.IgnoreUtilFocusChanges = true
  // Remove the old try catch block since there will be no error to be thrown
  element.focus?.()
  Utils.IgnoreUtilFocusChanges = false
  return document.activeElement === element
}


/**
 * Trigger an event
 * mouseenter, mouseleave, mouseover, keyup, change, click, etc.
 * @param  {HTMLElement} elm
 * @param  {String} name
 * @param  {*} opts
 */
export const triggerEvent = function(elm: HTMLElement, name: string, ...opts: Array<boolean>): HTMLElement {
  let eventName: string

  if (name.includes('mouse') || name.includes('click')) {
    eventName = 'MouseEvents'
  } else if (name.includes('key')) {
    eventName = 'KeyboardEvent'
  } else {
    eventName = 'HTMLEvents'
  }
  const evt = document.createEvent(eventName)

  evt.initEvent(name, ...opts)
  elm.dispatchEvent(evt)
  return elm
}

const Utils = {
  IgnoreUtilFocusChanges: false,
  /**
   * @desc Set focus on descendant nodes until the first focusable element is
   *       found.
   * @param {HTMLElement} element
   *          DOM node for which to find the first focusable descendant.
   * @returns {Boolean}
   *  true if a focusable element is found and focus is set.
   */
  focusFirstDescendant: function(element: HTMLElement): boolean {
    for (let i = 0; i < element.childNodes.length; i++) {
      const child = element.childNodes[i] as HTMLElement
      if (
        attemptFocus(child) ||
        this.focusFirstDescendant(child)
      ) {
        return true
      }
    }
    return false
  },
  /**
   * @desc Find the last descendant node that is focusable.
   * @param {HTMLElement} element
   *          DOM node for which to find the last focusable descendant.
   * @returns {Boolean}
   *  true if a focusable element is found and focus is set.
   */
  focusLastDescendant: function(element: HTMLElement): boolean {
    for (let i = element.childNodes.length - 1; i >= 0; i--) {
      const child = element.childNodes[i] as HTMLElement
      if (
        attemptFocus(child) ||
        this.focusLastDescendant(child)
      ) {
        return true
      }
    }
    return false
  },
}

export default Utils
