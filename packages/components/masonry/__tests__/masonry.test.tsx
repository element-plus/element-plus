import { h, nextTick, reactive } from 'vue'
import { mount } from '@vue/test-utils'
import { renderToString } from '@vue/server-renderer'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { ElMasonry } from '../index'

import type { VueWrapper } from '@vue/test-utils'

interface Item {
  id: number
  height: number
}

const observers: ResizeObserverMock[] = []
let containerWidth = 620
let wrapper: VueWrapper | undefined

class ResizeObserverMock {
  targets = new Set<Element>()
  constructor(public callback: ResizeObserverCallback) {
    observers.push(this)
  }
  observe = vi.fn((target: Element) => this.targets.add(target))
  unobserve = vi.fn((target: Element) => this.targets.delete(target))
  disconnect = vi.fn(() => this.targets.clear())
}

const getHeight = (element: Element) =>
  Number.parseFloat((element.firstElementChild as HTMLElement)?.style.height) ||
  0

type BorderBoxShape = 'array' | 'object' | 'missing' | 'empty'

const resize = (target: Element, shape: BorderBoxShape = 'array') => {
  const boxSize = { inlineSize: containerWidth, blockSize: getHeight(target) }
  for (const observer of observers) {
    if (!observer.targets.has(target)) continue
    observer.callback(
      [
        {
          target,
          contentRect: { width: containerWidth, height: getHeight(target) },
          contentBoxSize: [
            { inlineSize: containerWidth, blockSize: getHeight(target) },
          ],
          borderBoxSize:
            shape === 'object'
              ? boxSize
              : shape === 'missing'
                ? undefined
                : shape === 'empty'
                  ? []
                  : [boxSize],
        } as unknown as ResizeObserverEntry,
      ],
      observer as unknown as ResizeObserver
    )
  }
}

const settle = async (shape: BorderBoxShape = 'array') => {
  await nextTick()
  // Deliver resize notifications after Vue has updated the DOM.
  if (wrapper) {
    resize(wrapper.element, shape)
    wrapper
      .findAll('.el-masonry__item')
      .forEach(({ element }) => resize(element, shape))
  }
  await nextTick()
  vi.advanceTimersByTime(16)
  await nextTick()
}

const mountMasonry = (items: Item[], props = {}) => {
  wrapper = mount(ElMasonry<Item>, {
    props: { items, itemKey: 'id', columns: 3, gutter: 10, ...props },
    slots: {
      default: ({ item, index }: { item: Item; index: number }) =>
        h(
          'div',
          { style: { height: `${item.height}px` } },
          `${item.id}:${index}`
        ),
    },
  })
  return wrapper
}

const positions = () =>
  wrapper!
    .findAll<HTMLElement>('.el-masonry__item')
    .map(({ element }) => [
      element.style.left,
      element.style.top,
      element.style.width,
    ])

