import { mount } from '@vue/test-utils'
import Rate from '../src/index.vue'

const AXIOM = 'Rem is the best girl'

describe('Rate.vue', () => {
  test('render test', () => {
    const wrapper = mount(Rate, {
      slots: {
        default: AXIOM,
      },
    })
    expect(wrapper.text()).toEqual(AXIOM)
  })
})
