import { afterEach, beforeEach, describe, expect, it } from 'vitest'
import {
  focusFirstDescendant,
  getEdges,
  obtainAllFocusableElements,
  tryFocus,
} from '../src/utils'

describe('focus-trap utils', () => {
  const buildDOM = () => {
    const parser = new DOMParser()
    return parser.parseFromString(
      `
    <div class="root">
      <span>some val</span>
      <input class="focusable-input" />
      <span tabindex="0" class="focusable-span">other val</span>
      <span hidden tabindex="0"> hidden span</span>
      <input disabled />
      <input hidden />
    </div>
    `,
      'text/html'
    )
  }

  beforeEach(() => {
    const dom = buildDOM()

    Array.from(dom.children).forEach((child) => {
      document.body.appendChild(child)
    })
  })

  afterEach(() => {
    document.body.innerHTML = ''
  })

  it('should be able to focus', () => {
    const focusable = obtainAllFocusableElements(document.body)
    expect(focusable).toHaveLength(2)
    expect(focusable[0].classList.contains('focusable-input')).toBeTruthy()
  })

  it('should be able to get focusable edge', () => {
    const [first, last] = getEdges(document.body)
    expect(first?.classList.contains('focusable-input')).toBeTruthy()
    expect(last?.classList.contains('focusable-span')).toBeTruthy()
  })

  it('should be able to focus on the first descendant', () => {
    expect(document.activeElement).toBe(document.body)
    const focusable = obtainAllFocusableElements(document.body)
    focusFirstDescendant(focusable)
    expect(document.activeElement).toBe(focusable[0])
  })

  describe('tryFocus', () => {
    it('should be focus the input element', () => {
      const input = document.querySelector('.focusable-input') as HTMLElement
      tryFocus(input)
      expect(document.activeElement).toBe(input)
    })

    it('should be focus the span element', () => {
      const span = document.querySelector('.focusable-span') as HTMLElement
      tryFocus(span)
      expect(document.activeElement).toBe(span)
    })

    it('should be focus the disabled input element', () => {
      const input = document.querySelector('[disabled]') as HTMLElement
      tryFocus(input)
      expect(document.activeElement).toBe(input)
    })

    it('should be focus the document body', () => {
      const input = document.querySelector('.focusable-input') as HTMLElement
      tryFocus(input)
      expect(document.activeElement).not.toBe(document.body)
      tryFocus(document.body)
      expect(document.activeElement).toBe(document.body)
    })

    it('should be focus the null element', () => {
      const activeElement = document.activeElement
      tryFocus(null)
      expect(document.activeElement).toBe(activeElement)
    })
  })
})
