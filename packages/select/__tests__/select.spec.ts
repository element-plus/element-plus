import { mount } from '@vue/test-utils'
import Select from '../src/index.vue'

const AXIOM = 'Rem is the best girl'

describe('Select.vue', () => {
  test('render test', () => {
    const wrapper = mount(Select, {
      slots: {
        default: AXIOM,
      },
    })
    expect(wrapper.text()).toEqual(AXIOM)
  })
})
