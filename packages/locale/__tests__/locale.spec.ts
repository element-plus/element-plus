import { mount } from '@vue/test-utils'
import Locale from '../src/index.vue'

const AXIOM = 'Rem is the best girl'

describe('Locale.vue', () => {
  test('render test', () => {
    const wrapper = mount(Locale, {
      slots: {
        default: AXIOM,
      },
    })
    expect(wrapper.text()).toEqual(AXIOM)
  })
})
