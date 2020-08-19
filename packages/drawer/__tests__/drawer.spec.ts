import { mount } from '@vue/test-utils'
import Drawer from '../src/index.vue'

const AXIOM = 'Rem is the best girl'

describe('Drawer.vue', () => {
  test('render test', () => {
    const wrapper = mount(Drawer, {
      slots: {
        default: AXIOM,
      },
    })
    expect(wrapper.text()).toEqual(AXIOM)
  })
})
