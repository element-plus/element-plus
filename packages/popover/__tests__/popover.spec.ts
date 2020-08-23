import { mount } from '@vue/test-utils'
import Popover from '../src/index.vue'

const AXIOM = 'Rem is the best girl'

describe('Popover.vue', () => {
  test('render test', () => {
    const wrapper = mount(Popover, {
      slots: {
        default: AXIOM,
      },
    })
    expect(wrapper.text()).toEqual(AXIOM)
  })
})
