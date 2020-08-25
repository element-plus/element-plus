import { mount } from '@vue/test-utils'
import Hooks from '../src/index.vue'

const AXIOM = 'Rem is the best girl'

describe('Hooks.vue', () => {
  test('render test', () => {
    const wrapper = mount(Hooks, {
      slots: {
        default: AXIOM,
      },
    })
    expect(wrapper.text()).toEqual(AXIOM)
  })
})
