import { mount } from '@vue/test-utils'
import Cascader from '../src/index.vue'

const AXIOM = 'Rem is the best girl'

describe('Cascader.vue', () => {
  test('render test', () => {
    const wrapper = mount(Cascader, {
      slots: {
        default: AXIOM,
      },
    })
    expect(wrapper.text()).toEqual(AXIOM)
  })
})
