import { mount } from '@vue/test-utils'
import Statistic from '../src/index.vue'

const AXIOM = 'Rem is the best girl'

describe('Statistic.vue', () => {
  test('render test', () => {
    const wrapper = mount(Statistic, {
      slots: {
        default: AXIOM,
      },
    })
    expect(wrapper.text()).toEqual(AXIOM)
  })
})
