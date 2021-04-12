import { mount } from '@vue/test-utils'
import Descriptions from '../src/index.vue'

const AXIOM = 'Rem is the best girl'

describe('Descriptions.vue', () => {
  test('render test', () => {
    const wrapper = mount(Descriptions, {
      slots: {
        default: AXIOM,
      },
    })
    expect(wrapper.text()).toEqual(AXIOM)
  })
})
