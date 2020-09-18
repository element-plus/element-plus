import { mount } from '@vue/test-utils'
import DatePicker from '../src/index.vue'

const AXIOM = 'Rem is the best girl'

describe('DatePicker.vue', () => {
  test('render test', () => {
    const wrapper = mount(DatePicker, {
      slots: {
        default: AXIOM,
      },
    })
    expect(wrapper.text()).toEqual(AXIOM)
  })
})
