import { mount } from '@vue/test-utils'
import MenuItem from '../src/index.vue'

const AXIOM = 'Rem is the best girl'

describe('MenuItem.vue', () => {
  test('render test', () => {
    const wrapper = mount(MenuItem, {
      slots: {
        default: AXIOM,
      },
    })
    expect(wrapper.text()).toEqual(AXIOM)
  })
})
