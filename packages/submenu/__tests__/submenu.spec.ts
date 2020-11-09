import { mount } from '@vue/test-utils'
import Submenu from '../src/index.vue'

const AXIOM = 'Rem is the best girl'

describe('Submenu.vue', () => {
  test('render test', () => {
    const wrapper = mount(Submenu, {
      slots: {
        default: AXIOM,
      },
    })
    expect(wrapper.text()).toEqual(AXIOM)
  })
})
