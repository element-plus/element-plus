export const eventKeys = {
  tab: 9,
  enter: 13,
  space: 32,
  left: 37,
  up: 38,
  right: 39,
  down: 40,
  esc: 27,
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
  element.focus && element.focus()
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
      const child = element.childNodes[i]
      if (
        attemptFocus(child as HTMLElement) ||
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
      const child = element.childNodes[i]
      if (
        attemptFocus(child as HTMLElement) ||
        this.focusLastDescendant(child)
      ) {
        return true
      }
    }
    return false
  },
}

export default Utils
