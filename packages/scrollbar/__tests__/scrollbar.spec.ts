import { mount } from '@vue/test-utils'
import Scrollbar from '../src/index.vue'

const AXIOM = 'Rem is the best girl'

describe('Scrollbar.vue', () => {
  test('render test', () => {
    const wrapper = mount(Scrollbar, {
      slots: {
        default: AXIOM,
      },
    })
    expect(wrapper.text()).toEqual(AXIOM)
  })
})
