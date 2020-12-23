import { mount } from '@vue/test-utils'
import Empty from '../src/index.vue'

const AXIOM = 'Rem is the best girl'

describe('Empty.vue', () => {
  test('render test', () => {
    const wrapper = mount(Empty, {
      slots: {
        default: AXIOM,
      },
    })
    expect(wrapper.text()).toEqual(AXIOM)
  })
})
