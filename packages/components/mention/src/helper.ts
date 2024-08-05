import { ensureArray, isFirefox } from '@element-plus/utils'

import type { MentionCtx, MentionOption } from './types'

export const filterOption = (
  pattern: string,
  option: MentionOption
): boolean => {
  const lowerCase = pattern.toLowerCase()
  const label = option.label || option.value
  return label.toLowerCase().includes(lowerCase)
}

export const getMentionCtx = (
  inputEl: HTMLInputElement | HTMLTextAreaElement,
  prefix: string | string[],
  split: string
) => {
  const { selectionEnd } = inputEl
  if (selectionEnd === null) return
  const inputValue = inputEl.value
  const prefixArray = ensureArray(prefix)
  let splitIndex = -1
  let mentionCtx: MentionCtx | undefined
  for (let i = selectionEnd - 1; i >= 0; --i) {
    const char = inputValue[i]
    if (char === split || char === '\n' || char === '\r') {
      splitIndex = i
      continue
    }
    if (prefixArray.includes(char)) {
      const end = splitIndex === -1 ? selectionEnd : splitIndex
      const pattern = inputValue.slice(i + 1, end)
      mentionCtx = {
        pattern,
        start: i + 1,
        end,
        prefix: char,
        prefixIndex: i,
        splitIndex,
        selectionEnd,
      }
      break
    }
  }
  return mentionCtx
}

/**
 * fork from textarea-caret-position
 * https://github.com/component/textarea-caret-position
 * The MIT License (MIT)
 * Copyright (c) 2015 Jonathan Ong me@jongleberry.com
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
export const getCursorPosition = (
  element: HTMLInputElement | HTMLTextAreaElement,
  options = {
    debug: false,
    useSelectionEnd: false,
  }
) => {
  const selectionStart =
    element.selectionStart !== null ? element.selectionStart : 0
  const selectionEnd = element.selectionEnd !== null ? element.selectionEnd : 0
  const position = options.useSelectionEnd ? selectionEnd : selectionStart
  // We'll copy the properties below into the mirror div.
  // Note that some browsers, such as Firefox, do not concatenate properties
  // into their shorthand (e.g. padding-top, padding-bottom etc. -> padding),
  // so we have to list every single property explicitly.
  const properties: string[] = [
    'direction', // RTL support
    'boxSizing',
    'width', // on Chrome and IE, exclude the scrollbar, so the mirror div wraps exactly as the textarea does
    'height',
    'overflowX',
    'overflowY', // copy the scrollbar for IE
    'borderTopWidth',
    'borderRightWidth',
    'borderBottomWidth',
    'borderLeftWidth',
    'borderStyle',
    'paddingTop',
    'paddingRight',
    'paddingBottom',
    'paddingLeft',
    // https://developer.mozilla.org/en-US/docs/Web/CSS/font
    'fontStyle',
    'fontVariant',
    'fontWeight',
    'fontStretch',
    'fontSize',
    'fontSizeAdjust',
    'lineHeight',
    'fontFamily',
    'textAlign',
    'textTransform',
    'textIndent',
    'textDecoration', // might not make a difference, but better be safe
    'letterSpacing',
    'wordSpacing',
    'tabSize',
    'MozTabSize',
  ]

  if (options.debug) {
    const el = document.querySelector(
      '#input-textarea-caret-position-mirror-div'
    )
    if (el?.parentNode) el.parentNode.removeChild(el)
  }

  // The mirror div will replicate the textareas style
  const div = document.createElement('div')
  div.id = 'input-textarea-caret-position-mirror-div'
  document.body.appendChild(div)

  const style = div.style
  const computed = window.getComputedStyle(element)

  const isInput = element.nodeName === 'INPUT'

  // Default textarea styles
  style.whiteSpace = isInput ? 'nowrap' : 'pre-wrap'
  if (!isInput) style.wordWrap = 'break-word' // only for textarea-s

  // Position off-screen
  style.position = 'absolute' // required to return coordinates properly
  if (!options.debug) style.visibility = 'hidden' // not 'display: none' because we want rendering

  // Transfer the element's properties to the div
  properties.forEach((prop) => {
    if (isInput && prop === 'lineHeight') {
      // Special case for <input>s because text is rendered centered and line height may be != height
      if (computed.boxSizing === 'border-box') {
        const height = Number.parseInt(computed.height as string)
        const outerHeight =
          Number.parseInt(computed.paddingTop as string) +
          Number.parseInt(computed.paddingBottom as string) +
          Number.parseInt(computed.borderTopWidth as string) +
          Number.parseInt(computed.borderBottomWidth as string)
        const targetHeight =
          outerHeight + Number.parseInt(computed.lineHeight as string)
        if (height > targetHeight) {
          style.lineHeight = `${height - outerHeight}px`
        } else if (height === targetHeight) {
          style.lineHeight = computed.lineHeight
        } else {
          style.lineHeight = '0'
        }
      } else {
        style.lineHeight = computed.height
      }
    } else {
      style[prop as any] = computed[prop as any]
    }
  })

  if (isFirefox()) {
    // Firefox lies about the overflow property for textareas: https://bugzilla.mozilla.org/show_bug.cgi?id=984275
    if (element.scrollHeight > Number.parseInt(computed.height as string)) {
      style.overflowY = 'scroll'
    }
  } else {
    style.overflow = 'hidden' // for Chrome to not render a scrollbar; IE keeps overflowY = 'scroll'
  }

  div.textContent = element.value.slice(0, Math.max(0, position))
  // The second special handling for input type="text" vs textarea:
  // spaces need to be replaced with non-breaking spaces - http://stackoverflow.com/a/13402035/1269037
  if (isInput && div.textContent) {
    div.textContent = div.textContent.replace(/\s/g, '\u00A0')
  }

  const span = document.createElement('span')
  // Wrapping must be replicated *exactly*, including when a long word gets
  // onto the next line, with whitespace at the end of the line before (#7).
  // The  *only* reliable way to do that is to copy the *entire* rest of the
  // textareas content into the <span> created at the caret position.
  // For inputs, just '.' would be enough, but no need to bother.
  span.textContent = element.value.slice(Math.max(0, position)) || '.' // || because a completely empty faux span doesn't render at all
  span.style.position = 'relative'
  span.style.left = `${-element.scrollLeft}px`
  span.style.top = `${-element.scrollTop}px`
  div.appendChild(span)

  const relativePosition = {
    top: span.offsetTop + Number.parseInt(computed.borderTopWidth as string),
    left: span.offsetLeft + Number.parseInt(computed.borderLeftWidth as string),
    // We don't use line-height since it may be too large for position. Eg. 34px
    // for input
    height: Number.parseInt(computed.fontSize as string) * 1.5,
  }

  if (options.debug) {
    span.style.backgroundColor = '#aaa'
  } else {
    document.body.removeChild(div)
  }

  if (relativePosition.left >= element.clientWidth) {
    relativePosition.left = element.clientWidth
  }
  return relativePosition
}
