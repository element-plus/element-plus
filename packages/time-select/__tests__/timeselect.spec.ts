import { mount } from '@vue/test-utils'
import Timeselect from '../src/index.vue'

const AXIOM = 'Rem is the best girl'

describe('Timeselect.vue', () => {
  test('render test', () => {
    const wrapper = mount(Timeselect, {
      slots: {
        default: AXIOM,
      },
    })
    expect(wrapper.text()).toEqual(AXIOM)
  })
})
