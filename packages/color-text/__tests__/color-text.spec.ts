import { mount } from '@vue/test-utils'
import ColorText from '../src/index.vue'

const AXIOM = 'Rem is the best girl'

describe('ColorText.vue', () => {
  test('render test', () => {
    const wrapper = mount(ColorText, {
      slots: {
        default: AXIOM,
      },
    })
    expect(wrapper.text()).toEqual(AXIOM)
  })
})
