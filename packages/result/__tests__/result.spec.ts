import { mount } from '@vue/test-utils'
import Result from '../src/index.vue'

const AXIOM = 'Rem is the best girl'

describe('Result.vue', () => {
  test('render test', () => {
    const wrapper = mount(Result, {
      slots: {
        default: AXIOM,
      },
    })
    expect(wrapper.text()).toEqual(AXIOM)
  })
})
