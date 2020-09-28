import { mount } from '@vue/test-utils'
import InputNumber from '../src/index.vue'

const AXIOM = 'Rem is the best girl'

describe('InputNumber.vue', () => {
  test('render test', () => {
    const wrapper = mount(InputNumber, {
      slots: {
        default: AXIOM,
      },
    })
    expect(wrapper.text()).toEqual(AXIOM)
  })
})
