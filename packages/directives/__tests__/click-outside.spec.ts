import { withDirectives, h } from 'vue'
import { mount } from '@vue/test-utils'
import ClickOutside from '../click-outside'

const AXIOM = 'Rem is the best girl'
const TRIGGER = 'trigger'
const OTHER_CLASS = 'other-class'

// init some local variables
let mousedownObject
let mouseupObject
// mock handler with implementations which makes assignment to the local variable that we registered above.
const handler = jest.fn((eMouseup, eMousedown) => {
  mouseupObject = eMouseup
  mousedownObject = eMousedown
})
const Component = {
  template: `
  <div>
    <div class="${OTHER_CLASS}">Hello</div>
    <div class="${TRIGGER}" v-click-outside="handler">${AXIOM}</div>
  </div>
`,
  setup() {
    return {
      handler,
    }
  },
}

const _mount = () =>
  mount(Component, {
    global: {
      directives: {
        ClickOutside,
      },
    },
  })

const triggerDocumentClickEvent = () => {
  const mousedown = document.createEvent('MouseEvents')
  mousedown.initMouseEvent(
    'mousedown',
    true,
    true,
    window,
    0,
    0,
    0,
    0,
    0,
    false,
    false,
    false,
    false,
    0,
    null
  )
  document.dispatchEvent(mousedown)

  const mouseup = document.createEvent('MouseEvents')
  mouseup.initMouseEvent(
    'mouseup',
    true,
    true,
    window,
    0,
    0,
    0,
    0,
    0,
    false,
    false,
    false,
    false,
    0,
    null
  )
  document.dispatchEvent(mouseup)
}

describe('Directives.vue', () => {
  beforeEach(() => {
    // clear the previously assigned event object
    mousedownObject = null
    mouseupObject = null

    handler.mockClear()
  })
  test('render test', () => {
    const wrapper = _mount()
    expect(wrapper.text()).toContain(AXIOM)
    expect(handler).toHaveBeenCalledTimes(0)

    wrapper.unmount()
  })

  test('should trigger handler', async () => {
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
  const firstHandler = jest.fn()
  const InnerComponent = {
    template: `<div class="${TRIGGER}" v-click-outside="handler">${AXIOM}</div>`,
    setup() {
      return { handler: firstHandler }
    },
  }

  const secondHandler = jest.fn()
  const OuterComponent = {
    setup() {
      return () => {
        const triggerNode = withDirectives(h(InnerComponent), [
          [ClickOutside, secondHandler],
        ])
        return h('div', { class: OTHER_CLASS }, triggerNode)
      }
    },
  }

  it('should support for multiple directives', async () => {
    const wrapper = mount(OuterComponent, {
      global: {
        directives: {
          ClickOutside,
        },
      },
    })

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
