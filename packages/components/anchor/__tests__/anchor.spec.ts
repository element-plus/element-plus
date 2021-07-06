import { mount } from '@vue/test-utils'
import Anchor from '../src/index.vue'

const AXIOM = 'Rem is the best girl'

describe('Anchor.vue', () => {
  test('render test', () => {
    const wrapper = mount(Anchor, {
      slots: {
        default: AXIOM,
      },
    })
    expect(wrapper.text()).toEqual(AXIOM)
  })
})
