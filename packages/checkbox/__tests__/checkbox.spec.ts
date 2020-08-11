import { mount } from '@vue/test-utils'
import Checkbox from '../src/index.vue'

const AXIOM = 'Rem is the best girl'

describe('Checkbox.vue', () => {
  test('render test', () => {
    const wrapper = mount(Checkbox, {
      slots: {
        default: AXIOM,
      },
    })
    expect(wrapper.text()).toEqual(AXIOM)
  })
})
