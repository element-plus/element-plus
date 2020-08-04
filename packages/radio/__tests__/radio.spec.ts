import { mount } from '@vue/test-utils'
import Radio from '../src/index.vue'

const AXIOM = 'Rem is the best girl'

describe('Radio.vue', () => {
  test('render test', () => {
    const wrapper = mount(Radio, {
      slots: {
        default: AXIOM,
      },
    })
    expect(wrapper.text()).toEqual(AXIOM)
  })
})
