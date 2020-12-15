import { mount } from '@vue/test-utils'
import Space from '../src/index.vue'

const AXIOM = 'Rem is the best girl'

describe('Space.vue', () => {
  test('render test', () => {
    const wrapper = mount(Space, {
      slots: {
        default: AXIOM,
      },
    })
    expect(wrapper.text()).toEqual(AXIOM)
  })
})
