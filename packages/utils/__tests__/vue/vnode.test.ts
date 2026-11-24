import { describe, expect, it } from 'vitest'
import { flattedChildren } from '../..'

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
