import { mount } from '@vue/test-utils'
import MenuItemGroup from '../src/index.vue'

const AXIOM = 'Rem is the best girl'

describe('MenuItem-group.vue', () => {
  test('render test', () => {
    const wrapper = mount(MenuItemGroup, {
      slots: {
        default: AXIOM,
      },
    })
    expect(wrapper.text()).toEqual(AXIOM)
  })
})
