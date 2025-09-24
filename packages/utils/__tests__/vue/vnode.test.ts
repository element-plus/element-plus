import { describe, expect, it } from 'vitest'
import { ensureOnlyChild, flattedChildren } from '../..'

describe('ensureOnlyChild', () => {
  it('it should throw an error if input is not an array or undefined', () => {
    expect(() => {
      ensureOnlyChild('not an array' as any)
    }).toThrow('expect to receive a single Vue element child')
  })

  it('it should throw an error if input array has more than one element', () => {
    expect(() => {
      ensureOnlyChild([1, 2])
    }).toThrow('expect to receive a single Vue element child')
  })

  it('it should return the only child if input is an array with one element', () => {
    const child = { type: 'div' }
    expect(ensureOnlyChild([child as any])).toEqual(child)
  })
})

describe('flattedChildren', () => {
  it('Component vnode has no child nodes.', () => {
    const vnode = {
      __v_isVNode: true,
      type: {
        __name: 'Comp',
      },
      component: {
        subTree: {
          type: 'div',
          children: 'text',
        },
      },
    }
    const flattedVNodes = flattedChildren(vnode)
    expect(flattedVNodes).toContain(vnode)
  })
  it('Component VNode has child nodes.', () => {
    const childVNode = {
      __v_isVNode: true,
      type: {
        __name: 'Child',
      },
      component: {
        subTree: {
          type: 'div',
          children: 'text',
        },
      },
    }
    const parentVNode = {
      __v_isVNode: true,
      type: {
        __name: 'Parent',
      },
      component: {
        subTree: childVNode,
      },
    }

    const flattedVNodes = flattedChildren(parentVNode)
    expect(flattedVNodes).toContain(parentVNode)
    expect(flattedVNodes).toContain(childVNode)
  })
  it('Component VNode has a slot, and the children passed in through the h function are object.', () => {
    const slotVNode = {
      __v_isVNode: true,
      type: 'div',
      children: 'text',
    }
    const vnode = {
      __v_isVNode: true,
      type: {
        __name: 'Child',
      },
      component: {
        subTree: slotVNode,
      },
      children: {
        default() {
          return slotVNode
        },
      },
    }

    const flattedVNodes = flattedChildren(vnode)
    expect(flattedVNodes).toContain(vnode)
    expect(flattedVNodes).toContain(slotVNode)
  })
  it('Component VNode has a slot, and the children passed in through the h function are array.', () => {
    const slotVNode = {
      __v_isVNode: true,
      type: 'div',
      children: 'text',
    }
    const vnode = {
      __v_isVNode: true,
      type: {
        __name: 'Child',
      },
      component: {
        subTree: slotVNode,
      },
      children: [slotVNode],
    }

    const flattedVNodes = flattedChildren(vnode)
    expect(flattedVNodes).toContain(vnode)
    expect(flattedVNodes).toContain(slotVNode)
  })
})
