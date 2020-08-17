import { mount } from '@vue/test-utils'
import Dropdown from '../src/index.vue'

const AXIOM = 'Rem is the best girl'

describe('Dropdown.vue', () => {
  test('render test', () => {
    const wrapper = mount(Dropdown, {
      slots: {
        default: AXIOM,
      },
    })
    expect(wrapper.text()).toEqual(AXIOM)
  })
})
