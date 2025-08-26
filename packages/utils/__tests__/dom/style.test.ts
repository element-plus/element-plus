import { describe, expect, it } from 'vitest'
import { addClass, hasClass, removeClass } from '../..'

const getClass = (el: Element) => {
  if (!el) return ''
  return el.getAttribute('class')
}

describe('dom style', () => {
  describe('hasClass', () => {
    it('Judge whether a Element has a class', () => {
      const div = document.createElement('div')
      div.className = 'a b   cc'
      expect(hasClass(div, 'a')).toBe(true)
      expect(hasClass(div, 'ab')).toBe(false)
      try {
        expect(hasClass(div, 'a b'))
      } catch (error: any) {
        expect(error.message).toEqual('className should not contain space.')
      }

      const canvas = document.createElement('canvas')
      canvas.className = 'canvas-a canvas-b cc'
      expect(hasClass(canvas, 'a')).toBe(false)
      expect(hasClass(canvas, 'canvas-a')).toBe(true)
      // remove classList
      canvas.setAttribute('classList', '')
      expect(hasClass(canvas, 'b')).toBe(false)
      expect(hasClass(canvas, 'canvas-b')).toBe(true)

      const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
      svg.setAttribute('class', 'svg-a svg-b')
      expect(hasClass(svg, 'a')).toBe(false)
      expect(hasClass(svg, 'svg-a')).toBe(true)
      // remove classList
      svg.setAttribute('classList', '')
      expect(hasClass(svg, 'b')).toBe(false)
      expect(hasClass(svg, 'svg-b')).toBe(true)

      const path = document.createElementNS(
        'http://www.w3.org/2000/svg',
        'path'
      )
      path.setAttribute('class', 'path-a path-b')
      expect(hasClass(path, 'a')).toBe(false)
      expect(hasClass(path, 'path-a')).toBe(true)
      // remove classList
      path.setAttribute('classList', '')
      expect(hasClass(path, 'b')).toBe(false)
      expect(hasClass(path, 'path-b')).toBe(true)
    })
  })

  describe('addClass', () => {
    it('Add class to element', () => {
      const div = document.createElement('div')
      addClass(div, 'div-abc abc')
      expect(hasClass(div, 'abc')).toBe(true)
      expect(hasClass(div, 'div-abc')).toBe(true)
      expect(hasClass(div, 'div')).toBe(false)
      addClass(div, 'abc')
      expect(getClass(div)).toEqual('div-abc abc')
      // remove classList
      div.setAttribute('classList', '')
      addClass(div, 'div-box con')
      expect(hasClass(div, 'con')).toBe(true)
      expect(hasClass(div, 'div-box')).toBe(true)
      expect(hasClass(div, 'box')).toBe(false)
      addClass(div, 'con')
      expect(getClass(div)).toEqual('div-abc abc div-box con')

      const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
      addClass(svg, 'svg-abc svg')
      expect(hasClass(svg, 'svg')).toBe(true)
      expect(hasClass(svg, 'svg-abc')).toBe(true)
      expect(hasClass(svg, 'abc')).toBe(false)
      expect(hasClass(svg, 'sv')).toBe(false)
      addClass(svg, 'svg')
      expect(getClass(svg)).toEqual('svg-abc svg')
      addClass(svg, 'svg-aa     space')
      expect(getClass(svg)).toEqual('svg-abc svg svg-aa space')
      // remove classList
      svg.setAttribute('classList', '')
      addClass(svg, 'svg-abc-a svg-b')
      expect(hasClass(svg, 'svg')).toBe(true)
      expect(hasClass(svg, 'svg-abc')).toBe(true)
      expect(hasClass(svg, 'abc')).toBe(false)
      expect(hasClass(svg, 'sv')).toBe(false)
      expect(hasClass(svg, 'svg-abc-a')).toBe(true)
      expect(hasClass(svg, 'svg-b')).toBe(true)
      expect(hasClass(svg, 'a')).toBe(false)

      const path = document.createElementNS(
        'http://www.w3.org/2000/svg',
        'path'
      )
      addClass(path, 'path-abc path')
      expect(hasClass(path, 'path')).toBe(true)
      expect(hasClass(path, 'path-abc')).toBe(true)
      expect(hasClass(path, 'abc')).toBe(false)
      expect(hasClass(path, 'pa')).toBe(false)
      addClass(path, 'path')
      expect(getClass(path)).toEqual('path-abc path')
      // remove classList
      path.setAttribute('classList', '')
      expect(hasClass(path, 'path')).toBe(true)
      expect(hasClass(path, 'path-abc')).toBe(true)
      expect(hasClass(path, 'abc')).toBe(false)
      expect(hasClass(path, 'pa')).toBe(false)
    })
  })

  describe('removeClass', () => {
    it('Remove class on element', () => {
      const div = document.createElement('div')
      addClass(div, 'div-abc abc ab bb cc')

      removeClass(div, 'abc')
      expect(hasClass(div, 'abc')).toBe(false)

      expect(hasClass(div, 'bb')).toBe(true)
      expect(hasClass(div, 'cc')).toBe(true)

      removeClass(div, 'bb cc')
      expect(hasClass(div, 'bb')).toBe(false)
      expect(hasClass(div, 'cc')).toBe(false)
      expect(getClass(div)).toEqual('div-abc ab')

      // remove classList
      div.setAttribute('classList', '')
      addClass(div, 'div-box con')
      removeClass(div, 'div-box con')
      expect(hasClass(div, 'con')).toBe(false)
      expect(hasClass(div, 'div-box')).toBe(false)
      expect(getClass(div)).toBe('div-abc ab')

      const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
      addClass(svg, 'svg-abc svg')
      removeClass(svg, 'svg-abc     svg')
      expect(hasClass(svg, 'svg-abc')).toBe(false)
      expect(hasClass(svg, 'abc')).toBe(false)
      expect(getClass(svg)).toEqual('')
      // remove classList
      svg.setAttribute('classList', '')
      addClass(svg, 'svg-abc-a svg-b')
      expect(hasClass(svg, 'svg')).toBe(false)
      expect(hasClass(svg, 'svg-abc')).toBe(false)
      expect(hasClass(svg, 'abc')).toBe(false)
      expect(hasClass(svg, 'svg-abc-a')).toBe(true)
      expect(hasClass(svg, 'svg-b')).toBe(true)
      removeClass(svg, 'svg')
      expect(getClass(svg)).toEqual('svg-abc-a svg-b')
      removeClass(svg, 'svg-abc-a')
      expect(hasClass(svg, 'svg-abc-a')).toBe(false)
      expect(hasClass(svg, 'svg-b')).toBe(true)

      const path = document.createElementNS(
        'http://www.w3.org/2000/svg',
        'path'
      )
      addClass(path, 'path-abc path')
      expect(hasClass(path, 'path')).toBe(true)
      expect(hasClass(path, 'path-abc')).toBe(true)
      expect(hasClass(path, 'abc')).toBe(false)
      expect(hasClass(path, 'pa')).toBe(false)
      removeClass(path, 'path')
      expect(hasClass(path, 'path')).toBe(false)
      expect(hasClass(path, 'path-abc')).toBe(true)
      // remove classList
      path.setAttribute('classList', '')
      addClass(path, 'path path-1 path2')
      expect(hasClass(path, 'path')).toBe(true)
      expect(hasClass(path, 'path-1')).toBe(true)
      expect(getClass(path)).toEqual('path-abc path path-1 path2')
      removeClass(path, 'path')
      expect(hasClass(path, 'path')).toBe(false)
      expect(getClass(path)).toEqual('path-abc path-1 path2')
      removeClass(path, 'path-abc path-1 path2')
      expect(getClass(path)).toEqual('')
    })
  })
})
