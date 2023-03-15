import { afterEach, describe, expect, it } from 'vitest'
import { getActiveElement } from '../src/utils'

describe('tooltip utils', () => {
  const buildDOM = (html: string) => {
    const parser = new DOMParser()
    const dom = parser.parseFromString(html, 'text/html')

    Array.from(dom.children).forEach((child) => {
      document.body.appendChild(child)
    })
  }

  afterEach(() => {
    document.body.innerHTML = ''
  })

  describe('getActiveElement', () => {
    it('should return document.activeElement if nothing is focused', () => {
      buildDOM(`<div></div>`)
      expect(getActiveElement()).toBe(document.activeElement)
    })

    it('should return document.activeElement if is defined and does not have shadowRoot', () => {
      buildDOM(`<div>
        <button id="btn">Btn</button>
      </div>`)
      const btn = document.querySelector('#btn') as HTMLElement
      btn.focus()
      expect(getActiveElement()).toBe(btn)
    })

    it('should return shadowRoot.activeElement if document.activeElement has a shadowRoot', () => {
      const documentHTML = `
        <html>
          <body>
            <custom-element>
              <button id="btn">Btn</button>
            </custom-element>
          </body>
        </html>
      `
      document.body.innerHTML = documentHTML

      const customElement = document.querySelector('custom-element')
      const shadowRoot = customElement!.attachShadow({ mode: 'open' })
      shadowRoot.innerHTML = documentHTML

      const btn = customElement?.shadowRoot?.querySelector(
        '#btn'
      ) as HTMLElement
      btn.focus()
      expect(getActiveElement()).toBe(shadowRoot.activeElement)
    })
  })
})
