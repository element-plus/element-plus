import { ref, nextTick, h } from 'vue'
import { mount } from '@vue/test-utils'

import useTeleport from '../use-teleport'

const AXIOM = 'Rem is the best girl'

const Comp = {
  setup() {
    const appendToBody = ref(true)
    const { showTeleport, hideTeleport, renderTeleport } = useTeleport(() => h('div', AXIOM), appendToBody)

    return () => {
      return [
        h('button', {
          class: 'show',
          onClick: showTeleport,
        }, 'show'),
        h('button', {
          class: 'hide',
          onClick: hideTeleport,
        }, 'hide'),
        h('button', {
          class: 'toggle',
          onClick: () => {
            // toggle append to body.
            appendToBody.value = !appendToBody.value
          },
        }),
        renderTeleport(),
      ]
    }
  },
}

describe('useModal', () => {

  let wrapper: ReturnType<typeof mount>

  beforeEach(() => {
    wrapper = mount(Comp)
  })

  afterEach(() => {
    wrapper.unmount()
  })

  it('should render correctly', async () => {
    await nextTick()
    expect(wrapper.text()).not.toContain(AXIOM)
  })

  it('should render teleport to the DOM', async () => {
    await nextTick()
    expect(wrapper.text()).not.toContain(AXIOM)

    await wrapper.find('.show').trigger('click')

    expect(document.body.innerHTML).toContain(AXIOM)

    await wrapper.find('.hide').trigger('click')

    expect(document.body.innerHTML).not.toContain(AXIOM)
  })

  it('should render to the current wrapper instead of document.body', async () => {
    await nextTick()

    expect(wrapper.text()).not.toContain(AXIOM)

    await wrapper.find('.toggle').trigger('click')

    expect(wrapper.text()).toContain(AXIOM)
  })
})
