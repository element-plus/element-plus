import { mount } from '@vue/test-utils'
import Menu from '../src/index.vue'

const AXIOM = 'Rem is the best girl'

describe('Menu.vue', () => {
  test('render test', () => {
    const wrapper = mount(Menu, {
      slots: {
        default: AXIOM,
      },
    })
    expect(wrapper.text()).toEqual(AXIOM)
  })
})