describe('Masonry', () => {
  beforeEach(() => {
    containerWidth = 620
    observers.length = 0
    vi.useFakeTimers()
    vi.stubGlobal('ResizeObserver', ResizeObserverMock)
    vi.stubGlobal('requestAnimationFrame', (callback: FrameRequestCallback) =>
      setTimeout(() => callback(0), 16)
    )
    vi.stubGlobal('cancelAnimationFrame', clearTimeout)
    vi.spyOn(HTMLElement.prototype, 'offsetWidth', 'get').mockImplementation(
      () => containerWidth
    )
    vi.spyOn(HTMLElement.prototype, 'offsetHeight', 'get').mockImplementation(
      function (this: HTMLElement) {
        return Math.round(getHeight(this))
      }
    )
    vi.spyOn(HTMLElement.prototype, 'getBoundingClientRect').mockImplementation(
      function (this: HTMLElement) {
        return { height: getHeight(this) } as DOMRect
      }
    )
  })

  afterEach(() => {
    wrapper?.unmount()
    wrapper = undefined
    vi.restoreAllMocks()
    vi.unstubAllGlobals()
    vi.useRealTimers()
  })

  it('renders arbitrary content and places items in the shortest column', async () => {
    const instance = mountMasonry(
      [100, 200, 50, 150, 80].map((height, id) => ({ id, height }))
    )
    await settle()

    expect(
      instance.findAll('.el-masonry__item').map((item) => item.text())
    ).toEqual(['0:0', '1:1', '2:2', '3:3', '4:4'])
    expect(positions()).toEqual([
      ['0px', '0px', '200px'],
      ['210px', '0px', '200px'],
      ['420px', '0px', '200px'],
      ['420px', '60px', '200px'],
      ['0px', '110px', '200px'],
    ])
    expect((instance.element as HTMLElement).style.height).toBe('210px')
  })

  it('recalculates widths when the container resizes', async () => {
    const instance = mountMasonry([
      { id: 0, height: 100 },
      { id: 1, height: 50 },
    ])
    await settle()
    containerWidth = 320
    resize(instance.element)
    await settle()

    expect(positions()).toEqual([
      ['0px', '0px', '100px'],
      ['110px', '0px', '100px'],
    ])
  })

  it.each([0.5, 2])(
    'keeps layout coordinates unchanged at scale %s',
    async (scale) => {
      vi.spyOn(
        HTMLElement.prototype,
        'getBoundingClientRect'
      ).mockImplementation(function (this: HTMLElement) {
        return { height: getHeight(this) * scale } as DOMRect
      })
      const instance = mountMasonry(
        [100, 200, 50, 150, 80].map((height, id) => ({ id, height }))
      )
      await settle()

      expect(positions()[3]).toEqual(['420px', '60px', '200px'])
      expect(positions()[4]).toEqual(['0px', '110px', '200px'])
      expect((instance.element as HTMLElement).style.height).toBe('210px')
    }
  )

  it.each(['array', 'object', 'missing', 'empty'] as const)(
    'preserves fractional heights with %s borderBoxSize',
    async (shape) => {
      vi.spyOn(
        HTMLElement.prototype,
        'getBoundingClientRect'
      ).mockImplementation(function (this: HTMLElement) {
        return { height: getHeight(this) * 0.5 } as DOMRect
      })
      const items = reactive(
        [10.25, 10.25, 10.25].map((height, id) => ({ id, height }))
      )
      const instance = mountMasonry(items, { columns: 1, gutter: 0 })
      await settle(shape)

      expect(positions()).toEqual([
        ['0px', '0px', '620px'],
        ['0px', '10.25px', '620px'],
        ['0px', '20.5px', '620px'],
      ])
      expect((instance.element as HTMLElement).style.height).toBe('30.75px')

      items[0].height = 20.75
      await settle(shape)
      expect(positions()[1]).toEqual(['0px', '20.75px', '620px'])
      expect(positions()[2]).toEqual(['0px', '31px', '620px'])
      expect((instance.element as HTMLElement).style.height).toBe('41.25px')
    }
  )

  it('uses layout heights before the first resize notification', async () => {
    vi.spyOn(HTMLElement.prototype, 'getBoundingClientRect').mockImplementation(
      function (this: HTMLElement) {
        return { height: getHeight(this) * 0.5 } as DOMRect
      }
    )
    const instance = mountMasonry(
      [100, 200, 50, 150].map((height, id) => ({ id, height }))
    )
    await nextTick()
    vi.advanceTimersByTime(16)
    await nextTick()

    expect(
      instance.findAll<HTMLElement>('.el-masonry__item')[3].element.style.top
    ).toBe('60px')
    expect((instance.element as HTMLElement).style.height).toBe('210px')
  })

  it('recalculates when columns or gutter change', async () => {
    const instance = mountMasonry(
      [100, 200, 50].map((height, id) => ({ id, height }))
    )
    await settle()
    await instance.setProps({ columns: 2, gutter: 20 })
    await settle()

    expect(positions()).toEqual([
      ['0px', '0px', '300px'],
      ['320px', '0px', '300px'],
      ['0px', '120px', '300px'],
    ])
    expect((instance.element as HTMLElement).style.height).toBe('200px')
  })

  it('reflows when existing content changes height', async () => {
    const items = reactive(
      [100, 200, 50, 150].map((height, id) => ({ id, height }))
    )
    const instance = mountMasonry(items)
    await settle()
    items[2].height = 300
    await nextTick()
    resize(instance.findAll('.el-masonry__item')[2].element)
    await settle()

    expect(positions()[3]).toEqual(['0px', '110px', '200px'])
    expect((instance.element as HTMLElement).style.height).toBe('300px')
  })

  it('handles in-place insertion, deletion and reordering with stable keys', async () => {
    const items = reactive([
      { id: 0, height: 100 },
      { id: 1, height: 200 },
    ])
    const instance = mountMasonry(items)
    await settle()
    const first = instance.findAll('.el-masonry__item')[0].element
    items.push({ id: 2, height: 50 })
    await settle()
    expect(positions()).toHaveLength(3)

    items.reverse()
    await settle()
    expect(instance.findAll('.el-masonry__item')[2].element).toBe(first)
    expect(
      instance.findAll('.el-masonry__item').map((item) => item.text())
    ).toEqual(['2:0', '1:1', '0:2'])

    items.splice(1, 1)
    await settle()
    expect(positions()).toHaveLength(2)
    expect((instance.element as HTMLElement).style.height).toBe('100px')
  })

  it('supports an empty list, one column and a key function', async () => {
    const instance = mountMasonry([], {
      columns: 1,
      itemKey: (item: Item) => item.id,
    })
    await settle()
    expect(positions()).toEqual([])
    expect((instance.element as HTMLElement).style.height).toBe('0px')

    await instance.setProps({
      items: [
        { id: 0, height: 100 },
        { id: 1, height: 50 },
      ],
    })
    await settle()
    expect(positions()).toEqual([
      ['0px', '0px', '620px'],
      ['0px', '110px', '620px'],
    ])
    expect((instance.element as HTMLElement).style.height).toBe('160px')

    await instance.setProps({ items: [] })
    await settle()
    expect((instance.element as HTMLElement).style.height).toBe('0px')
  })

  it('disconnects observers and cancels pending layout on unmount', async () => {
    const instance = mountMasonry([{ id: 0, height: 100 }])
    await nextTick()
    instance.unmount()
    wrapper = undefined

    expect(observers.every((observer) => observer.targets.size === 0)).toBe(
      true
    )
    expect(vi.getTimerCount()).toBe(0)
  })

  it('renders on the server', async () => {
    const html = await renderToString(
      h(
        ElMasonry<Item>,
        { items: [{ id: 0, height: 100 }], itemKey: 'id' },
        { default: () => h('p', 'Content') }
      )
    )
    expect(html).toContain('el-masonry__item')
    expect(html).toContain('<p>Content</p>')
  })
})
