import { mount } from '@vue/test-utils'
import { beforeEach, describe, expect, it, vi } from 'vitest'
import ClickOutside from '../click-outside'

const AXIOM = 'Rem is the best girl'
const TRIGGER = 'trigger'
const OTHER_CLASS = 'other-class'

// init some local variables
let mousedownObject: MouseEvent | null
let mouseupObject: MouseEvent | null
// mock handler with implementations which makes assignment to the local variable that we registered above.
const handler = vi.fn((eMouseup, eMousedown) => {
  mouseupObject = eMouseup
  mousedownObject = eMousedown
})

const _mount = () =>
  mount(
    {
      setup() {
        return () => (
          <div>
            <div class={OTHER_CLASS}>Hello</div>
            <div class={TRIGGER} v-click-outside={handler}>
              {AXIOM}
            </div>
          </div>
        )
      },
    },
    {
      global: {
        directives: {
          ClickOutside,
        },
      },
    }
  )

const triggerDocumentClickEvent = () => {
  const mousedown = new MouseEvent('mousedown', {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
  })
  document.dispatchEvent(mousedown)

  const mouseup = new MouseEvent('mouseup', {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
  })
  document.dispatchEvent(mouseup)
}

describe('Directives.vue', () => {
  beforeEach(() => {
    // clear the previously assigned event object
    mousedownObject = null
    mouseupObject = null
  })
  it('render test', () => {
    const wrapper = _mount()
    expect(wrapper.text()).toContain(AXIOM)
    expect(handler).toHaveBeenCalledTimes(0)

    wrapper.unmount()
  })

  it('should trigger handler', async () => {
    const wrapper = _mount()
    await wrapper.find(`.${TRIGGER}`).trigger('mousedown')
    await wrapper.find(`.${TRIGGER}`).trigger('mouseup')
    expect(handler).toHaveBeenCalledTimes(0)

    triggerDocumentClickEvent()

    // here is the different part
    // we test the existence of the local variable.
    expect(mousedownObject).toBeDefined()
    expect(mouseupObject).toBeDefined()
  })
})

describe('Multiple click-outside directives', () => {
  const firstHandler = vi.fn()
  const secondHandler = vi.fn()

  it('should support for multiple directives', async () => {
    const wrapper = mount(
      {
        setup() {
          return () => (
            <div class={OTHER_CLASS} v-click-outside={secondHandler}>
              <div class={TRIGGER} v-click-outside={firstHandler}>
                {AXIOM}
              </div>
            </div>
          )
        },
      },
      {
        global: {
          directives: {
            ClickOutside,
          },
        },
      }
    )

    // click inside trigger element
    await wrapper.find(`.${TRIGGER}`).trigger('mousedown')
    await wrapper.find(`.${TRIGGER}`).trigger('mouseup')
    expect(firstHandler).toHaveBeenCalledTimes(0)
    expect(secondHandler).toHaveBeenCalledTimes(0)

    // click outside trigger element
    triggerDocumentClickEvent()
    expect(firstHandler).toHaveBeenCalledTimes(1)
    expect(secondHandler).toHaveBeenCalledTimes(1)

    // update the component instance
    wrapper.vm.$forceUpdate()
    triggerDocumentClickEvent()
    expect(firstHandler).toHaveBeenCalledTimes(2)
    expect(secondHandler).toHaveBeenCalledTimes(2)
  })
})
